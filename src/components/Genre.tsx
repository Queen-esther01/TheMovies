import React from 'react'

type Props = {}

const Genre = (props: Props) => {
    return (
        <>
            <div className='lg:max-w-4xl lg:m-auto'>
                <div className="flex justify-between text-white">
                    <h2 className='bold'>Genres</h2>
                    <div className="flex items-center text-cyan-500 font-bold">
                        <p>See All</p>
                        <i className='bx bx-chevron-right ml-2 mt-1'></i>
                    </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 cursor-pointer gap-5 mt-5 text-center">
                    <span className='w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Action</span>
                    <span className='w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Advent..</span>
                    <span className='w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Animation</span>
                    <span className='w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Comedy</span>
                    <span className='w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Crime</span>
                    <span className='w-auto rounded-lg bg-slate-700 text-gray-400 p-2 hover:bg-slate-800'>Docum..</span>
                </div>
            </div>
        </>
    )
}

export default Genre