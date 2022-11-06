const fs =require('fs')

const readTemplateFile = () => fs.readFileSync('163.svg', 'utf-8')

module.exports = (req, res) => {
    res.setHeader('content-type', 'image/svg+xml')
    res.send(readTemplateFile())
}
