const isAlreadyProductinCart = productID => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    let cartIDS = [];
    cart?.forEach(element => {
        cartIDS.push(element._id);
    });

    const exists = cartIDS?.includes(productID);

    return Boolean(exists);
};

export default isAlreadyProductinCart;
