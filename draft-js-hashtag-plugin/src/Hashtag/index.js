import React, { Component } from 'react';
import unionClassNames from 'union-class-names';

export default class Hashtag extends Component {
  render() {
    const { decoratedText = '', theme = {}, target = '_self', className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.hashtag, className);
    
    const href = "/hashtag/" + decoratedText;
    return (
      <a {...props} href={href} target={target}>
        <span {...props} className={combinedClassName} />
      </a>
    );
  }
}
