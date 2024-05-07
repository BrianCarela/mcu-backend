const express = require('express')
const router = express.Router()

const {
    getAllCharacters,
    createOneCharacter,
    getCharacterByName,
    updateCharacter,
    deleteCharacter
} = require("../controllers/McuController")

// .../api/allCharacters
router.get("/allCharacters", getAllCharacters)

// .../api/createOneCharacter
router.post('/createOneCharacter', createOneCharacter)

// .../api/getCharacterByName/:name
router.get("/getCharacterByName/:name", getCharacterByName)

// .../api/updateCharacter/:id
router.put('/updateCharacter/:id', updateCharacter)

// .../api/deleteCharacter/:id
router.delete('/deleteCharacter/:id', deleteCharacter)

module.exports = router