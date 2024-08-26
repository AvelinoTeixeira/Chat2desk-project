// components/Layout.js
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Chat2Desk Brasil</p>
      </footer>
    </div>
  );
};

export default Layout;
