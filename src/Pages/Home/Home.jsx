import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';
import '../../components/Products/Products.scss';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json'); // La ruta debe ser relativa al servidor de desarrollo
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    return (
        <>
           <NavBar/>
           <Banner/>
           <div className='Product-card-container'>
               <Products data={data} />
           </div>
        </>    
    );
};

export default Home;

