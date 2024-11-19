import * as v from 'valibot'

export interface LoginState {
  email: string
  password: string
  errors: {
    email: string
    password: string
  }
  appwriteError: string
}

export const InitialState: LoginState = {
  email: 'charlezvinoth@gmail.com',
  password: 'Admin@123',
  errors: {
    email: '',
    password: '',
  },
  appwriteError: '',
}

export const LoginSchema = v.object({
  email: v.pipe(
    v.string('Email must be a string.'),
    v.nonEmpty('Email is required.'),
    v.email('Please enter a valid email address.'),
  ),
  password: v.pipe(
    v.string('Password must be a string.'),
    v.nonEmpty('Password is required.'),
    v.minLength(8, 'Password must be between 8 and 256 characters long.'),
  ),
})
