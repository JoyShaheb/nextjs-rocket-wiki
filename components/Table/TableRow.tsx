import React, { FC } from "react";

interface ITableRowProps {
  data1: string;
  data2: string;
  index: number;
}

const TableRow: FC<ITableRowProps> = ({ data1, data2, index }) => {
  return (
    // bg-white border-b dark:bg-gray-900 dark:border-gray-700
    <tr
      className={`capitalize bg-white border-b dark:bg-gray-${
        index % 2 == 0 ? 800 : 900
      } dark:border-gray-700`}
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data1}
      </th>
      <td className="px-6 py-4">{data2}</td>
    </tr>
  );
};

export default TableRow;
