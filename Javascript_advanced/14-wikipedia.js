function createElement(data) {
	let node1 = document.createElement('p');
	document.body.appendChild(node1);
	node1.insertAdjacentText('beforeend', data);
  }
  
  
  function queryWikipedia(callback) {
	let req = new XMLHttpRequest();
  
	req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  
	req.responseType = 'json';
  
  
	req.send();
  
  
	req.onload = function() {
	  let responseObj = req.response;
	  
	  callback(responseObj.query.pages['21721040'].extract);
	};
	  
  
  }
  
  queryWikipedia(createElement);
  