import {Component, Host, h, Prop, Element} from '@stencil/core';

@Component({
    tag: 'ini-alert',
    styleUrl: 'ini-alert.scss',
    shadow: false,
})
export class IniAlert {

    @Element() el: HTMLElement;

    @Prop() variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" = "primary";

    @Prop() headerTitle: string;

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
