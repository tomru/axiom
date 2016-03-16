import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { colorAccentBaseVariation, colorBaseVariation } from 'sass-vars';

export default class ColorSwatch extends Component {
  render() {
    const {name, color} = this.props;
    const nonAccents = Object.keys(color).filter((key) => /^\d/.test(key));
    const accents = Object.keys(color).filter((key) => /^A/.test(key));

    return (
      <div className="dm-color-box__container">
        <div className={`dm-color-box dm-color-box--base dm-color--${name}--${colorBaseVariation}`}>
          <strong className="ax-text--ellipsis">$color-{name}</strong>
          <p className="dm-color-box--base__stats">
            {colorBaseVariation}
            {color[colorBaseVariation]}
          </p>
        </div>

        {nonAccents.map((variation) =>
          <div className={`dm-color-box dm-color--${name}--${variation}`} key={variation}>
            {variation}
            {color[variation]}
          </div>
        )}

        {do {
          if (color.hasOwnProperty(colorAccentBaseVariation)) {
            accents.map((variation, vIndex) => {
              const classes = classNames(
                'dm-color-box',
                `dm-color--${name}--${variation}`, {
                  'dm-color-box--accent': vIndex === 0
                },
              );

              return (
                <div className={classes} key={variation}>
                  {variation}
                  {color[variation]}
                </div>
              );
            });
          }
        }}
      </div>
    );
  }
}
