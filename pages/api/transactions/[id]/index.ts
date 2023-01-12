import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {
        handleGET(req, res)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}

// GET /api/transactions/:id
const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    let data = await prisma.transaction.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            category: true,
            user: true,
            currency: true,
        },

    })

    if (!data) {
        return res.status(404).json({ message: 'Transaction not found', })
    }

    return res.json({ data, })

}