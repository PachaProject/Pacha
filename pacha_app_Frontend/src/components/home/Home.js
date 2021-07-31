import React , { useEffect, useState } from 'react';

import Menu from '../menu/Menu';
import MapView from './mapa/MapView';
import './Home.css';
import ListaCampesinos from './lista/ListaCampesinos'

const Home = () => {
	const [state, setState] = useState({
	  longitude: 0,
	  latitude: 0,
	});
  
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
		  function (position) {
			// console.log(position);
			setState({
			  longitude: position.coords.longitude,
			  latitude: position.coords.latitude,
			});
		  },
		  function (error) {
			console.error("Error Code = " + error.code + " - " + error.message);
		  },
		  {
			enableHighAccuracy: true,
		  }
		);
	  }, []);


	  return (
			<>

			<Menu />		

		        <div className="container">
		  	  		<div className="uno">	
						<ListaCampesinos/> 
					</div>
		  	  		<div className="dos">
						<MapView/>
					</div>		
					
			    </div>

	  		</>

		)
	
};

export default Home;