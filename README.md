# CC
Cloud Computing part on MBTI-Edu project.

# API Endpoints Documentation

## Authorization

### 1. Register
- **URL:** 
  - `auth/register`
- **Method:** 
  - `POST`
- **Description:** 
  - Register new user.
- **Request Body:**
  - `name` as string
  - `email` as string (must be unique)
  - `password` as string (must be at least 8 characters)
  - `gender` as string
  - `birthdate` as date
 - **Response:**
  - success:
    - status code: 201 (Created)
    - body:
     ```JSON
      {
        "message": "Account created",
        "data": {
          "userId": "12345abcde"
          "name": "12345",
          "email": "123@gmail.com",
          "password": "123"
        }
      }
      ```
  - error:
    - status code: 400 (Bad Request)
    - body:
     ```JSON
      {
        "error": true,
        "message": "User creation failed"
      }
     ```
 ### 2. Login
- **URL:**
  - `auth/login`
- **Method:**
  - `POST`
- **Request Body:**
  - `email` as string
  - `password` as string
- **Response:**
  - success:
    - status code: 200 (OK)
    - body:
     ```JSON
      {
        "error": false,
        "message": "Login successful",
        "data": {
          "userId": "user-yj5pc_LARC_AgK61",
          "name": "abcde",
          "email": "abcde@gmail.com",
          "mbti": "ESFP",
          "personality": "Penghibur",
          "deskripsi": "Orang-orang yang spontan, energik, dan antusias - hidup ...",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cC"
        }
      }
      ```
  - error:
    - status code: 401 (Unauthorized)
    - body:
      ```JSON
      {
        "error": true,
        "message": "Invalid credentials"
      }
      ```

## MBTI

### 1. Test Page
- **URL:**
  - `mbti/test`
- **Method:**
  - `GET`
- **Request Body:**
  - None
- **Response:**
  - {}

## 2. Result Page
- **URL:**
  - `mbti/result`
- **Method:**
  - `POST`
- **Request Body:**
  - `mbti` as string
  - `result` as string
- **Response:**
  - success:
    - status code: 200 (OK)
    - body:
      ```JSON
      {
        "message": "Test completed. Here is your test result",
        "data": {
          "mbti": "ISFP",
          "deskripsi": "ISFP is a character that ..."
        }
      }
      ```
  - error:
    - status code: 400 (Bad Request)
    - body:
     ```JSON
      {
        "error": true,
        "message": "Test result submission failed"
      }
      ```
