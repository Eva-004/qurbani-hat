import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: "https://qurbani-hat-henna.vercel.app/"
})
export const { signIn, signUp, useSession } = createAuthClient()