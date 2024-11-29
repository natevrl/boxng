import React from 'react'

interface VideoProps {
  src: string,
  w: number,
  h: number,
}

function VideoComponent({src, w, h} : VideoProps) : JSX.Element {
  return (
    <iframe
    className={`w-full max-w-screen-md overflow-hidden aspect-video`}
    src={src}
    title="YouTube video player"
  />
  )
}

export default VideoComponent