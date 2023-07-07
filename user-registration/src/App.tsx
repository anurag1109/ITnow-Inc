import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "./store/userSlice";
import { Button, TextField } from "@mui/material";
import RegistrationPopUp from "./common/RegistrationPopUp";
import UserList from "./components/UserList";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//Home page UI
const App: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const users = useSelector(selectUsers);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* company name section */}
      <Grid container justifyContent={"center"}>
        <Grid item>
          <Typography variant="h4" style={{ textDecoration: "underline" }}>
            ITnow Inc
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 3 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          {/* user list section */}
          <Grid item>
            <h1>User List</h1>
          </Grid>
          {/* search input */}
          <Grid item>
            <TextField
              value={search}
              placeholder="Search"
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                setSearch(e.target.value);
              }}
            />
          </Grid>
          {/* Register button */}
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(true)}
              // style={{ backgroundColor: "black" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* users list */}
      <UserList search={search} />

      {/* handelling popup */}
      <RegistrationPopUp isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default App;
