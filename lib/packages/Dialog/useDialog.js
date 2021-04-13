import { watch, getCurrentInstance } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'

export const CLOSE_EVENT = 'close'
export const OPEN_EVENT = 'open'
export const CLOSED_EVENT = 'closed'
export const OPENED_EVENT = 'opened'
export { UPDATE_MODEL_EVENT }

export const useDialog = (props, { emit }) => {
  function onCloseModal () {
    emit(UPDATE_MODEL_EVENT, false)
  }

  function onOpenModal () {
    emit(OPEN_EVENT)
  }

  function onAfterEnter () {
    emit(OPENED_EVENT)
  }

  function onBeforeLeave () {
    emit(CLOSE_EVENT)
  }

  function onAfterLeave () {
    emit(CLOSED_EVENT)
  }

  watch(() => props.modelValue, value => {
    if (value) {
      onOpenModal()
    }
  })

  return {
    onCloseModal,
    onAfterEnter,
    onAfterLeave,
    onBeforeLeave
  }
}
