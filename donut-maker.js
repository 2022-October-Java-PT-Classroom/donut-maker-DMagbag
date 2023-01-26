class DonutMaker{           
    constructor(donutCount, autoClickerCount, autoClickerCost, autoClickValue,
         multiplierCount,  multiplierCost,  clickValue) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerCost = autoClickerCost;
        this.autoClickValue = autoClickValue;
        this.multiplierCount = multiplierCount;
        this.multiplierCost = multiplierCost;
        this.clickValue = clickValue;
    }

    donutCounter() {
        this.donutCount++;
    }

    getDonutCount() {
        return this.donutCount;
    }
    getClickValue() {
        return this.clickValue;
    }

    autoClickerCounter() {      
        this.autoClickerCount++;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    calcAutoClickerCost() {
        this.autoClickerCost = Math.round(100 * (Math.pow(1.1, this.autoClickerCount)));
        return this.autoClickerCost;
    }

    buyAutoClicker() {      
        let autoClickerCost = Math.round(100 * (Math.pow(1.1, this.autoClickerCount)));
        if (this.donutCount >= autoClickerCost) {
            this.donutCount -= autoClickerCost;
            this.autoClickerCounter();
            this.calcAutoClickerCost;
        }}

  // applies multipliers to determine donuts per auto click; this gives donuts per second
    calcAutoClickValue() {
        this.autoClickValue = Math.round(this.autoClickerCount * Math.pow(1.2, this.multiplierCount));
        return this.autoClickValue;
    }

    // activates the auto clickers, add autoClickValue to donut count, use set interval to update every second
    activateAutoClickers() {
        this.calcAutoClickValue();
        this.donutCount += this.autoClickValue;
    }

    getMultiplierCount() {
        return this.multiplierCount;
    }

    multiplierCounter() {      
        this.multiplierCount++;
    }

    calcMultiplierCost() {
        this.multiplierCost = Math.round(10 * (Math.pow(1.1, this.multiplierCount)));
        return this.multiplierCost;
    }

    buyMultiplier() {      
        let multiplierCost = Math.round(10 * (Math.pow(1.1, this.multiplierCount)));
        if (this.donutCount >= multiplierCost) {
            this.donutCount -= multiplierCost;
            this.multiplierCounter();
            this.calcMultiplierCost();
        }
    }

    //applies multipliers to manual clicks, returns the value of each click applying multipliers
    calcManClickValue() {
        this.clickValue = Math.round(Math.pow(1.2, this.multiplierCount));
        return this.clickValue;
    }

    donutMultCounter() {
        this.donutCount += this.clickValue;
    }

    resetGame() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.multiplierCount = 0;
        this.autoClickValue = 0;
        this.clickValue = 1;
        this.autoClickerCost = 100;
        this.multiplierCost = 10;
    }
}

export default DonutMaker;  