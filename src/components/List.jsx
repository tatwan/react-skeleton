var React = require('react');
var ListItem = require('./ListItem.jsx');

var movies = [{"id": 1, "text": "Minions"}, {"id": 2, "text": "Fast Five"}, {"id": 3, "text": "Back to the Future"}, {"id": 4, "text": "Braveheart"}];

var List = React.createClass({
   render: function() {
       
       var ListItems = movies.map(function(item) {
          
          return <ListItem key= {item.id} movies={item.text} />;
           
       });
       
       return (<ul>{ListItems}</ul>);
       
   } 
    
});

module.exports = List;