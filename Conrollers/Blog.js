const axios = require("axios");
const { Add_Blog, Get_Blog } = require("../Api/BlogsApi");

exports.createBlog = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const newBlog = {
      blog_title: title,
      blog_description: description,
      blog_author: author,
    };

    // Utilisez l'API Add_Blog pour ajouter un nouveau blog
    const response = await Add_Blog(newBlog);
    
    // Vérifiez la réponse d'ajout du blog
    if (response.status === 201) {
      res.status(201).json(response.data); // Répondez avec les données du blog nouvellement créé
    } else {
      res.status(500).json({ error: "Une erreur est survenue lors de la création du blog." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Une erreur est survenue lors de la création du blog." });
  }
};

exports.GetBlogs = async (req, res) => {
  try {
    // Utilisez l'API Get_Blog pour récupérer tous les blogs
    const response = await Get_Blog();
    const blogs = response.data;
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Une erreur est survenue lors de la récupération des blogs." });
  }
};
