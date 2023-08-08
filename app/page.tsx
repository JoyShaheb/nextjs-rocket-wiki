import { gradientTextStyles } from "@/components/Text/GradientText";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[96vh]">
      <h1
        className={`text-3xl text-center font-semibold ${gradientTextStyles} mb-2`}
      >
        Welcome to Rocket Wiki Page
      </h1>
      <div className="text-center">Home page under development</div>
    </div>
  );
};

export default Home;
