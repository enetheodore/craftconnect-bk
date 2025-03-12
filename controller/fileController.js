const File = require('../models/file'); 
const multer = require('multer'); 
const asyncHandler = require('express-async-handler') 
const { v4: uuidv4 } = require('uuid'); // Import uuid 
 
// Set up Multer for file handling with memory storage 
const storage = multer.memoryStorage(); 
const upload = multer({ storage }).single('file'); 
 
// Upload a file 
uploadFile = asyncHandler(async (req, res) => { 
    upload(req, res, async (err) => { 
      if (err) { 
        return res.status(500).send('Error uploading file'); 
      } 
   
      if (!req.file) { 
        console.log("no file",req.file) 
        return res.status(400).send('No file uploaded'); 
      } 
      const uniqueFilename = `${uuidv4()}-${req.file.originalname}`; 
 
      try { 
        const newFile = new File({ 
          filename: uniqueFilename, 
          contentType: req.file.mimetype, 
          data: req.file.buffer, 
        }); 
   
        await newFile.save(); // Save the file using async/await 
        console.log(uniqueFilename) 
        res.status(200).json({message:"File uploaded successfully",fileName:uniqueFilename}); 
      } catch (error) { 
        res.status(500).send('Error saving file'); 
      } 
    }); 
  }); 
   
 
// Get a file by filename 
getFile = asyncHandler(async (req, res) => { 
    const file = await File.findOne({ filename: req.params.filename }); 
   
    if (!file) { 
      return res.status(404).send('File not found'); 
    } 
   
    res.set('Content-Type', file.contentType); 
    res.send(file.data); 
  });
module.exports = { uploadFile, getFile };
