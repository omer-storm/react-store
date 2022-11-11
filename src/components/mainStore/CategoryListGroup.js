import React from "react";
import { useEffect } from "react";
import {
  getCategories,
  setSelectedCategory,
} from "../../features/mainStore/categories/categorySlice";
import { getFilteredItems } from "../../features/mainStore/items/itemSlice";
import { useDispatch, useSelector } from "react-redux";


const ListGroup = () => {

  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );

  const handleFilter = (category) => {
    dispatch(setSelectedCategory(category));
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getFilteredItems(selectedCategory));
  }, [dispatch, selectedCategory]);

  return (
    <React.Fragment>
      <div className="list-group">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleFilter(category.name)}
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
