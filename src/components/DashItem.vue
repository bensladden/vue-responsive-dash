<template>
  <div
    ref="id"
    :id="id"
    :draggable="draggable"
    :style="{ width: width + 'px', height: height + 'px' }"
    style="position:absolute; border:1px solid;"
    @dragstart="dragStart($event)"
    @drag="drag($event)"
    @dragend="dragEnd($event)"
  >
    <slot></slot>
    <div
      :id="id + '-resize'"
      v-if="resizeable"
      :draggable="true"
      @dragstart.stop="resizeStart($event)"
      @drag.stop="resize($event)"
      @dragend.stop="resizeEnd($event)"
      class="resizeClass"
    >
      <svg viewBox="-6 -6 12 12" width="20" height="20">
        <g opacity="0.302">
          <path
            d="M 6 6 L 0 6 L 0 4.2 L 4 4.2 L 4.2 4.2 L 4.2 0 L 6 0 L 6 6 L 6 6 Z"
            fill="#000000"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashItem",
  inheritAttrs: false,
  //inject: [$dashboard],
  props: {
    id: { type: [Number, String], required: true },
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    // width: { type: Number, default: 100 },
    // height: { type: Number, default: 100 },
    draggable: { type: Boolean, default: true },
    resizeable: { type: Boolean, default: true }
  },
  data() {
    return {
      dragging: false,
      width: 100,
      height: 100,
      origWidth: 0,
      origHeight: 0
    };
  },
  methods: {
    dragStart(event) {
      console.log("dragStart", event);
      this.dragging = true;
    },
    dragEnd(event) {
      console.log("dragEnd", event);
      this.dragging = false;
    },
    drag(event) {
      console.log("drag", event);
    },
    resizeStart(event) {
      console.log("resizeStart", event.offsetX);
      this.origWidth = this.width;
      this.origHeight = this.height;
    },
    resize(event) {
      console.log("resize", event.offsetX);
      this.width = this.origWidth + event.offsetX;
      this.height = this.origHeight + event.offsetY;
    },
    resizeEnd(event) {
      console.log("resizeEnd", event.offsetX);
    }
  },
  beforeDestroy() {}
};
</script>

<style>
.resizeClass {
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 0;
  right: 0;
  padding: 0 3px 3px 0;
  cursor: se-resize;
}
</style>
