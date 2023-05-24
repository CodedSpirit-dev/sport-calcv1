import Head from "next/head";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Calculadoras deportivas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-9xl font-bold mb-4 font-sans">Calculadoras deportivas</h1>
        <div>
          <h2 className="text-6xl mb-4 py-8">Selecciona una calculadora:</h2>
          <ul className="flex space-x-4  justify-around">
            <li>
              <Link href="/components/oneRM">
                <h3 className="text-4xl hover:text-blue-500 cursor-pointer">Calculadora de RM</h3>
              </Link>
            </li>
            <li>
              <Link href="/components/RunningPace">
                <h3 className="text-4xl hover:text-blue-500 cursor-pointer">Calculadora de ritmo de carrera</h3>
              </Link>
            </li>
            <li>
              <Link href="#">
                <h3 className="text-4xl">Proximamente</h3>
              </Link>
            </li>
            <li>
              <Link href="#">
                <h3 className="text-4xl">Proximamente</h3>
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
