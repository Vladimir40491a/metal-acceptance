import type { IconProps } from './types';
import { MAP_ICON_SIZE } from './constants';

export function LocationIcon({ color, size = 'S' }: IconProps) {
  return (
    <svg width={MAP_ICON_SIZE[size]} height={MAP_ICON_SIZE[size]} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_336)">
        <path fill={color ?? 'var(--bg-base)'} d="M7.3049 0.000854492C4.38797 0.000854492 2.01489 2.37394 2.01489 5.29083C2.01489 8.91079 6.74893 14.2251 6.95049 14.4496C7.1398 14.6604 7.47034 14.6601 7.65931 14.4496C7.86087 14.2251 12.5949 8.91079 12.5949 5.29083C12.5948 2.37394 10.2218 0.000854492 7.3049 0.000854492ZM7.3049 7.95237C5.83732 7.95237 4.64339 6.75841 4.64339 5.29083C4.64339 3.82326 5.83735 2.62933 7.3049 2.62933C8.77245 2.62933 9.96638 3.82328 9.96638 5.29086C9.96638 6.75844 8.77245 7.95237 7.3049 7.95237Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_336">
          <rect width="14.6067" height="14.6067" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
