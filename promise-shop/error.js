let parsePromised = (json) => {
    return new Promise(function (fulfill, reject) {
      try {
        fulfill(JSON.parse(json));
      } catch (e) {
        reject(new Error('REJECTED!'));
      }
    });
  }
  
  function onReject(error) {
    console.log(error.message);
  }
  
  parsePromised(process.argv[2]).then(null, onReject);

  module.exports = () => parsePromised();
  