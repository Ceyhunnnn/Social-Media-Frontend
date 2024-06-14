import Upload from "@/components/icons/Upload";
import Input from "@/components/input/Input";
import { api } from "@/service/api";
import { getUserDataFromDb } from "@/store/globalActions";
import { validationAccount } from "@/utils/validations/auth";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const General = () => {
  const { user } = useSelector((state) => state.globalState);
  const profileForm = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      title: user?.title,
      email: user?.email,
    },
    validationSchema: validationAccount,
    onSubmit: (values) => saveUserData(values),
  });
  const saveUserData = async (values) => {
    const { response, error } = await api({
      url: `/userProfileUpdate/${user?._id}`,
      type: "post",
      body: values,
    });
    if (!error) {
      toast.success(response?.message);
      await getUserDataFromDb();
    } else {
      toast.error(error);
    }
  };
  return (
    <div className="flex px-20 flex-col gap-y-5 w-full bg-white ">
      <div>
        <label
          className="flex justify-center items-center gap-x-2 border border-dashed border-gray-50 rounded-normal px-4 py-2"
          htmlFor="image"
        >
          <Upload />
          <p className="text-sm text-black-60">Choose an image for avatar</p>
        </label>
        <input type="file" className="hidden" id="image" />
      </div>
      <form
        className="flex flex-col gap-y-3"
        onSubmit={profileForm.handleSubmit}
      >
        <Input
          placeholder="First Name"
          name="firstName"
          type="text"
          value={profileForm.values.firstName}
          onChange={profileForm.handleChange}
          onBlur={() => profileForm.setFieldTouched("firstName", true)}
        />
        {profileForm.errors.firstName && profileForm.touched.firstName && (
          <p className="text-xs text-red-500">{profileForm.errors.firstName}</p>
        )}
        <Input
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={profileForm.values.lastName}
          onChange={profileForm.handleChange}
          onBlur={() => profileForm.setFieldTouched("lastName", true)}
        />
        {profileForm.errors.lastName && profileForm.touched.lastName && (
          <p className="text-xs text-red-500">{profileForm.errors.lastName}</p>
        )}
        <Input
          placeholder="Title"
          name="title"
          type="text"
          value={profileForm.values.title}
          onChange={profileForm.handleChange}
          onBlur={() => profileForm.setFieldTouched("title", true)}
        />
        {profileForm.errors.title && profileForm.touched.title && (
          <p className="text-xs text-red-500">{profileForm.errors.title}</p>
        )}

        <button
          type="submit"
          onClick={profileForm.handleSubmit}
          className="bg-black-90 text-white text-sm flex justify-center items-center p-3 rounded-normal"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default General;
