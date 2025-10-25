import SingleImageUploader from "@/components/SingleImageUploader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddDivisionMutation } from "@/redux/features/division/division.api";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function AddTourModal() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  console.log("insideAddDivisional Modal", image);
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const [AddDivision] = useAddDivisionMutation();

  const onSubmit = async (data) => {
    console.log(data);
    // const formData = new FormData();

    // formData.append("data", JSON.stringify(data));
    // formData.append("file", image as File);
    // try {
    //   const res = await AddDivision(formData).unwrap();

    //   console.log(res);
    //   if (res.success) {
    //     toast.success("Division Created");
    //     setOpen(false);
    //   }
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // } catch (error:any) {
    //   console.log(error);
    //   toast.error(`Failed to create Division:${error.message}`);
    // }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Tour</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Tour</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4 grid md:grid-cols-2 gap-4"
            id="add-tour"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tour Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Tour title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tour Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Tour title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tour Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Tour title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write the description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SingleImageUploader onChange={setImage}></SingleImageUploader>
          </form>
        </Form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" form="add-division">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
