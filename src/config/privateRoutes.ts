import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { "auth-page-token": token } = parseCookies(ctx)

    if (!token) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}