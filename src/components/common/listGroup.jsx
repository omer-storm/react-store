import React, { useEffect, useState } from "react";
import axios from "axios";

const ListGroup = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("books");

  const getCategories = async () => {
    const categories = await axios.get("/api/categories/");
    setCategories(categories.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const filter = (category) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <React.Fragment>
      <div className="list-group">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => filter(category.name)}
            className={
              category.name === selectedCategory
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action "
            }
          >
            {category.name}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ListGroup;
