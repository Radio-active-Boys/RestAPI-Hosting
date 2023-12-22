const express = require("express");
const {getProduct,getProductTesting} = require("../controlles/product.js")
const router = express.Router();

router.route("/").get(getProduct);

router.route("/testing").get(getProductTesting);

module.exports = router;