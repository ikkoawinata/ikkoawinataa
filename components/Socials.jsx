"use client";
import { IconName } from "react-icons/ai";
import { LuFigma } from "react-icons/lu";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiBehanceFill,
  RiInstagramFill,
  RiMailFill,
  RiMediumFill,
  RiTiktokFill,
} from "react-icons/ri";

import Link from "next/link";

// import React from 'react'

const icons = [
  // {
  //   path: "/",
  //   name: <LuFigma />,
  // },
  {
    path: "https://www.youtube.com/@ikkoawinata5339",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/ikko-cahya-awinata-182926253/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/ikkoawinata",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.behance.net/gallery/198231291/Sengoku-Basara-(UI-Design)",
    name: <RiBehanceFill />,
  },
  {
    path: "https://www.instagram.com/ikkoc_awinata/",
    name: <RiInstagramFill />,
  },
  {
    path: "mailto:ikkocahyaawinata@gmail.com",
    name: <RiMailFill />,
  },
  {
    path: "https://medium.com/@ikkocahyaawinata",
    name: <RiMediumFill />,
  },
  {
    path: "https://www.tiktok.com/foryou?lang=en-GB",
    name: <RiTiktokFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
