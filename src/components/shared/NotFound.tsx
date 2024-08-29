import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Hourglass } from "lucide-react";

// images and icons
import NotFoundImg from "@public/images/not-found.png";

export default function NotFound() {
  const { push } = useRouter();
  return (
    <div className="flex grow items-center px-6 xl:px-10">
      <div className="mx-auto text-center">
        <Image
          src={NotFoundImg}
          alt="not found"
          className="mx-auto mb-8 aspect-[360/326] max-w-[256px] xs:max-w-[370px] lg:mb-12 2xl:mb-16"
        />
        <h1 className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
          Sorry, the page not found
        </h1>
        <h2 className="mt-3 text-sm leading-loose text-gray-500 lg:mt-6 lg:text-base lg:leading-loose">
          We have been spending long hours in order to launch our new website.
          Join our
          <br className="hidden sm:inline-block" />
          mailing list or follow us on Facebook for get latest update.
        </h2>
        <Button
          color="primary"
          className="mt-8 h-12 px-4 xl:h-14 xl:px-6"
          onClick={() => push("/")}
        >
          <Hourglass className="mr-1.5 text-lg" />
          Back to home
        </Button>
      </div>
    </div>
  );
}
