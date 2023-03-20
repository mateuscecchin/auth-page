import { v4 } from "uuid";

type SignInRequestData = {
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise (resolve => setTimeout(resolve, amount))

export async function sigInRequest(data: SignInRequestData) {
    await delay()

    return {
        token: v4(),
        user: {
            name: "Mateus Fernandes",
            email: "mateus@gmail.com",
            avatar_url: "https://github.com/mateuscecchin.png"
        }
    }
}