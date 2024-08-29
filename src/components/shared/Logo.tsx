import Image from "next/image";
import Link from "next/link";

export default function Logo({ url }: { url: string }) {
  return (
    <Link href={url} className="w-28 h-14">
      <Image
        src="/images/companyLogo.png"
        alt="Image"
        width="1920"
        height="1080"
        className="h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
      />
    </Link>
  );
}
