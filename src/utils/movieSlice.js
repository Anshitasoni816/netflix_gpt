import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        horrorMovies: null,
        tmdbResults : null,
        gptMovies : null,
        gptLoading: false,
    },

    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpCommingMovies: (state, action) => {
            state.upComingMovies = action.payload
        },
        addHorrorMovies: (state, action) => {
            state.horrorMovies = action.payload
        },
        addGptSearchMovies : (state, action) => {
            const {tmdbResults, gptMovies} = action.payload
            state.tmdbResults = tmdbResults
            state.gptMovies = gptMovies
        },
        clearGptSearchMovies: (state) => {
            state.tmdbResults = null
            state.gptMovies = null
        },
        setGptLoading: (state, action) => {
            state.gptLoading = action.payload
        }
    }
})

export const { addNowPlayingMovies, addHorrorMovies, addPopularMovies, addUpCommingMovies, addTopRatedMovies, addGptSearchMovies, clearGptSearchMovies, setGptLoading } = movieSlice.actions;
export default movieSlice.reducer;
