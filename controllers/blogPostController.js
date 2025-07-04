const BlogPost = require("../models/BlogPost");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = new BlogPost({
      title,
      content,
      author: req.userId,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: "Error creating post" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find().populate("author", "name email");
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error getting all posts" });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id).populate(
      "author",
      "name email"
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error getting post" });
  }
};

exports.updatePost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await BlogPost.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.userId) {
      return res.status(403).json({ message: "Not post owner" });
    }

    post.title = title || post.titulo;
    post.content = content || post.content;
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error updating post" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.userId) {
      return res.status(403).json({ message: "Not post owner" });
    }

    await post.deleteOne();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting post" });
  }
};
