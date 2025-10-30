import { use, useState } from "react";
import ListItem from "./ListItem";

const Accordian = ({category, open, setOpen }) => {
  const [buttonText, setButtonText] = useState("show");

  return (
    <div className="my-1 p-2 w-64 rounded-md shadow-md border border-gray-200">
      <div className="flex justify-between">
        <h1>{category}</h1>
        <button
          onClick={() => {
            setOpen();
            // open ? setButtonText("show") : setButtonText("hide");
          }}
          className="bg-black text-white rounded-md px-2"
        >
          {buttonText}
        </button>
      </div>
      {open && <ListItem />}
    </div>
  );
};

export default Accordian;
