import {Component, Element, Host, h, Listen, Prop} from '@stencil/core';
import {createPopper, Instance} from "@popperjs/core";

@Component({
    tag: 'ini-dropdown',
    styleUrl: 'ini-dropdown.scss',
    shadow: false,
})
export class IniDropdown {
    @Element() el: HTMLElement;

    @Prop() label: string = "";

    @Prop() size: "small" | "medium" | "large" = "medium";

    @Prop() outline: boolean = false;

    @Prop() disabled: boolean = false;

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
