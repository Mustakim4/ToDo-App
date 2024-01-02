import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/FormCom/Form";
import FormDataList from "./components/DataCom/FormDataList";
import { useState } from "react";

function App() {
  const [todoDataItem, setTodoDataItem] = useState([]);

  const inputDataFunc = (e) => {
    let myData = [e, ...todoDataItem];
    setTodoDataItem(myData);
  };

  const deleteHandler = (e) => {
    let newTodoItems = todoDataItem.filter((item) => {
      return item.name !== e;
    });

    setTodoDataItem(newTodoItems);
  };

  return (
    <div className="card-div container">
      <Form getInputData={inputDataFunc}></Form>
      {todoDataItem.length == 0 && (
        <div className="text-center fs-1 welcomeMsg">Enter Your ToDo List</div>
      )}
      <FormDataList
        arrOfData={todoDataItem}
        deleteHandler={deleteHandler}
      ></FormDataList>
    </div>
  );
}

export default App;
