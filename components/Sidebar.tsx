import React, { Fragment } from "react";
import { MenuItem } from "./MenuItem";
import {
  FolderIcon,
  HomeIcon,
  SquareIcon,
  StartIcon,
  UserIcon,
} from "@/assets/icons";

const MenuItems = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Sales",
    path: "/Sales",
    icon: <StartIcon />,
  },
  {
    name: "Providers",
    path: "/",
    icon: <SquareIcon />,
  },
  {
    name: "Clients",
    path: "/",
    icon: <FolderIcon />,
  },
  {
    name: "Profile",
    path: "/",
    icon: <UserIcon />,
  },
];

export const Sidebar = () => {
  return (
    <Fragment>
      <div className="bg-primary w-full flex justify-between md:hidden z-50   fixed bottom-0 h-20">
        {MenuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            path={`/Dashboard/${item.path}`}
            text={item.name}
          />
        ))}
      </div>
      <aside className="pt-10 hidden md:block min-h-screen h-full bg-primary w-20">
        {MenuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            path={`/Dashboard/${item.path}`}
            text={item.name}
          />
        ))}
      </aside>
    </Fragment>
  );
};
