import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import RegistrationForm from "../components/RegistrationForm";
import Typography from "@mui/material/Typography";

export interface RegistrationPopUpProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

// registration popup
const RegistrationPopUp: React.FC<RegistrationPopUpProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {/* registration popup heading */}
          <Typography align="center" variant="h4">
            {"Registration Form"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* registrationform component */}
            <RegistrationForm onClose={onClose} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default RegistrationPopUp;
