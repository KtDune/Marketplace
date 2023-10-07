const multer = require('multer');
const upload = multer({ dest: 'upload_file/' });

const File = require('../models/File'); // Import your Sequelize File model

exports.uploadFile = (req, res, next) => {
  const image = req.file;
  const imageUrl = image.path;

  // Create a new record in the database with the file path
  File.create({
    filename: image.originalname,
    filePath: imageUrl,
  })
    .then((file) => {
      res.status(201).json({ message: 'File uploaded successfully', file });
    })
    .catch((error) => {
      console.error('Error uploading file:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    });
};
