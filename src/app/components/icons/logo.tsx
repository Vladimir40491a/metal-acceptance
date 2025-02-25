import type { IconProps } from './types';
import { MAP_ICON_SIZE } from './constants';

/** Логотип. */
export function Logo({ size = 'L' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={MAP_ICON_SIZE[size]}
      height={MAP_ICON_SIZE[size]}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffc501"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-metabrainz"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 7v10l7 4v-18z" />
      <path d="M21 7v10l-7 4v-18z" />
    </svg>
  );
};

Logo.displayName = 'Logo';
