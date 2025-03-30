const express = require("express");
const router = express.Router();

router.use("/",(req, res)=>{
    res.status(404).send('<html><body><h1>Page Not Found</h1></body></html>')
})

module.exports = router