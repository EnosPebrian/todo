import { useState } from "react";
import "./style.css";

const Svg_plus = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#B85124"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8V16"
      stroke="#B85124"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12H16"
      stroke="#B85124"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const Svg_delete = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-trash3"
    viewBox="0 0 16 16"
  >
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

const Tasktodo = [
  `iniiniiniiniin iiniaaaaaaaaaa abbbbbbbbbb bbbaaaaaaaaaa`,
  "macul",
  "perang",
  "makan",
  "mukul-orang",
];

const newmap = {};

function fetchTodo(string, index, array, funct = () => {}, hashmap, funct2) {
  function fetchsub(string) {
    return (
      <li>
        <input
          className="nomargin"
          type="checkbox"
          style={{
            display: "inline-block",
            marginRight: "5px",
            textAlign: "justify",
          }}
        ></input>
        {string}
      </li>
    );
  }

  function addsub() {
    const temp = { ...hashmap };
    temp[array[index]].push(prompt("add a new subtask"));
    funct2(temp);
  }

  const sub = new Array(hashmap[array[index]]);

  return (
    <li key={index} index={index}>
      <div className="flex-row-between">
        <span className="todo-item">
          <input
            className="nomargin"
            type="checkbox"
            style={{
              display: "inline-block",
              marginRight: "5px",
              textAlign: "justify",
            }}
          ></input>
          <div>
            <span
              onClick={() => promptupdate(index, array, funct)}
              id="task-line"
            >
              {string}
            </span>
            <ul>
              {hashmap[array[index]].length
                ? sub.map((val) => val.map((item) => fetchsub(item)))
                : null}
            </ul>
          </div>
        </span>
        <span
          className="flex-row-between"
          style={{ float: "right", width: "50px" }}
        >
          <button
            // onClick={() => addsubTasks(index, array, funct, hashmap, funct2)}
            onClick={() => addsub()}
            style={{ marginRight: "5px", height: "20px" }}
            className="flex-col-center ratio1 nopadding"
          >
            <Svg_plus />
          </button>
          <button
            className="flex-col-center ratio1 nopadding"
            style={{ height: "20px" }}
            onClick={() => removeTasks(index, array, funct)}
          >
            <Svg_delete />
          </button>
        </span>
      </div>
    </li>
  );
}

function fetchsubtask(index, array, hashmap, funct) {
  const sublength = hashmap[array[index]].length;
  if (sublength == 0) return;
  const a = hashmap[array[index]].map((val) => val);
  return <li>{a}</li>;
}

function removeTasks(index, array, funct) {
  const msg = "are you sure you want to delete this?";
  if (window.confirm(msg)) {
    const temp = [...array];
    temp.splice(index, 1);
    funct(temp);
  }
}

function promptupdate(index, array, funct, hashmap, funct2) {
  const newupdate = prompt(`update your massage`, array[index]);
  const temp = [...array];
  hashmap[array[index]] = newupdate;
  funct2(hashmap);
  temp[index] = newupdate;
  funct(temp);
}

function addnewTasks(array, funct, hashmap, funct2) {
  const temp = [...array];
  const newtask = prompt(`input a new task:`);
  if (newtask == "") temp.push("....");
  else temp.push(newtask);
  hashmap[newtask] = [];
  funct2(hashmap);
  funct(temp);
}

function addsubTasks(index, array, funct, hashmap, funct2) {
  const temp = [...array];
  temp.splice(index + 1, 0, prompt("insert a new task"));
  funct(temp);
}

function Body() {
  const [todo, setTodo] = useState(Tasktodo);
  todo.map((val) => {
    newmap[val] = [];
  });
  const [subtask, setSubtask] = useState(newmap);

  function looping(array, funct, hashmap, funct2) {
    return todo.map((val, index) =>
      fetchTodo(val, index, array, funct, hashmap, funct2)
    );
  }

  return (
    <div className="todo-container">
      <div className="flex-row-between">
        <div>Task List</div>
        <button
          className="flex-col-center ratio1"
          onClick={() => addnewTasks(todo, setTodo, subtask, setSubtask)}
          style={{
            backgroundColor: "white",
            border: "none",
            maxHeight: "30px",
            maxWidth: "30px",
          }}
        >
          <Svg_plus />
        </button>
      </div>
      <div>
        <ul className="table-list">
          {looping(todo, setTodo, subtask, setSubtask)}
        </ul>
      </div>
    </div>
  );
}

export default Body;
