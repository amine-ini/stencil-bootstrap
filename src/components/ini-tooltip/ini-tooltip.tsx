import {Component, Host, h, Prop, Element} from '@stencil/core';
import {createPopper, Instance} from '@popperjs/core';

@Component({
    tag: 'ini-tooltip',
    styleUrl: 'ini-tooltip.scss',
    shadow: false,
})
export class IniTooltip {

    @Element() el: HTMLElement;

    @Prop() titleContent: string = "";

    @Prop() placement: "top" | "bottom" | "right" | "left" = "top";

    private tooltipElement: HTMLElement;

    private popperInstance: Instance;

    componentDidLoad() {
        this.setupPopper();
    }

    setupPopper() {
        this.popperInstance = createPopper(this.el, this.tooltipElement, {
            placement: this.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 4],
                    },
                },
            ]
        });
    }

    updatePopper = () => {
        this.popperInstance.update()
    }

    render() {
        return (
            <Host data-webcomponent={true} onMouseenter={this.updatePopper}>
                <div class="ini-tooltip" role="tooltip" ref={ref => this.tooltipElement = ref}>
                    <div class="ini-tooltip-inner">{this.titleContent}</div>
                </div>
                <slot/>
            </Host>
        );
    }

}
