let kgRef = document.getElementById('kg');
let ozRef = document.getElementById('oz');
let lbRef = document.getElementById('lb');

let convertFromKg = () => {
    let kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
}

let convertFromLb = () => {
    let lb = lbRef.value;
    kgRef.value = (lb / 2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
}

let convertFromOz = () => {
    let oz = ozRef.value;
    kgRef.value = (oz / 35.274).toFixed(2);
    ozRef.value = (oz / 16).toFixed(2);
}


kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);


let moonIcon = document.getElementById('moon');
let bgColor = document.getElementById('bg-color');
let mode = document.getElementById('dark-mode');
mode.addEventListener('click', () => {
    moonIcon.classList.toggle('ri-sun-fill');
    bgColor.classList.toggle('bg');
})