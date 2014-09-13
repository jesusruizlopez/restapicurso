var userModel = require('../models/user.js');

exports.register = function(req, res) {
  userModel.create(req.body)
  .then(function(response) {
    if (response == null) {
      throw new Error("Error al guardar");
    }
    else
      res.send({success: true, message: "Usuario registrado correctamente", user: response});
  })
  .then(undefined, function(err) {
    console.log(err);
    res.send({success: false, message: "Ocurrió un error al guardar", detail: err});
  });
};

exports.getUsers = function(req, res) {
  userModel.find().populate('publications').exec()
  .then(function(response) {
    res.send({success: true, users: response});
  })
  .then(undefined, function(err) {
    console.log(err);
    res.send({success: false, message: "Ocurrió un error al consultar", detail: err});
  });
}
