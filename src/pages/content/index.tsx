import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { classes } from "@/types";

type Personnel = {
  title: string;
  responsibility: string;
};

const Content = () => {
  const [workers, setWorkers] = useState<Personnel[]>([]);

  useEffect(() => {
    setWorkers(classes);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: palette.main.secondary,
      }}
    >
      <Typography variant="h3">Captain&#39;s Handbook</Typography>
      <Typography variant="h6" sx={{ fontStyle: "italic" }}>
        to my beloved son
      </Typography>
      <Box sx={{ mt: "3rem" }}>
        <Typography variant="h5" sx={{ textDecoration: "underline" }}>
          Leadership and Authority.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", padding: "4rem" }}>
        {workers.map((person: Personnel, i: number) => (
          <Box sx={{ marginTop: "2rem", padding: "2rem" }} key={i}>
            <Typography variant="h4">{person.title}</Typography>
            <Typography variant="h6">{person.responsibility}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Content;
