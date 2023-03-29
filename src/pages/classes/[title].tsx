import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box'
import CssBaseline  from '@mui/material/CssBaseline';
import Typography  from '@mui/material/Typography';
import { classes } from "@/data";
import type { Personnel } from '@/types';

const Class = () => {
  const [person, setPerson] = useState<Personnel>();
  const router = useRouter();
  const { title } = router.query

  useEffect(() => {
    if(!router.isReady) return;
    classes.map((singleClass) => {
      if(singleClass.title === title){
        setPerson(singleClass)
      }
    })

  })
    return (
      <CssBaseline>
        <Box sx={{textAlign: 'center', background: "background.default", color: 'white'}}>
          <Typography variant='h5'>{person?.title}</Typography>
          <Typography variant='h6'>{person?.duties}</Typography>
          <Typography sx={{marginTop: '3rem'}}>Recommended talents: </Typography>
          {person?.talents.map((talent) => (
            <Typography>{talent}</Typography>
          ))}
        </Box>
      </CssBaseline>
   
    )
}

export default Class;