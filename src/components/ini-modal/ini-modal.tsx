import {Component, Host, h, Prop, Element, Event, EventEmitter} from '@stencil/core';

/**
 * The Modal component emerges as a focused overlay, capturing users' full attention to deliver essential content or actions.
 * Whether presenting vital information, confirming user decisions, or offering supplemental details, the Modal provides an immersive environment, momentarily separating users from the main interface.
 * Its distinct presence ensures that the information or actions within are both central and prioritized, facilitating focused interactions.
 */
@Component({
    tag: 'ini-modal',
    styleUrl: 'ini-modal.scss',
    shadow: false,
})
export class IniModal {

    @Element() el: HTMLElement;

    /** Open or close the modal */
    @Prop({mutable: true}) open: boolean = false;

    /** The title in the modal header */
    @Prop() headerTitle: string;

    /** The close button label */
    @Prop() closeLabel: string = 'Close';

    /** The submit button label */
    @Prop() submitLabel: string = 'Ok';

    /** Center the modal vertically */
    @Prop() centerY: boolean = true;

    /** When user click on close button */
    @Event() iniModalClosed: EventEmitter;

    /** When user click on submit button */
    @Event() iniModalSubmitted: EventEmitter;

    dialogElement: HTMLElement

    backdropCloseModal = (e) => {
        if (!this.dialogElement.contains(e.target)) {
            this.open = false;
        }
    }

    closeModal() {
        this.open = false;
    }

    onModalClose = e => {
        this.closeModal();
        this.iniModalClosed.emit(e);
    }

    onModalSubmit = e => {
        this.closeModal();
        this.iniModalSubmitted.emit(e);
    }

    render() {
        const style = {
            display: this.open ? 'block' : 'none'
        };

        const dialogClass = {
            'ini-modal-dialog': true,
            'ini-modal-dialog-centered': this.centerY,
        };

        return (
            <Host data-webcomponent={true}>
                <div class="ini-modal-backdrop ini-show" style={style} onClick={this.backdropCloseModal}/>
                <div class="ini-modal" style={style} onClick={this.backdropCloseModal}>
                    <div class={dialogClass} ref={ref => this.dialogElement = ref}>
                        <div class="ini-modal-content">
                            <div class="ini-modal-header">
                                <h5 class="ini-modal-title">{this.headerTitle}</h5>
                                <button class="ini-btn-close" onClick={this.onModalClose}/>
                            </div>
                            <div class="ini-modal-body">
                                <slot/>
                            </div>
                            <div class="ini-modal-footer">
                                <ini-button variant="secondary" onIniClick={this.onModalClose}>
                                    {this.closeLabel}
                                </ini-button>
                                <ini-button onIniClick={this.onModalSubmit}>
                                    {this.submitLabel}
                                </ini-button>
                            </div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}
