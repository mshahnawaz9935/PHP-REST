function updatedata()
{
	var id = getParameterByName('id');
	console.log(id);
	var name = document.getElementById('name').value;
	var title = document.getElementById('title').value;
	console.log('Name',name ,'Title' , title);
	var obj = {};
	if(name !== '' && title !== '')
		obj = {
		  "email": name,
		  "title": title
		};
		if(name == '' && title !== '')
		obj = { 
		  "title": title
		};
		if(name !== '' && title == '')
		obj = {
		  "email": name
		};
		
	var data = JSON.stringify(obj);
	console.log(data);
	var HttpClient = function() {
    this.get = function(url, Callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200)
                Callback(xhr.responseText);
        }

        xhr.open( "PUT", url, true );    
		xhr.setRequestHeader("content-type", "application/json");        
        xhr.send( data );
    }
}

	url = 'http://localhost:8000/api/customers/'+id;
	console.log(url);
	var client = new HttpClient();
	client.get(url, function(response) {
			data = JSON.parse(response);
			console.log(data);
			document.getElementById('updated').innerHTML = 'Successfully updated';
	});
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function submitdata()
{
	var email = document.getElementById('name').value;
	var title = document.getElementById('title').value;
	console.log(name , title);
	var data = new FormData();
	data.append("email", email);
	data.append("title", title);
	var HttpClient = function() {
    this.post = function(url, aCallback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200)
                aCallback(xhr.responseText);
        }

        xhr.open( "POST", url, true );            
        xhr.send( data );
    }
}

	url = 'http://localhost:8000/api/customers/';
	console.log(url);
	var client = new HttpClient();
	client.post(url, function(response) {
			data = JSON.parse(response);
			console.log(data);
			document.getElementById('created').innerHTML = 'Successfully created';
	});
	
}
function getarticle(id)
{	
	var HttpClient = function() {
    this.get = function(url, aCallback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200)
                aCallback(xhr.responseText);
        }

        xhr.open( "GET", url, true );            
        xhr.send( null );
    }
}

	url = 'http://localhost:8000/api/customers/' + id + '';
	console.log(url);
	var client = new HttpClient();
	client.get(url, function(response) {
			data = JSON.parse(response);
			console.log(data);
	});
	
}