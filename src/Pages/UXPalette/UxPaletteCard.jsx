import React from "react";
import "./UxPaletteCard.css";

function UxPaletteCard({ palette }) {
  const {
    headerColor,
    backgroundColor,
    footerColor,
    textColor,
    buttonColor,
    saleBadgeColor,
  } = palette;

  return (
    <div className="palette-card">
      <div className="header" style={{ backgroundColor: headerColor }}>
        <h1 className="site-name">Sample Shop</h1>
      </div>
      <div className="content" style={{ backgroundColor }}>
        <div className="product">
          <div className="product-details">
            <h2 className="product-name">Product Name</h2>
            <p className="product-price">$19.99</p>
            <button
              className="add-to-cart"
              style={{ backgroundColor: buttonColor }}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="promotion">
          <span
            className="sale-badge"
            style={{ backgroundColor: saleBadgeColor }}
          >
            SALE
          </span>
          <p className="promotion-text" style={{ color: textColor }}>
            Limited time offer: Free shipping on orders over $50
          </p>
        </div>
      </div>
      <div className="footer" style={{ backgroundColor: footerColor }}>
        <p className="footer-text">© 2024 Sample Shop. All rights reserved.</p>
      </div>
    </div>
  );
}

export default UxPaletteCard;
