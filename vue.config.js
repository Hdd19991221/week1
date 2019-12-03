const data = require('./src/mock/data.json')

module.exports = {
    //接口
    devServer: {
        before(app) {
            app.get('/api/login', (req,res) => {
                console.log(data)
                res.send(data)
            })
        }
    }
}