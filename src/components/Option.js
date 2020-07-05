import React from 'react';
import './Options.css';
import { Button, Box } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

function Option({ text, caption, onClick, selected }) {
  return (
    <Box display="flex" flexDirection="column">
      <Button
        onClick={onClick}
        className="Option"
        variant="outlined"
        style={{ borderColor: selected ? "#86C9ED" : "" }}
      >
        {text}
      </Button>
      {caption && (
        <Typography
          variant="caption"
          style={{ fontSize: "8px", marginTop: "4px" }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
}

export default Option;
