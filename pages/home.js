// pages/home.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cookie from 'cookie';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    const auth = cookies.auth;

    if (!auth) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Home</h1>
      {/* Lista de contatos */}
    </div>
  );
}
