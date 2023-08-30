import {Component, Element, Host, h, Listen, Prop} from '@stencil/core';

@Component({
    tag: 'ini-dropdown',
    styleUrl: 'ini-dropdown.scss',
    shadow: false,
})
export class IniDropdown {
    @Element() el: HTMLElement;

    @Prop() size: "small" | "medium" | "large" = "medium";

    private contentElement: HTMLElement;
    private showClass: string = 'ini-show';

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
        this.contentElement.classList.add(this.showClass);
    }

    componentDidLoad() {
        this.el.querySelectorAll('.ini-dropdown-menu > *').forEach(child => {
            if (child instanceof HTMLAnchorElement) {
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

    render() {
        return (
            <Host data-webcomponent={true}>
                <div class="ini-dropdown" style={{display: 'inline'}}>
                    <ini-button onIniClick={this.onTriggerClicked} extraClass="ini-dropdown-toggle" size={this.size}>
                        Dropdown button
                    </ini-button>
                    <ul class="ini-dropdown-menu ini-dropdown-menu-start" data-bs-popper={true}
                        ref={ref => this.contentElement = ref}>
                        <slot/>
                    </ul>
                </div>
            </Host>
        );
    }

}
