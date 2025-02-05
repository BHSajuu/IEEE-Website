import React, { useEffect, useState } from "react";
import {
  Avatar,
  Grid2,
  Paper,
  TextField,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const paperStyle = {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    width: "90%",
    maxWidth: 400,
  };

  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Fake auth; replace with real API calls as needed
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <Grid2
      container
      style={{ height: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <Paper elevation={18} style={paperStyle} box margin={10}>
        <Grid2 align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>
        </Grid2>

        <Box mt={3}>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
        </Box>

        <Box mt={2}>
          <TextField
            label="Password"
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box mt={2}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="checkdb" color="primary" />}
              label="Remember me"
            />
          </FormGroup>
        </Box>

        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            style={{ fontWeight: "bold" }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Grid2>
  );
};

export default SignIn;
