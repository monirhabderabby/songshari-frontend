const isWishlisted = productID => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));

    let wishlistedIDS = [];
    wishlist?.forEach(element => {
        wishlistedIDS.push(element._id);
    });

    const exists = wishlistedIDS?.includes(productID);

    return Boolean(exists);
};

export default isWishlisted;
