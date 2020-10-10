import PropTypes from "prop-types";
import React from "react";
import { css } from "astroturf";
import { Link } from "gatsby";

import Logo from "./logo";
import SocialNav from "./social_nav";
import SiteNav from "./site_nav";

const styles = css`
.header {
  margin: 0 auto 3rem auto;
  max-width: 960px;
  border-bottom: 1px solid rgb(221, 221, 221);

  .logo {
    display: block;
    flex: 0 0 10%;
    text-decoration: none;
  }

  .site-nav {
    flex: 4 0 50%;
  }

  .social-nav {
    flex: 0 0 25%;
    align-self: flex-end;
  }
}
`;

const Header = () => (
  <header className={styles.header}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
      }}>
      <Link className={styles.logo} to="/">
        <Logo />
      </Link>
      <SiteNav className={styles.siteNav} />
      <SocialNav className={styles.socialNav} />
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
