import React, { Component } from 'react';
import unionClassNames from 'union-class-names';

export default class Hashtag extends Component {
  render() {
    const { theme = {}, className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.hashtag, className);
    
    var decoratedText = this.props.decoratedText === undefined ? '' : this.props.decoratedText;
    var href = "/hashtag/" + decoratedText;
    return (
      <a href={href} target="_blank">
        <span {...props} className={combinedClassName} />
      </a>
    );
  }
}
