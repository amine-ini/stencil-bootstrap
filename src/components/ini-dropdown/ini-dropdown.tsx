import { Component, Host, h } from '@stencil/core';
import {Dropdown} from "bootstrap";

@Component({
  tag: 'ini-dropdown',
  styleUrl: 'ini-dropdown.scss',
  shadow: false,
})
export class IniDropdown {
  private dropdownElement: HTMLElement;

  componentDidLoad() {
    new Dropdown(this.dropdownElement);
  }

  render() {
    return (
      <Host data-webcomponent={true}>
        <div class="ini-dropdown">
          <button ref={ ref => this.dropdownElement = ref}
                  class="ini-btn ini-btn-secondary ini-dropdown-toggle" type="button" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="ini-dropdown-menu">
            <li><a class="ini-dropdown-item" href="#">Action</a></li>
            <li><a class="ini-dropdown-item" href="#">Another action</a></li>
            <li><a class="ini-dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </Host>
    );
  }

}
