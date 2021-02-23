# yn-dropdown

<demo-dropdown></demo-dropdown>

```vue
<!-- 默认方向向下，down，弹出层borderRadius为0 -->
<yn-dropdown ref="dropdown" :borderRadius="0">
  <yn-button slot="target" @click="toggle">以下</yn-button>
  <div slot="content">里面是内容</div>
</yn-dropdown>
<!--方向向上-->
<yn-dropdown ref="dropup" direction="up">
  <yn-button slot="target" @click="toggle2">以上</yn-button>
  <div slot="content">里面是内容</div>
</yn-dropdown>
<!--方向向左-->
<yn-dropdown ref="left" direction="left">
  <yn-button slot="target" class="left" @click="toggle3">左边</yn-button>
  <div slot="content">里面是内容</div>
</yn-dropdown>
<!--方向向右-->
<yn-dropdown ref="right" direction="right">
  <yn-button slot="target" @click="toggle4">右边</yn-button>
  <div slot="content">里面是内容</div>
</yn-dropdown>
```