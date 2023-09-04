import {Component, Host, h, Prop} from '@stencil/core';

/**
 * The Badge component is a compact yet powerful means of showcasing status, highlighting states, or drawing attention to specific data points.
 * With its minimalist design, it effortlessly integrates into various UI contexts, making it a go-to for concise visual feedback
 */
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
