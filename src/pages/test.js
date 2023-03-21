import React from "react";
import Head from "next/head";

import { withTooltip } from "react-tippy";

const Header = () => <h2>Header here</h2>;

const HeaderWithTooltip = withTooltip(Header, {
  title: "Welcome to React with tooltip",
});

export default function Home() {
  return (
    <>
      <div>
        <HeaderWithTooltip />
        <p>Some other content here</p>
      </div>
    </>
  );
}
