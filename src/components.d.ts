/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IniAlert {
        "dismissible": boolean;
        "headerTitle": string;
        "variant": "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    }
    interface IniBadge {
        "variant": "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    }
    interface IniButton {
        "disabled": boolean;
        "extraClass": string;
        "outline": boolean;
        "size": "small" | "medium" | "large";
        "variant": "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    }
    interface IniCard {
        "headerTitle": string;
    }
    interface IniDropdown {
        "placement": "top" | "bottom" | "right" | "left";
        "size": "small" | "medium" | "large";
    }
    interface IniInput {
        "disabled": boolean;
        "groupId": string;
        "helpText": string;
        "inline": boolean;
        "label": string;
        "name": string;
        "placeholder": string;
        "prefixIcon": string;
        "prefixText": string;
        "size": "small" | "medium" | "large";
        "suffixIcon": string;
        "suffixText": string;
        "type": "text" | "password" | "email" | "number" | "search" | "tel" | "url" | "color" | "file" | "textarea";
        "value": string;
    }
    interface IniModal {
        "centerY": boolean;
        "closeLabel": string;
        "headerTitle": string;
        "open": boolean;
    }
    interface IniSelect {
        "allowEmpty": boolean;
        "disabled": boolean;
        "multiple": boolean;
        "name": string;
        "placeholder": string;
    }
    interface IniTooltip {
        "placement": "top" | "bottom" | "right" | "left";
        "titleContent": string;
    }
}
export interface IniButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIniButtonElement;
}
declare global {
    interface HTMLIniAlertElement extends Components.IniAlert, HTMLStencilElement {
    }
    var HTMLIniAlertElement: {
        prototype: HTMLIniAlertElement;
        new (): HTMLIniAlertElement;
    };
    interface HTMLIniBadgeElement extends Components.IniBadge, HTMLStencilElement {
    }
    var HTMLIniBadgeElement: {
        prototype: HTMLIniBadgeElement;
        new (): HTMLIniBadgeElement;
    };
    interface HTMLIniButtonElement extends Components.IniButton, HTMLStencilElement {
    }
    var HTMLIniButtonElement: {
        prototype: HTMLIniButtonElement;
        new (): HTMLIniButtonElement;
    };
    interface HTMLIniCardElement extends Components.IniCard, HTMLStencilElement {
    }
    var HTMLIniCardElement: {
        prototype: HTMLIniCardElement;
        new (): HTMLIniCardElement;
    };
    interface HTMLIniDropdownElement extends Components.IniDropdown, HTMLStencilElement {
    }
    var HTMLIniDropdownElement: {
        prototype: HTMLIniDropdownElement;
        new (): HTMLIniDropdownElement;
    };
    interface HTMLIniInputElement extends Components.IniInput, HTMLStencilElement {
    }
    var HTMLIniInputElement: {
        prototype: HTMLIniInputElement;
        new (): HTMLIniInputElement;
    };
    interface HTMLIniModalElement extends Components.IniModal, HTMLStencilElement {
    }
    var HTMLIniModalElement: {
        prototype: HTMLIniModalElement;
        new (): HTMLIniModalElement;
    };
    interface HTMLIniSelectElement extends Components.IniSelect, HTMLStencilElement {
    }
    var HTMLIniSelectElement: {
        prototype: HTMLIniSelectElement;
        new (): HTMLIniSelectElement;
    };
    interface HTMLIniTooltipElement extends Components.IniTooltip, HTMLStencilElement {
    }
    var HTMLIniTooltipElement: {
        prototype: HTMLIniTooltipElement;
        new (): HTMLIniTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "ini-alert": HTMLIniAlertElement;
        "ini-badge": HTMLIniBadgeElement;
        "ini-button": HTMLIniButtonElement;
        "ini-card": HTMLIniCardElement;
        "ini-dropdown": HTMLIniDropdownElement;
        "ini-input": HTMLIniInputElement;
        "ini-modal": HTMLIniModalElement;
        "ini-select": HTMLIniSelectElement;
        "ini-tooltip": HTMLIniTooltipElement;
    }
}
declare namespace LocalJSX {
    interface IniAlert {
        "dismissible"?: boolean;
        "headerTitle"?: string;
        "variant"?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    }
    interface IniBadge {
        "variant"?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    }
    interface IniButton {
        "disabled"?: boolean;
        "extraClass"?: string;
        "onIniClick"?: (event: IniButtonCustomEvent<any>) => void;
        "outline"?: boolean;
        "size"?: "small" | "medium" | "large";
        "variant"?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    }
    interface IniCard {
        "headerTitle"?: string;
    }
    interface IniDropdown {
        "placement"?: "top" | "bottom" | "right" | "left";
        "size"?: "small" | "medium" | "large";
    }
    interface IniInput {
        "disabled"?: boolean;
        "groupId"?: string;
        "helpText"?: string;
        "inline"?: boolean;
        "label"?: string;
        "name"?: string;
        "placeholder"?: string;
        "prefixIcon"?: string;
        "prefixText"?: string;
        "size"?: "small" | "medium" | "large";
        "suffixIcon"?: string;
        "suffixText"?: string;
        "type"?: "text" | "password" | "email" | "number" | "search" | "tel" | "url" | "color" | "file" | "textarea";
        "value"?: string;
    }
    interface IniModal {
        "centerY"?: boolean;
        "closeLabel"?: string;
        "headerTitle"?: string;
        "open"?: boolean;
    }
    interface IniSelect {
        "allowEmpty"?: boolean;
        "disabled"?: boolean;
        "multiple"?: boolean;
        "name"?: string;
        "placeholder"?: string;
    }
    interface IniTooltip {
        "placement"?: "top" | "bottom" | "right" | "left";
        "titleContent"?: string;
    }
    interface IntrinsicElements {
        "ini-alert": IniAlert;
        "ini-badge": IniBadge;
        "ini-button": IniButton;
        "ini-card": IniCard;
        "ini-dropdown": IniDropdown;
        "ini-input": IniInput;
        "ini-modal": IniModal;
        "ini-select": IniSelect;
        "ini-tooltip": IniTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ini-alert": LocalJSX.IniAlert & JSXBase.HTMLAttributes<HTMLIniAlertElement>;
            "ini-badge": LocalJSX.IniBadge & JSXBase.HTMLAttributes<HTMLIniBadgeElement>;
            "ini-button": LocalJSX.IniButton & JSXBase.HTMLAttributes<HTMLIniButtonElement>;
            "ini-card": LocalJSX.IniCard & JSXBase.HTMLAttributes<HTMLIniCardElement>;
            "ini-dropdown": LocalJSX.IniDropdown & JSXBase.HTMLAttributes<HTMLIniDropdownElement>;
            "ini-input": LocalJSX.IniInput & JSXBase.HTMLAttributes<HTMLIniInputElement>;
            "ini-modal": LocalJSX.IniModal & JSXBase.HTMLAttributes<HTMLIniModalElement>;
            "ini-select": LocalJSX.IniSelect & JSXBase.HTMLAttributes<HTMLIniSelectElement>;
            "ini-tooltip": LocalJSX.IniTooltip & JSXBase.HTMLAttributes<HTMLIniTooltipElement>;
        }
    }
}
