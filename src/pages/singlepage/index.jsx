import React from 'react'
import { useParams } from 'react-router-dom'
import { useSingleProductQuery } from '../../context/apiSlice'

import './singlepage.scss'

const SinglePage = () => {
    const { id } = useParams()
    const { data } = useSingleProductQuery(id)
    // console.log(id, data.title);
    return (
        <div className="container single">
            <div className="single__img">
                <img src={data?.image} alt={data?.image} />
            </div>
            <div className="single__desc">
                <h1>{data?.title}</h1>
                <p>{data?.price}</p>
                <p>{data?.category}</p>
            </div>
        </div>
    )
}

export default SinglePage