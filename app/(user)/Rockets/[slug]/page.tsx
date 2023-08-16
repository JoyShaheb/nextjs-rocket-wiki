import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { IRocketResponse } from "@/types/interface";
import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { TableRow, TableParent } from "@/components/Table/index";

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

      <TableParent>
        <TableRow index={0} data1="height" data2={`${height?.meters} meters`} />
        <TableRow index={1} data1="type" data2={type} />
        <TableRow
          index={0}
          data1="diameter"
          data2={`${diameter?.meters} meters`}
        />
        <TableRow index={1} data1="mass" data2={`${mass?.kg} Kilograms`} />
        <TableRow index={0} data1="country" data2={country} />
        <TableRow index={1} data1="active" data2={`${active}`} />
        <TableRow
          index={0}
          data1="cost_per_launch"
          data2={`$ ${cost_per_launch}`}
        />
        <TableRow index={1} data1="stages" data2={`${stages}`} />
        <TableRow
          index={0}
          data1="success_rate_pct"
          data2={`${success_rate_pct} %`}
        />
        <TableRow index={1} data1="first_flight" data2={first_flight} />
        <TableRow index={0} data1="company" data2={company} />
      </TableParent>
    </div>
  );
};

export default RocketDetailsPage;
