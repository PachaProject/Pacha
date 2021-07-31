import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";
import data from '../../../assets/data';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

const ListaCampesinos = () => {


  const renderCard = (card, index) => {
    return (
    

<div className="card mb-1" style={{width: '600px'}}>
<div className="row no-gutters">
  <div className="col-md-6">
      <Card.Img variant="top" src="holder.js/0px180" src={card.image} />     
  </div>
  <div className="col-md-6">
    <div className="card-body">
      <h5 className="card-title">  {card.name}</h5>
      <Typography variant="body2" color="textSecondary" component="p">
        <p>Seller: {card.description}  // Price:  {card.precio}// Description: {card.informacion} //
        Contact: {card.contacto} //Web: {card.web}</p>
        <Rating name="read-only" value={card.calificacion} readOnly />
     </Typography>
    </div>
  </div>
</div>
</div>

    );
  };

  return <div >  {data.venues.map(renderCard)}    </div>;
};

export default ListaCampesinos;
