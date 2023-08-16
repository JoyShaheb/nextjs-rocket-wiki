import { gradientTextStyles } from "@/components/Text/GradientText";
import { ROCKET_WIKI_BASE_URL } from "@/types/Constants";
import { ILaunchpadResponse } from "@/types/interface";
import Image from "next/image";
import React from "react";
import NoImageFound from "../../../../assets/no-image-available.svg";
import { TableParent, TableRow } from "@/components/Table";

interface ILaunchPadsDetailsPage {
  params: {
    slug: string;
  };
}

const page = async ({ params: { slug } }: ILaunchPadsDetailsPage) => {
  const singleRocketData: ILaunchpadResponse = await fetch(
    `${ROCKET_WIKI_BASE_URL}/launchpads/${slug}`
  ).then((res) => res.json());

  const {
    name,
    details,
    full_name,
    id,
    images,
    launch_attempts,
    launch_successes,
    launches,
    region,
    rockets,
    status,
    timezone,
    locality,
  } = singleRocketData || {};
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
        <TableRow index={1} data1="Full Name" data2={full_name as string} />
        <TableRow
          index={0}
          data1="Launch Attempts"
          data2={launch_attempts?.toString()}
        />
        <TableRow
          index={1}
          data1="Launch Success"
          data2={launch_successes?.toString()}
        />
        <TableRow
          index={0}
          data1="Launches"
          data2={launches?.length?.toString()}
        />
        <TableRow index={1} data1="Region" data2={region as string} />
        <TableRow index={0} data1="Rockets" data2={rockets?.toString()} />
        <TableRow index={1} data1="Status" data2={status} />
        <TableRow index={0} data1="TimeZone" data2={timezone as string} />
        <TableRow index={1} data1="Locacity" data2={locality as string} />
      </TableParent>
    </div>
  );
};

export default page;
