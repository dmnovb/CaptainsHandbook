import { useRouter } from "next/router";
import Box  from "@mui/system/Box"
import Button from '@mui/material/Button'
import CssBaseline  from "@mui/material/CssBaseline";
import Typography  from "@mui/material/Typography";
import { classes } from "@/data";
import type { Personnel } from "@/types";

const BarotraumaClasses = () => {
    const router = useRouter();

    const goTo = (title:string) => {
        router.push(`classes/${title}`)
    }

    return (
        <CssBaseline>
            <Box sx={{background: "background.default"}}>
                <Typography variant="h2" color='white' textAlign="center">Classes and their duties</Typography>
                {classes.map((workers:Personnel) => (
                    <Box sx={{color: 'white', textAlign: 'center', margin: '2rem'}}>
                        <Button onClick={() => goTo(workers.title)} >{workers.title}</Button>
                        {/* <Typography>{workers.duties}</Typography> */}
                    </Box>
                ))}
            </Box>
        </CssBaseline>
    )
}

export default BarotraumaClasses;