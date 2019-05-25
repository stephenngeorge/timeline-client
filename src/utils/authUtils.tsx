export function protectRoute(): boolean {
    const loggedIn = localStorage.getItem('token')
    return !!loggedIn
}