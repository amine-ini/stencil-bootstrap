import {Component, Host, h, Prop} from '@stencil/core';
import Datepicker from 'vanillajs-datepicker/js/Datepicker.js';

/**
 * The Date Picker component simplifies the task of selecting dates by providing a user-friendly interface.
 * Whether setting an appointment, scheduling an event, or marking a milestone, it seamlessly integrates into forms and interfaces.
 * With intuitive navigation through days, months, and years, the Date Picker ensures that capturing a specific date or date range is both precise and effortless.
 *
 * Documentation of used Datepicker : https://mymth.github.io/vanillajs-datepicker
 */
@Component({
    tag: 'ini-date-picker',
    styleUrl: 'ini-date-picker.scss',
    shadow: false,
})
export class IniDatePicker {

    private inputElement: HTMLIniInputElement;

    /** The date format */
    @Prop() dateFormat: string = "dd/mm/yyyy";

    /** The text label to display before input */
    @Prop() label: string = "";

    /** The name of the input in the form */
    @Prop() name: string = "";

    /** The default date value */
    @Prop() value: string = "";

    /** The placeholder */
    @Prop() placeholder: string = "";

    /** Disable input, user can't have any interaction */
    @Prop() disabled: boolean = false;

    /** A help message for the input */
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
