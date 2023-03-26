import React from 'react';
import {Card, } from '@mui/material';
import { Typography, Textarea, FormControl } from '@mui/joy';

export default function Todo()
{
    

    return (
        <Card variant="outlined" sx={{ backgroundColor: '#343A46', display: 'flex', borderRadius: '15px', width: '300px', height: '320px' }}>
            <Typography sx={{color:'#EBECF0', fontSize:'20px', position:'absolute', top:'2vh', left:'2vh'}}> Todo</Typography>
            <FormControl> 
                <Textarea placeholder="Don't forget me.." maxRows={1} sx={{ backgroundColor: 'inherit', color:'#EBECF0' ,position:'absolute', top:'6vh', left:'2vh'}}></Textarea>
            </FormControl>
        </Card>
    );
}