import React from "react";

const Unavailable = ({ item: { title, add } }) => {
  return (
    <div className="flex justify-between mb-2 bg-white p-1 border-slate-400 border-2 rounded-md">
      <p>{title}</p>
      <p className="font-semibold">{add}</p>
    </div>
  );
};

export default Unavailable;
