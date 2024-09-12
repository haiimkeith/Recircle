import { useState } from "react";
import "./Navbar.css";

function Navbar({ onCategoryChange }) {  // Accept a callback prop
  const [selectedNavLink, setSelectedNavLink] = useState(null);
  const [fadeClass, setFadeClass] = useState("");

  const handleNavLinkClick = (link) => {
    if (link !== selectedNavLink) {
      setFadeClass("fade-out");
      setTimeout(() => {
        setSelectedNavLink(link);
        setFadeClass("fade-in");
        onCategoryChange(link, ""); // Pass the main category and reset sub-category
      }, 300);
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setFadeClass("fade-in");
      onCategoryChange(selectedNavLink, subCategory);  // Pass selected category and sub-category
    }, 300);
  };

  const clothingCategories = {
    Men: ["Tops", "Bottoms", "Outerwear", "Socks", "Underwear", "Accessories"],
    Women: [
      "Tops",
      "Bottoms",
      "Outerwear",
      "Dresses & Skirts",
      "Socks",
      "Underwear",
      "Accessories",
    ],
    Kids: [
      "Tops",
      "Bottoms",
      "Outerwear",
      "Dresses",
      "Socks",
      "Underwear",
      "Accessories",
    ],
    Unisex: ["Tops", "Bottoms", "Outerwear", "Socks", "Accessories"],
  };

  return (
    <div className="navigation-container">
      <div className="navigation">
        {Object.keys(clothingCategories).map((category) => (
          <a
            href="#"
            key={category}
            className={selectedNavLink === category ? "active" : "inactive"}
            onClick={() => handleNavLinkClick(category)}
          >
            {category.toUpperCase()}
          </a>
        ))}
      </div>

      <div className={`cloth-category-section ${fadeClass}`}>
        {selectedNavLink && (
          <ul>
            {clothingCategories[selectedNavLink].map((item, index) => (
              <li key={index} onClick={() => handleSubCategoryClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;


