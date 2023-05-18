/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useState, useEffect } from 'react'



const Home = () => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
        headers: {
          'X-RapidAPI-Key': 'de35bea1dbmshcade02dbc160f8fp1efd16jsn1ac757c1e735',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };

    const [zonetime, setTimezone] = useState([]);

    const getTimezonze = async() => {
        try {
            const response = await axios.request(options);
            
            const data = response.data.response

            setTimezone(data)
            console.log(data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTimezonze()
    },[]);

  return (
    <div>
        <h1>Time Zone</h1>
        {zonetime.length === 0 ? <p>Carregando...</p>: (
            zonetime.map((post) => (
                <div className='countrie' key={post.id}>
                    <h2>{post.name}</h2>
                    <img src={post.flag} alt="" />
                </div>
            ))
        )}
    </div>
  )
  
};

export default Home