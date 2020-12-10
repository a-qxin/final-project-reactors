var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
 'message ': 'hello world',
 'listingId': '12421421' 
});
var config = {
  method: 'post',
  url: 'http://localhost:5000/create-inquiry',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
