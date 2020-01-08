<template>
  <div
    :id="id"
    :ref="id"
    v-if="item"
    class="item"
    :class="classObj"
    :style="{
      width: widthPx + 'px',
      height: heightPx + 'px',
      left: left + 'px',
      top: top + 'px'
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
        v-if="resizeTop && !dragging"
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
        v-if="resizeBottom && !dragging"
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
        v-if="resizeLeft && !dragging"
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
        v-if="resizeRight && !dragging"
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
        v-if="resizeTopLeft && !dragging"
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
        v-if="resizeTopRight && !dragging"
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
        v-if="resizeBottomLeft && !dragging"
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
        v-if="resizeBottomRight && !dragging"
        @dragstart.stop="onResizeStart($event, 'bottom right')"
        @drag.stop="onResize($event, 'bottom right')"
        @dragend.stop="onResizeEnd($event, 'bottom right')"
      >
        <slot name="resizeBottomRight"></slot>
      </div>
    </div>
    <slot></slot>
    <!-- <button @click="dragging = !dragging">{{ dragging }}</button> -->
  </div>
</template>

<script>
import { DashItem } from "./DashItem.model";

//Monitor the Props and update the item with the changed value
const watchProp = (key, deep) => ({
  handler(newValue) {
    //If the prop did not cause the update there is no updating
    if (this.item[key] === newValue) {
      return;
    }
    switch (key) {
      case "id":
        this.item.setId(newValue);
        break;
      case "x":
        this.item.setXAndUpdateLeft(newValue);
        break;
      case "y":
        this.item.setYAndUpdateTop(newValue);
        break;
      case "width":
        this.item.setWidthAndUpdatePx(newValue);
        break;
      case "height":
        this.item.setHeightAndUpdatePx(newValue);
        break;
      case "draggable":
        this.item.setDraggable(newValue);
        break;
      case "resizeable":
        this.item.setResizeable(newValue);
        break;
      case "resizeEdges":
        this.item.setResizeEdges(newValue);
        break;
      case "resizeHandleSize":
        this.item.setResizeHandleSize(newValue);
        break;
    }
  },
  deep
});

//Props to change via interaction and need to be emitted for prop.sync usage
const EMIT_PROPS = ["x", "y", "width", "height"];
//Monitor the item and emit an update to allow .sync usage
const watchEmitProp = (key, deep) => ({
  handler(newValue) {
    //If the prop caused the update there is no point emitting it back
    if (this.$props[key] === newValue) {
      return;
    }
    this.$emit("update:" + key, newValue);
  },
  deep
});

export default {
  name: "item",
  inheritAttrs: false,
  props: {
    id: { type: [Number, String], required: true },
    x: { type: Number, default: 100 },
    y: { type: Number, default: 100 },
    width: { type: Number, default: 100 },
    height: { type: Number, default: 100 },
    draggable: { type: Boolean, default: true },
    resizeable: { type: Boolean, default: true },
    resizeEdges: { type: String, default: "top bottom left right" },
    resizeHandleSize: { type: Number, default: 8 }
  },
  inject: ["$dashboard"],
  provide() {
    return {
      $item: () => this.item
    };
  },
  data() {
    return {
      item: null,
      dragging: false,
      resizing: false
    };
  },
  computed: {
    resizingOrDragging() {
      return this.resizing || this.dragging;
    },
    classObj() {
      return {
        dragging: this.resizingOrDragging
      };
    },
    dashboard() {
      return this.$dashboard();
    },
    left() {
      return this.item.left;
    },
    top() {
      return this.item.top;
    },
    widthPx() {
      return this.item.widthPx;
    },
    heightPx() {
      return this.item.heightPx;
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
      this.dragging = true;
      this.item.onDragStart(event);
      this.$emit("dragStart", this.item);
      event.target.style.opacity = 0.0;
    },
    onDrag(event) {
      this.item.onDrag(event);
      this.$emit("drag", this.item);
    },
    async onDragEnd(event) {
      event.preventDefault();
      this.item.onDragEnd(event);
      this.$emit("dragEnd", this.item);
      event.target.style.opacity = 1;
      await this.$nextTick();
      this.dragging = false;
    },
    onResizeStart(event, location) {
      this.resizing = true;
      this.item.onResizeStart(event, location);
      this.$emit("resizeStart", this.item);
      event.target.style.opacity = 0.0;
    },
    onResize(event, location) {
      this.item.onResize(event, location);
      this.$emit("resize", this, item);
    },
    async onResizeEnd(event, location) {
      this.item.onResizeEnd(event, location);
      this.$emit("resizeEnd", this.item);
      event.target.style.opacity = 1.0;
      await this.$nextTick();
      this.resize = false;
    },
    createPropWatchers() {
      //Setup prop watches to sync with the Dash Item
      Object.keys(this.$props).forEach(key => {
        this.$watch(key, watchProp(key, true));
      });
    },
    createDashItemWatchers() {
      //Setup Watchers for emmit sync option
      EMIT_PROPS.forEach(prop => {
        this.$watch("item." + prop, watchEmitProp(prop, true));
      });
    }
  },
  mounted() {
    this.item = new DashItem(this.$props);
    this.dashboard.addDashItem(this.item);
    this.createPropWatchers();
    this.createDashItemWatchers();
  },
  beforeDestroy() {
    this.dashboard.removeDashItem(this.item);
  }
};
</script>

<style lang="css">
.invisible {
  display: none;
}

.item {
  box-sizing: border-box;
  position: absolute;
  display: inline-block;
  transition: all 200ms ease;
  transition-property: left, top, right;
}
.item.dragging {
  transition: none;
  z-index: 3;
}
</style>
