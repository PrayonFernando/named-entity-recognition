import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const [files, setFiles] = useState([]); // State to hold the selected files

  const onDrop = useCallback((acceptedFiles) => {
    // Append the newly accepted files to the existing files
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Function to handle file upload
  const handleUpload = () => {
    // Process the file upload here
    // For demonstration, we'll just log the files to the console
    console.log("Uploading files:", files);

    // After processing (e.g., successful upload), you might want to clear the selected files
    // setFiles([]);
  };

  // Styles omitted for brevity...

  return (
    <div
      style={{
        // backgroundColor: "#003399",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #000", // Example border: solid, 2px, black
        borderRadius: "10px", // Optional: adds rounded corners
        padding: "20px", // Optional: adds some space inside the border
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: adds a shadow effect
        height: "250px",
        width: "500px",
        marginTop: "5%",
      }}
    >
      <div
        {...getRootProps()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <input {...getInputProps()} />
        <p>Please upload the file in only .PDF format</p>

        <button
          type="button"
          onClick={handleUpload}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          Upload Files
        </button>
      </div>
    </div>
  );
}

export default MyDropzone;
