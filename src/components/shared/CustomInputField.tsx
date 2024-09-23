import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";

const allOptions = [
  {
    value: "india",
    label: "India",
  },
  {
    value: "usa",
    label: "USA",
  },
  {
    value: "england",
    label: "England",
  },
  {
    value: "nepal",
    label: "Nepal",
  },
  {
    value: "china",
    label: "China",
  },
];

type Props = {
  form: any;
  name: string;
  type: "password" | "text" | "checkbox" | "textarea" | "select" | "toggle";
  label: string;
  placeholder?: string;
  labelClassName?: string;
  className?: string;
  selectOptions?: {
    label: string;
    value: string;
  }[];
};

export default function CustomInputField({
  form,
  name,
  type,
  label,
  placeholder,
  labelClassName,
  className,
  selectOptions,
}: Props) {
  switch (type) {
    case "textarea":
      return (
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={placeholder}
                  className="resize-none min-h-36"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "text":
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <SimpleInput
              field={field}
              placeholder={placeholder}
              type={type}
              label={label}
              className={className}
              labelClassName={labelClassName}
            />
          )}
        />
      );
    case "password":
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <PasswordInput
              field={field}
              label={label}
              className={className}
              labelClassName={labelClassName}
            />
          )}
        />
      );
    case "checkbox":
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-1.5 items-center">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {label}
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "select":
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className={className}>
              <FormLabel className={labelClassName}>{label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {selectOptions?.length
                    ? selectOptions?.map((option) => {
                        return (
                          <SelectItem
                            key={option?.value}
                            value={option?.value}
                            className="ml-0"
                          >
                            {option?.label}
                          </SelectItem>
                        );
                      })
                    : allOptions?.map((option) => {
                        return (
                          <SelectItem key={option?.value} value={option?.value}>
                            {option?.label}
                          </SelectItem>
                        );
                      })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "toggle":
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <div className="space-y-0.5">
                <FormLabel>{label}</FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      );
    default:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <SimpleInput
              field={field}
              placeholder={placeholder}
              type={type === "toggle" ? "text" : type}
              label={label}
              className={className}
              labelClassName={labelClassName}
            />
          )}
        />
      );
  }
}

const SimpleInput = ({
  field,
  placeholder,
  type = "text",
  label,
  className,
  labelClassName,
}: {
  field: any;
  placeholder?: string;
  type: "text";
  label: string;
  className?: string;
  labelClassName?: string;
}) => {
  const { error } = useFormField();
  return (
    <FormItem className={className}>
      <FormLabel className={cn("font-lexend", labelClassName)}>
        {label}
      </FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          type={type}
          {...field}
          className={error ? "focus-visible:ring-destructive" : ""}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

const PasswordInput = ({
  field,
  label,
  className,
  labelClassName,
}: {
  field: any;
  label: string;
  className?: string;
  labelClassName?: string;
}) => {
  const [show, setShow] = useState(false);
  const { error } = useFormField();

  return (
    <FormItem className={className}>
      <FormLabel className={cn("font-lexend", labelClassName)}>
        {label}
      </FormLabel>
      <FormControl>
        <div className="relative">
          <Input
            placeholder="Enter your password"
            type={show ? "text" : "password"}
            {...field}
            className={error ? "focus-visible:ring-destructive" : ""}
          />

          <button
            onClick={() => setShow((prev) => !prev)}
            type="button"
            className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-muted p-2 rounded-md duration-300"
          >
            {show ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </button>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
