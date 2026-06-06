async function fetchComic() {
  const comicDiv = document.getElementById("comic");

  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");

    if (!response.ok) {
      throw new Error("Failed to fetch comic");
    }

    const data = await response.json();
    console.log(data);

    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.title;

    const title = document.createElement("h2");
    title.textContent = data.title;

    comicDiv.appendChild(title);
    comicDiv.appendChild(img);

  } catch (error) {
    console.error(error);
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Something went wrong loading the comic. Please try again later.";
    comicDiv.appendChild(errorMsg);
  }
}

fetchComic();