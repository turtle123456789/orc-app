import React, { useEffect, useState } from 'react'
import { FileInput, Label } from "flowbite-react";
import Tesseract from 'tesseract.js';
const ConvertPage = () => {
  const [immage,setImage] = useState(null)
  const [text,setText] = useState("null")
  console.log('text', text)
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log('selectedFile', selectedFile)
    setImage(selectedFile);
    if (selectedFile) {
      Tesseract.recognize(
        selectedFile,
        'eng', 
        {
          logger: (m) => console.log(m), // Dùng để xem quá trình xử lý
        }
      )
        .then(({ data: { text } }) => {
          setText(text);

        })
        .catch((err) => {
          console.error(err);

        });
    }
  };

  return (
    <div>
      <div>
        <Label htmlFor="file-upload-helper-text" value="Upload file" />
      </div>
      <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." onChange={handleFileChange}/>
      {immage && <img src={URL.createObjectURL(immage)}></img>}
      {text && 
       <div>
        <p>{text}</p>
       </div>
      }
    </div>
  )
}

export default ConvertPage