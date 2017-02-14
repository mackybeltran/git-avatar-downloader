var request = require('request');
var fs = require('fs');
var GITHUB_USER = 'mackybeltran'
var GITHUB_TOKEN = '8a9997eb1f27395b4a83591908df938dbce044ae'
var OwnerRepo = process.argv.slice(2,3)[0]
var nameRepo = process.argv.slice(3, 4)[0]


console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN +'@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {"User-Agent": "Student Project"}
  }
  request(options, function (error, response, body) {
    var userData = JSON.parse(body)
    if (!error && response.statusCode === 200) {
      cb(error, body);
    } else {
      return "ERROR!"
    }
    })
  }




function downloadImageByURL(url, filePath) {
  request.get(url)
  .pipe(fs.createWriteStream(filePath));

}

getRepoContributors("jquery", "jquery", function(err, result) {
  var data = JSON.parse(result)
  data.forEach(function(user) {
    downloadImageByURL(user['avatar_url'], "./avatars/" + user['login'] + ".jpg");
  });
});




