document.getElementById('lyrics-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const artist = document.getElementById('artist').value;
  const title = document.getElementById('title').value;

  fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => {
      if (data.lyrics) {
        document.getElementById('lyrics').textContent = data.lyrics;
      } else {
        document.getElementById('lyrics').textContent = 'Lyrics not found.';
      }
    })
    .catch(() => {
      document.getElementById('lyrics').textContent = 'Error fetching lyrics.';
    });
});
