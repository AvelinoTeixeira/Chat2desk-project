// components/ContactList.js

import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import { useRouter } from 'next/router';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Erro ao buscar contatos');
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const handleContactClick = (id) => {
    router.push(`/contacts/${id}`);
  };

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onClick={() => handleContactClick(contact.id)} />
      ))}
    </div>
  );
};

export default ContactList;
