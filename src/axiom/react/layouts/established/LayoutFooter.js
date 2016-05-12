import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { Grid, GridCell } from '../../';
import { Icon } from '../../';
import LayoutContent from './LayoutContent';
import LayoutLogo from './LayoutLogo';

export class LayoutFooter extends Component {
  render() {
    const { className } = this.props;
    const classes = classnames(className, 'ax-layout__footer-container');
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
      <div className={ classes }>
        <LayoutContent>
          <div className="ax-layout__logo">
            <LayoutLogo />
          </div>

          <div className="ax-layout__footer">
            <Grid hAlign="left" responsive={ false }>
              { socials.map((social, index) =>
                <GridCell key={ index } shrink={ true }>
                  <Icon name={ social.icon } size="lg" />
                </GridCell>
              ) }
            </Grid>

            <p>Copyright © 2016 Brandwatch. All Rights Reserved.</p>
          </div>
        </LayoutContent>
      </div>
    );
  }
}

export default enhance(LayoutFooter)(
  addPropTypes('global'),
  addClassName('global'),
);
