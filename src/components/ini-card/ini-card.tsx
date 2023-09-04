import {Component, h, Host, Prop} from '@stencil/core';

/**
 * The Card component acts as a versatile container, framing content with a clear visual boundary. Whether showcasing snippets of text,
 * hosting other UI components, or spotlighting information with an optional title, the Card offers a neat and structured presentation.
 * It effectively organizes and emphasizes content, ensuring that information stands out in an engaging manner.
 */
@Component({
    tag: 'ini-card',
    styleUrl: 'ini-card.scss',
    shadow: false,
})
export class IniCard {
    @Prop() headerTitle: string;

    render() {
        return (
            <Host data-webcomponent={true}>
                <div class="ini-card">
                    <div class="ini-card-body">
                        {this.headerTitle && <h5 class="ini-card-title">{this.headerTitle}</h5>}
                        <slot/>
                    </div>
                </div>
            </Host>
        );
    }

}
