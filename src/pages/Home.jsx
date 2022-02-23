import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Genre from '../components/Genre'
import Layout from '../components/Layout'
import { getLatestMovies, getTopRatedMovies, getTrendingMovies } from '../store/actions/movieActions'
import { posterUrl } from '../utils/posterUrl'

// import Swiper core and required modules
import SwiperCore, {Autoplay, EffectCoverflow, EffectCards, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// install Swiper modules
SwiperCore.use([Navigation, Autoplay, EffectCoverflow, EffectCards]);


const Home = () => {
    const [genre, setgenre] = useState()
    const [search, setsearch] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const moviesData = useSelector((state) => state.movie)
    const { movies, latestMovies, topRatedMovies } = moviesData
    //console.log(movies)

    useEffect(() => {
        dispatch(getTrendingMovies())
        dispatch(getLatestMovies())
        dispatch(getTopRatedMovies())
    }, [dispatch])

    const poster = posterUrl

    const genreInfo = (genre) => {
        setgenre(genre.name)
    }

    const showMovieDetails = (details) =>{
        navigate(
            '/movie/'+ details.id,
            {state: details.id}
        )
    }

    const getValue = (value) =>{
        console.log(value)
        setsearch(value)
    }


    return (
        <>
            <Layout getSearchValue={(value)=>getValue(value)}>
                <Genre getGenreInfo={(genre)=>genreInfo(genre)}/>
                <div className='text-white mt-16'>
                    <h2>{search ? `Search: ${search}` : search === null && genre ? `Genre: ${genre}` : 'Trending all week' }</h2>
                    <div className="mb-10 ">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides
                            autoplay
                            grabCursor={true}
                            speed={1000}
                            effect={'coverflow'}
                            freeMode={true}
                            disableoninteraction='false'
                            loop = {true}
                            className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-6  w-full'
                            breakpoints={{ 
                                640: {
                                    slidesPerView: 2
                                },
                                768: {
                                    width: 768, slidesPerView: 3, spaceBetween: 50, navigation : true
                                },
                                1024: {
                                    width: 1024, slidesPerView: 3, spaceBetween: 50, navigation: true
                                }
                            }}
                        > 
                            {
                                movies && movies.map((movie, index) => {
                                    return (
                                        <SwiperSlide key={movie.id} className=''>
                                            <div className='h-60 w-full'>
                                                <img src={poster + movie.poster_path} className='cursor-pointer rounded-xl w-full h-full object-cover object-top' alt={movie.original_title || movie.original_name} />
                                                
                                            </div>
                                            <div className="text-center mt-5">
                                                <h3 className='text-lg'>{movie.original_title || movie.original_name}</h3>
                                                <button onClick={()=>showMovieDetails(movie)} className='mt-3 bg-cyan-500 rounded-md px-5 py-2'>View details</button>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                        {
                            data && data.map((movie, index) => {
                                return (
                                    <div key={index} className='flex flex-col items-center justify-center'>
                                        <div className='h-60 w-full'>
                                            <img src={poster + movie.poster_path} className='cursor-pointer rounded-xl w-full h-full object-cover object-top' alt="" />
                                        </div>
                                        // {/* <h3 className='text-xl'>{movie.title}</h3>
                                        // <p className='text-gray-300'>{movie.overview}</p> 
                                    </div>
                                )
                            })
                        }
                    </div> */}
                    
                    {/* <img src={posterUrl + movies.results[0] && movies.results[0].poster_path} alt="" /> */}
                </div>
                <div className='text-white mt-20'>
                    <h2>{ 'Now playing in theatres' }</h2>
                    <div className="mb-10 ">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides
                            autoplay
                            grabCursor={true}
                            speed={1000}
                            //effect={'coverflow'}
                            freeMode={true}
                            disableoninteraction='false'
                            loop = {true}
                            className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-6  w-full'
                            breakpoints={{ 
                                640: {
                                    slidesPerView: 2
                                },
                                768: {
                                    width: 768, slidesPerView: 3, spaceBetween: 50
                                },
                                1024: {
                                    width: 1024, slidesPerView: 3, spaceBetween: 50
                                }
                            }}
                        > 
                            {
                                latestMovies && latestMovies.map((movie, index) => {
                                    return (
                                        <SwiperSlide key={movie.id} className=''>
                                            <div className='h-60 w-full'>
                                                <img src={poster + movie.poster_path} className='cursor-pointer rounded-xl w-full h-full object-cover object-top' alt={movie.original_title || movie.original_name} />
                                                
                                            </div>
                                            <div className="text-center mt-5">
                                                <h3 className='text-lg'>{movie.original_title || movie.original_name}</h3>
                                                <button onClick={()=>showMovieDetails(movie)} className='mt-3  bg-cyan-500 rounded-md px-5 py-2'>View details</button>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
                <div className='text-white mt-20'>
                    <h2>{ 'Top rated movies' }</h2>
                    <div className="mb-10 ">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides
                            autoplay
                            grabCursor={true}
                            speed={1000}
                            //effect={'coverflow'}
                            freeMode={true}
                            disableoninteraction='false'
                            loop = {true}
                            className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-6  w-full'
                            breakpoints={{ 
                                640: {
                                    slidesPerView: 2
                                },
                                768: {
                                    width: 768, slidesPerView: 3, spaceBetween: 50
                                },
                                1024: {
                                    width: 1024, slidesPerView: 3, spaceBetween: 50
                                }
                            }}
                        > 
                            {
                                topRatedMovies && topRatedMovies.map((movie, index) => {
                                    return (
                                        <SwiperSlide key={movie.id} className=''>
                                            <div className='h-60 w-full'>
                                                <img src={poster + movie.poster_path} className='cursor-pointer rounded-xl w-full h-full object-cover object-top' alt={movie.original_title || movie.original_name} />
                                                
                                            </div>
                                            <div className="text-center mt-5">
                                                <h3 className='text-lg'>{movie.original_title || movie.original_name}</h3>
                                                <button onClick={()=>showMovieDetails(movie)} className='mt-3 bg-cyan-500 rounded-md px-5 py-2'>View details</button>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home