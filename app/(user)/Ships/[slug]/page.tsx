import React from "react";
import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { IShipResponse } from "@/types/interface";
import Image from "next/image";
import NoImageFound from "../../../../assets/no-image-available.svg";
import { gradientTextStyles } from "@/components/Text/GradientText";
import TableRow from "@/components/Table/TableRow";

interface IShipDetailsPage {
  params: {
    slug: string;
  };
}

const ShipDetailsPage = async ({ params: { slug } }: IShipDetailsPage) => {
  const singleRocketData: IShipResponse = await fetch(
    `${ROCKET_WIKI_BASE_URL}/ships/${slug}`
  ).then((res) => res.json());

  const {
    name,
    active,
    roles,
    type,
    status,
    mass_kg,
    year_built,
    home_port,
    image,
    launches,
  } = singleRocketData || {};

  return (
    <div className="container mx-auto max-w-6xl mb-10">
      <h1 className={`text-center text-3xl mb-4 ${gradientTextStyles}`}>
        {name}
      </h1>
      <Image
        src={image ? image : NoImageFound}
        alt={name}
        width={1000}
        height={300}
        style={{
          width: "100%",
          height: "600px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h1 className={`text-center text-3xl my-4 ${gradientTextStyles}`}>
        Details
      </h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Properties
              </th>
              <th scope="col" className="px-6 py-3">
                Values
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow data1="active" data2={`${active}`} />
            <TableRow data1="roles" data2={`${roles.join(", ")}`} />
            <TableRow data1="type" data2={type as string} />
            <TableRow data1="home_port" data2={home_port as string} />
            <TableRow data1="mass_kg" data2={`${mass_kg}`} />
            <TableRow data1="year_built" data2={`${year_built}`} />
            <TableRow data1="home_port" data2={home_port as string} />
            <TableRow data1="launches" data2={`${launches?.length}`} />
            <TableRow data1="status" data2={status as string} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipDetailsPage;
