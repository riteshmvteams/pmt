"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Props = {
  form: any;
  options?: { label: string; value: string }[];
  name: string;
  label?: string;
  className?: string;
};

export default function CustomRadio({
  form,
  options,
  name,
  label,
  className,
}: Props) {
  const selected = form.watch(name);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel className="font-lexend">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={cn(`grid grid-cols-3 gap-4`, className)}
            >
              {options?.map((option) => {
                return (
                  <FormItem
                    key={option.value}
                    className="flex items-center space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={option?.value} hidden />
                    </FormControl>
                    <FormLabel
                      className={cn(
                        "relative border w-full rounded-md h-12 flex items-center justify-center cursor-pointer hover:border-ring font-lexend text-muted-foreground focus-visible:border-ring",
                        selected === option?.value
                          ? "border-2 border-ring text-foreground"
                          : ""
                      )}
                    >
                      {selected === option?.value && (
                        <span className="absolute left-2 p-1 bg-primary rounded-full">
                          <Check
                            strokeWidth={2}
                            className="w-[14px] h-[14px] text-primary-foreground"
                          />
                        </span>
                      )}
                      <span>{option?.label}</span>
                    </FormLabel>
                  </FormItem>
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
