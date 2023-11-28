import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://wgh136.github.io/", // replace this with your deployed domain
  author: "wgh136",
  desc: "A personal blog website.",
  title: "wgh136",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["zh"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/wgh136",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:nyne19710@proton.me",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/gcufjf",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
];
