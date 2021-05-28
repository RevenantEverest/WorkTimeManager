const db = require('../config/connection');

module.exports = {
    findAll() {
        return db.many('SELECT * FROM billing_periods');
    },
    findById(id) {
        return db.one('SELECT * FROM billing_periods WHERE id = $1', id);
    },
    findByProjectId(id) {
        return db.many('SELECT * FROM billing_periods WHERE project_id = $1', id);
    },
    save(billingPeriod) {
        return db.one(`INSERT INTO billing_periods (project_id, start_date) 
        VALUES ($/project_id/, $/start_date/)
        RETURNING *`, billingPeriod);
    },
    update(billingPeriod) {
        return db.one(`UPDATE billing_periods
        SET
        project_id = $/project_id/,
        start_date = $/start_date/,
        end_date = $/end_date/
        WHERE id = $/id/
        RETURNING *`, billingPeriod);
    },
    delete(id) {
        return db.none('DELETE FROM billing_period WHERE id = $1', id);
    }
};