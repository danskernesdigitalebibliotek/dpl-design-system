import { useRef, useState } from "react";

type UseDialogType = {
  onClose?: () => void;
};

const useDialog = ({ onClose }: UseDialogType = {}) => {
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    if (onClose) {
      onClose();
    }
    dialogRef.current.close();
  };

  const openDialogWithContent = (content: React.ReactNode) => {
    setDialogContent(content);
    dialogRef.current?.showModal();
  };

  return {
    dialogContent,
    dialogRef,
    openDialogWithContent,
    closeDialog,
  };
};

export default useDialog;
