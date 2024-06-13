import Upload from "@/components/icons/Upload";
import Input from "@/components/input/Input";

const General = () => {
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
      <Input placeholder="First Name" />
      <Input placeholder="Last name" />
      <Input placeholder="Title" />
      <Input placeholder="E-Mail" />
      <button className="bg-black-90 text-white text-sm flex justify-center items-center p-3 rounded-normal">
        Save Changes
      </button>
    </div>
  );
};

export default General;
