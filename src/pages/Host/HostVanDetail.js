import React from 'react'
import {useEffect, useState} from 'react'
import {useParams, Link, Outlet, NavLink} from 'react-router-dom'

const HostVanDetail = () => {

    const inlineStyle  = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

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
                        <p className='van-price'>${currentVan.price}/day</p>
                    </div>
                </div>

                <nav className='host-van-detail-nav'>
                    <NavLink to='.' end
                        style={({isActive})=> isActive ? inlineStyle : null}
                    >
                        Details
                    </NavLink>

                    <NavLink to='pricing'
                        style={({isActive})=> isActive ? inlineStyle : null}                    
                    >
                        Pricing
                    </NavLink>

                    <NavLink to='photos'
                        style={({isActive})=> isActive ? inlineStyle : null}
                    >
                        Photo
                    </NavLink>
                </nav>

                {/* Passing value to our Outlet, and will be recievable inside the rendered component using 'useOutletContext' hook */}
                <Outlet context={{currentVan}}/>

            </div>

        </section>
    )
}

export default HostVanDetail
