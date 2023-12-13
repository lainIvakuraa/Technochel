class ControllerUser {
    async registration (req, res) {

    }

    async login (req, res) {

    }

    async checkUser (req, res) {
        const query = req.query
        res.json(query)
    }
}

module.exports = new ControllerUser()