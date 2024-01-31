"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const countProductLine = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [res] = yield config_1.default.query("SELECT c.customerNumber, COUNT(p.productline) AS TotalProductLineCount FROM customers c INNER JOIN orders o ON c.customerNumber = o.customerNumber INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber INNER JOIN products p ON od.productCode = p.productCode WHERE p.productline = 'Classic Cars' GROUP BY c.customerNumber HAVING TotalProductLineCount > 23");
        return res;
    }
    catch (error) {
        return error;
    }
});
exports.default = {
    countProductLine,
};
