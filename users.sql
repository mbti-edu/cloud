-- SQLBook: Code
-- database name: mbti_edu
create database mbti_edu;

--GROUP: Authorization
--Tabel "User" digunakan untuk menyimpan data pengguna yang melakukan registrasi.
CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  gender VARCHAR(255),
  birthdate DATE
);

--Tabel "Session" digunakan untuk menyimpan informasi sesi login pengguna, termasuk token akses.
CREATE TABLE Session (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  token VARCHAR(255),
  FOREIGN KEY (userId) REFERENCES User(id)
);

--GROUP: MBTI
--Tabel "Result" digunakan untuk menyimpan hasil tes MBTI yang telah dijalankan.
CREATE TABLE Result (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  mbti VARCHAR(255),
  result VARCHAR(255),
  FOREIGN KEY (userId) REFERENCES User(id)
);

--GROUP: Homepage
--Tabel "Dashboard" digunakan untuk menyimpan data dashboard pengguna, seperti data MBTI dan deskripsi kepribadian.
CREATE TABLE Dashboard (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  mbti VARCHAR(255),
  kepribadian VARCHAR(255),
  deskripsi TEXT
);

--Tabel "Recommendations" digunakan untuk menyimpan rekomendasi berdasarkan hasil tes pengguna.
CREATE TABLE Recommendations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  mbti VARCHAR(255),
  recommendations string
);