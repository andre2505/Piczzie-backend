const express = require('express');
const users_controller = require('../controllers/usersController');
const upload = require('../utils/UploadProfileConfig');
const router = express.Router();

/* GET users listing. */
router.get('/users', users_controller.users_list);

/* GET one user listing. */
router.get('/:id', users_controller.user);

//GET friends
router.get('/friends/:id', users_controller.getFriends);

// Revoke user token
router.post('/revoke', users_controller.revokeToken);

//DELETE friends
router.delete('/friends/:id', users_controller.deleteFriend);

router.put('/friends', users_controller.updateRelationship);

router.post('/photo', upload.single('image'), users_controller.updatePhoto);


router.put('/:id', users_controller.updateUserInformations);

module.exports = router;