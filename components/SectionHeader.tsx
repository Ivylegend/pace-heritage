type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={[
        "mb-8 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow ? (
        <p className="mb-3.5 text-xs font-medium uppercase tracking-[0.08em] text-[#f3b23f]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[
          "font-serif text-[clamp(2.1rem,4.5vw,3.55rem)] leading-[1.06]",
          light ? "text-white" : "text-[#07182f]",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-3.5 text-[1.02rem] leading-7",
            light ? "text-white/80" : "text-[#637083]",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
