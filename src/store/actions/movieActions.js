import { createSlice } from "@reduxjs/toolkit";
import { API_REQUEST_BEGAN } from "../types";
import { baseUrl } from '../../utils/baseUrl'
import { apiKey } from "../../utils/apiKey";



const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movie: {},
        loading: false,
    },
    reducers: {
        trendingMoviesRequested: (state, action) => {
            state.loading = true;
        },
        trendingMoviesReceived: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },
        trendingMoviesFailed: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
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

export const {
    trendingMoviesRequested,
    trendingMoviesReceived,
    trendingMoviesFailed
} = movieSlice.actions

export default movieSlice.reducer;
