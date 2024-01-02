import DataList from "./DataList";

const FormDataList = (props) => {
  return (
    <>
      {props.arrOfData.map((item) => (
        <DataList
          key={item.name}
          todoItemName={item.name}
          todoItemDate={item.date}
          deleteHandler={props.deleteHandler}
        ></DataList>
      ))}
    </>
  );
};

export default FormDataList;
