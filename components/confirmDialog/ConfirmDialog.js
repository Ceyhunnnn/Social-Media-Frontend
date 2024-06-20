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
    <Dialog open={dialog === openKey} handler={handleOpen}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody className="font-semibold">{desc}</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button
          variant="text"
          color="green"
          onClick={() => {
            if (confirm) {
              confirm();
            }
            handleOpen();
          }}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default ConfirmDialog;
