import Link from "next/link";
import { useRouter } from "next/router";

import { makeStyles } from "@mui/material/styles";

import { Container, Grid, Typography } from "@mui/material";

import { routes } from "../data/routes";
import Social from "./social";
const useStyles = theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 ",
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
});

const Footer = (props) => {
  const { classes } = props;
  const path = routes;
  const router = useRouter();
  return (
    <footer className={props.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              {/* <Link href={link}>
                <Typography
                  className={classes.link}
                  style={{
                    fontWeight: router.pathname === link && "bold",
                    borderBottom:
                      router.pathname === link && "1px solid #757ce8",
                  }}
                >
                  {name}
                </Typography>
              </Link> */}
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>
          <Social props={"red"}/>
        </Grid>
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="https://satoruakiyama.com"
          justifyContent="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={props.copylight}>
            &copy;Sushil Gautam
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;