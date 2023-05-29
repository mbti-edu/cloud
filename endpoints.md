1. Endpoint "users":

   - GET /users
     - Mendapatkan daftar semua pengguna.

   - GET /users/{user_id}
     - Mendapatkan informasi pengguna berdasarkan ID pengguna.

   - POST /users
     - Membuat pengguna baru. (Contoh body request: {"name": "John Doe", "email": "johndoe@example.com", "password": "password123", "mbti_type": "INTJ"})

   - PUT /users/{user_id}
     - Memperbarui informasi pengguna. (Contoh body request: {"name": "John Doe", "email": "johndoe@example.com"})

   - DELETE /users/{user_id}
     - Menghapus pengguna.

2. Endpoint "learning_content":

   - GET /learning_content
     - Mendapatkan daftar semua konten belajar.

   - GET /learning_content/{content_id}
     - Mendapatkan informasi konten belajar berdasarkan ID konten.

   - POST /learning_content
     - Membuat konten belajar baru. (Contoh body request: {"title": "Matematika Dasar", "description": "Pelajaran dasar matematika untuk pemula", "category": "Matematika", "difficulty_level": "Mudah"})

   - PUT /learning_content/{content_id}
     - Memperbarui informasi konten belajar. (Contoh body request: {"title": "Matematika Dasar", "description": "Pelajaran matematika dasar untuk pemula"})

   - DELETE /learning_content/{content_id}
     - Menghapus konten belajar.

3. Endpoint "user_preferences":

   - GET /users/{user_id}/preferences
     - Mendapatkan preferensi pengguna berdasarkan ID pengguna.

   - POST /users/{user_id}/preferences
     - Menyimpan preferensi pengguna baru atau memperbarui preferensi yang ada. (Contoh body request: {"category": "Matematika", "difficulty_level": "Sulit"})

4. Endpoint "user_history":

   - GET /users/{user_id}/history
     - Mendapatkan riwayat akses pengguna berdasarkan ID pengguna.

   - POST /users/{user_id}/history
     - Merekam akses pengguna baru ke konten belajar atau memperbarui akses yang ada. (Contoh body request: {"content_id": "12345", "rating": 4})

5. Endpoint "recommendations":

   - GET /users/{user_id}/recommendations
     - Mendapatkan rekomendasi belajar berdasarkan tipe MBTI dan preferensi pengguna.

Dalam respons API, Anda dapat mengirimkan data dalam format JSON, seperti:

- Response dari GET /users:
  ```
  [
    {"user_id": "1", "name": "John Doe", "email": "johndoe@example.com", "mbti_type": "INTJ"},
    {"user_id": "2", "name": "Jane Smith", "email": "janesmith@example.com", "mbti_type": "ENFP"}
  ]
  ```

- Response dari GET /learning_content:
  ```
  [
    {"content_id": "1", "title": "Matematika Dasar", "description": "Pelajaran dasar matematika untuk pemula", "category": "Matematika", "