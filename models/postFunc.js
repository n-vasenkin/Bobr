const posts = require('../models/schema/posts');

class Place {

    static async getCurrentPost (id) {
        return posts.find({_id: id});
    }

    static async getAll () {
        return posts.find().catch(err => console.log(err));
    }

    static async addPost(postObject) {
        let newPost = new posts({
            author_name: postObject.author_name,
            author_img: postObject.author_img,
            title: postObject.title,
            text: postObject.text,
            tags: postObject.tags,
        });
        newPost.save(err => console.log(err));
        return newPost;
    }

}

module.exports = Place;