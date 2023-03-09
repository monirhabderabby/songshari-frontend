export const calculatePercentage = (number, percentage) => {
    return number * (percentage / 100);
};

export const sumPrices = products => {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum;
};
