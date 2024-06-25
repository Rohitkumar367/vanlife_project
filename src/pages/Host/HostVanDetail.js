import React from 'react'
import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

const HostVanDetail = () => {

    const params = useParams();

    const[currentVan, setCurrentVan] = useState(null);

    async function fetchData()
    {
        try{
            let res = await fetch(`/api/host/vans/${params.id}`);
            let output = await res.json();
            setCurrentVan(output.vans);
        }
        catch(err)
        {
            window.alert("OOPs, something went wrong!");
        }
    }

    useEffect(() => {
        fetchData();
    },[])


    if(!currentVan){
        return <h1>Loading...</h1>
    }

    return (

        <section>
            <Link to=".." className="back-button"
                relative='path'
            >
                &larr; <span>Back to all vans</span>
            </Link>

            <div className='host-van-detail-layout-container'>
            <div className='host-van-detail'>
                <img src={currentVan.imageUrl} width={150}/>
                <div>
                    <i className={`van-type van-type-${currentVan.type}`}>
                        {currentVan.type}
                    </i>
                    <h2>{currentVan.name}</h2>
                    <p>${currentVan.price}/day</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default HostVanDetail
