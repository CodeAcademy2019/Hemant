function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      // SOLUTION GOES HERE
      return submittedUsers.every(function(val) { return goodUsers.indexOf(val) >= 0; });
    };
  }

  module.exports = checkUsersValid