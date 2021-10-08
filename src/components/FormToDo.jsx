import React, { useState } from "react";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const FormToDo = (props) => {
  const { handleAddItem } = props;
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      activity,
      description,
      creation: moment(new Date().toString()).format("LLLL"),
    });
    setActivity("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <h3>TO DO LIST APP v. 0.0.1</h3>
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <textarea
            className="text-area"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols="4"
          />
          <button className="button pink" disabled={activity ? "" : "disabled"}>
            Crear tarea
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormToDo;
