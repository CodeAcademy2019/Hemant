let parsePromised = (json) => {
    return new Promise(function (fulfill, reject) {
      try {
        fulfill(JSON.parse(json));
      } catch (e) {
        reject(new Error('REJECTED!'));
      }
    });
  };
  
  let onReject = (error) => {
    console.log(error.message);
  }
  
  parsePromised('{').then(null, onReject);

  module.exports = parsePromised;

  