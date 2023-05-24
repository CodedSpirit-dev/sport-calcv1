import Link from "next/link";

export default function NavBar() {
  return (
    <nav >
      <ul className="navBar">
        <li>
          <Link href="/">
            <p>Inicio</p>
          </Link>
        </li>
        <li>
          <Link href="/components/oneRM">
            <p>Calculadora de 1RM</p>
          </Link>
        </li>
        <li>
          <Link href="/components/RunningPace">
            <p>Calculadora de ritmo de carrera</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p>Calculadora 3</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p>Calculadora 4</p>
          </Link>
        </li>
        <li className="donate">
          <Link href="https://www.paypal.com/donate?hosted_button_id=JWH4LGFDWSZ4S">
            <p target="_blank" rel="noopener noreferrer">
              Donar
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
