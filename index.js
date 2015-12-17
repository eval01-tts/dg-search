var request = require('request');

API_ROOT = process.env.API_URL


function searchApi(endpoint, qs, cb) {
  request({
    method: 'GET',
    url: endpoint,
    qs: qs
  }, function returnResults(err, res, body) {
    if (err) return cb(err);
    else {
      try {
        var response = JSON.parse(body);

        return cb(null, response);
      } catch (e) {
        return cb(error(e.message));
      }
    }
  });
};

function error(message) {
  return "[dg-search error]: " + message;
}

module.exports = {
  Azure: {
    search: function(params, cb) {
      var url = API_ROOT + 'v2/search/azure';
      searchApi(url, params, function(err, res) {
        if (err) return cb(err);
        else return cb(null, res);
      });
    }
  },
  AzureImage: {
    search: function(params, cb) {
      searchApi(API_ROOT + 'v2/search/azure/image', params, function(err, res) {
        if (err) return cb(err);
        else return cb(null, res);
      });
    }
  },
  Video: {
    search: function(params, cb) {
      searchApi(API_ROOT + 'v2/search/video', params, function(err, res) {
        if (err) return cb(err);
        else return cb(null, res);
      });
    }
  },
  Docs: {
    search: function(params, cb) {
      searchApi(API_ROOT + 'v2/search/docs', params, function(err, res) {
        if (err) return cb(err);
        else return cb(null, res);
      });
    }
  },
  News: {
    search: function(params, cb) {
      searchApi(API_ROOT + 'v2/search/news', params, function(err, res) {
        if (err) return cb(err);
        else return cb(null, res);
      });
    }
  },
  RSS: {
    search: function(params, cb) {
      searchApi(API_ROOT + 'c/affiliate/' + params.affiliate + '/rss/' + params.channel, params, function(err, res) {
        if (err) return cb(err);
        else return cb(null, res);
      });
    }
  }
}
