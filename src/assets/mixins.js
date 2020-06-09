export const mixinValidationStatus = {
  methods: {
    changeValidationStatus() {
      if (this.$v.$invalid) {
        this.validationStatusFalse();
      } else {
        this.validationStatusTrue();
      }
    }
  }
};

export const mixinUpdateCheckbox = {
  methods: {
    $_mixinUpdateCheckbox_update(evt) {
      let isChecked = evt.target.checked;

      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }

      isChecked ? (this.focusClass = "active") : (this.focusClass = "");
    }
  },
  computed: {
    $_mixinUpdateCheckbox_shouldBeChecked() {
      return this.modelValue instanceof Array
        ? this.modelValue.includes(this.value)
        : this.modelValue === this.trueValue;
    }
  }
};

export const mixinUpdateRadio = {
  methods: {
    $_mixinUpdateRadio_update() {
      this.$emit("change", this.value);
    }
  },
  computed: {
    $_mixinUpdateRadio_shouldBeChecked() {
      if (this.modelValue === this.value) {
        this.focusClass = "active";
        return true;
      } else {
        this.focusClass = "";
        return false;
      }
    }
  }
};

export const mixinFunHelpers = {
  computed: {
    $_mixinFunHelpers_capitalize(word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }
};
