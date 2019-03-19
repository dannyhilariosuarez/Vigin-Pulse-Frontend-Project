module.exports = {
  leaderboardCtrl: function() {
  let controller = {};

    controller.randomInt = randomInt; 

    return controller;

    function randomInt(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min))
    }

   
}
}

