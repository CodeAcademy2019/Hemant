let a = [];

let alwaysAsync = () =>  {  
    let promise = new Promise(function(fulfill,reject){
        fulfill('PROMISE VALUE');
    });

    promise.then(fulfilled => {
        a.push(fulfilled);
        console.log(fulfilled);
        //console.log(a);
    },null);

    a.push('MAIN PROGRAM ');
    console.log('MAIN PROGRAM');

    Promise.all(promise).then(() => a);
    
}

alwaysAsync();
module.exports = alwaysAsync;

