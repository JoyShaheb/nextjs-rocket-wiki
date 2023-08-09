import { gradientTextStyles } from "@/components/Text/GradientText";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[96vh]">
      <h1
        className={`text-3xl text-center font-semibold ${gradientTextStyles} mb-2`}
      >
        Welcome to Rocket Wiki Page
      </h1>
      <div className="">
        <Link href="/Rockets">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Explore !
            </span>
          </button>
        </Link>
        <Link href="https://github.com/r-spacex/SpaceX-API" target="_blank">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Postman
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
