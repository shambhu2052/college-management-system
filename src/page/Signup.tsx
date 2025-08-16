import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaSignup } from "../schema";
import AppInput from "../components/form/AppInput";
import AppPassword from "../components/form/AppPassword";
import AppSelect from "../components/form/AppSelect";
import { Button } from "antd";
import type z from "zod";
import { genderList } from "../constant";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/post";
import { useToastMessage } from "../context/ToastMessage";
type FormType = z.infer<typeof schemaSignup>;
export default function Signup() {
  const { messageApi } = useToastMessage();
  const { isPending, mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => messageApi.success("User Registration Successfull"),
    onError: () => messageApi.error("Something wrong"),
  });
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schemaSignup),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      address: "",
      phone: undefined,
      gender: "",
    },
  });
  const onSubmit = (data: FormType) => {
    mutate(data);
  };
  return (
    <div className="flex min-h-screen">
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://png.pngtree.com/png-vector/20220526/ourmid/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image_4740863.png',
        }}
      ></div>
      <div className="bg-white p-8">
        <div className="flex-1 flex justify-center items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl space-y-6 shadow-3xl w-full grid grid-cols-2 gap-2 p-8"
            id="create-user"
          >
            <div className="col-span-2">
              <h2 className="text-3xl font-bold text-center">Signup</h2>
            </div>
            <AppInput
              control={control}
              name="name"
              label="Full Name"
              placeholder="Enter fullname"
            />
            <AppInput
              control={control}
              name="email"
              label="Email"
              placeholder="Enter email"
            />
            <AppPassword
              control={control}
              name="password"
              label="Password"
              placeholder="Enter password"
            />
            <AppPassword
              control={control}
              name="confirm_password"
              label="Confirm Password"
              placeholder="Enter Confirm Password"
            />
            <AppInput
              control={control}
              name="address"
              label="Address"
              placeholder="Enter address"
            />
            <AppInput
              control={control}
              name="phone"
              type="number"
              label="Mobile Number"
              placeholder="Enter mobile number"
            />
            <AppSelect
              control={control}
              name="gender"
              label="Select gender"
              options={genderList}
              placeholder="Select gender"
            />
          </form>
        </div>
        <Button
          className="w-full"
          type="primary"
          htmlType="submit"
          form="create-user"
          loading={isPending}
        >
          SignUp
        </Button>
      </div>
    </div>
  );
}
