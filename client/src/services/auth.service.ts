import {IResponseUserData, IUser, IUserData} from "../types/types";
import axios from "axios";

export const AuthService = {
    async registration(userData: IUserData): Promise<IResponseUserData | undefined> {
        const {data} = await axios.post<IUserData, { data: IResponseUserData }>('user', userData)
        return data
    },
    async login(userData: IUserData): Promise<IUser | undefined> {

        const {data} = await axios.post<IUserData, { data: IUser }>('auth/login', userData)

        return data
    },
    async getProfile(): Promise<IUser | undefined> {
        const {data} = await axios.get<null, { data: IUser }>('auth/profile')
        if (data) return data

    }
}
