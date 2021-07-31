import React from 'react';
import {Popup} from 'react-leaflet';
import { Card } from "react-bootstrap";

const MarkerPopup = (props) => {
  const { name } = props.data;
  const { image } = props.data;
  const { description } = props.data;
  const { precio } = props.data;
  const { contacto } = props.data;
  console.log(name);

  return  (<Popup>

      <Card style={{ width: '10rem' , height:'13rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{ fontSize:'15px', marginLeft: '-15px',marginTop: '-15px', marginRight: '-30px' }} >{name}</Card.Title>
          <Card.Text  style={{ fontSize:'12px', marginLeft: '-30px',marginTop: '-15px', marginRight: '-30px'}} >
              Seller: {description}  //
              Price:  {precio} //
              Contact:{contacto}
          </Card.Text>
        </Card.Body>
      </Card>
  </Popup>);
};

export default MarkerPopup;
