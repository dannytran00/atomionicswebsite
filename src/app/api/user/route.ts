import md5 from 'md5'
import { NextRequest, NextResponse } from 'next/server'
import { CREATE, LIST } from '~/app/api/crud'
import { HandleError } from '~/helpers/server'
import { prisma } from '~/../prisma/client'

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    const data = await req.json()
    const { password, confirm_password, ...payload } = data

    const existingUser = await prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    })

    if (existingUser) {
      return NextResponse.json(
        {
          message: 'Email sudah terdaftar',
        },
        { status: 401 },
      )
    }

    if (password !== confirm_password) {
      return NextResponse.json(
        {
          message: 'New password and confirm new password tidak sama',
        },
        { status: 401 },
      )
    }

    const created: any = await prisma.user.create({
      data: { password: md5(password), ...payload },
    })

    delete created.password

    return NextResponse.json(created)
  } catch (error: any) {
    return HandleError(error)
  }
}
