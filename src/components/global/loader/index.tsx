import { cn } from "@/lib/utils"; // Assuming this is your utility library for classnames
import React from "react";
import {Spinner} from "./spinner";
 // Import your Spinner component (adjust path if needed)

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

const Loader = ({ children, state, className, color }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color = {color}/>
      {children} {/* Render children inside the loader */}
    </div>
  ) : (
    children
  ); // Return null when state is false to avoid rendering anything
};

export default Loader;
