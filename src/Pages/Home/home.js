// import React from "react";
import { TextField, Grid, Button, Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles"; // Updated import
import Header from "../../components/Header/header";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { useNavigate } from "react-router-dom";
import scourt from "../../assets/scourt.jpg";
// const useStyles = makeStyles((theme) =>
//   createStyles({
//     homeContainer: {
//       backgroundColor: "#f5f5f5",
//       minHeight: "100vh",
//       padding: 40,
//       boxSizing: "border-box",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     uploadArea: {
//       backgroundColor: "white",
//       borderRadius: 10,
//       padding: 30,
//       boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
//       textAlign: "center",
//     },
//     submitButton: {
//       marginTop: 20,
//       backgroundColor: "#283d8f",
//       color: "white",
//       padding: "12px 20px",
//       border: "none",
//       borderRadius: 5,
//       cursor: "pointer",
//       transition: "background-color 0.3s ease",
//       "&:hover": {
//         backgroundColor: "#1a2b65",
//       },
//     },
//   })
// );

// function Home() {
//   const [files, setFiles] = React.useState([]);
//   const navigate = useNavigate();
//   const classes = useStyles();

//   const updateFiles = (incommingFiles) => {
//     setFiles(incommingFiles);
//   };

//   const handleSubmit = async () => {
//     // ... Submission logic ...
//     navigate("/Review");
//   };

//   return (
//     <Grid
//       container
//       direction="column"
//       alignItems="center"
//       justifyContent="center"
//       className={classes.homeContainer}
//     >
//       <Grid item>
//         <Header />
//       </Grid>
//       <Grid
//         item
//         container
//         justifyContent="center"
//         className={classes.uploadArea}
//       >
//         <Dropzone onChange={updateFiles} value={files}>
//           {files.map((file) => (
//             <FileMosaic {...file} preview />
//           ))}
//         </Dropzone>
//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//           className={classes.submitButton}
//         >
//           Submit
//         </Button>
//       </Grid>
//     </Grid>
//   );
// }

// export default Home;
import React from "react";
import MyDropzone from "../../components/MyDropzone";

const Home = () => {
  // Function to handle file upload
  // You might want to adjust this to your needs
  const handleSubmit = () => {
    console.log("Handle the file upload here.");
  };

  return (
    <div
      style={{
        // backgroundImage: `url(${scourt})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Header />

        <h1>HOW JURISTMIND WORK?</h1>
        <h3>1. First Upload Your Document In the DropZone Area Below</h3>
        <h3>2. Then Hold For Few Seconds...</h3>
        <h3>
          3. Finally After The Document Is Processed You Can Now View The
          Entities
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <MyDropzone />
        </div>

        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{
            backgroundColor: "#003399",
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          Submit
        </Button>
        {/* <p>Please upload the file in only .PDF format</p> */}
      </div>
    </div>
  );
};

export default Home;
