import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Header } from "../../components/Header";
import { getServerSideProps } from "../../config/privateRoutes";


export default function Dashboard() {

    return (
        <div>
            <Header />
        </div>
    )
}

export { getServerSideProps }