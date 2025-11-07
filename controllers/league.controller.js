const League = require ('../models/league.model')


//GET all leagues
async function getLeagues(req, res){
    try {
        const leagues = await League.find()
        res.status(200).send({
            ok:true,
            message: "Ligas obtenidas correctamente",
            leagues
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message: "Error al obtener las ligas"
        })
    }
}

//GET league by ID
async function getLeagueById(req, res){
    try {
        const id = req.params.id
        const getLeague = await League.findById(id)

        if(!getLeague){
            return res.status(404).send({
            ok:false,
            message:"No se encontró la liga"
        })
        }

        res.status(200).send({
            ok:true,
            message: "Liga encontrada",
            getLeague
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message: "Error al traer liga"
        })
    }
}

// POST league
async function createLeague(req, res){
    try {
        const league = new League(req.body)
        const newLeague = await league.save()
        res.status(201).send(newLeague)
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({
                message: 'Error de validación',
                errors: errors
            });
        }
        res.status(500).send("Error al crear liga")
        console.log(error)
    }
}

// DELETE league
async function deleteLeague(req,res){

    try {
        const id = req.params.id
        const deletedLeague = await League.findByIdAndDelete(id)

        if(!deletedLeague){
            return res.status(404).send({
                ok:false,
                message:"No se encontró la liga para borrar"
            })
        }

        res.status(200).send({
            ok:true,
            message: "Liga borrada correctamente",
            deletedLeague
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message: "Hubo un error al eliminar la liga"
        })
    }
}

//UPDATE league
async function updateLeague(req, res){
    try {
        const id = req.params.id
        const updateLeague = await League.findByIdAndUpdate(id, req.body, { new: true })
        if(!updateLeague){            
            return res.status(404).send({
                ok:false,
                message: "No se encontro la liga para actualizar"
            })
        }
            res.status(200).send({
            ok:true,
            message: "Se actualizó la liga exitosamente",
            updateLeague
        })
        
    } catch (error) {
        res.status(500).send("Error al actualizar liga")
        console.log(error)
    }
}

module.exports = {
    getLeagues,
    getLeagueById,
    createLeague,
    deleteLeague,
    updateLeague
}