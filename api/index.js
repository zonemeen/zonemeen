import fs from 'fs'
import { join } from 'path'

const readTemplateFile = () => fs.readFileSync(join(__dirname, '163.svg'), 'utf-8')

export default (req, res) => {
    res.setHeader('content-type', 'image/svg+xml')
    res.send(readTemplateFile())
}
