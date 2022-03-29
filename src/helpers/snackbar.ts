import { createToast } from 'mosha-vue-toastify'
// import the styling for the toast
import 'mosha-vue-toastify/dist/style.css'

export default function (message: any, position: string = 'top-right', type: string = 'danger' ): void {
  createToast(message, {
    position: position as any,
    type: type as any
  })
}
