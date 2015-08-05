var express = require('express');
var NestApi = require('nest-api');
var nestApi = new NestApi('USERNAME', 'PASSWORD');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/nest/getTemperature', function(req, res, next) {
  nestApi.login(function(data){
		console.log('logged in. data: ' + data);
		nestApi.get(function(data){
			var shared = data.shared[Object.keys(data.schedule)[0]];
			console.log('Currently ' + shared.current_temperature + ' degrees celcius');
		});
	});
	
	
});

module.exports = router;
