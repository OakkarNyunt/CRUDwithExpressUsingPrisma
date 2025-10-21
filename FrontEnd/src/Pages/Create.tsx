import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import axios from "axios";
// import { log } from "console";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z as zod } from "zod";

export default function Create() {
  //handle for form
  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  const navigate = useNavigate();

  // create zod schema for validation
  const zodSchema = zod.object({
    //Validation Methods

    name: zod.string().min(1, "Product name is required").max(15),
    price: zod.number().int().positive(),
    stock: zod.number().int().positive(),
  });

  async function formHandler(e: React.FormEvent) {
    e.preventDefault(); // prevent loading

    const parsed = zodSchema.safeParse({
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
    });

    if (!parsed.success) {
      toast.error("something Wrong");
      return;
    }

    try {
      // Data Fetching using API
      await axios.post("http://localhost:4000/create", {
        name: form.name,
        price: Number(form.price),
        stock: Number(form.stock),
      });

      //notify
      toast("product created successfully.");

      //redirect page after creating product
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="container mx-auto mt-4 p-4 lg:p-0">
      <div className="my-4">
        <Link to="/">
          <Button>Back</Button>
          <Toaster />
        </Link>
      </div>
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
          <CardDescription>Enter Product | Price | Stock</CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={formHandler}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="product">Product</Label>
                <Input
                  id="product"
                  type="text"
                  placeholder="Product Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {/* {form.name} */}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="number">Price</Label>
                </div>
                <div className="flex gap-2 items-center">
                  <Input
                    id="number"
                    type="number"
                    className="w-2/3"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                  {/* {form.price} */}
                  <span>MMK</span>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="number">Stock</Label>
                </div>

                <Input
                  id="number"
                  type="number"
                  className="w-1/3"
                  value={form.stock}
                  onChange={(e) => setForm({ ...form, stock: e.target.value })}
                />
              </div>
            </div>
            <Button type="submit" className="w-full my-4">
              Create
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
