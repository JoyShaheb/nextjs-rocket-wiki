import React from "react";
import { CardOne } from "@/components/Cards/index";
import { gradientTextStyles } from "@/components/Text/GradientText";

const Rockets = async () => {
  const rocketData = await fetch("https://api.spacexdata.com/v4/rockets").then(
    (res) => res.json()
  );
  console.log(rocketData);
  return (
    <>
      <div className="mb-4">
        <h1 className={`text-3xl font-semibold ${gradientTextStyles}`}>
          All Rockets
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-center">
        {rocketData?.map((item: any) => (
          <CardOne {...item} key={item?.id} image={item?.flickr_images[0]} />
        ))}
      </div>
    </>
  );
};

export default Rockets;
