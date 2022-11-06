import fs from 'fs'

const readTemplateFile = () => fs.readFileSync('../163.svg', 'utf-8')

export default async (request, response) => {
    response.setHeader('content-type', 'image/svg+xml')
    response.send(readTemplateFile())
}
