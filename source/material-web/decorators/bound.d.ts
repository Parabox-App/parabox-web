/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { FunctionKeys } from '@material/web/types/keys.js';
/**
 * Binds a class's method to its instance.
 *
 * @example
 * class MyClass {
 *   \@bound
 *   foo() { return this; }
 * }
 *
 * const instance = new MyClass();
 * const reference = instance.foo;
 * foo(); // MyClass
 *
 * @category Decorator
 * @ExportDecoratedItems
 */
export declare function bound<V extends Function>(target: object, propertyKey: string | symbol, methodDescriptor: TypedPropertyDescriptor<V>): TypedPropertyDescriptor<V>;
/**
 * Binds a class's function property to its instance.
 *
 * @example
 * class MyClass {
 *   \@bound
 *   foo = function(this: MyClass) { return this; }
 * }
 *
 * const instance = new MyClass();
 * const reference = instance.foo;
 * foo(); // MyClass
 *
 * @category Decorator
 * @ExportDecoratedItems
 */
export declare function bound<T extends object>(target: T, propertyKey: FunctionKeys<T>): any;
