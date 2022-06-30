import React from "react";

const AddTaskButton = () => {
  return (
    <div className="addTaskButton">
      <label htmlFor="AddModal" className="button">
        {/* <FontAwesomeIcon className="plusIcon" icon={faPlus} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="plusIcon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        Add
      </label>
    </div>
  );
};

export default AddTaskButton;
