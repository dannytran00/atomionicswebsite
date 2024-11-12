import { prisma } from '../client'
import CommentData from './comment'
import ContentData from './content'
import ElfSightData from './elfsight'
import MediaData from './media'
import SocialData from './social'
import TeamData from './team'

async function main() {
  console.log('start seeding...')
  // clear
  await prisma.content.deleteMany({})
  await prisma.comment.deleteMany({})
  await prisma.media.deleteMany({})
  await prisma.social.deleteMany({})
  await prisma.team.deleteMany({})
  await prisma.elfsight.deleteMany({})

  // seed new

  const admin = {
    email: 'admin@mailinator.com',
    password: 'c93ccd78b2076528346216b3b2f701e6', //admin1234
    fullname: 'Atomionics Admin',
  }
  const user = await prisma.user.upsert({
    where: { email: admin?.email },
    update: { password: admin?.password },
    create: { ...admin, role: 'ADMIN' },
  })

  // for (const article of ArticleData) {
  //   user &&
  //     (await prisma.article.create({
  //       data: {
  //         ...article,
  //         author: { connect: { id: user.id } },
  //       },
  //     }))
  // }

  const content = await prisma.content.createMany({
    data: ContentData,
    skipDuplicates: true,
  })
  const media = await prisma.media.createMany({
    data: MediaData,
    skipDuplicates: true,
  })
  const comment = await prisma.comment.createMany({
    data: CommentData,
    skipDuplicates: true,
  })
  const social = await prisma.social.createMany({
    data: SocialData,
    skipDuplicates: true,
  })
  const team = await prisma.team.createMany({
    data: TeamData,
    skipDuplicates: true,
  })
  const elfsight = await prisma.elfsight.createMany({
    data: ElfSightData,
    skipDuplicates: true,
  })

  console.log({ user })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
