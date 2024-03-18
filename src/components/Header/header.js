import React from "react";
import { TextField, Grid } from "@mui/material";
import "./header.css";

function Home() {
  return (
    <Grid
      container
      style={{ backgroundColor: "#c410b5", height: "10vh", padding: "20px" }}
    >
      <header className="header">
        <h3>JuristMind</h3>
      </header>
    </Grid>
  );
}

export default Home;
