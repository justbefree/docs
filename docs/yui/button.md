# button

<demo-button demo="1"></demo-button>
```vue
<yn-button @click="handleClick"><span>这是文案，可点击</span></yn-button>
```
<demo-button demo="2"></demo-button>
```vue
<yn-button disabled><span>禁止点击</span></yn-button>
```
<demo-button demo="3"></demo-button>
```vue
<yn-button :loading="true" loadingColor="red"><span>这是文案</span></yn-button>
```
<demo-button demo="4"></demo-button>
```vue
<yn-button :loading="true" size="large" loadingColor="green"><span>这是文案</span></yn-button>
```
<demo-button demo="5"></demo-button>
```vue
<yn-button :loading="true" size="small"><span>我不可以点击</span></yn-button>
```
<demo-button demo="6"></demo-button>
```vue
<yn-button type="danger">危险</yn-button>
```
<demo-button demo="7"></demo-button>
```vue
<yn-button type="primary">主题色</yn-button>
```
<demo-button demo="8"></demo-button>
```vue
<yn-button type="warning">警告</yn-button>
```
<demo-button demo="9"></demo-button>
```vue
<yn-button type="primary" plain>plain</yn-button>
```
<demo-button demo="10"></demo-button>
```vue
<yn-button type="warning" plain>plain</yn-button>
```
<demo-button demo="11"></demo-button>
```vue
<yn-button :loading="true" loadingText="loading text">plain</yn-button>
```
<demo-button demo="12"></demo-button>
```vue
<yn-button iconName="iconback" iconColor="red">button with icon</yn-button>
```