import React from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

import Tooltip from "@material-ui/core/Tooltip";

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
      <Tooltip title="Delete">
        <Button onClick={() => handleDelete(id)}>
          <BsTrash />
        </Button>
      </Tooltip>
    </>
  );
};

const Button = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  margin-top: 2rem;
  margin-left: 5rem;

  color: white;

  border: 1px solid red;

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;
