import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Box,
  Button,
  Drawer,
  TextField,
  Typography,
  Grid,
  CircularProgress,
  IconButton,
  Container,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  AppBar,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick';
import HomeScreenNewBg from '../assets/gcrs_images/home_icons_new/HomeScreenNewBg.png';
import CityImage from '../assets/gcrs_images/partners_investers/city_champions.png';
import amruthImage from '../assets/gcrs_images/partners_investers/amruth2.0.png';
import ayodhyaImage from '../assets/gcrs_images/partners_investers/stanford.png';
import SeedImage from '../assets/gcrs_images/partners_investers/seed.png';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactUs from './ContactUs';
import { useNavigate } from 'react-router-dom';

// Home background image URL



const StepImageCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const images: string[] = [
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/home_icons_new/FirstStep.svg",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/home_icons_new/SecondStep.svg",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/home_icons_new/ThirdStep.svg",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/home_icons_new/FourthStep.svg",
    "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/home_icons_new/FifthStep.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (prev + 1 >= images.length) {
          clearInterval(interval); // Stop at the last image
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        height: { xs: "80px", md: "120px" },
        mx: "auto",
        position: "relative",
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`step-${index}`}
          sx={{
            position: "absolute",
            top: { xs: 80, md: 160 }, // Adjust vertical position for mobile
            left: 0,
            height: { xs: "100px", md: "155px" },
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 0.4s ease-in-out",
          }}
        />
      ))}
    </Box>
  );
};


// Styled Components
const BannerSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url(${HomeScreenNewBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
}));

const BannerContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  color: 'white',
  maxWidth: '1200px',
  width: '100%',
  padding: theme.spacing(0, 3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(4),
  top: '50%',
  transform: 'translateY(-50%) rotate(-90deg)',
  color: 'white',
  fontSize: '0.9rem',
  fontWeight: 500,
  letterSpacing: '0.2em',
  zIndex: 2,
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 0.8,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.spacing(3),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 32px rgba(76, 175, 80, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(76, 175, 80, 0.4)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  border: '1px solid rgba(189, 3, 36, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 60px rgba(189, 3, 36, 0.15)',
    '& .service-icon': {
      background: 'linear-gradient(135deg, #BD0324 0%, #8B0000 100%)',
      color: 'white',
      transform: 'scale(1.1)',
    },
    '& .service-title': {
      color: '#BD0324',
    },
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  transition: 'all 0.4s ease',
  fontSize: '2.5rem',
  color: '#666',
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  marginTop: theme.spacing(4),
  '& .slick-dots': {
    bottom: '-50px',
    '& li button:before': {
      fontSize: '12px',
      color: '#BD0324',
      opacity: 0.5,
    },
    '& li.slick-active button:before': {
      opacity: 1,
    },
  },
  '& .slick-prev, & .slick-next': {
    zIndex: 1,
    width: '50px',
    height: '50px',
    '&:before': {
      fontSize: '30px',
      color: 'grey',
    },
  },
  '& .slick-prev': {
    left: '-25px',
  },
  '& .slick-next': {
    right: '-45px',
  },
}));

const NewsCard = styled(Card)(({ theme }) => ({
  height: '270px',
  margin: theme.spacing(0, 0),
  borderRadius: theme.spacing(0),
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0)',
  },
}));

const PartnerImage = styled('img')(({ theme }) => ({
  height: '60px',
  width: 'auto',
  objectFit: 'contain',
  filter: 'grayscale(100%)',
  transition: 'all 0.3s ease',
  '&:hover': {
    filter: 'grayscale(0%)',
    transform: 'scale(1.05)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#BD0324',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    background: 'linear-gradient(135deg, #BD0324 0%, #8B0000 100%)',
    borderRadius: '2px',
  },
}));

// Interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  query: string;
  [key: string]: string; // Add index signature for string keys
}

interface FormErrors {
  [key: string]: string;
}

interface ServiceInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface NewsItem {
  image: string;
  title: string;
  description: string;
  link?: string;
}
const App: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
                                                                                                                      
  // State management
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  // Form stateessssss  
  const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    organisation: '',
    role: '',
    query: '',
  };
  
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [responseError, setResponseError] = useState<string>('');

  // Services data
 const BusinessIconCustom = () => (
  <img src="https://gcrs.co.in/static/media/Screening.d18ccdb1175aa01dcf89ef5109fb73fe.svg" alt="Screening Icon" style={{ width: '50px', height: '50px' }} />
);

const TerrainIconCustom = () => (
  <img src="https://gcrs.co.in/static/media/Scientific.613df68a4cd14b12d4be044c82d5c680.svg" alt="Scientific Icon" style={{ width: '50px', height: '50px' }} />
);

