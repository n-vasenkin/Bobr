const posts = require('./schema/post-schema');

class Place {

    static async getAllPosts() {
        return posts.find().catch(err => console.log(err));
    }

    static async getCurrentPost(objData) {
        const findPost = await posts.findById({_id: objData.id}).catch(err => console.error(err));
        const checkIp = await findPost.views.find(el => {
            return el === objData.ip;
        });
        if (!checkIp) {
            await posts.update({_id: objData.id}, {$push: {views: objData.ip}});
            return await posts.findById({_id: objData.id});
        } else {
            return await posts.findById({_id: objData.id});
        }
    }

    static async addPost(postObject) {
        const newPost = new posts({
            author_name: postObject.author_name,
            author_img: postObject.author_img,
            title: postObject.title,
            text: postObject.text,
            tags: postObject.tags,
        });
        newPost.save(err => console.log(err));
        return newPost;
    }

    static async addComment(commentObject) {
        const newComment = {
            author_name: commentObject.author_name,
            text: commentObject.text
        };
        await posts.update({_id: commentObject._id},{$push: {comments: newComment}});
        return 200;
    };
}

module.exports = Place;