const { createProduct } = require("../../helpers/app");
const { downloadUtil } = require("../../helpers/file-upload");
const Product = require("../../models/Product");

const addProductsFromJson = async (req, res) => {
    const strategy = req.strategy;
    const { products } = req.body;

    try {
        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid request. 'products' must be a non-empty array.",
            });
        }

        const newlyCreatedProducts = [];

        for (const product of products) {
            console.log('Product:', product);

            if (!product.name || !product.images?.[0] || !product.about || product.rating === undefined || product.salePrice === undefined) {
                console.log('Missing required fields in one or more products.');
                continue;
            }

            const existingProduct = await Product.findOne({ title: product.name });
            if (existingProduct) {
                console.log(`Product with title "${product.name}" already exists.`);
                continue;
            }

            const mainImage = product.images[0];
            const imageObj = await downloadUtil(req, mainImage, strategy);

            const stockOptions = [
                { id: "in-stock", label: "In Stock" },
                { id: "out-of-stock", label: "Out of Stock" },
                { id: "pre-order", label: "Pre-order" },
            ];
            const stockStatus = stockOptions[Math.floor(Math.random() * stockOptions.length)].id;
            const totalStock = stockStatus === "in-stock" ? 60 : Math.floor(Math.random() * 1000) + 1;

            const productData = {
                image: imageObj?.url || null,
                title: product.name,
                description: product.about,
                category: product.categories?.[0] || null,
                subcategory: product.categories?.[1] || null,
                brand: null,
                basePrice: product.basePrice || product.salePrice,
                salePrice: product.salePrice,
                totalStock,
                reviewCounts: product.reviewCounts,
                rating: product.rating,
                stockStatus,
            };

            const newlyCreatedProduct = await createProduct(productData);
            newlyCreatedProducts.push(newlyCreatedProduct);
        }

        res.status(201).json({
            success: true,
            data: newlyCreatedProducts,
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: "An error occurred while adding products.",
        });
    }
};

module.exports = { addProductsFromJson };
