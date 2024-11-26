import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Buttons from "../Buttons";
import Logo from "/Logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavbarArea = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkList = [
    { href: "/about", label: "About us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/customers", label: "Customers" },
    { href: "/solutions", label: "Solutions" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      shouldHideOnScroll
      className="bg-jungleGreen border-[#183A40]"
      maxWidth="xl"
    >
      <NavbarBrand>
        <NavLink to={"/"}>
          <img src={Logo} alt="" />
        </NavLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {linkList.map(({ href, label }, i) => (
          <NavbarItem key={i}>
            <NavLink to={href}>
              <p className="font-workSans text-base leading-6 text-white ">
                {label}
              </p>
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="sm:flex hidden" justify="end">
        <Buttons variant={"solid"} className="text-[14px]">
          Book a Demo
        </Buttons>
        <Buttons
          className="bg-transparent text-white text-[14px]"
          variant={"bordered"}
        >
          Contacts us
        </Buttons>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white mx-5"
        />
      </NavbarContent>

      {/* menu */}
      <NavbarMenu className="bg-jungleGreen">
        {linkList.map(({ href, label }, i) => (
          <NavbarMenuItem key={i} href={href}>
            <NavLink to={href}>
              <p className="font-workSans text-base leading-6 text-white">
                {label}
              </p>
            </NavLink>
          </NavbarMenuItem>
        ))}
        <NavbarItem className="flex justify-start gap-6">
          <Buttons variant={"solid"} className="text-[14px]">
            Book a Demo
          </Buttons>
          <Buttons
            className="bg-transparent text-white text-[14px]"
            variant={"bordered"}
          >
            Contacts us
          </Buttons>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarArea;
