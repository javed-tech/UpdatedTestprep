import React from "react";
import * as Cards from './components/cards';


function MainComp(){
  const [state, setState] = React.useState({
    selectedCardType: ''
  })
  const renderCardSelector=()=> {
    return (
      <div className="form-group top-margin-small">
        <label className="card-selector-label">Select Card Style</label>
        <select className="card-selector form-control"
          onChange={(e) => setState({ selectedCardType: e.target.value })}>
          <option></option>
          <option>CardA</option>
          <option>CardB</option>
        </select>
        <button onClick={(e) => setState({ selectedCardType: e.target.value })}>click</button>
      </div>
    );
  }
  const renderSelectedCard=(selectedCardType)=> {
    console.log('working')
    if (!selectedCardType)
      return <Cards.CardA/>;

    const Card = Cards[selectedCardType];

    return <Card />;
  }




    return (
      <>
        <section className="app-section container">
          {renderCardSelector()}

          <div className="top-margin-small">
            {renderSelectedCard(state.selectedCardType)}
          </div>
        </section>
      </>
    );




}


export default MainComp;


