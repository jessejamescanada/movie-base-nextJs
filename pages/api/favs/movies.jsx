import prisma from '../../../prisma/client'

import { getAuth, clerkClient } from '@clerk/nextjs/server'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('BOOOOOOOOOOOOOOOOOO')
    const { userId } = getAuth(req)
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const user = userId ? await clerkClient.users.getUser(userId) : null
    console.log(user)

    try {
      const result = await prisma.favorite.create({
        data: {
          movieTitle: req.body.movie.title,
          movieImage: req.body.movie.poster_path,
          movieOverview: req.body.movie.overview,
          movieId: req.body.movie.id.toString(),
          userName: user?.firstName,
          user: {
            connectOrCreate: {
              where: {
                id: user?.emailAddresses[0].id || user?.id,
              },
              create: {
                id: user?.emailAddresses[0].id || user?.id,
                email: user?.emailAddresses[0].emailAddress,
                name: user?.firstName,
              },
            },
          },
        },

        include: {
          user: true,
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
