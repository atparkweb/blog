import React from "react";
import { css } from "astroturf";

const styles = css`
.logo {
    background-color: rgb(30,40,75);
    color: #fff;
    width: 40px;
    height: 40px;
    font-size: 22px;
    font-weight: bold;
    float: left;
    box-shadow: 4px 4px 1px rgba(0,0,0,0.2);
    transform: rotate(45deg);
    border-radius: 13%;
    padding: 5px 0 0 5px;
    margin-top: -5px;

    div {
        transform: rotate(-45deg);
    }
}
`

const Logo = (props) => {
    return (
        <div className={styles.logo}>
            <div>AP</div>
        </div>
    );
};

export default Logo;