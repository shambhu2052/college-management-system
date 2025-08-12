import { Select } from "antd";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface AppSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder: string;
  options: { value: unknown; label: unknown }[];
}
export default function AppSelect<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  options,
  ...rest
}: AppSelectProps<T>) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-normal text-gray-600">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className="flex flex-col gap-1">
            <Select
              onChange={onChange}
              value={value}
              status={error && "error"}
              placeholder={placeholder}
              options={options}
              {...rest}
            />
            {error && (
              <p className="text-sm font-normal text-red-500">
                {error?.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
}
