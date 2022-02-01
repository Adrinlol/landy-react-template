import _extends from "@babel/runtime/helpers/esm/extends";
import CalendarLocale from "rc-picker/es/locale/hi_IN";
import TimePickerLocale from '../../time-picker/locale/hi_IN'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'तारीख़ चुनें',
    yearPlaceholder: 'वर्ष चुनें',
    quarterPlaceholder: 'तिमाही चुनें',
    monthPlaceholder: 'महीना चुनिए',
    weekPlaceholder: 'सप्ताह चुनें',
    rangePlaceholder: ['प्रारंभ तिथि', 'समाप्ति तिथि'],
    rangeYearPlaceholder: ['आरंभिक वर्ष', 'अंत वर्ष'],
    rangeMonthPlaceholder: ['आरंभिक महीना', 'अंत महीना'],
    rangeWeekPlaceholder: ['आरंभिक सप्ताह', 'अंत सप्ताह']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;