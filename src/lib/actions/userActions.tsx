'use server'

import User from '@/models/userModel'
import Event from '@/models/eventModel'
import { handleError } from '@/lib/utils'

import { CreateUserParams, UpdateUserParams } from '@/types'
import { connect } from '@/dbConfig/dbConfig'


export async function getUserById(userId: string) {
  try {
    connect()

    const user = await User.findById(userId)

    if (!user) throw new Error('User not found')
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error)
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    connect()

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })

    if (!updatedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    handleError(error)
  }
}
