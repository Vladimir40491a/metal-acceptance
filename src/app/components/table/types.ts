export interface LastedProps {
  /** Признак последнего элемента. */
  lasted?: boolean;
}

/** Свойства заголовка таблицы. */
export interface HeaderProps {
  /** Колонки таблицы. */
  columns: Column[]
}

/** Колонка таблицы. */
export interface Column {
  /** Заголовок колонки. */
  label: string;
  /** Имя колонки. */
  name: string;
}

/** Тип данных таблицы по умолчанию. */
export type DefaultData = Record<string, any>;

/** Свойства таблицы. */
export interface TableProps<T extends DefaultData> {
  columns: Column[];
  /** Данные таблицы. */
  data: T[];
}

/** Свойства строки таблицы. */
export interface RowProps<T extends DefaultData> {
  columns: Column[];
  /** Данные таблицы. */
  data: T;
  /** Индекс строки. */
  index: number;
}
