/** Размеры иконок. */
export type Size = 'XS' | 'S' | 'M';

/** Свойства иконки. */
export interface IconProps {
  /** Цвет иконки. */
  color?: string;
  /** Размер иконки. */
  size?: Size;
}
