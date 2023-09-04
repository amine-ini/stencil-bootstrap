import {Component, Event, EventEmitter, h, Host, Prop} from '@stencil/core';

/**
 * The Button component stands as an interactive gateway, inviting users to take action, navigate, or submit.
 * With its versatile design, it can signal importance, set priorities, or provide navigational cues.
 * Whether beckoning a user to 'Learn More', confirming a choice with 'Submit', or pausing a task with 'Cancel', the Button ensures every interaction is clear and intentional.
 */
@Component({
    tag: 'ini-button',
    styleUrl: 'ini-button.scss',
    shadow: false,
})
export class IniButton {

    /** Button size */
    @Prop() size: "small" | "medium" | "large" = "medium";

    /** Color variants of button */
    @Prop() variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" = "primary";

    /** Remove the background and highlight the borders */
    @Prop() outline: boolean = false;

    /** Disable button, user can't have any interaction */
    @Prop() disabled: boolean = false;

    /** Additional CSS class to add to the `<button>` if necessary */
    @Prop() extraClass: string = "";

    /** When user click on button */
    @Event() iniClick: EventEmitter;

    render() {
        const classes = {
            'ini-btn': true,
            [`ini-btn-${this.variant}`]: !this.outline,
            [`ini-btn-outline-${this.variant}`]: this.outline,
            'ini-btn-sm': this.size === "small",
            'ini-btn-lg': this.size === "large",
            [this.extraClass]: this.extraClass.length > 0
        };

        return (
            <Host data-webcomponent={true}>
                <button class={classes} disabled={this.disabled} onClick={e => this.iniClick.emit(e)}>
                    <slot/>
                </button>
            </Host>
        );
    }
}
