import {Component, Host, h, Prop} from '@stencil/core';
import Datepicker from 'vanillajs-datepicker/js/Datepicker.js';

/**
 * Documentation of used Datepicker : https://mymth.github.io/vanillajs-datepicker
 */
@Component({
    tag: 'ini-date-picker',
    styleUrl: 'ini-date-picker.scss',
    shadow: false,
})
export class IniDatePicker {

    private inputElement: HTMLIniInputElement;

    @Prop() dateFormat: string = "dd/mm/yyyy";

    @Prop() label: string = "";

    @Prop() name: string = "";

    @Prop() value: string = "";

    @Prop() placeholder: string = "";

    @Prop() disabled: boolean = false;

    @Prop() helpText: string = "";

    async componentDidLoad() {
        new Datepicker(await this.inputElement.getInputRef(), {
            buttonClass: 'ini-btn',
            autohide: true,
            format: this.dateFormat
        });
    }

    render() {
        return (
            <Host data-webcomponent={true}>
                <ini-input name={this.name} value={this.value} placeholder={this.placeholder} label={this.label}
                           disabled={this.disabled} helpText={this.helpText} ref={ref => this.inputElement = ref} />
            </Host>
        );
    }

}
