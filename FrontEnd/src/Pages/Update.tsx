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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function Update() {
  return (
    <div className="container mx-auto mt-4 p-4 lg:p-0">
      <div className="my-4">
        <Link to="/">
          <Button>Back</Button>
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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="product">Product</Label>
                <Input
                  id="product"
                  type="text"
                  placeholder="Product Name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="number">Price</Label>
                </div>
                <div className="flex gap-2 items-center">
                  <Input id="number" type="number" className="w-2/3" required />
                  <span>MMK</span>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="number">Stock</Label>
                </div>

                <Input id="number" type="number" className="w-1/3" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Update
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
