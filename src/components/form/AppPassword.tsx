import { Input } from "antd";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface AppPasswordProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder: string;
}

export default function AppPassword<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  ...rest
}: AppPasswordProps<T>) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-normal text-gray-500">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className="flex flex-col gap-1">
            <Input.Password
              onChange={onChange}
              status={error && "error"}
              value={value}
              placeholder={placeholder}
              {...rest}
            />
            {error && (
              <p className="text-sm font-semibold text-red-500">
                {error?.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
}
