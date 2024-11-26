import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ['about us', 'pricing', 'customers', 'solutions']

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-primary">
            <NavbarContent>

                <NavbarBrand>
                    <img src="/logo.png" alt="" className="w-24" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="center">
                {
                    menuItems.map((menuItem, i) => (
                        <NavbarItem key={i}>
                            <Link className="text-white capitalize" href="#">
                                {menuItem}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden xs:flex">
                    <button className="primary-button">Book a Demo</button>
                </NavbarItem>

                <NavbarItem className="hidden xs:flex">
                    <button className="secondary-button">Contact Us</button>
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
            </NavbarContent>

            <NavbarMenu className="bg-primary-900
            ">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-white"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarContent className="items-start mt-5">
                    <NavbarItem className="block xs:hidden">
                        <button className="primary-button">Book a Demo</button>
                    </NavbarItem>

                    <NavbarItem className="block xs:hidden">
                        <button className="secondary-button">Contact Us</button>
                    </NavbarItem>
                </NavbarContent>
            </NavbarMenu>
        </Navbar>
    );
}
