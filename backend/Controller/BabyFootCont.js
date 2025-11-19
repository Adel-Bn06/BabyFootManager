const pool = require('../dbConnexion');
const {io} = require('../server');


exports.CreerUnePartie = async (req,res)=>{
    const {nom} = req.body;
    const partie = await pool.query("INSERT INTO BabyFoot (nom) VALUES ($1) RETURNING *", [nom]);
    io.emit("update");
    res.json(partie.rows[0]);
};

exports.RecupererToutesLesParties = async (req,res)=>{
    const toutesLesParties = await pool.query("SELECT * FROM BabyFoot ORDER BY id");
    res.json(toutesLesParties.rows);
};

exports.ModifierLeStatusDuPartie = async (req,res)=>{
    const {id} = req.params;
    await pool.query("UPDATE BabyFoot SET status = TRUE WHERE id = $1",[id]);
    io.emit("update")
    res.json({message : "Partie Terminée !"});
};

exports.SupprimerPartie = async (req,res)=>{
    const {id} = req.params;
    await pool.query("DELETE FROM BabyFoot Where id = $1",[id]);
    io.emit("update");
    res.json({message : "Partie Supprimée !"});
};