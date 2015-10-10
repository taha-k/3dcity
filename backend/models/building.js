'use strict';

var mongoose = require('mongoose');
var request = require('request');
var Schema = mongoose.Schema;
var moment = require('moment');
var fast-csv = require('fast-csv');

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

exports.storeEnergyData = function(usagepoint, cb) {
  console.log("Reached here");
  var stream = fs.createReadStream("my.csv");
   
  var csvStream = csv()
      .on("data", function(data){
           console.log(data);
      })
      .on("end", function(){
           console.log("done");
      });
   
  stream.pipe(csvStream);

  /*request({
    url: config.civisURL + '/energyplatform.svc/getallsensors',
    qs: {
    }
  }, function(err, res, body) {
    if (err) {
      cb(err);
    } else {
      var parser = new xml2js.Parser({
        explicitArray: false
      });
      parser.parseString(body, function(err, result) {
        if (err) {
          cb(err);
        }
        var tempArr = [];

        async.each(result.entry.content.usagePoint, function(obj, callback) {
          exports.create(obj, function(err, success) {
            if (err) {
              tempArr.push(success);
              callback();
            } else {
              tempArr.push(success);
              callback();
            }
          });
        }, function(err) {
          if (err) {cb(err);}
          cb(null, tempArr);
        });
      });
    }
  });*/
};


exports.model = BuildingBlock;
