export const VideoPlayer = ({ video }) => {
  if (video && video.embed_code) {
    return (
      <div
        className="h-full w-full"
        dangerouslySetInnerHTML={{
          __html: video.embed_code,
        }}
      />
    );
  }

  return null;
};
