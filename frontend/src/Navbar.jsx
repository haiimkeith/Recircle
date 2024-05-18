import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [selectedNavLink, setSelectedNavLink] = useState(null);
  const [fadeClass, setFadeClass] = useState("");

  const handleNavLinkClick = (link) => {
    if (link !== selectedNavLink) {
      setFadeClass("fade-out");
      setTimeout(() => {
        setSelectedNavLink(link);
        setFadeClass("fade-in");
      }, 300);
    }
  };

  // JSON of all available categories
  const clothingCategories = {
    Men: ["Tops", "Bottoms", "Outerwear", "Socks", "Underwear", "Accessories"],
    Women: [
      "Tops",
      "Bottoms",
      "Outerwear",
      "Dresses & Skirts",
      "Socks",
      "Underwear",
      "Woman",
    ],
    Kids: [
      "Tops",
      "Bottoms",
      "Outerwear",
      "Dresses",
      "Socks",
      "Underwear",
      "Kids",
    ],
    Unisex: ["Tops", "Bottoms", "Outerwear", "Socks", "Accessories"],
  };

  return (
    <div className="navigation-container">
      <div className="navigation">
        <a
          href="#"
          className={selectedNavLink === "Men" ? "active" : "inactive"}
          onClick={() => handleNavLinkClick("Men")}
        >
          MEN
        </a>
        <a
          href="#"
          className={selectedNavLink === "Women" ? "active" : "inactive"}
          onClick={() => handleNavLinkClick("Women")}
        >
          WOMEN
        </a>
        <a
          href="#"
          className={selectedNavLink === "Kids" ? "active" : "inactive"}
          onClick={() => handleNavLinkClick("Kids")}
        >
          KIDS
        </a>
        <a
          href="#"
          className={selectedNavLink === "Unisex" ? "active" : "inactive"}
          onClick={() => handleNavLinkClick("Unisex")}
        >
          UNISEX
        </a>
        <a href="#"></a>
      </div>

      <div className={`cloth-category-section ${fadeClass}`}>
        {selectedNavLink && (
          <ul>
            {clothingCategories[selectedNavLink].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
