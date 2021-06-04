export const isValidComponentSize = value => [
  'default',
  'lg',
  'md',
  'sm',
  'xs'
].includes(value);

export const isValidDirection = value => [
  'horizontal',
  'vertical'
].includes(value);

export const isValidType = value => [
  'default',
  'primary',
  'success',
  'danger',
  'warning',
].includes(value);
