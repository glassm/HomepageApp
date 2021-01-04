const Pool = require('pg').Pool
const pool = new Pool({
    user: 'homepage',
    host: 'localhost',
    database: 'homepage',
    password: 'RvArmARa',
    port: 5432,
})

const getTempHumidData = (request, response) => {
    response.status(200).json({temp: 25.3, humidity: 32})
}

const getLinks = (request, response) => {
    const query =
        `SELECT l.group_nr     as "groupNr",
                l.link_nr      as "linkNr",
                l.description,
                l.url,
                lg.group_nr    as "groupNr",
                lg.group_title as "groupTitle"
         FROM links l,
              link_group lg
         WHERE l.group_nr = lg.group_nr
         ORDER by lg.group_title`;

    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createLink = (request, response) => {
    // const { groupNr, title, url } = request.body
    //
    // pool.query('INSERT INTO links (groupNr, title, url) VALUES ($1, $2, $3)', [groupNr, title, url], (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    //     response.status(201).send(`Link added with ID: ${results.insertId}`)
    // })
}

const createLinkGroup = (request, response) => {
    // const { groupNr, title, url } = request.body
    //
    // pool.query('INSERT INTO link_group (title, url) VALUES ($1, $2)', [title, url], (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    //     response.status(201).send(`Link Group added with ID: ${results.insertId}`)
    // })
}

const updateLink = (request, response) => {
    // const id = parseInt(request.params.id)
    // const { name, email } = request.body
    //
    // pool.query(
    //     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    //     [name, email, id],
    //     (error, results) => {
    //         if (error) {
    //             throw error
    //         }
    //         response.status(200).send(`User modified with ID: ${id}`)
    //     }
    // )
}

const updateGroup = (request, response) => {
    // const id = parseInt(request.params.id)
    // const { name, email } = request.body
    //
    // pool.query(
    //     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    //     [name, email, id],
    //     (error, results) => {
    //         if (error) {
    //             throw error
    //         }
    //         response.status(200).send(`User modified with ID: ${id}`)
    //     }
    // )
}

const deleteLink = (request, response) => {
    // const id = parseInt(request.params.id)
    //
    // pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    //     response.status(200).send(`User deleted with ID: ${id}`)
    // })
}

const deleteGroup = (request, response) => {
    // const id = parseInt(request.params.id)
    //
    // pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    //     response.status(200).send(`User deleted with ID: ${id}`)
    // })
}

module.exports = {
    getTempHumidData,
    getLinks,
    createLink,
    createLinkGroup,
    updateLink,
    updateGroup,
    deleteLink,
    deleteGroup
}
