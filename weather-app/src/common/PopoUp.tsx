import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

//Popup Interface
export interface PopProps {
  readonly error: string;
  readonly onClose?: () => void;
}

//Popup on error
const PopUp: React.FC<PopProps> = ({ error, onClose }) => {
  return (
    <div>
      <Dialog
        open={!!error}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          {/* error description */}
          <DialogContentText id="alert-dialog-slide-description">
            {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PopUp;
