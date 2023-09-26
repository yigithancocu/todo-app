import { useDispatch } from "react-redux";
import { done, remove } from "../slice.js/todoSlice";
import { useState } from "react";

function List({ list }) {
  const dispatch = useDispatch();
  function handleRemove() {
    dispatch(remove(list.id));
  }

  return (
    <div className="flex flex-row justify-center space-x-12 space-y-2 mr-16 ">
      <div>
        <input
          type="checkbox"
          value={list.okey}
          onChange={() => dispatch(done(list.id))}
        />
      </div>
      <div className="w-48">
        <span
          className="capitalize"
          style={list.okey ? { textDecoration: "line-through" } : {}}
        >
          {list.todo}
        </span>
      </div>
      <div>
        <button onClick={handleRemove} className="bg-red-200 ">
          X
        </button>
      </div>
    </div>
  );
}

export default List;
