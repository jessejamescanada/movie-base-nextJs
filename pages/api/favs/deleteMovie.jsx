import prisma from '../../../prisma/client'

import { getAuth, clerkClient } from '@clerk/nextjs/server'

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    // const { userId } = getAuth(req)
    // if (!userId) {
    //   return res.status(401).json({ error: 'Unauthorized' })
    // }
    // const user = userId ? await clerkClient.users.getUser(userId) : null

    try {
      const result = await prisma.favorite.deleteMany({
        where: {
          movieId: {
            contains: req.body.id.toString(),
          },
        },
      })
      res.status(200).json(result)
    } catch (error) {
      res.status(403).json({ error: 'Error while making post' })
      console.log(error)
    }
  }
}
