'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var request = require('request');
var moment = require('moment');

var buildingEnergyDataSchema = new Schema({
  timePeriod: {
    type: String,
    required: true
  },
  _buildingId:{
    type: Schema.Types.ObjectId,
    ref: 'building',
    required: true
  },
  energyType: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }

});

var buildingEnergyData = mongoose.model('buildingEnergyData', buildingEnergyDataSchema);

exports.create = function(buildingEnergyData_obj, building, energyType, cb) {
  //console.log('TADA', buildingEnergyData_obj)
  buildingEnergyData.create({
    timePeriod: buildingEnergyData_obj.timePeriod,
    _buildingId: building._id,
    value: buildingEnergyData_obj.kvalue,
    energyType: energyType,
  }, function(err, ir) {
    if (err) {
      console.log("ERROR creating IR", err);
      cb(err);
    }
    cb(null, ir);
  });
};

exports.find = function(buildingBlock_id, energyType, cb) {
  buildingEnergyData.find({_buildingId:buildingBlock_id, energyType:energyType}, function (err, data) {
    if(err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

exports.model = buildingEnergyData;
