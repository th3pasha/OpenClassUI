import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import Cookies from 'universal-cookie';
import axios from 'axios';

export default function MyDropzone() {
  const cookies = new Cookies();
  const id = cookies.get("userid");

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const newFileName = id + '.' + fileExtension;
    formData.append('file', file, newFileName);

    axios.post("http://localhost:8080/v1/auth/student/files", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response);
      const fileUrl = response.data.fileUrl;
      const fileName = file.name;
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(error => {
      console.log(error);
    });

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}