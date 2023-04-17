import { PrismaClient } from "@prisma/client"

let prisma = new PrismaClient({
    log: [
        // {
        //     emit: 'stdout',
        //     level: 'query',
        // },
        // {
        //     emit: 'event',
        //     level: 'query',
        // },
        // 'error',
        // 'info',
        // 'warn',
    ],
})
// prisma.$on('query', (e) => {
//     console.log('Query: ' + e.query)
//     console.log('Params: ' + e.params)
//     console.log('Duration: ' + e.duration + 'ms')
// })

export default prisma