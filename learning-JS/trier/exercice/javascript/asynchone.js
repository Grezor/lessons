// setTimeout(function() {
//     console.log("I'm here!")
// }, 5000);

// console.log("Where are you?");



/**
 * 
 */

var GETRequestCount = 0;
var GETRequestResults = [];

function onGETRequestDone(err, result) {
    if (err) throw err;
    
    GETRequestCount++;
    GETRequestResults.push(result);
    
    if (GETRequestCount == 2) {
        post(url3, function(err, result) {
            if (err) throw err;
            
            Promise.all([get(url1), get(url2)])
            .then(function(results) {
                return Promise.all([results, post(url3)]];
            })
            .then(function(allResults) {
                // We are done here !
            });
        });
    }
}

get(url1, onGETRequestDone);
get(url2, onGETRequestDone);

