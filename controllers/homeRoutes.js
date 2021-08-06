const router = require('express').Router();
const { Post, User, } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all examples 
    const PostData = await Post.findAll();

   

    // Serialize data so the template can read it
    const posts = PostData.map((post) => post.get({ plain: true }));
    console.log(posts)
    // Pass serialized data
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login',  (req, res) => {
  console.log('login');
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/dashboard', 
withAuth,
  async (req, res) => {
    try {
       const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
         });

         const PostData = await Post.findAll();

        const posts = PostData.map((post) => post.get({ plain: true }));
        const user = userData.get({ plain: true });

    console.log(posts, 'jndasnao');
        res.render('dashboard', {
          ...user,
          posts,
          logged_in: true
        });


    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
   });

   
      
          
   

module.exports = router;