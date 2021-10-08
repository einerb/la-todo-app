import React from "react";

import Checkbox from "./Checkbox";

const TaskList = (props) => {
  /* Lists */
  const { list, setList } = props;

  /* Event Change */
  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  /* Event Delete */
  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {list.length ? chk : "No hay tareas aún!"}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Eliminar tareas!
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
