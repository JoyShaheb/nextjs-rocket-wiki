import React from "react";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { ILandingPadsResponse } from "@/types/interface";
import Image from "next/image";
import NoImageFound from "../../../../assets/no-image-available.svg";
import { TableRow, TableParent } from "@/components/Table/index";

interface ILandingPadDetailsPage {
  params: {
    slug: string;
  };
}

const LandingPadDetails = async ({
  params: { slug },
}: ILandingPadDetailsPage) => {
  const singleRocketData: ILandingPadsResponse = await fetch(
    `${ROCKET_WIKI_BASE_URL}/landpads/${slug}`
  ).then((res) => res.json());

  const {
    id,
    launches,
    status,
    details,
    full_name,
    images,
    landing_attempts,
    landing_successes,
    locality,
    name,
    type,
    region,
  } = singleRocketData || {};

  console.log(images);

  return (
    <div className="container mx-auto max-w-6xl mb-10">
      <h1 className={`text-center text-3xl mb-4 ${gradientTextStyles}`}>
        {name}
      </h1>
      <Image
        src={images?.large[0] ? images?.large[0] : NoImageFound}
        alt={name as string}
        width={1000}
        height={300}
        style={{
          width: "100%",
          height: "600px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <p className="mt-5 font-normal text-md text-gray-700 dark:text-gray-400">
        {details}
      </p>

      <h1 className={`text-center text-3xl my-4 ${gradientTextStyles}`}>
        Details
      </h1>

      <TableParent>
        <TableRow data1="ID" data2={id as string} />
        <TableRow data1="Name" data2={name as string} />
        <TableRow data1="Full Name" data2={full_name as string} />
        <TableRow data1="Status" data2={status as string} />
        <TableRow data1="type" data2={type as string} />
        <TableRow data1="locality" data2={locality as string} />
        <TableRow data1="region" data2={region as string} />
        <TableRow data1="Launches" data2={`${launches?.length}`} />
        <TableRow data1="Landing attempts" data2={`${landing_attempts}`} />
        <TableRow data1="Landing success" data2={`${landing_successes}`} />
      </TableParent>
    </div>
  );
};

export default LandingPadDetails;
