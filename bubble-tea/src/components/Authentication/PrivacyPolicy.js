import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material/styles";
import { Grid } from '@mui/material';

export default function PrivacyPolicy() {
    const theme = useTheme();
    return (
        <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >

        <Box sx={{ mt: 7, width: '100%', maxWidth: '50vw' }}>
        <Typography variant="h3" gutterBottom>
            Privacy Policy
        </Typography>
        <Typography variant="body1" gutterBottom>
          Effective as of February 5, 2020
        </Typography>
        <Typography variant="h6" color="secondary.main" gutterBottom>
        Privacy Policy Highlights
        </Typography>
        <Typography variant="body1" gutterBottom>
        The Restaurant Brands International, Inc. (RBI) Privacy Policy describes the information we collect and how it is used and shared. This policy applies to any information collected about you by group  when you do any of the following (collectively, the “Services”): (i) visit a STARDUCKS® branded restaurant in the United States or in Canada, or (ii) use in Canada any website, mobile or tablet application, digital in-restaurant kiosk, or other online service or platform of the STARDUCKS® brand, or any other STARDUCKS company that links or refers to this policy. This summary provides the highlights of our policy, but please click here to review the policy in full.
        </Typography>
        <Typography variant="h6" color="secondary.main" gutterBottom>
        Information We Collect
        </Typography>
        <Typography variant="body1" gutterBottom>
        We collect various types of information about our users in connection with the Services, including:
        <ul>
            <li>Information you provide to us;</li>
            <li>Information we collect about your use of our Services;</li>
            <li>Information about your use of the Services; and</li>
            <li>Information we obtain from third-party sources.</li>
            <li>We also may collect information in ways that we describe to you at the point of collection or otherwise with your consent.</li>
        </ul>
        </Typography>
        <Typography variant="h6" color="secondary.main" gutterBottom>
        Information We Collect
        </Typography>
        <Typography variant="body1" gutterBottom>
        We use the information we collect to, among other things:
            <ul>
                <li>Register and create your account;</li>
                <li>Operate and manage our stored-value card program and rewards program;</li>
                <li>Provide and manage the products and Services you request;</li>
                <li>Communicate with you about our products, programs, services, and promotions;</li>
                <li>Deliver targeted advertising, promotions, and offers; and</li>
                <li>Understand our customers so that we can develop and improve our customer service, promotions, products, programs, and Services.</li>
            </ul>
        We may otherwise use your information with your consent or at your direction.
        </Typography>
        <Typography variant="h6" color="secondary.main" gutterBottom>
        Sharing of Information
        </Typography>
        <Typography variant="body1" gutterBottom>
        We use the information we collect to, among other things:
            <ul>
                <li>Register and create your account;</li>
                <li>Operate and manage our stored-value card program and rewards program;</li>
                <li>Provide and manage the products and Services you request;</li>
                <li>Communicate with you about our products, programs, services, and promotions;</li>
                <li>Deliver targeted advertising, promotions, and offers; and</li>
                <li>Understand our customers so that we can develop and improve our customer service, promotions, products, programs, and Services.</li>
            </ul>
        We may otherwise use your information with your consent or at your direction.
        </Typography>

      </Box>
    </Grid>

    );
  }