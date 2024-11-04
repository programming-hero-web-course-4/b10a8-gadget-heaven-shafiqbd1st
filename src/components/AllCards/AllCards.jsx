import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'
import Card from '../Card/Card';

const AllCards = () => {

    const data = useLoaderData();

    const { category } = useParams();

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
            setCategoryData(data)
        }

    }, [category, data])

    return (
        <div>
            {

                categoryData.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
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
