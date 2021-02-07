import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Button from "@material-ui/core/Button";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';
import { ListItem, List } from '@material-ui/core';
import recurring from '../../assets/recurring-billing-graphic.svg';
import revenue from '../../assets/revenue-operations-graphic.svg';
import subscription from '../../assets/subscription-graphic.svg';
import management from '../../assets//revenue-management.svg';
import CheckIcon from '@material-ui/icons/Check';
import crm from '../../assets/crm-logos.png';
import pg from '../../assets/pg-logos.png';
import acc from '../../assets/acc-logos.png';
import Grid from '@material-ui/core/Grid';
import svgexport from '../../assets/svgexport-7.svg';
import logosprite from '../../assets/logos-sprite.png';
import {useState} from 'react';
import Container from '@material-ui/core/Container';
import drawboard from '../../assets/drawboard-20x.svg';
import fishburner from '../../assets/fishburners-105.svg';
import harvestr from '../../assets/harvestr-15percent.svg';
import drawboardlogo from '../../assets/logo-draw.svg';
import fishburnerlogo from '../../assets/fishburners.png';
import harvestrlogo from '../../assets/logo-harvestr.png';
import TabCard from '../../components/card'
  
const HomeContainer = styled.div`
    width: 100%;
    /* text-align: center;     */
`
const ButtonWrapper = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`
const SvganimationWrapper = styled.div`
    background-color: white;
    padding: 50px 250px;
