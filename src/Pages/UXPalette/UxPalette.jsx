import React from "react";
import "./UxPalette.css";
import UxPaletteCard from "./UxPaletteCard";

function UxPalette() {
  // Renk paletleri
  const palettes = [
    {
      headerColor: "#34495E",
      backgroundColor: "#ECF0F1",
      footerColor: "#2C3E50",
      textColor: "#34495E",
      buttonColor: "#3498DB",
      saleBadgeColor: "#E74C3C",
    },
    {
      headerColor: "#2980B9",
      backgroundColor: "#FFFFFF",
      footerColor: "#2C3E50",
      textColor: "#34495E",
      buttonColor: "#27AE60",
      saleBadgeColor: "#F39C12",
    },
    {
      headerColor: "#1ABC9C",
      backgroundColor: "#646363",
      footerColor: "#34495E",
      textColor: "#2C3E50",
      buttonColor: "#3498DB",
      saleBadgeColor: "#E74C3C",
    },
    {
      headerColor: "#27AE60",
      backgroundColor: "#2C3E50",
      footerColor: "#E74C3C",
      textColor: "#FFFFFF",
      buttonColor: "#3498DB",
      saleBadgeColor: "#F39C12",
    },
  ];

  return (
    <div className="palette-main">
      <div className="background-container">
        {palettes.map((palette, index) => (
          <UxPaletteCard key={index} palette={palette} />
        ))}
      </div>
    </div>
  );
}

export default UxPalette;
