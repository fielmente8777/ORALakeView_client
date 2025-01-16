import SEOVideo from "./SEOVideo";
import YoutubePlayer from "./YoutubePlayer";

interface VideocardProps {
  src: string;
  href: string;
  label: string;
  thumbnail: string;
}

const Videocard: React.FC<VideocardProps> = ({
  src,
  href,
  label,
  thumbnail,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-md:hidden block relative w-full max-md:aspect-[4/1.5] aspect-[4/1.6] rounded-sm overflow-hidden">
        <YoutubePlayer
          poster={thumbnail}
          url={src}
          youtubeUrl={href}
          title={label}
        />
      </div>

      <div className="hidden max-md:block overflow-hidden">
        <SEOVideo src={src} poster={thumbnail} />
      </div>
      
    </div>
  );
};

export default Videocard;
