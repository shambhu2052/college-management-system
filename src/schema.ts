import z from "zod";

export const schemaSignup = z
  .object({
    name: z.string().min(1, "Please enter the name"),
    email: z
      .string()
      .min(1, "Please enter the email")
      .email("Invalid email")
      .trim(),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*@).{8,}$/, "Invalid password"),
    confirm_password: z
      .string()
      .regex(/^(?=.*[A-Z])(?=.*@).{8,}$/, "Invalid password"),
    address: z
      .string()
      .nonempty("Please enter the address")
      .min(1, "Please enter the address"),
    gender: z
      .string()
      .nonempty("Please select the gender")
      .min(1, "Please select the gender"),
    phone: z.coerce
      .number()
      .refine((val) => val?.toString().length == 10, {
        message: "Mobile number most be exactly 10 digits",
      })
      .refine(
        (val) => {
          const str = val?.toString();
          return str.startsWith("98") || str.startsWith("97"); // ✅ return boolean
        },
        {
          message: "Mobile number must start with 98 or 97",
        }
      ),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Please enter the email"),
  password: z.string().regex(/^(?=.*[A-Z])(?=.*@).{8,}$/, "Invalid password"),
});
