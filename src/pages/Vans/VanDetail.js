import {React, useState, useEffect} from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

// we are gonna use 'useLocation' hook to gather all the data of current URL, including 'pathname', 'search' and 'hash' properties. 
// useLocation provides the full location object, allowing you to access the current pathname, query string (search), and fragment (hash).


const VanDetail = () => {

    const params = useParams();
    const location = useLocation();//-> useLocation hook

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

    // yahi p check ker le rhe h, ki location.state exist kerta h ya nhi
    const search = location.state && (location.state.search || "");

    const type = location.state?.type || "all";


    return (
        <div className='van-detail-container'>
            <Link to={`..${search}`} 
                relative='path'
                className="back-button"
            >
                &larr; <span>Back to {type} vans</span>
            </Link>

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
