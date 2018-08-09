/**
@license
Copyright (c) 2015 Peter Kaske <p.kaske@gmail.com>. All rights reserved.
This code may only be used under the MIT license found at http://opensource.org/licenses/MIT.
Or see the LICENSE file that comes with this code.
*/
import '@polymer/polymer/polymer-legacy.js';

import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin.js';
import 'dompurify/dist/purify.js';
window.FBehavior = window.FBehavior || {};

/**
 * FBehavior.DomPurify sanitizes HTML strings
 *
 * @polymerMixin
 */
FBehavior.DomPurify = dedupingMixin(function(superClass) {
 /**
  * @polymerMixinClass
  */
  class DomPurify extends superClass {
    static get properties() {
      return {
        sanitizeOptions: {
          type: Object,
          value: function() {
            return {};
          },
        },
      };
    }

    innerSanitizedHtml() {
      this.innerHTML = DOMPurify.sanitize(this.innerHTML, this.sanitizeOptions);
    }

    sanitizeHtml(dirtyHtml, options) {
      return DOMPurify.sanitize(dirtyHtml, options || this.sanitizeOptions);
    }
  }
  return DomPurify;
});
