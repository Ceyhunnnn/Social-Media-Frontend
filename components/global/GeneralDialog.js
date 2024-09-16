import React from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { setDialogValue } from "@/store/globalActions";
import { CloseIcon } from "../icons/CloseIcon";

const GeneralDialog = ({
  children,
  openKey,
  title,
  size,
  customFunc,
  isCloseIcon = true,
}) => {
  const dialog = useSelector((state) => state.dialog.value);

  const handleClose = () => {
    setDialogValue(null);
    if (customFunc) {
      customFunc();
    }
  };

  return (
    <Dialog
      open={dialog === openKey}
      handler={handleClose}
      className="outline-none rounded-xl"
      size={size || "sm"}
    >
      {(title || isCloseIcon) && (
        <DialogHeader
          className={`flex ${title ? "justify-between" : " justify-end"}`}
        >
          {title && (
            <p className="text-text-primary-light font-normal text-[22px]">
              {title}
            </p>
          )}
          {isCloseIcon && (
            <span onClick={handleClose} className="cursor-pointer">
              <CloseIcon
                className="text-black dark:text-white"
                color="#CCCCCC"
              />
            </span>
          )}
        </DialogHeader>
      )}

      <DialogBody className="p-4 m-0 max-h-[450px] sm:max-h-[500px]">
        {children}
      </DialogBody>
    </Dialog>
  );
};

export default GeneralDialog;
