"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const btn = document.getElementById("button");
const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";
let la = document.getElementById("lat");
let lo = document.getElementById("lon");
let previousValue1 = 0;
let previousValue2 = 0;
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function infoBox(event) {
    event.preventDefault();
    la.innerHTML = "";
    lo.innerHTML = "";
    getInfoFromApi();
});
function getInfoFromApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(apiUrl);
        const data = yield response.json();
        la.append(`Latitude: ${data.latitude}`);
        lo.append(`Longitude: ${data.longitude}`);
        previousValue1 = data.longitude;
        previousValue2 = data.latitude;
    });
}
