"use client";
import { usePaths } from "@/hooks/user-nav";
import { LogoSmall } from "@/svgs/logo-small";
import React from "react";
import Items from "./items";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();
  return (
    <div className="border-[1px] w-[250px] radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop-blur-3xl">
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <LogoSmall />
        </div>
        <div className="flex flex-col py-3">
            <Items/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
