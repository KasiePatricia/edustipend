import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className=" bg-white border-2 border-gray-300 p-2 my-3 rounded-md">
      <nav>
        <ul className="flex items-center justify-end gap-3">
          <li>Contact us</li>
          <li>
            <Button text="Signup" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
