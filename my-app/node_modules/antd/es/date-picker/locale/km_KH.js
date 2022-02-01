import _extends from "@babel/runtime/helpers/esm/extends";
import CalendarLocale from "rc-picker/es/locale/km_KH";
import TimePickerLocale from '../../time-picker/locale/km_KH'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'រើសថ្ងៃ',
    yearPlaceholder: 'រើសឆ្នាំ',
    quarterPlaceholder: 'រើសត្រីមាស',
    monthPlaceholder: 'រើសខែ',
    weekPlaceholder: 'រើសសប្តាហ៍',
    rangePlaceholder: ['ថ្ងៃចាប់ផ្ដើម', 'ថ្ងៃបញ្ចប់'],
    rangeYearPlaceholder: ['ឆ្នាំចាប់ផ្ដើម', 'ឆ្នាំបញ្ចប់'],
    rangeMonthPlaceholder: ['ខែចាប់ផ្ដើម', 'ខែបញ្ចប់'],
    rangeWeekPlaceholder: ['សប្ដាហ៍ចាប់ផ្ដើម', 'សប្ដាហ៍បញ្ចប់']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;