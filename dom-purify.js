/**
@license
Copyright (c) 2015 Peter Kaske <p.kaske@gmail.com>. All rights reserved.
This code may only be used under the MIT license found at http://opensource.org/licenses/MIT.
Or see the LICENSE file that comes with this code.
*/
import './dom-purify-behavior.js';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * Simple component that uses the awesome [DOMPurify](https://github.com/cure53/DOMPurify) library to sanitize it's content.
 *
 * Example
 *
 *   <dom-purify>
 *     Some content with a dangerous <a href="#" onclick="alert('do something bad...');">link</a>
 *   </dom-purify>
 *
 * @group Security
 * @polymerElement
 * @demo demo/index.html
 * @homepage https://github.com/pkaske/dom-purify
 */
class FDomPurify extends FBehavior.DomPurify(PolymerElement) {
  static get is() { return "dom-purify"; }
  connectedCallback() {
    this.innerSanitizedHtml();
  }
}
customElements.define(FDomPurify.is, FDomPurify);
