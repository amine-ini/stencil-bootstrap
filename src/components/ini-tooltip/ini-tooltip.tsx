import {Component, Host, h, Prop, Element} from '@stencil/core';
import {createPopper, Instance} from '@popperjs/core';

/**
 * The Tooltip component acts as a brief informational aide, offering users additional context or guidance when they hover or focus on an element.
 * Subtle yet informative, it unveils insights without disrupting the user flow. Whether elucidating an icon's function,
 * providing supplementary data, or explaining a term, the Tooltip ensures clarity is just a hover away.
 *
 * > The content which must display the tooltip when hovering must be wrapped by `<ini-tooltip>`, can be text, button, any other elements
 *
 * This component use the Popper library : https://popper.js.org/docs/v2/
 */
@Component({
    tag: 'ini-tooltip',
    styleUrl: 'ini-tooltip.scss',
    shadow: false,
})
export class IniTooltip {

    @Element() el: HTMLElement;

    /** The content to display in the tooltip when hovering */
    @Prop() titleContent: string = "";

    /** Where should the tooltip be displayed by bringing the element, if the tooltip leaves the parent container, then it will be replaced automatically */
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
