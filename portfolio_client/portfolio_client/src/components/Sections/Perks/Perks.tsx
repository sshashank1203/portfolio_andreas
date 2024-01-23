import {Box, Container, Typography, Divider} from '@mui/material';
import PerkCard from './PerkCard';
import {useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import HandymanIcon from '@mui/icons-material/Handyman';
import HttpIcon from '@mui/icons-material/Http';
import DevicesIcon from '@mui/icons-material/Devices';

export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

gsap.registerPlugin(ScrollTrigger);


const perksArray = [
{
    title : 'Website Designing',
    text : 'I accurately implement the design of a website or web app, making sure it looks exactly like the approved design and great rates over the market. I also make sure that the design is responsive and works well on all devices.',
    Icon :  HttpIcon,
}   ,
{
    title : 'Frontend design/dev',
    Icon : DevicesIcon,
    text : 'As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies.'
},
{
    title : 'Driving excavators',
    text : 'I am trained and skilled to operate construction excavators.And can efficiently operate excavators of all sizes, from mini-excavators to large excavators.',
    Icon :  HandymanIcon,
} ,
]
const Perks = () => {

    

    useEffect(() => {
        MainTitleAnimation('.h1','.h2')
    }, [])

    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        my: '4em'
    }}>
        <Box sx={centeredStyles}>
            <Typography
                className='h1 t25o0'
                variant='h1'
                sx={{
             
                fontSize: {
                    xs: '2.2em',
                    sm: '2.5em',
                    md: '3em'
                }
            }}
                fontWeight='600'>
                You&lsquo;re Safe And in Good Hands
            </Typography>
            <Typography
                variant='h2'
                className='secondary h2'
                sx={{
                pt: '1.5em',
                transform: 'translateY(15px)',
                opacity: 0,
                maxWidth: '570px',
                fontSize: {
                    xs: '.8em',
                    sm: '1em'
                }
            }}>
                Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service.
            </Typography>

            <Box
                sx={{
                mt: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5%',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                }
            }}>
                {perksArray.map(perk => {
                    return <PerkCard  key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                })}
            </Box>
        </Box>
    </Container> < Divider /> </>)
}

export default Perks