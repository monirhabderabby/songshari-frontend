// Configuration
import React from "react";

// Components
import OurTrendyProducts from "./OurTrendyProducts/OurTrendyProducts";
import ProductListing from "./ProductListing/ProductListing";
import TopMonthSeller from "./TopMonthSeller/TopMonthSeller";

const ShopProducts = () => {
    return (
        <div>
            {/* Product listing */}
            <ProductListing />

            {/* Our Trendy Products */}
            <OurTrendyProducts />

            {/* Top month seller */}
            <TopMonthSeller />
        </div>
    );
};

export default ShopProducts;
