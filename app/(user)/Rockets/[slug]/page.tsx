import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { IRocketResponse } from "@/types/interface";
import Carousel from "@/components/Carousel/Carousel";
import React from "react";

interface IRocketDetailsPage {
  params: {
    slug: string;
  };
}

const RocketDetailsPage = async ({ params: { slug } }: IRocketDetailsPage) => {
  const singleRocketData: IRocketResponse = await fetch(
    `${ROCKET_WIKI_BASE_URL}/rockets/${slug}`
  ).then((res) => res.json());

  return (
    <div>
      sd cdcsdsdcl
      <Carousel images={singleRocketData?.flickr_images} />
    </div>
  );
};

export default RocketDetailsPage;
