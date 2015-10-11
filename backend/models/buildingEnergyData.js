'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var request = require('request');
var moment = require('moment');

var buildingEnergyDataSchema = new Schema({
  timePeriod: {
    type: Date,
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
  buildingEnergyData.create({//new Date(Date.parse("Jul 8, 2005"));
    timePeriod: new Date(Date.parse(buildingEnergyData_obj.timePeriod)),
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

exports.find = function(buildingBlock_id, energyType,params, cb) {
  if(params.fromT && params.toT) {
    console.log("INNNN", params)
    //{"created_on": {"$gte": new Date(2012, 7, 14), "$lt": new Date(2012, 7, 15)}}
    buildingEnergyData.find({"timePeriod":{"$gte":new Date(Date.parse(params.fromT)),
      "$lt":new Date(Date.parse(params.toT))},
      _buildingId:buildingBlock_id,
      energyType:energyType},
      function (err, data) {
      if(err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  } else {
    buildingEnergyData.find({_buildingId:buildingBlock_id, energyType:energyType}, function (err, data) {
      if(err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  }
};

exports.model = buildingEnergyData;
