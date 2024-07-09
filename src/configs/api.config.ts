export const getAuthUrl = (string: string) => `/auth/${string}`
export const getUserUrl = (string: string) => `/user/${string}`
export const getCategoryUrl = (string?: string) => `/category/${string ?? ''}`
