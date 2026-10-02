import GradientMenu from "@/components/ui/gradient-menu";
import { SmokeyBackground, LoginForm } from "@/components/ui/login-form";

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <GradientMenu />
    </div>
  );
};

const LoginDemo = () => {
  return (
    <main className="relative w-screen h-screen bg-gray-900">
      <SmokeyBackground className="absolute inset-0" />
      <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
        <LoginForm />
      </div>
    </main>
  );
};

export { DemoOne, LoginDemo };
export default DemoOne;
