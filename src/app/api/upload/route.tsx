import path from 'path'
import { unlink, writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { handleProcessFile } from '~/helpers/server'
import { HandleError } from '~/helpers/server'

export async function POST(request: NextRequest) {
  try {
    const data: any = await request.formData()
    const file: File | null = data.get('file') as unknown as File
    const oldFile: String | null = data.get('oldFile') as unknown as String

    const { fileName, buffer, pathTo }: any = await handleProcessFile(
      file,
      oldFile,
    )

    if (file) {
      await writeFile(path.join(pathTo, fileName), buffer)
    }
    return NextResponse.json({ image: fileName })
  } catch (error) {
    return HandleError(error)
  }
}
