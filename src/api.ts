const btn = document.getElementById("button");
const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";
let la = document.getElementById("lat")!;
let lo = document.getElementById("lon")!;
let al = document.getElementById("alt")!;
let vel = document.getElementById("vel")!;
let vis = document.getElementById("vis")!;

let previousValue1 = 0;
let previousValue2 = 0;
let previousValue3 = 0;
let previousValue4 = 0;
let previousValue5 = 0;

btn?.addEventListener("click", function infoBox(event) {
  event.preventDefault();
  la.innerHTML = "";
  lo.innerHTML = "";
  al.innerHTML = "";
  vel.innerHTML = "";
  vis.innerHTML = "";

  getInfoFromApi();
});

async function getInfoFromApi() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  la.append(`Latitude: ${data.latitude}`);
  lo.append(`Longitude: ${data.longitude}`);
  al.append(`Altitude: ${data.altitude}`);
  vel.append(`Velocity: ${data.velocity}`);
  vis.append(`Visibility: ${data.visibility}`);

  previousValue1 = data.longitude;
  previousValue2 = data.latitude;
  previousValue3 = data.altitude;
  previousValue4 = data.velocity;
  previousValue5 = data.visibility;
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
