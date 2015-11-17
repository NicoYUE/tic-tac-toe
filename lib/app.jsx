'use strict';

var React = require('react');

var boxStyle = {
'height' : '100px',
'width' : '100px'
};

var Box = React.createClass({

  getInitialState : function(){
  return {value: this.props.initialvalue}
  },

  componentWillMount: function() {
  		var current = this;
  	    this.timer = setInterval(function(){
  			var oldValue = current.state.value;
  			var newValue;
  			if(oldValue === 'X'){newValue = 'O';}else{newValue='X';}
  			current.setState({ value:newValue});
  		},1000);
  	  },

  'render': function onRender () {
    return (
      <button style ={boxStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialvalue ='Y' />, document.body);