const AssessmentIconCustom = () => (
  <img src="https://gcrs.co.in/static/media/Design.c9f256e23b734a376dd92f48f0beefcd.svg" alt="Design Icon" style={{ width: '50px', height: '50px' }} />
);

const ForestIconCustom = () => (
  <img src="https://gcrs.co.in/static/media/Restoration.2f002e61fc8f8ebe267e31484dd4aead.svg" alt="Restoration Icon" style={{ width: '50px', height: '50px' }} />
);

const MonitoringIconCustom = () => (
  <img src="https://gcrs.co.in/static/media/Monitoring.9345a225b137ba22ac0836d6fa526ab9.svg" alt="Monitoring Icon" style={{ width: '50px', height: '50px' }} />
);

const services = useMemo(() => [
  {
    icon: <BusinessIconCustom />,
    title: (
      <>
        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Screening & Diagnosing</span> the Health of landscapes
      </>
    ),
  },
  {
    icon: <TerrainIconCustom />,
    title: (
      <>
        <span style={{ fontSize: '14px' }}>Detailed</span> <strong style={{ fontSize: '16px' }}>Scientific Assessment</strong>
      </>
    ),
  },
  {
    icon: <AssessmentIconCustom />,
    title: (
      <>
        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Design</span> Restoration & Management Plans
      </>
    ),
  },
  {
    icon: <ForestIconCustom />,
    title: (
      <>
        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Restoration</span> of Landscapes
      </>
    ),
  },
  {
    icon: <MonitoringIconCustom />,
    title: (
      <>
        Continuous <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Monitoring</span> of Landscapes
      </>
    ),
  },
], []);
// Removed 'title' from NewsItem and newsItems
interface NewsItem {
  image: string;
  description: string;
  link?: string;
}

