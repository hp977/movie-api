document.querySelector("#submit").addEventListener("click", getMovieDetail);

async function getMovieDetail() {
  const rapName = document.querySelector("input").value;
  try {
    const res = await fetch(
      `http://localhost:8000/api/movie/${movieName}`
    );
    const data = await res.json();
    console.log(data);
    document.querySelector("h2").innerText = data.birthName;
  } catch (err) {
    console.log(err);
  }
}