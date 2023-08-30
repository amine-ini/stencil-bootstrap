import {Component, Host, h, Prop} from '@stencil/core';

@Component({
    tag: 'ini-badge',
    styleUrl: 'ini-badge.scss',
    shadow: false,
})
export class IniBadge {

    @Prop() variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" = "primary";

    render() {
        const classes = {
            'ini-badge': true,
            [`ini-text-bg-${this.variant}`]: true,
        };

        return (
            <Host data-webcomponent={true}>
        <span class={classes}>
          <slot/>
        </span>
            </Host>
        );
    }

}
