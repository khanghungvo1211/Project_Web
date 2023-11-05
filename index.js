// Day la server
const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express(); 
const dotenv = require("dotenv").config();
const PORT = 5002;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRoute = require('./routes/blogRoute');
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
dbConnect();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()),
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
  });