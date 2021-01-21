# date-picker

<demo-datePicker demo="1"></demo-datePicker>
```vue
<yn-date-picker v-model="show" @confirm="handleConfirm"></yn-date-picker>
```
<demo-datePicker demo="2"></demo-datePicker>
```vue
<yn-date-picker
  v-model="show2"
  start="2021-01-21"
  end="2031-12-30"
  defaultDate="2021-01-21"
  confirmText="confirm"
  cancelText="cancel"
  title="Date"
  @confirm="handleConfirm"
></yn-date-picker>
```