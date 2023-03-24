import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { DeviceInfo } from 'gree-lib';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export interface MainListProps {
    scannedDevices: DeviceInfo[] | undefined; 
}

export const MainList = ({scannedDevices}: MainListProps) => {
    return(
        <Box padding={5} sx={{ flexGrow: 1 }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                <Typography>Scanned devices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {
                            scannedDevices?.map(deviceInfo => {
                                return (
                                    <div key={deviceInfo.mac}>
                                        {deviceInfo.name} : {deviceInfo.address} : {deviceInfo.mac}
                                    </div>
                                    
                                );
                            })
                        }                        
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                <Typography>Bound devices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ...
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}