"use client";

interface ScrollButtonProps {
  targetId: string;
  className?: string;
  "data-contato"?: string;
  "data-local"?: string;
  children: React.ReactNode;
}

export default function ScrollButton({
  targetId,
  className,
  children,
  ...dataAttrs
}: ScrollButtonProps) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button onClick={handleClick} className={className} {...dataAttrs}>
      {children}
    </button>
  );
}
