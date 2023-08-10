import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const tag = request.nextUrl.searchParams.get('tag')
  const pageVal = request.nextUrl.searchParams.get('pageval');
  const path = request.nextUrl.searchParams.get('path');

  if (pageVal == "tag") {
    if (secret !== "Basit-Sharif") {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    if (!tag) {
      return NextResponse.json({ message: 'Missing tag param' }, { status: 400 })
    }

    revalidateTag(tag)

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } else {
    // else which is by path
    if (!path) {
      return NextResponse.json({ message: 'Missing path param' }, { status: 400 })
    }

    revalidatePath(path)

    return NextResponse.json({ revalidated: true, now: Date.now() })
  }
}