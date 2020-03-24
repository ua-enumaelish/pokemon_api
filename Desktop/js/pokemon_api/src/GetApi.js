import React, {
  useState,
  useEffect
} from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

export default function GetApi ({pokemon}) {
  
  const [data, setData] = useState({});
  
  const apiData = {
    url: 'https://pokeapi.co/api/v2/',
	  type: 'pokemon',
	  id: pokemon,
  }

  const {url, type, id} = apiData;
  const apiUrl = `${url}${type}/${id}`;
  
  useEffect( () => {
    async function fetchData(){
      fetch(apiUrl)
        .then(data => data.json())
        .then(pokemon => {
          console.log(pokemon);
          setData({
            name: pokemon.name,
            img: pokemon.sprites.front_default,
            height: pokemon.height,
            weight: pokemon.weight            
          })
        }      
      );
    }
    fetchData();
    return () => apiUrl;
  },[apiUrl]);

  console.log('this is data ', data);
  
  return(
    <>
      
    </>
  )
}