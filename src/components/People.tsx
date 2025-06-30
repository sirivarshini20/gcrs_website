import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LinkedIn as LinkedInIcon } from "@mui/icons-material";
import JasmineImage from "../../src/assets/gcrs_images/team/jasmine.png";
import BhaskarImage from "../../src/assets/gcrs_images/team/Bhaskar_Veluri.png";
import SnehaImage from "../../src/assets/gcrs_images/team/sneha_2.png";
import KarthikImage from "../../src/assets/gcrs_images/team/karthikk.png";
import BalaImage from "../../src/assets/gcrs_images/team/Bhala2.png";
import AdityaImage from "../../src/assets/gcrs_images/team/Adithya.png";
import SahilImage from "../../src/assets/gcrs_images/team/Sahel.png";
import VamsiImage from "../../src/assets/gcrs_images/team/vamsi.png";
import YoshithaImage from "../../src/assets/gcrs_images/team/yoshithak.png";
import AnanthaImage from "../../src/assets/gcrs_images/team/Ananth.png";
import likithaImage from "../../src/assets/gcrs_images/team/likithad.png";
import NeeharikaImage from "../../src/assets/gcrs_images/team/Neeharika.png";
import SovagyaImage from "../../src/assets/gcrs_images/team/Panda.png";
import PujithaImage from "../../src/assets/gcrs_images/team/poojitha.png";
import LohithImage from "../../src/assets/gcrs_images/team/lohith.png";
import MishabImage from "../../src/assets/gcrs_images/team/mishab.png";
import SwatiImage from "../../src/assets/gcrs_images/team/Swathi.png";
import AnishaImage from "../../src/assets/gcrs_images/team/Anisha.png";
import ShivaniImage from "../../src/assets/gcrs_images/team/shivani.png";
import AnandImage from "../../src/assets/gcrs_images/team/anand.png";
import RevathiImage from "../../src/assets/gcrs_images/team/revathi.png";
import SiriImage from "../../src/assets/gcrs_images/team/Sirivarshini.png";
import SaisreeImage from "../../src/assets/gcrs_images/team/SaiSree.png";
import SafvaImage from "../../src/assets/gcrs_images/team/SafvaMujeeb.png";
import AflahaImage from "../../src/assets/gcrs_images/team/Aflaha.png";
import DileepImage from "../../src/assets/gcrs_images/team/Dileep.png";
import RenukaImage from "../../src/assets/gcrs_images/team/Renuka.png";
import NiranganaImage from "../../src/assets/gcrs_images/team/Niranjana.png";

interface TeamMember {
  name: string;
  position: string;
  imageSrc: string | string[];
  linkedinUrl: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ name, position, imageSrc, linkedinUrl }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Handle both string and array image sources
  const imageUrl = Array.isArray(imageSrc) ? imageSrc[0] : imageSrc;

  return (
    <Fade in timeout={800}>
      <Card
        sx={{
          position: 'relative',
          display: 'inline-block',
          width: 228,
          height: 270,
          mr: isMobile ? 0 : 2.5,
          mb: 2,
          cursor: 'pointer',
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            '& .overlay': {
              opacity: 1,
            },
            '& .linkedin-icon': {
              display: 'block',
            },
          },
        }}
      >
        <CardMedia
          component="img"
          height="270"
          image={imageUrl}
          alt={name}
          sx={{
            objectFit: 'cover',
          }}
        />
        
        {/* LinkedIn Icon */}
        <IconButton
          className="linkedin-icon"
          component="a"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            display: 'none',
            color: '#0077b5',
            '&:hover': {
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: 20 }} />
        </IconButton>

        {/* Overlay */}
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
            color: 'white',
            p: 1.25,
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'start',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              m: 0,
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              m: 0,
              fontSize: '0.8rem',
              opacity: 0.9,
            }}
          >
            {position}
          </Typography>
        </Box>
      </Card>
    </Fade>
  );
};

