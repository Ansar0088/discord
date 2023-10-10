import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import { InboxArrowDownIcon } from "@heroicons/react/20/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { Bars4Icon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center bg-[#313338] p-2 border-b border-b-gray-700">
          <div className="flex gap-3 ">
            <img src="/Assets/discord.svg" class="w-10" alt="..." />
            <input
              type="text"
              class="bg-[#1E1F22] text-white px-3 rounded-lg"
              placeholder="find and start conversion"
            />
               <h5 className="text-gray-200 hover:bg-gray-500 cursor-pointer rounded-md p-2">Friends</h5>
              <h5 className="text-gray-200 hover:bg-gray-500 cursor-pointer rounded-md p-2">Online</h5>
            <h5 className="text-gray-200 hover:bg-gray-500 cursor-pointer rounded-md p-2">All</h5>
            <h5 className="text-gray-200 hover:bg-gray-500 cursor-pointer rounded-md p-2"> Pending</h5>
            <h5 className=" text-gray-200 hover:bg-gray-500 cursor-pointer rounded-md p-2">Blocked</h5>
            <h5 className="text-green-500 hover:bg-gray-500 cursor-pointer rounded-md p-2">Add friend</h5>
          </div>
         
          <div className="md:flex gap-2 hidden">
            <ChatBubbleLeftRightIcon className="w-8 text-[#DBDEE1]" />
            <InboxArrowDownIcon className="w-8  text-[#DBDEE1]" />
            <QuestionMarkCircleIcon className="w-8 text-green-600" />
          </div>
          <Bars4Icon className="sm:block w-8  md:hidden" />
        </div>
      </nav>
    </>
  );
};
export default Header;
