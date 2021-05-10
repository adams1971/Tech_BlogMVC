const { Comment } = require('../models')

const commentData = [
    {
        "content": "what is this for?.",
        "date_created": "",
        "user_id": 2,
        "post_id": 1
    },
    {
        "content": "",
        "date_created": "",
        "user_id": 2,
        "post_id": 2
    },
    {
        "content": "",
        "date_created": "",
        "user_id": 1,
        "post_id": 3
    },
    {
        "content": "",
        "date_created": "",
        "user_id": 3,
        "post_id": 4
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;