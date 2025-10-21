"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const console_1 = require("console");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)({ origin: "http://localhost:8484" }));
app.use(express_1.default.json());
dotenv_1.default.config();
const port = process.env.PORT || 4000;
//Port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//Home Page
app.get("/", (req, res) => {
    res.send("Hello Express ");
});
//Create product
app.post("/create", async (req, res) => {
    const { name, price, stock } = req.body;
    try {
        const product = await prisma.product.create({
            data: {
                name,
                price,
                stock,
            },
        });
        res.status(201).json(product);
    }
    catch (e) {
        res.json(e + "cannot create product");
    }
});
// //Get all products
app.get("/productList", async (req, res) => {
    try {
        const list = await prisma.product.findMany();
        res.status(200).json(list);
    }
    catch (e) {
        res.json(e + "cannot get user list");
    }
});
// //delete user
app.delete("/product/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await prisma.product.delete({
            where: { id: Number(id) },
        });
        res.status(200).json("deleted Successfully");
    }
    catch (e) {
        (0, console_1.log)(e + "cannot delete user");
    }
});
//get update product using id
app.get("/product/:id", async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
        where: { id: Number(id) },
    });
    res.json(product);
});
// //update user
app.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price, stock } = req.body;
    try {
        const product = await prisma.product.update({
            where: { id: Number(id) },
            data: { name, price, stock },
        });
        res.status(200).json("updated successfully");
    }
    catch (error) {
        (0, console_1.log)(error + "cannot update user");
    }
});
