const express = require('express');
const app = express();
const UserRoute = require('./routes/UserRoute');
const AddressRoute = require('./routes/AddressRoutes');
const BrandRoute = require('./routes/BrandRoutes');
const CategoryRoute = require('./routes/CategoryRoute');
const ProductRoute = require('./routes/ProductRoute');
const HeaderRoute = require('./routes/HeaderRoute');
const FooterRoute = require('./routes/FooterRoute');
const ProductImageRoute = require('./routes/ProductImageRoute');
const OrderRoute = require('./routes/OrderRoutes');
const path = require('path');

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/users', UserRoute);
app.use('/address', AddressRoute);
app.use('/brands', BrandRoute);
app.use('/categories', CategoryRoute);
app.use('/products', ProductRoute);
app.use('/header', HeaderRoute);
app.use('/footer', FooterRoute);
app.use('/product_image', ProductImageRoute);
app.use('/order', OrderRoute);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
