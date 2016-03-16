import React, { PropTypes, Component } from 'react';
import { Grid, GridCell } from '../../';
import { Icon } from '../../';

export default class LayoutFooter extends Component {
  render() {
    const { children } = this.props;
    const socials = [
      { icon: 'linkedin', link: 'http://www.linkedin.com/company/brandwatch' },
      { icon: 'google-plus' },
      { icon: 'pinterest-p' },
      { icon: 'instagram' },
      { icon: 'twitter' },
      { icon: 'facebook' },
      { icon: 'youtube' },
      { icon: 'slideshare' },
    ];


    return (
      <div className="ax-layout__footer">
        <Grid hAlign="center" responsive={false}>
          {socials.map((social, index) =>
            <GridCell key={index} shrink={true}>
              <Icon name={social.icon} size="lg" />
            </GridCell>
          )}
        </Grid>

        <p>Copyright © 2016 Brandwatch. All Rights Reserved.</p>
      </div>
    );
  }
}
