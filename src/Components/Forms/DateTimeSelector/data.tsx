export interface IMonth {
    month: string,
    monthShort: string,
    index: number,
    dayCount: number
}

export const months: IMonth[] = [
    {month: 'January', monthShort: 'JAN', index: 0, dayCount: 31},
    {month: 'February', monthShort: 'FEB', index: 1, dayCount: 29},
    {month: 'March', monthShort: 'MAR', index: 2, dayCount: 31},
    {month: 'April', monthShort: 'APR', index: 3, dayCount: 30},
    {month: 'May', monthShort: 'MAY', index: 4, dayCount: 31},
    {month: 'June', monthShort: 'JUN', index: 5, dayCount: 30},
    {month: 'July', monthShort: 'JUL', index: 6, dayCount: 31},
    {month: 'August', monthShort: 'AUG', index: 7, dayCount: 31},
    {month: 'September', monthShort: 'SEP', index: 8, dayCount: 30},
    {month: 'October', monthShort: 'OCT', index: 9, dayCount: 31},
    {month: 'November', monthShort: 'NOV', index: 10, dayCount: 30},
    {month: 'December', monthShort: 'DEC', index: 11, dayCount: 31}
]