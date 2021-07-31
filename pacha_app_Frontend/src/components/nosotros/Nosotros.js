import React from "react";
import Card from "./Card";

import Menu from '../menu/Menu';
const cards = [
  {
    id: 1,
    title: "Andres Forero",
    image: "https://media-exp1.licdn.com/dms/image/C5603AQHCcnuP1oasBg/profile-displayphoto-shrink_400_400/0/1600618187573?e=1632960000&v=beta&t=ipigEaynE8CEBlVnNkl7Z133cJWOCYjhJbCrzVcTlpQ",
	text: "Systems Engineer",
    url: "https://www.linkedin.com/in/andres-david-forero-martinez/",
  },
  {
    id: 2,
    title: "Thania Colán",
    image: "https://media-exp1.licdn.com/dms/image/D5635AQHKc7sTOeAw4g/profile-framedphoto-shrink_400_400/0/1622164074759?e=1627794000&v=beta&t=HFtlGZjqFr4Hos9Ph0kuQ43lxYBOuE4T38Y29wrWA68",
	text: "Social Content Marketing ",
    url: "https://www.linkedin.com/in/thaniaacp/",
  },
  {
    id: 3,
    title: "Arturo Gómez",
    image: "https://media-exp1.licdn.com/dms/image/C4D03AQGvNNjJfiHuDA/profile-displayphoto-shrink_400_400/0/1594161676990?e=1632960000&v=beta&t=mVd3W2PAn2dOFleAZyyjbyrLlFFHhu6LGzyOe_Tm47M",
	text: "Software Engineering Student",
    url: "https://www.linkedin.com/in/arturo-g%C3%B3mez-carlos-2230671b2/",
  },
  {
    id: 4,
    title: "Haydeé Sebastian",
    image: "https://media-exp1.licdn.com/dms/image/C4E03AQFL5U5-pB2ZxQ/profile-displayphoto-shrink_400_400/0/1540397095711?e=1632960000&v=beta&t=qpwNl3pgejNibMQWmuaKyd3D3QWAGl6eR9GsC81GGVs",
	text: "Bachelor of Software Engineering",
    url: "https://www.linkedin.com/in/haydeeesthefanysebastianmeza/",
  },
  {
    id: 5,
    title: "Romel Arce",
    image: "https://media-exp1.licdn.com/dms/image/C4E03AQEZQVZszA93Dg/profile-displayphoto-shrink_400_400/0/1626817043472?e=1632960000&v=beta&t=PUmfhgj3nEhC8ihwxk29NAhQ-Nqj0Ig0HBJPuzoWaKQ",
	text: "Project Leader",
    url: "https://www.linkedin.com/in/romel-arce-romero/",
  },
];

function Nosotros() {
  return (
	<>

	<Menu />	
		<div className="container d-flex justify-content-center align-items-center h-100">
		<div className="row">
			 
				{cards.map(({ title, image, url,text, id }) => (
				<div className="col-md-2" key={id}>
					<Card imageSource={image} title={title} url={url}   text={text}/>
				</div>
				))}
			
		</div>
		</div>
	</>
  );
}

export default Nosotros;