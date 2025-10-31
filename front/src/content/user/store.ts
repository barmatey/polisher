import {defineStore} from "pinia";
import {ref} from "vue";
import type {EmailUpdate, LoginData, PasswordReset, PasswordUpdate, RegisterData, User} from "./domain.ts";
import {authUserValidator} from "./validators.ts";
import {safeParsing} from "../shared/utils/safe-parsing.ts";
import {axiosInstance} from "../shared/utils/axios-instance.ts";

function saveInLocalStorage(data: User) {
    localStorage.setItem("currentUser", JSON.stringify(data))
}

function getFromLocalStorage(): User | null {
    const data = localStorage.getItem("currentUser")
    if (!data) return null
    return safeParsing(authUserValidator, JSON.parse(data))
}

function clearUserInLocalStorage(): void {
    localStorage.removeItem("currentUser")
}

export const useUserStore = defineStore(
    "useUserStore",
    () => {
        const user = ref<User | null>(null)

        function loadMyselfFromCache() {
            user.value = getFromLocalStorage()
        }

        async function loadMyself() {
            const url = "/users/me"
            const response = await axiosInstance.get(url)
            user.value = safeParsing(authUserValidator, {id: response.data.id, email: response.data.email})
        }

        async function register(data: RegisterData) {
            const url = "/auth/register"
            const payload = {email: data.email, password: data.password}
            await axiosInstance.post(url, payload)
        }

        async function updateEmail(data: EmailUpdate) {
            const url = "users/me/update-email"
            const payload = {new_email: data.email, password: data.password}
            await axiosInstance.patch(url, payload)
        }

        async function verifyEmail(token: string) {
            const url = "/auth/verify"
            const data = {token}
            await axiosInstance.post(url, data)
        }

        async function updatePassword(data: PasswordUpdate) {
            const url = "users/me/update-password"
            const payload = {old_password: data.oldPassword, new_password: data.newPassword}
            await axiosInstance.patch(url, payload, {})
        }

        async function forgotPassword(email: string) {
            const url = "/auth/forgot-password"
            const payload = {email}
            await axiosInstance.post(url, payload, {})
        }

        async function resetPassword(data: PasswordReset) {
            const url = "/auth/reset-password"
            const payload = {password: data.newPassword, token: data.token}
            await axiosInstance.post(url, payload, {})
        }

        async function login(loginData: LoginData) {
            const url = `/auth/jwt/login`
            const headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
            }
            const data = new URLSearchParams();
            data.append("grantType", "password")
            data.append("username", loginData.username)
            data.append("password", loginData.password)
            await axiosInstance.post(url, data, {headers})

            // Load myself
            const meUrl = "/users/me"
            const response = await axiosInstance.get(meUrl)
            user.value = safeParsing(authUserValidator, {id: response.data.id, email: response.data.email})
            saveInLocalStorage(user.value)
        }

        async function logout() {
            const url = "/auth/jwt/logout"
            await axiosInstance.post(url);
            await clearAndGoToLoginPage()
            clearUserInLocalStorage()
        }


        async function deleteAccount(password: string) {
            const url = "/users/me/delete"
            await axiosInstance.post(url, {password})
            await clearAndGoToLoginPage()
            clearUserInLocalStorage()
        }

        async function clearAndGoToLoginPage() {
            sessionStorage.removeItem("fastapiusersauth")
            user.value = null
            clearUserInLocalStorage()
        }

        return {
            user,
            loadMyself,
            loadMyselfFromCache,
            register,
            updateEmail,
            updatePassword,
            forgotPassword,
            resetPassword,
            verifyEmail,
            login,
            logout,
            deleteAccount,
            clearAndGoToLoginPage,
        }
    })


export function isAuthenticated(): boolean {
    return !!useUserStore().user
}