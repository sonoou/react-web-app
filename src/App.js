import ReactDOM from "react-dom/client";
import Navbar from "./component/Navbar";
import { ProductCard } from "./component/ProductCard";

const App = () => (
  <div>
    <Navbar />
    <ProductCard />
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
