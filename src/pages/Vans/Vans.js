import React, {useEffect, useState} from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const Vans = () => {

    const[searchParams, setSearchParams] = useSearchParams();
    const[vans, setVans] = useState([]);

    const typeFilter = searchParams.get("type");

    const displayedVans = typeFilter
     ? vans.filter(van => van.type.toLowerCase() === typeFilter)
     : vans;


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


    if(!vans){
        return <h1>Loading...</h1>
    }

    const vanElements = displayedVans.map((eachVan)=>{
        return (
            <div key={eachVan.id} className='van-tile'>
                <Link to={eachVan.id}>
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

    function handleFilterChange(key, value)
    {
        setSearchParams((prev)=> {
            if(value===null){
                prev.delete(key);
            }
            else{
                prev.set(key,value)
            }

            return prev
        })
    }

    return (
        <div className='van-list-container'>
            <h1>Explore our van options</h1>

            <div className='van-list-filter-buttons'>
                <button
                    onClick={() => handleFilterChange('type', 'simple')}
                    className={`van-type simple ${typeFilter==="simple" ? "selected":""}`}
                >Simple</button>
                <button 
                    onClick={() => handleFilterChange('type', 'rugged')}
                    className={`van-type simple ${typeFilter==="rugged" ? "selected":""}`}
                >Rugged</button>
                <button 
                    onClick={() => handleFilterChange('type', 'luxury')}
                    className={`van-type simple ${typeFilter==="luxury" ? "selected":""}`}
                >Luxury</button>
                {typeFilter && 
                    <button 
                        onClick={() => handleFilterChange('type', null)}
                        className='van-type clear-filters'
                    >Clear Filter</button>
                }
            </div>

            <div className='van-list'>
                {
                    vans.length > 0 ? 
                    (
                        vanElements
                    ) :
                    (
                        <h1>Loading...</h1>
                    )
                }
            </div>
        </div>
    )
}

export default Vans
