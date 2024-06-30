import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const HostVans = () => {

    const[vans, setVans] = useState([]);

    async function fetchData(){
        try{
            let resp = await fetch("/api/host/vans");
            let output = await resp.json();
            setVans(output.vans);
        }
        catch(err){
            window.alert('OOPs!, somethind went wrong');
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const hostVanEls = vans.map((eachVan) => {
        return (
            <Link to={`/host/vans/${eachVan.id}`} key={eachVan.id}
                className="host-van-link-wrapper"
            >
                <div className='host-van-single' key={eachVan.id}>
                    <img src={eachVan.imageUrl} alt={`Photo of ${eachVan.name}`} />
                    <div className='host-van-info'>
                        <h3>{eachVan.name}</h3>
                        <p>${eachVan.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <section>
            <h1 className='host-vans-title'>Your listed vans</h1>
            <div className='host-vans-list'>
                {
                    vans.length > 0 ? 
                    (
                        <section>
                            {hostVanEls}
                        </section>
                    ) : 
                    (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}

export default HostVans
