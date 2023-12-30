const Post = require('../model/postModel');

const postCtrl = {
  createPost: async (req, res) => {
    try {
      const { projectName, description, projectlink, image } = req.body;

      if (!projectName || !description)
        return res.status(400).json({ msg: 'Please fill in all fields.' });

      const newPost = new Post({
        projectName,
        description,
        projectlink,
        image,
      });
      await newPost.save();

      res.json({
        msg: 'Created a post',
        newPost,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find().sort('-createdAt');
      res.json({
        msg: 'Success!',
        posts,
        result: posts.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { projectName, description, projectlink, image } = req.body;

      if (!projectName || !description)
        return res.status(400).json({ msg: 'Please fill in all fields.' });

      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          projectName,
          description,
          projectlink,
          image,
        }
      );

      res.json({ 
        msg: 'Updated a post',
        newPost: {
          projectName,
          description,
          projectlink,
          image,
        },
       });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.json({ msg: 'Deleted a Post' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = postCtrl;
