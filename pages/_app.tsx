import  '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component className='bg-teal-50' {...pageProps} />
}
