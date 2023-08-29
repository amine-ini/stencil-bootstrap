import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'ini-card',
  styleUrl: 'ini-card.scss',
  shadow: false,
})
export class IniCard {
  @Prop() headerTitle: string;

  render() {
    return (
      <Host data-webcomponent={true}>
        <div class="ini-card">
          <div class="ini-card-body">
            {this.headerTitle && <h5 class="ini-card-title">{this.headerTitle}</h5>}
            <slot/>
          </div>
        </div>
      </Host>
    );
  }

}
