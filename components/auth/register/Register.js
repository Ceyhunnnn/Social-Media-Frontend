import Google from "@/components/icons/Google";
import Input from "@/components/input/Input";
import { api } from "@/service/api";
import {
  initialValuesRegister,
  validationRegister,
} from "@/utils/validations/auth";
import { useFormik } from "formik";
import toast from "react-hot-toast";

const Register = ({ setCurrentPage }) => {
  const registerForm = useFormik({
    initialValues: initialValuesRegister,
    validationSchema: validationRegister,
    onSubmit: (values) => register(values),
  });

  const register = async (values) => {
    const { response, error } = await api({
      url: "register",
      body: values,
      type: "post",
    });
    if (error) {
      toast.error(error);
    } else {
      toast.success("Hesap Başarıyla oluşturulmuştur.");
      registerForm.resetForm();
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-5">
      <button className="flex items-center justify-center gap-x-2 border border-gray-30 py-2 rounded-normal">
        <Google />
        <p className="text-gray-50 text-sm">Log in with Google</p>
      </button>
      <div className="flex gap-x-5 items-center">
        <hr className="w-full" />
        <p className="text-gray-50 text-sm">or</p>
        <hr className="w-full" />
      </div>
      <form onSubmit={registerForm.handleSubmit}>
        <div className="flex flex-col mt-5 gap-y-2 text-gray-50 text-sm">
          <Input
            placeholder="First Name"
            name="firstName"
            type="text"
            value={registerForm.values.firstName}
            onChange={registerForm.handleChange}
            onBlur={() => registerForm.setFieldTouched("firstName", true)}
          />
          {registerForm.errors.firstName && registerForm.touched.firstName && (
            <p className="text-xs text-red-500">
              {registerForm.errors.firstName}
            </p>
          )}
          <Input
            placeholder="Last Name"
            name="lastName"
            type="text"
            value={registerForm.values.lastName}
            onChange={registerForm.handleChange}
            onBlur={() => registerForm.setFieldTouched("lastName", true)}
          />
          {registerForm.errors.lastName && registerForm.touched.lastName && (
            <p className="text-xs text-red-500">
              {registerForm.errors.lastName}
            </p>
          )}
          <Input
            placeholder="Title"
            name="title"
            type="text"
            value={registerForm.values.title}
            onChange={registerForm.handleChange}
            onBlur={() => registerForm.setFieldTouched("title", true)}
          />
          {registerForm.errors.title && registerForm.touched.title && (
            <p className="text-xs text-red-500">{registerForm.errors.title}</p>
          )}
          <Input
            name="email"
            type="text"
            placeholder="Email"
            value={registerForm.values.email}
            onChange={registerForm.handleChange}
            onBlur={() => registerForm.setFieldTouched("email", true)}
          />
          {registerForm.errors.email && registerForm.touched.email && (
            <p className="text-xs text-red-500">{registerForm.errors.email}</p>
          )}
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={registerForm.values.password}
            onChange={registerForm.handleChange}
            onBlur={() => registerForm.setFieldTouched("password", true)}
          />
          {registerForm.errors.password && registerForm.touched.password && (
            <p className="text-xs text-red-500">
              {registerForm.errors.password}
            </p>
          )}

          <button
            type="submit"
            className="bg-black-90 text-white text-sm rounded-normal py-2"
            onClick={registerForm.handleSubmit}
          >
            Register
          </button>

          <div className="text-center mt-4">
            Have an account?{" "}
            <button
              className="text-black-80"
              onClick={() => setCurrentPage("login")}
            >
              Log In
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

export default Register;
