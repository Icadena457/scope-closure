/* function moneyBox (coins) {
    let saveCoins = 0;
    saveCoins += coins; //para sumar la camtidad que se va anadiendo
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(10);
moneyBox(5); */

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(20);
myMoneyBox(10);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(25);