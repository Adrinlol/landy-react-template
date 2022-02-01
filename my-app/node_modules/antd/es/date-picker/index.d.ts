import { Moment } from 'moment';
import { PickerProps, PickerDateProps, RangePickerProps as BaseRangePickerProps } from './generatePicker';
export declare type DatePickerProps = PickerProps<Moment>;
export declare type MonthPickerProps = Omit<PickerDateProps<Moment>, 'picker'>;
export declare type WeekPickerProps = Omit<PickerDateProps<Moment>, 'picker'>;
export declare type RangePickerProps = BaseRangePickerProps<Moment>;
declare const DatePicker: import("./generatePicker/interface").PickerComponentClass<PickerProps<Moment>, unknown> & {
    WeekPicker: import("./generatePicker/interface").PickerComponentClass<Omit<PickerDateProps<Moment>, "picker">, unknown>;
    MonthPicker: import("./generatePicker/interface").PickerComponentClass<Omit<PickerDateProps<Moment>, "picker">, unknown>;
    YearPicker: import("./generatePicker/interface").PickerComponentClass<Omit<PickerDateProps<Moment>, "picker">, unknown>;
    RangePicker: import("./generatePicker/interface").PickerComponentClass<BaseRangePickerProps<Moment>, unknown>;
    TimePicker: import("./generatePicker/interface").PickerComponentClass<Omit<import("./generatePicker").PickerTimeProps<Moment>, "picker">, unknown>;
    QuarterPicker: import("./generatePicker/interface").PickerComponentClass<Omit<import("./generatePicker").PickerTimeProps<Moment>, "picker">, unknown>;
};
export default DatePicker;
