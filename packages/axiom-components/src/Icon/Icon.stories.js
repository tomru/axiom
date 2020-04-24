import React from "react";
import Icon from "./Icon";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import iconNames from "./iconNames";

export default {
  title: "Components/Icon",
  component: Icon,
};

export function All() {
  return (
    <Grid responsive={false}>
      {iconNames.map((name) => (
        <GridCell key={name} width={25}>
          <Grid gutters="tiny" none responsive={false} verticalAlign="middle">
            <GridCell>
              <Icon name={name} />
            </GridCell>

            <GridCell>{name}</GridCell>
          </Grid>
        </GridCell>
      ))}
    </Grid>
  );
}

const socailIcons = [
  "twitter",
  "facebook",
  "instagram",
  "reddit",
  "pinterest",
  "youtube",
  "qq",
  "tumblr",
  "4chan",
  "sina-weibo",
  "lexis-nexis",
];

export function Social() {
  return (
    <Grid responsive={false}>
      {socailIcons.map((name) => (
        <GridCell key={name} width={25}>
          <Grid gutters="tiny" none responsive={false} verticalAlign="middle">
            <GridCell>
              <Icon name={name} />
            </GridCell>

            <GridCell>{name}</GridCell>
          </Grid>
        </GridCell>
      ))}
    </Grid>
  );
}
const socailIconsMono = [
  "twitter-mono",
  "facebook-mono",
  "instagram-mono",
  "reddit-mono",
  "pinterest-mono",
  "youtube-mono",
  "qq-mono",
  "tumblr-mono",
  "4chan-mono",
  "sina-weibo-mono",
  "lexis-nexis-mono",
];

export function SocialMono() {
  return (
    <Grid responsive={false}>
      {socailIconsMono.map((name) => (
        <GridCell key={name} width={25}>
          <Grid gutters="tiny" none responsive={false} verticalAlign="middle">
            <GridCell>
              <Icon name={name} />
            </GridCell>

            <GridCell>{name}</GridCell>
          </Grid>
        </GridCell>
      ))}
    </Grid>
  );
}
