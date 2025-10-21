import { Button } from "@/components/ui/button";
import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: "", price: 0, stock: 0 });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => res.error);
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/update/${id}`, product);

      navigate("/"); // redirect to home
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container mx-auto mt-4 p-4 lg:p-0">
      <div className="my-4">
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </div>
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>Update Product</CardTitle>
          <CardDescription>Enter Product | Price | Stock</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="product">Product</Label>
                <Input
                  id="product"
                  type="text"
                  placeholder="Product Name"
                  value={product.name}
                  required
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                />
              </div>
              {/* {product.name} */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="number">Price</Label>
                </div>
                <div className="flex gap-2 items-center">
                  <Input
                    id="number"
                    type="number"
                    className="w-2/3"
                    value={product.price}
                    required
                    onChange={(e) =>
                      setProduct({ ...product, price: Number(e.target.value) })
                    }
                  />
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
                  value={product.stock}
                  onChange={(e) =>
                    setProduct({ ...product, stock: Number(e.target.value) })
                  }
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full mt-4"
              onClick={handleUpdate}
            >
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
