"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";



export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    
      <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>                    {/* to set many sub menus inside it */}
                <Link href={"/"}>                           
                    <MenuItem setActive={setActive} active={active} item="Service"></MenuItem>      {/* MenuItem is wrapper inside Link to provide direct routing, as we don't have any sub menus inside it  */}
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">                 {/* This menu item has many sub items */}
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">Web Development</HoveredLink>                         {/* hoveredLink work same as link  */}
                        <HoveredLink href="/">Interface Design</HoveredLink>
                        <HoveredLink href="/">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>

            </Menu>
        </div>
  );
}
