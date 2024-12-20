import type { IconProps } from './types';
import { MAP_ICON_SIZE } from './constants';

export function OfficeHoursIcon({ color, size = 'S' }: IconProps) {
  return (
    <svg width={MAP_ICON_SIZE[size]} height={MAP_ICON_SIZE[size]} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color ?? 'var(--text-secondary)'} d="M7.5 0C3.35795 0 0 3.35787 0 7.5C0 11.6421 3.35787 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35787 11.6421 0 7.5 0ZM7.5 2.27273C7.75112 2.27273 7.95451 2.47628 7.95451 2.72723V7.23697L11.4701 9.26826C11.6875 9.39382 11.759 9.66872 11.6334 9.88624C11.5079 10.1036 11.233 10.1751 11.0154 10.0495C9.76889 9.33041 8.51552 8.6072 7.27246 7.89048C7.13675 7.81185 7.04512 7.6679 7.04512 7.49985V2.72713C7.04512 2.47601 7.24868 2.27262 7.49963 2.27262L7.5 2.27273Z" />
    </svg>
  );
}
