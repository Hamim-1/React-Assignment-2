import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


function MainNavbar() {
    const navItems = ['about us', 'pricing', 'customers', 'solutions'];
    return (
        <Navbar className="bg-primary">
            <NavbarBrand>
                <img src="/logo.png" alt="" />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    navItems.map((navItem, i) => (
                        <NavbarItem key={i}>
                            <Link className="text-white capitalize" href="#">
                                {navItem}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            <NavbarContent justify="end" className="hidden xs:block">
                <NavbarItem>
                    <button className="text-black bg-secondary rounded-full px-5 py-2 text-sm font-semibold hover:bg-transparent hover:text-white border-2 border-secondary transition">Book a Demo</button>
                </NavbarItem>
                <NavbarItem>
                    <button className="text-white bg-transparent rounded-full px-5 py-2 text-sm font-semibold hover:bg-secondary hover:text-black border-2 border-secondary transition">Contact Us</button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
export default MainNavbar;