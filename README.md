Here’s the updated documentation with the new URLs and improved structure for clarity:

---

# **ShopHive Backend**

Welcome to the **ShopHive Backend**, the server-side of the **ShopHive** e-commerce platform. Built with **Node.js**, **Express**, and **MongoDB**, it provides robust features like product management, user authentication, and order processing.

---

## **Features**

- **User Authentication**: Secure login and registration with JWT.
- **Product Management**: Add, update, delete, and fetch product details.
- **Category Management**: Organize and filter products by categories.
- **Cart Management**: Manage user cart items and quantities.
- **Order Processing**: Place and track orders with payment integrations.
- **Address Management**: Handle user shipping addresses.
- **Reviews**: Allow users to review and rate products.
- **Pagination & Sorting**: Efficiently fetch data with filters and sorting.

---

## **API Endpoints**

### **Authentication**
- **Register**: `POST /api/auth/register`  
- **Login**: `POST /api/auth/login`  

---

### **Addresses**
- **Add New Address**: `POST /api/shop/address/add`  
- **Fetch All Addresses**: `GET /api/shop/address/get/:userId`  
- **Edit Address**: `PUT /api/shop/address/update/:userId/:addressId`  
- **Delete Address**: `DELETE /api/shop/address/delete/:userId/:addressId`  

---

### **Cart**
- **Add to Cart**: `POST /api/shop/cart/add`  
- **Fetch Cart Items**: `GET /api/shop/cart/get/:userId`  
- **Delete Cart Item**: `DELETE /api/shop/cart/:userId/:productId`  
- **Update Cart Quantity**: `PUT /api/shop/cart/update-cart`  

---

### **Categories**
- **Fetch All Categories**: `GET /api/shop/categories/get`  

---

### **Orders**
- **Create New Order**: `POST /api/shop/order/create`  
- **Capture Payment**: `POST /api/shop/order/capture`  
- **Get Orders by User**: `GET /api/shop/order/list/:userId`  
- **Get Order Details**: `GET /api/shop/order/details/:id`  

---

### **Products**
- **Fetch All Products**: `GET /api/shop/products/get?{queryParams}`  
  *(Query parameters include filters for categories, price range, and pagination.)*  
- **Fetch Product Details**: `GET /api/shop/products/get/:id`  

---

### **Reviews**
- **Add Review**: `POST /api/shop/review/add`  
- **Get Reviews**: `GET /api/shop/review/get/:id`  

---

## **Installation Guide**

### **Prerequisites**
- **Node.js** (v16 or later)  
- **MongoDB** (local instance or MongoDB Atlas)

### **Steps to Run Locally**

1. Clone the repository:  
   ```bash
   git clone https://github.com/felixkpt/e-commerce-react-be
   cd e-commerce-react-be
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up environment variables:  
   Create a `.env` file in the root directory and add the following:  
   ```
   MONGO_URI=mongodb://localhost:27017/shophive
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the server:  
   ```bash
   npm start
   ```  
   Navigate to `http://localhost:5000`.

---

## **Technologies Used**
- **Backend Framework**: Express.js  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JWT (JSON Web Tokens)  
- **Environment Variables**: Managed using `dotenv`  

---

## **Future Roadmap**
- **Stripe Integration**: Handle payments securely.  
- **Advanced Filters**: Add price, rating, and stock filters for products.  
- **Admin Dashboard**: Comprehensive product and order management.  
- **Email Notifications**: Send confirmation emails for orders.  

---

## **License**
This project is licensed under the MIT License.

---

## **Author**
**Felix Kiptoo Biwott**  
GitHub: [felixkpt](https://github.com/felixkpt)

---

Feel free to reach out for any collaboration or suggestions! 🚀 