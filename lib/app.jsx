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

  handleClick: function() {
  		var current = this;
  	   var oldValue = current.state.value;
       var newValue = oldValue === 'X' ? 'O' : 'X';
       current.setState({value:newValue})
  	  },

  'render': function onRender () {
    return (
      <button style ={boxStyle} onClick={this.handleClick}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialvalue ='Step 6' />, document.body);
