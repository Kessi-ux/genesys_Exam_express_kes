const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msq: 'show menu' });
})

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msq: `show menu ${req.params.id}` });
})


router.post('/', (req, res) => {
    res.status(200).json({ success: true, msq: 'create new menu' });
})

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msq: `update menu ${req.params.id}` });
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msq: `delete menu ${req.params.id}` });
})

module.exports = router;