`
// const Wrapper= styled.div`
//     display: flex;
//     gap: 50px;
//     padding: 0px 250px;
//     /* border: 1px solid pink; */
//     margin: 100px 0;
// `
const Section = styled.div`
    display: flex;
`
const StackSection = styled.div`
    width: 100%;
    padding: 100px 0px;
    background-color: #200F57;
    color: #ffffff;
    /* border: 1px solid red; */
`
const HeadingSection = styled.div`
    background: linear-gradient(180deg, #ecf3f7 0, #fff 99.92%);
    padding: 140px 250px 0;
`
const Home = ()=> {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const cardData = {
        card1: {
            title:'Achieved',
            subheading:'ROI with Chargebee',
            img: `${drawboard}`,
            backgroundColor:'#357A7A',
            content: '“Chargebee has all the concepts of metered billing, flat and tiered pricing. If we decided to change the way we want to bill or the price structure, it would be accounted for, excuse the pun.”',
            userName: 'Nathan Field',
            department: 'Marketing',
            logo: `${drawboardlogo}`
        },
        card2: {
            title:'Saved',
            subheading:'in manual accounting.',
            img: `${fishburner}`,
            backgroundColor:'#000000',
            content: '“Our finance and accounting teams now save up to 105 hours of manual accounting every month. We now have more time to do financial analysis and make strategic business decisions.”',
            userName: 'Ayush Patel',
            department: 'Finance',
            logo: `${fishburnerlogo}`
        },
        card3: {
            title:'Grew MRR by',
            subheading:'and expanded globally from Europe.',
            img: `${harvestr}`,
            backgroundColor:'#000000',
            content: '“As a European company selling in Europe but also outside of Europe, it was critical for us to be able to have two currencies - euros and dollars. VAT was another aspect we really wanted to be automated. This was a gamechanger with Chargebee. ”',
            userName: 'Valentin Huang',
            department: 'Co-founder',
            logo: `${harvestrlogo}`
        },
}

    return (
        <HomeContainer>
            <HeadingSection>
            <Typography variant="h3" align="center" style={{color:"#500ad2", fontWeight: 'bold'}}>Subscription Billing &amp; Revenue Operations</Typography>
            <Typography variant="h3" align="center" style={{fontWeight: 'bold'}}>for Fast-growth B2B SaaS </Typography>
            <Typography align="center" style={{paddingTop:"20px"}}>Get the operational sophistication to achieve, sustain,</Typography>
            <Typography align="center">and scale recurring revenue.</Typography>
            <ButtonWrapper>
                <Button 
                href="#" 
                size="large"
                endIcon={<ChevronRightIcon />}
                variant="contained" 
                style={{backgroundColor: '#5B22C6', color: "#fff", textTransform: 'inherit', fontSize: '20px'}}
            >
                Schedule a Demo
            </Button>
            <Button 
                href="#" 
                size="large"
                endIcon={<ChevronRightIcon />}
                variant="outlined" 
                style={{color: '#5B22C6', borderColor: "#5B22C6", textTransform: 'inherit', fontSize: '20px'}}
            >
                Sign up for free
            </Button>
          </ButtonWrapper>
          </HeadingSection>
            <SvganimationWrapper>
          <Grid container direction="row" justify="center" alignItems="center">
            <img src={svgexport} style={{height: '800px'}}/>
          </Grid>
          </SvganimationWrapper>
            <Typography variant="subtitle1" align='center'>Thousands of Scaling SaaS Businesses Love Us</Typography>
            <div style={{height: '100px', maxWidth: '650px', margin: '0 auto', overflow: 'hidden'}}>
              <img src={logosprite} alt='slider' />
          </div>
            <Container maxWidth='md'>
                <Grid container direction='row' justify="center"  alignItems="center" style={{margin: '50px 0px'}}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" style={{color: '#500ad2'}}>
                        No more spreadsheet errors
                        </Typography>
                        <Typography variant="h6" style={{color: 'black', fontWeight: '600', padding: '20px 0'}}>
                        Automate Recurring Billing
                        </Typography>
                        <Typography variant="body1" style={{color: '#00000a', fontSize: '18px', lineHeight: '28px'}}>
                        Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!
                        </Typography>
                        <Section>
                            <List >
                                <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Billing Schedules</ListItem>
                                <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Tax management</ListItem>
                            </List>
                            <List>
                                <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Proration &amp; Invoicing</ListItem>
                                <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Payment Methods</ListItem>
                            </List>
                        </Section>
                        <Button 
                            href="#" 
                            size="medium"
                            endIcon={<ChevronRightIcon />}
                            variant="outlined" 
                            style={{color: '#5B22C6', borderColor: "#5B22C6", textTransform: 'inherit'}}
                            >
                            Learn more
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={recurring} alt='recurring' />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='md'>
                <Grid container direction='row' justify="space-between"  alignItems="center">
                    <Grid item xs={12} sm={6}> 
                        <Grid container direction='row' justify="flex-end"  alignItems="center">
                            <img src={subscription} alt='subscription' />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" style={{color: '#500ad2'}}>
                        No more developer dependency
                        </Typography>
                        <Typography variant="h6" style={{color: 'black', fontWeight: '600', padding: '20px 0'}}>
                        Smarter Subscription Management
                        </Typography>
                        <Typography variant="body1" style={{color: '#00000a', fontSize: '18px', lineHeight: '28px'}}>
                        Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.
                        </Typography>
                        <Section>
                        <List >
                            <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Price modeling</ListItem>
                            <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Trial management</ListItem>
                        </List>
                        <List>
                            <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Product Catalog</ListItem>
                            <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Lifecycle automation</ListItem>
                        </List>
                        
                        </Section>
                        <Button 
                            href="#" 
                            size="medium"
                            endIcon={<ChevronRightIcon />}
                            variant="outlined" 
                            style={{color: '#5B22C6', borderColor: "#5B22C6", textTransform: 'inherit'}}
                        >
                            Learn more
                        </Button>
                    </Grid>
                </Grid>  
            </Container>
            <Container maxWidth='md'>
                <Grid container direction='row' justify='center' alignItems='center' style={{margin: '50px 0px'}}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" style={{color: '#500ad2'}}>
                        No more lost opportunities
                        </Typography>
                        <Typography variant="h6" style={{color: 'black', fontWeight: '600', padding: '20px 0'}}>
                        Streamline Revenue Operations
                        </Typography>
                        <Typography variant="body1" style={{color: '#00000a', fontSize: '18px', lineHeight: '28px'}}>
                        Plug revenue leaks by aligning GTM &amp; Finance. Uncover growth opportunities across processes, geographies, and business models.
                        </Typography>
                        <Section>
                        <List >
                            <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>SaaS Analytics</ListItem>
                            <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Order-to-revenue</ListItem>
                        </List>
                        <List>
                            <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Quote-to-cash</ListItem>
                            <ListItem><CheckIcon style={{color: 'green', marginRight: '8px'}}/>Revenue Recognition</ListItem>
                        </List>
                        
                        </Section>
                        <Button 
                            href="#" 
                            size="medium"
                            endIcon={<ChevronRightIcon />}
                            variant="outlined" 
                            style={{color: '#5B22C6', borderColor: "#5B22C6", textTransform: 'inherit'}}
                        >
                            Learn more
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <img src={revenue}/>
                    </Grid>
                </Grid>
            </Container>
            <StackSection>
                <Container maxWidth='md'>
                    <Typography variant="h3" align="left" >
                        Work With Your
                    </Typography>
                    <Typography variant="h3" align="left" >
                        Revenue Management Stack
                    </Typography>
                    <Typography variant="subtitle1" align="left" >
                        Managing sales, payments, customer experience or your books:
                    </Typography>
                    <Typography variant="subtitle1" align="left" >
                    if it affects your revenue cycle, Chargebee works with it.
                    </Typography>
                </Container>
                <Container maxWidth='md'>
                    <img src={management} />
                </Container>
                <Container maxWidth='md' style={{marginTop: '80px', border: '1px solid red'}}>
                    <Grid container spacing={10} >
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" style={{color: '#FF7846'}}>
                            Quote-to-Cash Automation
                            </Typography>
                            <Typography variant="h6" style={{color: 'white', fontWeight: '600', padding: '10px 0'}}>
                            Powers Sales and Marketing CRM
                            </Typography>
                            <div style={{textAlign: 'left', padding: '10px 0'}}><img src={crm} style={{height: '50px'}}/></div>
                            <Typography variant="body1" style={{color: 'white', fontSize: '18px', lineHeight: '28px', paddingBottom: '30px'}}>
                            Handle quotes, approvals, acceptance, and collections seamlessly from within the CRM.
                            </Typography>
                            <Button 
                                href="#" 
                                size="medium"
                                endIcon={<ChevronRightIcon />}
                                variant="contained" 
                                style={{color: '#5B22C6',  textTransform: 'inherit'}}
                            >
                                Learn more
                            </Button> 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" style={{color: '#FF7846'}}>
                            Offer More Payment Methods
                            </Typography>
                            <Typography variant="h6" style={{color: 'white', fontWeight: '600', padding: '10px 0'}}>
                            25+ Payment Gateways
                            </Typography>
                            <div style={{textAlign: 'left', padding: '10px 0'}}><img src={pg} style={{height: '50px'}}/></div>
                            <Typography variant="body1" align="left" style={{color: 'white', fontSize: '18px', lineHeight: '28px', paddingBottom: '30px'}}>
                            Accept payments across a wide array of gateways, geographies, and currencies.
                            </Typography>
                            <Button 
                                href="#" 
                                size="medium"
                                endIcon={<ChevronRightIcon />}
                                variant="contained" 
                                style={{color: '#5B22C6',  textTransform: 'inherit'}}
                            >
                                Learn more
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth='md' style={{marginTop: '80px', border: '1px solid red'}}>
                    <Grid container spacing={10} >
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle2" style={{color: '#FF7846'}}>
                            Streamline Finance Operations
                            </Typography>
                            <Typography variant="h6" style={{color: 'white', fontWeight: '600', padding: '10px 0'}}>
                            Syncs with Accounting Software
                            </Typography>
                            <div style={{textAlign: 'left', padding: '10px 0'}}>
                                <img src={acc} style={{height: '50px'}}/>
                            </div>
                            <Typography variant="body1" style={{color: 'white', fontSize: '18px', lineHeight: '28px', paddingBottom: '30px'}}>
                            Reconcile books in seconds, handle compliance, and recognize revenue painlessly.
                            </Typography>
                            <Button 
                                href="#" 
                                size="medium"
                                endIcon={<ChevronRightIcon />}
                                variant="contained" 
                                style={{color: '#5B22C6',  textTransform: 'inherit', alignSelf: 'left'}}
                                >
                                Learn more
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="md" style={{margin: '150px 0px', border: '1px solid red'}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6"  style={{color: 'white', fontSize: '28px', lineHeight: '28px'}}>
                            Talk to us today about 
                            </Typography>
                            <Typography variant="h6"  style={{color: 'white', fontSize: '28px', lineHeight: '28px'}}>
                            your revenue workflow
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                                href="#" 
                                size="large"
                                endIcon={<ChevronRightIcon />}
                                variant="contained" 
                                style={{backgroundColor: '#5B22C6', color: "#fff", textTransform: 'inherit', fontSize: '20px'}}
                            >
                                Schedule a Demo
                            </Button>
                        </Grid>
                    </Grid>   
                </Container>
                <hr style={{width: '1000px'}}></hr>
                <Container maxWidth='md' style={{padding: '100px 0', border: '1px solid red'}}>  
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h3" align='center'>Great Products Deserve Hyper Growth.</Typography>
                            <Typography variant="h3" align='center'>Chargebee Makes it Easy.</Typography>
                        </Grid>
                    </Grid>
                    </Container> 
            </StackSection>
            <TabCard  data={cardData.card1}  />
            <TabCard  data={cardData.card2}  />
            <TabCard  data={cardData.card3}  />
        </HomeContainer>
    )
}

export default Home;