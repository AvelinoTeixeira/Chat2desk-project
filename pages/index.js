// pages/index.js
import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import styles from '../styles/Login.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth', { username, password });
      
      if (response.status === 200 && response.data.success) {
        localStorage.setItem('authenticated', 'true');
        Router.push('/home');
      } else {
        setError('Credenciais inválidas');
      }
    } catch (err) {
      console.error('Erro durante a autenticação:', err);
      setError('Erro na autenticação. Tente novamente.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Entrar</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
