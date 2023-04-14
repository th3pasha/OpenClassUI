import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Cookies from 'universal-cookie';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MyDropzone() {
  const cookies = new Cookies();
  const id = cookies.get("userid");
  const [isFileUploaded, setFileUploaded] = useState(false);
  const [isError, setError] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileExtension = file.name.split('.').pop().toLowerCase();
  
    if (fileExtension !== 'png') {
      setError(true);
      return;
    }
  
    const formData = new FormData();
    const newFileName = id + '.' + fileExtension;
    formData.append('file', file, newFileName);
  
    axios.delete("http://localhost:8080/v1/auth/student/files/" + id +".png");
    axios.post("http://localhost:8080/v1/auth/student/files", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      setError(false);
      setFileUploaded(true);
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
      setError(true);
    });
  
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setError(false);
  };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <div className="upload-icon-container">
        <CloudUploadIcon
          style={{
            fontSize: 150,
            color: isError ? 'red' :'#096DBE',
            transition: 'color 0.2s ease-out',
            animation: 'pulse 1s infinite'
          }}
        />
      </div> :
      <div className="upload-icon-container">
        <CloudUploadIcon
          style={{
            fontSize: 150,
            color: isError ? 'red' : '#EBECF0',
            transition: 'color 0.2s ease-out',
            animation: isFileUploaded ? 'spin 2s linear infinite' : 'none'
            
          }}
        />
      </div>
      }
      <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={isError} autoHideDuration={5000} onClose={handleClose} >
                    <Alert variant="filled" color="error" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Error! try again with a .PNG file.
                    </Alert>
                </Snackbar>
            </Stack>
    </div>
  )
}