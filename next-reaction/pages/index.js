import Link from "next/link";

function IndexHomePage() {
  return (
    <div>
      <h1> Home page </h1>
      <ul>
        <li>
          <Link href="/portfolio"> Portfolio </Link>
        </li>
        <li>
          <Link href="/blog"> Blog </Link>
        </li>
        <li>
          <Link href="/about"> About </Link>
        </li>
        <li>
          <Link href="/clients"> Clients </Link>
        </li>
      </ul>
    </div>
  );
}

export default IndexHomePage;
