import React from 'react'
import Genre from '../components/Genre'
import Layout from '../components/Layout'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Layout>
                <Genre/>
            </Layout>
        </>
    )
}

export default Home