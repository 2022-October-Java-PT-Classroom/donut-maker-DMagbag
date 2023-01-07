import DonutMaker from './donut-maker.js';

describe('DonutMaker object', ()=> {

    test("Does donutCounter add one donut to count?",() => {
        const underTest = new DonutMaker(1);
        underTest.donutCounter();
        expect(underTest.donutCount).toEqual(2)
    });

    test("Does getDonutCount retrieve the donut count?", () => {
        const underTest = new DonutMaker(1);
        underTest.donutCounter();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(2);
    })

    test("Does getAutoClickerCount retrieve the AutoClicker count?", () => {
        const underTest = new DonutMaker(1, 100);
        underTest.getAutoClickerCount();
        expect(underTest.autoClickerCount).toEqual(100);
    })

    test("Does autoClickerCounter add one to the AutoClicker count?", () => {
        const underTest = new DonutMaker(1,100);
        underTest.autoClickerCounter();
        expect(underTest.autoClickerCount).toEqual(101);
    })

    test("Does buyAutoClicker subtract the Auto Clicker cost of 100 donuts from the donut count?", () => {
        const underTest = new DonutMaker(200, 0, 100, 0, 0, 10, 0);
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toEqual(100);
    })

    test("Does buyAutoClicker subtract the cost of 110 donuts from the donut count when purchasing a 2nd Auto Clicker?", () => {
        const underTest = new DonutMaker(300, 1);
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toEqual(190);

    })

    test("Does buyAutoClicker subtract the cost of 133 donuts from the donut count when purchasing a 4th Auto Clicker?", () => {
        const underTest = new DonutMaker(300, 3);
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toEqual(167);

    })

    test("Does buyAutoClicker subtract the cost of 259 donuts from the donut count when purchasing a 10th Auto Clicker?", () => {
        const underTest = new DonutMaker(300, 9);
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toEqual(64);
    })

    test("Does buyAutoClicker increase the autoClickerCount by 1?" , () => {
        const underTest = new DonutMaker(300, 9);
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCount).toEqual(10);
    })

    test("Does buyAutoClicker not increase autoClickerCount if not enough donuts?", () => {
        const underTest = new DonutMaker(100, 1);
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCount).toEqual(1);
    })

    // is calcAutoClickValue needed?
    // test("Does calcAutoClickValue return an autoClickValue of 1 for autoClicker Count of 1 and multiplierCount of 0?", () => {
    //     const underTest = new DonutMaker(100, 1, 0, 1, 0, 0, 0);
    //     underTest.calcAutoClickValue(1, 0);
    //     expect(underTest.autoClickValue).toEqual(1);
    // })

    test("Does getMultiplierCount retrieve the multiplierCount?", () => {
        const underTest = new DonutMaker(100, 10, 0, 0, 5, 0, 0);
        underTest.getMultiplierCount();
        expect(underTest.multiplierCount).toEqual(5);
    })

    test("Does buyMultiplier increase the multiplierCount by 1?", () => {
        const underTest = new DonutMaker(100, 0, 0, 0, 0, 0, 0);
        underTest.buyMultiplier();
        expect(underTest.multiplierCount).toEqual(1);
    })

    test("Does buyMultiplier decrease the donutCount by multiplierCost?", () => {
        const underTest = new DonutMaker(100, 10, 0, 0, 0, 0, 0);
        underTest.buyMultiplier();
        expect(underTest.donutCount).toEqual(90);
    })

    // test("Does calcManualClickValue increase the donutCount by 1.2 per click after purchase of first multiplier?", () => {
    //     const underTest = new DonutMaker(100, 10, 0, 0, 0, 0, 0);
    //     underTest.buyMultiplier();
    //     underTest.calcManualClickValue(1);
    //     expect(underTest.donutCount).toEqual(1);
    // })

    // test("Does calcManualClickValue increase the donutCount by 2.1 per click after purchase of fourth donutMultiplier?", () => {
    //     const underTest = new DonutMaker(100, 0, 0, 0, 0, 0, 0);
    //     underTest.buyMultiplier();
    //     underTest.calcManualClickValue(4);
    //     expect(underTest.donutCount).toEqual(3);
    // })

    // test("Does activateAutoClickers increase the donutCount by the amount of Auto Clickers owned?", () => {
    //     const underTest = new DonutMaker(100, 20, 0);
    //     underTest.activateAutoClickers();
    //     expect(underTest.donutCount).toEqual(120);
    // })

})