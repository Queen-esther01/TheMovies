import React from 'react'
import Emoji from '../assets/images/smilingemoji.png'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <>
            <div className="mx-6 sm:mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                <header className=' my-10 text-white'>
                    <h1 className='text-xl mb-10 md:mb-16'>TheMovies <div className='w-2 h-2 inline-block bg-gray-200'></div> </h1>
                    <div className='flex md:justify-center items-center'>
                        <p className="text-gray-300 mb-5">Welcome to the movies</p>
                        <img className='w-10 -mt-4' src={Emoji} alt="" />
                    </div>
                    <p className='md:text-center'>Get information on any and every movie anytime, anyday,</p>
                    <div className='my-8 relative md:text-center'>
                        <i className='bx bx-search absolute mt-4 mx-4'></i>
                        <input className='bg-slate-700 focus:outline-none rounded-full pl-12 py-3 w-full md:w-2/4 text-white' placeholder='Search' type="text" name="movieName" id="" />
                    </div>
                </header>
                <main>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default Layout