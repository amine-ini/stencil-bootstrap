import {Component, Host, h} from '@stencil/core';
import TomSelect from "tom-select";

@Component({
    tag: 'ini-select',
    styleUrl: 'ini-select.scss',
    shadow: false,
})
export class IniSelect {

    private selectElement: HTMLSelectElement;

    componentDidLoad() {
        new TomSelect(this.selectElement,{

        });
    }

    render() {
        return (
            <Host data-webcomponent={true}>
                <select ref={ref => this.selectElement = ref}>
                    <slot/>
                </select>
            </Host>
        );
    }

}
