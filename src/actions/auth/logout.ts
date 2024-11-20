'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createSessionClient } from '@/lib/appwrite'

export default async function logout() {
  try {
    const { account } = await createSessionClient()
    await account.deleteSession('current')

    const cookieStore = await cookies()
    cookieStore.delete('appwrite-session')
  } catch (error) {
    console.error(JSON.stringify(error))
  }

  redirect('/login')
}
