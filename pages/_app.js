import "../styles/global.css"
import Header from "../components/header"

function MyApp({ Component, pageProps }) {
  return(
  <div className="antialiased text-gray-700">
    <Header/>
    <main className="mt-4">
    <Component {...pageProps} />
    </main>
  </div>
  )
}

export default MyApp;
