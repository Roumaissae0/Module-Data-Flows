const WEATHER_API_KEY = "016a5665582e546d1ecf6c7f2829bc9e";
const UNSPLASH_API_KEY = "1Te01-j-Y0Ls7wGVME5aoBMDyHFYc61IohhTH2tjZMY";

async function fetchWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Could not fetch weather");
  }
  return response.json();
}

async function fetchImages(query) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Could not fetch images");
  }
  return response.json();
}

function displayConditions(description) {
  const conditions = document.getElementById("conditions");
  conditions.textContent = description;
}

function displayMainImage(photo) {
  const photoElem = document.getElementById("photo");
  photoElem.innerHTML = "";

  const img = document.createElement("img");
  img.src = photo.urls.regular;
  img.alt = photo.description || "Weather photo";
  photoElem.appendChild(img);

  updateCredits(photo);
}

function updateCredits(photo) {
  const creditUser = document.getElementById("credit-user");
  const creditPlatform = document.getElementById("credit-platform");

  creditUser.textContent = photo.user.name;
  creditUser.href = photo.user.links.html;
  creditPlatform.href = "https://unsplash.com";
}

function displayThumbs(photos) {
  const thumbsElem = document.getElementById("thumbs");
  thumbsElem.innerHTML = "";

  photos.forEach((photo, index) => {
    const link = document.createElement("a");
    link.href = "#";
    link.className = "thumbs__link";

    const img = document.createElement("img");
    img.src = photo.urls.thumb;
    img.alt = photo.description || "Weather photo";
    img.className = index === 0 ? "thumb active" : "thumb";
    img.dataset.index = index;

    link.appendChild(img);
    thumbsElem.appendChild(link);

    link.addEventListener("click", (e) => {
      e.preventDefault();
      displayMainImage(photo);

      document.querySelectorAll(".thumb").forEach((t) => t.classList.remove("active"));
      img.classList.add("active");
    });
  });
}

async function loadWeatherAndImages(city) {
  try {
    const weatherData = await fetchWeather(city);
    const description = weatherData.weather[0].description;

    displayConditions(`${city} — ${description}`);

    const imageData = await fetchImages(description);
    const photos = imageData.results;

    if (photos.length > 0) {
      displayMainImage(photos[0]);
      displayThumbs(photos);
    }
  } catch (error) {
    document.getElementById("conditions").textContent = "Something went wrong. Please try again.";
  }
}

document.getElementById("search").addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.getElementById("search-tf").value.trim();
  if (city) {
    loadWeatherAndImages(city);
  }
});

loadWeatherAndImages("London");