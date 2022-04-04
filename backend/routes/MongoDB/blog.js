const decode = require("base64-arraybuffer");
//const RNFS = require("react-native-fs");
const express = require("express");


const allBlogElements = require("../../controllers/GET/MongoDB/allBlogElements");
const singleBlogElement = require("../../controllers/GET/MongoDB/singleBlogElement");
const createBlogPost = require("../../controllers/POST/MongoDB/createBlogPost");
const updatePost = require("../../controllers/PATCH/MongoDB/updatePost");
const deletePost = require("../../controllers/DELETE/MongoDB/deletePost");
const Blog = require("../../models/Blog");



const router = express.Router()
router.get('/', allBlogElements.getAllBlogElements);
router.get('/:id', singleBlogElement.getSingleBlogElement);
router.post('/', createBlogPost.createPostRN);
router.patch("/:id", updatePost.updatePost);
router.delete("/:id", deletePost.deletePost);


/*
const awsAPI = require("../../../api/AWSApi");
const multer = require("multer");
const Aws = require("aws-sdk");

const storage = multer.memoryStorage({
    destination: function(req, file, cb){
        cb(null,'')
    }
});

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter });

const s3 = new Aws.S3({
    accessKeyId:awsAPI.awsKeys.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
    secretAccessKey:awsAPI.awsKeys.AWS_ACCESS_KEY_SECRET     // secretAccessKey is also store in .env file
})


router.post('/', upload.single('img'),(req,res) => {
    //if(!req.file)
    //  return res.send('Please upload image!');
    //console.log("File: " + req.file);
    //console.log("Img body: "+req.file.buffer);
    //const fPath = req.img.uri;
    //console.log(fPath);

    // const base64 = await RNFS.readFile(fPath, 'base64');

    //const arrayBuffer = decode.decode(base64);
    // const fileStream = fs.createReadStream(req.body.img);
    // console.log(fileStream);
    console.log("---------------------------------------------------------");
    console.log(JSON.stringify(req.body.img.buffer));
    //let bb = req.body.img.buffer[0];
    const params = {
        Bucket: awsAPI.awsKeys.AWS_BUCKET_NAME,
        Key: Date.now().toString()+'.jpeg',
        //Key: req.file.originalname,
        //Body: arrayBuffer,
        //Body: req.file.buffer,
        Body: req.body.img.buffer,
        //Body: "",
        ACL: "public-read-write",
        ContentType: "image/jpeg"
    };

    s3.upload(params,(error, data) => {
        if (error) {
            res.status(500).send({"err": error})
        }
        console.log("DAT: "+JSON.stringify(data));

        const createPost = new Blog({
            title: req.body.title,
            author: req.body.author,
            content: req.body.author,
            img: data.Location
        });

        createPost.save()
            .then(result => {
                res.status(200).send({
                    _id: result._id,
                    title: result.title,
                    author: result.author,
                    content: result.content,
                    productImage: data.Location,
                })
            })
            .catch(err => {
                res.send({message: err})
            })

    })

});

 */

/*
var app = express();

app.get('/', getAllBlogElements);
app.get('/:id', getSingleBlogElement);
app.post('/', createPost);
*/
module.exports = router;
