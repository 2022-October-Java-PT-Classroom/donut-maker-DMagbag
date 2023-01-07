import DonutMaker from "./donut-maker.js";

// Click the donut to make donuts
let newDonutMaker = new DonutMaker(0, 0, 100, 0, 0, 10, 0, 0, 1);
const donutClickBtn = document.getElementById("donut-to-click");
const donutsMade = document.getElementById("donut-total");
const clickValue = document.getElementById("click-value");
donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.donutCount}`;
clickValue.innerText = `Donuts Per Click: ${newDonutMaker.calcManualClickValue(newDonutMaker.multiplierCount)}`;
donutClickBtn.addEventListener("click", ()=> {
    newDonutMaker.donutCounter();
    donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.donutCount}`;
    donutsPerClick.innerText = `Donuts Per Click: ${newDonutMaker.calcManualClickValue(newDonutMaker.multiplierCount)}`;
    console.log(newDonutMaker.donutCount);      //don't forget to delete this
});



const autoClickDiv = document.getElementById("auto-clickers--container");
const numAutoClickers = document.getElementById("num-auto-clickers");
const buyAutoClickBtn = document.getElementById("buy-auto-clicker--button");
numAutoClickers.innerText = `Number of Auto Clickers Purchased: ${newDonutMaker.autoClickerCount}`;
buyAutoClickBtn.innerHTML = "Buy Auto Clicker" + "<br/>" + `Cost: ${newDonutMaker.autoClickerCost} donuts`;
buyAutoClickBtn.addEventListener("click", ()=> {
    newDonutMaker.buyAutoClicker();
    numAutoClickers.innerText = `Number of Auto Clickers Purchased: ${newDonutMaker.autoClickerCount}`;
    buyAutoClickBtn.innerHTML = "Buy Auto Clicker" + "<br/>" + `Cost: ${newDonutMaker.autoClickerCost} donuts`;

    donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.donutCount}`;
});

const clickMultDiv = document.getElementById("click-multipliers--container");
const numMultipliers = document.getElementById("num-multipliers");
const buyMultiplierBtn = document.getElementById("buy-multiplier--button")
const manualClickValue = newDonutMaker.calcManualClickValue();
numMultipliers.innerText = `Number of Click Multipliers Purchased: ${newDonutMaker.multiplierCount}`;
buyMultiplierBtn.innerHTML = "Buy Click Multiplier" + "<br/>" + `Cost: ${newDonutMaker.multiplierCost} donuts`;
buyMultiplierBtn.addEventListener("click", ()=> {
    newDonutMaker.buyMultiplier();
    newDonutMaker.calcManualClickValue();
    numMultipliers.innerText = `Number of Click Multipliers Purchased: ${newDonutMaker.multiplierCount}`;
    buyMultiplierBtn.innerHTML = "Buy Click Multiplier" + "<br/>" + `Cost: ${newDonutMaker.multiplierCost} donuts`;
    donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.donutCount}`;
    donutsPerClick.innerText = `Donuts Per Click: ${newDonutMaker.multiplierValue} donuts`;
 });

setInterval(function () {
    newDonutMaker.activateAutoClickers(); 
    donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.donutCount}` }, 1000);

const resetBtn = document.getElementById("reset-button");
resetBtn.innerHTML = "RESET GAME";
resetBtn.addEventListener("click", ()=> {
    newDonutMaker.resetGame();
    donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.donutCount}`;
    donutsPerClick.innerText = `Donuts Per Click: ${newDonutMaker.multiplierValue} donuts`;
    numAutoClickers.innerText = `Number of Auto Clickers Purchased: ${newDonutMaker.autoClickerCount}`;
    numMultipliers.innerText = `Number of Click Multipliers Purchased: ${newDonutMaker.multiplierCount}`;
})





