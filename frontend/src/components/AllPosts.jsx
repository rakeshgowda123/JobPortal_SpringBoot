import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search"; // corrected icon name
import {
  Box,
  Card,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate("/edit", { state: { id } });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `http://localhost:8080/jobPosts/keyword/${query}` // Ensure the query is in lowercase
      );
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/jobPosts`);
      setPost(response.data);
    };
    fetchInitialPosts();
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8080/jobPost/${id}`);
      alert("Post deleted successfully.");

      // Remove the deleted post from state without reloading
      setPost((prevPosts) => prevPosts.filter((p) => p.postId !== id));
    } catch (error) {
      console.error("Failed to delete the post:", error);
      alert("Failed to delete the post. Please try again.");
    }
  };

  return (
    <>
      <Grid container spacing={2} sx={{ margin: "2%" }}>
        <Grid item xs={12} md={12} lg={12}>
          <Box>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search..."
              sx={{ width: "75%", margin: "2% auto" }}
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
            />
          </Box>
        </Grid>

        {post &&
          post.map((p) => (
            <Grid key={p.postId} item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  padding: "2rem",
                  margin: "auto",
                  backgroundColor: "#ffffff",
                  border: "1px solid #ddd",
                  borderRadius: "16px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "600",
                    fontFamily: "sans-serif",
                  }}
                >
                  {p.postProfile}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#585858",
                    marginTop: "2%",
                    fontFamily: "cursive",
                  }}
                >
                  Description: {p.postDesc}
                </Typography>

                <br />
                <br />

                <Typography
                  variant="h6"
                  sx={{ fontFamily: "unset", fontSize: "1.2rem" }}
                >
                  Experience: {p.reqExperience} years
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ fontFamily: "serif", fontSize: "1rem" }}
                  gutterBottom
                >
                  Skills:
                </Typography>

                {p.postTechStack.map((s) => (
                  <Typography
                    variant="body2"
                    gutterBottom
                    key={`${p.postId}-${s}`}
                    component="span"
                  >
                    {s}.{" "}
                  </Typography>
                ))}

                <Box sx={{ mt: 2 }}>
                  <DeleteIcon
                    sx={{ cursor: "pointer", mr: 1 }}
                    onClick={() => handleDelete(p.postId)}
                  />
                  <EditIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleEdit(p.postId)}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Search;
