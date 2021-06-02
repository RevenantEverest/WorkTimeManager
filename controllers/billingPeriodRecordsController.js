const db = require('../models/billingPeriodRecordsDB');

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
    index(req, res, next) {
        db.findAll()
        .then(billingPeriodRecords => res.json({ message: "Indexing Billing Period Records", data: billingPeriodRecords }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) res.json({ message: "No Billing Period Records Found", data: [] });
            else next(err);
        });
    },
    getOne(req, res, next) {
        db.findById(req.params.id)
        .then(billingPeriodRecord => res.json({ message: "Getting Billing Period Record", data: billingPeriodRecord }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) res.json({ message: "No Billing Period Record Found", data: [] });
            else next(err);
        });
    },
    getByBillingPeriodId(req, res, next) {
        db.findByBillingPeriodId(req.params.id)
        .then(billingPeriodRecords => res.json({ message: "Getting Billing Period Records", data: billingPeriodRecords }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) res.json({ message: "No Billing Period Records Found", data: [] });
            else next(err);
        });
    },
    save(req, res, next) {
        db.save(req.body)
        .then(billingPeriodRecord => res.json({ message: "Billing Period Record Saved", data: billingPeriodRecord }))
        .catch(err => next(err));
    },
    update(req, res, next) {
        db.update(req.body)
        .then(billingPeriodRecord => res.json({ message: "Billing Period Record Updated", data: billingPeriodRecord }))
        .catch(err => next(err));
    },
    delete(req, res, next) {
        db.delete(req.params.id)
        .then(() => res.status(200).json({ message: "Billing Period Record Deleted" }))
        .catch(err => next(err));
    }
};