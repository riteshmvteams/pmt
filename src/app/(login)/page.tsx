import Logo from "@/components/shared/Logo";
import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen grid lg:grid-cols-2 place-content-center lg:place-content-stretch">
      <div className="flex items-center justify-center py-12 px-6 lg:px-0">
        <div className="mx-auto grid max-w-[500px] w-full gap-20">
          <div className="grid text-left">
            <Logo url="/" />
            <h1 className="text-xl md:text-3xl font-bold font-lexend">
              Welcome back! Please Log in to continue.
            </h1>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {/* <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
    </div>
  );
}
