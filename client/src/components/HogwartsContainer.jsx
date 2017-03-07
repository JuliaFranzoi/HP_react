var React = require('react');
var CharDetails = require('./CharDetails');
var CharList = require('./CharList');


var HogwartsContainer = React.createClass({


  componentDidMount: function(){
    var url = "http://hp-api.herokuapp.com/api/characters";
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function(){
      if(request.status !== 200) return;
      var data = JSON.parse(request.responseText);
      this.setState({characters: data, focusCharacter:data[0]});
    }.bind(this);

    request.send();
  },

  getInitialState: function(){
    return {characters: [], focusCharacter: null}
  }, 


  render: function(){

    return(

      <div>
      <h1>Hogwartz  Characterz </h1>
      <CharList 
      characters={this.state.characters}
      didSelectCharacter={this.didSelectCharacter}/>
      <CharDetails 
      character={this.state.focusCharacter}/>
      <p>I'm a what?</p>
      </div>

      );
  },

  didSelectCharacter: function (character) {
    this.setState({focusCharacter: character});
  }
});

module.exports = HogwartsContainer;