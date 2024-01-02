import { MdAddBox } from "react-icons/md";

const Form = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const [name, date] = e.target;

    let inputData = {
      name: name.value,
      date: date.value,
    };

    inputData.name = inputData.name.trim();

    if (inputData.name === "" || inputData.date === "") {
      alert("please enter the value");
      return;
    }

    name.value = "";
    date.value = "";

    props.getInputData(inputData);
  };

  return (
    <form onSubmit={submitHandler} className="row justify-content-center my-4">
      <input
        type="text"
        placeholder="Enter Todo item"
        className="col-sm-5 rounded form"
      />
      <input type="date" className="col-sm-2 offset-md-1 rounded form" />
      <button
        type="submit"
        className="btn btn-success col-sm-1 offset-md-1 form"
      >
        <MdAddBox />
      </button>
    </form>
  );
};

export default Form;
