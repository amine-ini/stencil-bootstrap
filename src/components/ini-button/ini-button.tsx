import { Component, h } from '@stencil/core';

@Component({
  tag: 'ini-button',
  shadow: false,
})
export class IniButton {

  render() {
    return (
      <button class="button">
        <slot></slot>
      </button>
    );
  }

}
