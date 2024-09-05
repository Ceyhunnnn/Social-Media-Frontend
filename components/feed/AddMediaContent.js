import { Button } from "@material-tailwind/react";
import UploadImage from "../icons/UploadImage";

const AddMediaContent = () => {
  return (
    <>
      <label
        htmlFor="file"
        // onDrop={(e) => {
        //   e.preventDefault();
        //   const result = checkPhotoSize(e.dataTransfer.files[0]);
        //   if (result) {
        //     photoUpload(
        //       e.dataTransfer.files[0],
        //       createImage(e.dataTransfer.files[0])
        //     );
        //     e.target.value = "";
        //   }
        // }}
        // onDragOver={(event) => event.preventDefault()}
      >
        <div className="border-2 border-dashed rounded-xl p-10 border-[#B1BFD0] flex flex-col justify-center items-center cursor-pointer">
          <UploadImage />
          <h2 className="text-sm text-[#132A00]">
            Drop your image here, or browse
          </h2>
          <h6 className="text-[#969DB2] text-xs">
            Supports: PNG, JPG, JPEG, WEBP
          </h6>
        </div>
      </label>
      <input
        // onChange={(e) => {
        //   const result = checkPhotoSize(e.target.files[0]);
        //   if (result) {
        //     photoUpload(e.target.files[0], createImage(e.target.files[0]));
        //     e.target.value = "";
        //   }
        // }}
        type="file"
        name="file"
        id="file"
        className="hidden"
      />
      <div className="flex justify-center items-center mt-4">
        <Button className="bg-[#93B8FF] text-white">Save</Button>
      </div>
    </>
  );
};

export default AddMediaContent;
