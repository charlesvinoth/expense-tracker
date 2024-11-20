import * as v from 'valibot'

export interface SignUpState {
  name: string
  email: string
  password: string
  errors: {
    name: string
    email: string
    password: string
  }
  appwriteError: string
}

export const InitialState: SignUpState = {
  name: '',
  email: '',
  password: '',
  errors: {
    name: '',
    email: '',
    password: '',
  },
  appwriteError: '',
}

export const SignUpSchema = v.object({
  name: v.pipe(
    v.string('Name must be a string.'),
    v.nonEmpty('Name is required.'),
    v.maxLength(128, 'Name must be no longer than 128 characters.'),
  ),
  email: v.pipe(
    v.string('Email must be a string.'),
    v.nonEmpty('Email is required.'),
    v.email('Please enter a valid email address.'),
  ),
  password: v.pipe(
    v.string('Password must be a string.'),
    v.nonEmpty('Password is required.'),
    v.minLength(8, 'Password must be 8 characters long.'),
    v.maxLength(256, 'Password must be no longer than 256 characters.'),
    v.regex(/[a-z]/, 'Password must contain a lowercase letter.'),
    v.regex(/[A-Z]/, 'Password must contain a uppercase letter.'),
    v.regex(/[0-9]/, 'Password must contain a number.'),
  ),
})
