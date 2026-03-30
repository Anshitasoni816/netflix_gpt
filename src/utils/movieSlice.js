import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        horrorMovies: null
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
        }
    }
})

export const { addNowPlayingMovies, addHorrorMovies, addPopularMovies, addUpCommingMovies, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;