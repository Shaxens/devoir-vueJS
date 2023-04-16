const Client = require('../models/Clients')

const getItems = (req, res)=> {
  Client.find().then((clients)=>{
    res.status(200).json(clients)
  }).catch(error => res.status(400).json({ error }))
}

const getItem = (req, res)=> {
  const id = req.params.id
  console.log(req.foo)
  Client.findOne({
    _id: id
  }).then((client)=>{
    res.status(200).json(client)
  }).catch(error => res.status(400).json({ error }))
}

const patchItem = (req, res)=> {
  const id = req.params.id
  const updatedClient = req.body

  console.log(req.body)
  Client.updateOne({
    _id: id
  }, {
    ...updatedClient
  }).then((client)=>{
    res.status(201).json(client)
  }).catch(error => res.status(400).json({ error }))
}

const postItem = (req, res)=> {
  const newClient = req.body

  if(!newClient.firstName || !newClient.lastName || !newClient.email) {
    return res.status(400).json({error: 'Les paramètres firstName, lastName et email sont requis.'})
  }
  const client = new Client({ ...newClient })
  client.save().then(()=> {
    res.status(201).json(client)
  }).catch(error => res.status(400).json({ error }))
}

const deleteItem = (req, res)=> {
  const id = req.params.id
  Client.deleteOne({
    _id: id
  }).then(()=>{
    res.sendStatus(204)
  }).catch(error => res.status(400).json({ error }))
}

module.exports = { getItems, getItem, patchItem, postItem, deleteItem }