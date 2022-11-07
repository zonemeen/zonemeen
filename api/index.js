const fs = require('fs')
const path = require('path')

const readTemplateFile = () => fs.readFileSync(path.resolve('.', '163.svg'), 'utf-8')

module.exports = async (req, res) => {
    res.setHeader('content-type', 'image/svg+xml')
    res.statusCode = 200
    res.send(readTemplateFile())
}
