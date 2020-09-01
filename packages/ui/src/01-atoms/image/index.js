import React from "react"

const Image = ({
  src,
  dataSrc,
  dataSrcset,
  sizes = "100vw",
  focusPoint = false,
  alt = "Demo alt-text",
  classes = []
}) => {
  const base64gif =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

  return (
    <span className={`a-img ${classes.join(" ")}`}>
      <img
        data-image="image"
        data-src={dataSrc}
        data-srcset={dataSrcset}
        alt={alt}
        className="a-img__image"
        srcSet={dataSrcset}
        src={src}
        sizes={sizes}
      ></img>
    </span>
  )
}

export default Image
