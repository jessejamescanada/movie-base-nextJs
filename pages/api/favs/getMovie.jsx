import prisma from '../../../prisma/client'

import { getAuth, clerkClient } from '@clerk/nextjs/server'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = getAuth(req)
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const user = userId ? await clerkClient.users.getUser(userId) : null
    // console.log(user)

    try {
      const result = await prisma.favorite.findMany({
        where: {
          userId: user?.emailAddresses[0].id,
        },
      })
      console.log(result)
      res.status(200).json(result)
    } catch (error) {
      res.status(403).json({ error: 'Error while making post' })
      console.log(error)
    }
  }
}
