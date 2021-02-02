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

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {useState} from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const Container = styled.div`
width: 100%;
    background-color: #f6f9fb;
    /* padding: 100px 250px; */
    text-align: center;    
`
const ButtonWrapper = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`
const SvganimationWrapper = styled.div`
    height: 500px;
    border: 2px dotted seagreen;
`
const Wrapper= styled.div`
    display: flex;
    gap: 50px;
    padding: 0px 250px;
    /* border: 1px solid pink; */
    margin: 100px 0;
`
const Section = styled.div`
    display: flex;
`
const StackSection = styled.div`
    width: 100%;
    padding: 100px 250px;
    background-color: #200F57;
    color: #ffffff;
    border: 1px solid red;
`
const Home = ()=> {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Container>
            <Typography variant="h3" style={{color:"#500ad2"}}>Subscription Billing &amp; Revenue Operations</Typography>
            <Typography variant="h3">for Fast-growth B2B SaaS </Typography>
            <Typography variant="subtitle1" style={{paddingTop:"20px"}}>Get the operational sophistication to achieve, sustain,</Typography>
            <Typography>and scale recurring revenue.</Typography>
            <ButtonWrapper>
                <Button 
                href="#" 
                size="large"
                endIcon={<ChevronRightIcon />}
                variant="contained" 
                style={{backgroundColor: '#5B22C6', color: "#fff", textTransform: 'inherit'}}
            >
                Schedule a Demo
            </Button>
            <Button 
                href="#" 
                size="large"
                endIcon={<ChevronRightIcon />}
                variant="outlined" 
                style={{color: '#5B22C6', borderColor: "#5B22C6", textTransform: 'inherit'}}
            >
                Sign up for free
            </Button>
          </ButtonWrapper>
          <SvganimationWrapper>

          </SvganimationWrapper>
          <Typography variant="subtitle1">Thousands of Scaling SaaS Businesses Love Us</Typography>
          <div style={{height: '100px', border: '1px solid red'}}>
              Slider
          </div>
          <Wrapper>
              <div>
              <Typography variant="subtitle2" align="left" style={{color: '#500ad2'}}>
              No more spreadsheet errors
              </Typography>
              <Typography variant="h6" align="left" style={{color: 'black', fontWeight: '600', padding: '20px 0'}}>
              Automate Recurring Billing
              </Typography>
              <Typography variant="body1" align="left" style={{color: '#00000a', fontSize: '18px', lineHeight: '28px'}}>
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
                style={{color: '#5B22C6', borderColor: "#5B22C6", textTransform: 'inherit', alignSelf: 'left'}}
            >
                Learn more
            </Button>
              </div>
              <div>
                  <img src={recurring}/>
              </div>
          </Wrapper>
          <Wrapper>
                <div>
                  <img src={subscription}/>
              </div>
              <div>
              <Typography variant="subtitle2" align="left" style={{color: '#500ad2'}}>
              No more developer dependency
              </Typography>
              <Typography variant="h6" align="left" style={{color: 'black', fontWeight: '600', padding: '20px 0'}}>
              Smarter Subscription Management
              </Typography>
              <Typography variant="body1" align="left" style={{color: '#00000a', fontSize: '18px', lineHeight: '28px'}}>
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
                style={{color: '#5B22C6', borderColor: "#5B22C6", textTransform: 'inherit', alignSelf: 'left'}}
            >
                Learn more
            </Button>
              </div>
              
          </Wrapper>
          <Wrapper>
              <div>
              <Typography variant="subtitle2" align="left" style={{color: '#500ad2'}}>
              No more lost opportunities
              </Typography>
              <Typography variant="h6" align="left" style={{color: 'black', fontWeight: '600', padding: '20px 0'}}>
              Streamline Revenue Operations
              </Typography>
              <Typography variant="body1" align="left" style={{color: '#00000a', fontSize: '18px', lineHeight: '28px'}}>
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
                style={{color: '#5B22C6', borderColor: "#5B22C6", textTransform: 'inherit', alignSelf: 'left'}}
            >
                Learn more
            </Button>
              </div>
              <div>
                  <img src={revenue}/>
              </div>
          </Wrapper>
            <StackSection>
                <div>
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
                </div>
                <div>
                    <img src={management} />
                </div>
                <Grid container spacing={3} style={{marginTop: '50px'}}>
                    <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" align="left" style={{color: '#FF7846'}}>
                    Quote-to-Cash Automation
                    </Typography>
                    <Typography variant="h6" align="left" style={{color: 'white', fontWeight: '600', padding: '10px 0'}}>
                    Powers Sales and Marketing CRM
                    </Typography>
                    <div style={{textAlign: 'left', padding: '10px 0'}}><img src={crm} style={{height: '50px'}}/></div>
                    <Typography variant="body1" align="left" style={{color: 'white', fontSize: '18px', lineHeight: '28px', paddingBottom: '30px'}}>
                    Handle quotes, approvals, acceptance, and collections seamlessly from within the CRM.
                    </Typography>
                    <div style={{textAlign: 'left'}}>
                    <Button 
                        href="#" 
                        size="medium"
                        endIcon={<ChevronRightIcon />}
                        variant="contained" 
                        style={{color: '#5B22C6',  textTransform: 'inherit', alignSelf: 'left'}}
                    >
                        Learn more
                    </Button>
                    </div>
                </Grid>
              <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" align="left" style={{color: '#FF7846'}}>
              Offer More Payment Methods
              </Typography>
              <Typography variant="h6" align="left" style={{color: 'white', fontWeight: '600', padding: '10px 0'}}>
              25+ Payment Gateways
              </Typography>
              <div style={{textAlign: 'left', padding: '10px 0'}}><img src={pg} style={{height: '50px'}}/></div>
              <Typography variant="body1" align="left" style={{color: 'white', fontSize: '18px', lineHeight: '28px', paddingBottom: '30px'}}>
              Accept payments across a wide array of gateways, geographies, and currencies.
              </Typography>
              <div style={{textAlign: 'left'}}>
              <Button 
                href="#" 
                size="medium"
                endIcon={<ChevronRightIcon />}
                variant="contained" 
                style={{color: '#5B22C6',  textTransform: 'inherit', alignSelf: 'left'}}
            >
                Learn more
            </Button>
            </div>
              </Grid>
          </Grid>
          <Grid container spacing={3} style={{marginTop: '50px'}}>
          <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" align="left" style={{color: '#FF7846'}}>
              Streamline Finance Operations
              </Typography>
              <Typography variant="h6" align="left" style={{color: 'white', fontWeight: '600', padding: '10px 0'}}>
              Syncs with Accounting Software
              </Typography>
              <div style={{textAlign: 'left', padding: '10px 0'}}><img src={acc} style={{height: '50px'}}/></div>
              <Typography variant="body1" align="left" style={{color: 'white', fontSize: '18px', lineHeight: '28px', paddingBottom: '30px'}}>
              Reconcile books in seconds, handle compliance, and recognize revenue painlessly.
              </Typography>
              <div style={{textAlign: 'left'}}>
              <Button 
                href="#" 
                size="medium"
                endIcon={<ChevronRightIcon />}
                variant="contained" 
                style={{color: '#5B22C6',  textTransform: 'inherit', alignSelf: 'left'}}
                >
                Learn more
                </Button>
                </div>
              </Grid>
          </Grid>
          <Grid container   style={{padding: '150px 0',  width: '600px',margin: '0 auto'}}>
              <Grid item xs={12} sm={6} >
            <Typography variant="h2" align="left" style={{color: 'white', fontSize: '28px', lineHeight: '28px'}}>
            Talk to us today about 
            </Typography>
            <Typography variant="h2" align="left" style={{color: 'white', fontSize: '28px', lineHeight: '28px', paddingBottom: '30px'}}>
            your revenue workflow
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} >
          <Button 
            href="#" 
            size="large"
            endIcon={<ChevronRightIcon />}
            variant="contained" 
            style={{backgroundColor: '#5B22C6', color: "#fff", textTransform: 'inherit'}}
          >
            Schedule a Demo
          </Button>
          </Grid>
        </Grid>
        <hr></hr>
        <Grid container style={{padding: '100px 0'}} >
            <Grid item xs={12}>
                <Typography variant="h3">Great Products Deserve Hyper Growth.</Typography>
                <Typography variant="h3">Chargebee Makes it Easy.</Typography>
            </Grid>
        </Grid>
            </StackSection>
    
        </Container>
    )
}

export default Home;