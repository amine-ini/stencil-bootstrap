import {Component, Host, h, Prop, Element} from '@stencil/core';
import DateRangePicker from 'vanillajs-datepicker/js/DateRangePicker.js';

/**
 * Documentation of used Datepicker : https://mymth.github.io/vanillajs-datepicker
 */
@Component({
    tag: 'ini-date-range-picker',
    styleUrl: 'ini-date-range-picker.scss',
    shadow: false,
})
export class IniDatePicker {

    @Element() el: HTMLElement;

    @Prop() dateFormat: string = "dd/mm/yyyy";

    @Prop() label: string = "";

    @Prop() disabled: boolean = false;

    @Prop() helpText: string = "";

    @Prop() startName: string = "";

    @Prop() startValue: string = "";

    @Prop() startPlaceholder: string = "";

    @Prop() endName: string = "";

    @Prop() endValue: string = "";

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
