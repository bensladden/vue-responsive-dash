<template>
  <div
    :id="id"
    :ref="id"
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
export default {
  name: "DashItem",
  inheritAttrs: false,
  props: {
    id: { type: [Number, String], default: "test", required: true },
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
      dragging: false,
      resizing: false,
      internalWidth: 0,
      internalHeight: 0,
      internalX: 0,
      internalY: 0,
      startingX: 0,
      startingY: 0,
      startingWidth: 0,
      startingHeight: 0,
      startingClientX: 0,
      startingClientY: 0
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
    async onDragStart(event) {
      this.$emit("dragStart", event);
      event.dataTransfer.setData("text/plain", this.id);
      this.dragging = true;
      this.startingClientX = event.clientX;
      this.startingClientY = event.clientY;
      this.startingX = this.internalX;
      this.startingY = this.internalY;
      event.target.style.opacity = 0.0;
      //return false;
    },
    onDrag(event) {
      this.$emit("drag", event);
      this.internalX = this.startingX - this.startingClientX + event.clientX;
      this.internalY = this.startingY - this.startingClientY + event.clientY;
    },
    onDragEnd(event) {
      event.preventDefault();
      this.$emit("dragEnd", event);
      this.internalX = this.startingX - this.startingClientX + event.clientX;
      this.internalY = this.startingY - this.startingClientY + event.clientY;
      this.dragging = false;
      this.startingClientX = 0;
      this.startingClientY = 0;
      this.startingX = 0;
      this.startingY = 0;
      event.target.style.opacity = 1;
      event.dataTransfer.clearData();
    },
    onResizeStart(event, type) {
      this.$emit("resizeStart", event);
      event.dataTransfer.setData("text/plain", this.id);
      this.resizing = true;
      this.startingWidth = this.internalWidth;
      this.startingHeight = this.internalHeight;
      this.startingClientX = event.clientX;
      this.startingClientY = event.clientY;
      this.startingX = this.internalX;
      this.startingY = this.internalY;
    },
    onResize(event, type) {
      this.$emit("resize", event);
      if (type.includes("right")) {
        this.internalWidth =
          this.startingWidth - this.startingClientX + event.clientX;
      }
      if (type.includes("bottom")) {
        this.internalHeight =
          this.startingHeight - this.startingClientY + event.clientY;
      }
      if (type.includes("top")) {
        this.internalY = this.startingY - this.startingClientY + event.clientY;
        this.internalHeight =
          this.startingHeight + this.startingClientY - event.clientY;
      }
      if (type.includes("left")) {
        this.internalX = this.startingX - this.startingClientX + event.clientX;
        this.internalWidth =
          this.startingWidth + this.startingClientX - event.clientX;
      }
    },
    onResizeEnd(event, type) {
      event.preventDefault();
      if (type.includes("right")) {
        this.internalWidth =
          this.startingWidth - this.startingClientX + event.clientX;
      }
      if (type.includes("bottom")) {
        this.internalHeight =
          this.startingHeight - this.startingClientY + event.clientY;
      }
      if (type.includes("top")) {
        this.internalY = this.startingY - this.startingClientY + event.clientY;
        this.internalHeight =
          this.startingHeight + this.startingClientY - event.clientY;
      }
      if (type.includes("left")) {
        this.internalX = this.startingX - this.startingClientX + event.clientX;
        this.internalWidth =
          this.startingWidth + this.startingClientX - event.clientX;
      }
      this.$emit("resizeEnd", event);
      this.resizing = false;
      this.startingX = 0;
      this.startingY = 0;
      this.startingWidth = 0;
      this.startingHeight = 0;
      this.startingClientX = 0;
      this.startingClientY = 0;
      event.dataTransfer.clearData();
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
    this.internalWidth = this.width;
    this.internalHeight = this.height;
    this.internalX = this.x;
    this.internalY = this.y;
  },
  beforeDestroy() {}
};
</script>

<style lang="css" module>
.invisible {
  display: none;
}
</style>
