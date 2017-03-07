var React = require('react');
var ReactDOM = require('react-dom');

var HogwartsContainer = require('./components/HogwartsContainer');

window.onload = function(){
  ReactDOM.render(
    <HogwartsContainer />,

    document.getElementById('app')
  );
}
