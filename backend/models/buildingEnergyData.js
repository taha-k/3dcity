'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

exports.create = function(buildingEnergyData_obj, building, cb) {
  //console.log('TADA', intervalReading)
  buildingEnergyData.create({
    timePeriod: buildingEnergyData_obj.timePeriod,
    _buildingId: building,
    value: buildingEnergyData_obj.value,
    energyType: buildingEnergyData_obj.energyType,
  }, function(err, ir) {
    if (err) {
      //console.log("ERROR creating IR", err);
      cb(err);
    }
    cb(null, ir);
  });
};

exports.model = buildingEnergyData;
