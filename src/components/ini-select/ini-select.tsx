import {Component, Host, h, Prop} from '@stencil/core';
import TomSelect from "tom-select";

/**
 * Select control
 */
@Component({
    tag: 'ini-select',
    styleUrl: 'ini-select.scss',
    shadow: false,
})
export class IniSelect {

    @Prop() multiple: boolean = false;

    @Prop() allowEmpty: boolean = false;

    @Prop() name: string = "";

    @Prop() placeholder: string = "";

    @Prop() disabled: boolean = false;

    private selectElement: HTMLSelectElement;

    componentDidLoad() {
        new TomSelect(this.selectElement, {
            allowEmptyOption: this.allowEmpty
        });
    }

    render() {
        return (
            <Host data-webcomponent={true}>
                <select ref={ref => this.selectElement = ref} data-placeholder={this.placeholder}
                        multiple={this.multiple} name={this.name} disabled={this.disabled} autocomplete="off">
                    <slot/>
                </select>
            </Host>
        );
    }

}
