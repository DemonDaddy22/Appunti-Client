export const isEmptyString = (value: any): boolean =>
    !value || (typeof value === 'string' && value.trim().length === 0);
