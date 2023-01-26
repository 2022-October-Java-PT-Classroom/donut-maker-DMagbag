import DonutMaker from "./donut-maker.js";

// Click the donut to make donuts
let newDonutMaker = new DonutMaker(0, 0, 100, 0, 0, 10, 0, 0, 1);
const donutClickBtn = document.getElementById("donut-to-click");
const donutsMade = document.getElementById("donut-total");
const donutsPerClick = document.getElementById("click-value");
donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.getDonutCount()}`;
donutsPerClick.innerText = `Donuts Per Click: 1`;
donutClickBtn.addEventListener("click", () => {
    newDonutMaker.donutMultCounter();
    donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.getDonutCount()}`;
    donutsPerClick.innerText = `Donuts Per Click: ${newDonutMaker.clickValue}`;
    console.log(newDonutMaker.donutCount);      //don't forget to delete this
});

const clickMultDiv = document.getElementById("click-multipliers--container");
const numMultipliers = document.getElementById("num-multipliers");
const buyMultiplierBtn = document.getElementById("buy-multiplier--button")
const manualClickValue = newDonutMaker.calcManClickValue();
numMultipliers.innerText = `Number of Click Multipliers Purchased: ${newDonutMaker.multiplierCount}`;
buyMultiplierBtn.innerHTML = "Buy Click Multiplier" + "<br/>" + `Cost: ${newDonutMaker.multiplierCost} donuts`;
buyMultiplierBtn.addEventListener("click", ()=> {
    newDonutMaker.buyMultiplier();
    newDonutMaker.calcManClickValue();
    numMultipliers.innerText = `Number of Click Multipliers Purchased: ${newDonutMaker.multiplierCount}`;
    buyMultiplierBtn.innerHTML = "Buy Click Multiplier" + "<br/>" + `Cost: ${newDonutMaker.multiplierCost} donuts`;
    donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.donutCount}`;
    donutsPerClick.innerText = `Donuts Per Click: ${newDonutMaker.clickValue}`;
});
 
const autoClickDiv = document.getElementById("auto-clickers--container");
const numAutoClickers = document.getElementById("num-auto-clickers");
const buyAutoClickBtn = document.getElementById("buy-auto-clicker--button");
const autoClickValue = newDonutMaker.calcAutoClickValue();
numAutoClickers.innerText = `Number of Auto Clickers Purchased: ${newDonutMaker.autoClickerCount}`;
buyAutoClickBtn.innerHTML = "Buy Auto Clicker" + "<br/>" + `Cost: ${newDonutMaker.autoClickerCost} donuts`;
buyAutoClickBtn.addEventListener("click", ()=> {
    newDonutMaker.buyAutoClicker();
    newDonutMaker.calcAutoClickerCost();
    buyAutoClickBtn.innerHTML = "Buy Auto Clicker" + "<br/>" + `Cost: ${newDonutMaker.autoClickerCost} donuts`;
    numAutoClickers.innerText = `Number of Auto Clickers Purchased: ${newDonutMaker.autoClickerCount}`;
});

setInterval(function () {
        newDonutMaker.activateAutoClickers();
        donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.donutCount}`
    }, 1000);


const resetBtn = document.getElementById("reset-button");
resetBtn.innerHTML = "RESET GAME";
resetBtn.addEventListener("click", ()=> {
    newDonutMaker.resetGame();
    donutsMade.innerText = `Total Donuts Made: ${newDonutMaker.donutCount}`;
    donutsPerClick.innerText = `Donuts Per Click: ${newDonutMaker.clickValue}`;
    numAutoClickers.innerText = `Number of Auto Clickers Purchased: ${newDonutMaker.autoClickerCount}`;
    buyAutoClickBtn.innerHTML = "Buy Auto Clicker" + "<br/>" + `Cost: ${newDonutMaker.autoClickerCost} donuts`;
    buyMultiplierBtn.innerHTML = "Buy Click Multiplier" + "<br/>" + `Cost: ${newDonutMaker.multiplierCost} donuts`;
    numMultipliers.innerText = `Number of Click Multipliers Purchased: ${newDonutMaker.multiplierCount}`;
})





