import React, { useState } from "react";
import axios from "axios";
import { Typography, TextField, Button, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = {
  postId: "",
  postProfile: "",
  reqExperience: 0,
  postTechStack: [],
  postDesc: "",
};

const Create = () => {
  const skillSet = [
    { name: "Javascript" },
    { name: "Java" },
    { name: "Python" },
    { name: "Django" },
    { name: "Rust" },
  ];

  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.postId || !form.postProfile) {
      alert("Post ID and Job Profile are required.");
      return;
    }

    axios
      .post("http://localhost:8080/jobPost", form)
      .then((resp) => {
        console.log(resp.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to create post. Please try again.");
      });
  };

  const { postId, postProfile, reqExperience, postDesc } = form;

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const updatedSkills = checked
      ? [...form.postTechStack, value]
      : form.postTechStack.filter((skill) => skill !== value);
    setForm({ ...form, postTechStack: updatedSkills });
  };

  return (
    <Paper sx={{ padding: "1%" }} elevation={0}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        variant="outlined"
        sx={{
          width: { xs: "90%", md: "50%" },
          margin: "12px auto",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, postId: e.target.value })}
            label="Enter your Post ID *"
            variant="outlined"
            value={postId}
          />

          <TextField
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
            label="Job Profile *"
            variant="outlined"
            value={postProfile}
          />

          <TextField
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            onChange={(e) =>
              setForm({ ...form, reqExperience: e.target.value })
            }
            label="Years of Experience"
            variant="outlined"
            value={reqExperience}
          />

          <TextField
            sx={{ width: "50%", margin: "2% auto" }}
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
            label="Job Description"
            variant="outlined"
            value={postDesc}
          />

          <Box sx={{ margin: "1% auto" }}>
            <h3>Please select required skills</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {skillSet.map(({ name }, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      value={name}
                      checked={form.postTechStack.includes(name)}
                      onChange={handleChange}
                      style={{ marginRight: "8px" }}
                    />
                    {name}
                  </label>
                </li>
              ))}
            </ul>
          </Box>

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: { xs: "90%", md: "50%" },
              margin: "20px auto",
              padding: "12px",
              backgroundColor: "#1976d2",
              color: "#fff",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
