import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/shared/Logo";
import { HouseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="sticky top-0 z-40 flex justify-center py-5 backdrop-blur-lg lg:backdrop-blur-none xl:py-10">
        <Logo url="/" />
      </div>

      <div className="flex grow items-center px-6 xl:px-10">
        <div className="mx-auto text-center">
          <Image
            src="/images/not-found.png"
            width={1920}
            height={1080}
            alt="not found"
            className="mx-auto mb-8 aspect-[360/326] max-w-[256px] xs:max-w-[370px] lg:mb-12 2xl:mb-16"
          />
          <h1 className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
            Sorry, the page is not found
          </h1>
          <Link href={"/"}>
            <Button className="mt-8 h-12 px-4 xl:h-14 xl:px-6">
              <HouseIcon className="mr-2 text-lg" />
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
