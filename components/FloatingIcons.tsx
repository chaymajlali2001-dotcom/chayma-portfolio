const iconProps = (size: number, strokeWidth: number, className: string, style: object) => ({
  width: size,
  height: size,
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  style,
  viewBox: "0 0 24 24",
});

const Code2 = (props: any) => <svg {...iconProps(props.size, props.strokeWidth, props.className, props.style)}><path d="m16 18 6-6-6-6M8 6l-6 6 6 6m6.5-17-5 22" /></svg>;
const Braces = (props: any) => <svg {...iconProps(props.size, props.strokeWidth, props.className, props.style)}><path d="M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2" /></svg>;
const GitBranch = (props: any) => <svg {...iconProps(props.size, props.strokeWidth, props.className, props.style)}><circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><circle cx="6" cy="18" r="3" /><path d="M6 9v6m12 0a9 9 0 0 0-9-9" /></svg>;
const Database = (props: any) => <svg {...iconProps(props.size, props.strokeWidth, props.className, props.style)}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></svg>;
const TerminalIcon = (props: any) => <svg {...iconProps(props.size, props.strokeWidth, props.className, props.style)}><path d="m4 17 6-6-6-6m8 14h8" /></svg>;
const Cpu = (props: any) => <svg {...iconProps(props.size, props.strokeWidth, props.className, props.style)}><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 9h6v6H9zM9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4" /></svg>;

const icons = [
  { Icon: Code2, top: "10%", left: "5%", size: 26, duration: "9s", delay: "0s" },
  { Icon: Braces, top: "16%", left: "90%", size: 22, duration: "11s", delay: "1.1s" },
  { Icon: GitBranch, top: "72%", left: "4%", size: 22, duration: "10s", delay: "0.5s" },
  { Icon: Database, top: "78%", left: "92%", size: 24, duration: "12.5s", delay: "1.8s" },
  { Icon: TerminalIcon, top: "42%", left: "95%", size: 20, duration: "8.5s", delay: "0.3s" },
  { Icon: Cpu, top: "55%", left: "2%", size: 22, duration: "13s", delay: "1.5s" },
];

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {icons.map(({ Icon, top, left, size, duration, delay }, i) => (
        <Icon
          key={i}
          size={size}
          strokeWidth={1.5}
          className="absolute animate-float text-teal/[0.14]"
          style={{ top, left, animationDuration: duration, animationDelay: delay }}
        />
      ))}
    </div>
  );
}