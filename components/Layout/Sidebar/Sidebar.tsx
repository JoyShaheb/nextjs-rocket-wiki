"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavLink from "./NavLink";
import {
  HomeIcon,
  XMarkIcon,
  RocketLaunchIcon,
  Bars3Icon as MenuIcon,
} from "@heroicons/react/24/outline";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import GamepadIcon from "@mui/icons-material/Gamepad";
import { RootState, themeSwitch } from "@/app/store";
import { ThemeTypesEnum } from "@/types/enum";
import ThemeSwitch from "@/components/Switch/ThemeSwitch";
import NotesCard from "@/components/Cards/NotesCard";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { gradientTextStyles } from "@/components/Text/GradientText";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const theme = useSelector((state: RootState) => state.system.mode);

  useEffect(() => {
    document.documentElement.classList.toggle(
      ThemeTypesEnum.DARK,
      theme === ThemeTypesEnum.DARK
    );
  }, [theme]);

  const handleChangeTheme = () =>
    dispatch(
      themeSwitch(
        theme === ThemeTypesEnum.LIGHT
          ? ThemeTypesEnum.DARK
          : ThemeTypesEnum.LIGHT
      )
    );

  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="w-7" />
      </button>
      <aside
        id="cta-button-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          !isSidebarOpen && "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button
            data-drawer-target="cta-button-sidebar"
            data-drawer-toggle="cta-button-sidebar"
            aria-controls="cta-button-sidebar"
            type="button"
            onClick={closeSidebar}
            className="inline-flex items-center ml-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Close sidebar</span>
            <XMarkIcon className="w-6" strokeWidth={2} />
          </button>
          <div
            className={`text-center text-2xl font-bold mb-3 ${gradientTextStyles}`}
          >
            Rocket Wiki
          </div>
          <ul className="space-y-2">
            <NavLink
              to="/"
              label="Home"
              isPro={false}
              onClick={closeSidebar}
              Icon={<HomeIcon className="w-6" />}
            />
            <NavLink
              to="/Rockets"
              label="Rockets"
              isPro={false}
              Icon={<RocketLaunchIcon className="w-6" />}
              onClick={closeSidebar}
            />
            <NavLink
              to="/Ships"
              label="Ships"
              isPro={false}
              Icon={<DirectionsBoatFilledOutlinedIcon fontSize="small" />}
              onClick={closeSidebar}
            />
            <NavLink
              to="/LandingPads"
              label="Landing Pads"
              isPro={false}
              Icon={<GamepadIcon fontSize="small" />}
              onClick={closeSidebar}
            />
            <NavLink
              to="/LaunchPads"
              label="Launch Pads"
              isPro={false}
              Icon={<CallMadeOutlinedIcon fontSize="small" />}
              onClick={closeSidebar}
            />
            <ThemeSwitch theme={theme} onClick={handleChangeTheme} />
          </ul>
          <NotesCard label="Note" note="This app was made using NextJS 13" />
          <Link
            href="https://github.com/JoyShaheb/nextjs-rocket-wiki"
            target="_blank"
            className="self-center mt-3"
            title="Github Repository"
          >
            <GitHubIcon fontSize="medium" />
          </Link>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default Sidebar;
