import type { App } from 'vue'
import WAlert from '@wei-ui/alert'


const components = [
    WAlert
]

const install = (app: App, opt: any): void => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}


export { WAlert }

const version = '0.0.0'
export default {
    version,
    install
}
