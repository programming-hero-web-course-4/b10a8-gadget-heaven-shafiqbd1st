import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'
import Card from '../Card/Card';

const AllCards = () => {
    const data = useLoaderData();
    const { category } = useParams();
    console.log(typeof category)
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        if (category !== "ALL" && category) {
            const newData = [...data].filter(item => item.category === category);
            setCategoryData(newData);
        }
        else if (category === "ALL") {
            console.log(category)
            setCategoryData(data);
        }
        else if (category === "Tab") {
            setCategoryData([])
        }
        else {
            console.log("all")
            setCategoryData(data)
        }

    }, [category, data])
    console.log(category)
    console.log(data)
    console.log(categoryData)

    return (
        <div>
            {

                categoryData.length > 0 ? <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        categoryData.map(item => <Card key={item.product_id} item={item}></Card>)
                    }
                </div>
                    : <h1 className='text-5xl my-16 text-center font-bold text-[#9538E2]'>No Data Found</h1>
            }
        </div >
    )
}

AllCards.propTypes = {

}

export default AllCards
