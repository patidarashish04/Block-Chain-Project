"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const mediaRoutes_1 = __importDefault(require("./routes/mediaRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const errorHandler_1 = require("./middleware/errorHandler");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
const PORT = process.env.PORT;
app.use('/', mediaRoutes_1.default);
app.use(() => {
    throw (0, http_errors_1.default)(404, "route not found");
});
app.use(errorHandler_1.errorHandler);
// app.listen(9000, () =>{
// console.log("server is running on port 9000")
// });
// console.log(DB)
mongoose_1.default
    .connect(config_1.DB)
    .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => {
        console.log(`Running On PORT ${PORT}`);
    });
})
    .catch(() => {
    throw (0, http_errors_1.default)(501, "Unable To Connect DB");
});
