import { MdDeleteForever } from "react-icons/md";

const DataList = ({ todoItemName, todoItemDate, deleteHandler }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-sm-5 form fs-2">{todoItemName}</div>
      <div className="col-sm-2 form fs-4">{todoItemDate}</div>
      <button
        className="btn btn-danger col-sm-1 form"
        onClick={() => deleteHandler(todoItemName)}
      >
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default DataList;
