import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'ini-button',
  styleUrl: 'ini-button.scss',
  shadow: false,
})
export class IniButton {
  @Prop() size: "small"|"medium"|"large" = "medium";

  @Prop() variant: "primary"|"secondary"|"success"|"danger"|"warning"|"info" = "primary";

  render() {
    const classes = {
      'ini-btn': true,
      [`ini-btn-${this.variant}`]: true,
      'ini-btn-sm': this.size === "small",
      'ini-btn-lg': this.size === "large",
    };

    return (
      <Host data-webcomponent={true}>
        <button class={classes}>
          <slot/>
        </button>
      </Host>
    );
  }
}
