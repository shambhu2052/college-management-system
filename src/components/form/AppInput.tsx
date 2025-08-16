import { Input } from "antd";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface AppInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder: string;
  type?: string;
}
export default function AppInput<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = "text",
  ...rest
}: AppInputProps<T>) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-normal text-gray-600">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className="flex flex-col gap-1">
            <Input
              onChange={onChange}
              type={type}
              value={value}
              status={error && "error"}
              placeholder={placeholder}
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
