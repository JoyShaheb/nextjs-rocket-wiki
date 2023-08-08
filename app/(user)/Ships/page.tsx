import React from "react";
import { CardOne } from "@/components/Cards";
import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { IShipResponse } from "@/types/interface";

const page = async () => {
  const shipData: IShipResponse[] = await fetch(
    `${ROCKET_WIKI_BASE_URL}/ships`
  ).then((res) => res.json());

  console.log(shipData);
  return (
    <>
      <div className="mb-4">
        <h1 className={`text-3xl font-semibold ${gradientTextStyles}`}>
          All Ships
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-center">
        {shipData?.map((item: IShipResponse) => (
          <CardOne
            key={item?.id}
            image={item?.image as string}
            name={item?.name}
            description={item?.roles.join(", ")}
            tag={item?.type as string}
            id={item?.id}
            page="Ships"
          />
        ))}
      </div>
    </>
  );
};

export default page;
