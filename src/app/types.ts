/** DTO строки металла. */
export interface MetalDto {
  /** Сумма при наличном расчете. */
  cashPayment: string | [string, string];
  /** Вид металла. */
  type: string;
}

/** Свойства строки таблицы металла. */
export interface MetalRow {
  /** Сумма при наличном расчете. */
  cashPayment: string;
  /** Вид металла. */
  type: string;
}

/** Диапазон. */
interface Range {
  /** Начало. */
  start: string;
  /** Окончание. */
  end: string;
}

/** Контактная информация. */
export interface ContactInfo {
  /** Адрес. */
  address: string;
  /** Координаты. */
  coordinates: [number, number];
  /** Время работы. */
  opening: {
    /** Дни. */
    days: Range;
    /** Часы. */
    hours: Range;
  },
  /** Телефон. */
  phone: string;
}