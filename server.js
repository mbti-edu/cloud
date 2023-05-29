const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlers
const registerHandler = (req, res) => {
  const { name, email, password } = req.body;
  // Simulate registration logic
  const user = {
    name,
    email,
    password,
  };
  res.json({
    message: 'Account created',
    data: user,
  });
};

const loginHandler = (req, res) => {
  const { email, password } = req.body;
  // Simulate login logic
  const userId = 'user-yj5pc_LARC_AgK61';
  const name = 'abcde';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cC';
  res.json({
    error: false,
    message: 'success',
    loginResult: {
      userId,
      name,
      token,
    },
  });
};

const testPageHandler = (req, res) => {
  const { name, question } = req.query;
  // Simulate test page logic
  res.json({
    name,
    question,
  });
};

const resultPageHandler = (req, res) => {
  const { mbti, result } = req.body;
  // Simulate result page logic
  res.json({
    message: 'Test has finished. Here is your result.',
    data: {
      mbti,
      result,
    },
  });
};

const dashboardHandler = (req, res) => {
  const { name, gender, birthdate, mbti, stud } = req.body;
  // Simulate dashboard logic
  res.json({
    message: 'Here are the recommendations based on your test result.',
    data: {
      mbti,
      stud,
    },
  });
};

// Routes
app.post('/register', registerHandler);
app.post('/login', loginHandler);
app.get('/test', testPageHandler);
app.post('/result', resultPageHandler);
app.post('/dashboard', dashboardHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
