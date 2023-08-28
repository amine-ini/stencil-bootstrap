import { Component, h } from '@stencil/core';

@Component({
  tag: 'ini-card',
  styleUrl: 'ini-card.scss',
  shadow: false,
})
export class IniCard {

  render() {
    return (
      <div class="card">
        <slot></slot>
      </div>
    );
  }

}
