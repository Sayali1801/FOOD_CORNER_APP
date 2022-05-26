
import React from 'react';
import '../styles/footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer()
{
    return(
        <div className='footer'>
                <div className='socialMedia'>
                <TwitterIcon />
                <InstagramIcon/>
                <FacebookIcon/>
                <LinkedInIcon />
                </div>
                        <div className='footerText'>                
                <p>Copyright 2022</p>
               <p>Made by-</p> 
               <h2>Sayali Khot</h2>
                        </div>

                </div>

    )
}
export default Footer;