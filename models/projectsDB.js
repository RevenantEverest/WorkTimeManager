const db = require('../config/connection');

module.exports = {
    findAll() {
        return db.many('SELECT * FROM projects');
    },
    findById(id) {
        return db.one('SELECT * FROM projects WHERE id = $1', id);
    },
    findByUserId(id) {
        return db.many('SELECT * FROM projects WHERE user_id = $1', id);
    },
    save(project) {
        return db.one(`INSERT INTO projects (user_id, name, description, created_at) 
        VALUES ($/user_id/, $/name/, $/description/, $/created_at/)
        RETURNING *`, project);
    },
    update(project) {
        return db.one(`UPDATE projects 
        SET
        user_id = $/user_id/,
        name = $/name/,
        description = $/description/,
        image_url = $/image_url/
        WHERE id = $/id/
        RETURNING *`, project);
    },
    delete(id) {
        return db.none('DELETE FROM projects WHERE id = $1', id);
    }
};