const SectionHeading: React.FC<{ children: React.ReactNode; marginLeft?: number }> = ({ 
  children, 
  marginLeft = 0 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Box
      sx={{
        fontSize: 19,
        display: 'flex',
        alignItems: 'center',
        margin: isMobile ? '20px' : '39px',
        marginLeft: isMobile ? '20px' : "${marginLeft}px",
        minWidth: isMobile ? 'auto' : 200,
        height: isMobile ? 'auto' : 270,
        justifyContent: isMobile ? 'center' : 'flex-start',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: 'text.primary',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

const directors: TeamMember[] = [
  {
    name: " Prasad Babu G",
    position: "Founder and CEO",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/prasad_babu.png",
    linkedinUrl: "https://www.linkedin.com/in/prasad-babu-627a3924/",
  },
  {
    name: "Suraj Nanneti",
    position: "Chief Business Officer",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/suraj.png",
    linkedinUrl: "https://www.linkedin.com/in/nannetisuraj",
  },
  {
    name: "Manoj G",
    position: "Chief Technology Officer",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/manoj.png",
    linkedinUrl: "https://www.linkedin.com/in/manoj-gummadi-3870b148/",
  },
  {
    name: "Jasmine G",
    position: "Director - Business Development",
    imageSrc: JasmineImage, // Placeholder since require() won't work
    linkedinUrl: "https://www.linkedin.com/in/jasmine-g-4635b3169/",
  },
];


const nextLeadRow: TeamMember[] = [
  {
    name: "Daniel Sananth. P",
    position: "Hydrogeologist",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Sananth.png",
    linkedinUrl: "https://in.linkedin.com/in/daniel-sananth-573102187",
  },
  {
    name: "Dr. Suneel Kumar Joshi",
    position: "Director - Landscape Restoration Projects",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Suneel Kumar Joshi.png",
    linkedinUrl: "https://www.linkedin.com/in/dr-suneel-kumar-joshi-51631916/",
  },
  {
    name: "Dr. Fakira Bastia",
    position: "Environmental Geochemist",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Fakira Bastia.png",
    linkedinUrl: "https://www.linkedin.com/in/dr-fakir-bastia-884b01155/",
  },
  {
    name: "Priyanka Khanna",
    position: "Water Resources Management Expert",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/priyanka2.png",
    linkedinUrl: "https://www.linkedin.com/in/priyanka-khanna-b6684932/",
  },
];

const advisors: TeamMember[] = [
  {
    name: "Dr. Rajiv Sinha",
    position: "Professor Department of Earth Sciences IIT Kanpur",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Rajiv Sinha.png",
    linkedinUrl: "https://www.linkedin.com/in/rajiv-sinha-a87a68b2/",
  },
  {
    name: "Dr. CBS Dutt",
    position: "Fmr. Scientist-H at National Remote Sensing Center of ISRO",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/CBS Dutt.png",
    linkedinUrl:
      "https://www.linkedin.com/in/dr-cbs-dutt-a4365bb6/?originalSubdomain=in",
  },
  {
    name: 'Sai Bhaskar Veluri',
    position: 'Technical Advisor',
    imageSrc: BhaskarImage, // Placeholder
    linkedinUrl: 'https://www.linkedin.com/in/sai-bhaskar-veluri-910a4535/',
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Adithya Ajikumar",
    position: "GIS Developer",
    imageSrc: AdityaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/adithya-ajikumar-aba590218",
  },
  {
    name: " Blessy Thanmayi CH",
    position: "Water Sector Analyst",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/blessy.png",
    linkedinUrl: "https://www.linkedin.com/in/blessy-thanmayi-77501a252/",
  },
  {
    name: "Danesh N",
    position: "Water Sector Analyst",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Dhanesh.png",
    linkedinUrl: "https://www.linkedin.com/in/nandupillidanesh",
  },
  {
    name: "Deepti Gumber Bhatnagar",
    position: "Environment & DRR Expert",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Deepthi.png",
    linkedinUrl: "https://www.linkedin.com/in/dgumber/",
  },
];

const teamFirstRow: TeamMember[] = [
  {
    name: "Dr. Jyoti",
    position: "Hydrogeologist & Water Resources Expert",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Jyothi Chowdary.png",
    linkedinUrl: "https://www.linkedin.com/in/jyoti-chaudhary-027a9165/",
  },
  {
    name: " Nagamani K",
    position: "HR Generalist",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Nagamani.png",
    linkedinUrl: "https://www.linkedin.com/in/mani-gompa-a65256257/",
  },
  {
    name: " Latha K",
    position: "Web & Mobile Application Developer",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/lathaa.png",
    linkedinUrl: "https://www.linkedin.com/in/latha-kumpatla-912188228/",
  },
  {
    name: "Niten Giri",
    position: "Hydrogeologist",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Niten Giri.png",
    linkedinUrl: "https://www.linkedin.com/in/niten-giri-b531b648/",
  },
];

const teamSecondRow: TeamMember[] = [
  {
    name: "Praveen Kumar p",
    position: "GIS Analyst",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/praveenkumar.png",
    linkedinUrl: "http://www.linkedin.com/in/praveen-kumar-pallapati",
  },
  {
    name: "Ahammed Sahil Shajahan",
    position: "GIS Developer",
    imageSrc: SahilImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/ahammed-sahil-36126a229/",
  },
  {
    name: "Sailendra Raju M",
    position: "GIS Analyst",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/shailendra.png",
    linkedinUrl: "https://www.linkedin.com/in/sailendra-raju-meruga-45107b24a",
  },
  {
    name: "Saloni Ranka",
    position: "GIS & Water Resources Analyst",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Saloni Ranka.png",
    linkedinUrl: "https://www.linkedin.com/in/saloni-ranka-335b42186",
  },
];

const teamThirdRow: TeamMember[] = [
  {
    name: "Sreenivas Bandapu",
    position: "GIS Developer",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Sreenivas B.png",
    linkedinUrl: "https://www.linkedin.com/in/sreenivas-bandapu-339a49242/",
  },
  {
    name: "Vaishnavi Sayam",
    position: "Water Sector Analyst",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Vaishnavi.png",
    linkedinUrl: "https://www.linkedin.com/in/sayam-vaishnavi-13528b188/",
  },
  {
    name: "Vamsi Balivada",
    position: "UI/UX Designer ",
    imageSrc: VamsiImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/vamsi-balivada-720256226",
  },
  {
    name: " Naga Pavan Kumar Raja J",
    position: "GIS Analyst ",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/pavan.png",
    linkedinUrl: "https://www.linkedin.com/in/naga-pavan-2ba17b290",
  },
];

const teamFourthRow: TeamMember[] = [
  {
    name: "Yoshitha K",
    position: "GIS Analyst",
    imageSrc: YoshithaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/yoshitha-kandregula-4075a31a9",
  },
  {
    name: "Radhitya N",
    position: "GIS Analyst",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/raditya.png",
    linkedinUrl: "https://www.linkedin.com/in/naredla-radhitya-1574351b3/",
  },
  {
    name: "Rajat Sachan",
    position: "Hydrogeologist",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/rajat.png",
    linkedinUrl: "https://www.linkedin.com/in/rajat-sachan-216852185",
  },
  {
    name: "Anantha Rao",
    position: "Water Sector Analyst",
    imageSrc: AnanthaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/anantha-rao-metta-401035235/",
  },
];

const teamFifthRow: TeamMember[] = [
  {
    name: "Likitha D",
    position: "GIS Analyst",
    imageSrc: likithaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/likhitha-murthy-143a42286",
  },
  {
    name: "Yathisha B",
    position: "GIS Analyst",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/yathisha.png",
    linkedinUrl: "https://www.linkedin.com/in/yathisha-buddha-3b2715227",
  },
  {
    name: "Neeharika Chauhan",
    position: "Disaster Management",
    imageSrc: NeeharikaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/neeharika-chauhan-308452264",
  },
  {
    name: "Souvagya Ranjan Panda",
    position: "Hydrogeologist",
    imageSrc: SovagyaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/souvagyarp",
  },
];

const teamSixthRow: TeamMember[] = [
  {
    name: "Pujitha Sunkana",
    position: "Jr. GIS Developer",
    imageSrc: PujithaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/pujitha-sunkana-a58bb6256",
  },
  {
    name: "Reddy Lohitkumar",
    position: "UI/UX Designer",
    imageSrc: LohithImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/lohitkumarreddy/",
  },
  {
    name: "Mishab M",
    position: "Hydrogeologist & Groundwater Modeller",
    imageSrc: MishabImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/mishab-m-939204197/",
  },
  {
    name: "Swati Singh",
    position: "Landscape Restoration Analyst",
    imageSrc: SwatiImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/swatiisiingh",
  },
];

const teamSeventhRow: TeamMember[] = [
  {
    name: "Karthik EswarBabu M",
    position: "Team Lead - Water Sector Analyst",
    imageSrc: KarthikImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/karthik-eswar-8a942a230",
  },
  {
    name: "Balasubramaniyan",
    position: "Team Lead - Groundwater Modelling & Hydrogeologist",
    imageSrc: BalaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/balasubramaniyan-k-03012113b/",
  },
];

const teamEighthRow: TeamMember[] = [
  {
    name: "Anisha Garud",
    position: "GIS Analyst",
    imageSrc: AnishaImage, // Placeholder
    linkedinUrl: "https://in.linkedin.com/in/anisha-garud-596168353",
  },
  {
    name: "Shivani A",
    position: "Jr. GIS Developer",
    imageSrc: ShivaniImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/a-shivani-951204249",
  },
  {
    name: "Anand Sarma A",
    position: "Jr. GIS Developer",
    imageSrc: AnandImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/anand-sarma/",
  },
];

const team9thRow: TeamMember[] = [
  {
    name: "Revathi Kakinada",
    position: "Software Engineer Intern",
    imageSrc: RevathiImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/revathi-kakinada-906b90267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Siri varshini Dunaboyina",
    position: "Software Engineer Intern",
    imageSrc: SiriImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/siri-varshini-496635255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Saisree B",
    position: "Software Engineer Intern",
    imageSrc: SaisreeImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/baviri-saisree-4908a2257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Safva Mujeeb V",
    position: "GIS Analyst Intern",
    imageSrc: SafvaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/safvamujeeb",
  },
];

const team10thRow: TeamMember[] = [
  {
    name: "Aflaha Hussain",
    position: "GIS Analyst Intern",
    imageSrc: AflahaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/aflahahussain",
  },
  {
    name: "Dileep Kumar Rambarki",
    position: "Software Engineer Intern",
    imageSrc: DileepImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/dileepkumarrambarki?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  // {
  //   name: "Devika Anala",
  //   position: "Software Engineer Intern",
  //   imageSrc: "https://via.placeholder.com/228x270?text=Devika", // Placeholder
  //   linkedinUrl: "https://www.linkedin.com/in/devika-anala-106246341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  // },
  {
    name: "Renuka Veeramalla",
    position: "GIS Intern",
    imageSrc: RenukaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/renuka-veeramalla-1b630b310",
  },
];

const team12thRow: TeamMember[] = [
  {
    name: "Niranjana Joy M",
    position: "Hydrogeologist & Groundwater Modelling Associate Intern",
    imageSrc: NiranganaImage, // Placeholder
    linkedinUrl: "https://www.linkedin.com/in/niranjana-joy-m-032855298",
  },
];

const teamLeads: TeamMember[] = [
  {
    name: " Jaya Surya S",
    position: "Team Lead - GIS Applications",
    imageSrc: "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/Jaya Surya.png",
    linkedinUrl: "https://www.linkedin.com/in/sjsurya",
  },
  {
    name: "Sri Siva Madhuri P",
    position: " Team Lead - Remote Sensing & GIS ",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/madhurii.png",
    linkedinUrl:
      "https://www.linkedin.com/in/pukkella-sri-siva-madhuri-7636771aa",
  },
  {
    name: " Siva Sneha Jyothi P",
    position: " Team Lead - Remote Sensing & GIS ",
    imageSrc: SnehaImage, // Placeholder
    linkedinUrl:
      "https://www.linkedin.com/in/siva-sneha-jyothi-pallaprolu-41175712a",
  },
  {
    name: "Dharma Raj T",
    position: "Team Lead - Landscape Screening Expert",
    imageSrc:
      "https://d357a0xuzx4dll.cloudfront.net/gcrs-website/gcrs_images/team/dharma.png",
    linkedinUrl: "https://www.linkedin.com/in/itsdharmaraj",
  },
];

const People: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        textAlign: 'start',
        pt: { xs: '170px', sm: '180px' },
        pl: { xs: '30px', md: '180px' },
        pr: { xs: '30px', md: '40px' },
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h4"
        sx={{
          color: '#bd0324',
          fontSize: 24,
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        Our Team
      </Typography>
      
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: 20, md: 30 },
          fontWeight: 'bold',
          width: { xs: '100%', md: '80%' },
          mb: 4,
          lineHeight: 1.4,
        }}
      >
        GCRS derives its strength from a pool of highly experienced human
        resources with in-depth knowledge on issues related to environment &
        sustainability, and from diverse geographies, creeds & cultures
      </Typography>

      {/* Key Leadership Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          mb: 4,
        }}
      >
        <SectionHeading marginLeft={39}>Key Leadership</SectionHeading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {directors.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </Box>
      </Box>

      {/* Next Lead Row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: 'wrap',
          gap: 1,
          ml: { xs:19,sm:20, md: '280px' },
          mb: 4,
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        {nextLeadRow.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </Box>

      {/* Advisors Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          mb: 4,
        }}
      >
        <SectionHeading marginLeft={30}>Advisors</SectionHeading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {advisors.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </Box>
      </Box>

      {/* Team Leads Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          mb: 4,
        }}
      >
        <SectionHeading marginLeft={30}>Team Leads</SectionHeading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {teamLeads.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </Box>
      </Box>

      {/* Team Seventh Row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: 'wrap',
          gap: 1,
          ml:  { xs: 19,sm:20, md: '280px' },
          mb: 4,
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        {teamSeventhRow.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </Box>

      {/* Team Members Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          mb: 4,
        }}
      >
        <SectionHeading marginLeft={82}>Team</SectionHeading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </Box>
      </Box>

      {/* All Team Rows */}
      {[teamFirstRow, teamSecondRow, teamThirdRow, teamFourthRow, teamFifthRow, teamSixthRow, teamEighthRow].map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            gap: 1,
            ml: { xs: 19,sm:20, md: '280px' },
            mb: 4,
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          {row.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </Box>
      ))}

      {/* Interns Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          mb: 4,
        }}
      >
        <SectionHeading marginLeft={65}>Interns</SectionHeading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {team9thRow.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </Box>
      </Box>

      {/* Intern Rows */}
      {[team10thRow, team12thRow].map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            gap: 1,
            ml: { xs: 19,sm:20, md: '280px' },
            mb: 4,
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          {row.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </Box>
      ))}
    </Container>
  );
};

export default People;