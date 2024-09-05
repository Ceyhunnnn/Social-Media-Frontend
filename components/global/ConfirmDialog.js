import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { setDialogValue } from "@/store/globalActions";

const ConfirmDialog = ({ openKey, title, desc, confirm }) => {
  const dialog = useSelector((state) => state.dialog.value);
  const handleOpen = async () => {
    setDialogValue(null);
  };

  return (
    <Dialog
      open={dialog === openKey}
      handler={handleOpen}
      size="xs"
      className="rounded-2xl"
    >
      <DialogHeader className="font-semibold text-lg text-[#333333]  px-3 pt-3 pb-1">
        {title}
      </DialogHeader>
      <DialogBody className="font-normal py-0 px-3">{desc}</DialogBody>
      <DialogFooter className="flex items-cente gap-x-3">
        <button
          className="mr-1 text-[#888888] bg-transparent font-normal"
          onClick={handleOpen}
        >
          Cancel
        </button>
        <button
          className="bg-blue-90 text-white py-1 px-4  rounded-md flex justify-center items-center font-normal"
          onClick={() => {
            if (confirm) {
              confirm();
            }
            handleOpen();
          }}
        >
          Ok
        </button>
      </DialogFooter>
    </Dialog>
  );
};
export default ConfirmDialog;
