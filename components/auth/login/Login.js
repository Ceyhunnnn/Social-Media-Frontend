import Google from "@/components/icons/Google";
import Input from "@/components/input/Input";
import routes from "@/routes/routes";
import { api } from "@/service/api";
import { initialValuesLogin, validationLogin } from "@/utils/validations/auth";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = ({ setCurrentPage }) => {
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: validationLogin,
    onSubmit: (values) => login(values),
  });

  const login = async (values) => {
    const body = {
      email: values?.email,
      password: values?.password,
      redirect: false,
    };
    const { response, error } = await api({ url: "login", body, type: "post" });
    if (response?.success) {
      const { error } = await signIn("credentials", {
        redirect: false,
        ...{
          token: response?.token,
        },
      });
      if (!error) {
        router.push(routes.feed);
      }
    } else {
      if (error) {
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
      <form onSubmit={loginForm.handleSubmit}>
        <div className="flex flex-col mt-5 gap-y-3 text-gray-50 text-sm">
          <Input
            name="email"
            type="text"
            placeholder="Email"
            value={loginForm.values.email}
            onChange={loginForm.handleChange}
            onBlur={() => loginForm.setFieldTouched("email", true)}
          />
          {loginForm.errors.email && loginForm.touched.email && (
            <p className="text-xs text-red-500">{loginForm.errors.email}</p>
          )}
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            onBlur={() => loginForm.setFieldTouched("password", true)}
          />
          {loginForm.errors.password && loginForm.touched.password && (
            <p className="text-xs text-red-500">{loginForm.errors.password}</p>
          )}
          <button className="text-xs text-right">Forget Password?</button>
          <button
            className="bg-black-90 text-white text-sm rounded-normal py-2"
            onClick={loginForm.handleSubmit}
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
      </form>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}

export default Login;
