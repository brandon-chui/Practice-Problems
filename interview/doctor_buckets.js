// /* 	Turn collection of objects into buckets 
// 	Input :
// 	[ 
// 	    { “type”: “pediatrics”, “full_name”: “Sebastian Grobelny” }, 
// 	    { “type”: “internal”, “full_name”: “Derry Nixon”},
// 	    { “type”: “internal”, “full_name”: “James Wantuck”}
// 	]
// 	Output:
// 	{
// 	  “pediatrics”: [ “Sebastian Grobelny” ],
// 	  “internal”: [ “Derry Nixon”, “James Wantuck” ]
// 	}
//      *`/ https://jsfiddle.net/angela_j_niu/rmw9hdj5/#
     


function doctors(obj) {
	let newObj = {
  	'untitled': []
  };
	for (let i = 0; i < obj.length; i++) {
  	if (!obj[i].type) {
    	newObj['untitled'].push(obj[i].full_name);
    } else if (!obj[i].full_name) {
    	continue;
    } else if (newObj.hasOwnProperty(obj[i].type)) {
    	newObj[obj[i].type].push(obj[i].full_name);
    } else if (!(newObj.hasOwnProperty(obj[i].type))) {
    	newObj[obj[i].type] = [obj[i].full_name];
    }
  }
  
  return newObj;
}

let input = 	[ 
	    { type: 'pediatrics', full_name: 'Sebastian Grobelny' }, 
	    { type: 'internal', full_name:'Derry Nixon'},
	    { type: 'internal', full_name: 'James Wantuck'},
      { type: null, full_name: 'Angela Niu' },
      { type: 'internal', full_name: '' },
	];
  
console.log(doctors(input));