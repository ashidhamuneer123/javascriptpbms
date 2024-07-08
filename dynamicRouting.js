const express = require('express');
const app = express();
const port = 3000;

// Dynamic route with a parameter
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User profile page for user ID ${userId}`);
});

// Dynamic route with multiple parameters
app.get('/posts/:category/:postId', (req, res) => {
  const category = req.params.category;
  const postId = req.params.postId;
  res.send(`Post details for category ${category}, post ID ${postId}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
