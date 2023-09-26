import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { add, clear } from "../slice.js/todoSlice";

function Content() {
  const [task, setTask] = useState();
  const list = useSelector((store) => store.todo.list);

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      todo: task,
    };
    dispatch(add(newTask));
    setTask("");
  }
  function handleClear() {
    dispatch(clear());
  }
  const numDone = list.filter((item) => item.okey).length;
  const allTask = list.length;
  return (
    <div>
      <form>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="to do..."
        />
        <button
          className="ml-4 bg-blue-200 rounded-lg w-12 "
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
      <div className="mt-8">
        {list.map((list) => (
          <List list={list} key={list.id} />
        ))}
      </div>
      <div className="mt-8 mr-8">
        {list.length !== 0
          ? `You have ${allTask} task and You have completed ${numDone} tasks `
          : "You dont have any tasks please add a task"}
      </div>
      {}
      <button className="bg-red-300 rounded-lg mt-4 w-36" onClick={handleClear}>
        Clear All
      </button>
    </div>
  );
}

export default Content;
