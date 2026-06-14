import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import mediumZoom from "medium-zoom";
import styles from "./styles.module.css";

// Types
type Status = "done" | "in-progress" | "todo";

interface ToolPageProps {
  title: string;
  version?: string;
  status?: Status;
  description?: string;
  children: ReactNode;
}

interface GifBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

interface ParamsTableProps {
  params: {
    setting: string;
    type?: string;
    default?: string;
    description: string;
  }[];
}

interface ShortcutTableProps {
  shortcuts: {
    key: string;
    action: string;
  }[];
}

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

interface VideoEmbedProps {
  url: string;
  title?: string;
  start?: number; // Start time in seconds
}

interface CalloutProps {
  type?: "tip" | "info" | "warning" | "danger";
  title?: string;
  children: ReactNode;
}

// Subcomponents
const STATUS_CONFIG: Record<Status, { label: string; className: string }> = {
  done: { label: "Documented", className: styles.statusDone },
  "in-progress": { label: "In Progress", className: styles.statusWip },
  todo: { label: "TODO", className: styles.statusTodo },
};

export function StatusBadge({ status }: { status: Status }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span className={`${styles.statusBadge} ${cfg.className}`}>
      {cfg.label}
    </span>
  );
}

export function GifBlock({ src, alt, caption }: GifBlockProps) {
  return (
    <figure className={styles.mediaBlock}>
      {src === "TODO" ? (
        <div className={styles.mediaPlaceholder}>
          <span>GIF</span>
          <p>{alt}</p>
        </div>
      ) : (
        <img src={src} alt={alt} className={styles.gif} />
      )}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

export function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current || src === "TODO") return;
    const zoom = mediumZoom(imgRef.current, {
      margin: 24,
      background: "rgba(0,0,0,0.85)",
    });
    return () => {
      zoom.detach();
    };
  }, [src]);

  return (
    <figure className={styles.mediaBlock}>
      {src === "TODO" ? (
        <div className={styles.mediaPlaceholder}>
          <span>IMG</span>
          <p>{alt}</p>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={styles.zoomableImage}
        />
      )}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

export function ParamsTable({ params }: ParamsTableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.paramsTable}>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p) => (
            <tr key={p.setting}>
              <td>
                <code>{p.setting}</code>
              </td>
              <td className={styles.dimCell}>{p.type ?? "-"}</td>
              <td className={styles.dimCell}>{p.default ?? "-"}</td>
              <td>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ShortcutTable({ shortcuts }: ShortcutTableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.paramsTable}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shortcuts.map((s) => (
            <tr key={s.key}>
              <td>
                <kbd className={styles.kbd}>{s.key}</kbd>
              </td>
              <td>{s.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;
    if (!container || !slider) return;

    const move = (x: number) => {
      const rect = container.getBoundingClientRect();
      const pct = Math.min(Math.max((x - rect.left) / rect.width, 0), 1);
      container.style.setProperty("--split", `${pct * 100}%`);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging.current) move(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging.current) move(e.touches[0].clientX);
    };
    const onUp = () => {
      isDragging.current = false;
    };

    slider.addEventListener("mousedown", () => {
      isDragging.current = true;
    });
    slider.addEventListener("touchstart", () => {
      isDragging.current = true;
    });
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  if (before === "TODO" || after === "TODO") {
    return (
      <div className={styles.beforeAfterPlaceholder}>
        <div className={styles.mediaPlaceholder}>
          <span>◀</span>
          <p>{beforeLabel}</p>
        </div>
        <div className={styles.mediaPlaceholder}>
          <span>▶</span>
          <p>{afterLabel}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={styles.beforeAfter}
      style={{ "--split": "50%" } as React.CSSProperties}
    >
      <div className={styles.baAfter}>
        <img src={after} alt={afterLabel} />
        <span className={`${styles.baLabel} ${styles.baLabelRight}`}>
          {afterLabel}
        </span>
      </div>
      <div className={styles.baBefore}>
        <img src={before} alt={beforeLabel} />
        <span className={`${styles.baLabel} ${styles.baLabelLeft}`}>
          {beforeLabel}
        </span>
      </div>
      <div ref={sliderRef} className={styles.baSlider}>
        <div className={styles.baHandle}>⇔</div>
      </div>
    </div>
  );
}

export function VideoEmbed({ url, title = "Video", start }: VideoEmbedProps) {
  // Accept either a full YouTube URL or an embed URL
  let embedUrl = url;
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
  if (match) {
    embedUrl = `https://www.youtube.com/embed/${match[1]}${start ? `?start=${start}` : ""}`;
  }

  return (
    <div className={styles.videoWrapper}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const icons = { tip: "💡", info: "ℹ️", warning: "⚠️", danger: "🚫" };
  return (
    <div className={`${styles.callout} ${styles[`callout_${type}`]}`}>
      <div className={styles.calloutTitle}>
        <span>{icons[type]}</span>
        {title && <strong>{title}</strong>}
      </div>
      <div className={styles.calloutBody}>{children}</div>
    </div>
  );
}

// Main wrapper
export default function ToolPage({
  title,
  version,
  status = "todo",
  description,
  children,
}: ToolPageProps) {
  return (
    <div className={styles.toolPage}>
      <div className={styles.toolHeader}>
        <div className={styles.toolMeta}>
          {version && <span className={styles.versionTag}>v{version}</span>}
          <StatusBadge status={status} />
        </div>
        <h1 className={styles.toolTitle}>{title}</h1>
        {description && <p className={styles.toolDescription}>{description}</p>}
      </div>
      <div className={styles.toolContent}>{children}</div>
    </div>
  );
}
