import React from "react";
import { siteConfig } from "@/config/site";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const getIcon = (name: string) => {
  switch (name) {
    case "youtube":
      return (
        <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl" />
      );
    case "linkedin":
      return (
        <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
      );
    case "instagram":
      return (
        <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
      );
    case "github":
      return (
        <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
      );
  }
};

const Links = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      {siteConfig.links.map((e, i) => (
        <Link key={i} href={e.url} target="_blank">
          {getIcon(e.name)}
        </Link>
      ))}
    </div>
  );
};

export default Links;
