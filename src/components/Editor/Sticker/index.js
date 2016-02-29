/* @flow */

import React, { Component } from 'react';
import styles from './styles';
import { Entity } from 'draft-js';

export default class Sticker extends Component {

  remove: Function = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();
    event.stopPropagation();

    this.props.blockProps.onRemove(this.props.block.getKey());
  };

  render() {
    const { block } = this.props;

    // const entity = block.getEntityAt(0);
    // const data = Entity.get(block.getEntityAt(0)).getData();

    // TODO allow to add differnt unicorn stickers
    return (
      <figure style={ styles.root } contentEditable={ false } data-offset-key={ `${block.get('key')}-0-0` }>
        <img height={100} src="https://media4.giphy.com/media/WZmgVLMt7mp44/200_s.gif" />
        <button className="TeXEditor-removeButton" onClick={this.remove}>
          Remove
        </button>
      </figure>
    );
  }
}