import { createSlice } from "@reduxjs/toolkit";
import { API_REQUEST_BEGAN } from "../types";
import { baseUrl } from '../../utils/baseUrl'
import { apiKey } from "../../utils/apiKey";



const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        genres: [],
        latestMovies: [],
        topRatedMovies: [],
        loading: false,
        movieDetails: [],
        movieCast: [],
    },
    reducers: {
        trendingMoviesRequested: (state) => {
            state.loading = true;
        },
        trendingMoviesReceived: (state, action) => {
            state.movies = action.payload.results;
            state.loading = false;
        },
        trendingMoviesFailed: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },
        moviesByGenreRequested: (state) => {
            state.loading = true;
        },
        moviesByGenreReceived: (state, action) => {
            state.movies = action.payload.results;
            state.loading = false;
        },
        moviesByGenreFailed: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },
        getGenresRequested: (state) => {
            state.loading = true;
        },
        getGenresReceived: (state, action) => {
            state.genres = action.payload.genres;
            state.loading = false;  
        },
        getGenresFailed: (state, action) => {
            state.genres = action.payload;
            state.loading = false;
        },
        latestMoviesRequested: (state) => {
            state.loading = true;
        },
        latestMoviesReceived: (state, action) => {
            state.latestMovies = action.payload.results;
            state.loading = false;
        },
        latestMoviesFailed: (state, action) => {
            state.latestMovies = action.payload;
            state.loading = false;
        },
        topRatedMoviesRequested: (state) => {
            state.loading = true;
        },
        topRatedMoviesReceived: (state, action) => {
            state.topRatedMovies = action.payload.results;
            state.loading = false;
        },
        topRatedMoviesFailed: (state, action) => {
            state.topRatedMovies = action.payload;
            state.loading = false
        },
        movieDetailsRequested: (state) => {
            state.loading = true;
        },
        movieDetailsReceived: (state, action) => {
            state.movieDetails = action.payload;
            state.loading = false;
        },
        movieDetailsFailed: (state, action) => {
            state.movieDetails = action.payload;
            state.loading = false;
        },
        movieCastRequested: (state) => {
            state.loading = true;
        },
        movieCastReceived: (state, action) => {
            state.movieCast = action.payload.cast;
            state.loading = false;
        },
        movieCastFailed: (state, action) => {
            state.movieCast = action.payload;
            state.loading = false;
        },
        searchMoviesRequested: (state) => {
            state.loading = true;
        },
        searchMoviesReceived: (state, action) => {
            state.movies = action.payload.results;
            state.loading = false
        },
        searchMoviesFailed: (state, action) => {
            state.movies = action.payload
            state.loading = false
        }

    }
});

export const getTrendingMovies = () =>{
    return async (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseUrl}/3/trending/all/week?api_key=${apiKey}`,
                onStart: trendingMoviesRequested.type,
                onSuccess: trendingMoviesReceived.type,
                onError: trendingMoviesFailed.type,
                method: 'get'
            })
        )
    }
}

export const getMoviesByGenre = (genre) =>{
    return async (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseUrl}/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&include_adult=true&language=en-US&page=1`,
                onStart: moviesByGenreRequested.type,
                onSuccess: moviesByGenreReceived.type,
                onError: moviesByGenreFailed.type,
                method: 'get'
            })
        )
    }
}

export const getGenres = () =>{
    return async (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseUrl}/3/genre/movie/list?api_key=${apiKey}`,
                onStart: getGenresRequested.type,
                onSuccess: getGenresReceived.type,
                onError: getGenresFailed.type,
                method: 'get'
            })
        )
    }
}

export const getLatestMovies = () =>{
    return async (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseUrl}/3/movie/now_playing?api_key=${apiKey}&language=en-US`,
                onStart: latestMoviesRequested.type,
                onSuccess: latestMoviesReceived.type,
                onError: latestMoviesFailed.type,
                method: 'get'
            })
        )
    }
}

export const getTopRatedMovies = () =>{
    return async (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseUrl}/3/movie/top_rated?api_key=${apiKey}&language=en-US`,
                onStart: topRatedMoviesRequested.type,
                onSuccess: topRatedMoviesReceived.type,
                onError: topRatedMoviesFailed.type,
                method: 'get'
            })
        )
    }
}

export const getMovieDetails = (id) =>{
    return async (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseUrl}/3/movie/${id}?api_key=${apiKey}&language=en-US`,
                onStart: movieDetailsRequested.type,
                onSuccess: movieDetailsReceived.type,
                onError: movieDetailsFailed.type,
                method: 'get'
            })
        )
    }
}

export const getMovieCast = (id) =>{
    return async (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseUrl}/3/movie/${id}/credits?api_key=${apiKey}`,
                onStart: movieCastRequested.type,
                onSuccess: movieCastReceived.type,
                onError: movieCastFailed.type,
                method: 'get'
            })
        )
    }
}

export const searchMovie = (query) => {
    return async (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseUrl}/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1`,
                onStart: searchMoviesRequested.type,
                onSuccess: searchMoviesReceived.type,
                onError: searchMoviesFailed.type,
                method: 'get'
            })
        )
    }
}


export const {
    trendingMoviesRequested,
    trendingMoviesReceived,
    trendingMoviesFailed,
    moviesByGenreRequested,
    moviesByGenreReceived,
    moviesByGenreFailed,
    getGenresRequested,
    getGenresReceived,
    getGenresFailed,
    latestMoviesRequested,
    latestMoviesReceived,
    latestMoviesFailed,
    topRatedMoviesRequested,
    topRatedMoviesReceived,
    topRatedMoviesFailed,
    movieDetailsRequested,
    movieDetailsReceived,
    movieDetailsFailed,
    movieCastRequested,
    movieCastReceived,
    movieCastFailed,
    searchMoviesRequested,
    searchMoviesReceived,
    searchMoviesFailed,
} = movieSlice.actions

export default movieSlice.reducer;
