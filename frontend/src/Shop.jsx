import { useState } from "react";
import Nav from "./Navbar";
import Item from "./Item";
import "./Shop.css"; // Import your CSS file

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  // Define the items available in the shop
  const shopItems = [
    {
      category: "Men",
      subCategory: "Tops",
      name: "Men's T-Shirt",
      imageURL: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      price: "100.00",
    },
    {
      category: "Men",
      subCategory: "Bottoms",
      name: "Men's Pants",
      imageURL: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      price: "50.00",
    }
    // Add more items with different categories and sub-categories as needed
  ];

  // Filter items based on the selected category and sub-category
  const filteredItems = shopItems.filter(
    (item) =>
      item.category === selectedCategory && item.subCategory === selectedSubCategory
  );

  const handleCategoryChange = (category, subCategory) => {
    setSelectedCategory(category);
    setSelectedSubCategory(subCategory);
  };

  return (
    <div>
      <Nav onCategoryChange={handleCategoryChange} />
      <div className="shop-items">
        {filteredItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            imageURL={item.imageURL}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;

