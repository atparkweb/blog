import React from "react";
import { css } from "astroturf";

const styles = css`
.link {
  display: inline-block;
  padding: 0 0.5em;
  color: #fff;
  position: relative;

  .icon {
    display: block;
    height: 24px;
    width: 24px;
  }

  span {
    visibility: hidden;
    position: absolute;
  }
}
`;

const IconLink = (props) => {
  return (
    <a className={styles.link} href={props.uri} target="blank" title={props.title}>
      <i className={styles.icon} style={{backgroundImage: `url("${props.iconImg}")`, backgroundSize: `cover`}} alt={props.title}></i>
      <span>{props.title}</span>
    </a>
  );
};

export default IconLink;
