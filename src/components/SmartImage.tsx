import { useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Tailwind background class shown behind/instead of the image (graceful fallback). */
  fallbackClassName?: string;
  /** Optional short label shown if the image is missing, e.g. "Bento cake". */
  fallbackLabel?: string;
  loading?: "lazy" | "eager";
};

/**
 * Image with a tasteful CSS fallback colour. If the photo at `src` is missing
 * (e.g. not yet dropped into /public/images/), the soft background + label show
 * instead of a broken-image icon, so the layout never breaks.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  fallbackClassName = "bg-cream-200",
  fallbackLabel,
  loading = "lazy",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${fallbackClassName} ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <span className="font-serif text-sm italic text-cocoa-muted/80">
            {fallbackLabel ?? alt}
          </span>
        </div>
      )}
    </div>
  );
}
