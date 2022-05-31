import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>the homepage.</h1>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
      </ul>
    </div>
  );
};
export default HomePage;
