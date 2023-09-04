import {Component, Host, h, Prop} from '@stencil/core';

@Component({
    tag: 'ini-checkbox',
    styleUrl: 'ini-checkbox.scss',
    shadow: false,
})
export class IniCheckbox {

    static sequence = 0;

    /** The id value for input and label attributes */
    @Prop({mutable: true}) groupId: string = "";

    /** The name of the checkbox in the form */
    @Prop() name: string = "";

    /** The default value of checkbox */
    @Prop() value: string = "";

    /** Disable checkbox, user can't have any interaction */
    @Prop() disabled: boolean = false;

    componentWillLoad() {
        if (!this.groupId) {
            this.groupId = "checkbox" + IniCheckbox.sequence++;
        }
    }

    render() {
        return (
            <Host data-webcomponent={true}>
                <div class="ini-form-check">
                    <input class="ini-form-check-input" type="checkbox" value={this.value}
                           name={this.name} id={this.groupId} disabled={this.disabled}/>
                    <label class="ini-form-check-label" htmlFor={this.groupId}>
                        <slot/>
                    </label>
                </div>
            </Host>
        );
    }

}
