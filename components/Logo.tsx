export function Logo({ className = '', size = 'default' }: { className?: string; size?: 'small' | 'default' | 'large' }) {
  const dimensions = {
    small: { width: 140, height: 36 },
    default: { width: 200, height: 48 },
    large: { width: 260, height: 60 },
  };

  const { width, height } = dimensions[size];

  return (
    <svg
      viewBox="0 0 260 60"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Mountain Peak Icon */}
      <g>
        {/* Back mountain - darker */}
        <path
          d="M8 46L22 14L36 46H8Z"
          fill="#475569"
        />
        {/* Front mountain - with amber peak */}
        <path
          d="M18 46L34 10L50 46H18Z"
          fill="#1e293b"
        />
        {/* Snow/Iron cap accent */}
        <path
          d="M34 10L28.5 22H39.5L34 10Z"
          fill="#d97706"
        />
        {/* Small peak detail */}
        <path
          d="M34 10L31 17H37L34 10Z"
          fill="#f59e0b"
        />
      </g>

      {/* Brand Text */}
      <text x="56" y="29" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="20" fill="#1e293b" letterSpacing="-0.5">
        Bright Studio
      </text>
      <text x="56" y="47" fontFamily="Arial, Helvetica, sans-serif" fontWeight="600" fontSize="13" fill="#d97706" letterSpacing="2">
        STUDIO
      </text>
    </svg>
  );
}
