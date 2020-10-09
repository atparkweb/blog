import React from "react"

const IconLink = (props) => {
  return (
    <a href={props.uri} style={{color: `white`, display: `inline-block`, marginRight: `1.5em`, ...props.style}} target="blank">
      <i style={{display: 'block', backgroundImage: `url("data:image/svg+xml;utf8,${props.icon}")`}} alt={props.title}></i>
      {props.title}
    </a>
  )
}

export default IconLink;
