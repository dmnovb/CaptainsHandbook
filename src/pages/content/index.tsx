import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { classes } from "@/data";

const Content = () => {
  const router = useRouter();

  const goToClasses = () => {
    router.push("/classes");
  };
  const goToWeapons = () => {
    router.push("/weapons");
  };
  return (
    <CssBaseline>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "background.default",
        }}
      >
        <Typography variant="h3">Captain&#39;s Handbook</Typography>
        <Typography variant="h6" sx={{ fontStyle: "italic" }}>
          to my beloved son
        </Typography>
        <Box sx={{ color: "white", marginTop: "3rem" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <Button onClick={goToClasses}>Classes</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={goToWeapons}>Weapons</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>Monsters</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>Ores</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Content;
