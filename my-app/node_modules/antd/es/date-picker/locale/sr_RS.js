import _extends from "@babel/runtime/helpers/esm/extends";
import CalendarLocale from "rc-picker/es/locale/sr_RS";
import TimePickerLocale from '../../time-picker/locale/sr_RS'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'Izaberi datum',
    yearPlaceholder: 'Izaberi godinu',
    quarterPlaceholder: 'Izaberi tromesečje',
    monthPlaceholder: 'Izaberi mesec',
    weekPlaceholder: 'Izaberi sedmicu',
    rangePlaceholder: ['Datum početka', 'Datum završetka'],
    rangeYearPlaceholder: ['Godina početka', 'Godina završetka'],
    rangeMonthPlaceholder: ['Mesec početka', 'Mesec završetka'],
    rangeWeekPlaceholder: ['Sedmica početka', 'Sedmica završetka']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;