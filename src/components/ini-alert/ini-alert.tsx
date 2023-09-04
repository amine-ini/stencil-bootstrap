import {Component, Host, h, Prop, Element} from '@stencil/core';

/**
 * The Alert component serves as a dynamic container for conveying vital notifications and messages.
 * Depending on the context, alerts can adopt various types such as Primary, Danger, Success, Warning, and other relevant variants. Each type visually signifies its importance and relevance.
 * Additionally, to enhance clarity and emphasis, alerts can be complemented with a title. For users desiring an uncluttered interface,
 * the alerts also offer a dismissible feature, enabling them to close the message after acknowledgment. Through all its configurations, the Alert component ensures that key communications remain prominent and clear.
 */
@Component({
    tag: 'ini-alert',
    styleUrl: 'ini-alert.scss',
    shadow: false,
})
export class IniAlert {

    @Element() el: HTMLElement;

    /** Context of the alert, if it is an error message: `danger`, an action which is successful: `success` ... */
    @Prop() variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" = "primary";

    /** (optional) The title of the alert that accompanies the content */
    @Prop() headerTitle: string;

    /** Allows you to hide the alert if the close button is clicked */
    @Prop() dismissible: boolean = false;

    hideAlert = _ => {
        this.el.remove();
        // can trigger here onIniClosed
    }

    render() {
        const classes = {
            'ini-alert': true,
            [`ini-alert-${this.variant}`]: true,
            'ini-alert-dismissible': this.dismissible
        };

        return (
            <Host data-webcomponent={true}>
                <div class={classes} role="alert">
                    {this.headerTitle && <h4 class="ini-alert-heading">{this.headerTitle}</h4>}
                    <slot />
                    {this.dismissible && <button type="button" class="ini-btn-close" onClick={this.hideAlert}/>}
                </div>
            </Host>
        );
    }

}
