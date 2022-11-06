const fs = require('fs')
const path = require('path')

const readTemplateFile = () => fs.readFileSync(path.join(__dirname, '163.svg'), 'utf-8')

module.exports = (req, res) => {
    res.setHeader('content-type', 'image/svg+xml')
    res.send(readTemplateFile())
}
