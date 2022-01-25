import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";


<Box 
          style={{ backgroundColor: "black", minHeight: '60vh' }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            p: 2,
            m: 1,
          }}
        >
          <Grid 
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
              <Grid item xs={12} md={4}>

              </Grid>
              <Grid justifyContent='center' item xs={12} md={3}>
                  <h1>Projects go here</h1>
              </Grid>
              <Grid justifyContent='center' item xs={12} md={3}>
                  <h1>Projects go here</h1>
              </Grid>
              <Grid justifyContent='center' item xs={12} md={3}>
                  <h1>Projects go here</h1>
              </Grid>
              <Grid justifyContent='center' item xs={12} md={3}>
                  <h1>Projects go here</h1>
              </Grid>
              <Grid justifyContent='center' item xs={12} md={3}>
                  <h1>Projects go here</h1>
              </Grid>
              <Grid justifyContent='center' item xs={12} md={3}>
                  <h1>Projects go here</h1>
              </Grid>
              </Grid>
              </Box>
