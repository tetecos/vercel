import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('Carregando...');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Erro ao carregar a mensagem'));
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>React + Vercel Serverless</h1>
      <p>{message}</p>
      <small>Esta mensagem veio de uma Serverless Function hospedada no Vercel.</small>
    </main>
  );
}
