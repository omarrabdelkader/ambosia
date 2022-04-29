const express = require('express')

const {setMenu, getMenu, updateMenu, deleteMenu, getMenuById} = require('../Controller/menuController')

const router = express.Router()


router.post('/', setMenu)

router.get('/menuinfo', getMenu)

// add router.get('/menuinfo/:id', getMenuById)
router.get('/menuinfo/:id', getMenuById)


router.put("/:id", updateMenu)

router.delete("/:id", deleteMenu)

module.exports = router