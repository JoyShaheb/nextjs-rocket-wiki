import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { textLimit } from "../Text/TextLimit";
import NoImageFound from "../../assets/no-image-available.svg";

interface ICardOneProps {
  name: string;
  image: string;
  description: string;
  tag?: string;
}

const CardOne: FC<ICardOneProps> = ({ name, image, description, tag }) => {
  return (
    <Link
      href="#"
      className="relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      {image ? (
        <Image
          className="rounded-t-lg w-[100%] object-cover h-[170px]"
          src={image}
          alt={name}
          width={200}
          height={100}
        />
      ) : (
        <Image
          className="rounded-t-lg w-[100%] object-cover h-[170px]"
          src={NoImageFound}
          alt={name}
          width={200}
          height={100}
        />
      )}

      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          {textLimit(description, 90)}
        </p>
      </div>
      {tag && (
        <span className="absolute top-[10px] right-0 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
          {tag}
        </span>
      )}
    </Link>
  );
};

export default CardOne;
