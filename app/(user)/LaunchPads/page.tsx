import React from "react";
import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { ILaunchpadResponse } from "@/types/interface";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { CardOne } from "@/components/Cards";

const page = async () => {
  const LaunchPadsData: ILaunchpadResponse[] = await fetch(
    `${ROCKET_WIKI_BASE_URL}/launchpads`
  ).then((res) => res.json());

  return (
    <div>
      <div className="mb-4">
        <h1 className={`text-3xl font-semibold ${gradientTextStyles}`}>
          All Launch Pads
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 justify-center">
        {LaunchPadsData?.map((item: ILaunchpadResponse) => (
          <CardOne
            key={item?.id}
            image={item?.images?.large[0] as string}
            name={item?.name as string}
            description={item?.details as string}
            tag={item?.status as string}
            id={item?.id}
            page="LaunchPads"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
