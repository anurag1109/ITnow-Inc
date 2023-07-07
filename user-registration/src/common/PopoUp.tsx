import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

export interface PopProps {
  readonly desc: string;
  readonly onClose?: () => void;
}

// popups

const PopUp: React.FC<PopProps> = ({ desc, onClose }) => {
  return (
    <div>
      <Dialog
        open={!!desc}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          {/* popup description */}
          <DialogContentText id="alert-dialog-slide-description">
            {desc}
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
