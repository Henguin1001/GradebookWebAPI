A web Api for the Bellevue School District gradebook, using the gradebook node module
#Use it
All the information can be retrieved via https://gradebook-web-api.herokuapp.com
### GET /?username=[username]&password=[password]
if you're using node and request
```js
	var request = require('request');
	request.get('https://gradebook-web-api.herokuapp.com/?username=username&password=password',function(err, response){
		if(!err){
			console.log(response);
		}
	});
```