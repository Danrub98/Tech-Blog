const router = require('express').Router();
const { Post, User, } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',  
 async (req, res) => {
   try {
     const postData = await Post.findAll(
  
     );
      res.status(200).json(postData);
   } catch (err) {
     res.status(500).json(err);
   }
  });

  router.post('/add', withAuth, async (req, res) => {
    try {
   const postpost = await Post.findAll({
    where: { id : req.session.user_id}

   });
   console.log(postpost)
   console.log(req.body.information)

    const postInfo = await Post.create({
          user_id: 1,
          post_title: req.body.post_title,
          post_information: req.body.post_information,
          
     },
     {where: { id : req.session.user_id}},

    );

    res.status(200).json(postInfo);
    } catch (err) {
      console.log(err);
        res.status(500).json(err);
      }
    });


    router.delete('/delete/:id', async(req, res) => {
      // delete a category by its `id` value
      try{
        const categoryData = await Post.destroy({
          where: {
            id: req.params.id
          }
        });
        if(!categoryData){
          res.status(404).json({message: 'No information was found with this id!'});
          return;
        }
        res.status(200).json(categoryData);
      } catch(err){
        res.status(500).json(err)
      }
    });





   module.exports = router;