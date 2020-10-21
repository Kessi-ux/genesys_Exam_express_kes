//@desc Get all menu
//@route Get /api/menu
//@access Public

exports.getMenus = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show all menu' });
};

//@desc Get single menu
//@route Get /api/:id
//@access Public

exports.getMenu = (req, res, next) => {
    res.status(200).json({ success: true, msq: `show menu ${req.params.id}` });
};

//@desc create new menus
//@route Put /api/menu
//@access Private

exports.createMenu = (req, res, next) => {
    res.status(200).json({ success: true, msq: 'create new menu' });
};

//@desc update menu
//@route Put /api/menu/:id
//@access Private

exports.updateMenu = (req, res, next) => {
    res.status(200).json({ success: true, msq: `update menu ${req.params.id}` });
};

//@desc create new bootcamps
//@route delete /api/menu/:id
//@access Private

exports.deleteMenu = (req, res, next) => {
    res.status(200).json({ success: true, msq: `delete menu ${req.params.id}` });
};
