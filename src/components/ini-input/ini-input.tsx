import {Component, Host, h, Prop, Method} from '@stencil/core';

/**
 * Form Input components are the essential touchpoints of user data entry. From simple text fields capturing names to specialized inputs like emails or color pickers,
 * they transform user interactions into actionable data. Designed for clarity and ease of use, these components ensure that users effortlessly provide information,
 * whether its personal details, preferences, or any specific input. Every interaction is optimized for accuracy, ensuring data integrity across varied input types.
 */
@Component({
    tag: 'ini-input',
    styleUrl: 'ini-input.scss',
    shadow: false,
})
export class IniInput {

    static sequence = 0;

    /** The input size */
    @Prop() size: "small" | "medium" | "large" = "medium";

    /** The type of input in the form */
    @Prop() type: "text" | "password" | "email" | "number" | "search" | "tel" | "url" | "color" | "file" | "textarea" = "text";

    /** The id value for input and label attributes */
    @Prop({mutable: true}) groupId: string = "";

    /** The text label to display before input */
    @Prop() label: string = "";

    /** The name of the input in the form */
    @Prop() name: string = "";

    /** The default value of input */
    @Prop() value: string = "";

    /** The placeholder */
    @Prop() placeholder: string = "";

    /** Disable input, user can't have any interaction */
    @Prop() disabled: boolean = false;

    /** A help message for the input */
    @Prop() helpText: string = "";

    /** Show input and label on a single line */
    @Prop() inline: boolean = false;

    /** Text to display as prefix of the input */
    @Prop() prefixText: string = "";

    /** Text to display as suffix of the input */
    @Prop() suffixText: string = "";

    /** Icon to display as prefix of the input `example: fa-solid fa-user or zmdi-user...` */
    @Prop() prefixIcon: string = "";

    /** Icon to display as suffix of the input `example: fa-solid fa-user or zmdi-user...` */
    @Prop() suffixIcon: string = "";

    @Method()
    async getInputRef(): Promise<HTMLElement> {
        return this.inputElement;
    }

    inputElement: HTMLInputElement

    componentWillLoad() {
        if (!this.groupId) {
            this.groupId = "input" + IniInput.sequence++;
        }
    }

    render() {
        let rootElement;

        if (this.prefixIcon || this.suffixIcon || this.prefixText || this.suffixText) {
            rootElement = this.getInputGroupElement();
        } else {
            rootElement = this.getInputElement();
        }

        return (
            <Host data-webcomponent={true} class={{'ini-form-control-inline': this.inline}}>
                {this.label && <label htmlFor={this.groupId} class="ini-form-label">{this.label}</label>}
                {rootElement}
                {this.helpText && <div class="ini-form-text">{this.helpText}</div>}
            </Host>
        );
    }

    getInputElement() {
        const inputClass = {
            'ini-form-control': true,
            'ini-form-control-sm': this.size === "small",
            'ini-form-control-lg': this.size === "large",
        };

        const InputTag = this.type === 'textarea' ? 'textarea' : 'input';

        return (
            <InputTag id={this.groupId} class={inputClass} type={this.type} name={this.name} value={this.value}
                      placeholder={this.placeholder} disabled={this.disabled} ref={ref => this.inputElement = ref} />
        )
    }

    getInputGroupElement() {
        const classes = {
            'ini-input-group': true,
            'ini-input-group-sm': this.size === "small",
            'ini-input-group-lg': this.size === "large",
            'ini-input-group-has-prefix': this.prefixText.length > 0 || this.prefixIcon.length > 0,
            'ini-input-group-has-suffix': this.suffixText.length > 0 || this.suffixIcon.length > 0
        };

        return (
            <div class={classes}>
                {this.prefixText && this.getInputGroupChildElement(this.prefixText)}
                {this.prefixIcon && this.getInputGroupIconElement(this.prefixIcon)}
                {this.getInputElement()}
                {this.suffixIcon && this.getInputGroupIconElement(this.suffixIcon)}
                {this.suffixText && this.getInputGroupChildElement(this.suffixText)}
            </div>
        )
    }

    getInputGroupChildElement(content) {
        const focusInput = () => this.inputElement.focus();
        return <span class="ini-input-group-text" onClick={focusInput}>{content}</span>
    }

    getInputGroupIconElement(iconName) {
        return this.getInputGroupChildElement(<i class={iconName}/>)
    }

}
