import React from "react";
import { css } from "astroturf";

import GithubSvg from "../images/github.inline.svg";
import TwitterSvg from "../images/twitter.inline.svg";
import LinkedInSvg from "../images/linked_in.inline.svg";

import IconLink from "./icon_link";

const styles = css`
.nav {
  display: flex;
  justify-content: flex-end;
}

@media(max-width: 768px) {
  .nav {
    justify-content: center;
  }
}
`

const SocialNav = () => {
  return (
    <nav className={styles.nav}>
      <IconLink uri="https://github.com/atparkweb" title="Github" iconImg={GithubSvg} />
      <IconLink uri="https://twitter.com/atparkweb2" title="Twitter" iconImg={TwitterSvg} />
      <IconLink uri="https://www.linkedin.com/in/andrew-park-13874719/" title="Linked In" iconImg={LinkedInSvg} />
    </nav>
  );
};

export default SocialNav;
