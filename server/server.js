var env = process.env.NODE_ENV || 'development';
console.log('env ***********', env);

if(env === 'development'){
  process.env.PORT = 3000
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'
}else if(env === 'test'){
  process.env.PORT = 3000
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoTestApp'
}

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>It\'s a api project</h1>');
});

// create todo
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

// get todo
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});


// show todo

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


// delete todo
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


// update todo

app.patch('/todo/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)){
    return res.status(400).send('Id not valid');
  }
  
  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }


  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo){
      return res.send(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })

})


app.listen(port, () => {
	console.log(`started on port ${port}. `)
});

module.exports = {
  app
}