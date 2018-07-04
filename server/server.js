var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>It\'s a api project</h1>');
});

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});
  
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  })

  console.log(req.body);
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});


// /todo/1234

app.get('/todo/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(400).send('Id not valid');
  }
  Todo.findById(id).then((todo)=>{
    res.send(todo);  
  }, (e) => {
    res.status(400).send(e);  
  })
})

app.delete('/todo/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(400).send('Id not valid');
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send('todo not found');   
    }
    res.send(todo);
  }, (e) => {
    res.status(400).send(e);  
  }).catch((e) => {
    res.status(400).send(e);
  })
})

app.listen(port, () => {
	console.log(`started on port ${port}. `)
});

module.exports = {
  app
}