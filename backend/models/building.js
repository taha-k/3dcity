'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var BuildingSchema = new Schema({
  buildingName: {
    type: String,
    required: true,
    unique: true
  }
});

var BuildingBlock = mongoose.model('BuildingBlock', BuildingSchema);

exports.create = function(name, cb) {
  //console.log('TADA', intervalBlock, _apartmentId)
  BuildingBlock.create({
    buildingName: name,
  }, function(err, ib) {
    if (err) {
      //console.log("ERROR creating IB", err);
      cb(err);
    }
    cb(null, ib);
  });
};

exports.model = BuildingBlock;
