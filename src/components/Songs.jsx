import React from "react";
import Unavailable from "./Unavailable";
import { SONG_DATA } from "../Data/data";
import Button from "./Button";

const Songs = () => {
  return (
    <div className="md:w-[30%] p-3 mb-2 bg-[#898a86]">
      <div className="text-center mb-3">
        <h1>Trending songs</h1>
      </div>
      <div className="">
        {SONG_DATA.map((song, index) => {
          return <Unavailable key={index} item={song} />;
        })}
      </div>
      <div className="flex justify-center">
        <Button text={"View more"} />
      </div>
    </div>
  );
};

export default Songs;
