import { Component, h } from '@stencil/core';

@Component({
  tag: 'ini-button',
  styleUrl: 'ini-button.scss',
  shadow: false,
})
export class IniButton {

  render() {
    return (
      <button class="ini-btn ini-btn-primary">
        <slot></slot>
      </button>
    );
  }

}
