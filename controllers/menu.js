const ErrorResponse = require('../utils/errorResponse');

const Menu = require('../models/Menu');

//@desc Get all menu
//@route Get /api/menu
//@access Public

exports.getMenus = async (req, res, next) => {
    try {
        const menus = await Menu.find();
        res.status(200).json({ success: true, count: menus.length, data: menus });

    } catch (err) {
        res.status(400).json({ success: false });
    }
};

//@desc Get single menu
//@route Get /api/:id
//@access Public

exports.getMenu = async (req, res, next) => {
    try {
        const menu = await Menu.findById(req.params.id);
        res.status(200).json({ success: true, data: menu });

        if (!menu) {
            // return res.status(400).json({ success: false })
            return next(
                new ErrorResponse(`Menu not found with id of ${req.params.id}`, 404)
            );
        }

    } catch (err) {
        // res.status(400).json({ success: false });
        next(new ErrorResponse(`Menu not found with id of ${req.params.id}`, 404));
    }
};
//@desc create new menus
//@route Put /api/menu
//@access Private

exports.createMenu = async (req, res, next) => {
    try {
        const menu = await Menu.create(req.body);

        res.status(201).json({
            success: true,
            data: menu
        });

    } catch (err) {
        res.status(400).json({ success: false })
    }
};

//@desc update menu
//@route Put /api/menu/:id
//@access Private

exports.updateMenu = async (req, res, next) => {
    try {
        const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!menu) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: menu });

    } catch (err) {
        res.status(400).json({ success: false });
    }
};

//@desc delete menu
//@route delete /api/menu/:id
//@access Private

exports.deleteMenu = async (req, res, next) => {
    try {
        const menu = await Menu.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });

    } catch (err) {
        res.status(400).json({ success: false });
    }
};
