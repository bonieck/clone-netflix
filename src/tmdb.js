const API_KEY = 'f422f503cef64b287cc02cfa47ab8c4c';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Originais da Netflix
- Recomendados (trending)
- Em alta (top rated)
- Ação
- Comédia
- Terror
- Romance
- Documentários

*/
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=218$language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch (`/trending/all/week?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch (`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch (`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch (`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Teror',
                items: await basicFetch (`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch (`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch (`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`)
            },

        ];
    }
}
