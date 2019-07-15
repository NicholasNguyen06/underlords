import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import HeroCard from "../components/herocard";
import HeroList from "../components/herolist";
import data from "../static/data/heroes.json";
import fetch from "isomorphic-unfetch";

const Home = props => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">UL Tooltip</h1>
    </div>
    <Grid container>
      <HeroList heroes={data} />
    </Grid>
    <div>{console.log(props.user)}</div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async function(context) {
  const id = 1;
  const res = await fetch(`http://127.0.0.1:3001/users/1`);
  const user = await res.json();

  console.log(user);

  return { user };
};

export default Home;
