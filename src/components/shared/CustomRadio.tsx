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
import { CheckboxIcon } from "@radix-ui/react-icons";
import { Check, FileCheck } from "lucide-react";

type Props = {
  form: any;
};

const priorities = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export default function CustomRadio({ form }: Props) {
  const selected = form.watch("type");

  return (
    <FormField
      control={form.control}
      name="type"
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel className="font-lexend">Select Priority of Task</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-3 gap-4"
            >
              {priorities?.map((priority) => {
                return (
                  <FormItem
                    key={priority.value}
                    className="flex items-center space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={priority?.value} hidden />
                    </FormControl>
                    <FormLabel
                      className={cn(
                        "relative border w-full rounded-md h-12 flex items-center justify-center cursor-pointer hover:border-ring font-lexend text-muted-foreground focus-visible:border-ring",
                        selected === priority?.value
                          ? "border-2 border-ring text-foreground"
                          : ""
                      )}
                    >
                      {selected === priority?.value && (
                        <span className="absolute left-2 p-1 bg-primary rounded-full">
                          <Check
                            strokeWidth={2}
                            className="w-[14px] h-[14px] text-primary-foreground"
                          />
                        </span>
                      )}
                      <span>{priority?.label}</span>
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
