const { Router } = require("express");
require('dotenv').config()
const express = require("express");
const { Component } = require("react");
const router = express.Router();
const User = require("../model/Users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { body, validationResult } = require('express-validator');

let JWT_SECRET = process.env.JWT_SECRET
router.post("/createuser", body('email').isEmail(),
    body('name').isLength({ min: 4 }),
    body('password', "password is too short choose a new one").isLength({ min: 5 }), async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            location: req.body.location

        })
        res.json({ success: true })

    })



router.post("/login", body('email').isEmail(),

    body('password', "password is too short choose a new one").isLength({ min: 5 }), async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;

        let userData = await User.findOne({ email })
        if (!userData) {
            return res.status(400).json({ errors: "invalid credentials" });
        }
        const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
        if (!pwdCompare) {
            return res.status(400).json({ errors: "invalid password" });
        }
        const data = {
            user: {
                id: userData.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)


        return res.json({ success: true, authToken: authToken })

    })
module.exports = router;