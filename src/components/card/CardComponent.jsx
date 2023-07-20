import React from "react";
import { Button, Card } from "react-bootstrap";
const CardComponent = ({ item, onDelete ,onEdit}) => {
  let description = "";
  description =
    item.description.length > 30
      ? item.description.slice(0, 50).concat("...")
      : item.description;

      // while passing id inside function like delete delehandler(id) then arrow function ()=> is needed it act e.preventDefault() by default  
  return (
    <>
      <div className="card mb-1" style={{ width: "22%", height: "400px" }}>
        <Card.Title variant="top" className="h-50">
          <img
            className="card-img-top h-100"
            src={item.thumbnail}
            alt={item.title}
          />
        </Card.Title>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{description}</p>
          {/* <a href="#" className="btn btn-">
            Go somewhere
          </a> */}
          <Button variant="btn btn-primary" onClick={(e)=> onEdit(item)}>
            Edit
          </Button>
          <Button variant="btn btn-danger" onClick={(e)=> onDelete(item.id)}>
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
