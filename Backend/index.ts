import express from "express";
import { PrismaClient } from "@prisma/client";
import { log } from "console";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const prisma = new PrismaClient();
app.use(cors({ origin: "http://localhost:8484" }));
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 4000;

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
  } catch (e) {
    log(e + "cannot create product");
  }
});

// //Get all users
// app.get("/productList", async (req, res) => {
//   try {
//     const list = await prisma.product.findMany();
//     res.status(200).json(list);
//   } catch (e) {
//     log(e + "cannot get user list");
//   }
// });

// //delete user
// app.delete("/product/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await prisma.product.delete({
//       where: { id: Number(id) },
//     });
//     res.status(200).json("deleted Successfully");
//   } catch (e) {
//     log(e + "cannot delete user");
//   }
// });

// //update user
// app.put("/product/update/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name, price, stock } = req.body;
//   try {
//     const product = await prisma.product.update({
//       where: { id: Number(id) },
//       data: { name, price, stock },
//     });
//     res.status(200).json("updated successfully");
//   } catch (error) {
//     log(error + "cannot update user");
//   }
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
