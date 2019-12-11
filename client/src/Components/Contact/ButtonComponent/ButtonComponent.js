import React from "react";

const ButtonComponent = ({ disabled, name, onSubmit }) => {
  return (
    <>
      <button
        onSubmit={onSubmit}
        className="btn btn-primary rounded-pill  btn-block shadow-sm p-3 mb-5  rounded"
        type="submit"
        disabled={disabled}
      >
        {name}
      </button>
    </>
  );
};

export default React.memo(ButtonComponent);
