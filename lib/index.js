import VButton from './packages/Button'
import VButtonGroup from './packages/ButtonGroup'
import VImage from './packages/Image'
import VInput from './packages/Input'
import VContainer from './packages/Container'
import VRow from './packages/Row'
import VCol from './packages/Col'
import VBadge from './packages/Badge'
import VDivider from './packages/Divider'
import VForm from './packages/Form'
import VFormItem from './packages/FormItem'
import VCheckbox from './packages/Checkbox'
import VCheckboxButton from './packages/CheckboxButton'
import VCheckboxGroup from './packages/CheckboxGroup'
import VRadio from './packages/Radio'
import VRadioButton from './packages/RadioButton'
import VRadioGroup from './packages/RadioGroup'
import VSwitch from './packages/Switch'
import VSelect from './packages/Select'
import VComment from './packages/Comment'
import VDialog from './packages/Dialog'
import VOverlay from './packages/Overlay'
import VIcon, { ZoomQuestionIcon } from './packages/Icon'

import './scss/index.scss'

export default {
  install: app => {
    app.component(VButton.name, VButton);
    app.component(VButtonGroup.name, VButtonGroup);
    app.component(VImage.name, VImage);
    app.component(VInput.name, VInput);
    app.component(VContainer.name, VContainer);
    app.component(VRow.name, VRow);
    app.component(VCol.name, VCol);
    app.component(VBadge.name, VBadge);
    app.component(VDivider.name, VDivider);
    app.component(VForm.name, VForm);
    app.component(VFormItem.name, VFormItem);
    app.component(VCheckbox.name, VCheckbox);
    app.component(VCheckboxButton.name, VCheckboxButton);
    app.component(VCheckboxGroup.name, VCheckboxGroup);
    app.component(VRadio.name, VRadio);
    app.component(VRadioButton.name, VRadioButton);
    app.component(VRadioGroup.name, VRadioGroup);
    app.component(VSwitch.name, VSwitch);
    app.component(VSelect.name, VSelect);
    app.component(VComment.name, VComment);
    app.component(VDialog.name, VDialog);
    app.component(VOverlay.name, VOverlay);
    app.component(VIcon.name, VIcon);
    app.component(ZoomQuestionIcon.name, ZoomQuestionIcon);
  }
}

export {
  VButton,
  VButtonGroup,
  VImage,
  VInput,
  VContainer,
  VRow,
  VCol,
  VBadge,
  VDivider,
  VForm,
  VFormItem,
  VCheckbox,
  VCheckboxButton,
  VCheckboxGroup,
  VRadio,
  VRadioButton,
  VRadioGroup,
  VSwitch,
  VSelect,
  VComment,
  VDialog,
  VOverlay,
  VIcon
}
