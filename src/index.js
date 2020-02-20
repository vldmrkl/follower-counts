const fetch = require("node-fetch");

module.exports = {
  getInstagramFollowers: username => {
    return new Promise((resolve, reject) => {
      fetch(`https://www.instagram.com/${username}?__a=1`)
        .then(res => res.json())
        .then(json => {
          resolve(json.graphql.user.edge_followed_by.count);
        });
    });
  },
};
