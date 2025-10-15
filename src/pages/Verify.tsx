import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useSendOtpMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dot } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  pin: z.string().min(6, {
    message: "Your OTP must be 6 characters",
  }),
});

const Verify = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [sendOtp]=useSendOtpMutation()
  const location = useLocation();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pin: "",
    },
  });
  console.log(location.state);
  const [email] = useState((location.state as string) || "");

  // useEffect(() => {
  //   if (!email) navigate("/");
  // }, [email]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  
  };


  const handleConfirm=async()=>{
 try {

 const res=await sendOtp({email}).unwrap()
if(res.success)  toast.success("OTP Sent")
  setConfirmed(true)

 } catch (error) {
  console.log(error)
 }
  }
  return (
    <div className="grid place-content-center h-screen">
      {confirmed ? (
        <Card>
          <CardHeader>
            <CardTitle>Verify your email address</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" space-y-6"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                          </InputOTPGroup>

                          <InputOTPGroup>
                            <InputOTPSlot index={1} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <Dot></Dot>
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={4} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Verify your email address</CardTitle>
            <CardDescription>
              We will send you an otp at {email}{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleConfirm} className="w-[300px]">Send</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Verify;
