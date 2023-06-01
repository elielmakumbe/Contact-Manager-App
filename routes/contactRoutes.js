const express = require("express")
const router = express.Router();
const controllers = require("../controllers/contactController")

router.route('/').get(controllers.getContact).post(controllers.createContact);

router.route('/:id').get(controllers.getIdContact).put(controllers.updateIdContact).delete(controllers.deleteIdContact);

module.exports = router;

