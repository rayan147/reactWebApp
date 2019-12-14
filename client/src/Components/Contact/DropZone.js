// import Dropzone from "react-dropzone";
// import React, { Component } from "react";
// import axios from "axios";
// class Dropone extends Component {
//   constructor(props) {
//     super(props);

//     this.onImageDrop = this.onImageDrop.bind(this);
//   }

//   async onImageDrop(acceptedFiles) {
//     const data = new FormData();
//     for (let i = 0; i < acceptedFiles.length; i += 1) {
//       data.append("file", acceptedFiles[i]);
//     }
//     const res = await axios.post("/api/v1/file", data, {
//       headers: {
//         "Content-Type": "multipart/form-data"
//       }
//     });
//     return res;
//   }

//   render() {
//     return (
//       <Dropzone multiple onDrop={this.onImageDrop}>
//         <p>Drop images or click to select a file to upload</p>
//       </Dropzone>
//     );
//   }
// }

// export default FileUploadContainer;

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}
