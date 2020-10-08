import React from "react"
import IconLink from "./icon_link"
import {Component as GithubSvg} from "../images/github.inline.svg"
import {ReactComponent as TwitterSvg} from "../images/twitter.inline.svg"
import {ReactComponent as LinkedInSvg} from "../images/linked_in.inline.svg"

const iconLinkStyles = {
	   display: `inline-block`,
	   marginRight: `1.5rem`,
	 }

const IconLinkList = () => (
  <div style={{marginBottom: `2rem`}}>
    <IconLink style={iconLinkStyles} uri="https://github.com/atparkweb" iconData={GithubSvg} text="Github" />
    <IconLink style={iconLinkStyles} uri="https://twitter.com/atparkweb2" iconData={TwitterSvg} text="Twitter" />
    <IconLink style={iconLinkStyles} uri="https://www.linkedin.com/in/andrew-park-13874719/" iconData={LinkedInSvg} text="Linked In" />
  </div>
)

export default IconLinkList
