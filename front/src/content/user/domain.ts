export interface User {
    id: string
    email: string
}


export interface LoginData {
    username: string
    password: string
}

export interface RegisterData {
    email: string
    password: string
    repeat: string
}

export interface EmailUpdate {
    email: string
    password: string
}

export interface PasswordUpdate {
    oldPassword: string
    newPassword: string
    repeatPassword: string
}


export interface PasswordReset {
    newPassword: string
    repeatPassword: string
    token: string
}

