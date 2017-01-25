# vanillaCSS

vanillaCSS follows a "BEMv" pattern ("block", "element", "modifier", and "variation").

#### Block

```
/**
 * Block
 *
 * @ Usage: A class representing a standalone class or "block" of markup.
 * @ Prefix: none
 * @ Example: `.hand`
 *
 */

.btn {
  border: 1px solid $gray;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
}

<button class="btn">Button 1</button>
```

#### Element

```
/**
 * Element
 *
 * @ Usage: A class representing a class that lives in a related "parent" class.
 * @ Prefix: parent class and double underscore
 * @ Example: `.hand__finger` inside of `.hand`
 *
 */

.btn__close {
  background: url('../images/close.png') left top no-repeat;
  width: 3px;
  height: 3px;
}

<button class="btn">
  Close
  <div class="btn__close-icon"></div>
</button>

```

#### Modifiers

```
/**
 * Modifier
 *
 * @ Usage: A class that inherits properties from another class and makes a modification.
 * @ Prefix: class to be modified and double hyphen
 * @ Example: `.hand--fist` to `.hand`
 *
 */

.btn--success {
  @extend .btn;
  background-color: $green;
  border-color: $darkGreen
}

<button class="btn--success">Success</button>
```

#### Variations

```
/**
 * Variation
 *
 * @ Usage: A class intended to add properties to other classes.
 * @ Prefix: parent class (if applicable) and single hyphen
 * @ Example: `.hand-small` added to `.hand` or `.rough-skin` added to '.hand'
 * 
 * @ Note: Variations are more generic than modifiers and their use case is
 * similar to when you would want to create a mixin. These can be specific
 * to a class or standalone
 *
 */

.btn-small {
  padding: 2px 5px;
  font-size: 8px;
}

.disabled {
  opacity: 0.2;
}

<button class="btn">Default Button</button>
<button class="btn btn-small">Small Default Button</button>

<button class="btn--success">Success Button Button</button>
<button class="btn--success btn-small">Small Success Button Button</button>

<button class="btn--success btn-small disabled">Small Disabled Success Button Button</button>
```
