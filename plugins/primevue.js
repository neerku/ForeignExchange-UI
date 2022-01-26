import Vue from 'vue'

import ConfirmationService from 'primevue/confirmationservice'

import AutoComplete from 'primevue/autocomplete'
import Calendar from 'primevue/calendar'
import Checkbox from 'primevue/checkbox'
import Listbox from 'primevue/listbox'
import ConfirmDialog from 'primevue/confirmdialog'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'

import InputMask from 'primevue/inputmask'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import MultiSelect from 'primevue/multiselect'
import PrimeVue from 'primevue/config'
import OverlayPanel from 'primevue/overlaypanel'
import ProgressSpinner from 'primevue/progressspinner'
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import Password from 'primevue/password'
import Menu from 'primevue/menu'
import SelectButton from 'primevue/selectbutton'
import VueSignaturePad from 'vue-signature-pad';


Vue.use(PrimeVue)
Vue.use(ToastService)
Vue.use(ConfirmationService)
Vue.use(VueSignaturePad);
Vue.use(ConfirmationService)

Vue.directive('tooltip', Tooltip)

Vue.component('AutoComplete', AutoComplete)
Vue.component('Calendar', Calendar)
Vue.component('Checkbox', Checkbox)
Vue.component('ConfirmDialog', ConfirmDialog)
Vue.component('DialogBox', Dialog)
Vue.component('Listbox', Listbox)
Vue.component('Dropdown', Dropdown)
Vue.component('InputSwitch', InputSwitch)
Vue.component('InputNumber', InputNumber)
Vue.component('InputText', InputText)
Vue.component('InputMask', InputMask)
Vue.component('InputTextarea', Textarea)
Vue.component('MultiSelect', MultiSelect)
Vue.component('OverlayPanel', OverlayPanel)
Vue.component('ProgressSpinner', ProgressSpinner)
Vue.component('RadioButton', RadioButton)
Vue.component('SelectButton', SelectButton)
Vue.component('Toast', Toast)
Vue.component('Password', Password)
Vue.component('MenuOverlay', Menu)