const newsItems: NewsItem[] = useMemo(() => [
  {
    image: CityImage,
    description: 'GCRS honored as one of the Top 16 City Champions for 2024, an initiative to champion, support, and mentor visionary organizations committed to shaping the future of our cities. Supported by Josh Talks, Omidyar Network India, and IIM Calcutta.'
  },
  {
    image: amruthImage,
    description: 'GCRS is the winner of India Water Pitch-Pilot-Scale Challenge, organized by Ministry of Housing and Urban Affairs, under AMRUT 2.0.'
  },
  {
    image: ayodhyaImage,
    description: 'GCRS successfully implemented its flagship Lake Management System (LAMAS) in the historic city of Ayodhya.'
  },
  {
    image: SeedImage,
    description: 'GCRS selected for the 2024 cohort of the prestigious Stanford Seed Transformation Program.'
  }
], []);
    // clients
      const clients: string[] = useMemo(() => [
      "client1.png",
      "client2.png",
      "client3.png",
      "client4.png",
      "client5.png",
      "client6.png",
      "client7.svg",
      "client8.svg",
      "client9.svg",
      "client10.svg",
      "client11.svg",
      "client12.svg",
      "client13.svg",
      "client14.svg",
      "client15.svg",
    ],
    []
  );


  // Partners data
  const partnerLogos: string[] = useMemo(() => [
    "Rectangle 47.png",
    "Rectangle 48.png",
    // "Rectangle 49.png",
    "Rectangle 50.png",
    "Rectangle 51.png",
    "Rectangle 52.png",
    "Rectangle 54.png",
    "Rectangle 55.png",
    "Rectangle 56.png",
    "Rectangle 57.png",
    "Rectangle 58.png",
    "Rectangle 59.png",
    "Rectangle 60.png",
    "Rectangle 61.png",
    "Rectangle 62.png",
    "Rectangle 63.png",
    "Rectangle 64.png",
    "Rectangle 71.png",
    "Rectangle 72.png",
    "Rectangle 73.png",
    "Rectangle 74.png",
    "Rectangle 75.png",
    "Rectangle 76.png",
    "Rectangle 77.png",
    "Rectangle 78.png",
    "Rectangle 79.png",
    "Rectangle 80.png",
    "Rectangle 81.png",
    "Rectangle 82.png",
    "Rectangle 83.png",
    "Rectangle 84.png",
    "Rectangle 85.png",
    "Rectangle 86.png",
    "Rectangle 87.png",
    "Rectangle 88.png",
    "Rectangle 95.png",
    "Rectangle 96.png",
    "Rectangle 97.png",
    "Rectangle 98.png",
"Rectangle 99.png",
    "Rectangle 100.png",
    "Rectangle 101.png",
    "Rectangle 102.png",
    "Rectangle 103.png",
    "Rectangle 104.png",
    "Rectangle 105.png",
    "Rectangle 106.png",
    "Rectangle 89.png",
    "Rectangle 90.png",
    "Rectangle 91.png",
    "Rectangle 92.png",
    "Rectangle 93.png",
    "Rectangle 94.png",
    "Rectangle 107.png",
    "Rectangle 108.png",
    "Rectangle 109.png",
    "Rectangle 110.png",
    "Dept of Environment & Remote Sensing_j&k.png",

  ], []);

  // Carousel settings
  const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
  nextArrow: (
    <div style={{ color: 'green', fontSize: '30px', padding: '10px' }}>
      {/* Customize the arrow icon */}
      &gt;
    </div>
  ),
  prevArrow: (
    <div style={{ color: 'red', fontSize: '30px', padding: '10px' }}>
      {/* Customize the arrow icon */}
      &lt;
    </div>
  ),
};

  // Event handlers
  const toggleDrawer = useCallback((open: boolean) => () => {
    setDrawerOpen(open);
  }, []);

  const handleFormChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: '' }));
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be between 10 and 15 digits.';
    }
    
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (): Promise<void> => {
    if (validateForm()) {
      setLoading(true);
      setResponseMessage('');
      setResponseError('');

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setResponseMessage('Your query has been submitted successfully.');
        setFormData(initialFormData);
      } catch (error) {
        setResponseError('Error submitting form. Please try again.');
      } finally {
        setLoading(false);
        setTimeout(() => {
          setResponseMessage('');
          setResponseError('');
        }, 3000);
      }
    }
  }, [formData, validateForm]);

  const scrollToSection = useCallback(() => {
    const element = document.getElementById('scroll-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Banner Section */}
      <BannerSection>
        <ScrollIndicator onClick={scrollToSection}>
          SCROLL
        </ScrollIndicator>
        
        <BannerContent>
          <Fade in timeout={1000}>
          <Typography
  variant="h4"
  sx={{
    fontWeight: 700,
    fontSize: { xs: '1.2rem', md: '1.6rem', lg: '2.5rem' },
    color: 'white',
    textAlign: { xs: 'center', md: 'left' },
    lineHeight: 1.4,
    marginTop: { xs: '-70px', sm:'-180px',md: '100px' },
    textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
    maxWidth: '800px',
    mb: { xs: 0, md: -14 },
  }}
>
  <strong>
    We restore the degraded landscapes for sustainable living and thriving businesses
  </strong>
</Typography>



          </Fade>


          {/* Step Image Carousel */}
         {isLargeScreen ? (
      <Box sx={{ mb: 4 }}>
        <StepImageCarousel />
      </Box>
    ) : (
      <Box sx={{ mb: -80, display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src="https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/home_icons_new/5_steps_vertical1.svg"
          alt="5 Steps Vertical"
          sx={{
            width: "100%",
            maxWidth: 320,
          }}
        />
      </Box>
    )}

 {/* <AppBar position="static" sx={{ backgroundColor: '#222' }}>
          <Toolbar>
            <Typography variant="h6" color="inherit">My Website Header</Typography>
          </Toolbar>
        </AppBar> */}
          <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', marginTop: isMobile ? '700px' : '200px',marginBottom: isMobile ?'-190px':'100px'}}>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <ActionButton
                onClick={() => navigate('/contactUs')}
                variant="outlined"
                sx={{
                  color: 'white',
                  height:'50px',
                  background: 'green',
                  borderRadius:'0px',
                  '&:hover': {
                    background: 'white',
                    borderColor: 'white',
                    color:'green',
                    
                  },
                }}
              >
                Contact Us
              </ActionButton>
              <ActionButton
                onClick={toggleDrawer(true)}
                variant="outlined"
                sx={{
                  color: 'white',
                  height:'50px',
                  background: 'green',
                  borderRadius:'0px',
                  '&:hover': {
                    background: 'white',
                    borderColor: 'white',
                    color:'green',
                  },
                }}
              >
                Send Your Request
              </ActionButton>
            </Box>
          </Box>
        </BannerContent>
      </BannerSection>

      {/* Contact Form Drawer */}
            <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: { xs: '90vw', sm: '500px' }, maxWidth: '500px' } }}
      >
        <Box sx={{ p: 3, position: 'relative' }}>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#333', textAlign: 'center' }}>
            Query/Requirement
          </Typography>

          <Grid container spacing={2}>
            {Object.keys(formData).map((field) => (
              <Grid item xs={12} key={field}>
                <TextField
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={formData[field]}
                  onChange={handleFormChange}
                  fullWidth
                  required
                  multiline={field === 'query'}
                  rows={field === 'query' ? 4 : 1}
                  error={!!formErrors[field]}
                  helperText={formErrors[field]}
                />
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
            fullWidth
            sx={{ mt: 3 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
          </Button>

          {responseMessage && (
            <Typography variant="body2" sx={{ color: 'green', mt: 2, textAlign: 'center' }}>{responseMessage}</Typography>
          )}

          {responseError && (
            <Typography variant="body2" sx={{ color: 'red', mt: 2, textAlign: 'center' }}>{responseError}</Typography>
          )}
        </Box>
      </Drawer>
      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 8 }} id="scroll-section">
        {/* Who Are We Section */}
        <Slide direction="up" in timeout={1000}>
          <Box>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'rgb(189,3,36)', fontSize: '20px' }}>
  <strong>Who Are We</strong>
</Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: '#666',
                lineHeight: 1.8,
                maxWidth: '2000px',
                mx: 'auto',
                mb: 6,
              }}
            >
              At GCRS, we stand at the forefront of innovation and expertise, dedicated to tackling the complex challenges of environmental sustainability. Our expert team not only offers exceptional consultancy and advisory services but also develops cutting-edge solutions and tools tailored to the unique needs of our diverse clientele. This includes government bodies, corporations, academic and research institutions, and a range of organisations committed to global sustainability, such as multi-lateral and bilateral funding partners, donor agencies, and non-governmental organisations.
            </Typography>
          </Box>
        </Slide>

        {/* Our Approach Section */}
       <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 4,
          color: 'rgb(189,3,36)',
          fontSize: '20px',
        }}
      >
        <strong>Our Approach</strong>
      </Typography>

      <Grid
        container
        spacing={isMobile ? 4 : 2}
        sx={{
          mb: 10,
          justifyContent: 'center',
          pl: { xs: 0, sm: 5, md: 10 },
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Fade in timeout={1000 + index * 200}>
              <Box
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    color: '#666',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ffebee 0%,#bd0324 100%)',
                      color: 'white',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: hoveredService === index ? '#d32f2f' : '#333',
                    mb: 1,
                    fontSize: '14px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>

        {/* Updates/News Section */}
<Typography
  variant="h4"
  sx={{
    textAlign: 'center',
    mb: 4,
    color: 'rgb(189,3,36)',
    fontSize: {
      xs: '18px',
      sm: '20px',
      md: '22px',
      lg: '24px',
      xl: '26px',
    },
  }}
>
  <strong>Updates/News</strong>
</Typography>

<CarouselContainer>
  <Slider {...carouselSettings}>
    {newsItems.map((item, index) => (
      <Box key={index} sx={{ px: { xs: 2, sm: 2 }, py: { xs: 2, sm: 2 } }}>
        <NewsCard
          sx={{
            minHeight: {
              xs: 350,
              sm: 370,
              md: 380,
              lg: 420,
              xl: 450,
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <CardContent
            sx={{
              p: { xs: 2, sm: 4, md: 5, lg: 6, xl: 6 },
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Box
              sx={{
                flex: '0 0 auto',
                width: {
                  xs: '100%',
                  sm: '40%',
                  md: '35%',
                  lg: '30%',
                  xl: '30%',
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 2, sm: 0 },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={`news-${index}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: {
                    xs: 220,
                    sm: 240,
                    md: 260,
                    lg: 280,
                    xl: 300,
                  },
                  objectFit: 'cover',
                  borderRadius: 1,
                }}
              />
            </Box>

            <Box
              sx={{
                width: {
                  xs: '100%',
                  sm: '60%',
                  md: '65%',
                  lg: '70%',
                  xl: '70%',
                },
                px: {
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 4,
                  xl: 5,
                },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'black',
                  lineHeight: 1.6,
                  fontSize: {
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.05rem',
                    lg: '1.1rem',
                    xl: '1.15rem',
                  },
                  textAlign: 'center',
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </CardContent>
        </NewsCard>
      </Box>
    ))}
  </Slider>
</CarouselContainer>



        {/* Partners Section */}
 <Box sx={{ mt: 8 }}>
  <Typography
    variant="h4"
    sx={{
      textAlign: 'center',
      mb: 4,
      color: 'rgb(189,3,36)',
      fontSize: '20px',
      fontWeight: 'bold',
    }}
  >
    Partners & Investors
  </Typography>

  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 3,
      maxWidth: '1200px',
      margin: '0 auto',
      mb: 6,
    }}
  >
    {clients.slice(0, 15).map((path, index) => (
      <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={require(`../../src/assets/gcrs_images/client/${path}`)}
          alt={`Client ${index + 1}`}
          style={{ maxWidth: '100%', maxHeight: '100px', objectFit: 'contain' }}
        />
      </Box>
    ))}
  </Box>

          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'rgb(189,3,36)', fontSize: '20px' }}>
  <strong>Clients</strong>
</Typography>

<Grid container spacing={2} justifyContent="center" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
  {partnerLogos.map((path, index) => (
    <Grid item key={index} xs={6} sm={4} md={2}>
      <img
        src={require(`../../src/assets/Clients/${path}`)}
        alt={`Client ${index + 1}`}
        style={{ width: "80%", marginBottom: "1.5rem" }}
      />
    </Grid>
  ))}
</Grid>

        </Box>
      </Container>

      {/* Scroll to Top Button */}
     
    </Box> 
  );
};

export default App;