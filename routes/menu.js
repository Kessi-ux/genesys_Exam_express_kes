const express = require('express');

const { getMenus,
    getMenu,
    createMenu,
    updateMenu,
    deleteMenu
} = require('../controllers/menu');

const router = express.Router();

router
    .route('/')
    .get(getMenus)
    .post(createMenu);

router
    .route('/:id')
    .get(getMenu)
    .put(updateMenu)
    .delete(deleteMenu);



module.exports = router;
