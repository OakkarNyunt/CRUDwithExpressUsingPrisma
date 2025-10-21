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
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container mx-auto mt-4 p-4 lg:p-0">
      <div className="my-4">
        <Link to="create">
          <Button>Create</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  ">
        <Card>
          <CardHeader>
            <CardTitle>Apple</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Button variant="destructive">Delete</Button>
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
            <p>Price: 5000 MMK</p>
            <p>Stock: 50</p>
          </CardContent>
          <CardFooter>
            <Link to="update">
              <Button>Update</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Apple</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Button variant="destructive">Delete</Button>
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
            <p>Price: 5000 MMK</p>
            <p>Stock: 50</p>
          </CardContent>
          <CardFooter>
            <Button>Update</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Home;
