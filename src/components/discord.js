import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { AdjustmentsVerticalIcon } from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Discord = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-[#1E1F22] p-5 h-screen">
          <div className=" w-10 bg-green border-2  rounded-lg p-2 bg-[#35373C] hover:bg-green-600 cursor-pointer">
            <PlusIcon className="w-18" />
          </div>
          <div className=" w-10 bg-green border-2  rounded-lg p-2 mt-3  bg-[#35373C] hover:bg-green-600 cursor-pointer">
            <AdjustmentsVerticalIcon className="w-18" />
          </div>
          <div className=" w-10 bg-green border-2  rounded-lg p-2 mt-3  bg-[#35373C] hover:bg-green-600 cursor-pointer">
            <ArrowDownTrayIcon className="w-18" />
          </div>
        </div>
        <div className="p-5 bg-[#2B2D31] border-r border-r-gray-700">
          <input
            type="text"
            class="bg-[#35373c] text-white px-3 rounded-lg p-3 outline-none"
            placeholder="Friends"
          />
          <div className="text-[#fff] flex justify-between mt-2">
            <p>ADD FRIEND</p>
            <PlusIcon className="w-7" />
          </div>
        </div>
        <div className="bg-[#313338] p-5 w-6/12 text-white">
          <p className="font-[600]">ADD FRIEND</p>
          <p>you can add friend with their discord username</p>
          <div className="flex justify-between items-center mt-5 bg-[#1E1F22] text-gray-500 p-2 rounded-md w-90%">
            <p>you can add friend with their discord username</p>
            <button class="bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Friend Request
            </button>
          </div>
          <hr className="mt-9 text-grey"/>
          <div className="flex justify-center  mt-20">
            {" "}
            <img src="/Assets/pen.png" alt="..." />
          </div>
          <p className="text-center">Wumpus is waiting on friends. You don’t have to though!</p>
        </div>
        <div className="bg-[#2B2D31] w-96 p-5 text-white border-l border-l-gray-700">
            <p className="font-[600]">ACTIVE NOW</p>
            <p>its quiet for now...</p>
        </div>
      </div>
    </>
  );
};

export default Discord;
