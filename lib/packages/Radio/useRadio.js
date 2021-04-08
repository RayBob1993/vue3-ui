import { ref, inject, computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'
import { FORM_KEY, FORM_ITEM_KEY, RADIO_GROUP_KEY } from '../../utils/keys'

const useRadioGroup = () => {
  const Form = inject(FORM_KEY)
  const FormItem = inject(FORM_ITEM_KEY)
  const RadioGroup = inject(RADIO_GROUP_KEY)

  return {
    Form,
    FormItem,
    RadioGroup
  }
}

const useModel = (props, { emit }) => {
  const { RadioGroup } = useRadioGroup()

  const store = computed(() => RadioGroup ? RadioGroup.modelValue : props.modelValue)
  const model = computed({
    get () {
      return store
    },
    set (value) {
      emit(UPDATE_MODEL_EVENT, value)
    }
  })

  return {
    store,
    model
  }
}

const useRadioStatus = (props) => {
  const focus = ref(false)
  const isChecked = computed(() => props.checked)

  return {
    isChecked,
    focus
  }
}

const useDisabled = (props) => {
  const { Form, FormItem, RadioGroup } = useRadioGroup()

  const isDisabled = computed(() => {
    return Form && Form.disabled ||
      FormItem && FormItem.disabled ||
      RadioGroup && RadioGroup.disabled ||
      props.disabled
  })

  return {
    isDisabled
  }
}

export const useRadio = (props, context) => {
  const { emit } = context
  const { isDisabled } = useDisabled(props)
  const { isChecked, focus } = useRadioStatus(props)
  const { model } = useModel(props, context)

  function onChange (event) {
    emit('change', event)
  }

  function onFocus (event) {
    emit('focus', event)
  }

  function onBlur (event) {
    emit('blur', event)
  }

  return {
    isDisabled,
    isChecked,
    focus,
    model,
    onChange,
    onFocus,
    onBlur
  }
}
