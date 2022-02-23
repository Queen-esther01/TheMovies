import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, getMoviesByGenre } from '../store/actions/movieActions'

const Genre = ({ getGenreInfo }) => {
    const [slice, setslice] = useState({
        start: 0,
        end: 3
    })

    const dispatch = useDispatch()

    const moviesData = useSelector((state) => state.movie)
    const { genres } = moviesData

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    const getGenreData = (genre) => {
        getGenreInfo(genre)
        dispatch(getMoviesByGenre(genre.id))
    }

    const toggleGenreVisibility = () =>{
        if(slice.end < genres.length){
            setslice({ start: 0, end: genres.length })
        }
        else{
            setslice({ start: 0, end: 3 })
        }
    }

    return (
        <>
            <div className='lg:max-w-4xl lg:m-auto'>
                <div className="flex justify-between text-white">
                    <h2 className='bold'>Genres</h2>
                    <div onClick={toggleGenreVisibility} className="cursor-pointer flex items-center text-cyan-500 font-bold">
                        <p>{ slice.end < genres.length ? 'See All' : 'See Less'}</p>
                        <i className='bx bx-chevron-right ml-2 mt-1'></i>
                    </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 cursor-pointer gap-5 mt-5 text-center">
                    {
                        genres.slice(slice.start, slice.end).map((genre, index) => {
                            return (
                                <span onClick={()=>getGenreData(genre)} key={genre.id} className={' truncate w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'}>{genre.name}</span>
                            )
                        })
                    }
                    {/* <span className='truncate w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Action</span>
                    <span className='w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Advent..</span>
                    <span className='w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Animation</span>
                    <span className='hidden sm:block w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Comedy</span>
                    <span className='hidden sm:block w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Crime</span>
                    <span className='hidden sm:block w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Docum..</span> */}
                </div>
            </div>
        </>
    )
}

export default Genre