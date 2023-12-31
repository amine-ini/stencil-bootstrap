import {Component, Host, h, Prop, Element} from '@stencil/core';
import DateRangePicker from 'vanillajs-datepicker/js/DateRangePicker.js';

/**
 * The Date Range Picker component streamlines the process of selecting a span of dates. Ideal for defining periods such as booking intervals,
 * financial quarters, or event durations, it offers an intuitive interface to capture both start and end dates. Its user-centric design ensures
 * that selecting consecutive days or disparate intervals is straightforward, providing clarity and precision in every date range selection.
 *
 * Documentation of used Datepicker : https://mymth.github.io/vanillajs-datepicker
 */
@Component({
    tag: 'ini-date-range-picker',
    styleUrl: 'ini-date-range-picker.scss',
    shadow: false,
})
export class IniDatePicker {

    @Element() el: HTMLElement;

    /** The date format */
    @Prop() dateFormat: string = "dd/mm/yyyy";

    /** The text label to display before input */
    @Prop() label: string = "";

    /** Disable input, user can't have any interaction */
    @Prop() disabled: boolean = false;

    /** A help message for the input */
    @Prop() helpText: string = "";

    /** The name of the *start date* input in the form */
    @Prop() startName: string = "";

    /** The default *start date* value */
    @Prop() startValue: string = "";

    /** The *start date* placeholder */
    @Prop() startPlaceholder: string = "";

    /** The name of the *end date* input in the form */
    @Prop() endName: string = "";

    /** The default *end date* value */
    @Prop() endValue: string = "";

    /** The *end date* placeholder */
    @Prop() endPlaceholder: string = "";

    componentDidLoad() {
        new DateRangePicker(this.el, {
            buttonClass: 'ini-btn',
            format: this.dateFormat
        });
    }

    render() {
        return (
            <Host data-webcomponent={true}>
                {this.label && <label class="ini-form-label">{this.label}</label>}
                <div class="ini-date-range-picker__fields">
                    <ini-input name={this.startName} value={this.startValue} placeholder={this.startPlaceholder} disabled={this.disabled}/>
                    <span class="ini-date-range-picker__arrow"/>
                    <ini-input name={this.endName} value={this.endValue} placeholder={this.endPlaceholder} disabled={this.disabled} />
                </div>
                {this.helpText && <div class="ini-form-text">{this.helpText}</div>}
            </Host>
        );
    }

}
