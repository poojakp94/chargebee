import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography'; 
import Grid from '@material-ui/core/Grid';

const Card = styled.div`
    box-shadow: 3px 4px 12px 1px #ccc;
    width: 1100px;
    height: 400px;
    border-radius: 12px;
    display: flex;
    gap: 20px;
    background: #fff;
`
const Wrapper = styled.div`
    min-width: 500px;
    height: 100%;
    padding: 50px ;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 10px 57px 57px 10px;
    color: #fff;
`
const TestimoniWrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
`
const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
const TabCard = ({data})=> {

    return (
        <>
            <Card>
                <Wrapper style={{backgroundColor: data.backgroundColor}}>  
                    <Typography variant='caption'>{data.title}</Typography> 
                    <img src={data.img} alt="" style={{height: '50px'}}/>
                    <Typography variant='h6'>{data.subheading}</Typography>
                    <ButtonWrapper>
                        <div style={{width: '100px', height: '0.5px', backgroundColor: '#fff', border: '0.5px solid #fff'}}/>
                        <Button 
                                href="#" 
                                size="medium"
                                endIcon={<ArrowRightAltIcon />}
                                variant="outlined" 
                                style={{color: '#fff', borderColor: "#fff", textTransform: 'inherit'}}
                            >
                                Read Story
                            </Button>
                    </ButtonWrapper>    
                </Wrapper>
                <TestimoniWrapper>
                    <Typography variant="h6">{data.content}</Typography>
                    <Grid container direction='row' justify="space-between" alignItems="flex-end">
                        <Grid item>
                            <Typography style={{fontSize: '26px', fontWeight: '700', lineHeight: '24px', marginBottom: '10px'}}>{data.userName}</Typography>
                            <Typography>{data.department}</Typography>
                        </Grid>
                        <Grid item>
                            <img src={data.logo} alt="" style={{width: '150px'}}/>
                        </Grid>
                    </Grid>
                </TestimoniWrapper>
            </Card>
        </>
    )
}

export default TabCard;