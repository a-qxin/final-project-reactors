var axios = require('axios');
var qs = require('qs');

function axiosGetListingsByAuthor(){
    var data = qs.stringify({
    'authorId': '5fc327197fc6c32afe536c50' 
    });
    var config = {
    method: 'get',
    url: 'http://localhost:3000/listing/getByAuthor',
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cookie': 'connect.sid=s%3AVyTRsvajTcNz7iJSNbT5PgqxvCO3UPgV.sqwqobiCIcmcWBMiCoO0M7BncCkPN3zKsm4udhAh47w'
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
}