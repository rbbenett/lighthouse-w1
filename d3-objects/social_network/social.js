const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const biggestFollower = function(data) {
// return name of person who follows the most people
  let bigFollower = {name: '', followCount: 0};
  for (let info in data) {
    if (data[info]['follows'].length > bigFollower.followCount) {
      bigFollower.name = data[info]['name'];
      bigFollower.followCount = data[info]['follows'].length
    }
  }

  console.log(`${bigFollower.name} follows the most people (${bigFollower.followCount})`);
  return bigFollower.name;
};

const mostPopular = function(data) {
  // returns name of the most followed person
  let followerCount = {};
  for (let info in data) {
    for (let i = 0; i <= data[info]['follows'].length - 1; i++) {
      if (!followerCount[data[info]['follows'][i]]) {
        followerCount[data[info]['follows'][i]] = 1;
      } else {
        followerCount[data[info]['follows'][i]] += 1;
      }
    }
  }
  let mostFollows = 0;
  for (let info in followerCount) {
    if (followerCount[info] > mostFollows) {
      mostFollows = followerCount[info];
    }
  }
  const mostPopularUsers = {};
  for (let info in followerCount) {
    if (followerCount[info] === mostFollows) {
      for (let userName in data) {
        if (info === userName) {
          mostPopularUsers[data[userName]['name']] = mostFollows;
        }
      }
    }
  }
  console.log("User(s) with the most followers:");
  console.log(mostPopularUsers);

  return mostPopularUsers;
};


const printAll = function(data) {
  //Prints a list of everyone and for each of them, the names of who they follow and who follows them
  const followData = {};
  const fullList = {};


};

const unrequitedFollowers = function(data) {
  // returns a list of names for those who follow someone that doesn't follow them back
  let unRequitList = [];
};

const followersOver30 = function(data) {
  // Identify who has the most followers over 30
};

const followsOver30 = function(data) {
  // Identify who follows the most people over 30
};

const reachFollowers = function(data) {
  //List everyone and their reach (sum of # of followers and # of followers of followers)
}

biggestFollower(data);
mostPopular(data);