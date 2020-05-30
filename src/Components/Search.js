import React , {useState} from 'react'
import {Input , Grid , Container , Button , Paper } from '@material-ui/core';
export default function Search({FetchData}) {
    const [Search , setSearch] = useState(null);
    //Handel submit 
    const HandelSubmit = (e) =>{
        e.preventDefault();
        FetchData(Search);
    } 
    return (
        <Container style={{margin:"20px 0"}}>
                <form onSubmit={HandelSubmit}  style={{display:'flex', justifyContent:'space-between' , alignItems:"center"}}>
                    <Grid xs={10}>
                        <Paper elevation={2}>
                        <Input style={{padding:"5px"}} fullWidth={true} onChange={(e) => setSearch(e.target.value) } type='String' required={true} placeholder='What You Want to Search About'/>
                        </Paper>
                    </Grid>
                    <Grid xs={2} style={{margin:"0 10px"}}>
                        <Button variant="contained" color='primary'>Search</Button>
                    </Grid>
                </form>
        </Container>
    )
}
