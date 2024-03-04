import { defineCustomElement } from 'vue'
import HelloWorldComponent from './components/HelloWorld.ce.vue'

const HelloWorld = defineCustomElement(HelloWorldComponent)

customElements.define('hello-world', HelloWorld)