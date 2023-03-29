import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box'
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

  }, [])
    return (
    <Box>
      <Typography>{person?.title}</Typography>
    </Box>
    )
}

export default Class;