import {Component, Host, h, Prop, Element} from '@stencil/core';

@Component({
  tag: 'ini-modal',
  styleUrl: 'ini-modal.scss',
  shadow: false,
})
export class IniModal {

  @Element() el: HTMLElement;

  @Prop({mutable: true}) open: boolean = false;

  dialogElement: HTMLElement

  backdropCloseModal = (e) => {
    if (!this.dialogElement.contains(e.target)) {
      this.open = false;
    }
  }

  closeModal = _ => {
    this.open = false;
  }

  render() {
    const style = {
      display: this.open ? 'block' : 'none'
    };

    return (
      <Host data-webcomponent={true}>
        <div class="ini-modal-backdrop ini-show" style={style} onClick={this.backdropCloseModal}></div>
        <div class="ini-modal" style={style} onClick={this.backdropCloseModal}>
          <div class="ini-modal-dialog" ref={ref => this.dialogElement = ref}>
            <div class="ini-modal-content">
              <div class="ini-modal-header">
                <h5 class="ini-modal-title">Modal title</h5>
                <button class="ini-btn-close" onClick={this.closeModal}></button>
              </div>
              <div class="ini-modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="ini-modal-footer">
                <ini-button variant="secondary" onIniClick={this.closeModal}>Close</ini-button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
