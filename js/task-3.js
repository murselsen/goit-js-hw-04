console.log('~~~~~~~~~ Task 3: ~~~~~~~~~');

const profile = {
  username: 'Jacob',
  playTime: 300,
  getInfo: () => {
    // this doesn't work
    // return `${this.username} has ${this.playTime} active hours!`;

    return `${profile.username} has ${profile.playTime} active hours!`;
  },
  changeUsername: name => {
    // this doesn't work
    this.username = name;

    profile.username = name;
  },
  updatePlayTime: time => {
    // this doesn't work
    this.playTime += time;

    profile.playTime += time;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
