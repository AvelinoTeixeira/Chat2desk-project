import cookie from 'cookie';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Verifique as credenciais
    if (username === 'user' && password === 'password') {
      // Define o cookie de autenticação
      res.setHeader('Set-Cookie', cookie.serialize('auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 7 dias
        path: '/'
      }));
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
