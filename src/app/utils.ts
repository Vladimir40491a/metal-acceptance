/**
 * Возвращает сумму с валютой.
 *
 * @param amount - Сумма.
 */
export const getAmountWithCurrency = (amount: string): string => `${amount}₽`;

/**
 * Возвращает форматированный номер телефона.
 *
 * @param phoneNumber - Номер телефона.
 */
export const formatPhoneNumber = (phoneNumber: string): string => phoneNumber.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
