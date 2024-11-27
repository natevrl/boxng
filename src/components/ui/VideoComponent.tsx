import React from 'react'

interface VideoProps {
  src: string,
  w: number,
  h: number,
}

function VideoComponent({src, w, h} : VideoProps) : JSX.Element {
  return (
    <iframe
    width={w}
    height={h}
    src={src}
    title="YouTube video player"
  />
  )
}

export default VideoComponent