import { GenerateConfig } from 'rc-picker/lib/generate/index';
import { PickerProps, PickerDateProps, PickerTimeProps } from '.';
import { PickerComponentClass } from './interface';
export default function generatePicker<DateType>(generateConfig: GenerateConfig<DateType>): {
    DatePicker: PickerComponentClass<PickerProps<DateType>, unknown>;
    WeekPicker: PickerComponentClass<Omit<PickerDateProps<DateType>, "picker">, unknown>;
    MonthPicker: PickerComponentClass<Omit<PickerDateProps<DateType>, "picker">, unknown>;
    YearPicker: PickerComponentClass<Omit<PickerDateProps<DateType>, "picker">, unknown>;
    TimePicker: PickerComponentClass<Omit<PickerTimeProps<DateType>, "picker">, unknown>;
    QuarterPicker: PickerComponentClass<Omit<PickerTimeProps<DateType>, "picker">, unknown>;
};
