import express from "express";
import { findAll, findOne, addOne, updateOne, removeOne } from "../controllers/controller.products";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {

        const { id } = req.params;

        let result;

        if(id) {
            result = await findOne(id);
        }
        else {
            result = await findAll();
        }

        res.json(result);
    } 
    catch (err) {
        next(err);
    }
})

router.post("/", async (req, res, next) => {
    try {

        const incomingData = req.body;

        if(incomingData) {

            const result = await addOne(incomingData);

            res.json(result);
        }
        else {
            res.json({  msg: "Error POSTING: No incoming data" });
        }

    } 
    catch (err) {
        next(err);
    }
})

router.put("/:id", async (req, res, next) => {
    try {

        const { id } = req.params;
        const incomingData = req.body;

        if(id && incomingData) {
            const result = await updateOne(id, incomingData);
            res.json(result);
        }
        else {
            res.json({ msg: "Missing id and/or data to update" });
        }

    } 
    catch (err) {
        next(err);
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        if(id) {
            const result = await removeOne(id);
            res.json(result)
        }
        else {
            res.json({ msg: "Error DELETING: Cannot remove row without id" })
        }

    } 
    catch (err) {
        next(err);
    }
})

export default router;