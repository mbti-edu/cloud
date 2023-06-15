const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./connect");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const registerHandler = (req, res) => {
  const { name, email, password, gender, birthdate } = req.body;

  // Eksekusi query untuk menyimpan data pengguna ke tabel "user"
  const query = `INSERT INTO user (name, email, password, gender, birthdate) VALUES (?, ?, ?, ?, ?)`;
  connection.query(
    query,
    [name, email, password, gender, birthdate],
    (error, results) => {
      if (error) {
        console.error("Failed to register user:", error);
        res.status(500).json({
          error: true,
          message: "Failed to register user",
        });
      } else {
        const user = {
          userId: results.insertId,
          name,
          email,
          password,
          gender,
          birthdate,
        };
        res.status(201).json({
          message: "Account created",
          data: user,
        });
      }
    }
  );
};

const loginHandler = (req, res) => {
  const { email, password } = req.body;

  // Eksekusi query untuk mencari pengguna berdasarkan email dan password
  const query = `
    SELECT user.Id, user.name, user.email, result.userId, result.mbti
    FROM user user
    LEFT JOIN result result ON user.Id = result.userId
    WHERE user.email = ? AND user.password = ?
  `;

  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error("Failed to login:", error);
      res.status(500).json({
        error: true,
        message: "Failed to login",
      });
    } else if (results.length === 0) {
      res.status(401).json({
        error: true,
        message: "Invalid credentials",
      });
    } else {
      const { Id, name, email, mbti } = results[0];
      res.json({
        error: false,
        message: "success",
        loginResult: {
          Id,
          name,
          email,
          mbti,
        },
      });
    }
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

const saveResultHandler = (req, res) => {
  const { userId, mbtiType } = req.body;

  // Eksekusi query untuk menyimpan hasil tes ke tabel "result"
  const query = `INSERT INTO result (userId, mbti) VALUES (?, ?)`;
  connection.query(query, [userId, mbtiType], (error, results) => {
    if (error) {
      console.error("Failed to save test result:", error);
      res.status(500).json({
        error: true,
        message: "Failed to save test result",
      });
    } else {
      res.status(201).json({
        message: "Test result saved successfully",
        data: results,
      });
    }
  });
};

const resultPageHandler = (req, res) => {
  const { userId, mbtiType } = req.body;

  // Eksekusi query untuk mendapatkan hasil berdasarkan userId dan mbtiType
  const query = `SELECT * FROM result WHERE userId = ? AND mbti = ?`;
  connection.query(query, [userId, mbtiType], (error, results) => {
    if (error) {
      console.error("Failed to get test result:", error);
      res.status(500).json({
        error: true,
        message: "Failed to get test result",
      });
    } else {
      res.json({
        message: "Test result obtained successfully",
        data: {
          userId: userId,
          mbtiType: mbtiType,
        },
      });
    }
  });
};




// Routes
app.post("/register", registerHandler);
app.post("/login", loginHandler);
app.get("/test", testPageHandler);
app.post("/result", saveResultHandler);
app.get("/result", resultPageHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
