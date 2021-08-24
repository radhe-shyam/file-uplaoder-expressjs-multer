const router = require('express').Router();
const path = require('path');
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '..', 'public'))
        },
        filename: function (req, file, cb) {
            console.log({ file });
            const uniqueSuffix = (Date.now() + Math.round(Math.round(Math.random() * 1E9))).toString(36);
            cb(null, `file-${uniqueSuffix}-${file.originalname}`)
        }
    })
});

const saveFiles = async (req, res, next) => {
    try {
        const filePath = `${req.protocol}://${req.headers.host}/static/`;
        const files = [];
        req.files.forEach(element => {
            files.push(filePath + element.filename);
        });
        res.send({ files, ...req.body });
    } catch (error) {
        next(error);
    }
}

router.post('', upload.any(), saveFiles);

module.exports = router;