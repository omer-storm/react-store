import React from "react";

const ListGroup = ({ onFilter, categories, selectedCategory }) => {
  return (
    <React.Fragment>
      <div className="list-group">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onFilter(category.name)}
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
