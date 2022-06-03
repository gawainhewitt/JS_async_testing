class GitHubApi {  
  async getRepoInfo(repoName, callback) {
    try {
      const result = await fetch(
        `https://api.github.com/repos/${repoName}`
      );
      const data = await result.json();
      console.log(data);
      callback(data);
    } catch (error) {
      return null;
    }
  }
}

// class GitHubApi {
//   getRepoInfo(repoName, callback) {
//     fetch('https://api.github.com/repos/' + repoName)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       });
//   }
// }


module.exports = GitHubApi;


