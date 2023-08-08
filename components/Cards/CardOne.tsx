import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { textLimit } from "../Text/TextLimit";

interface ICardOneProps {
  name: string;
  image: string;
  description: string;
}

const CardOne: FC<ICardOneProps> = ({ name, image, description }) => {
  return (
    <Link
      href="#"
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Image
        className="rounded-t-lg w-[100%] object-cover h-[170px]"
        src={image}
        alt={name}
        width={200}
        height={100}
      />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          {textLimit(description, 90)}
        </p>
      </div>
    </Link>
  );
};

export default CardOne;
