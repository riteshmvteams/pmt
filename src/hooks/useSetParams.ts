import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useSetParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setParams = (key: string, paramValue: any, multiple = false) => {
    const params = new URLSearchParams(searchParams);
    // Get the current value of the key
    const currentValue = params.get(key);

    if (!multiple) {
      if (paramValue === "delete") {
        params.delete(key);
      } else {
        params.set(key, paramValue);
      }
    } else {
      // If the current value is the same as the new value, remove the key
      if (currentValue?.includes(paramValue)) {
        const splitedCurrentValue = currentValue.split(",");

        const result = splitedCurrentValue
          ?.filter((item: any) => item !== paramValue)
          .join(",");

        if (result === "") {
          params.delete(key);
        } else {
          params.set(key, result);
        }
      } else {
        // If the key already exists but with a different value
        if (currentValue) {
          // Split the current value by comma and check if the new value is already present
          const values = currentValue.split(",");
          const index = values.indexOf(paramValue);
          if (index !== -1) {
            // If the value is already present, remove it
            values.splice(index, 1);
          }
          values.push(paramValue);
          // Join all values with comma separator
          paramValue = values.join(",");
        }
        params.set(key, paramValue);
      }
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const getParams = (key: string) => {
    return searchParams.get(key);
  };

  return { setParams, getParams };
};
