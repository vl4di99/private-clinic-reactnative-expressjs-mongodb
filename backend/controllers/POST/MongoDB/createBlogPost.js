const Blog = require("../../../models/Blog");
const awsAPI = require("../../../../api/AWSApi");
const multer = require("multer");
const Aws = require("aws-sdk");

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, '')
    }
});

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({storage: storage, fileFilter: filefilter});

const s3 = new Aws.S3({
    accessKeyId: awsAPI.awsKeys.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
    secretAccessKey: awsAPI.awsKeys.AWS_ACCESS_KEY_SECRET     // secretAccessKey is also store in .env file
})

exports.createPost = (req, res) => {
    console.log(req.file);

    const params = {
        Bucket: awsAPI.awsKeys.AWS_BUCKET_NAME,
        Key: req.file.originalname,
        Body: req.file.buffer,
        ACL: "public-read-write",
        ContentType: "image/jpeg"
    };

    s3.Blog(params, (error, data) => {
        if (error) {
            res.status(500).send({"err": error})
        }
        console.log(data);

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

}

exports.createPostRN = (req, res) => {

    const createPost = new Blog({
        title: req.body.title,
        author: req.body.author,
        content: req.body.author,
        img: req.body.img,
    });
    createPost.save()
        .then(result => {
            res.status(200).send({
                _id: result._id,
                title: result.title,
                author: result.author,
                content: result.content,
                productImage: result.img
            })
        })
        .catch(err => {
            res.send({message: err})
        })
}
;

exports.createPostOld = async (req, res) => {

    const newPost = new Blog(req.body);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
};