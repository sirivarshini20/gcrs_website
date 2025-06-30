import React from "react";
import {
  Box,
  Typography,
  Link,
  useMediaQuery,
  Stack,
  useTheme,
} from "@mui/material";

interface RandDProps {
  activeTab: string;
}

const RandD: React.FC<RandDProps> = ({ activeTab }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isKnowledgeSupport = activeTab === "Knowledge-support";
  const isResearchPartnerships = activeTab === "Research-partnerships";
  const isResearchProjects = activeTab === "Research-projects";
  const isResearchPublications = activeTab === "Research-publications";

  return (
    <Box
      sx={{
        px: { xs: 2, md: 4 },
        pt: { xs: 3, md: 4 },
        pb: 4,
        mt: { xs: 2, md: -8 },
        ml: { xs: 0, md: -32 },
        width: "100%",
        maxWidth: "1000px",
        mx: "auto",
      }}
    >
      {isKnowledgeSupport && (
        <>
          <Typography variant="h5" gutterBottom>
            Knowledge Support
          </Typography>
          <Typography fontSize={14} paragraph>
            Recognizing the extensive engagement with industry and the profound
            institutional knowledge within our organization, we possess valuable
            insights that contribute significantly to the broader industry. To
            disseminate these insights, we operate a dedicated program that
            involves funding and coordination.
          </Typography>
          <Typography fontSize={14} paragraph>
            Our approach includes sharing knowledge through a variety of
            channels, such as popular and technical publications, digital tools,
            and strategic partnerships with key industry figures. Additionally,
            we host monthly information sessions, inviting industry leaders for
            discussions and debates within our organization.
          </Typography>
          <Typography fontSize={14} paragraph>
            Our commitment to knowledge dissemination is reflected in the
            targets set by our board, making it a crucial metric for measuring
            both individual and group performance. Notably, our recent articles
            have found their place in industry journals, newsletters, scientific
            publications, and across our social media platforms.
          </Typography>
        </>
      )}

      {isResearchPartnerships && (
        <>
          <Typography variant="h5" gutterBottom>
            Research Partnerships
          </Typography>
          <Typography fontSize={14} paragraph>
            Active involvement in research is integral to our mission. It
            ensures that our staff, spanning all sectors of the organization,
            are exposed to the latest and most innovative ideas. Simultaneously,
            it enables researchers to synchronize and implement projects
            tailored to the specific requirements of managers and policymakers.
          </Typography>
          <Typography fontSize={14} paragraph>
            We foster this engagement through diverse channels, such as
            authoring research papers, offering assistance to staff interested
            in research, co-supervising students, welcoming research interns,
            and allocating resources to support our research priorities.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            mt={3}
          >
            <Box
              component="img"
              src={require("../../src/assets/gcrs_images/RandD_icons/mekorot.png")}
              alt="mekorot"
              sx={{ height: 100, maxWidth: "100%", objectFit: "contain" }}
            />
            <Box
              component="img"
              src={require("../../src/assets/gcrs_images/RandD_icons/IIT_Kanpur_Logo 1.png")}
              alt="IIT Kanpur"
              sx={{ height: 100, maxWidth: "100%", objectFit: "contain" }}
            />
          </Stack>
        </>
      )}

      {isResearchProjects && (
        <>
          <Typography variant="h5" gutterBottom>
            Research Projects
          </Typography>

          <Typography fontSize={18} fontWeight="bold" mt={3}>
            Advanced Geo-Hazard Assessment for Hydrocarbon Pipeline Integrity
          </Typography>
          <Typography fontSize={14} paragraph>
            At the core of our proficiency lies in the realm of stream
            restoration and channel design, where our achievements are rooted in
            a collaborative partnership with nature. By deeply understanding the
            evolutionary trajectory of stream systems, we formulate solutions
            that seamlessly integrate with natural processes. This approach
            results in streamlined designs that not only adhere to the
            principles of efficiency but also yield the desired outcomes.
          </Typography>
          <Link
            href="https://pngrb.gov.in/pdf/press-note/GAIL15062022/GHHP.pdf"
            target="_blank"
            underline="hover"
          >
            GAIL Geo-Hazard Report
          </Link>

          <Typography fontSize={18} fontWeight="bold" mt={4}>
            Climate Resilience in Tea Production
          </Typography>
          <Typography fontSize={14} paragraph>
            This research project, a collaborative effort between Fairtrade NAPP
            and Geo Climate Risk Solutions, delves into the climate change
            impacts and greenhouse gas emissions in four key Indian tea estates.
            Employing a blend of field data, analytical tools, and climate
            modeling, the initiative seeks to understand and mitigate the
            environmental challenges faced by the tea sector. The project's
            findings are instrumental in shaping sustainable tea cultivation
            practices, emphasizing carbon management and climate adaptation
            strategies.
          </Typography>
          <Link
            href="https://www.fairtradenapp.org/collaboration-with-geo-climate-risk-solutions-pvt-ltd-climate-change-impact-and-ghg-emissions-in-4-tea-estates-and-providing-recommendations-for-adaptation-and-mitigation/"
            target="_blank"
            underline="hover"
          >
            Tea Resilience Research Link
          </Link>
        </>
      )}

      {isResearchPublications && (
        <>
          <Typography variant="h5" gutterBottom>
            Research Publications
          </Typography>

          {(
            [
              {
                text: "Joshi, S.K., Swarnkar, S., Shukla, S. et al. Snow/Ice Melt, Precipitation, and Groundwater Contribute to the Sutlej River System.",
                link: "https://link.springer.com/article/10.1007/s11270-023-06744-4#citeas",
              },
              {
                text: "Hamidi, M.D., Gröcke, D.R., Joshi, S.K. and Greenwell, H.C., 2023. Investigating groundwater recharge using hydrogen and oxygen stable isotopes in Kabul city, a semi-arid region. Journal of Hydrology.",
                link: "https://www.sciencedirect.com/science/article/pii/S0022169423011290",
              },
              {
                text: "Joshi, S.K., Kumar, S., Sinha, R., Rai, S.P., Khobragade, S. and Rao, M.S., 2023. Identifying moisture transport pathways for north‐west India. Geological Journal.",
                link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/gj.4759",
              },
              {
                text: "Beg, Z., Joshi, S.K., Singh, D., Kumar, S. and Gaurav, K., 2022. Surface water and groundwater interaction in the Kosi River alluvial fan. Environmental Monitoring and Assessment.",
                link: "https://link.springer.com/article/10.1007/s10661-022-10192-8",
              },
              {
                text: "Swarnkar, S., Prakash, S., Joshi, S.K. and Sinha, R., 2021. Spatio-temporal rainfall trends in the Ganga River basin over the last century. Hydrological Sciences Journal.",
                link: "https://www.tandfonline.com/doi/abs/10.1080/02626667.2021.1976783",
              },
              {
                text: "Joshi, S.K. and Gautam, S., 2021. Understanding spatio-temporal variability of groundwater level changes in India using hydrogeological and GIS techniques. CRC Press.",
                link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003140382-13",
              },
            ]
          ).map((pub, idx) => (
            <Box key={idx} mt={idx === 0 ? 3 : 2}>
              <Typography fontSize={14} paragraph>{pub.text}</Typography>
              <Link href={pub.link} target="_blank" underline="hover">
                {pub.link}
              </Link>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default RandD;