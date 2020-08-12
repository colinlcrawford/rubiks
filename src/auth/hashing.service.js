import bcrypt from 'bcrypt'

export async function hashPassword(password) {
  const saltRounds = 10
  return bcrypt.hash(password, saltRounds)
}

export async function passwordsMatch(candidatePassword, passwordHash) {
  return bcrypt.compare(candidatePassword, passwordHash)
}

