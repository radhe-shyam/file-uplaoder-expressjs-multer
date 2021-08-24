<h1 align="center">Welcome to file-uploader 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/file-uploader" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/file-uploader.svg">
  </a>
  <a href="https://github.com/radhe-shyam/file-uplaoder-expressjs-multer#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/radhe-shyam/file-uplaoder-expressjs-multer/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/radhe-shyam/file-uplaoder-expressjs-multer/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/radhe-shyam/file-uploader" />
  </a>
</p>

## Setup Process

1. Install
   ```sh
   npm ci
   ```
2. Create `config` files
   Path: `./config/default.json5`
   ```json5
   {
     PORT: 5000,
     DB_URL: "<Mongodb URI>",
   }
   ```
   Path: `./config/test.json5` - test purpose
   ```json5
   {
     PORT: 3000,
     DB_URL: "<Mongodb URI>",
   }
   ```
3. Run test
   ```sh
   npm run test
   ```
4. Start server
   ```sh
   npm start
   ```

---

## API Documentation

1. **To setup new User**

   - `POST - /api/user/`

   - `Request params` :
     1. `name`: String, User name with length of 2 to 30 characters (mandate)
     2. `age`: Number, age of user, minimum 0 and maximum 150 (mandate)
     3. `gender`: M/F (mandate)

   _Example_
   **Request:**

   ```http
   POST /api/user/ HTTP/1.1
   Host: localhost:5000
   Content-Type: application/json

    {
        "name": "radhe",
        "age": 23,
        "gender": "M"
    }
   ```

   **Response:**

   ```json
   {
     "status": 1,
     "data": {
       "_id": "612484bc845a88705cccf3e9",
       "name": "radhe",
       "age": 23,
       "gender": "M",
       "__v": 0
     }
   }
   ```

2. **To upload multiple files**

   - `POST - /api/upload`

   _Example_
   **Request:**

   ```http
    POST /api/upload HTTP/1.1
    Host: localhost:5000
    Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="file1"; filename="bill2021.pdf"
    Content-Type: application/pdf

    (data)
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="file2"; filename="list Desk.pdf"
    Content-Type: application/pdf

    (data)
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="name"

    radhe
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
   ```

   **Response:**

   ```json
   {
     "files": [
       "http://localhost:5000/static/file-kt4ye0xk-bill2021.pdf",
       "http://localhost:5000/static/file-kszr1y8f-list Desk.pdf"
     ],
     "name": "radhe"
   }
   ```

## Author

👤 **jangir.radheyshyam@gmail.com <radhe-shyam>**

- Website: https://www.linkedin.com/in/radheshyamjangid/
- Github: [@radhe-shyam](https://github.com/radhe-shyam)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [jangir.radheyshyam@gmail.com <radhe-shyam>](https://github.com/radhe-shyam).<br />
This project is [ISC](https://github.com/radhe-shyam/file-uplaoder-expressjs-multer/blob/master/LICENSE) licensed.

---
