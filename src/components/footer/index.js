import styled from 'styled-components';
import {Button, List, ListItem} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import chargebee from '../../assets/chargebee-logo-black.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`
const FeaturesSection = styled.div`
  display: flex;
  gap: 40px;
`
const Title = styled.h3`
  font-size: 36px;
  line-height: 42px;
  max-width: 640px;
`;
const A = styled.a`
  text-decoration: none;
  padding-left: 0px;
  transition: padding-left 0.5s;
  &:hover {
    padding-left: 8px;
  }
`
const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0 0;
  @media (max-width: 768px){
    flex-direction: column-reverse;
    gap: 50px;
  }
`
const IconWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`
const Ptag = styled.p`
  color: #333;
  font-weight: 600;
`
const Footer = ()=> {
    return (
      <Container maxWidth='md' style={{padding: '100px 0'}}>
        <Section>
          <Title>
            Still unsure? Step Inside and See What The Future Looks Like.
          </Title>
          <Button 
            href="#" 
            size="large"
            endIcon={<ChevronRightIcon />}
            variant="contained" 
            style={{backgroundColor: '#5B22C6', color: "#fff", textTransform: 'inherit'}}
          >
            Schedule a Demo
          </Button>
        </Section>
        <FeaturesSection>
        <div style={{padding: '10px'}}>
          <List >
            <ListItem><A href="#"><Ptag>Product</Ptag></A></ListItem>
            <ListItem><A href="#">Subscription Management</A></ListItem>
            <ListItem><A href="#">Recurring Billing and Invoicing</A></ListItem>
            <ListItem><A href="#">Recurring Payments</A></ListItem>
            <ListItem><A href="#">Accounting and Taxes</A></ListItem>
            <ListItem><A href="#">SaaS Reporting</A></ListItem>
            <ListItem><A href="#">Enterprise Billing</A></ListItem>
            <ListItem><A href="#">Integrations</A></ListItem>
          </List>
        </div>
        <div style={{padding: '0px 10px'}}>
          <List>
          <ListItem><A href="#"><Ptag>Help &amp; Support</Ptag></A></ListItem>
            <ListItem><A href="#">Security</A></ListItem>
            <ListItem><A href="#">FAQs</A></ListItem>
            <ListItem><A href="#">Status</A></ListItem>
            <ListItem><A href="#">Product Documentation</A></ListItem>
            <ListItem><A href="#">API Documentation</A></ListItem>
            <ListItem><A href="#">Supported Payment Gateways</A></ListItem>
            <ListItem><A href="#">Sitemap</A></ListItem>
          </List>
        </div>
        <div style={{padding: '10px'}}>
          <List>
            <ListItem><A href="#"><Ptag>Resources</Ptag></A></ListItem>
            <ListItem><A href="#">Blog</A></ListItem>
            <ListItem><A href="#">Compare Payment Gateways</A></ListItem>
            <ListItem><A href="#">Tackling Payment Failures</A></ListItem>
            <ListItem><A href="#">Enterprise Billing Guide</A></ListItem>
            <ListItem><A href="#">Webinars</A></ListItem>
            <ListItem><A href="#">Glossaries</A></ListItem>
          </List>
        </div>
        <div>
          <List>
            <ListItem><A href="#"><Ptag>Company</Ptag></A></ListItem>
            <ListItem><A href="#">Customers</A></ListItem>
            <ListItem><A href="#">Partners</A></ListItem>
            <ListItem><A href="#">Careers</A></ListItem>
            <ListItem><A href="#">Press</A></ListItem>
            <ListItem><A href="#">Terms</A></ListItem>
            <ListItem><A href="#">Privacy</A></ListItem>
          </List>
        </div>
      </FeaturesSection>
        <ImgWrapper>
          <div>
            <img src={chargebee} alt="" style={{height: '34px', verticalAlign: 'middle'}}/>
          </div>
          <IconWrapper>
            <FacebookIcon/>
            <TwitterIcon />
            <YouTubeIcon />
            <LinkedInIcon />
          </IconWrapper>
        </ImgWrapper>
      </Container>
    )
}

export default Footer;