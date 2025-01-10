console.log('~~~~~~~~~ Task 3: ~~~~~~~~~');

const profile = {
  username: 'Jacob',
  playTime: 300,
  getInfo: function() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
  changeUsername: function(name) {
    this.username = name;
  },
  updatePlayTime: function(time) {
    this.playTime += time;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
