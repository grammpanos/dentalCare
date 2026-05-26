import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useTranslation } from "../i18n/useTranslation";

export default function FAQSection() {
  const t = useTranslation();

  return (
    <Box
      component="section"
      id="faq"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="overline"
            sx={{
              color: "secondary.dark",
              letterSpacing: "0.28em",
              fontSize: "0.68rem",
              mb: 2,
              display: "block",
            }}
          >
            {t.faq.subtitle}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem" },
              fontWeight: 400,
              color: "text.primary",
            }}
          >
            {t.faq.title}
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gap: 1 }}>
          {t.faq.items.map((item) => (
            <Accordion
              key={item.question}
              sx={{
                boxShadow: "none",
                border: "1px solid rgba(26,22,18,0.1)",
                borderRadius: "3px !important",
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                  borderColor: "rgba(26,22,18,0.2)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ fontSize: 18, opacity: 0.6 }} />}
                sx={{ px: 3, py: 0.5 }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "text.primary",
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pt: 0, pb: 2.5 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.85 }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
