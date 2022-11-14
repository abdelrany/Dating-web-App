import Footer from "../components/Footer"
import Nav from "../components/Nav"
import "../styles/globals.css"

import { Inter } from '@next/font/google';

const inter = Inter();


export default function RootLayout({ children}: { children: React.ReactNode}) {

  return (
    <html className="">
      <head className={inter.className}>
          <title>ClickDate | Find Your Dream Partner Online</title>
      </head>

      <body className="scroll-smooth">
        <Nav/>
        {children}
        <Footer/>
      </body>

    </html>
  )
}
