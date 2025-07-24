var services = {
    haircut: "60 грн",
    shaving: "80 грн",
    hairwashing: "100 грн",
};

function price() {
    var sum = 0;
    for (let i in services) {
        sum = sum + parseInt(services[i]);
    }
    console.log("Сума послуг: " + sum + " грн");
}

function minPrice() {
    let min = Infinity;
    for (let i in services) {
        let price = parseInt(services[i]);
        if (price < min) {
            min = price;
        }
    }

    console.log("Найдешевша послуга: " + min + " грн");
}

function maxPrice() {
    let max = -Infinity;
    for (let i in services) {
        let price = parseInt(services[i])
        if (price > max) {
            max = price;
        }
    }
    console.log("Найдорожча послуга: " + max + " грн");
}

price();
minPrice();
maxPrice();