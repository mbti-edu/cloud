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
  - name (string)
  - email (string, must be unique)
  - password (string, must be at least 8 characters)
  - gender (string)
  - birthdate (date)
 - **Response:**
  - success:
    - status code: 201 (Created)
    - body:
     ```JSON
      {
        "message": "Account created",
        "data": {
          "userId": "12345abcde"
          "name": "Firda",
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
