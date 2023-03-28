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

      </Typography>
      <Box sx={{ mt: "3rem" }}>
        <Typography variant="h5" sx={{ textDecoration: "underline" }}>
          Leadership and Authority.
        </Typography>
      </Box>

      </Box>
    </Box>
  );
};

export default Content;
