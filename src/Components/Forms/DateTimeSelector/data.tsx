export interface IMonth {
    month: string,
    monthShort: string,
    dayCount: number
}

export const months: IMonth[] = [
    {month: 'January', monthShort: 'JAN', dayCount: 31},
    {month: 'February', monthShort: 'FEB', dayCount: 29},
    {month: 'March', monthShort: 'MAR', dayCount: 31},
    {month: 'April', monthShort: 'APR', dayCount: 30},
    {month: 'May', monthShort: 'MAY', dayCount: 31},
    {month: 'June', monthShort: 'JUN', dayCount: 30},
    {month: 'July', monthShort: 'JUL', dayCount: 31},
    {month: 'August', monthShort: 'AUG', dayCount: 31},
    {month: 'September', monthShort: 'SEP', dayCount: 30},
    {month: 'October', monthShort: 'OCT', dayCount: 31},
    {month: 'November', monthShort: 'NOV', dayCount: 30},
    {month: 'December', monthShort: 'DEC', dayCount: 31}
]