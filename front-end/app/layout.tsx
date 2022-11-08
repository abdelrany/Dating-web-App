import Footer from "../components/Footer"
import Nav from "../components/Nav"
import "../styles/globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>DatingApp | Find Your Dream Partner Online</title>
      </head>
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
