import { ElementFactoryTester } from "./ElementFactoryTester";
import { HTMLElementFactory } from "./html/HTMLElementFactory";
import { KotlinElementFactory } from "./kotlin/KotlinElementFactory";

new ElementFactoryTester(new HTMLElementFactory()).test();
new ElementFactoryTester(new KotlinElementFactory()).test();
