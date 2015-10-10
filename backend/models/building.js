'use strict';

var mongoose = require('mongoose');
var request = require('request');
var Schema = mongoose.Schema;
var moment = require('moment');
var csv = require('fast-csv');
var path = require('path');
var fs = require('fs');

var buildingEnergyData = require('./buildingEnergyData');

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
  BuildingBlock.findOne({buildingName: name}, false, function(err, user) {
    if(err) {
      cb(err);
    } else if(!user) {
      BuildingBlock.create({
        buildingName: name,
      }, function(err, ib) {
        if (err) {
          //console.log("ERROR creating IB", err);
          cb(err);
        }
        cb(null, ib);
      });    
    } else {
      cb(null,user);
    }

  });
  
};

exports.storeEnergyData = function(usagepoint, cb) {
  console.log(usagepoint);
  var tempArr=[];
  console.log("Reached here",path.join(__dirname+'../../../data/Electricity.csv'));
  exports.create(usagepoint.BuildingName, function(err,ib){
    console.log('BUILDINGx',ib);
    var stream = fs.createReadStream(path.join(__dirname+'../../../data/'+usagepoint.fileName));
    csv
      .fromStream(stream, {headers : ["timePeriod", "kvalue"],delimiter:';'})
      .on("data", function(data){
        if(data.timePeriod!=='' || data.kvalue!=='') {
          buildingEnergyData.create(data,ib,usagepoint.Type, function(err,bd){
            //console.log("RRRRRR",data,ib,usagepoint.Type);
            if(!err){
              tempArr.push(bd);
            } else {
            }
          });
        }
        
      })
      .on("end", function(){
        console.log("done");
        cb(null,tempArr);
    });  
  });
};

exports.get = function(params, cb) {
  console.log(params);
  BuildingBlock.findOne({buildingName: params.buildingName}, false, function(err, bb) {
    if(err){
      cb(err);
    } else {
      buildingEnergyData.find(bb._id, params.Type, function(err, dataArr) {
        if(err) {
          cb(err);
        } else {
          cb(null,dataArr)
        }
      });

    }
  });
};


exports.model = BuildingBlock;
