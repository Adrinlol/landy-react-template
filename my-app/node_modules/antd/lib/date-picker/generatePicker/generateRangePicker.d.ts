import { GenerateConfig } from 'rc-picker/lib/generate/index';
import { RangePickerProps } from '.';
import { PickerComponentClass } from './interface';
export default function generateRangePicker<DateType>(generateConfig: GenerateConfig<DateType>): PickerComponentClass<RangePickerProps<DateType>>;
