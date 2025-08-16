import { useForm } from "react-hook-form";
import AppInput from "../components/form/AppInput";
import AppPassword from "../components/form/AppPassword";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/get";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema";
import type z from "zod";
import { useToastMessage } from "../context/ToastMessage";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
type FormType = z.infer<typeof loginSchema>;
export default function Login() {
  const { messageApi } = useToastMessage();
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();
  const { control, handleSubmit } = useForm<FormType>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });
  const { data: userList } = useQuery({ queryKey: ["user"], queryFn: getUser });
  const onSubmit = (data: FormType) => {
    const isValidPassword = userList?.find(
      (item: { password: string }) => item?.password == data?.password
    );
    if (isValidPassword) {
      messageApi.success("Login successfully");
      navigate("/app/dashboard");
      setIsAuth(true);
    }
  };
  return (
    <div className="flex min-h-screen ">
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80')",
        }}
      ></div>
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          <AppInput
            name="email"
            control={control}
            label="Email"
            placeholder="Enter Email"
          />
          <AppPassword
            name="password"
            control={control}
            label="Password"
            placeholder="Enter password"
          />
          <Button htmlType="submit" type="primary" size="large">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
