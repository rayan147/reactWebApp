import React from "react";
import { Field } from "formik";
import { Input } from "reactstrap";
function FileUpload(props) {
  const { field, form } = props;

  const handleChange = event => {
    const file = event.currentTarget.files[0];
    const reader = new FileReader();
    const imgTag = document.getElementById("myimage");
    imgTag.title = file.name;
    reader.onload = function(event) {
      const binaryStr = reader.result;
      imgTag.src = event.target.result;
      console.log(binaryStr);
      binaryStr.replace("");
    };
    reader.readAsDataURL(file);
    form.setFieldValue(field.name, file);
  };

  const dropzoneStyle = {
    width: "100%",
    height: "auto",
    borderWidth: 2,
    borderColor: "rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: 5
  };
  const resetFormFields = () => {
    return <script></script>;
  };
  return (
    <>
      <div style={dropzoneStyle}>
        <Field
          component={Input}
          accept="image/*"
          type={"file"}
          onChange={o => handleChange(o)}
          className="custom-file-input"
        />

        <img
          className="text-center mb-3 mx-5 p-2"
          src={""}
          alt=""
          id="myimage"
          height="200"
        />
      </div>
    </>
  );
}

export default FileUpload;
