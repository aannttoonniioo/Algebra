const form = document.getElementById("movieForm");
const titleInput = document.getElementById("title");
const ratingInput = document.getElementById("rating");
const movieList = document.getElementById("movieList");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const rating = Number(ratingInput.value);

  if (title === "" || isNaN(rating) || rating < 1 || rating > 10) {
    error.textContent = "Unesite naziv filma i ocjenu od 1 do 10.";
    return;
  }

  error.textContent = "";

  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");

  const now = new Date();
  const dateTime = now.toLocaleString("hr-HR");

  movieDiv.innerHTML = `
        <h3>${title}</h3>
        <p>Ocjena: ${rating}</p>
        <p>Dodano: ${dateTime}</p>

        <div class="actions">
            <button class="favoriteBtn">
                Dodaj u favorite
            </button>

            <button class="deleteBtn">
                Obriši
            </button>
        </div>
    `;

  const favoriteBtn = movieDiv.querySelector(".favoriteBtn");

  favoriteBtn.addEventListener("click", function () {
    movieDiv.classList.toggle("favorite");

    if (movieDiv.classList.contains("favorite")) {
      favoriteBtn.textContent = "Ukloni iz favorita";
    } else {
      favoriteBtn.textContent = "Dodaj u favorite";
    }
  });

  const deleteBtn = movieDiv.querySelector(".deleteBtn");

  deleteBtn.addEventListener("click", function () {
    movieDiv.remove();
  });

  movieList.appendChild(movieDiv);

  form.reset();
});
