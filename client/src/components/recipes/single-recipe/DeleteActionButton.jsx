import React from "react";
import { BsTrash } from "react-icons/bs";

const handleDelete = (id) => {
  fetch(`/api/recipes/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    console.log(res);
    if (res.status === 200) {
      window.location.reload();
    }
  });
};

export const DeleteActionButton = ({ id }) => {
  console.log(id);
  return (
    <>
      <button onClick={() => handleDelete(id)}>
        <BsTrash />
      </button>
    </>
  );
};
