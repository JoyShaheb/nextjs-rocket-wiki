"use client";
import React from "react";
import Error404 from "@/assets/Error404.svg";
import Image from "next/image";

const error = () => {
  return (
    <div className="flex justify-center items-center h-[96vh]">
      <Image alt="Error 404 page" src={Error404} width={600} height={600} />
    </div>
  );
};

export default error;
