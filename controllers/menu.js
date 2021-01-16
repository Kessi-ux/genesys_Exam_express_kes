const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Menu = require('../models/Menu');

//@desc Get all menu
//@route Get /api/menu
//@access Public

exports.getMenus = asyncHandler(async (req, res, next) => {
    const menus = await Menu.find();
    res.status(200).json({ success: true, count: menus.length, data: menus });
});

//@desc Get single menu
//@route Get /api/:id
//@access Public

exports.getMenu = asyncHandler(async (req, res, next) => {

    const menu = await Menu.findById(req.params.id);
    res.status(200).json({ success: true, data: menu });

    if (!menu) {
        // return .status(400).json({ success: false })
        return nextres(
            new ErrorResponse(`Menu not found with id of ${req.params.id}`, 404)
        );
    }
});

//@desc create new menus
//@route Post /api/menu
//@access Private

exports.createMenu = asyncHandler(async (req, res, next) => {

    const menu = await Menu.create(req.body);

    res.status(201).json({
        success: true,
        data: menu
    });
    
    next ();

}
);

//@desc update menu
//@route Put /api/menu/:id
//@access Private

exports.updateMenu = asyncHandler(async (req, res, next) => {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!menu) {
        return next(
            new ErrorResponse(`Menu not found with id of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({ success: true, data: menu });
});

//@desc delete menu
//@route delete /api/menu/:id
//@access Private

exports.deleteMenu = asyncHandler(async (req, res, next) => {
    const menu = await Menu.findByIdAndDelete(req.params.id);

    if (!menu) {
        return next(
            new ErrorResponse(`Menu not found with id of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({ success: true, data: {} });

});