import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap";

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
const app = createApp(App);
Object.keys(AllRules).forEach((rule) => {
  if (typeof AllRules[rule] === 'function') {
    defineRule(rule, AllRules[rule])
  }
})
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW') // 預設為中文語系
app.component('FormForm', Form)
app.component('FieldField', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(router);

app.mount("#app");
