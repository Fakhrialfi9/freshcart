/**
 * Validasi password dengan ketentuan sebagai berikut:
 * - Minimal 8 karakter
 * - Minimal satu huruf besar
 * - Minimal satu huruf kecil
 * - Minimal satu angka
 * - Minimal satu karakter khusus
 *
 * @param password - Password yang akan divalidasi
 * @returns Boolean - Mengembalikan true jika password valid, false jika tidak
 */
export function validatePassword(password: string): boolean {
  const minLength = 8
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  if (password.length < minLength) {
    return false
  }

  return regex.test(password)
}
