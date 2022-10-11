//This is gonna be our file where we will be making API calls and we will be making use of 'RapidAPI client' extension

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; //two utility functions imported from redux toolkit

/* Below code is directly copied from RapidAPI client extension


const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5697e54fabmsh5f47e9905b6208ap1ee6a9jsnf1e3abe3d673',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/


    //reducerPath will store the name of our API
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{

            headers.set('X-RapidAPI-Key','5697e54fabmsh5f47e9905b6208ap1ee6a9jsnf1e3abe3d673');
            //It is going to prepare headers for us before each and every API call so that we don't have to do it every time.

            return headers;


        },
    }),
    endpoints: (builder)=>({
        getTopCharts:builder.query({query: () =>'/charts/world'}),
        getSongsByGenre:builder.query({query: (genre) =>`/charts/genre-world?genre_code=${genre}`}),
        getSongDetails:builder.query({query: ({songid}) =>`/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query: ({songid}) => `/tracks/related?track_id=${songid}`}),
        getArtistDetails:builder.query({query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry:builder.query({query: (countryCode) => `/charts/country?country_code=${countryCode}`}),

    }),
});

export const{
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
}=shazamCoreApi;