import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProductProps } from "@/Type/product";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  //Get All Products
  useEffect(() => {
    axios
      .get("http://localhost:4000/productList")
      .then((res) => setProducts(res.data))

      .catch((e) => console.log(e));
  }, []);

  //Delete Product
  const deleteHandle = async (id: number) => {
    try {
      await axios.delete(`http://localhost:4000/product/${id}`);

      setProducts(products.filter((item) => item.id !== id));
      // remove from UI instantly
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container mx-auto mt-4 p-4 lg:p-0">
      <div className="my-4">
        <Link to="create">
          <Button>Create</Button>
        </Link>
      </div>
      {products.length === 0 ? (
        <div className="mt-8">
          <p className="text-2xl">There is no Product.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  ">
          {products.map((item: ProductProps) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>
                  <Button
                    variant="destructive"
                    value={item.id}
                    onClick={() => deleteHandle(item.id)}
                  >
                    Delete
                  </Button>
                  {/* {item.id} */}
                </CardAction>
              </CardHeader>
              <CardContent className="space-y-4 font-semibold">
                <div className="">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/04/12/11/37/apple-3313209_1280.jpg"
                    alt=""
                    className="size-30 rounded-2xl"
                  />
                </div>
                <p>Price: {item.price} MMK</p>
                <p>Stock: {item.stock}</p>
              </CardContent>
              <CardFooter>
                <Link to={`update/${item.id}`}>
                  <Button>Update</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
