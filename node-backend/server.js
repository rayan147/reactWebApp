const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const sendEmail = require("./utils/sendEmail");
const errorHandler = require("./middleware/error");
const fileUpload = require("express-fileupload");
const proxy = require("http-proxy-middleware");
const connToMongoDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connToMongoDB();
// Route files
const contact = require("./routes/contact");
const soak = require("./routes/soak");
const flavor = require("./routes/flavor");
const filling = require("./routes/filling");
const message = require("./routes/message");
const contactQuote = require("./routes/contactQuote");

const app = express();

// Body parser
app.use(express.json({ limit: "50mb" }));

//Proxy
module.exports = function apiProxy(app) {
  app.use(
    proxy({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );
};

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// fileUpload
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));
// Upload Endpoint

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Mount routers
app.use("/api/v1/contact", contact);
app.use("/api/v1/soak", soak);
app.use("/api/v1/flavor", flavor);
app.use("/api/v1/filling", filling);
app.use("/api/v1/message", message);
app.use("/api/v1/quotes", contactQuote);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
