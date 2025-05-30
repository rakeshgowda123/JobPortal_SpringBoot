import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(45deg, #1976d2,rgb(245, 129, 66))",
          color: "#fff",
          boxShadow: 2,
        }}
      >
        <Toolbar variant="dense">
          <Typography
            variant="h4"
            align="left"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "revert",
              fontWeight: 500,
              color: "white",
            }}
          >
            Job Portal
          </Typography>

          <Box sx={{ mx: 1 }}>
            <Button
              variant="outlined"
              href="http://localhost:3000"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#1976d2",
                },
              }}
            >
              Home
            </Button>
          </Box>
          <Box sx={{ mx: 1 }}>
            <Button
              variant="outlined"
              href="http://localhost:3000/create"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#1976d2",
                },
              }}
            >
              Add Job
            </Button>
          </Box>
          <Box sx={{ mx: 1 }}>
            <Button
              variant="outlined"
              href="https://github.com/rakeshgowda123
"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#1976d2",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
