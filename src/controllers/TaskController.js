function index(req, res) {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM t ', (err, tasks) => {
            if (err) {
                res.json(err);
            }
            res.render('tasks/index', { tasks });
        });
    });
}

function create(req, res) {
    res.render('tasks/create');
}


function store(req, res) {
    const data = req.body
    console.log(req.body)
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO t SET ?', [data], (err, rows) => {
            res.redirect('/tasks');
        });
    });
}

function destroy(req, res) {
    const id = req.body.id;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM t WHERE id = ?', [id], (err, rows) => {
            res.redirect('/tasks');
        });
    })
}

function edit(req, res) {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM t WHERE id = ?', [id], (err, tasks) => {
            if (err) {
                res.json(err);
            }
            res.render('tasks/edit', { tasks });
        });
    });
}

function crud(req, res) {
    res.render('tasks/crud');
}

function pert(req, res) {
    res.render('tasks/pert');
}

function update(req, res) {
    const id = req.params.id;
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE t SET ? WHERE id = ?', [data, id], (err, rows) => {
            res.redirect('/tasks');
        });
    });
}
module.exports = {
    index: index,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update,
    pert: pert,
    crud: crud,

}