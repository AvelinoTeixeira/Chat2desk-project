// pages/contact/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ContactDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchContact = async () => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
          setContact(response.data);
        } catch (error) {
          console.error('Erro ao buscar detalhes do contato', error);
        }
      };

      fetchContact();
    }
  }, [id]);

  if (!contact) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{contact.name}</h1>
      <p>Email: {contact.email}</p>
      <p>Telefone: {contact.phone}</p>
      <p>Endereço: {contact.address.street}, {contact.address.city}</p>
      <Link href="/home">
        <a>Voltar</a>
      </Link>
    </div>
  );
};

export default ContactDetail;
