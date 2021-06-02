const db = require('../models/billingPeriodsDB');

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
    index(req, res, next) {
        db.findAll()
        .then(billingPeriods => res.json({ message: "Indexing Billing Periods", data: billingPeriods }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) res.json({ message: "No Billing Periods Found", data: [] });
            else next(err);
        });
    },
    getOne(req, res, next) {
        db.findById(req.params.id)
        .then(billingPeriod => res.json({ message: "Getting Billing Period", data: billingPeriod }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) res.json({ message: "No Billing Period Found", data: [] });
            else next(err);
        });
    },
    getByProjectId(req, res, next) {
        db.findByProjectId(req.params.id)
        .then(billingPeriods => res.json({ message: "Getting Billing Periods", data: billingPeriods }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) res.json({ message: "No Billing Periods Found", data: [] });
            else next(err);
        });
    },
    save(req, res, next) {
        db.save(req.body)
        .then(billingPeriod => res.json({ message: "Billing Period Saved", data: billingPeriod }))
        .catch(err => next(err));
    },
    update(req, res, next) {
        db.update(req.body)
        .then(billingPeriod => res.json({ message: "Billing Period Updated", data: billingPeriod }))
        .catch(err => next(err));
    },
    delete(req, res, next) {
        db.delete(req.params.id)
        .then(() => res.status(200).json({ message: "Billing Period Deleted" }))
        .catch(err => next(err));
    }
};