import React from "react";
import Link from "gatsby-link";
import twit from "../assets/images/twit.png";
import linkedin from "../assets/images/ln.png";
import gh from "../assets/images/gh48.png";

const iconStyle = {
  paddingRight: "20",
  paddingLeft: "20"
};

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <a href="https://drive.google.com/open?id=0B35939x2RnLXcGNuaVY0U1VyaFM0NENfY2xqRnItZVpXU29R">
            Resume
          </a>
        </li>
        <li>
          <a href="https://github.com/jdohgamer">GitHub</a>
        </li>
      </ul>

      <div
        style={{
          paddingTop: 20
        }}
      />

      <div>
        <i
          style={{
            fontWeight: "Bold",
            fontSize: 20
          }}
        >
          Check Me Out On:
        </i>
      </div>

      <div
        style={{
          paddingTop: 20
        }}
      />

      <a
        style={iconStyle}
        className="icon"
        href="https://linkedin.com//in/jdohdev"
      >
        <img src={linkedin} />
      </a>

      <a style={iconStyle} className="icon" href="https://twitter.com/jdohdev">
        <img src={twit} />
      </a>

      <a style={iconStyle} className="icon" href="https://github.com/jdohgamer">
        <img src={gh} />
      </a>

      {/* <div>
        <ul
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center"
          }}
        >
          <li>
            <a
              className="icon"
              onClick={props.onToggleMenu}
              href="twitter.com/jdohdev"
            >
              <img src={linkedin} />
            </a>
          </li>
          <li>
            <a
              className="icon"
              onClick={props.onToggleMenu}
              href="twitter.com/jdohdev"
            >
              <img src={twit} />
            </a>
          </li>
          <li>
            <a
              className="icon"
              onClick={props.onToggleMenu}
              href="twitter.com/jdohdev"
            >
              <img src={gh} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>

    {/* <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </div> */}
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: React.PropTypes.func
};

export default Menu;
