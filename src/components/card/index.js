import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'; 
import Grid from '@material-ui/core/Grid';
const Wrapper = styled.div`
    
    width: 40%;
    height: 100%;
    padding: 50px ;
    border-radius: 10px 57px 57px 10px;
    color: #fff;
`
const TabCard = ({data})=> {
    console.log(data)

    return (
        <>
            <Box
                boxShadow={3}
                bgcolor="background.paper"
                style={{ width: '58rem', height: '25rem', borderRadius: '12px' }}
            >
                <Wrapper style={{backgroundColor: data.backgroundColor}}>  
                    <Typography variant='subtitle1'>{data.title}</Typography> 
                    <img src={data.img}/>
                    <Typography variant='h6'>{data.subheading}</Typography>
                </Wrapper>
            </Box>
        </>
    )
}

export default TabCard;