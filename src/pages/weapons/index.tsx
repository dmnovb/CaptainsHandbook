import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { weapons } from "@/data";

type Weapons = {
  turretWeapons: {
    coilGuns: {
      name: string;
      ammo: string[];
    };
    pulseLaser: {
      name: string;
      ammo: string[];
    };
    railGuns: {
      name: string;
      ammo: string[];
    };
    chainGuns: {
      name: string;
      notes: string;
      ammo: string[];
    };
    flak: {
      name: string;
      notes: string;
      ammo: string[];
    };
  };
};

const Weapons = () => {
  return (
    <CssBaseline>
      <Box color="white">
        {weapons.map((weapon: Weapons) => (
          <Box>
            <Typography>{weapon.turretWeapons.chainGuns.name}</Typography>
            <Typography>{weapon.turretWeapons.chainGuns.ammo}</Typography>
            <Typography>{weapon.turretWeapons.chainGuns.notes}</Typography>
          </Box>
        ))}
      </Box>
    </CssBaseline>
  );
};

export default Weapons;
