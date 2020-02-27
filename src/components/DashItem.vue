<template>
  <div
    :id="id"
    :ref="id"
    v-if="item"
    class="item"
    :class="classObj"
    :style="cssStyle"
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
        cursor: 'move',
        zIndex: 1
      }"
      v-if="draggable"
      v-displace="{ customMove: onMove, ignoreFn: ignoreMove }"
      @onMouseDown="onMoveStart"
      @onMouseUp="onMoveEnd"
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
        v-displace="{ customMove: onResize }"
        @onMouseDown="onResizeStart($event, 'top')"
        @onMouseUp="onResizeEnd($event)"
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
        v-displace="{ customMove: onResize }"
        @onMouseDown="onResizeStart($event, 'bottom')"
        @onMouseUp="onResizeEnd($event)"
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
        v-displace="{ customMove: onResize }"
        @onMouseDown="onResizeStart($event, 'left')"
        @onMouseUp="onResizeEnd($event)"
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
        v-displace="{ customMove: onResize }"
        @onMouseDown="onResizeStart($event, 'right')"
        @onMouseUp="onResizeEnd($event)"
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
        v-displace="{ customMove: onResize }"
        @onMouseDown="onResizeStart($event, 'top left')"
        @onMouseUp="onResizeEnd($event)"
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
        v-displace="{ customMove: onResize }"
        @onMouseDown="onResizeStart($event, 'top right')"
        @onMouseUp="onResizeEnd($event)"
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
        v-displace="{ customMove: onResize }"
        @onMouseDown="onResizeStart($event, 'bottom left')"
        @onMouseUp="onResizeEnd($event)"
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
        v-displace="{ customMove: onResize }"
        @onMouseDown="onResizeStart($event, 'bottom right')"
        @onMouseUp="onResizeEnd($event)"
      >
        <slot name="resizeBottomRight"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { DashItem } from "./DashItem.model";
import { displace } from "vue-displace";

//Monitor the Props and update the item with the changed value
const watchProp = (key, deep) => ({
  handler(newValue) {
    //If the prop did not cause the update there is no updating
    if (this.item[key] === newValue) {
      return;
    }
    this.item[key] = newValue;
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
  name: "DashItem",
  inheritAttrs: false,
  directives: {
    displace
  },
  props: {
    id: { type: [Number, String], required: true },
    x: { type: Number, default: DashItem.defaults.x },
    y: { type: Number, default: DashItem.defaults.y },
    width: { type: Number, default: DashItem.defaults.width },
    height: { type: Number, default: DashItem.defaults.height },
    draggable: { type: Boolean, default: DashItem.defaults.draggable },
    resizable: { type: Boolean, default: DashItem.defaults.resizable },
    resizeEdges: { type: String, default: "bottom right" },
    resizeHandleSize: { type: Number, default: 8 }
  },
  inject: { $layout: { default: null } },
  provide() {
    return {
      $item: () => this.item
    };
  },
  data() {
    return {
      item: null,
      dragging: false,
      resizing: false,
      unWatch: null
    };
  },
  computed: {
    resizingOrDragging() {
      return this.resizing || this.dragging;
    },
    classObj() {
      return {
        dragging: this.resizingOrDragging,
        cssTransforms: this.useCssTransforms
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
      return false;
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
    ignoreMove() {
      return this.resizing;
    },
    onMoveStart(e) {
      this.dragging = true;
      this.item._onMoveStart(e.detail.event);
      this.$emit("moveStart", { ...this.item.toItem() });
    },
    onMove(el, left, top) {
      if (this.dragging) {
        this.item._onMove(left, top);
        this.$emit("moving", { ...this.item.toItem() });
      }
    },
    onMoveEnd(e) {
      this.item._onMoveEnd(e.detail.event);
      this.dragging = false;
      this.$emit("moveEnd", { ...this.item.toItem() });
    },
    onResizeStart(e, location) {
      this.resizing = true;
      this.item._onResizeStart2(e.detail.event, location);
      this.$emit("resizeStart", { ...this.item.toItem() });
    },
    onResize(el, left, top) {
      this.item._onResize2(left, top);
      this.$emit("resizing", { ...this.item.toItem() });
    },
    onResizeEnd(e) {
      let location = "bottom";
      this.item._onResizeEnd2(e.detail.event);
      this.$emit("resizeEnd", { ...this.item.toItem() });
      this.resizing = false;
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

    //Check if layout exists and if not then start a watcher
    if (this.layout) {
      this.layout.addDashItem(this.item);
      this.createPropWatchers();
      this.createDashItemWatchers();
    } else {
      this.unWatch = this.$watch(
        "layout",
        function(newValue) {
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
    if (this.layout) {
      this.layout.removeDashItem(this.item);
    }
  }
};
</script>

<style>
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
.item.cssTransforms {
  transition-property: transform;
  left: 0;
  right: auto;
}
</style>
