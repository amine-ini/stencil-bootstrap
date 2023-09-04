import {Component, Host, h, Prop} from '@stencil/core';

/**
 * The Checkbox, Radio and Switch components serves as a versatile tool for capturing user choices. As a Checkbox/Switch it represents binary decisions or enables multi-select options.
 * When set as a Radio, it facilitates single-choice selections among a group of options. Employed in forms and various UI contexts, their states—whether checked,
 * unchecked, or indeterminate—are clearly conveyed. Paired with intuitive labels, this component ensures user selections are both clear and accurate,
 * adapting seamlessly based on the specified type.
 */
@Component({
    tag: 'ini-choice',
    styleUrl: 'ini-choice.scss',
    shadow: false,
})
export class IniChoice {

    static sequence = 0;

    /** The id value for input and label attributes */
    @Prop() type: "checkbox" | "radio" | "switch" = "checkbox";

    /** The id value for input and label attributes */
    @Prop({mutable: true}) groupId: string = "";

    /** The name of the checkbox/radio/switch in the form (example: for radios to create group) */
    @Prop() name: string = "";

    /** The default value of checkbox/radio/switch */
    @Prop() value: string = "";

    /** Disable component, user can't have any interaction */
    @Prop() disabled: boolean = false;

    /** Group checkboxes or radios on the same horizontal row */
    @Prop() inline: boolean = false;

    componentWillLoad() {
        if (!this.groupId) {
            this.groupId = "checkbox" + IniChoice.sequence++;
        }
    }

    render() {
        const classes = {
            "ini-form-check": true,
            "ini-form-switch": this.type === "switch",
            "ini-form-check-inline": this.inline
        };

        return (
            <Host data-webcomponent={true}>
                <div class={classes}>
                    <input class="ini-form-check-input" type={this.type === "switch" ? "checkbox" : this.type} value={this.value}
                           name={this.name} id={this.groupId} disabled={this.disabled} role={this.type === "switch" ? "switch" : null}/>
                    <label class="ini-form-check-label" htmlFor={this.groupId}>
                        <slot/>
                    </label>
                </div>
            </Host>
        );
    }

}
