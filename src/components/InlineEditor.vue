<template>

  <div id="main">
    <div id="tooltip" v-bind:class="isTooltipOpen ? 'show' : 'hide'">
      <input type="text" v-model="inputText">
    </div>
    <p  @click="toggleTooltip"><i class="fas fa-pencil-alt"></i>  {{ inputText }} </p>
  </div>

</template>

<script>
export default {
  name: 'InlineEditor',

  data() {
    return {
      inputText: 'Edit me.',
      isTooltipOpen: false
    }
  },

  methods: {
    toggleTooltip() {
      this.isTooltipOpen = !this.isTooltipOpen;
    }
  }
}
</script>

<style scoped>
  div#main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    position: relative;
    height: 70vh;
  }

  div#tooltip {
    background-color: #5c9bb7;
    box-shadow: 0 1px 1px #ccc;
    border-radius: 3px;
    padding: 0.6rem 0.8rem 0.6rem 0.7rem;
    position: absolute;
    left: 48%;
    margin-left: -5rem;
    top: -4rem;
  }

  div#tooltip:after {
    content: '';
    position: absolute;
    border: 6px solid #5190ac;
    border-color: #5190ac transparent transparent;
    width: 0;
    height: 0;
    bottom: -12px;
    left: 50%;
    margin-left: -6px;
  }

  input {
    width: 100%;
    border: none;
    width: 100%;
    line-height: 1.8rem;
    border-radius: 3px;
    box-shadow: 0 2px 6px #bbb inset;
    text-align: center;
    font-size: 16px;
    font-family: inherit;
    color: #8d9395;
    font-weight: bold;
    outline: none;
  }

  p {
    font-size: 22px;
    font-weight: bold;
    color: #6d8088;
    cursor: pointer;
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }
</style>
