const express = require('express');
const router = express.Router();
const babyFootCont = require('../Controller/BabyFootCont');

router.post('/', babyFootCont.CreerUnePartie);
router.get('/', babyFootCont.RecupererToutesLesParties);
router.put('/:id', babyFootCont.ModifierLeStatusDuPartie);
router.delete('/:id', babyFootCont.SupprimerPartie);

module.exports = router;