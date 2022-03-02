import { useState } from "react";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import TourCard from "./components/TourCard/TourCard";
import Band from "./components/Band/Band";
import ClassComponent from "./ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";
import TodoItem from "./components/TodoItem/TodoItem";
import { Button, Input } from "reactstrap";

const data = [
  {
    username: "mark",
    location: "BSD",
    numberOfLikes: 120,
    caption: "halo kawan-kawan",
  },
  {
    username: "seto",
    location: "jakarta",
    numberOfLikes: 10,
    caption: "lagi overload kerjaan banget, mental health aku parah nih",
  },
  {
    username: "bill",
    location: "puncak",
    numberOfLikes: 200,
    caption: "kacau,macet banget",
  },
];

const dataTodo = [
  {
    date: "2 Mar 2022",
    content: "Belajar programming",
    status: "OnGoing",
  },
  {
    date: "2 Mar 2022",
    content: "Belajar programming",
    status: "Done",
  },
  {
    date: "2 Mar 2022",
    content: "Belajar programming",
    status: "OnGoing",
  },
];

function App() {
  const [myUsername, setMyUsername] = useState("seto");
  const [todoList, setTodoList] = useState([
    {
      date: new Date(),
      content: "Belajar programming",
      status: false,
    },
    {
      date: new Date(),
      content: "Belajar programming",
      status: true,
    },
    {
      date: new Date(),
      content: "Belajar programming",
      status: false,
    },
  ]);

  const [todoInputValue, setTodoInputValue] = useState("");
  const [todoDateValue, setTodoDateValue] = useState(new Date());

  const addTodo = () => {
    const newTodoArray = [...todoList];

    newTodoArray.push({
      date: todoDateValue,
      content: todoInputValue,
      status: false,
    });

    setTodoList(newTodoArray);
  };

  const inputHandler = (event) => {
    const { value } = event.target;
    setTodoInputValue(value);
  };

  const inputDateHandler = (event) => {
    const { value } = event.target;
    setTodoDateValue(value);
  };

  const handleRemove = (idx) => {
    const removeArray = [...todoList];

    removeArray.splice(idx, 1);

    setTodoList(removeArray);
  };

  const handleEditStatus = (idx) => {
    const newTodoArray = [...todoList];

    newTodoArray[idx].status = !newTodoArray[idx].status;

    setTodoList(newTodoArray);
  };

  const renderTodoList = () => {
    return todoList.map((val, idx) => {
      return (
        <TodoItem
          date={val.date}
          content={val.content}
          status={val.status}
          item={() => handleRemove(idx)}
          edit={() => handleEditStatus(idx)}
        />
      );
    });
  };

  const renderContentList = () => {
    return data.map((val) => {
      return (
        <ContentCard
          username={val.username}
          location={val.location}
          numberOfLikes={val.numberOfLikes}
          caption={val.caption}
        />
      );
    });
  };

  const changeUsername = () => {
    setMyUsername("bill");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row my-3">
          <div className="offset-3 col-5">
            <Input onChange={inputHandler} />
            <Input type="date" onChange={inputDateHandler} />
          </div>
          <div className="col-2">
            <Button onClick={addTodo} color="success">
              Add Todo
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {/* {renderContentList()} */}
            {renderTodoList()}
          </div>
        </div>

        <h1>{myUsername}</h1>
        <Button onClick={changeUsername}>Change Username</Button>
      </div>
    </>
  );
}

export default App;
