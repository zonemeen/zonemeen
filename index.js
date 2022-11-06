import fs from 'fs'

const readTemplateFile = () => fs.readFileSync('163.svg', 'utf-8')

export default (req, res) => {
    res.setHeader('content-type', 'image/svg+xml')
    res.send(readTemplateFile())
}
