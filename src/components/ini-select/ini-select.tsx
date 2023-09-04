import {Component, Host, h, Prop, Watch} from '@stencil/core';
import TomSelect from "tom-select";

/**
 * The Select control offers an intuitive way to present a list of options to users. It allows for easy single or multiple selections from a dropdown menu.
 * Additionally, some select controls provide the ability to search or type in text, offering users an even more streamlined experience.
 * Whether you're choosing from a predefined list or inputting new information, the Select control is designed to handle both with efficiency.
 * Plus, with built-in functions for adding or removing options, it ensures a dynamic user interaction that adapts to various needs.
 *
 * This component use TomSelect library : https://tom-select.js.org/docs/
 */
@Component({
    tag: 'ini-select',
    styleUrl: 'ini-select.scss',
    shadow: false,
})
export class IniSelect {

    @Prop() multiple: boolean = false;

    @Prop() allowEmpty: boolean = false;

    /** Pass the values selected by default (for multiple values must be used a delimiter between the values example: `apple,grape,orange`) */
    @Prop() selected: string = "";

    @Prop() name: string = "";

    @Prop() placeholder: string = "";

    @Prop() disabled: boolean = false;

    @Watch("selected")
    parseSelected() {
        if (this.selected.length > 0) {
            this.innerSelected = this.selected.split(',');
        }
    }

    private selectElement: HTMLSelectElement;
    private innerSelected: string[] = [];

    componentDidLoad() {
        new TomSelect(this.selectElement, {
            allowEmptyOption: this.allowEmpty,
            items: this.innerSelected,
        });
    }

    componentWillLoad() {
        this.parseSelected();
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
