import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ini-card',
  styleUrl: 'ini-card.scss',
  shadow: false,
})
export class IniCard {
  @Prop() title: string;

  render() {
    return (
      <div class="ini-card">
        <div class="ini-card-body">
          {this.title && <h5 class="ini-card-title">{this.title}</h5>}
          <slot></slot>
        </div>
      </div>
    );
  }

}
