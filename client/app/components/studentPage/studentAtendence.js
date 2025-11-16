"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";

const studentAtendence = () => {
  return (
    <div className="  mt-4 rounded-full border bg-[#b24dff] border-[#b24dff] flex  items-center">
      <input
        type="text"
        placeholder="ছাত্রের আইডি নাম্বার দিন"
        className=" focus:outline-none rounded-l-full bg-[#ffffff] md:text-xl text-md p-2 w-full"
      />
      <div className="text-xl w-15 flex justify-center items-center text-white p-1 cursor-pointer">
        <IoSearch size={25} />
      </div>
    </div>
  );
};

export default studentAtendence;
