const db = require('../models/projectsDB');

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
    index(req, res, next) {
        db.findAll()
        .then(projects => res.json({ message: "Indexing Projects", data: projects }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) res.json({ message: "No Projects Found", data: [] });
            else next(err);
        });
    },
    getOne(req, res, next) {
        db.findById(req.params.id)
        .then(project => res.json({ message: "Getting Project", data: project }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) res.json({ message: "No Projects Found", data: [] });
            else next(err);
        });
    },
    getByUserId(req, res, next) {
        db.findByUserId(req.params.id)
        .then(projects => res.json({ message: "Getting Projects", data: projects }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) res.json({ message: "No Projects Found", data: [] });
            else next(err);
        });
    },
    save(req, res, next) {
        db.save(req.body)
        .then(project => res.json({ message: "Project Saved", data: project }))
        .catch(err => next(err));
    },
    update(req, res, next) {
        db.update(req.body)
        .then(project => res.json({ message: "Project Updated", data: project }))
        .catch(err => next(err));
    },
    delete(req, res, next) {
        db.delete(req.params.id)
        .then(() => res.status(200).json({ message: "Project Deleted" }))
        .catch(err => next(err));
    }
};