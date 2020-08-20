<template>
  <div
    :id="'item_' + id"
    ref="item"
    class="item"
    :style="cssStyle"
    :class="classObj"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Resize Top Div -->
    <div
      :id="id + '-resizeTop'"
      :ref="id + '-resizeTop'"
      class="resize resize-top"
      :style="{
        height: resizeHandleSize + 'px',
        top: -(resizeHandleSize / 2) + 'px',
        left: 0,
        right: 0,
        cursor: 'ns-resize',
        position: 'absolute',
        zIndex: resizableZIndex,
      }"
      v-if="resizeTop"
    >
      <slot name="resizeTop"></slot>
    </div>
    <!-- Resize Bottom Div -->
    <div
      :id="id + '-resizeBottom'"
      :ref="id + '-resizeBottom'"
      class="resize resize-bottom"
      :style="{
        height: resizeHandleSize + 'px',
        left: 0 + 'px',
        right: 0 + 'px',
        bottom: -(resizeHandleSize / 2) + 'px',
        cursor: 'ns-resize',
        position: 'absolute',
        zIndex: resizableZIndex,
      }"
      v-if="resizeBottom"
    >
      <slot name="resizeBottom"></slot>
    </div>
    <!-- Resize Left Div -->
    <div
      :id="id + '-resizeLeft'"
      :ref="id + '-resizeLeft'"
      class="resize resize-left"
      :style="{
        width: resizeHandleSize + 'px',
        top: 0 + 'px',
        bottom: 0 + 'px',
        left: -(resizeHandleSize / 2) + 'px',
        cursor: 'ew-resize',
        position: 'absolute',
        zIndex: resizableZIndex,
      }"
      v-if="resizeLeft"
    >
      <slot name="resizeLeft"></slot>
    </div>
    <!-- Resize Right Div -->
    <div
      :id="id + '-resizeRight'"
      :ref="id + '-resizeRight'"
      class="resize resize-right"
      :style="{
        width: resizeHandleSize + 'px',
        top: 0 + 'px',
        bottom: 0 + 'px',
        right: -(resizeHandleSize / 2) + 'px',
        cursor: 'ew-resize',
        position: 'absolute',
        zIndex: resizableZIndex,
      }"
      v-if="resizeRight"
    >
      <slot name="resizeRight"></slot>
    </div>
    <!-- Resize Top Left Div -->
    <div
      :id="id + '-resizeTopLeft'"
      :ref="id + '-resizeTopLeft'"
      class="resize resize-left resize-top"
      :style="{
        width: resizeHandleSize * 2 + 'px',
        height: resizeHandleSize * 2 + 'px',
        top: -resizeHandleSize + 'px',
        left: -resizeHandleSize + 'px',
        cursor: 'nw-resize',
        position: 'absolute',
        zIndex: resizableZIndex,
      }"
      v-if="resizeTopLeft"
    >
      <slot name="resizeTopLeft"></slot>
    </div>
    <!-- Top Right Resize Div -->
    <div
      :id="id + '-resizeTopRight'"
      :ref="id + '-resizeTopRight'"
      class="resize resize-right resize-top"
      :style="{
        width: resizeHandleSize * 2 + 'px',
        height: resizeHandleSize * 2 + 'px',
        top: -resizeHandleSize + 'px',
        right: -resizeHandleSize + 'px',
        cursor: 'ne-resize',
        position: 'absolute',
        zIndex: resizableZIndex,
      }"
      v-if="resizeTopRight"
    >
      <slot name="resizeTopRight"></slot>
    </div>
    <!-- Bottom Left Resize Div -->
    <div
      :id="id + '-resizeBottomLeft'"
      :ref="id + '-resizeBottomLeft'"
      class="resize resize-left resize-bottom"
      :style="{
        width: resizeHandleSize * 2 + 'px',
        height: resizeHandleSize * 2 + 'px',
        bottom: -resizeHandleSize + 'px',
        left: -resizeHandleSize + 'px',
        cursor: 'ne-resize',
        position: 'absolute',
        zIndex: resizableZIndex,
      }"
      v-if="resizeBottomLeft"
    >
      <slot name="resizeBottomLeft"></slot>
    </div>
    <!-- Bottom Right Resize Div -->
    <div
      :id="id + '-resizeBottomRight'"
      :ref="id + '-resizeBottomRight'"
      class="resize resize-right resize-bottom"
      :style="{
        width: resizeHandleSize * 2 + 'px',
        height: resizeHandleSize * 2 + 'px',
        bottom: -resizeHandleSize + 'px',
        right: -resizeHandleSize + 'px',
        cursor: 'nw-resize',
        position: 'absolute',
        zIndex: resizableZIndex,
      }"
      v-if="resizeBottomRight"
    >
      <slot name="resizeBottomRight"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import "@interactjs/actions";
