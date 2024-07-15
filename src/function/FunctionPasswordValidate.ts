export function validatePassword(password: string): boolean {
  const minLength = 8
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  if (password.length < minLength) {
    return false
  }

  return regex.test(password)
}
