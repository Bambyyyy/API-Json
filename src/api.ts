const btn = document.getElementById("button");
const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";
let la = document.getElementById("lat")!;
let lo = document.getElementById("lon")!;

let previousValue1 = 0;
let previousValue2 = 0;

btn?.addEventListener("click", function infoBox(event) {
  event.preventDefault();
  la.innerHTML = "";
  lo.innerHTML = "";
  getInfoFromApi();
});

async function getInfoFromApi() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  la.append(`Latitude: ${data.latitude}`);
  lo.append(`Longitude: ${data.longitude}`);

  previousValue1 = data.longitude;
  previousValue2 = data.latitude;
}

// async function getISS() {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   //   const { latitude, longitude } = data;
//   //   la.textContent = latitude;
//   //   lo.textContent = longitude;
//   return data;
// }

// getISS();
