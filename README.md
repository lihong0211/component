### 组件开发

```
npm i

npm start

nrm use npm
npm login
npm publish
```



### 组件使用

```
import { Button, Header } from '@cdut007/component-vue'
import Vue from 'vue'

Vue.use(Button)

<fly-button 
	:size="small"
	type="warning"
	:loading="true"
/>
```

