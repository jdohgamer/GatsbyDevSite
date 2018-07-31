import React from "react";
import logo from "../assets/Images/me.png";
import gh from "../assets/Images/gh.png";
import gatsby from "../assets/Images/gatsby.png";
import js from "../assets/Images/js.png";
import java from "../assets/Images/java.png";
import react from "../assets/Images/react.png";
import unity from "../assets/Images/unity.png";
import android from "../assets/Images/android.png";
import gh96 from "../assets/Images/gh96.png";
import gatsby96 from "../assets/Images/gatsby96.png";
import js96 from "../assets/Images/js96.png";
import java96 from "../assets/Images/java96.png";
import react96 from "../assets/Images/react96.png";
import unity96 from "../assets/Images/unity96.png";
import android96 from "../assets/Images/android96.png";

export default ({ data }) => (
  <div
    style={{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <h1 style={{ textAlign: "center" }}>Hello, I'm Jarred!</h1>
    <img
      style={{
        height: "15%",
        width: "15%",
        borderRadius: "50%"
      }}
      src={logo}
    />
    <p
      style={{
        fontWeight: "bold",
        fontSize: 30,
        paddingTop: 30,
        textAlign: "center"
      }}
    >
      Mobile && Web && Game developer currently absorbing knowledge pertaining
      to the following:
    </p>

    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
      }}
    >
      <img
        style={{
          paddingTop: "5px",
          paddingRight: "25px"
        }}
        src={gh96}
      />
      <img
        style={{
          paddingTop: "5px",
          paddingLeft: "25px"
        }}
        src={android96}
      />
      <img
        style={{
          paddingTop: "5px",
          paddingLeft: "25px"
        }}
        src={java96}
      />
      <img
        style={{
          paddingTop: "5px",
          paddingLeft: "25px"
        }}
        src={js96}
      />
      <img
        style={{
          paddingTop: "5px",
          paddingLeft: "25px"
        }}
        src={react96}
      />
      <img
        style={{
          paddingTop: "5px",
          paddingLeft: "25px"
        }}
        src={unity96}
      />
    </div>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
