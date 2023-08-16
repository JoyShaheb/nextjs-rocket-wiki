import React from "react";
import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { IShipResponse } from "@/types/interface";
import Image from "next/image";
import NoImageFound from "../../../../assets/no-image-available.svg";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { TableRow, TableParent } from "@/components/Table/index";

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

      <TableParent>
        <TableRow index={1} data1="active" data2={`${active}`} />
        <TableRow index={0} data1="roles" data2={`${roles.join(", ")}`} />
        <TableRow index={1} data1="type" data2={type as string} />
        <TableRow index={0} data1="home_port" data2={home_port as string} />
        <TableRow index={1} data1="mass_kg" data2={`${mass_kg}`} />
        <TableRow index={0} data1="year_built" data2={`${year_built}`} />
        <TableRow index={1} data1="home_port" data2={home_port as string} />
        <TableRow index={0} data1="launches" data2={`${launches?.length}`} />
        <TableRow index={1} data1="status" data2={status as string} />
      </TableParent>
    </div>
  );
};

export default ShipDetailsPage;
