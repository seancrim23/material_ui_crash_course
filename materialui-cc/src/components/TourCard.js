import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src="https://www.allrecipes.com/thmb/j_-FmcBzavNMi51DIsvX_8T6l-Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Easyspaghettiwithtomatosauce_11715_DDMFS_4x3_2424-8d7bf30b2622465f9dd78a2c6277eeb8.jpg"
                    alt="yummy spaghetti"
                    className='img' />
                <Box padding={1}>
                    <Typography component="h2" variant="subtitle1">
                        Eating a Spaghetti
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                        marginTop={2}>
                        <Rating name="read-only" value={2} readOnly size="small" />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            4.5
                        </Typography>
                        <Typography variant="body2" component="p" marginLeft={1.5}>
                            (500 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginTop={0}>
                            From C $123
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}

export default TourCard
