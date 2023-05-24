import Head from "next/head";
import Link from "next/link";
import NavBar from "./components/NavBar";


export default function Index() {
  return (
    <div className=".principalPage">
      <Head>
        <title>Calculadoras deportivas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Calculadoras deportivas</h1>
        <div>
          <h2>Selecciona una calculadora:</h2>
          <ul>
            <li>
              <Link href="/components/oneRM">
                <h3>Calculadora de RM</h3>
              </Link>
            </li>
            <li>
              <Link href="/components/RunningPace">
                <h3>Calculadora de ritmo de carrera</h3>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
