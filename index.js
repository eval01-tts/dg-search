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
  Azure: {
    search: function(params, cb) {
      var url = API_ROOT + '/azure';
      searchApi(url, params, function(err, res) {
        if (err) return cb(err);
        else return cb(null, res);
      });
    }
  },
  AzureImage: {
    search: function(params, cb) {
      searchApi(API_ROOT + '/azure/image', params, function(err, res) {
        if (err) return cb(err);
        else return cb(null, res);
      });
    }
  },
  Video: {
    search: function(params, cb) {
      searchApi(API_ROOT + '/video', params, function(err, res) {
        if (err) return cb(err);
        else return cb(null, res);
      });
    }
  }
}
