<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const isEditing = ref(false);
const editText = ref('');
const inputRef = ref(null);
const emit = defineEmits(['update:modelValue']);


const startEdit = () => {
  editText.value = props.modelValue;
  isEditing.value = true;
  nextTick(() => {
    inputRef.value?.focus()
  })
};
const finishEdit = () => {
  if (!isEditing.value) return;
  isEditing.value = false;
  emit('update:modelValue', editText.value);
};

const cancelEdit = () => {
  if (!isEditing.value) return;
  isEditing.value = false
};



</script>

<template>
  <div class="editable-label">
    <span v-if="!isEditing" class="label-text" @dblclick="startEdit">
      {{ modelValue }}
    </span>
    <input v-else ref="inputRef" v-model="editText" class="label-input" @blur="finishEdit" @keyup.enter="finishEdit"
      @keyup.esc="cancelEdit" />
  </div>
</template>

<style scoped>
.editable-label {
  display: block;
  width: 100%;
  cursor: pointer;
}

.label-text {
  display: block;
  width: 100%;
  padding: 4px 8px;
  box-sizing: border-box;
  border: 1px dashed transparent;
  border-radius: 4px;
  transition: border-color 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.label-text:hover {
  border-color: #dcdfe6;
}

.label-input {
  display: block;
  width: 100%;
  padding: 4px 8px;
  box-sizing: border-box;
  border: 1px solid #409eff;
  border-radius: 4px;
  outline: none;
  font-size: inherit;
  font-family: inherit;
}
</style>
