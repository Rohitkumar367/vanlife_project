import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const Vans = () => {

    const[vans, setVans] = useState([]);

    async function fetchData()
    {
        try{
            let res = await fetch("/api/vans");
            let output = await res.json();
            setVans(output.vans);
        }
        catch(err)
        {
            window.alert("OOPs, something went wrong!");
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const vanElements = vans.map((eachVan)=>{
        return (
            <div key={eachVan.id} className='van-title'>
                <Link to={`/vans/${eachVan.id}`}>
                    <img src={eachVan.imageUrl} alt="eachVan" />
                    <div className='Van-info'>
                        <h3>{eachVan.name}</h3>
                        <p>${eachVan.price} <span>/day</span></p>
                    </div>
                    <i className={`van-type ${eachVan.type} selected`}>{eachVan.type}</i>
                </Link>
            </div>
        )
    })

    return (
        <div className='van-list-container'>
            <h1>Explore our van options</h1>
            <div className='van-list'>
                {vanElements}
            </div>
        </div>
    )
}

export default Vans
