var publicationModel = require('../models/publication.js');

exports.sendPublication = function(req, res) {
  publicationModel.create(req.body)
  .then(function(response) {
    if (response == null) {
      throw new Error("Error al guardar");
    }
    else
      res.send({success: true, message: "Publicación guardada correctamente", publication: response});
  })
  .then(undefined, function(err) {
    console.log(err);
    res.send({success: false, message: "Ocurrió un error al guardar", detail: err});
  });
};

exports.editPublication = function(req, res) {
  publicationModel.findByIdAndUpdate(req.param('id'), {$set: {message: req.body.message, edited: true}}, function(err, response) {
    if (err != null) {
      console.log(err);
      res.send({success: false, message: "Ocurrió un error al actualizar", detail: err});
    }
    else {
      if (response == null) {
        console.log(err);
        res.send({success: false, message: "Ocurrió un error al actualizar", detail: err});
      }
      else
        res.send({success: true, message: "Publicación editada correctamente", publication: response});
    }
  });
};

exports.getPublications = function(req, res) {
  publicationModel.find().populate('user').sort('-publicationDate').exec()
  .then(function(response) {
    res.send({success: true, publications: response});
  })
  .then(undefined, function(err) {
    console.log(err);
    res.send({success: false, message: "Ocurrió un error al consultar", detail: err});
  });
}
