async function getLyrics() {
  const artist = document.getElementById('artist').value.trim();
  const song = document.getElementById('song').value.trim();
  const output = document.getElementById('output');

  if (!artist || !song) {
    output.textContent = "Please enter both artist and song name.";
    return;
  }

  const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
  output.textContent = "Fetching lyrics...";

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.lyrics) {
      output.textContent = data.lyrics;
    } else {
      output.textContent = "Lyrics not found.";
    }
  } catch (err) {
    output.textContent = "Error fetching lyrics.";
  }
}
