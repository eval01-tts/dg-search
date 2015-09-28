var request = require('request');

var API_ROOT = 'https://search.usa.gov/api/v2/search';

function searchApi(endpoint, qs, cb) {
  request({
    method: 'GET',
    url: endpoint,
    qs: qs
  }, function returnResults(err, res, body) {
    if (err) return cb(err); 
    else return cb(null, JSON.parse(body));
  });
};

module.exports = {
  Video: {
    search: function(params, cb) {
      searchApi(API_ROOT + '/video', params, function(err, response) {
        if (err) return cb(err);
        else return cb(null, response);
      });
    }
  }
}
