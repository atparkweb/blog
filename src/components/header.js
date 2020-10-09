import PropTypes from "prop-types";
import React from "react";
import { css } from "astroturf";

import Logo from "./logo";
import SocialNav from "./social_nav";

const styles = css`
.header {
  margin: 0 auto 3rem auto;
  max-width: 960px;
  border-bottom: 1px solid rgb(221, 221, 221);
}
`;

const Header = () => (
  <header className={styles.header}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
      <Logo />
      <SocialNav />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
