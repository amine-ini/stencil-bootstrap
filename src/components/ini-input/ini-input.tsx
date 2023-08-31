import {Component, Host, h, Prop} from '@stencil/core';

@Component({
    tag: 'ini-input',
    styleUrl: 'ini-input.scss',
    shadow: false,
})
export class IniInput {

    static sequence = 0;

    @Prop() size: "small" | "medium" | "large" = "medium";

    @Prop() type: "text" | "password" | "email" | "number" | "search" | "tel" | "url" | "color" | "file" | "textarea" = "text";

    @Prop({mutable: true}) groupId: string = "";

    @Prop() label: string = "";

    @Prop() name: string = "";

    @Prop() value: string = "";

    @Prop() placeholder: string = "";

    @Prop() disabled: boolean = false;

    @Prop() helpText: string = "";

    @Prop() inline: boolean = false;

    @Prop() prefixText: string = "";

    @Prop() suffixText: string = "";

    @Prop() prefixIcon: string = "";

    @Prop() suffixIcon: string = "";

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
