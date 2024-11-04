import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div className="h-8 w-8 relative">
              <Image src={siteConfig.icon} className="rounded-xl" />
            </div>
            <p className="font-bold text-inherit">{siteConfig.title}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <Link
          href="https://docs.google.com/document/d/1kGPC5AgCv93KYQnjqGTialauNItIJ1j0ohscnGqKaaQ/edit?usp=sharing"
          className="md:block hidden"
          target="_blank"
        >
          <Button variant="ghost">Download CV</Button>
        </Link>

        <Link
          href="https://docs.google.com/document/d/1kGPC5AgCv93KYQnjqGTialauNItIJ1j0ohscnGqKaaQ/edit?usp=sharing"
          className="md:hidden block"
          target="_blank"
        >
          <Button isIconOnly variant="ghost">
            <FontAwesomeIcon icon={faDownload} />
          </Button>
        </Link>
      </NavbarContent>
    </NextUINavbar>
  );
};
