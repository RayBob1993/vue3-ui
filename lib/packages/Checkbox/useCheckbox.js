import { inject, computed, getCurrentInstance } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'
import { FORM_KEY, FORM_ITEM_KEY, CHECKBOX_GROUP_KEY } from '../../utils/keys'

const useCheckboxGroup = () => {
  const Form = inject(FORM_KEY)
  const FormItem = inject(FORM_ITEM_KEY)
  const CheckboxGroup = inject(CHECKBOX_GROUP_KEY)

  return {
    Form,
    FormItem,
    CheckboxGroup
  }
}

const useModel = (props) => {
  const { emit } = getCurrentInstance()
  const { CheckboxGroup } = useCheckboxGroup()

  const store = computed(() => CheckboxGroup ? CheckboxGroup.modelValue : props.modelValue)

  const model = computed({
    get () {
      return store
    },
    set (value) {
      emit(UPDATE_MODEL_EVENT, value)
    }
  })

  return {
    model
  }
}

const useCheckboxStatus = (props, { model }) => {
  const isChecked = computed(() => '')

  return {
    isChecked
  }
}

const useDisabled = (props) => {
  const { Form, FormItem, CheckboxGroup } = useCheckboxGroup()

  const isDisabled = computed(() => {
    return Form && Form.disabled ||
      FormItem && FormItem.disabled ||
      CheckboxGroup && CheckboxGroup.disabled ||
      props.disabled
  })

  return {
    isDisabled
  }
}

export const useCheckbox = (props) => {
  const { model } = useModel(props)
  const { isDisabled } = useDisabled(props)
  const { isChecked } = useCheckboxStatus(props, { model })

  return {
    isDisabled,
    isChecked,
    model
  }
}
