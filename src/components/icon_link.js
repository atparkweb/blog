import React from "react"
import Icon from "./icon"

const IconLink = (props) => {
  return (
    <a href={props.uri} style={{...props.style}} >
      <Icon style={{backgroundImage: `url("data:image/svg+xml;utf8,${props.iconData}")`}} alt={props.text} />
      {props.text}
    </a>
  )
}

export default IconLink;
