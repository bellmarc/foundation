const express = require('express');
const inventoryRouter = express.Router();
const Product = require("../models/inventory.js");

inventoryRouter.get("/", (req, res) => {
    Product.find((err, products) => {
        if(err) {
            res.status(500);
            return res.send(err);
        }
        return res.status(200).send(products);
    })
})

inventoryRouter.post("/", (req, res)=> {
    const newProduct = new Product(req.body);
    newProduct.save((err, newProduct) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
    })
    return res.send(newProduct);
})

inventoryRouter.get("/:_id", (req, res) => {
Product.findById(req.params._id, (err, product) => {
    if(err) {
        res.status(500);
        return res.send(err)
    } else if (!product) {
        res.status(404);
        return next( new Error (`${product.title} Not Found`))
    }
    return res.send(product)
})
})

inventoryRouter.delete("/:_id", (req, res)=> {
    Product.findByIdAndRemove(req.params._id, (err, product) => {
        if (err) {
            res.status(500);
            return res.send(`Deletion error`)
        }
        return res.status(200).send(`Successfully Deleted ${product.title} from Inventory`)
    })
})

inventoryRouter.put("/:_id", (req, res)=> {
    Product.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
        (err, product) => {
            if (err) {
                res.status(500);
            }
            return res.send(product)
        }
    )
})



module.exports = inventoryRouter