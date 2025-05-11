import type { SVGProps } from 'react';

export function DuckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="24" // Adjusted for typical icon size
      width="24"  // Adjusted for typical icon size
      viewBox="0 0 64 64" // Original viewBox of the detailed duck SVG
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor" // Use currentColor for theme compatibility
      // stroke="currentColor" // Not needed if fill is primary and no separate stroke color is desired
      // strokeWidth="0" // Not needed if fill is primary
      {...props}
    >
      <path d="M58.69,35.47A4.22,4.22,0,0,0,56,33H46.88a10.73,10.73,0,0,1-9.43-5.6,10.5,10.5,0,0,1-1-3.19.5.5,0,0,0-.5-.51H34a.5.5,0,0,0-.5.51,12.21,12.21,0,0,0,2.1,7.31.5.5,0,0,0,.43.28H46a1.49,1.49,0,0,1,1.36,2.18,5.51,5.51,0,0,1-5.33,3.73H38a4.5,4.5,0,0,0-4.43,3.65L32,47.68l-1.53-6.46A4.5,4.5,0,0,0,26,37.51H21.88a5.51,5.51,0,0,1-5.33-3.73A1.49,1.49,0,0,1,18,31.6h9.16a.5.5,0,0,0,.43-.28,12.21,12.21,0,0,0,2.1-7.31.5.5,0,0,0-.5-.51H27a.5.5,0,0,0-.5.51,10.5,10.5,0,0,1-1,3.19A10.73,10.73,0,0,1,16.12,33H7a4.22,4.22,0,0,0-2.69,2.47,4.2,4.2,0,0,0,.6,4.06L14.57,54a1,1,0,0,0,.89.53H47.53a1,1,0,0,0,.89-.53L58.09,39.53A4.2,4.2,0,0,0,58.69,35.47ZM24.5,21A4.5,4.5,0,1,1,20,16.5,4.5,4.5,0,0,1,24.5,21Zm14,0A4.5,4.5,0,1,1,34,16.5,4.5,4.5,0,0,1,38.5,21Z" />
    </svg>
  );
}
