const {validationResult} = require('express-validator');

exports.getPosts = (req, res, next) => {
    res.status(200).json({posts: [{
        _id: '1',
        title: 'First Post',
        content: 'Hello World',
        imageUrl: 'images/hiram.jpg',
        creator: {
            name: 'Descartes'
        },
        createdAt: new Date()
    }]});
}

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: 'Validation failed',
            errors: errors.array()
        })
    }
    const title = req.body.title;
    const content = req.body.content;
    // Create post in database
    res.status(201).json({
        message: 'Post created successfully',
        post: { id: new Date().toISOString(),
            title: title,
            content: content
        }
    })
}
