import React from "react"
import GithubSvg from "../images/github.inline.svg"
import TwitterSvg from "../images/twitter.inline.svg"
//import LinkedInSvg from "../images/linked_in.inline.svg"

import IconLink from "./icon_link"

const SocialNav = () => {
  return (
    <div>
      <IconLink uri="https://github.com/atparkweb" title="Github" icon={GithubSvg} />
      <IconLink uri="https://twitter.com/atparkweb2" title="Twitter" icon={TwitterSvg} />
    </div>
  )
}

export default SocialNav
