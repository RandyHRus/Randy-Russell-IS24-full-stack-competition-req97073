"use strict";
const apiRouter = require("./routes/apiRouter");
const express = require("express");
const app = express();
const port = 3000;
app.use("/api", apiRouter);
module.exports = app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
