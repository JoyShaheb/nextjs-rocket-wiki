import React from "react";
import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { CardOne } from "@/components/Cards";
import { ILandingPadsResponse } from "@/types/interface";

const page = async () => {
  const fetchLandingPads: ILandingPadsResponse[] = await fetch(
    `${ROCKET_WIKI_BASE_URL}/landpads`
  )
    .then((res) => res.json())
    .catch((err) => {
      throw new Error("Error fetching data from API");
    });

  return (
    <div>
      <div className="mb-4">
        <h1 className={`text-3xl font-semibold ${gradientTextStyles}`}>
          All Landing Pads
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 justify-center">
        {fetchLandingPads?.map((item: ILandingPadsResponse) => (
          <CardOne
            key={item?.id}
            image={item?.images?.large[0] as string}
            name={item?.name as string}
            description={item?.details as string}
            tag={item?.type as string}
            id={item?.id}
            page="LandingPads"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
