import React from "react";
import { Link } from "gatsby";
import { css } from "astroturf";

const styles = css`
.nav-link {
    display: inline-block;
    padding: 0 1em;
    color: inherit;
    text-transform: uppercase;
    text-decoration: none;
    font-family: sans-serif;
}
.active {
    border: 3px rgba(0,0,0,0.1);
    border-top-style: solid;
    border-bottom-style: solid;
    
}
`;

const SiteNav = (props) => {
    return (
        <nav {...props}>
            <Link className={styles.navLink} activeClassName={styles.active} to="/">Home</Link>
            <Link className={styles.navLink} activeClassName={styles.active} to="/about/">About</Link>
        </nav>
    );
};  

export default SiteNav;