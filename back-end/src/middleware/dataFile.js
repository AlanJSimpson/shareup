const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(
      null,
      path.join(__dirname, '..', '..', '..', 'front-end', 'public', 'avatars')
    );
  },
  filename: function (_req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  },
});

let upload = multer({ storage });

module.exports = { upload };
