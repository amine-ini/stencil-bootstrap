import {Component, Element, Host, h, Listen, Prop} from '@stencil/core';
import {createPopper, Instance} from "@popperjs/core";

/**
 * The Dropdown component offers a compact way to present multiple options without overwhelming the interface.
 * By clicking or hovering, users can unveil a list of choices, making selections both space-efficient and user-friendly.
 * Whether used for navigation, action lists, or form inputs, the Dropdown ensures a smooth experience, guiding users through their options with elegance and simplicity.
 *
 * > You can use as direct child of the Dropdown a set of tag `<a href>` or `<button>`
 *
 * This component use the Popper library : https://popper.js.org/docs/v2/
 */
@Component({
    tag: 'ini-dropdown',
    styleUrl: 'ini-dropdown.scss',
    shadow: false,
})
export class IniDropdown {
    @Element() el: HTMLElement;

    /** The label to display inside dropdown trigger button */
    @Prop() label: string = "";

    /** The Dropdown trigger button size */
    @Prop() size: "small" | "medium" | "large" = "medium";

    /** Remove the background and highlight the borders */
    @Prop() outline: boolean = false;

    /** Disable Dropdown trigger button, user can't have any interaction */
    @Prop() disabled: boolean = false;

    /** The default location when opening the dropdown */
    @Prop() placement: "top" | "bottom" | "right" | "left" = "bottom";

    private contentElement: HTMLElement;
    private triggerElement: HTMLElement;
    private showClass: string = 'ini-show';
    private popperInstance: Instance;

    onTriggerClicked = () => {
        if (this.contentElement.classList.contains(this.showClass)) {
            this.hideDropdown();
        } else {
            this.showDropdown();
        }
    }

    hideDropdown() {
        this.contentElement.classList.remove(this.showClass);
    }

    showDropdown() {
        this.popperInstance.update();
        this.contentElement.classList.add(this.showClass);
    }

    componentDidLoad() {
        this.convertDropdownItems()
        this.setupPopper();
    }

    convertDropdownItems() {
        this.el.querySelectorAll('.ini-dropdown-menu > *').forEach(child => {
            if (child instanceof HTMLElement) {
                child.classList.add('ini-dropdown-item');
                child.addEventListener('click', _ => this.hideDropdown())
            }
        });
    }

    @Listen('click', {target: 'window'})
    handleClickOutsideComponent(ev) {
        if (this.el.contains(ev.target)) {
            return;
        }
        this.hideDropdown();
    }

    setupPopper() {
        this.popperInstance = createPopper(this.triggerElement, this.contentElement, {
            placement: this.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: ({ placement, reference}) => {
                            if (placement === 'top') {
                                return [0, (reference.height / 2) + 5];
                            } else {
                                return [0, 4];
                            }
                        },
                    },
                },
            ]
        });
    }

    render() {
        return (
            <Host data-webcomponent={true}>
                <div class="ini-dropdown">
                    <ini-button onIniClick={this.onTriggerClicked} extraClass="ini-dropdown-toggle"
                                size={this.size} outline={this.outline} disabled={this.disabled}
                                ref={ref => this.triggerElement = ref}>
                        {this.label}
                    </ini-button>
                    <ul class="ini-dropdown-menu" ref={ref => this.contentElement = ref}>
                        <slot/>
                    </ul>
                </div>
            </Host>
        );
    }

}
