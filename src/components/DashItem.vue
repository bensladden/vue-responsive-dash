<template>
  <div
    :id="id"
    :ref="id"
    :style="{
      boxSizing: 'border-box',
      position: 'absolute',
      display: 'inline-block'
    }"
  >
    <div
      :id="id + '-overlay'"
      :ref="id + '-overlay'"
      :style="{
        top: 0 + 'px',
        left: 0 + 'px',
        bottom: 0 + 'px',
        right: 0 + 'px',
        position: 'absolute',
        cursor: 'move'
      }"
      v-if="draggable"
      @dragstart.stop="onDragStart($event)"
      @drag.stop="onDrag($event)"
      @dragend.stop="onDragEnd($event)"
      draggable
    >
      <div
        draggable
        :id="id + '-resizeTop'"
        :ref="id + '-resizeTop'"
        :style="{
          height: resizeHandleSize + 'px',
          left: 0,
          right: 0,
          cursor: 'ns-resize',
          position: 'absolute'
        }"
        v-if="resizeTop"
        @dragstart.stop="onResizeStart($event)"
        @drag.stop="onResize($event)"
        @dragend.stop="onResizeEnd($event)"
      ></div>
      <div
        draggable
        :id="id + '-resizeBottom'"
        :ref="id + '-resizeBottom'"
        :style="{
          height: resizeHandleSize + 'px',
          left: 0 + 'px',
          right: 0 + 'px',
          bottom: 0 + 'px',
          cursor: 'ns-resize',
          position: 'absolute'
        }"
        v-if="resizeBottom"
        @dragstart.stop="onResizeStart($event)"
        @drag.stop="onResize($event)"
        @dragend.stop="onResizeEnd($event)"
      ></div>
      <div
        draggable
        :id="id + '-resizeRight'"
        :ref="id + '-resizeRight'"
        :style="{
          width: resizeHandleSize + 'px',
          top: 0 + 'px',
          bottom: 0 + 'px',
          right: 0 + 'px',
          cursor: 'ew-resize',
          position: 'absolute'
        }"
        v-if="resizeRight"
        @dragstart.stop="onResizeStart($event)"
        @drag.stop="onResize($event)"
        @dragend.stop="onResizeEnd($event)"
      ></div>

      <div
        draggable
        :id="id + '-resizeLeft'"
        :ref="id + '-resizeLeft'"
        :style="{
          width: resizeHandleSize + 'px',
          top: 0 + 'px',
          bottom: 0 + 'px',
          left: 0 + 'px',
          cursor: 'ew-resize',
          position: 'absolute'
        }"
        v-if="resizeLeft"
        @dragstart.stop="onResizeStart($event)"
        @drag.stop="onResize($event)"
        @dragend.stop="onResizeEnd($event)"
      ></div>
      <div
        draggable
        :id="id + '-resizeTopLeft'"
        :ref="id + '-resizeTopLeft'"
        :style="{
          width: resizeHandleSize * 2 + 'px',
          height: resizeHandleSize * 2 + 'px',
          top: resizeHandleSize / -2 + 'px',
          left: resizeHandleSize / -2 + 'px',
          cursor: 'nw-resize',
          position: 'absolute'
        }"
        v-if="resizeTopLeft"
        @dragstart.stop="onResizeStart($event)"
        @drag.stop="onResize($event)"
        @dragend.stop="onResizeEnd($event)"
      ></div>
      <div
        draggable
        :id="id + '-resizeTopRight'"
        :ref="id + '-resizeTopRight'"
        :style="{
          width: resizeHandleSize * 2 + 'px',
          height: resizeHandleSize * 2 + 'px',
          top: resizeHandleSize / -2 + 'px',
          right: resizeHandleSize / -2 + 'px',
          cursor: 'ne-resize',
          position: 'absolute'
        }"
        v-if="resizeTopRight"
        @dragstart.stop="onResizeStart($event)"
        @drag.stop="onResize($event)"
        @dragend.stop="onResizeEnd($event)"
      ></div>
      <div
        draggable
        :id="id + '-resizeBottomLeft'"
        :ref="id + '-resizeBottomLeft'"
        :style="{
          width: resizeHandleSize * 2 + 'px',
          height: resizeHandleSize * 2 + 'px',
          bottom: resizeHandleSize / -2 + 'px',
          left: resizeHandleSize / -2 + 'px',
          cursor: 'ne-resize',
          position: 'absolute'
        }"
        v-if="resizeBottomLeft"
        @dragstart.stop="onResizeStart($event)"
        @drag.stop="onResize($event)"
        @dragend.stop="onResizeEnd($event)"
      ></div>
      <div
        draggable
        :id="id + '-resizeBottomRight'"
        :ref="id + '-resizeBottomRight'"
        :style="{
          width: resizeHandleSize * 2 + 'px',
          height: resizeHandleSize * 2 + 'px',
          bottom: resizeHandleSize / -2 + 'px',
          right: resizeHandleSize / -2 + 'px',
          cursor: 'nw-resize',
          position: 'absolute'
        }"
        v-if="resizeBottomRight"
        @dragstart.stop="onResizeStart($event)"
        @drag.stop="onResize($event)"
        @dragend.stop="onResizeEnd($event)"
      ></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DashItem",
  inheritAttrs: false,
  props: {
    id: { type: [Number, String], default: "test", required: true },
    draggable: { type: Boolean, default: true },
    resizeable: { type: Boolean, default: true },
    resizeEdges: { type: String, default: "top bottom left right" },
    resizeHandleSize: { type: Number, default: 8 }
  },
  data() {
    return {
      dragging: false
    };
  },
  computed: {
    resizeTop() {
      return this.resizeEdges.includes("top");
    },
    resizeBottom() {
      return this.resizeEdges.includes("bottom");
    },
    resizeLeft() {
      return this.resizeEdges.includes("left");
    },
    resizeRight() {
      return this.resizeEdges.includes("right");
    },
    resizeTopLeft() {
      return this.resizeTop && this.resizeLeft;
    },
    resizeBottomLeft() {
      return this.resizeBottom && this.resizeLeft;
    },
    resizeTopRight() {
      return this.resizeTop && this.resizeRight;
    },
    resizeBottomRight() {
      return this.resizeBottom && this.resizeRight;
    }
  },
  methods: {
    onDragStart(event) {
      this.$emit("dragStart", event);
      //   event.target.style.opacity = 0.5;
      event.dataTransfer.setData("text/plain", "dummy");
    },
    onDrag(event) {
      this.$emit("drag", event);
    },
    onDragEnd(event) {
      this.$emit("dragEnd", event);
    },
    onResizeStart(event) {
      this.$emit("resizeStart", event);
    },
    onResize(event) {
      this.$emit("resize", event);
    },
    onResizeEnd(event) {
      this.$emit("resizeEnd", event);
    },
    addClass(el, cls) {
      if (arguments.length < 2) {
        el.classList.add(cls);
      } else {
        for (let i = 1, len = arguments.length; i < len; i++) {
          el.classList.add(arguments[i]);
        }
      }
    },
    removeClass(el, cls) {
      if (arguments.length < 2) {
        el.classList.remove(cls);
      } else {
        for (let i = 1, len = arguments.length; i < len; i++) {
          el.classList.remove(arguments[i]);
        }
      }
    }
  },
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="css" module>
.invisible {
  display: none;
}
</style>
