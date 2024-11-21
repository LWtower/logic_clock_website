import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import "./homeIndex.scss"
import { useEffect } from "react"

export default function HomeIndex() {
  
  return(
    <>
      <div className="homepage">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}