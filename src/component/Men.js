import { useState } from "react";
import Accordian from "./Accordian";

const Men = () => {
  const [open, setOpen] = useState(-1);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-5">Filter Options</h1>
      {["Gender", "Price", "Brands"].map((category, index) => {
        return (
        <Accordian
          key={index}
          category={category}
          open={index === open ? true : false}
          setOpen={() => setOpen(index)}
        />
      )
      })}
    </div>
  );
};

export default Men;
