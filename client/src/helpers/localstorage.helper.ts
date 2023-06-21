export function getTokenFromLocalStorage(): string {
    const data = localStorage.getItem('token')
    const token: string = data ? JSON.parse(data) : ''
    console.log(data, JSON.parse(data), token)

    return token
}

export function setTokenToLocalStorage(key: string, token: string): void {
    localStorage.setItem(key, JSON.stringify(token))
}

export function removeTokenFromLocalStorage(key: string): void {
    localStorage.removeItem(key)
}
