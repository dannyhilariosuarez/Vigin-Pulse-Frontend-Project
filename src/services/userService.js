module.exports = {
  UserService: function($http) {
  var service = {};

  service.GetAll = GetAll;

  return service;

  function GetAll() {
    return $http.get('https://randomuser.me/api/?results=10')
      .then(handleSuccess, handleError('Error getting all users'));
  }

  function handleSuccess(data) {
    return data;
  }

  function handleError(error) {
    return function () {
      return { success: false, message: error };
    };
  }
}
}