import "@interactjs/auto-start";
import interact from "@interactjs/interact";

import { DashItem } from "./DashItem.model";
import { Layout as layoutModel } from "./Layout.model";

//Monitor the Props and update the item with the changed value
const watchProp = (key, deep) => ({
  handler(newValue) {
    //If the prop did not cause the update there is no updating
    if (this.item[key] === newValue) {
      return;
    }
    this.item[key] = newValue;
  },
  deep,
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
  deep,
});

export default {
  name: "DashItem",
  inheritAttrs: false,
  props: {
    id: { type: [Number, String], required: true },
    x: { type: Number, default: DashItem.defaults.x },
    y: { type: Number, default: DashItem.defaults.y },
    width: { type: Number, default: DashItem.defaults.width },
    maxWidth: { type: [Number, Boolean], default: DashItem.defaults.maxWidth },
    minWidth: { type: [Number, Boolean], default: DashItem.defaults.minWidth },
    height: { type: Number, default: DashItem.defaults.height },
    maxHeight: {
      type: [Number, Boolean],
      default: DashItem.defaults.maxHeight,
    },
    minHeight: {
      type: [Number, Boolean],
      default: DashItem.defaults.minHeight,
    },
    draggable: { type: Boolean, default: DashItem.defaults.draggable },
    resizable: { type: Boolean, default: DashItem.defaults.resizable },
    resizeEdges: { type: String, default: "bottom right" },
    resizeHandleSize: { type: Number, default: 8 },
    draggableZIndex: { type: Number, default: 1 }, //TODO remove
    resizableZIndex: { type: Number, default: 1 }, //TODO consider removing
    moveHold: { type: Number, default: 0 },
    resizeHold: { type: Number, default: 0 },
    dragAllowFrom: { type: String, default: null },
    dragIgnoreFrom: { type: String, default: null },
    locked: { type: Boolean, default: DashItem.defaults.locked },
  },
  inject: { $layout: { default: null } },
  provide() {
    return {
      $item: () => this.item,
    };
  },
  data() {
    return {
      interactInstance: null,
      item: null,
      dragging: false,
      resizing: false,
      unWatch: null,
      hover: false,
    };
  },
  computed: {
    resizingOrDragging() {
      return (this.resizing || this.dragging) && !this.locked;
    },
    classObj() {
      return {
        dragging: this.resizingOrDragging,
        cssTransforms: this.useCssTransforms,
      };
    },
    layout() {
      if (this.$layout) {
        return this.$layout();
      }
      return null;
    },
    useCssTransforms() {
      if (this.layout) {
        return this.layout.useCssTransforms;
      }
      return layoutModel.default.useCssTransforms;
    },
    left() {
      if (this.item) {
        return this.item.left;
      }
      return 0;
    },
    top() {
      if (this.item) {
        return this.item.top;
      }
      return 0;
    },
    widthPx() {
      if (this.item) {
        return this.item.widthPx;
      }
      return 0;
    },
    heightPx() {
      if (this.item) {
        return this.item.heightPx;
      }
      return 0;
    },
    cssStyle() {
      if (this.useCssTransforms) {
        return DashItem.cssTransform(
          this.top,
          this.left,
          this.widthPx,
          this.heightPx
        );
      } else {
        return DashItem.cssTopLeft(
          this.top,
          this.left,
          this.widthPx,
          this.heightPx
        );
      }
    },
    resizeTop() {
      return !this.locked && this.resizable && this.resizeEdges.includes("top");
    },
    resizeBottom() {
      return (
        !this.locked && this.resizable && this.resizeEdges.includes("bottom")
      );
    },
    resizeLeft() {
      return (
        !this.locked && this.resizable && this.resizeEdges.includes("left")
      );
    },
    resizeRight() {
      return (
        !this.locked && this.resizable && this.resizeEdges.includes("right")
      );
    },
    resizeTopLeft() {
      return !this.locked && this.resizeTop && this.resizeLeft;
    },
    resizeBottomLeft() {
      return !this.locked && this.resizeBottom && this.resizeLeft;
    },
    resizeTopRight() {
      return !this.locked && this.resizeTop && this.resizeRight;
    },
    resizeBottomRight() {
      return !this.locked && this.resizeBottom && this.resizeRight;
    },
  },
  methods: {
    setDraggable() {
      if (this.draggable && !this.locked) {
        this.interactInstance.draggable({
          enabled: true,
          hold: this.moveHold,
          allowFrom: this.dragAllowFrom,
          ignoreFrom: this.dragIgnoreFrom,
          listeners: {
            start: (event) => {
              this.onMoveStart(event);
            },
            move: (event) => {
              this.onMove(event);
            },
            end: (event) => {
              this.onMoveEnd(event);
            },
          },
        });
      } else {
        this.interactInstance.draggable(false);
      }
    },
    setResizable() {
      if (this.resizable && !this.locked) {
        this.interactInstance.resizable({
          enabled: true,
          hold: this.resizeHold,
          edges: {
            top: ".resize-top",
            left: ".resize-left",
            bottom: ".resize-bottom",
            right: ".resize-right",
          },
          listeners: {
            start: (event) => {
              this.onResizeStart(event);
            },
            move: (event) => {
              this.onResize(event);
            },
            end: (event) => {
              this.onResizeEnd(event);
            },
          },
        });
      } else {
        this.interactInstance.resizable(false);
      }
    },
    onMoveStart(e) {
      this.dragging = true;
      this.item._onMoveStart();
      this.$emit("moveStart", { ...this.item.toItem() });
    },
    onMove(event) {
      if (this.dragging) {
        this.item._onMove(event.dx, event.dy);
        this.$emit("moving", { ...this.item.toItem() });
      }
    },
    onMoveEnd(e) {
      this.item._onMoveEnd();
      this.dragging = false;
      this.$emit("moveEnd", { ...this.item.toItem() });
    },
    onResizeStart(e) {
      this.resizing = true;
      this.item._onResizeStart();
      this.$emit("resizeStart", { ...this.item.toItem() });
    },
    onResize(e) {
      if (this.resizing) {
        this.item._onResize(e);
        this.$emit("resizing", { ...this.item.toItem() });
      }
    },
    onResizeEnd(e) {
      this.item._onResizeEnd();
      this.resizing = false;
      this.$emit("resizeEnd", { ...this.item.toItem() });
    },
    createPropWatchers() {
      //Setup prop watches to sync with the Dash Item
      Object.keys(this.$props).forEach((key) => {
        this.$watch(key, watchProp(key, true));
      });
    },
    createDashItemWatchers() {
      //Setup Watchers for emmit sync option
      EMIT_PROPS.forEach((prop) => {
        this.$watch("item." + prop, watchEmitProp(prop, true));
      });
    },
  },
  watch: {
    hover(newValue) {
      this.item.hover = newValue;
      if (newValue) {
        this.$emit("hoverStart", this.item);
      } else {
        this.$emit("hovenEnd", this.item);
      }
    },
    draggable() {
      this.setDraggable();
    },
    resizable() {
      this.setResizable();
    },
    locked() {
      this.setDraggable();
      this.setResizable();
    },
    moveHold() {
      this.setDraggable();
    },
    resizeHold() {
      this.setResizable();
    },
    dragAllowFrom() {
      this.setDraggable();
    },
    dragIgnoreFrom() {
      this.setDraggable();
    },
  },
  mounted() {
    this.item = new DashItem(this.$props);

    this.interactInstance = interact(this.$refs.item);
    this.setDraggable();
    this.setResizable();

    //Check if layout exists and if not then start a watcher
    if (this.layout) {
      this.layout.addDashItem(this.item);
      this.createPropWatchers();
      this.createDashItemWatchers();
    } else {
      this.unWatch = this.$watch(
        "layout",
        function (newValue) {
          if (newValue) {
            this.layout.addDashItem(this.item);
            this.createPropWatchers();
            this.createDashItemWatchers();
            this.unWatch();
          }
        },
        { immediate: true }
      );
    }
  },
  beforeDestroy() {
    if (this.interactInstance) {
      this.interactInstance.unset();
    }
    if (this.layout) {
      this.layout.removeDashItem(this.item);
    }
  },
};
</script>

<style scoped>
.item {
  box-sizing: border-box;
  position: absolute;
  display: inline-block;
  transition: all 200ms ease;
  transition-property: left, top, right;
  touch-action: none;
  user-select: none;
}
.item.dragging {
  transition: none;
  z-index: 3;
}

.resize {
  touch-action: none;
  user-select: none;
}

.item.cssTransforms {
  transition-property: transform;
  left: 0;
  right: auto;
}
</style>
