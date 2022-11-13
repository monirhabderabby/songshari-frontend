import React from "react";

const ShopPagination = () => {
  return (
    <>
      <div className="pagination-area text-center">
        <a href="!#">
          <i className="fas fa-angle-double-left"></i>
          <span></span>
        </a>
        <a href="!#">1</a>
        <a href="!#">2</a>
        <a href="!#" className="active">
          3
        </a>
        <a href="!#">4</a>
        <a href="!#">5</a>
        <a href="!#">
          <i className="fas fa-angle-double-right"></i>
        </a>
      </div>
    </>
  );
};

export default ShopPagination;
