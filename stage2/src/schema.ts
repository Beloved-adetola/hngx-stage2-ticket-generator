import { z } from "zod";

export const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  avatar: z.string().refine((value) => value.startsWith("data:image"), {
    message: "Please upload a valid image file.",
  }),
});

export type FormData = z.infer<typeof schema>;


// dqu6ag1sc
// zXkiBMJW7903n-dclWcCUWxZE2A
// 315168752838511