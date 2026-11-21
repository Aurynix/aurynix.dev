import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Shown in the fake address bar, e.g. "pulse.aurynix.dev". */
  address?: string;
  priority?: boolean;
  sizes?: string;
  shadow?: "frame" | "card";
};

/** A screenshot inside a simple browser window. */
export function BrowserFrame({
  src,
  width,
  height,
  alt,
  address,
  priority,
  sizes = "(min-width: 1024px) 600px, 100vw",
  shadow = "card",
}: Props) {
  return (
    <div
      className={`overflow-hidden rounded-frame bg-surface ${
        shadow === "frame" ? "shadow-frame" : "shadow-card"
      }`}
    >
      <div className="flex h-8 items-center gap-[7px] bg-frame-bar px-3.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        {address && (
          <span className="mx-auto truncate rounded-md bg-surface px-4 py-0.5 text-xs text-frame-url">
            {address}
          </span>
        )}
      </div>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </div>
  );
}
