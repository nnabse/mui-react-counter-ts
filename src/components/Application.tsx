import React, { useState } from "react";

import "../styles/DarkModeToggle.css";

import {
  Button,
  TextField,
  Typography,
  Paper,
  ThemeProvider,
  createTheme,
  Link,
} from "@mui/material";

function Application() {
  const [counter, setCounter] = useState<number>(0);
  const [number, setNumber] = useState<number>(1);

  const [dark, setDark] = useState<boolean>(true);

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper
        style={{
          height: "100vh",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <div className="container night-mode-available">
          <div className="night-mode-button">
            <input
              type="checkbox"
              onChange={() => {
                setDark(!dark);
              }}
              className="checkbox"
              id="night-mode"
            />
            <label htmlFor="night-mode" className="label">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="blob"></div>
            </label>
          </div>
        </div>
        <div className="App">
          <Typography
            style={{ paddingBottom: "15px" }}
            variant="h5"
            color={dark ? "white" : "black"}
          >
            Count: {counter}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              setCounter(counter + number);
            }}
          >
            + count
          </Button>
          &nbsp;
          <Button
            variant="contained"
            onClick={() => {
              setCounter(counter - number);
            }}
          >
            - count
          </Button>
          <div className="resetCount__button">
            <Button variant="contained" onClick={() => setCounter(0)}>
              reset count
            </Button>
            &nbsp;
            <Button
              title="reset count and your number"
              variant="contained"
              onClick={() => {
                let inputNumber = document.querySelector(
                  "#filled-basic"
                ) as HTMLInputElement;
                inputNumber.value = "1"; // string is needed, prev var is html input el.
                setNumber(1);
                setCounter(0);
              }}
            >
              reset all
            </Button>
            <br />
            <br />
            <TextField
              InputLabelProps={{ shrink: true }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              id="filled-basic"
              type="number"
              label="Input any number"
              onChange={(event) => {
                let inputValue: number = parseInt(event.target.value); //parse string to number
                setNumber(inputValue);
              }}
            />
          </div>
          <Link
            style={{
              position: "absolute",
              marginLeft: "-50px",
              width: "100px",
              bottom: "0px",
            }}
            href="https://github.com/nnabse/react-counter-ts"
            underline="hover"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </Link>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default Application;
