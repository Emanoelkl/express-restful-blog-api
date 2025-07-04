const express = require("express");
const router = express.Router();
const blogPostController = require("../controllers/blogPostController");
const verifyToken = require("../middlewares/auth");

router.post("/", verifyToken, blogPostController.createPost);
router.put("/:id", verifyToken, blogPostController.updatePost);
router.delete("/:id", verifyToken, blogPostController.deletePost);

router.get("/", blogPostController.getAllPosts);
router.get("/:id", blogPostController.getPostById);

module.exports = router;
