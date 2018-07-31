import React from "react";
import Link from "gatsby-link";
import { css } from "glamor";

const linkStyle = css({
  fontSize: "175",
  fontWeight: "bolder",
  color: "green",
  ":hover": {
    color: "purple"
  },

  paddingLeft: `10`
});

export default () => {
  return (
    <div style={{ textAlign: "center" }}>
      <a
        href="https://github.com/jdohgamer"
        style={{ textAlign: "center" }}
        className={linkStyle}
      >
        GITHUB PORTAL
      </a>
    </div>
  );
};
