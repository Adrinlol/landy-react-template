import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  DialogContent,
  Dialog,
  DialogTitle,
  DialogActions,
  Container,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { Call, CallData } from "../../interfaces/callData";

interface Props {
  data: CallData;
}

function camelCaseToTitle(str: string) {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase());
}

const CallDataTable: React.FC<Props> = ({ data }) => {
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = (call: Call) => {
    setSelectedCall(call);
  };

  const handleClose = () => {
    setSelectedCall(null);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
        Call Summary
      </Typography>

      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography>
          <strong>Total Estimated Cost:</strong> ${data.totalEstimatedCost}
        </Typography>
        <Typography>
          <strong>Total Call Time:</strong>{" "}
          {data.totalCallTimeInHours} hours {data.totalCallTimeInMinutes} mins{" "}
          {data.totalCallTimeInSeconds} seconds
        </Typography>
        <Typography>
          <strong>Total Unique Participants:</strong> {data.totalUniqueParticipants}
        </Typography>
      </Paper>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Call Details
      </Typography>

      {/* Make the table horizontally scrollable on mobile */}
      <Box sx={{ overflowX: "auto" }}>
        <Table size="small" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Call ID</TableCell>
              <TableCell>Participants</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="right">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.calls.map((call) => (
              <TableRow key={call.id}>
                <TableCell>{call.id}</TableCell>
                <TableCell>{call.numberOfParticipants}</TableCell>
                <TableCell>${call.estimatedCost.toFixed(2)}</TableCell>
                <TableCell>
                  {call.callDurationHours}h {call.callDurationMinutes}m{" "}
                  {call.callDurationSeconds}s
                </TableCell>
                <TableCell>{camelCaseToTitle(call.callType)}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpen(call)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {selectedCall && (
        <Dialog open onClose={handleClose} fullWidth maxWidth="lg">
          <DialogTitle>Participants for Call ID: {selectedCall.id}</DialogTitle>
          <DialogContent dividers>
            <Box sx={{ overflowX: "auto" }}>
              <Table size="small" sx={{ minWidth: 600 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Job Title</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Time on Call</TableCell>
                    <TableCell>Breakdown</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedCall.participants.map((userBreakdown) => (
                    <TableRow key={userBreakdown.user.id}>
                      <TableCell>{userBreakdown.user.displayName}</TableCell>
                      <TableCell>{userBreakdown.user.jobTitle}</TableCell>
                      <TableCell>{userBreakdown.user.mail}</TableCell>
                      <TableCell>
                        {userBreakdown.user.wholeHours}h{" "}
                        {userBreakdown.user.wholeMinutes}m{" "}
                        {userBreakdown.user.wholeSeconds}s
                      </TableCell>
                      <TableCell>${userBreakdown.cost.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default CallDataTable;
