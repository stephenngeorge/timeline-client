import { SetStateAction } from "react";

export interface ILoginFormProps {
    username: string!,
    password: string!,
    setUsername(username: string): void,
    setPassword(password: string): void
}