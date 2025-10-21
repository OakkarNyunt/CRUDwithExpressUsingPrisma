import { BrowserRouter, Link, Route, Routes as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <nav className=" bg-green-500 p-5">Home</nav>
      </Link>
      <Router>
        <Route path="/" Component={Home} />
        <Route path="/create" Component={Create} />
        <Route path="/update/:id" Component={Update} />
      </Router>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;
