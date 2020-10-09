import PropTypes from "prop-types";
import React from "react";
import { css } from "astroturf";

import SocialNav from "./social_nav";

const styles = css`
.header {
  margin-bottom: 3rem;
  border-bottom: 1px solid #ddd;
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
