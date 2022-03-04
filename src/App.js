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
import axios from "axios";

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

function App() {
  const [myUsername, setMyUsername] = useState("seto");
  const [todoList, setTodoList] = useState([]);

  const [todoInputValue, setTodoInputValue] = useState("");
  const [todoDateValue, setTodoDateValue] = useState(new Date());

  const addTodo = () => {
    const newData = {
      date: todoDateValue,
      action: todoInputValue,
      isDone: false,
    };

    axios.post("http://localhost:2000/todos", newData).then(() => {
      fetchTodoList();
    });
  };

  const inputHandler = (event) => {
    const { value } = event.target;
    setTodoInputValue(value);
  };

  const inputDateHandler = (event) => {
    const { value } = event.target;
    setTodoDateValue(value);
  };

  const handleRemove = (id) => {
    axios.delete(`http://localhost:2000/todos/${id}`).then(() => {
      fetchTodoList();
    });
  };

  const handleEditStatus = (id) => {
    const dataToFind = todoList.find((val) => {
      return val.id === id;
    });
    // axios.get(`http://localhost:2000/todos/${id}`).then((res) => {
    //   const newIsDoneValue = !res.data.isDone;
    //   axios
    //     .patch(`http://localhost:2000/todos/${id}`, { isDone: newIsDoneValue })
    //     .then(() => {
    //       fetchTodoList();
    //     });
    // });

    axios
      .patch(`http://localhost:2000/todos/${id}`, {
        isDone: !dataToFind.isDone,
      })
      .then(() => {
        fetchTodoList();
      });
  };

  const renderTodoList = () => {
    return todoList.map((val) => {
      return (
        <TodoItem
          date={val.date}
          content={val.action}
          status={val.isDone}
          item={() => handleRemove(val.id)}
          edit={() => handleEditStatus(val.id)}
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

  // const changeUsername = () => {
  //   setMyUsername("bill");
  // };

  const fetchTodoList = () => {
    axios.get("http://localhost:2000/todos").then((res) => {
      setTodoList(res.data);
    });
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
            <Button onClick={fetchTodoList} color="info">
              Fetch Todo
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {/* {renderContentList()} */}
            {renderTodoList()}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
