import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-yellow-200 border-slate-400 border-2 py-0.5 px-4 rounded-md">
      {text}
    </button>
  );
};

export default Button;
