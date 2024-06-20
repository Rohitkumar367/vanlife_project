import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// useParams allows you to access the URL parameters of the current route.

const VanDetail = () => {
    const params = useParams();
    const[vanDetail, setVanDetail] = useState(null);

    async function fetchData()
    {
        try{
            let res = await fetch(`/api/vans/${params.id}`);
            let output = await res.json();
            setVanDetail(output.vans);
        }
        catch(err)
        {
            window.alert("OOPs, something went wrong!");
        }
    }

    useEffect(() => {
        fetchData();
    },[params.id])


    return (
        <div className='van-detail-container'>
            { vanDetail ? (
                <div className='van-detail'>
                    <img src={vanDetail.imageUrl} alt="vanDetail" />
                    <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i> 
                    <h2>{vanDetail.name}</h2>
                    <p className='van-price'><span>${vanDetail.price}</span>/day</p>
                    <p>{vanDetail.description}</p>
                    <button className='link-button'>Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetail
