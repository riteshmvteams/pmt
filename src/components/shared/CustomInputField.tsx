import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type Props = {
  form: any;
  name: string;
  type: "password" | "text" | "checkbox";
  label: string;
  placeholder?: string;
  labelClassName?: string;
  className?: string;
};

export default function CustomInputField({
  form,
  name,
  type,
  label,
  placeholder,
  labelClassName,
  className,
}: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) =>
        type === "checkbox" ? (
          <CheckBoxInput field={field} label={label} />
        ) : (
          <FormItem className={className}>
            <FormLabel className={cn("font-lexend", labelClassName)}>
              {label}
            </FormLabel>
            <FormControl>
              {type === "password" ? (
                <PasswordInput field={field} />
              ) : (
                <Input placeholder={placeholder} type={type} {...field} />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }
    />
  );
}

const PasswordInput = ({ field }: { field: any }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        placeholder="Enter your password"
        type={show ? "text" : "password"}
        {...field}
      />

      <button
        onClick={() => setShow((prev) => !prev)}
        type="button"
        className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-muted p-2 rounded-md duration-300"
      >
        {show ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </button>
    </div>
  );
};

const CheckBoxInput = ({ field, label }: { field: any; label: string }) => {
  return (
    <FormItem>
      <div className="flex gap-1.5 items-center">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </FormLabel>
      </div>
      <FormMessage />
    </FormItem>
  );
};
