import { Component, h } from '@stencil/core';

@Component({
  tag: 'ini-card',
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
