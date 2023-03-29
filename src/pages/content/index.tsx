import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import CssBaseline  from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { classes } from "@/data";


const Content = () => {
  const router = useRouter();
  
  const goToClasses = () => {
    router.push('/classes')
  }
  return (
    <CssBaseline>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: 'background.default'
      }}
    >
      <Typography variant="h3">Captain&#39;s Handbook</Typography>
      <Typography variant="h6" sx={{ fontStyle: "italic" }}>
        to my beloved son
      </Typography>
      <Box sx={{color: 'white', marginTop: "3rem"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Button>Weapons</Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={goToClasses}>Classes</Button>
        </Grid>
        <Grid item xs={3}>
          <Button>Monsters</Button>
        </Grid>
        <Grid item xs={3}>
          <Button>Ores</Button>
        </Grid>
      </Grid>
      </Box>
      {/* <Box sx={{ mt: "3rem" }}>
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
      </Box> */}
    </Box>
    </CssBaseline>
    
  );
};

export default Content;
