import React, { useState } from "react";
import Nav from "./Navbar";
import Item from "./Item";

function Shop() {
  return (
    <div>
      <Nav />
      <Item
        name="Clothes"
        imageURL="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
        price="100.00"
      />
    </div>
  );
}

export default Shop;
