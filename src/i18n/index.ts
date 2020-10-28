import { createApp } from "vue"
import i18n from "vue-i18n"
import Formatter from "./formatter"
import AppI18N from "./i18n"

createApp(AppI18N).use(i18n)

const locale = "en-US"
const formatter = new Formatter({ locale })
