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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import z from "zod";

const formSchema=z.object({
  pin:z.string().min(6,{
    message:"Your OTP must be 6 characters"
  })
})

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const form =useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      pin:""
    }
  })
  console.log(location.state);
  const [email] = useState((location.state as string) || "");

  // useEffect(() => {
  //   if (!email) navigate("/");
  // }, [email]);


  const onSubmit=(data:z.infer<typeof formSchema>)=>{
console.log(data)
  }
  return (
   <div className="grid place-content-center h-screen"> <Card>
   <CardHeader>
     <CardTitle>Card Title</CardTitle>
     <CardDescription>Card Description</CardDescription>
     <CardAction>Card Action</CardAction>
   </CardHeader>
   <CardContent>
   <Form {...form}>
   <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
                 <InputOTPSlot index={1} />
                 <InputOTPSlot index={2} />
                 <InputOTPSlot index={3} />
                 <InputOTPSlot index={4} />
                 <InputOTPSlot index={5} />
               </InputOTPGroup>
             </InputOTP>
           </FormControl>
           <FormDescription>
             Please enter the one-time password sent to your phone.
           </FormDescription>
           <FormMessage />
         </FormItem>
       )}
     />
     <Button className="" type="submit">Submit</Button>
   </form>
 </Form>
   </CardContent>
  
 </Card></div>
  );
};

export default Verify;
