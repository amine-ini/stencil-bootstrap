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

    toto: HTMLInputElement

    componentWillLoad() {
        if (!this.groupId) {
            this.groupId = "input" + IniInput.sequence++;
        }
    }

    render() {
        const inputClass = {
            'ini-form-control': true,
            'ini-form-control-sm': this.size === "small",
            'ini-form-control-lg': this.size === "large",
        };

        const InputTag = this.type === 'textarea' ? 'textarea' : 'input';

        return (
            <Host data-webcomponent={true} class={{'ini-form-control-inline': this.inline}}>
                {this.label && <label htmlFor={this.groupId} class="ini-form-label">{this.label}</label>}
                <InputTag id={this.groupId} class={inputClass} type={this.type} name={this.name} value={this.value}
                          placeholder={this.placeholder} disabled={this.disabled}
                />
                {this.helpText && <div class="ini-form-text">{this.helpText}</div>}
            </Host>
        );
    }

}
