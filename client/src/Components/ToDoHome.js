import React, { useEffect, useState } from "react";
import ToDo from "./ToDo"
import axios from "axios";
import { baseURL } from "../utils/constant"
import Popup from "./Popup";

const ToDoHome = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/todo/get-all`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Include the token in the Authorization header
        }})
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);
console.log(toDos)
  const saveToDo = () => {
    axios
      .post(`${baseURL}/todo/create`, { toDo: input },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Include the token in the Authorization header
        }})
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>

        <div className="input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a ToDo..."
          />
          <button onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          {toDos.map((el) => (
            <ToDo
              key={el.id}
              text={el.title}
              id={el.id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  );
};

export default ToDoHome;
