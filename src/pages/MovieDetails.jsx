import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { getMovieCast, getMovieDetails } from '../store/actions/movieActions'
import { posterUrl } from '../utils/posterUrl'

function MovieDetails() {

    const dispatch = useDispatch()
    const location = useLocation()

    const details = useSelector(state => state.movie)
    const { movieDetails, movieCast } = details
    //console.log(movieDetails)
    console.log(movieCast)

    useEffect(() => {
        dispatch(getMovieDetails(location.state))
        dispatch(getMovieCast(location.state))
    }, [location.state, dispatch])
    

    if(!location.state) return null
    return (
        <>
            <div className="mb-20 mx-6 sm:mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                <header className='text-white my-10'>
                    <Link to='/'>
                        <i className="bx bx-chevron-left absolute mt-1"></i>
                    </Link>
                    <h2 className='text-center'>Movie Detail</h2>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className=''>
                        <div className="w-full text-white  ">
                            <img src={posterUrl + movieDetails.poster_path} alt={movieDetails.original_title} className='h-60 sm:h-96 sm:max-h-fit rounded-xl w-full object-cover object-top' />
                        </div>
                    </div>
                    <div>
                        <div className='text-white'>
                            <h3 className='mt-5 sm:mt-0 text-lg'>{movieDetails.original_title}</h3>
                            <p className='text-sm text-gray-300 mt-1 pb-5 mb-5  border-b border-gray-600'>{movieDetails.tagline}</p>
                            <h3>Overview</h3>
                            <p className='mt-2 border-b border-gray-600 pb-5 mb-10 text-sm text-gray-300 leading-6'>{movieDetails.overview}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <div className="text-center rounded-lg py-2 border border-gray-600 text-white">
                                <i className="bx bxs-time-five text-lg pb-1 shadow-2xl"></i>
                                <h3 className='text-sm text-gray-400'>Duration</h3>
                                <p>{movieDetails.runtime}m</p>
                            </div>
                            <div className="text-center rounded-lg py-2 border border-gray-600 text-white">
                                <i className="bx bxs-star text-lg pb-1 shadow-2xl"></i>
                                <h3 className='text-sm text-gray-400'>Rating</h3>
                                <p>{movieDetails.vote_average}/10</p>
                            </div>
                            <div className="text-center rounded-lg py-2 border border-gray-600 text-white">
                                <i className='bx bxs-video-recording text-lg pb-1 shadow-2xl'></i>
                                <h3 className='text-sm text-gray-400'>Genre</h3>
                                <p>{movieDetails.vote_average}/10</p>
                            </div>
                        </div>
                        <div className="border-b sm:hidden sm:border-b-0 border-gray-600  mb-10 pb-10 grid grid-cols-3 sm:grid-cols-4 gap-5 mt-5">
                            {
                                movieDetails.genres && movieDetails.genres.map(genre => (
                                    <span key={genre.id} className="truncate bg-cyan-500 text-center text-white rounded-2xl text-sm py-1 px-2">{genre.name}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="sm:mt-20">
                    <h3 className='text-white'>Cast</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5'>
                        {
                            movieCast && movieCast.map((cast, index) => (
                                cast.profile_path && 
                                <div key={index} className='mt-5'>
                                    <img alt={cast.character} src={posterUrl + cast.profile_path} className='h-48 lg:h-60 rounded-xl w-full object-cover object-top' />
                                    <h3 className='text-gray-300 text-sm mt-2'>{cast.character}</h3>
                                    <p className='text-white mt-1'>
                                        <span className="text-gray-300">Name: </span>
                                        {cast.original_name}
                                    </p>
                                </div>
                                
                            ))
                        }
                    </div>
                </div>
                
                {/* {movieDetails.video && <p>There is video oh</p>} */}
            </div>
        </>
    )
}

export default MovieDetails