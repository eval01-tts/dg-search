# DG-Search for Node.js

This nodejs module allows you to quickly and easily search for things via the APIs provided by DigitalGov Search using [nodejs](http://nodejs.org/).

```javascript
var dgSearch  = require('dg-search');
dgSearch.Video.search({
  query: 'test',
  affiliate: 'usagov',
  access_key: 'Ab-cdefghijklmnopqrStuVwXYz='
}, function(err, response) {
  if (err) { return console.error(err); }
  console.log(response.results);
});
```
