let input = document.querySelector(".get-repos input");
let btn = document.querySelector(".get-button");
let showData = document.querySelector(".show-data");

btn.onclick = function() {
  getRepos();
};

function getRepos() {
  if (input.value == "") {
    showData.innerHTML = "<span>Please Write Github Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then(respone => respone.json())
      .then(repositories => {
      showData.innerHTML = "";
      repositories.forEach(repo => {
        let mainDiv = document.createElement("div");
        let repoName = document.createTextNode(repo.name);
        mainDiv.appendChild(repoName);
        let url = document.createElement("a");
        let urlText = document.createTextNode("visit");
        url.appendChild(urlText);
        url.href = `https://github.com/${input.value}/${repo.name}`;
        url.setAttribute("target", "_blank");
        mainDiv.appendChild(url);
        let stars = document.createElement("span");
        let starstext = document.createTextNode(`Stars ${repo.stargazers_count}`);
        stars.appendChild(starstext);
        mainDiv.appendChild(stars);
        mainDiv.className = "repo-box";
        showData.appendChild(mainDiv);
      });
    });
  }
}