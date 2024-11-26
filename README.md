# ShopHive Backend

Welcome to the **ShopHive Backend**, the server-side of the **ShopHive** e-commerce platform. This backend is built with **Node.js**, **Express**, and **MongoDB** to handle product data, user management, orders, and cart functionality.

---

## Features

- **User Authentication**: Secure login and registration with JWT authentication.
- **Product Management**: Create, update, delete, and retrieve product details.
- **Category Management**: Manage product categories for easy filtering and organization.
- **Cart Management**: Handle the addition and removal of products in the user's cart.
- **Order Processing**: Manage user orders, including payment and status tracking.
- **Pagination & Sorting**: Efficiently fetch products with pagination and sorting.

---

## Video Demo

Check out the live version of the backend (example endpoint):  
Check out a video demo of **ShopHiveBE**: [ShopHive Backend Demo](https://drive.google.com/file/d/s-AXaddd/view)

---

## Installation Guide

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **MongoDB** (locally or use MongoDB Atlas for cloud database)

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/felixkpt/shophive-backend.git
   cd shophive-backend

2. Install dependencies:

bash
Copy code
npm install

3. Set up environment variables:

Create a .env file in the root directory and set the following:
makefile
Copy code
MONGO_URI=mongodb://localhost:27017/shophive
JWT_SECRET=your_jwt_secret_key
PORT=5000

4. Start the server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:5000.

## API Endpoints
Here are some of the main API endpoints for ShopHive Backend:

### Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in and get a JWT token.

### Products
GET /api/products: Get a list of all products (with pagination).
POST /api/products: Add a new product (Admin only).
PUT /api/products/:id: Update a product by ID (Admin only).
DELETE /api/products/:id: Delete a product by ID (Admin only).

### Categories
GET /api/categories: Get a list of all categories.
POST /api/categories: Add a new category (Admin only).

### Cart
GET /api/cart: Get the current user's cart.
POST /api/cart: Add a product to the cart.
PUT /api/cart: Update the cart (e.g., change quantity).
DELETE /api/cart: Remove a product from the cart.

### Orders
POST /api/orders: Place a new order.
GET /api/orders: Get all orders (Admin only).
GET /api/orders/:id: Get order details by ID (Admin only).
PUT /api/orders/:id: Update the order status (Admin only).

## Technologies Used
Backend Framework: Express.js
Database: MongoDB (using Mongoose for schema management)
Authentication: JWT (JSON Web Token)
Middleware: JWT Authentication, Error Handling
Logging: Winston or Morgan (for logging requests)
Environment Variables: dotenv for managing sensitive data

## Running Tests
1. Install the testing dependencies:

bash
Copy code
npm install --save-dev jest supertest
2. Run the tests:

bash
Copy code
npm test

## Future Roadmap
Stripe Integration: Integrate Stripe for handling payments.
Advanced Filtering: Implement advanced product filters (e.g., by price, rating).
Admin Dashboard: Develop a comprehensive dashboard for managing products and orders.
Email Notifications: Implement order confirmation and status change emails.

## Contributing
We welcome contributions to enhance and improve the ShopHive Backend.

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Make your changes and commit:
bash
Copy code
git commit -m "Add feature description"
Push your changes:
bash
Copy code
git push origin feature-name
Open a pull request on GitHub.

## License
This project is licensed under the MIT License.

## Author
Author
Felix Kiptoo Biwott
GitHub: felixkpt

Thank you for exploring ShopHive Backend! Feel free to contribute or reach out for collaborations. 🚀