'use strict';

var auth = require('../middleware/auth');
var express = require('express');
var util = require('util');
var common = require('./common');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var achievements = require('../common/achievements');
var User = require('../models').users;
var Log = require('../models').logs;
var defaultPath = path.dirname(require.main.filename) + '/res/missingProfile.png';
var Building = require('../models').building;

router.get('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(path.join(__dirname+'../../../front/index.html'));
});

/**
 * @api {post} /buildings/storeEnergyData Fetch all UsagePoints & Sensors from Reply
 * @apiGroup buildings
 *
 * @apiParam {Boolean} AddUsagePoints adds new usage points only
 * @apiParam {Boolean} [UpdateUsagePoints] updates existing UsagePoints
 *   with new sensor data if available
 * @apiParam {[Number]} [ApartmentId] Adds/Updates the value of only
 *  that particular ApartmentId/Ids
 * @apiExample {curl} Example usage(PENDING-For now only data is fetched!!):
 *  # Get API token via /api/user/token
 *  export API_TOKEN=fc35e6b2f27e0f5ef...
 *
 *  curl -i -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $API_TOKEN" -d \
 *  '{
 *    'AddUsagePoints': true,
 *    'UpdateUsagePoints': true,
 *    'ApartmentId': [14,17]
 *  }' \
 *  http://localhost:3000/api/consumption/getAllUsagePointsData
 *
 * @apiSuccessExample {[json]} Success-Response:
 *   [
 *    { ApartmentID: '14',
 *      Success: true,
 *      UsagePoint: { __v: 0, apartmentId: '14', _id: 55acb78868440371168b57c7 }
 *    },
 *    { ApartmentID: '42',
 *      Success: true,
 *      UsagePoint: { __v: 0, apartmentId: '42', _id: 55acb78868440371168b57cc }
 *    },
 *    { ApartmentID: '17',
 *      Success: true,
 *      UsagePoint: { __v: 0, apartmentId: '17', _id: 55acb78868440371168b57c8 }
 *    },
 *    { ApartmentID: '73',
 *      Success: true,
 *      UsagePoint: { __v: 0, apartmentId: '73', _id: 55acb78868440371168b57cd }
 *    }
 *   ]
 */
router.post('/storeEnergyData', function(req, res) {
  Building.storeEnergyData(req.body, res.successRes);
});

module.exports = router;