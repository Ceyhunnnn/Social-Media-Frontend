import Google from "@/components/icons/Google";
import Input from "@/components/input/Input";

const Register = ({ setCurrentPage }) => {
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
      <div className="flex flex-col mt-5 gap-y-5 text-gray-50 text-sm">
        <Input type="text" className="input" placeholder="Name" />
        <Input type="text" className="input" placeholder="Username" />
        <Input type="text" className="input" placeholder="Email" />
        <Input type="password" className="input" placeholder="Password" />
        <button className="text-xs">
          I agree to the Terms and Privacy Policy.
        </button>
        <button className="bg-black-90 text-white text-sm rounded-normal py-2">
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
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}

export default Register;
