const db = require("../models");
const Tutorial = db.tutorials;
exports.create = (req, res) => {
    if(!req.body.title){
        res.status(400).send({
            message:"Content is empty"
        })
    }
  
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published:false
    }
  
    Tutorial.create(tutorial).then(data => res.send(data)).catch( err => {
        res.status(500).send({ 
            message:err.message
          })
    })
  };
  