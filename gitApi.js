async function convert(repoName, callback) {
  try {
    const result = await fetch(
      `https://api.github.com/repos/${repoName}`
    );
    const data = await result.json();
    callback(data);
  } catch (e) {
    return null;
  }
}