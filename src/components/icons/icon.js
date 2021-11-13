import React from "react";
import {
  IconGitHub,
  IconLinkedIn,
  IconOpenSea,
  IconTwitch,
  IconTwitter,
} from "../icons";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "LinkedIn":
      return <IconLinkedIn />;
    case "Twitch":
      return <IconTwitch />;
    case "Twitter":
      return <IconTwitter />;
    case "OpenSea":
      return <IconOpenSea />;
    default:
      return;
  }
};

export default Icon;
