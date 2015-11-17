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
  'render': function onRender () {
    return (
      <button style ={boxStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialvalue ='Y' />, document.body);
