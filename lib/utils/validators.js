export const isValidComponentSize = value => [
  'default',
  'large',
  'medium',
  'small',
  'mini'
].includes(value)

export const isValidDirection = value => [
  'horizontal',
  'vertical'
].includes(value)

export const isValidType = value => [
  'default',
  'success',
  'danger',
  'warning',
].includes(value)
