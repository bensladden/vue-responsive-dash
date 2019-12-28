<template>
  <div
    :id="id"
    :ref="id"
    v-if="item"
    :style="{
      boxSizing: 'border-box',
      position: 'absolute',
      display: 'inline-block',
      width: internalWidth + 'px',
      height: internalHeight + 'px',
      left: internalX + 'px',
      top: internalY + 'px'
    }"
  >
    <div
      draggable
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
        @dragstart.stop="onResizeStart($event, 'top')"
        @drag.stop="onResize($event, 'top')"
        @dragend.stop="onResizeEnd($event, 'top')"
      >
        <slot name="resizeTop"></slot>
      </div>
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
        @dragstart.stop="onResizeStart($event, 'bottom')"
        @drag.stop="onResize($event, 'bottom')"
        @dragend.stop="onResizeEnd($event, 'bottom')"
      >
        <slot name="resizeBottom"></slot>
      </div>
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
        @dragstart.stop="onResizeStart($event, 'left')"
        @drag.stop="onResize($event, 'left')"
        @dragend.stop="onResizeEnd($event, 'left')"
      >
        <slot name="resizeLeft"></slot>
      </div>
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
        @dragstart.stop="onResizeStart($event, 'right')"
        @drag.stop="onResize($event, 'right')"
        @dragend.stop="onResizeEnd($event, 'right')"
      >
        <slot name="resizeRight"></slot>
      </div>
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
        @dragstart.stop="onResizeStart($event, 'top left')"
        @drag.stop="onResize($event, 'top left')"
        @dragend.stop="onResizeEnd($event, 'top left')"
      >
        <slot name="resizeTopLeft"></slot>
      </div>
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
        @dragstart.stop="onResizeStart($event, 'top right')"
        @drag.stop="onResize($event, 'top right')"
        @dragend.stop="onResizeEnd($event, 'top right')"
      >
        <slot name="resizeTopRight"></slot>
      </div>
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
        @dragstart.stop="onResizeStart($event, 'bottom left')"
        @drag.stop="onResize($event, 'bottom left')"
        @dragend.stop="onResizeEnd($event, 'bottom left')"
      >
        <slot name="resizeBottomLeft"></slot>
      </div>
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
        @dragstart.stop="onResizeStart($event, 'bottom right')"
        @drag.stop="onResize($event, 'bottom right')"
        @dragend.stop="onResizeEnd($event, 'bottom right')"
      >
        <slot name="resizeBottomRight"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { DashItem } from "./DashItem.model";
export default {
  name: "item",
  inheritAttrs: false,
  props: {
    id: { type: [Number, String], required: true },
    draggable: { type: Boolean, default: true },
    x: { type: Number, default: 100 },
    y: { type: Number, default: 100 },
    resizeable: { type: Boolean, default: true },
    width: { type: Number, default: 100 },
    height: { type: Number, default: 100 },
    resizeEdges: { type: String, default: "top bottom left right" },
    resizeHandleSize: { type: Number, default: 8 }
  },
  data() {
    return {
      item: null,
      dragging: false,
      resizing: false
    };
  },
  computed: {
    internalX() {
      return this.item.x;
    },
    internalY() {
      return this.item.y;
    },
    internalWidth() {
      return this.item.width;
    },
    internalHeight() {
      return this.item.height;
    },
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
    async onDragStart(event) {
      this.$emit("dragStart", event);
      this.item.onDragStart(event);
      event.target.style.opacity = 0.0;
    },
    onDrag(event) {
      this.$emit("drag", event);
      this.item.onDrag(event);
    },
    onDragEnd(event) {
      event.preventDefault();
      this.$emit("dragEnd", event);
      this.item.onDragEnd(event);
      event.target.style.opacity = 1;
    },
    onResizeStart(event, location) {
      this.$emit("resizeStart", event);
      this.item.onResizeStart(event, location);
      event.target.style.opacity = 0.0;
    },
    onResize(event, location) {
      this.$emit("resize", event);
      this.item.onResize(event, location);
    },
    onResizeEnd(event, location) {
      this.$emit("resizeEnd", event);
      this.item.onResizeEnd(event, location);
      event.target.style.opacity = 1.0;
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
  mounted() {
    this.item = new DashItem(this.$props);
  },
  beforeDestroy() {}
};
</script>

<style lang="css" module>
.invisible {
  display: none;
}
</style>
