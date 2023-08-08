import React from "react";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { ILandingPadsResponse } from "@/types/interface";
import Image from "next/image";
import NoImageFound from "../../../../assets/no-image-available.svg";
import TableRow from "@/components/Table/TableRow";

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
    latitude,
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
            <TableRow data1="Full Name" data2={full_name as string} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandingPadDetails;
