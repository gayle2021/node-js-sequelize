const db = require("../models");
const Tutorial = db.tutorials;


exports.findOne = (req, res) =>  {
    const id = req.params.id;
  
    Tutorial.findByPk(id).then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      }).catch(err => {
        res.status(500).send({
          message: `Error retrieving Tutorial with id=${id}`
        });
      });
};