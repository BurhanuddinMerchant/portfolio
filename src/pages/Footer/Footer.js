import React from "react";

export const Footer = ({ data }) => {
  const { name } = data;
  return <footer>Made With ❤️ By {name}</footer>;
};
