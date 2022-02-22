import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Genre from '../components/Genre'
import Layout from '../components/Layout'
import { getTrendingMovies } from '../store/actions/movieActions'
import { posterUrl } from '../utils/posterUrl'

// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, Scrollbar, Autoplay, Thumbs, EffectCoverflow, EffectCards} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/thumbs';
// import 'swiper/css/EffectCoverflow';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, Thumbs, EffectCoverflow, EffectCards]);


const Home = () => {
    const dispatch = useDispatch()

    const moviesData = useSelector((state) => state.movie)
    const { movies } = moviesData
    console.log(movies)

    useEffect(() => {
        dispatch(getTrendingMovies())
    }, [])

    const poster = posterUrl

    const data = movies.results
    console.log(data)

    return (
        <>
            <Layout>
                <Genre/>
                <div className='text-white mt-10'>
                    <h2>Trending all week</h2>
                    <div className="my-10 ">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides
                            autoplay
                            grabCursor={true}
                            speed={1000}
                            effect={'coverflow'}
                            freeMode={true}
                            className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10  w-full'
                            breakpoints={{ 
                                768: {
                                    width: 768, slidesPerView: 3, spaceBetween: 50
                                },
                                1024: {
                                    width: 1024, slidesPerView: 3, spaceBetween: 50
                                }
                            }}
                        > 
                            {
                                data && data.map((movie, index) => {
                                    return (
                                        <SwiperSlide key={index} className=''>
                                            <div className='h-60 w-full'>
                                                <img src={poster + movie.poster_path} className='cursor-pointer rounded-xl w-full h-full object-cover object-top' alt="" />
                                                
                                            </div>
                                            <div className="text-center mt-5">
                                                <h3 className='text-xl'>{movie.original_title || movie.original_name}</h3>
                                                <button className='mt-5 text-gray-300 bg-cyan-500 rounded-md px-5 py-2'>View details</button>
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
            </Layout>
        </>
    )
}

export default Home