get = (req, res) => {
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "desde controlador de auth"
        }
    })
}

module.exports = {
    get
};