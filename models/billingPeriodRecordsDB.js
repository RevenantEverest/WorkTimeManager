const db = require('../config/connection');

module.exports = {
    findAll() {
        return db.many('SELECT * FROM billing_period_records');
    },
    findById(id) {
        return db.one('SELECT * FROM billing_period_records WHERE id = $1', id);
    },
    findByBillingPeriodId(id) {
        return db.many('SELECT * FROM billing_period_records WHERE billing_period_id = $1 ORDER BY id ASC', id);
    },
    save(record) {
        return db.one(`INSERT INTO billing_period_records (billing_period_id, time_start, time_end)
        VALUES ($/billing_period_id/, $/time_start/, $/time_end/)
        RETURNING *`, record);
    },
    update(record) {
        return db.one(`UPDATE billing_period_records
        SET
        billing_period_id = $/billing_period_id/,
        title = $/title/,
        description = $/description/,
        time_start = $/time_start/,
        time_end = $/time_end/
        WHERE id = $/id/
        RETURNING *`, record);
    },
    delete(id) {
        return db.none('DELETE FROM billing_period_records WHERE id = $1', id);
    }
};