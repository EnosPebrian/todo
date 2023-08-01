import { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

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

function fetchTodo(string, index, userdata, setUserdata, users, setUser) {
  function fetchsub(string) {
    return (
      <li>
        <input
          className="nomargin"
          type="checkbox"
          style={{
            display: "inline",
            marginRight: "5px",
            textAlign: "justify",
          }}
        ></input>
        {string}
      </li>
    );
  }

  const subtask = userdata?.subtasks[string];
  function addsub() {
    subtask.push(prompt("add a new subtask"));
    setUserdata(userdata);
    setUser(users);
  }

  return (
    <li key={index} index={index} style={{ verticalAlign: "top" }}>
      <div className="flex-row-between">
        <span className="todo-item">
          <input
            className="nomargin"
            type="checkbox"
            style={{
              display: "inline-block",
              marginRight: "5px",
              textAlign: "justify",
              height: "1.7rem",
            }}
          ></input>
          <div>
            <span
              onClick={() =>
                promptupdate(index, userdata, setUserdata, users, setUser)
              }
              class="task-line"
            >
              {string}
            </span>
            <ul>
              {subtask.length ? subtask.map((val) => fetchsub(val)) : null}
            </ul>
          </div>
        </span>
        <span
          className="flex-row-between"
          style={{ float: "right", width: "50px" }}
        >
          <button
            onClick={() => addsub()}
            style={{ marginRight: "5px", height: "20px" }}
            className="flex-col-center ratio1 nopadding"
          >
            <Svg_plus />
          </button>
          <button
            className="flex-col-center ratio1 nopadding"
            style={{ height: "20px" }}
            onClick={() =>
              removeTask(index, userdata, setUserdata, users, setUser)
            }
          >
            <Svg_delete />
          </button>
        </span>
      </div>
    </li>
  );
}

function removeTask(index, userdata, setUserdata, users, setUser) {
  const msg = "are you sure you want to delete this?";
  if (window.confirm(msg)) {
    userdata.tasks.splice(index, 1);
    delete userdata.subtasks[userdata.tasks.index];
    setUserdata(userdata);
    setUser(users);
  }
}

function promptupdate(index, userdata, setUserdata, users, setUser) {
  const newupdate = prompt(`update your massage`);
  if (!newupdate) {
    return;
  }
  const target = userdata.tasks[index];
  const temp = userdata.subtasks[target];
  userdata.subtasks[newupdate] = temp;
  userdata.tasks[index] = newupdate;
  setUserdata(userdata);
  setUser(users);
}

function addnewTask(userdata, setUserdata, users, setUser) {
  const newtask = prompt(`input a new task:`);
  userdata.tasks.push(newtask);
  userdata.subtasks[newtask] = [];
  setUserdata(userdata);
  setUser(users);
}

function Body({ users, setUser }) {
  console.log(`body 0`, users, setUser);
  const { username } = useParams();
  const userObject = JSON.parse(localStorage.getItem(username));
  console.log("body 1", typeof userObject);

  const [userdata, setUserdata] = useState(userObject);
  console.log(`body 2`, userdata);

  useEffect(() => {
    localStorage.setItem(userdata.email, JSON.stringify(userdata));
    const temp = [...users];
    temp[temp.findIndex((val) => (val.email = userdata.email))] = userdata;
    setUser(temp);
    console.log(`users di body`, users);
  }, [userdata]);

  function looping_tasks(userdata, setUserdata, users, setUser) {
    console.log(`tasks`, userdata.tasks, userdata);
    return userdata.tasks.map((val, index) =>
      fetchTodo(val, index, userdata, setUserdata, users, setUser)
    );
  }

  return (
    <div className="todo-container">
      <div className="flex-row-between">
        <div>Task List</div>
        <button
          className="flex-col-center ratio1"
          onClick={() => addnewTask(userdata, setUserdata, users, setUser)}
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
          {looping_tasks(userdata, setUserdata, users, setUser)}
        </ul>
      </div>
    </div>
  );
}

export default Body;
