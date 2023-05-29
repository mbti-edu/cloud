GROUP: Authorization

[1] Register
- URL: /register
- Method: POST
- Request Body:
  - name (string)
  - email (string, must be unique)
  - password (string, must be at least 8 characters)
  - gender (string)
  - birthdate (date)
- Response:
  - success:
    - status code: 201 (Created)
    - body:
      json
      {
        "message": "Account created",
        "data": {
          "name": "Firda",
          "email": "123@gmail.com",
          "password": "123"
        }
      }
      
  - error:
    - status code: 400 (Bad Request)
    - body:
      json
      {
        "error": true,
        "message": "User creation failed"
      }
      

[2] Login
- URL: /login
- Method: POST
- Request Body:
  - email (string)
  - password (string)
- Response:
  - success:
    - status code: 200 (OK)
    - body:
      json
      {
        "error": false,
        "message": "Login successful",
        "data": {
          "userId": "user-yj5pc_LARC_AgK61",
          "name": "abcde",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cC"
        }
      }
      
  - error:
    - status code: 401 (Unauthorized)
    - body:
      json
      {
        "error": true,
        "message": "Invalid credentials"
      }
      

GROUP: MBTI

[1] Test Page
- URL: /test
- Method: GET
- Request Body: None
- Response: This endpoint requires further details on what data is expected to be returned.

[2] Result Page
- URL: /result
- Method: POST
- Request Body:
  - mbti (string)
  - result (string)
- Response:
  - success:
    - status code: 200 (OK)
    - body:
      json
      {
        "message": "Test completed. Here is your test result",
        "data": {
          "mbti": "ISFP",
          "deskripsi": "ISFP is a character that ..."
        }
      }
      
  - error:
    - status code: 400 (Bad Request)
    - body:
      json
      {
        "error": true,
        "message": "Test result submission failed"
      }
      

GROUP: Homepage

[1] Home
- URL: /home
- Method: POST
- Request Body:
  - name
  - mbti
  - kepribadian
  - deskripsi
- Response:
  - success:
    - status code: 200 (OK)
    - body:
      json
      {
        "message": "",
        "data": {
          "Nama":
          "mbti": "ESFP",
          "kepribadian": "Penghibur",
          "deskripsi": "Orang-orang yang spontan, energik, dan antusias - hidup ..."
        }
      }
      
[2] Personality
      URL: /personality
      Method: POST
      Request Body:
      - mbti (string)
      - recommendation (string)
      Response:
       - success: 
         - status code: 200 (OK)
         - body:
           json
       {
        "message": "Here are the recommendations based on your test result"
         "data": {
          "mbti": "ESFP",
          "recommendations": "Pembelajaran yang melibatkan emosi: ESFP cenderung belajar..."
         }
       }
      
  - error:
    - status code: 400 (Bad Request)
    - body:
      json
      {
        "error": true,
        "message": "Personality update failed"
      }

 [3] Account
      URL : /account
      Method: POST
      Request Body :
      - name (string)
      - email (string)
      Response:
        - success:
        - status code: 200 (OK)
        - body: 
          json
         { 
            "message": ""
         }
