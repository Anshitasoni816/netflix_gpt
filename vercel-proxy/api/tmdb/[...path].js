export default async function handler(req, res) {
  // Handle CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { path, ...queryParams } = req.query;
  const pathStr = Array.isArray(path) ? path.join('/') : (path || '');

  const searchParams = new URLSearchParams(queryParams);
  const queryString = searchParams.toString();
  const tmdbUrl = `https://api.themoviedb.org/3/${pathStr}${queryString ? '?' + queryString : ''}`;

  try {
    const response = await fetch(tmdbUrl, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('TMDB proxy error:', error);
    return res.status(500).json({ error: 'Proxy request failed' });
  }
}
