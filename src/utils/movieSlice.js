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
        }
    }
})

export const { addNowPlayingMovies, addHorrorMovies, addPopularMovies, addUpCommingMovies, addTopRatedMovies, addGptSearchMovies } = movieSlice.actions;
export default movieSlice.reducer;