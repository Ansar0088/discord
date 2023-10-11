import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { AdjustmentsVerticalIcon } from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import { MusicalNoteIcon } from "@heroicons/react/20/solid";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";

const Discord = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="bg-[#1E1F22] p-4 h-[calc(100vh-57px)]   w-fit">
          <div className=" w-10 bg-green   rounded-full p-2 bg-[#35373C] hover:bg-green-600 cursor-pointer group">
            <PlusIcon className="w-18 text-green-600 group-hover:text-white" />
          </div>
          <div className=" w-10 bg-green  rounded-full p-2 mt-3  bg-[#35373C] hover:bg-green-600 cursor-pointer group">
            <AdjustmentsVerticalIcon className="w-18 text-green-600 group-hover:text-white" />
          </div>
          <div className=" w-15 bg-green   rounded-full p-2 mt-3  bg-[#35373C] hover:bg-green-600 cursor-pointer group">
            <ArrowDownTrayIcon className="w-18 text-green-600 group-hover:text-white" />
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#2B2D31] border-r  border-r-gray-700 h-[calc(100vh-98px)]   w-64">
         <div>
         <input
            type="text"
            class="bg-[#35373c] text-white px-3 rounded-s-sm p-2 m-2 outline-none"
            placeholder="Friends"
          />
          <div className="text-[#fff] flex justify-between mt-2 m-2">
            <p>ADD FRIEND</p>
            <PlusIcon className="w-7" />
          </div>
         </div>
         <div>
         <div className="flex justify-center gap-2 items-center bg-[#1E1F22] p-2 relative top-[73%]">
            <div>
              <img src="/Assets/mini.png" class="w-10" alt="..." />
            </div>
            <div className="text-center">
              <p className="text-white leading-3 font-[500]">Ansar Ans</p>
              <p className="text-white font-[100]">ansaransari</p>
            </div>
            <div className="flex gap-1">
              <SpeakerXMarkIcon className="w-5 text-white" />
              <MusicalNoteIcon className="w-5 text-white" />
              <Cog8ToothIcon className="w-5 text-white" />
            </div>
          </div>
         </div>
        </div>
        <div className="bg-[#313338] p-5  text-white  w-full">
          <p className="font-[600]">ADD FRIEND</p>
          <p>you can add friend with their discord username</p>
          <div className="flex justify-between items-center mt-5 bg-[#1E1F22] text-gray-500 p-2 rounded-md w-90%">
            <p>you can add friend with their discord username</p>
            <button class="bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Friend Request
            </button>
          </div>
          <hr className="mt-9 text-grey" />
          <div className="flex justify-center  mt-20">
            {" "}
            <img src="/Assets/pen.png" alt="..." />
          </div>
          <p className="text-center">
            Wumpus is waiting on friends. You don’t have to though!
          </p>
        </div>
        <div className="bg-[#2B2D31] w-96 p-2 text-white border-l border-l-gray-700">
          <p className="font-[600]">ACTIVE NOW</p>
          <p>its quiet for now...</p>
        </div>
      </div>
    </>
  );
};

export default Discord;
