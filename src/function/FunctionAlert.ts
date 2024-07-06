import { ref } from 'vue'

export const alertBox = ref()
export function showAlert(message: string, type: string) {
  alertBox.value.showAlert(message, type)
}
