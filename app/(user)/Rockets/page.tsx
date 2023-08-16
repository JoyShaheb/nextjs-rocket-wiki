import React from "react";
import { CardOne } from "@/components/Cards/index";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { IRocketResponse } from "@/types/interface";

const Rockets = async () => {
  const rocketData: IRocketResponse[] = await fetch(
    `${ROCKET_WIKI_BASE_URL}/rockets`
  )
    .then((res) => res.json())
    .catch((err) => {
      throw new Error("Error fetching data from API");
    });

  return (
    <>
      <div className="mb-4">
        <h1 className={`text-3xl font-semibold ${gradientTextStyles}`}>
          All Rockets
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 justify-center">
        {rocketData?.map((item: IRocketResponse) => (
          <CardOne
            {...item}
            key={item?.id}
            image={item?.flickr_images[0]}
            tag={item?.active ? "Active" : "Inactive"}
            page="Rockets"
          />
        ))}
      </div>
    </>
  );
};

export default Rockets;
