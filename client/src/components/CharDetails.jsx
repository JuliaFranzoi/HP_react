var React = require('react');

var CharDetails = function(props) {
  if (!props.character) {
    return <h4> Oh noo your not a wizard</h4> 
  }
  return (
    <div>
    <h4>name: {props.character.name}</h4>
    <h4>species: {props.character.species}</h4>
    <h4>gender: {props.character.gender}</h4>
    <h4>house: {props.character.house}</h4>
    <h4>eyeColour: {props.character.eyeColour}</h4>
    <h4>hairColour: {props.character.hairColour}</h4>
    <img src="https://cdn.meme.am/cache/instances/folder580/61629580.jpg"/>
    <img src={props.character.image}/>

    </div>

    )


  

};

module.exports = CharDetails