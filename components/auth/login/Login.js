import Google from "@/components/icons/Google";
import Input from "@/components/input/Input";
import routes from "@/routes/routes";
import { api } from "@/service/api";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = ({ setCurrentPage }) => {
  const router = useRouter();
  const login = async () => {
    const body = {
      email: "test@gmail.com",
      password: "test123",
      redirect: false,
    };
    const { response } = await api({ url: "login", body, type: "post" });
    if (response.success) {
      const { error } = await signIn("credentials", {
        redirect: false,
        ...{
          token: response?.token,
        },
      });
      if (!error) {
        router.push(routes.feed);
      }
    }
  };
  return (
    <div className="w-full flex flex-col gap-y-5">
      <button className="flex items-center justify-center gap-x-2 border border-gray-30 py-2 rounded-normal">
        <Google />
        <p className="text-gray-50 text-sm">Sign up with Google</p>
      </button>
      <div className="flex gap-x-5 items-center">
        <hr className="w-full" />
        <p className="text-gray-50 text-sm">or</p>
        <hr className="w-full" />
      </div>
      <div className="flex flex-col mt-5 gap-y-5 text-gray-50 text-sm">
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <button className="text-xs text-right">Forget Password?</button>
        <button
          className="bg-black-90 text-white text-sm rounded-normal py-2"
          onClick={() => {
            // router.push(routes.feed);
            login();
          }}
        >
          Log in
        </button>
        <div className="text-center mt-4">
          Don't have an account?{" "}
          <button
            className="text-black-80"
            onClick={() => setCurrentPage("register")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}

export default Login;
