import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

function Deck({ deck }) {
  const history = useHistory();

  //if ( deck.id === 0 ) return <p>Loading...</p>;

  const cardList = deck.cards.map((card) => (
    <Card key={card.id} card={card} />
  ));
  
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary" onClick={() => history.push(`/`)}>Home</li>
          <li className="breadcrumb-item active">{deck.name}</li>
        </ol>
      </nav>
      <div>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <div className="row">
          <button type="button" className="btn btn-secondary mx-3">Edit</button>
          <button type="button" className="btn btn-primary mr-3">Study</button>
          <button type="button" className="btn btn-primary mr-3">+ Add Cards</button>
          <button type="button" className="btn btn-danger mr-3">Delete</button>
        </div>
        <h2 className="my-4">Cards</h2>
        <div>{cardList}</div>
      </div>
    </div>
  );
}

export default Deck;