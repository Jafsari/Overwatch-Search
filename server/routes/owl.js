const express = require('express');
const router = express.Router();
var auth = require('../middleware/auth')
const OverwatchLeague = require('overwatchleague');
const OWL = new OverwatchLeague();


router.get("/", (req,res,next) => {
    OWL.getRankings().then(response => {
        console.log(response.data);
        return res.status(200).json(response.data)
    }).catch(e => {
        return res.status(404).json(e.message)
    })
});

router.post("/roster", (req,res,next) => {
    console.log(req.body)
    OWL.getPlayers().then(response => {
        console.log(response.data);
        return res.status(200).json(response.data)
    }).catch(e => {
        return res.status(404).json(e.message)
    })
});

router.get("/live", (req,res,next) => {
    OWL.getLiveMatch().then(response => {
        console.log(response.data);
        return res.status(200).json(response.data)
    });
});

router.get("/standings", (req,res,next) => {
    OWL.getStandings().then(response => {
        console.log(response.data);
        return res.status(200).json(response.data)
    });
});

router.get("/schedule", (req,res,next) => {
    OWL.getSchedule().then(response => {
        console.log(response.data);
        return res.status(200).json(response.data)
    });
});


module.exports = router;