const { Post } = require('../models')

const postData = [
    {
        "title": "add in title",
        "content": "add content",
        "date_created": "03/30/2021",
        "user_id": 1
    },
    {
        "title": "add in title",
        "content": "add in description",
        "date_created": "03/29/2021",
        "user_id": 3
    },
    {
        "title": "add in title?",
        "content": "add in description!",
        "date_created": "03/29/2021",
        "user_id": 4
    },
    
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;