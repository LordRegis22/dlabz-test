"use client";

export function Video({ src, thumbnail }: { src: string; thumbnail: string }) {
  return (
    <div>
      <video
        width="100%"
        height="100%"
        loop
        muted
        autoPlay
        preload="none"
        playsInline
        poster={thumbnail}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
