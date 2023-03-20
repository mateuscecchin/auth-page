import { GetServerSideProps } from 'next'
import type { AppProps } from 'next/app'
import { parseCookies } from 'nookies'
import { AuthProvider } from '../context/AuthContext'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

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
