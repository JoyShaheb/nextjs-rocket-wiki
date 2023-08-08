import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { IRocketResponse } from "@/types/interface";
import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import { gradientTextStyles } from "@/components/Text/GradientText";
import TableRow from "@/components/Table/TableRow";

interface IRocketDetailsPage {
  params: {
    slug: string;
  };
}

const RocketDetailsPage = async ({ params: { slug } }: IRocketDetailsPage) => {
  const singleRocketData: IRocketResponse = await fetch(
    `${ROCKET_WIKI_BASE_URL}/rockets/${slug}`
  ).then((res) => res.json());

  const {
    name,
    flickr_images,
    type,
    description,
    height,
    diameter,
    mass,
    country,
    active,
    cost_per_launch,
    stages,
    success_rate_pct,
    first_flight,
    company,
    id,
  } = singleRocketData || {};

  return (
    <div className="container mx-auto max-w-6xl mb-10">
      <h1 className={`text-center text-3xl mb-4 ${gradientTextStyles}`}>
        {name}
      </h1>
      <Carousel images={flickr_images} />
      <p className="mt-5 font-normal text-md text-gray-700 dark:text-gray-400">
        {description}
      </p>
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
            <TableRow data1="height" data2={`${height?.meters} meters`} />
            <TableRow data1="type" data2={type} />
            <TableRow data1="diameter" data2={`${diameter?.meters} meters`} />
            <TableRow data1="mass" data2={`${mass?.kg} Kilograms`} />
            <TableRow data1="country" data2={country} />
            <TableRow data1="active" data2={`${active}`} />
            <TableRow data1="cost_per_launch" data2={`$ ${cost_per_launch}`} />
            <TableRow data1="stages" data2={`${stages}`} />
            <TableRow
              data1="success_rate_pct"
              data2={`${success_rate_pct} %`}
            />
            <TableRow data1="first_flight" data2={first_flight} />
            <TableRow data1="company" data2={company} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RocketDetailsPage;
