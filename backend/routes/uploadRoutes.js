// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");
// const { promisify } = require("util");

// const pipeline = promisify(require("stream").pipeline);

// const router = express.Router();

// const upload = multer();

// router.post("/resume", upload.single("file"), (req, res) => {
//   const { file } = req;
//   console.log("------------------------------------------");
//   console.log(upload);
//   console.log("------------------------------------------");
//   if (file.detectedFileExtension != ".pdf") {
//     res.status(400).json({
//       message: "Invalid format",
//     });
//   } else {
//     const filename = `${uuidv4()}${file.detectedFileExtension}`;
//     console.log("now saving the file");
//     pipeline(
//       file.stream,
//       fs.createWriteStream(`${__dirname}/../public/resume/${filename}`)
//     )
//       .then(() => {
//         res.send({
//           message: "File uploaded successfully",
//           url: `/host/resume/${filename}`,
//         });
//       })
//       .catch((err) => {
//         res.status(400).json({
//           message: "Error while uploading",
//         });
//       });
//   }
// });

// router.post("/profile", upload.single("file"), (req, res) => {
//   const { file } = req;
//   if (
//     file.detectedFileExtension != ".jpg" &&
//     file.detectedFileExtension != ".png"
//   ) {
//     res.status(400).json({
//       message: "Invalid format",
//     });
//   } else {
//     const filename = `${uuidv4()}${file.detectedFileExtension}`;

//     pipeline(
//       file.stream,
//       fs.createWriteStream(`${__dirname}/../public/profile/${filename}`)
//     )
//       .then(() => {
//         res.send({
//           message: "Profile image uploaded successfully",
//           url: `/host/profile/${filename}`,
//         });
//       })
//       .catch((err) => {
//         res.status(400).json({
//           message: "Error while uploading",
//         });
//       });
//   }
// });

// module.exports = router;

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");

const pipeline = promisify(require("stream").pipeline);

const router = express.Router();

const upload = multer();

router.post("/resume", upload.single("file"), (req, res) => {
  console.log("---------------------------------- in the backend");
  const { file } = req;

  if (!file) {
    res.status(400).json({
      message: "No file received",
    });
    return;
  }

  if (file.detectedFileExtension !== ".pdf") {
    res.status(400).json({
      message: "Invalid format. Only PDF files are allowed.",
    });
    return;
  }

  const filename = `${uuidv4()}${file.detectedFileExtension}`;
  const filePath = `${__dirname}/../public/resume/${filename}`;

  pipeline(file.stream, fs.createWriteStream(filePath))
    .then(() => {
      res.json({
        message: "File uploaded successfully",
        url: `/host/resume/${filename}`,
      });
    })
    .catch((err) => {
      console.error("Error while uploading:", err);
      res.status(500).json({
        message: "Error while uploading the file",
      });
    });
});

// router.post("/resume", upload.single("file"), (req, res) => {
//   console.log("----------------------------------");
//   const { file } = req;

//   if (!file) {
//     res.status(400).json({
//       message: "No file received",
//     });
//     return;
//   }

//   if (file.detectedFileExtension !== ".pdf") {
//     res.status(400).json({
//       message: "Invalid format. Only PDF files are allowed.",
//     });
//     return;
//   }

//   const filename = `${uuidv4()}${file.detectedFileExtension}`;
//   const filePath = `${__dirname}/../public/resume/${filename}`;

//   pipeline(file.stream, fs.createWriteStream(filePath))
//     .then(() => {
//       res.json({
//         message: "File uploaded successfully",
//         url: `/host/resume/${filename}`,
//       });
//     })
//     .catch((err) => {
//       console.error("Error while uploading:", err);
//       res.status(500).json({
//         message: "Error while uploading the file",
//       });
//     });
// });

router.post("/profile", upload.single("file"), (req, res) => {
  const { file } = req;

  if (!file) {
    res.status(400).json({
      message: "No file received",
    });
    return;
  }

  if (
    file.detectedFileExtension !== ".jpg" &&
    file.detectedFileExtension !== ".png"
  ) {
    res.status(400).json({
      message: "Invalid format. Only JPG and PNG files are allowed.",
    });
    return;
  }

  const filename = `${uuidv4()}${file.detectedFileExtension}`;
  const filePath = `${__dirname}/../public/profile/${filename}`;

  pipeline(file.stream, fs.createWriteStream(filePath))
    .then(() => {
      res.json({
        message: "Profile image uploaded successfully",
        url: `/host/profile/${filename}`,
      });
    })
    .catch((err) => {
      console.error("Error while uploading:", err);
      res.status(500).json({
        message: "Error while uploading the file",
      });
    });
});

module.exports = router;
