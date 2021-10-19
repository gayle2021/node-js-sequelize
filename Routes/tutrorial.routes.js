module.exports = app => {
    // const tutorials = require("../Controllers/tutorial.controller.js");
    const findone = require("../Controllers/findone.js");
    const findall = require("../Controllers/findall.js");
    const updat = require("../Controllers/updat.js");
    const creat = require("../Controllers/creat.js");
    const published = require("../Controllers/published.js")
    const delet = require("../Controllers/delet.js")
    const deletall = require("../Controllers/deletall.js")
  
    var router = require("express").Router();
  
    // router.post("/", tutorials.create);
    router.post("/", creat.create);
  
    // router.get("/", tutorials.findAll);
    router.get("/", findall.findAll);
  
    // router.get("/published", tutorials.findAllPublished);
    router.get("/published", published.findAllPublished);
  
    // router.get("/:id", tutorials.findOne);
    router.get("/:id", findone.findOne);
  
    // router.put("/:id", tutorials.update);
    router.put("/:id", updat.update);
  
    // router.delete("/:id", tutorials.delete);
    router.delete("/:id", delet.delete);
  
    // router.delete("/", tutorials.deleteAll);
    router.delete("/", deletall.deleteAll);
  
    app.use('/api/tutorials', router);
  };