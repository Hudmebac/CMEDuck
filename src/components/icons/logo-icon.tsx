import type { SVGProps } from 'react';

export function DuckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18.53 7.33A6.06 6.06 0 0 0 12.03 3a6.06 6.06 0 0 0-6.5 4.33" />
      <path d="M12.03 13.85A6.5 6.5 0 0 0 5 16.35a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-4.55-4.03-8.48-4.03-8.48" />
      <path d="M7.53 17.85s.5-1.09.5-2.09" />
      <path d="M16.53 17.85s-.5-1.09-.5-2.09" />
      <path d="M12.03 21.68V17.35" />
      <path d="M10.03 3.85a.5.5 0 1 0-1 0 .5.5 0 1 0 1 0Z" />
    </svg>
  );
}
