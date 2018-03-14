/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["setMatrixArrayType"] = setMatrixArrayType;
/* harmony export (immutable) */ __webpack_exports__["toRadian"] = toRadian;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = 0.000001;
/* harmony export (immutable) */ __webpack_exports__["EPSILON"] = EPSILON;

let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
const RANDOM = Math.random;
/* harmony export (immutable) */ __webpack_exports__["RANDOM"] = RANDOM;


/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return __WEBPACK_IMPORTED_MODULE_0__mesh__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return __WEBPACK_IMPORTED_MODULE_1__material__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialLibrary", function() { return __WEBPACK_IMPORTED_MODULE_1__material__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return __WEBPACK_IMPORTED_MODULE_2__layout__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "downloadModels", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "downloadMeshes", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "initMeshBuffers", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMeshBuffers", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "downloadMtlTextures", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["d"]; });






/**
 * @namespace
 */



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__ = __webpack_require__(7);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__; });
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER













/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let OBJ = __webpack_require__(1);
class BasicModel {
    constructor(mesh) {
        this.mesh = mesh;
        this.initialized = false;
    }
    init(gl) {
        this.VAO = gl.createVertexArray();
        OBJ.initMeshBuffers(gl, this.mesh);
        gl.bindVertexArray(this.VAO);
        gl.enableVertexAttribArray(0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.vertexBuffer);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(1);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.normalBuffer);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, true, 0, 0);
        gl.enableVertexAttribArray(2);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.textureBuffer);
        gl.vertexAttribPointer(2, 2, gl.FLOAT, true, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
        let grey = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, grey);
        const pixel = new Uint8Array([220, 220, 220, 255]); // opaque blue
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, pixel);
        this.textures = [];
        this.textures.push(grey);
        this.initialized = true;
    }
    generateRandomInstancingBuffers(gl, dimensionCount, offset) {
        var offsets = [];
        var colors = [];
        var scales = [];
        // Generate a three dmensional grid for our instanced positions
        var dim = dimensionCount;
        this.instanceCount = 0;
        for (var x = 0; x < dim; x++) {
            for (var z = 0; z < dim; z++) {
                let v = z;
                if (v % 2)
                    v = -v;
                let w = x;
                if (w % 2)
                    w = -w;
                offsets.push(w * offset, Math.random() * 3000 - 6000, v * offset);
                colors.push(0.75 + Math.random() * 0.25, 0.75 + Math.random() * 0.25, 0.75 + Math.random() * 0.25, 1.0);
                let rand = Math.random();
                scales.push(rand * 5 + 1, 0.001, rand * 5 + 1);
                this.instanceCount++;
            }
        }
        // Setup instancing buffers for position offsets and color
        this.instancingOffsets = this.generateArrayBuffer(gl, new Float32Array(offsets), gl.STATIC_DRAW, 3);
        this.instancingScales = this.generateArrayBuffer(gl, new Float32Array(scales), gl.STATIC_DRAW, 3);
        this.doBinds(gl);
    }
    generateInstancingOffsetScale(gl, offsets, scales) {
        let colors = [];
        let count = offsets.length / 3;
        this.instanceCount = count;
        for (let i = 0; i < count; i++) {
            colors.push(1, 1, 1, 1);
        }
        // Setup instancing buffers for position offsets and color
        this.instancingOffsets = this.generateArrayBuffer(gl, new Float32Array(offsets), gl.STATIC_DRAW, 3);
        this.instancingScales = this.generateArrayBuffer(gl, new Float32Array(scales), gl.STATIC_DRAW, 3);
        this.doBinds(gl);
    }
    generateArrayBuffer(gl, data, type, itemsize) {
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, type);
        buffer.itemSize = itemsize;
        buffer.numItems = data.length / itemsize;
        return buffer;
    }
    doBinds(gl) {
        gl.bindVertexArray(this.VAO);
        gl.enableVertexAttribArray(3);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instancingOffsets);
        gl.vertexAttribPointer(3, 3, gl.FLOAT, false, 0, 0);
        gl.vertexAttribDivisor(3, 1);
        gl.enableVertexAttribArray(4);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instancingScales);
        gl.vertexAttribPointer(4, 3, gl.FLOAT, true, 0, 0);
        gl.vertexAttribDivisor(4, 1);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
    }
    initTexture(gl, texture_num, flip = true) {
        if (!this.mesh.materialsByIndex[texture_num])
            return false;
        if (this.mesh.materialsByIndex[texture_num].mapDiffuse.texture.complete) {
            this.loadTexture(gl, texture_num, flip);
        }
        else {
            this.mesh.materialsByIndex[texture_num].mapDiffuse.texture.addEventListener('load', () => {
                this.loadTexture(gl, texture_num, flip);
            });
        }
        return true;
    }
    loadTexture(gl, texture_num, flip = true) {
        let texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        if (flip)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this.mesh.materialsByIndex[texture_num].mapDiffuse.texture);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        this.textures[texture_num] = texture;
    }
    setTexture(texture, texture_num) {
        this.textures[texture_num] = texture;
    }
    draw(gl) {
        gl.bindVertexArray(this.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
        this.textures.forEach((texture, index) => {
            let is = this.mesh.vertexBuffer.itemSize;
            let material = this.mesh.materials[index];
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.drawElements(gl.TRIANGLES, is * material.numItems, gl.UNSIGNED_SHORT, material.offset * is * byteSize);
        });
        gl.bindVertexArray(null);
    }
    drawInstanced(gl) {
        gl.bindVertexArray(this.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
        this.mesh.materials.forEach((material, index) => {
            let is = this.mesh.vertexBuffer.itemSize;
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, this.textures[index]);
            gl.drawElementsInstanced(gl.TRIANGLES, is * material.numItems, gl.UNSIGNED_SHORT, material.offset * is * byteSize, this.instanceCount);
        });
    }
}
exports.BasicModel = BasicModel;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A class to represent the memory layout for a vertex attribute array. Used by
 * {@link Mesh}'s TBD(...) method to generate a packed array from mesh data.
 * <p>
 * Layout can sort of be thought of as a C-style struct declaration.
 * {@link Mesh}'s TBD(...) method will use the {@link Layout} instance to
 * pack an array in the given attribute order.
 * <p>
 * Layout also is very helpful when calling a WebGL context's
 * <code>vertexAttribPointer</code> method. If you've created a buffer using
 * a Layout instance, then the same Layout instance can be used to determine
 * the size, type, normalized, stride, and offset parameters for
 * <code>vertexAttribPointer</code>.
 * <p>
 * For example:
 * <pre><code>
 *
 * const index = glctx.getAttribLocation(shaderProgram, "pos");
 * glctx.vertexAttribPointer(
 *   layout.position.size,
 *   glctx[layout.position.type],
 *   layout.position.normalized,
 *   layout.position.stride,
 *   layout.position.offset);
 * </code></pre>
 * @see {@link Mesh}
 */
class Layout {
    /**
     * Create a Layout object. This constructor will throw if any duplicate
     * attributes are given.
     * @param {Array} ...attributes - An ordered list of attributes that
     *        describe the desired memory layout for each vertex attribute.
     *        <p>
     *
     * @see {@link Mesh}
     */
    constructor(...attributes) {
        this.attributes = attributes;
        let offset = 0;
        let maxStrideMultiple = 0;
        for (const attribute of attributes) {
            if (this[attribute.key]) {
                throw new DuplicateAttributeException(attribute);
            }
            // Add padding to satisfy WebGL's requirement that all
            // vertexAttribPointer calls have an offset that is a multiple of
            // the type size.
            if (offset % attribute.sizeOfType !== 0) {
                offset += attribute.sizeOfType - offset % attribute.sizeOfType;
                console.warn('Layout requires padding before ' + attribute.key + ' attribute');
            }
            this[attribute.key] = {
                'attribute': attribute,
                'size': attribute.size,
                'type': attribute.type,
                'normalized': attribute.normalized,
                'offset': offset,
            };
            offset += attribute.sizeInBytes;
            maxStrideMultiple = Math.max(
                maxStrideMultiple,
                attribute.sizeOfType);
        }
        // Add padding to the end to satisfy WebGL's requirement that all
        // vertexAttribPointer calls have a stride that is a multiple of the
        // type size. Because we're putting differently sized attributes into
        // the same buffer, it must be padded to a multiple of the largest
        // type size.
        if (offset % maxStrideMultiple !== 0) {
            offset += maxStrideMultiple - offset % maxStrideMultiple;
            console.warn('Layout requires padding at the back');
        }
        this.stride = offset;
        for (const attribute of attributes) {
            this[attribute.key].stride = this.stride;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Layout;



/**
 * An exception for when two or more of the same attributes are found in the
 * same layout.
 * @private
 */
class DuplicateAttributeException {
    /**
     * Create a DuplicateAttributeException
     * @param {Attribute} attribute - The attribute that was found more than
     *        once in the {@link Layout}
     */
    constructor(attribute) {
        this.message = 'found duplicate attribute: ' + attribute.key;
    }
}

/**
 * Represents how a vertex attribute should be packed into an buffer.
 * @private
 */
class Attribute {
    /**
     * Create an attribute. Do not call this directly, use the predefined
     * constants.
     * @param {string} key - The name of this attribute as if it were a key in
     *        an Object. Use the camel case version of the upper snake case
     *        const name.
     * @param {number} size - The number of components per vertex attribute.
     *        Must be 1, 2, 3, or 4.
     * @param {string} type - The data type of each component for this
     *        attribute. Possible values:<br/>
     *        "BYTE": signed 8-bit integer, with values in [-128, 127]<br/>
     *        "SHORT": signed 16-bit integer, with values in
     *            [-32768, 32767]<br/>
     *        "UNSIGNED_BYTE": unsigned 8-bit integer, with values in
     *            [0, 255]<br/>
     *        "UNSIGNED_SHORT": unsigned 16-bit integer, with values in
     *            [0, 65535]<br/>
     *        "FLOAT": 32-bit floating point number
     * @param {boolean} normalized - Whether integer data values should be
     *        normalized when being casted to a float.<br/>
     *        If true, signed integers are normalized to [-1, 1].<br/>
     *        If true, unsigned integers are normalized to [0, 1].<br/>
     *        For type "FLOAT", this parameter has no effect.
     */
    constructor(key, size, type, normalized=false) {
        this.key = key;
        this.size = size;
        this.type = type;
        this.normalized = false;
        this.sizeOfType = sizeInBytesOfType(type);
        this.sizeInBytes = this.sizeOfType * size;
    }
}

/**
 * @param {string} type - A type accepted by {@link Attribute}.
 * @return The size (in bytes) for a given type.
 * @see {@link Attribute}
 * @private
 */
function sizeInBytesOfType(type) {
    switch (type) {
        case 'BYTE':
        case 'UNSIGNED_BYTE':
            return 1;
        case 'SHORT':
        case 'UNSIGNED_SHORT':
            return 2;
        case 'FLOAT':
            return 4;
    }
}

// Geometry attributes
/**
 * Attribute layout to pack a vertex's x, y, & z as floats
 *
 * @see {@link Layout}
 */
Layout.POSITION = new Attribute('position', 3, 'FLOAT');

/**
 * Attribute layout to pack a vertex's normal's x, y, & z as floats
 *
 * @see {@link Layout}
 */
Layout.NORMAL = new Attribute('normal', 3, 'FLOAT');

/**
 * Attribute layout to pack a vertex's normal's x, y, & z as floats.
 * <p>
 * This value will be computed on-the-fly based on the texture coordinates.
 * If no texture coordinates are available, the generated value will default to
 * 0, 0, 0.
 *
 * @see {@link Layout}
 */
Layout.TANGENT = new Attribute('tangent', 3, 'FLOAT');

/**
 * Attribute layout to pack a vertex's normal's bitangent x, y, & z as floats.
 * <p>
 * This value will be computed on-the-fly based on the texture coordinates.
 * If no texture coordinates are available, the generated value will default to
 * 0, 0, 0.
 * @see {@link Layout}
 */
Layout.BITANGENT = new Attribute('bitangent', 3, 'FLOAT');

/**
 * Attribute layout to pack a vertex's texture coordinates' u & v as floats
 *
 * @see {@link Layout}
 */
Layout.UV = new Attribute('uv', 2, 'FLOAT');

// Material attributes

/**
 * Attribute layout to pack an unsigned short to be interpreted as a the index
 * into a {@link Mesh}'s materials list.
 * <p>
 * The intention of this value is to send all of the {@link Mesh}'s materials
 * into multiple shader uniforms and then reference the current one by this
 * vertex attribute.
 * <p>
 * example glsl code:
 *
 * <pre><code>
 *  // this is bound using MATERIAL_INDEX
 *  attribute int materialIndex;
 *
 *  struct Material {
 *    vec3 diffuse;
 *    vec3 specular;
 *    vec3 specularExponent;
 *  };
 *
 *  uniform Material materials[MAX_MATERIALS];
 *
 *  // ...
 *
 *  vec3 diffuse = materials[materialIndex];
 *
 * </code></pre>
 * TODO: More description & test to make sure subscripting by attributes even
 * works for webgl
 *
 * @see {@link Layout}
 */
Layout.MATERIAL_INDEX = new Attribute('materialIndex', 1, 'SHORT');
Layout.MATERIAL_ENABLED = new Attribute('materialEnabled', 1, 'UNSIGNED_SHORT');
Layout.AMBIENT = new Attribute('ambient', 3, 'FLOAT');
Layout.DIFFUSE = new Attribute('diffuse', 3, 'FLOAT');
Layout.SPECULAR = new Attribute('specular', 3, 'FLOAT');
Layout.SPECULAR_EXPONENT = new Attribute('specularExponent', 3, 'FLOAT');
Layout.EMISSIVE = new Attribute('emissive', 3, 'FLOAT');
Layout.TRANSMISSION_FILTER = new Attribute('transmissionFilter', 3, 'FLOAT');
Layout.DISSOLVE = new Attribute('dissolve', 1, 'FLOAT');
Layout.ILLUMINATION = new Attribute('illumination', 1, 'UNSIGNED_SHORT');
Layout.REFRACTION_INDEX = new Attribute('refractionIndex', 1, 'FLOAT');
Layout.SHARPNESS = new Attribute('sharpness', 1, 'FLOAT');
Layout.MAP_DIFFUSE = new Attribute('mapDiffuse', 1, 'SHORT');
Layout.MAP_AMBIENT = new Attribute('mapAmbient', 1, 'SHORT');
Layout.MAP_SPECULAR = new Attribute('mapSpecular', 1, 'SHORT');
Layout.MAP_SPECULAR_EXPONENT = new Attribute('mapSpecularExponent', 1, 'SHORT');
Layout.MAP_DISSOLVE = new Attribute('mapDissolve', 1, 'SHORT');
Layout.ANTI_ALIASING = new Attribute('antiAliasing', 1, 'UNSIGNED_SHORT');
Layout.MAP_BUMP = new Attribute('mapBump', 1, 'SHORT');
Layout.MAP_DISPLACEMENT = new Attribute('mapDisplacement', 1, 'SHORT');
Layout.MAP_DECAL = new Attribute('mapDecal', 1, 'SHORT');
Layout.MAP_EMISSIVE = new Attribute('mapEmissive', 1, 'SHORT');


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["fromMat4"] = fromMat4;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromMat2d"] = fromMat2d;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["normalFromMat4"] = normalFromMat4;
/* harmony export (immutable) */ __webpack_exports__["projection"] = projection;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  out[0] = (a11 * a22 - a12 * a21);
  out[1] = (a02 * a21 - a01 * a22);
  out[2] = (a01 * a12 - a02 * a11);
  out[3] = (a12 * a20 - a10 * a22);
  out[4] = (a00 * a22 - a02 * a20);
  out[5] = (a02 * a10 - a00 * a12);
  out[6] = (a10 * a21 - a11 * a20);
  out[7] = (a01 * a20 - a00 * a21);
  out[8] = (a00 * a11 - a01 * a10);
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b00 = b[0], b01 = b[1], b02 = b[2];
  let b10 = b[3], b11 = b[4], b12 = b[5];
  let b20 = b[6], b21 = b[7], b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],
    x = v[0], y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],

    s = Math.sin(rad),
    c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
          a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}



/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
         a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
         a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x*x + y*y + z*z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x*x + y*y + z*z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x*x + y*y + z*z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  let factorTimes2 = t * t;
  let factor1 = factorTimes2 * (2 * t - 3) + 1;
  let factor2 = factorTimes2 * (t - 2) + t;
  let factor3 = factorTimes2 * (t - 1);
  let factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  let inverseFactor = 1 - t;
  let inverseFactorTimesTwo = inverseFactor * inverseFactor;
  let factorTimes2 = t * t;
  let factor1 = inverseFactorTimesTwo * inverseFactor;
  let factor2 = 3 * t * inverseFactorTimesTwo;
  let factor3 = 3 * factorTimes2 * inverseFactor;
  let factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  let r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  let z = (__WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0) - 1.0;
  let zScale = Math.sqrt(1.0-z*z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  r[1] = p[1];
  r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let tempA = fromValues(a[0], a[1], a[2]);
  let tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  let cosine = dot(tempA, tempB);

  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2];
  let b0 = b[0], b1 = b[1], b2 = b[2];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec3.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec3.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 3;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x*x + y*y + z*z + w*w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  //TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[1] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[2] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[3] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  normalize(out, out);
  scale(out, out, vectorScale);
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec4.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec4.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec4.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 4;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout__ = __webpack_require__(4);


/**
 * The main Mesh class. The constructor will parse through the OBJ file data
 * and collect the vertex, vertex normal, texture, and face information. This
 * information can then be used later on when creating your VBOs. See
 * OBJ.initMeshBuffers for an example of how to use the newly created Mesh
 *
 * - Options
 *   - materials
 */
class Mesh {
	/**
	 * Create a Mesh
	 * @param {String} objectData a string representation of an OBJ file with
	 *        newlines preserved.
	 * @param {Object} options a JS object containing valid options. See class
	 *        documentation for options.
	 */
	constructor(objectData, options) {
		options = options || {};
		options.materials = options.materials || [];

		let self = this;
		self.has_materials = !!options.materials;
		// maps material name to Material() instance
		self.materials = {};
		// the list of unique vertex, normal, texture, attributes
		self.vertices = [];
		self.vertexNormals = [];
		self.textures = [];
		// the indicies to draw the faces
		self.indices = [];

		/*
		The OBJ file format does a sort of compression when saving a model in a
		program like Blender. There are at least 3 sections (4 including textures)
		within the file. Each line in a section begins with the same string:
			* 'v': indicates vertex section
			* 'vn': indicates vertex normal section
			* 'f': indicates the faces section
			* 'vt': indicates vertex texture section (if textures were used on the model)
		Each of the above sections (except for the faces section) is a list/set of
		unique vertices.

		Each line of the faces section contains a list of
		(vertex, [texture], normal) groups.

		**Note:** The following documentation will use a capital "V" Vertex to
		denote the above (vertex, [texture], normal) groups whereas a lowercase
		"v" vertex is used to denote an X, Y, Z coordinate.

		Some examples:
				// the texture index is optional, both formats are possible for models
				// without a texture applied
				f 1/25 18/46 12/31
				f 1//25 18//46 12//31

				// A 3 vertex face with texture indices
				f 16/92/11 14/101/22 1/69/1

				// A 4 vertex face
				f 16/92/11 40/109/40 38/114/38 14/101/22

		The first two lines are examples of a 3 vertex face without a texture applied.
		The second is an example of a 3 vertex face with a texture applied.
		The third is an example of a 4 vertex face. Note: a face can contain N
		number of vertices.

		Each number that appears in one of the groups is a 1-based index
		corresponding to an item from the other sections (meaning that indexing
		starts at one and *not* zero).

		For example:
				`f 16/92/11` is saying to
					- take the 16th element from the [v] vertex array
					- take the 92nd element from the [vt] texture array
					- take the 11th element from the [vn] normal array
				and together they make a unique vertex.
		Using all 3+ unique Vertices from the face line will produce a polygon.

		Now, you could just go through the OBJ file and create a new vertex for
		each face line and WebGL will draw what appears to be the same model.
		However, vertices will be overlapped and duplicated all over the place.

		Consider a cube in 3D space centered about the origin and each side is
		2 units long. The front face (with the positive Z-axis pointing towards
		you) would have a Top Right vertex (looking orthogonal to its normal)
		mapped at (1,1,1) The right face would have a Top Left vertex (looking
		orthogonal to its normal) at (1,1,1) and the top face would have a Bottom
		Right vertex (looking orthogonal to its normal) at (1,1,1). Each face
		has a vertex at the same coordinates, however, three distinct vertices
		will be drawn at the same spot.

		To solve the issue of duplicate Vertices (the `(vertex, [texture], normal)`
		groups), while iterating through the face lines, when a group is encountered
		the whole group string ('16/92/11') is checked to see if it exists in the
		packed.hashindices object, and if it doesn't, the indices it specifies
		are used to look up each attribute in the corresponding attribute arrays
		already created. The values are then copied to the corresponding unpacked
		array (flattened to play nice with WebGL's ELEMENT_ARRAY_BUFFER indexing),
		the group string is added to the hashindices set and the current unpacked
		index is used as this hashindices value so that the group of elements can
		be reused. The unpacked index is incremented. If the group string already
		exists in the hashindices object, its corresponding value is the index of
		that group and is appended to the unpacked indices array.
	 */
		this.name = '';
		const verts = [];
		const vertNormals = [];
		const textures = [];
		const unpacked = {};
		const materialNamesByIndex = [];
		const materialIndicesByName = {};
		// keep track of what material we've seen last
		let currentMaterialIndex = -1;
		// unpacking stuff
		unpacked.verts = [];
		unpacked.norms = [];
		unpacked.textures = [];
		unpacked.hashindices = {};
		unpacked.indices = [];
		unpacked.materialIndices = [];
		unpacked.index = 0;
		
		let materials = [];
		let currFaceCounter = 0;
		let totalFaceCounter = 0;

		const VERTEX_RE = /^v\s/;
		const NORMAL_RE = /^vn\s/;
		const TEXTURE_RE = /^vt\s/;
		const FACE_RE = /^f\s/;
		const WHITESPACE_RE = /\s+/;
		const USE_MATERIAL_RE = /^usemtl/;

		// array of lines separated by the newline
		const lines = objectData.split('\n');

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();
			if (!line || line.startsWith('#')) {
				continue;
			}
			const elements = line.split(WHITESPACE_RE);
			elements.shift();

			if (VERTEX_RE.test(line)) {
				// if this is a vertex
				verts.push(...elements);
			} else if (NORMAL_RE.test(line)) {
				// if this is a vertex normal
				vertNormals.push(...elements);
			} else if (TEXTURE_RE.test(line)) {
				// if this is a texture
				textures.push(elements[0]);
				textures.push(elements[1]);
			} else if (USE_MATERIAL_RE.test(line)) {
				const materialName = elements[0];

				// check to see if we've ever seen it before
				if (!(materialName in materialIndicesByName)) {
					// new material we've never seen
					
					if(currFaceCounter !== 0)
						materials.push({offset: totalFaceCounter, numItems: currFaceCounter});
					totalFaceCounter += currFaceCounter;
					currFaceCounter = 0;
                    
					materialNamesByIndex.push(materialName);
					materialIndicesByName[materialName] = materialNamesByIndex.length - 1;
				}

				// keep track of the current material index
				currentMaterialIndex = materialIndicesByName[materialName];
			} else if (FACE_RE.test(line)) {
				currFaceCounter++;
				// if this is a face
				/*
				split this face into an array of Vertex groups
				for example:
					 f 16/92/11 14/101/22 1/69/1
				becomes:
					['16/92/11', '14/101/22', '1/69/1'];
				*/
				let quad = false;
				for (let j = 0, eleLen = elements.length; j < eleLen; j++) {
					// Triangulating quads
					// quad: 'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2 v3/t3/vn3/'
					// corresponding triangles:
					//      'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2'
					//      'f v2/t2/vn2 v3/t3/vn3 v0/t0/vn0'
					if (j === 3 && !quad) {
						// add v2/t2/vn2 in again before continuing to 3
						j = 2;
						quad = true;
					}
					const hash0 = elements[0] + ',' + currentMaterialIndex;
					const hash = elements[j] + ',' + currentMaterialIndex;
					if (hash in unpacked.hashindices) {
						unpacked.indices.push(unpacked.hashindices[hash]);
					} else {
						/*
						Each element of the face line array is a Vertex which has its
						attributes delimited by a forward slash. This will separate
						each attribute into another array:
								'19/92/11'
						becomes:
								Vertex = ['19', '92', '11'];
						where
								Vertex[0] is the vertex index
								Vertex[1] is the texture index
								Vertex[2] is the normal index
						 Think of faces having Vertices which are comprised of the
						 attributes location (v), texture (vt), and normal (vn).
						 */
						let vertex = elements[j].split('/');
						// it's possible for faces to only specify the vertex
						// and the normal. In this case, vertex will only have
						// a length of 2 and not 3 and the normal will be the
						// second item in the list with an index of 1.
						let normalIndex = vertex.length - 1;
						/*
						 The verts, textures, and vertNormals arrays each contain a
						 flattend array of coordinates.

						 Because it gets confusing by referring to Vertex and then
						 vertex (both are different in my descriptions) I will explain
						 what's going on using the vertexNormals array:

						 vertex[2] will contain the one-based index of the vertexNormals
						 section (vn). One is subtracted from this index number to play
						 nice with javascript's zero-based array indexing.

						 Because vertexNormal is a flattened array of x, y, z values,
						 simple pointer arithmetic is used to skip to the start of the
						 vertexNormal, then the offset is added to get the correct
						 component: +0 is x, +1 is y, +2 is z.

						 This same process is repeated for verts and textures.
						 */
						// Vertex position
						unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 0]);
						unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 1]);
						unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 2]);
						// Vertex textures
						if (textures.length) {
							unpacked.textures.push(+textures[(vertex[1] - 1) * 2 + 0]);
							unpacked.textures.push(+textures[(vertex[1] - 1) * 2 + 1]);
						}
						// Vertex normals
						unpacked.norms.push(+vertNormals[(vertex[normalIndex] - 1) * 3 + 0]);
						unpacked.norms.push(+vertNormals[(vertex[normalIndex] - 1) * 3 + 1]);
						unpacked.norms.push(+vertNormals[(vertex[normalIndex] - 1) * 3 + 2]);
						// Vertex material indices
						unpacked.materialIndices.push(currentMaterialIndex);
						// add the newly created Vertex to the list of indices
						unpacked.hashindices[hash] = unpacked.index;
						unpacked.indices.push(unpacked.index);
						// increment the counter
						unpacked.index += 1;
					}
					if (j === 3 && quad) {
						// add v0/t0/vn0 onto the second triangle
						unpacked.indices.push(unpacked.hashindices[hash0]);
					}
				}
			}
		}
		materials.push({offset: totalFaceCounter, numItems: currFaceCounter});
		
		self.vertices = unpacked.verts;
		self.vertexNormals = unpacked.norms;
		self.textures = unpacked.textures;
		self.vertexMaterialIndices = unpacked.materialIndices;
		self.indices = unpacked.indices;
		self.materials = materials;

		self.materialNames = materialNamesByIndex;
		self.materialIndices = materialIndicesByName;
		self.materialsByIndex = {};
	}

	/**
	 * @param {Layout} layout - A {@link Layout} object that describes the
	 * desired memory layout of the generated buffer
	 * @return {ArrayBuffer} The packed array in the ... TODO
	 */
	makeBufferData(layout) {
		const numItems = this.vertices.length / 3;
		const buffer = new ArrayBuffer(layout.stride * numItems);
		buffer.numItems = numItems;
		const dataView = new DataView(buffer);
		for (let i = 0, vertexOffset = 0; i < numItems; i++) {
			vertexOffset = i * layout.stride;
			// copy in the vertex data in the order and format given by the
			// layout param
			for (const attribute of layout.attributes) {
				const offset = vertexOffset + layout[attribute.key].offset;
				switch (attribute.key) {
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].POSITION.key:
						dataView.setFloat32(offset, this.vertices[i * 3], true);
						dataView.setFloat32(offset + 4, this.vertices[i * 3 + 1], true);
						dataView.setFloat32(offset + 8, this.vertices[i * 3 + 2], true);
						break;
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].UV.key:
						dataView.setFloat32(offset, this.textures[i * 2], true);
						dataView.setFloat32(offset + 4, this.vertices[i * 2 + 1], true);
						break;
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].NORMAL.key:
						dataView.setFloat32(offset, this.vertexNormals[i * 3], true);
						dataView.setFloat32(offset + 4, this.vertexNormals[i * 3 + 1], true);
						dataView.setFloat32(offset + 8, this.vertexNormals[i * 3 + 2], true);
						break;
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].MATERIAL_INDEX.key:
						dataView.setInt16(offset, this.vertexMaterialIndices[i], true);
						break;
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].AMBIENT.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setFloat32(offset, material.ambient[0], true);
						dataView.setFloat32(offset + 4, material.ambient[1], true);
						dataView.setFloat32(offset + 8, material.ambient[2], true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].DIFFUSE.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setFloat32(offset, material.diffuse[0], true);
						dataView.setFloat32(offset + 4, material.diffuse[1], true);
						dataView.setFloat32(offset + 8, material.diffuse[2], true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].SPECULAR.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setFloat32(offset, material.specular[0], true);
						dataView.setFloat32(offset + 4, material.specular[1], true);
						dataView.setFloat32(offset + 8, material.specular[2], true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].SPECULAR_EXPONENT.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setFloat32(offset, material.specularExponent, true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].EMISSIVE.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setFloat32(offset, material.emissive[0], true);
						dataView.setFloat32(offset + 4, material.emissive[1], true);
						dataView.setFloat32(offset + 8, material.emissive[2], true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].TRANSMISSION_FILTER.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setFloat32(offset, material.transmissionFilter[0], true);
						dataView.setFloat32(offset + 4, material.transmissionFilter[1], true);
						dataView.setFloat32(offset + 8, material.transmissionFilter[2], true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].DISSOLVE.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setFloat32(offset, material.dissolve, true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].ILLUMINATION.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setInt16(offset, material.illumination, true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].REFRACTION_INDEX.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setFloat32(offset, material.refractionIndex, true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].SHARPNESS.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setFloat32(offset, material.sharpness, true);
						break;
					}
					case __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* Layout */].ANTI_ALIASING.key: {
						const materialIndex = this.vertexMaterialIndices[i];
						const material = this.materialsByIndex[materialIndex];
						if (!material) {
							console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
							break;
						}
						dataView.setInt16(offset, material.antiAliasing, true);
						break;
					}
				}
			}
		}
		return buffer;
	}

	makeIndexBufferData() {
		const buffer = new Uint16Array(this.indices);
		buffer.numItems = this.indices.length;
		return buffer;
	}

	addMaterialLibrary(mtl) {
		for (const name in mtl.materials) {
			if (!(name in this.materialIndices)) {
				// This material is not referenced by the mesh
				continue;
			}

			const material = mtl.materials[name];

			// Find the material index for this material
			const materialIndex = this.materialIndices[material.name]

			// Put the material into the materialsByIndex object at the right
			// spot as determined when the obj file was parsed
			this.materialsByIndex[materialIndex] = material;
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mesh;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The Material class.
 */
class Material {
  /**
   * Constructor
   * @param {String} name the unique name of the material
   */
  constructor(name) {
    // the unique material ID.
    this.name = name;
    // The values for the following attibutes
    // are an array of R, G, B normalized values.
    // Ka - Ambient Reflectivity
    this.ambient = [0, 0, 0];
    // Kd - Defuse Reflectivity
    this.diffuse = [0, 0, 0];
    // Ks
    this.specular = [0, 0, 0];
    // Ke
    this.emissive = [0, 0, 0];
    // Tf
    this.transmissionFilter = [0, 0, 0];
    // d
    this.dissolve = 0;
    // valid range is between 0 and 1000
    this.specularExponent = 0;
    // either d or Tr; valid values are normalized
    this.transparency = 0;
    // illum - the enum of the illumination model to use
    this.illumination = 0;
    // Ni - Set to "normal" (air).
    this.refractionIndex = 1;
    // sharpness
    this.sharpness = 0;
    // map_Kd
    this.mapDiffuse = null;
    // map_Ka
    this.mapAmbient = null;
    // map_Ks
    this.mapSpecular = null;
    // map_Ns
    this.mapSpecularExponent = null;
    // map_d
    this.mapDissolve = null;
    // map_aat
    this.antiAliasing = false;
    // map_bump or bump
    this.mapBump = null;
    // disp
    this.mapDisplacement = null;
    // decal
    this.mapDecal = null;
    // map_Ke
    this.mapEmissive = null;
    // refl - when the reflection type is a cube, there will be multiple refl
    //        statements for each side of the cube. If it's a spherical
    //        reflection, there should only ever be one.
    this.mapReflections = [];
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Material;


/**
 * https://en.wikipedia.org/wiki/Wavefront_.obj_file
 * http://paulbourke.net/dataformats/mtl/
 */
class MaterialLibrary {
  /**
   * Constructs the Material Parser
   * @param {String} mtlData the MTL file contents
   */
  constructor(mtlData) {
    this.data = mtlData;
    this.currentMaterial = null;
    this.materials = {};

    this.parse();
  }

  /* eslint-disable camelcase */
  /* the function names here disobey camelCase conventions
     to make parsing/routing easier. see the parse function
     documentation for more information. */

  /**
   * Creates a new Material object and adds to the registry.
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_newmtl(tokens) {
    let name = tokens[0];
    // console.info('Parsing new Material:', name);

    this.currentMaterial = new Material(name);
    this.materials[name] = this.currentMaterial;
  }

  /**
   * See the documenation for parse_Ka below for a better understanding.
   *
   * Given a list of possible color tokens, returns an array of R, G, and B
   * color values.
   *
   * @param {string[]} tokens the tokens associated with the directive
   * @return {*} a 3 element array containing the R, G, and B values
   * of the color.
   */
  parseColor(tokens) {
    if (tokens[0] == 'spectral') {
      console.error(
        'The MTL parser does not support spectral curve files. You will ' +
        'need to convert the MTL colors to either RGB or CIEXYZ.'
      );
      return;
    }

    if (tokens[0] == 'xyz') {
      console.warn('TODO: convert XYZ to RGB');
      return;
    }

    // from my understanding of the spec, RGB values at this point
    // will either be 3 floats or exactly 1 float, so that's the check
    // that i'm going to perform here
    if (tokens.length == 3) {
      return tokens.map(parseFloat);
    }

    // Since tokens at this point has a length of 3, we're going to assume
    // it's exactly 1, skipping the check for 2.
    let value = parseFloat(tokens[0]);
    // in this case, all values are equivalent
    return [value, value, value];
  }

  /**
   * Parse the ambient reflectivity
   *
   * A Ka directive can take one of three forms:
   *   - Ka r g b
   *   - Ka spectral file.rfl
   *   - Ka xyz x y z
   * These three forms are mutually exclusive in that only one
   * declaration can exist per material. It is considered a syntax
   * error otherwise.
   *
   * The "Ka" form specifies the ambient reflectivity using RGB values.
   * The "g" and "b" values are optional. If only the "r" value is
   * specified, then the "g" and "b" values are assigned the value of
   * "r". Values are normally in the range 0.0 to 1.0. Values outside
   * of this range increase or decrease the reflectivity accordingly.
   *
   * The "Ka spectral" form specifies the ambient reflectivity using a
   * spectral curve. "file.rfl" is the name of the ".rfl" file containing
   * the curve data. "factor" is an optional argument which is a multiplier
   * for the values in the .rfl file and defaults to 1.0 if not specified.
   *
   * The "Ka xyz" form specifies the ambient reflectivity using CIEXYZ values.
   * "x y z" are the values of the CIEXYZ color space. The "y" and "z" arguments
   * are optional and take on the value of the "x" component if only "x" is
   * specified. The "x y z" values are normally in the range of 0.0 to 1.0 and
   * increase or decrease ambient reflectivity accordingly outside of that
   * range.
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_Ka(tokens) {
    this.currentMaterial.ambient = this.parseColor(tokens);
  }

  /**
   * Diffuse Reflectivity
   *
   * Similar to the Ka directive. Simply replace "Ka" with "Kd" and the rules
   * are the same
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_Kd(tokens) {
    this.currentMaterial.diffuse = this.parseColor(tokens);
  }

  /**
   * Spectral Reflectivity
   *
   * Similar to the Ka directive. Simply replace "Ks" with "Kd" and the rules
   * are the same
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_Ks(tokens) {
    this.currentMaterial.specular = this.parseColor(tokens);
  }

  /**
   * Emissive
   *
   * The amount and color of light emitted by the object.
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_Ke(tokens) {
    this.currentMaterial.emissive = this.parseColor(tokens);
  }

  /**
   * Transmission Filter
   *
   * Any light passing through the object is filtered by the transmission
   * filter, which only allows specific colors to pass through. For example, Tf
   * 0 1 0 allows all of the green to pass through and filters out all of the
   * red and blue.
   *
   * Similar to the Ka directive. Simply replace "Ks" with "Tf" and the rules
   * are the same
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_Tf(tokens) {
    this.currentMaterial.transmissionFilter = this.parseColor(tokens);
  }

  /**
   * Specifies the dissolve for the current material.
   *
   * Statement: d [-halo] `factor`
   *
   * Example: "d 0.5"
   *
   * The factor is the amount this material dissolves into the background. A
   * factor of 1.0 is fully opaque. This is the default when a new material is
   * created. A factor of 0.0 is fully dissolved (completely transparent).
   *
   * Unlike a real transparent material, the dissolve does not depend upon
   * material thickness nor does it have any spectral character. Dissolve works
   * on all illumination models.
   *
   * The dissolve statement allows for an optional "-halo" flag which indicates
   * that a dissolve is dependent on the surface orientation relative to the
   * viewer. For example, a sphere with the following dissolve, "d -halo 0.0",
   * will be fully dissolved at its center and will appear gradually more opaque
   * toward its edge.
   *
   * "factor" is the minimum amount of dissolve applied to the material. The
   * amount of dissolve will vary between 1.0 (fully opaque) and the specified
   * "factor". The formula is:
   *
   *    dissolve = 1.0 - (N*v)(1.0-factor)
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_d(tokens) {
    // this ignores the -halo option as I can't find any documentation on what
    // it's supposed to be.
    this.currentMaterial.dissolve = parseFloat(tokens.pop());
  }

  /**
   * The "illum" statement specifies the illumination model to use in the
   * material. Illumination models are mathematical equations that represent
   * various material lighting and shading effects.
   *
   * The illumination number can be a number from 0 to 10. The following are
   * the list of illumination enumerations and their summaries:
   * 0. Color on and Ambient off
   * 1. Color on and Ambient on
   * 2. Highlight on
   * 3. Reflection on and Ray trace on
   * 4. Transparency: Glass on, Reflection: Ray trace on
   * 5. Reflection: Fresnel on and Ray trace on
   * 6. Transparency: Refraction on, Reflection: Fresnel off and Ray trace on
   * 7. Transparency: Refraction on, Reflection: Fresnel on and Ray trace on
   * 8. Reflection on and Ray trace off
   * 9. Transparency: Glass on, Reflection: Ray trace off
   * 10. Casts shadows onto invisible surfaces
   *
   * Example: "illum 2" to specify the "Highlight on" model
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_illum(tokens) {
    this.currentMaterial.illumination = parseInt(tokens[0]);
  }

  /**
   * Optical Density (AKA Index of Refraction)
   *
   * Statement: Ni `index`
   *
   * Example: Ni 1.0
   *
   * Specifies the optical density for the surface. `index` is the value
   * for the optical density. The values can range from 0.001 to 10.  A value of
   * 1.0 means that light does not bend as it passes through an object.
   * Increasing the optical_density increases the amount of bending. Glass has
   * an index of refraction of about 1.5. Values of less than 1.0 produce
   * bizarre results and are not recommended
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_Ni(tokens) {
    this.currentMaterial.refractionIndex = parseFloat(tokens[0]);
  }

  /**
   * Specifies the specular exponent for the current material. This defines the
   * focus of the specular highlight.
   *
   * Statement: Ns `exponent`
   *
   * Example: "Ns 250"
   *
   * `exponent` is the value for the specular exponent. A high exponent results
   * in a tight, concentrated highlight. Ns Values normally range from 0 to
   * 1000.
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_Ns(tokens) {
    this.currentMaterial.specularExponent = parseInt(tokens[0]);
  }

  /**
   * Specifies the sharpness of the reflections from the local reflection map.
   *
   * Statement: sharpness `value`
   *
   * Example: "sharpness 100"
   *
   * If a material does not have a local reflection map defined in its material
   * defintions, sharpness will apply to the global reflection map defined in
   * PreView.
   *
   * `value` can be a number from 0 to 1000. The default is 60. A high value
   * results in a clear reflection of objects in the reflection map.
   *
   * Tip: sharpness values greater than 100 introduce aliasing effects in
   * flat surfaces that are viewed at a sharp angle.
   *
   * @param {string[]} tokens the tokens associated with the directive
   */
  parse_sharpness(tokens) {
    this.currentMaterial.sharpness = parseInt(tokens[0]);
  }

  /**
   * Parses the -cc flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -cc flag
   * @param {Object} options the Object of all image options
   */
  parse_cc(values, options) {
    options.colorCorrection = values[0] == 'on';
  }

  /**
   * Parses the -blendu flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -blendu flag
   * @param {Object} options the Object of all image options
   */
  parse_blendu(values, options) {
    options.horizontalBlending = values[0] == 'on';
  }

  /**
   * Parses the -blendv flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -blendv flag
   * @param {Object} options the Object of all image options
   */
  parse_blendv(values, options) {
    options.verticalBlending = values[0] == 'on';
  }

  /**
   * Parses the -boost flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -boost flag
   * @param {Object} options the Object of all image options
   */
  parse_boost(values, options) {
    options.boostMipMapSharpness = parseFloat(values[0]);
  }

  /**
   * Parses the -mm flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -mm flag
   * @param {Object} options the Object of all image options
   */
  parse_mm(values, options) {
    options.modifyTextureMap.brightness = parseFloat(values[0]);
    options.modifyTextureMap.contrast = parseFloat(values[1]);
  }

  /**
   * Parses and sets the -o, -s, and -t  u, v, and w values
   *
   * @param {string[]} values the values passed to the -o, -s, -t flag
   * @param {Object} option the Object of either the -o, -s, -t option
   * @param {Integer} defaultValue the Object of all image options
   */
  parse_ost(values, option, defaultValue) {
    while (values.length < 3) {
      values.push(defaultValue);
    }

    option.u = parseFloat(values[0]);
    option.v = parseFloat(values[1]);
    option.w = parseFloat(values[2]);
  }

  /**
   * Parses the -o flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -o flag
   * @param {Object} options the Object of all image options
   */
  parse_o(values, options) {
    this.parse_ost(values, options.offset, 0);
  }

  /**
   * Parses the -s flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -s flag
   * @param {Object} options the Object of all image options
   */
  parse_s(values, options) {
    this.parse_ost(values, options.scale, 1);
  }

  /**
   * Parses the -t flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -t flag
   * @param {Object} options the Object of all image options
   */
  parse_t(values, options) {
    this.parse_ost(values, options.turbulence, 0);
  }

  /**
   * Parses the -texres flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -texres flag
   * @param {Object} options the Object of all image options
   */
  parse_texres(values, options) {
    options.textureResolution = parseFloat(values[0]);
  }

  /**
   * Parses the -clamp flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -clamp flag
   * @param {Object} options the Object of all image options
   */
  parse_clamp(values, options) {
    options.clamp = values[0] == 'on';
  }

  /**
   * Parses the -bm flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -bm flag
   * @param {Object} options the Object of all image options
   */
  parse_bm(values, options) {
    options.bumpMultiplier = parseFloat(values[0]);
  }

  /**
   * Parses the -imfchan flag and updates the options object with the values.
   *
   * @param {string[]} values the values passed to the -imfchan flag
   * @param {Object} options the Object of all image options
   */
  parse_imfchan(values, options) {
    options.imfChan = values[0];
  }

  /**
   * This only exists for relection maps and denotes the type of reflection.
   *
   * @param {string[]} values the values passed to the -type flag
   * @param {Object} options the Object of all image options
   */
  parse_type(values, options) {
    options.reflectionType = values[0];
  }

  /**
   * Parses the texture's options and returns an options object with the info
   *
   * @param {string[]} tokens all of the option tokens to pass to the texture
   * @return {Object} a complete object of objects to apply to the texture
   */
  parseOptions(tokens) {
    let options = {
      colorCorrection: false,
      horizontalBlending: true,
      verticalBlending: true,
      boostMipMapSharpness: 0,
      modifyTextureMap: {
        brightness: 0,
        contrast: 1,
      },
      offset: {u: 0, v: 0, w: 0},
      scale: {u: 1, v: 1, w: 1},
      turbulence: {u: 0, v: 0, w: 0},
      clamp: false,
      textureResolution: null,
      bumpMultiplier: 1,
      imfChan: null,
    };

    let option;
    let values;
    let optionsToValues = {};

    tokens.reverse();

    while (tokens.length) {
      const token = tokens.pop();

      if (token.startsWith('-')) {
        option = token.substr(1);
        optionsToValues[option] = [];
      } else {
        optionsToValues[option].push(token);
      }
    }

    for (option in optionsToValues) {
      if (!optionsToValues.hasOwnProperty(option)){
        continue;
      }
      values = optionsToValues[option];
      let optionMethod = this[`parse_${option}`];
      if (optionMethod) {
        optionMethod.bind(this)(values, options);
      }
    }

    return options;
  }

  /**
   * Parses the given texture map line.
   *
   * @param {string[]} tokens all of the tokens representing the texture
   * @return {Object} a complete object of objects to apply to the texture
   */
  parseMap(tokens) {
    // according to wikipedia:
    // (https://en.wikipedia.org/wiki/Wavefront_.obj_file#Vendor_specific_alterations)
    // there is at least one vendor that places the filename before the options
    // rather than after (which is to spec). All options start with a '-'
    // so if the first token doesn't start with a '-', we're going to assume
    // it's the name of the map file.
    let filename;
    let options;
    if (!tokens[0].startsWith('-')) {
      [filename, ...options] = tokens;
    } else {
      filename = tokens.pop();
      options = tokens;
    }

    options = this.parseOptions(options);
    options['filename'] = filename;
    return options;
  }

  /**
   * Parses the ambient map.
   *
   * @param {string[]} tokens list of tokens for the map_Ka direcive
   */
  parse_map_Ka(tokens) {
    this.currentMaterial.mapAmbient = this.parseMap(tokens);
  }

  /**
   * Parses the diffuse map.
   *
   * @param {string[]} tokens list of tokens for the map_Kd direcive
   */
  parse_map_Kd(tokens) {
    this.currentMaterial.mapDiffuse = this.parseMap(tokens);
  }

  /**
   * Parses the specular map.
   *
   * @param {string[]} tokens list of tokens for the map_Ks direcive
   */
  parse_map_Ks(tokens) {
    this.currentMaterial.mapSpecular = this.parseMap(tokens);
  }

  /**
   * Parses the emissive map.
   *
   * @param {string[]} tokens list of tokens for the map_Ke direcive
   */
  parse_map_Ke(tokens) {
    this.currentMaterial.mapEmissive = this.parseMap(tokens);
  }

  /**
   * Parses the specular exponent map.
   *
   * @param {string[]} tokens list of tokens for the map_Ns direcive
   */
  parse_map_Ns(tokens) {
    this.currentMaterial.mapSpecularExponent = this.parseMap(tokens);
  }

  /**
   * Parses the dissolve map.
   *
   * @param {string[]} tokens list of tokens for the map_d direcive
   */
  parse_map_d(tokens) {
    this.currentMaterial.mapDissolve = this.parseMap(tokens);
  }

  /**
   * Parses the anti-aliasing option.
   *
   * @param {string[]} tokens list of tokens for the map_aat direcive
   */
  parse_map_aat(tokens) {
    this.currentMaterial.antiAliasing = tokens[0] == 'on';
  }

  /**
   * Parses the bump map.
   *
   * @param {string[]} tokens list of tokens for the map_bump direcive
   */
  parse_map_bump(tokens) {
    this.currentMaterial.mapBump = this.parseMap(tokens);
  }

  /**
   * Parses the bump map.
   *
   * @param {string[]} tokens list of tokens for the bump direcive
   */
  parse_bump(tokens) {
    this.parse_map_bump(tokens);
  }

  /**
   * Parses the disp map.
   *
   * @param {string[]} tokens list of tokens for the disp direcive
   */
  parse_disp(tokens) {
    this.currentMaterial.mapDisplacement = this.parseMap(tokens);
  }

  /**
   * Parses the decal map.
   *
   * @param {string[]} tokens list of tokens for the map_decal direcive
   */
  parse_decal(tokens) {
    this.currentMaterial.mapDecal = this.parseMap(tokens);
  }

  /**
   * Parses the refl map.
   *
   * @param {string[]} tokens list of tokens for the refl direcive
   */
  parse_refl(tokens) {
    this.currentMaterial.mapReflections.push(this.parseMap(tokens));
  }

  /**
   * Parses the MTL file.
   * 
   * Iterates line by line parsing each MTL directive.
   * 
   * This function expects the first token in the line
   * to be a valid MTL directive. That token is then used
   * to try and run a method on this class. parse_[directive]
   * E.g., the `newmtl` directive would try to call the method
   * parse_newmtl. Each parsing function takes in the remaining
   * list of tokens and updates the currentMaterial class with
   * the attributes provided.
   */
  parse() {
    let lines = this.data.split(/\r?\n/);
    for (let line of lines) {
      line = line.trim();
      if (!line || line.startsWith('#')) {
        continue;
      }

      let tokens = line.split(/\s/);
      let directive;
      [directive, ...tokens] = tokens;

      let parseMethod = this[`parse_${directive}`];

      if (!parseMethod) {
        console.warn(`Don't know how to parse the directive: "${directive}"`);
        continue;
      }

      // console.log(`Parsing "${directive}" with tokens: ${tokens}`);
      parseMethod.bind(this)(tokens);
    }

    // some cleanup. These don't need to be exposed as public data.
    delete this.data;
    this.currentMaterial = null;
  }

  /* eslint-enable camelcase*/
}
/* harmony export (immutable) */ __webpack_exports__["b"] = MaterialLibrary;
;




/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(2);
const shader_1 = __webpack_require__(16);
const camera_1 = __webpack_require__(17);
const player_1 = __webpack_require__(18);
const world_1 = __webpack_require__(24);
const skybox_1 = __webpack_require__(32);
let MainLoop = __webpack_require__(34);
let document = window.document;
let canvas;
let gl;
let shader;
let instancedShader;
const playerOrigin = gl_matrix_1.vec3.fromValues(0, 0.8, 0);
const playerOriginRotation = gl_matrix_1.vec3.fromValues(1, 0, 0);
let keys = [];
let mouseKeys = [];
let fpsCounter = document.getElementById('fpscounter');
let playerCamera = new camera_1.Camera(gl_matrix_1.vec3.fromValues(0, 1.6, 0), gl_matrix_1.vec3.fromValues(0, 1, 0), 0);
let worldCamera = new camera_1.Camera(gl_matrix_1.vec3.fromValues(100, 200, 10), gl_matrix_1.vec3.fromValues(0, 1, 0), 0, 0);
//Set overview camera to look at origin.
worldCamera.lookAt(gl_matrix_1.vec3.fromValues(0, 0, 0));
let activeCamera = playerCamera;
class Main {
    constructor() {
        this.fullscreenChange = (e) => {
            let document = window.document;
            let _canvas = canvas;
            if (document.webkitFullscreenElement === canvas ||
                document.mozFullscreenElement === canvas ||
                document.mozFullScreenElement === canvas ||
                document.fullscreenElement === canvas) {
                // Element is fullscreen, now we can request pointer lock
                canvas.requestPointerLock = canvas.requestPointerLock ||
                    _canvas.mozRequestPointerLock ||
                    _canvas.webkitRequestPointerLock;
                canvas.requestPointerLock();
            }
        };
        this.pointerLockChange = (e) => {
            let document = window.document;
            if (document.pointerLockElement === canvas ||
                document.mozPointerLockElement === canvas ||
                document.webkitPointerLockElement === canvas) {
                document.addEventListener("mousemove", this.moveCallback, false);
            }
            else {
                document.removeEventListener("mousemove", this.moveCallback, false);
            }
        };
        this.moveCallback = (e) => {
            let movementX = e.movementX ||
                e.mozMovementX ||
                e.webkitMovementX ||
                0;
            let movementY = e.movementY ||
                e.mozMovementY ||
                e.webkitMovementY ||
                0;
            this.player.rotate(-movementX / 600);
            playerCamera.processMouseMovement(this.player.forward, this.player.position, movementX, -movementY, true);
        };
        canvas = document.getElementById("canvas");
        this.initGL();
        //Set the background color before we load any assets
        gl.clearColor(0.2, 0.3, 0.3, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.BACK);
        this.resize();
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        //Display that we are loading
        this.loadAssets().then(() => {
            //Done loading
            this.initBuffers();
            this.initPointerLock();
            //Wait ms so images can load to prevent texture warnings
            setTimeout(h => {
                MainLoop.setBegin(this.begin.bind(this))
                    .setUpdate(this.update.bind(this))
                    .setDraw(this.draw.bind(this))
                    .setEnd(this.end.bind(this))
                    .start();
            }, 100);
        });
    }
    loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("world started " + Date.now());
            let _worldMeshes = yield world_1.World.loadWorldMeshes();
            let _worldMat = yield world_1.World.loadWorldMat();
            console.log("world done " + Date.now());
            let _worldData = yield world_1.World.loadWorldData();
            console.log("skybox started " + Date.now());
            let skybox_model = yield skybox_1.Skybox.load();
            console.log("skybox done " + Date.now());
            console.log("Player started " + Date.now());
            let _playerData = yield player_1.Player.loadMesh();
            console.log("Player done " + Date.now());
            this.player = new player_1.Player(gl, _playerData["cbabe"], playerOrigin);
            this.skybox = new skybox_1.Skybox(gl, skybox_model["Skybox"]);
            this.world = new world_1.World(gl, _worldData, _worldMeshes, _worldMat);
            shader = new shader_1.Shader(gl, __webpack_require__(35), __webpack_require__(36));
            instancedShader = new shader_1.Shader(gl, __webpack_require__(37), __webpack_require__(38));
        });
    }
    initGL() {
        try {
            gl = canvas.getContext("webgl2");
        }
        catch (e) {
            throw "GL init error:\n" + e;
        }
        if (!gl) {
            alert("WebGL is not available on your browser.");
        }
        gl.enable(gl.SAMPLE_COVERAGE);
        gl.sampleCoverage(1, false);
    }
    initBuffers() {
        playerCamera.front = this.player.forward;
        shader.use();
        shader.setInt("texture1", 0);
        instancedShader.use();
        instancedShader.setInt("material.diffuse", 0);
        // instancedShader.setInt("material.specular", 1);
        // instancedShader.setInt("material.emission", 2);
    }
    /**
     * @param {Number} delta
     *   The amount of time since the last update, in seconds.
     */
    update(delta) {
    }
    /**
     * Called once per frame before update and draw
     */
    begin(timestamp, delta) {
        delta /= 1000;
        if (keys[40] || keys[83]) {
            //     camera.processKeyboard(Camera_Movement.BACKWARD, delta);
            this.player.move(player_1.Player_Movement.BACKWARD, delta);
        }
        else if ((keys[38] || keys[87]) || (mouseKeys[1] && mouseKeys[3])) {
            //     camera.processKeyboard(Camera_Movement.FORWARD, delta);
            this.player.move(player_1.Player_Movement.FORWARD, delta);
        }
        if (keys[65]) {
            //   camera.processKeyboard(Camera_Movement.LEFT, delta);
            this.player.move(player_1.Player_Movement.LEFT, delta);
        }
        else if (keys[68]) {
            //   camera.processKeyboard(Camera_Movement.RIGHT, delta);
            this.player.move(player_1.Player_Movement.RIGHT, delta);
        }
        if (keys[37]) {
            this.player.rotate(delta);
            playerCamera.front[0] = this.player.forward[0];
            playerCamera.front[2] = this.player.forward[2];
            playerCamera.up = this.player.up;
        }
        if (keys[39]) {
            this.player.rotate(-delta);
            playerCamera.front[0] = this.player.forward[0];
            playerCamera.front[2] = this.player.forward[2];
            playerCamera.up = this.player.up;
        }
        if (keys[82]) {
            gl_matrix_1.vec3.copy(this.player.position, playerOrigin);
            gl_matrix_1.vec3.copy(this.player.forward, playerOriginRotation);
        }
        if (keys[79]) {
            activeCamera = worldCamera;
        }
        else {
            activeCamera = playerCamera;
        }
    }
    /**
     * @param {Number} interpolationPercentage
     *   How much to interpolate between frames.
     */
    draw(interpolationPercentage) {
        this.resize();
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        //Move camera behind player
        playerCamera.position[0] = this.player.position[0];
        playerCamera.position[2] = this.player.position[2];
        playerCamera.position[0] -= 2 * this.player.forward[0];
        playerCamera.position[2] -= 2 * this.player.forward[2];
        //Setup view and projection
        let projection = gl_matrix_1.mat4.create();
        let view = activeCamera.getViewMatrix();
        gl_matrix_1.mat4.perspective(projection, gl_matrix_1.glMatrix.toRadian(80), canvas.width / canvas.height, 0.1, 10000);
        let viewProjection = gl_matrix_1.mat4.multiply(projection, projection, view);
        let model = gl_matrix_1.mat4.create();
        //Draw Skybox
        gl.disable(gl.DEPTH_TEST);
        shader.use();
        gl_matrix_1.mat4.translate(model, model, activeCamera.position);
        shader.setFloat("ambient", 0.65);
        shader.setMat4("model", model);
        shader.setMat4("viewProjection", viewProjection);
        this.skybox.draw(gl);
        instancedShader.use();
        // directional light
        instancedShader.setVec3("dirLight.direction", [-0.45, -1.0, -0.7]);
        instancedShader.setVec3("dirLight.ambient", [0.2, 0.2, 0.2]);
        instancedShader.setVec3("dirLight.diffuse", [0.7, 0.7, 0.7]);
        instancedShader.setVec3("dirLight.specular", [0.0, 0.0, 0.0]);
        //Setup player point light
        instancedShader.setVec3("playerLight.position", [this.player.position[0], this.player.position[1], this.player.position[2]]);
        instancedShader.setVec3("playerLight.ambient", [0.05, 0.05, 0.05]);
        instancedShader.setVec3("playerLight.diffuse", [0.1, 0.1, 0.1]);
        instancedShader.setVec3("playerLight.specular", [0.0, 0.0, 0.0]);
        instancedShader.setFloat("playerLight.constant", 0.4);
        instancedShader.setFloat("playerLight.linear", 0.09);
        instancedShader.setFloat("playerLight.quadratic", 0.032);
        instancedShader.setVec3("viewPos", playerCamera.position);
        // material properties
        instancedShader.setFloat("material.shininess", 64.0);
        //Draw Disk
        gl.enable(gl.DEPTH_TEST);
        model = gl_matrix_1.mat4.create();
        instancedShader.use();
        instancedShader.setMat4("viewProjection", viewProjection);
        instancedShader.setMat4("model", model);
        this.world.draw(gl, instancedShader);
        //Draws Player in front of camera, always facing away from camera
        instancedShader.use();
        instancedShader.setMat4("viewProjection", viewProjection);
        model = gl_matrix_1.mat4.create();
        //Move player model to its position
        gl_matrix_1.mat4.translate(model, model, this.player.position);
        //Rotate model to face away from camera
        gl_matrix_1.mat4.rotateY(model, model, Math.atan2(this.player.forward[0], this.player.forward[2]) - Math.PI / 2);
        instancedShader.setMat4("model", model);
        //shader.setFloat("ambient", 0.75);
        this.player.draw(gl);
    }
    end(fps, panic) {
        fpsCounter.textContent = Math.round(fps) + ' FPS';
        if (panic) {
            var discardedTime = Math.round(MainLoop.resetFrameDelta());
            console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
        }
    }
    resize() {
        let min = Math.min(window.innerHeight, window.innerWidth);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    initPointerLock() {
        let _canvas = canvas;
        // Start by going fullscreen with the element.  Current implementations
        // require the element to be in fullscreen before requesting pointer
        // lock--something that will likely change in the future.
        canvas.requestFullscreen = canvas.requestFullscreen ||
            _canvas.mozRequestFullscreen ||
            _canvas.mozRequestFullScreen || // Older API upper case 'S'.
            canvas.webkitRequestFullscreen;
        canvas.addEventListener('click', canvas.requestFullscreen, false);
        document.addEventListener('fullscreenchange', this.fullscreenChange, false);
        document.addEventListener('mozfullscreenchange', this.fullscreenChange, false);
        document.addEventListener('webkitfullscreenchange', this.fullscreenChange, false);
        document.addEventListener('pointerlockchange', this.pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', this.pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', this.pointerLockChange, false);
    }
}
window.onkeydown = function (e) {
    keys[e.keyCode] = true;
};
window.onkeyup = function (e) {
    keys[e.keyCode] = false;
};
window.onmousedown = function (e) {
    mouseKeys[e.which] = true;
};
window.onmouseup = function (e) {
    mouseKeys[e.which] = false;
};
new Main();


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["LDU"] = LDU;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    let a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];

  // Calculate the determinant
  let det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] =  a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] =  a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  let a0 = a[0];
  out[0] =  a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] =  a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2]/a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  let aa = a[0], ab = a[1], ac = a[2], ad = a[3];
  let atx = a[4], aty = a[5];

  let det = aa * ad - ab * ac;
  if(!det){
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4x4 Matrix
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a03 = a[3];
    let a12 = a[6], a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
  out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
  out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
  out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
  out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
  out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  // Cache only the current line of the second matrix
  let b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
  out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
  out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
  out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1], z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
  a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
  a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
  b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
  b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[0]  = a[0];
    out[1]  = a[1];
    out[2]  = a[2];
    out[3]  = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[4]  = a[4];
    out[5]  = a[5];
    out[6]  = a[6];
    out[7]  = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[8]  = a[8];
    out[9]  = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = 1;
  out[1]  = 0;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = 0;
  out[2]  = -s;
  out[3]  = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = s;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  let ox = o[0];
  let oy = o[1];
  let oz = o[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  let rl = 1 / (right - left);
  let tb = 1 / (top - bottom);
  let nf = 1 / (near - far);
  out[0] = (near * 2) * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = (near * 2) * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (far * near * 2) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  let upTan = Math.tan(fov.upDegrees * Math.PI/180.0);
  let downTan = Math.tan(fov.downDegrees * Math.PI/180.0);
  let leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0);
  let rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0);
  let xScale = 2.0 / (leftTan + rightTan);
  let yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = ((upTan - downTan) * yScale * 0.5);
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = (far * near) / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  let eyex = eye[0];
  let eyey = eye[1];
  let eyez = eye[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];
  let centerx = center[0];
  let centery = center[1];
  let centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) {
    return mat4.identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  let len = z0*z0 + z1*z1 + z2*z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
          a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
          a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
          a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  out[9] = a[9] + (b[9] * scale);
  out[10] = a[10] + (b[10] * scale);
  out[11] = a[11] + (b[11] * scale);
  out[12] = a[12] + (b[12] * scale);
  out[13] = a[13] + (b[13] * scale);
  out[14] = a[14] + (b[14] * scale);
  out[15] = a[15] + (b[15] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
         a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
         a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
         a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3];
  let a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7];
  let a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11];
  let a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

  let b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3];
  let b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7];
  let b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11];
  let b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
          Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
          Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
          Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
          Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
          Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
          Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
          Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["setAxisAngle"] = setAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["getAxisAngle"] = getAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["calculateW"] = calculateW;
/* harmony export (immutable) */ __webpack_exports__["slerp"] = slerp;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["conjugate"] = conjugate;
/* harmony export (immutable) */ __webpack_exports__["fromMat3"] = fromMat3;
/* harmony export (immutable) */ __webpack_exports__["fromEuler"] = fromEuler;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4__ = __webpack_require__(7);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */






/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  let rad = Math.acos(q[3]) * 2.0;
  let s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let by = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bz = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  let x = a[0], y = a[1], z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if ( cosom < 0.0 ) {
    cosom = -cosom;
    bx = - bx;
    by = - by;
    bz = - bz;
    bw = - bw;
  }
  // calculate coefficients
  if ( (1.0 - cosom) > 0.000001 ) {
    // standard case (slerp)
    omega  = Math.acos(cosom);
    sinom  = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let dot = a0*a0 + a1*a1 + a2*a2 + a3*a3;
  let invDot = dot ? 1.0/dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0*invDot;
  out[1] = -a1*invDot;
  out[2] = -a2*invDot;
  out[3] = a3*invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if ( fTrace > 0.0 ) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0);  // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5/fRoot;  // 1/(4w)
    out[0] = (m[5]-m[7])*fRoot;
    out[1] = (m[6]-m[2])*fRoot;
    out[2] = (m[1]-m[3])*fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if ( m[4] > m[0] )
      i = 1;
    if ( m[8] > m[i*3+i] )
      i = 2;
    let j = (i+1)%3;
    let k = (i+2)%3;

    fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
    out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
    out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
    let halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);

    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;

    return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
const clone = __WEBPACK_IMPORTED_MODULE_3__vec4__["clone"];
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;


/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
const fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4__["fromValues"];
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;


/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = __WEBPACK_IMPORTED_MODULE_3__vec4__["copy"];
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;


/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = __WEBPACK_IMPORTED_MODULE_3__vec4__["set"];
/* harmony export (immutable) */ __webpack_exports__["set"] = set;


/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = __WEBPACK_IMPORTED_MODULE_3__vec4__["add"];
/* harmony export (immutable) */ __webpack_exports__["add"] = add;


/**
 * Alias for {@link quat.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = __WEBPACK_IMPORTED_MODULE_3__vec4__["scale"];
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;


/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = __WEBPACK_IMPORTED_MODULE_3__vec4__["dot"];
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;


/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = __WEBPACK_IMPORTED_MODULE_3__vec4__["lerp"];
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;


/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = __WEBPACK_IMPORTED_MODULE_3__vec4__["length"];
/* harmony export (immutable) */ __webpack_exports__["length"] = length;


/**
 * Alias for {@link quat.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4__["squaredLength"];
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;


/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = __WEBPACK_IMPORTED_MODULE_3__vec4__["normalize"];
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;


/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4__["exactEquals"];
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;


/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const equals = __WEBPACK_IMPORTED_MODULE_3__vec4__["equals"];
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;


/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function() {
  let tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["create"]();
  let xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](1,0,0);
  let yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](0,1,0);

  return function(out, a, b) {
    let dot = __WEBPACK_IMPORTED_MODULE_2__vec3__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3__["len"](tmpvec3) < 0.000001)
        __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
})();
/* harmony export (immutable) */ __webpack_exports__["rotationTo"] = rotationTo;


/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
const sqlerp = (function () {
  let temp1 = create();
  let temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}());
/* harmony export (immutable) */ __webpack_exports__["sqlerp"] = sqlerp;


/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function() {
  let matr = __WEBPACK_IMPORTED_MODULE_1__mat3__["create"]();

  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
})();
/* harmony export (immutable) */ __webpack_exports__["setAxes"] = setAxes;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
};

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
};

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round (out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x*x + y*y;
};

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
    y = a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1];
  return x*x + y*y;
};

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x*x + y*y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1];
  let b0 = b[0], b1 = b[1];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec2.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec2.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 2;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Shader {
    constructor(gl, vertexSourceCode, fragmentSourceCode) {
        this.gl = gl;
        let vertexShader = getShader(gl, vertexSourceCode, gl.VERTEX_SHADER);
        let fragmentShader = getShader(gl, fragmentSourceCode, gl.FRAGMENT_SHADER);
        this.ID = gl.createProgram();
        gl.attachShader(this.ID, vertexShader);
        gl.attachShader(this.ID, fragmentShader);
        gl.linkProgram(this.ID);
        if (!gl.getProgramParameter(this.ID, gl.LINK_STATUS)) {
            alert("Could not initialize shaders");
        }
    }
    use() {
        this.gl.useProgram(this.ID);
    }
    setBool(name, value) {
        this.gl.uniform1i(this.getUniformLocation(name), value);
    }
    setInt(name, value) {
        this.gl.uniform1i(this.getUniformLocation(name), value);
    }
    setFloat(name, value) {
        this.gl.uniform1f(this.getUniformLocation(name), value);
    }
    getUniformLocation(name) {
        return this.gl.getUniformLocation(this.ID, name);
    }
    setMat4(name, matrix) {
        this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, matrix);
    }
    setVec3(name, vec) {
        this.gl.uniform3fv(this.getUniformLocation(name), vec);
    }
    setVec4(name, vec) {
        this.gl.uniform4fv(this.getUniformLocation(name), vec);
    }
}
exports.Shader = Shader;
function getShader(gl, sourceCode, type) {
    let shader;
    shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(2);
const gl_matrix_2 = __webpack_require__(2);
const YAW = 90.0;
const PITCH = 0.0;
const SPEED = 20.0;
const SENSITIVITY = 0.1;
const ZOOM = 65.0;
var Camera_Movement;
(function (Camera_Movement) {
    Camera_Movement[Camera_Movement["FORWARD"] = 0] = "FORWARD";
    Camera_Movement[Camera_Movement["BACKWARD"] = 1] = "BACKWARD";
    Camera_Movement[Camera_Movement["LEFT"] = 2] = "LEFT";
    Camera_Movement[Camera_Movement["RIGHT"] = 3] = "RIGHT";
})(Camera_Movement = exports.Camera_Movement || (exports.Camera_Movement = {}));
class Camera {
    constructor(pos = gl_matrix_2.vec3.fromValues(0, 0, 0), up = gl_matrix_2.vec3.fromValues(0, 1, 0), yaw = YAW, pitch = PITCH) {
        this.position = pos;
        this.front = gl_matrix_2.vec3.fromValues(0, 0, -1);
        this.worldUp = up;
        this.movementSpeed = SPEED;
        this.mouseSensitivity = SENSITIVITY;
        this.zoom = ZOOM;
        this.yaw = yaw;
        this.pitch = pitch;
        this.updateCameraVectors();
    }
    getViewMatrix() {
        let forward = gl_matrix_2.vec3.create();
        gl_matrix_2.vec3.add(forward, this.position, this.front);
        let look = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.lookAt(look, this.position, forward, this.up);
        return look;
    }
    lookAt(pos) {
        let a = gl_matrix_2.vec3.create();
        gl_matrix_2.vec3.subtract(a, pos, this.position);
        gl_matrix_2.vec3.normalize(a, a);
        this.front = a;
    }
    getInverseViewMatrix() {
        let forward = gl_matrix_2.vec3.create();
        gl_matrix_2.vec3.add(forward, this.position, this.front);
        let look = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.lookAt(look, this.position, forward, this.up);
        gl_matrix_1.mat4.invert(look, look);
        return look;
    }
    processKeyboard(direction, deltaTime) {
        let velocity = this.movementSpeed * deltaTime;
        let a = this.front;
        let b = this.right;
        if (direction == Camera_Movement.FORWARD) {
            let offset = gl_matrix_2.vec3.create();
            gl_matrix_2.vec3.scale(offset, a, velocity);
            gl_matrix_2.vec3.add(this.position, this.position, offset);
        }
        if (direction == Camera_Movement.BACKWARD) {
            let offset = gl_matrix_2.vec3.create();
            gl_matrix_2.vec3.scale(offset, a, -velocity);
            gl_matrix_2.vec3.add(this.position, this.position, offset);
        }
        if (direction == Camera_Movement.LEFT) {
            let offset = gl_matrix_2.vec3.create();
            gl_matrix_2.vec3.scale(offset, b, -velocity);
            gl_matrix_2.vec3.add(this.position, this.position, offset);
        }
        if (direction == Camera_Movement.RIGHT) {
            let offset = gl_matrix_2.vec3.create();
            gl_matrix_2.vec3.scale(offset, b, velocity);
            gl_matrix_2.vec3.add(this.position, this.position, offset);
        }
    }
    //TODO Change calculation to move camera position up and down and keep same target on player
    processMouseMovement(forward, pos, xOffset, yOffset, constrainPitch = true) {
        xOffset *= this.mouseSensitivity;
        yOffset *= this.mouseSensitivity;
        //this.yaw += xOffset;
        this.pitch += yOffset;
        let yawConstrainAmount = 0;
        //Makes Camera lock behind player
        let a = Math.atan2(forward[0], forward[2]);
        a += Math.PI;
        a *= 360 / (2 * Math.PI);
        a = 360 - a - 90;
        if (constrainPitch) {
            if (this.pitch > 20)
                this.pitch = 20;
            if (this.pitch < -20)
                this.pitch = -20;
            if (this.yaw > a + yawConstrainAmount)
                this.yaw = a + yawConstrainAmount;
            if (this.yaw < a - yawConstrainAmount)
                this.yaw = a - yawConstrainAmount;
        }
        this.updateCameraVectors();
    }
    updateCameraVectors() {
        let x = Math.cos(gl_matrix_1.glMatrix.toRadian(this.yaw)) * Math.cos(gl_matrix_1.glMatrix.toRadian(this.pitch));
        let y = Math.sin(gl_matrix_1.glMatrix.toRadian(this.pitch));
        let z = Math.sin(gl_matrix_1.glMatrix.toRadian(this.yaw)) * Math.cos(gl_matrix_1.glMatrix.toRadian(this.pitch));
        let newFront = gl_matrix_2.vec3.fromValues(x, y, z);
        gl_matrix_2.vec3.normalize(newFront, newFront);
        this.front = newFront;
        let cross = gl_matrix_2.vec3.create();
        gl_matrix_2.vec3.normalize(cross, gl_matrix_2.vec3.cross(cross, this.front, this.worldUp));
        this.right = cross;
        let cross2 = gl_matrix_2.vec3.create();
        gl_matrix_2.vec3.normalize(cross2, gl_matrix_2.vec3.cross(cross2, this.right, this.front));
        this.up = cross2;
    }
}
exports.Camera = Camera;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(2);
const playermodel_1 = __webpack_require__(19);
const index_js_1 = __webpack_require__(1);
const index_js_2 = __webpack_require__(1);
let OBJ = __webpack_require__(1);
const SPEED = 20;
var Player_Movement;
(function (Player_Movement) {
    Player_Movement[Player_Movement["FORWARD"] = 0] = "FORWARD";
    Player_Movement[Player_Movement["BACKWARD"] = 1] = "BACKWARD";
    Player_Movement[Player_Movement["LEFT"] = 2] = "LEFT";
    Player_Movement[Player_Movement["RIGHT"] = 3] = "RIGHT";
})(Player_Movement = exports.Player_Movement || (exports.Player_Movement = {}));
class Player {
    constructor(gl, mesh, pos) {
        this.model = new playermodel_1.PlayerModel(mesh);
        this.model.init(gl);
        this.position = gl_matrix_1.vec3.fromValues(pos[0], pos[1], pos[2]);
        this.up = gl_matrix_1.vec3.fromValues(0, 1, 0);
        this.forward = gl_matrix_1.vec3.fromValues(1, 0, 0);
    }
    rotate(angle) {
        gl_matrix_1.vec3.rotateY(this.forward, this.forward, [0, 0, 0], angle * 2);
    }
    move(direction, deltaTime) {
        let velocity = gl_matrix_1.vec3.create();
        if (direction == Player_Movement.FORWARD) {
            gl_matrix_1.vec3.scale(velocity, this.forward, SPEED * deltaTime);
            gl_matrix_1.vec3.add(this.position, this.position, velocity);
        }
        else if (direction == Player_Movement.BACKWARD) {
            gl_matrix_1.vec3.scale(velocity, this.forward, -SPEED * deltaTime * 0.5);
            gl_matrix_1.vec3.add(this.position, this.position, velocity);
        }
        else if (direction == Player_Movement.LEFT) {
            let r = gl_matrix_1.vec3.create();
            gl_matrix_1.vec3.copy(r, this.forward);
            gl_matrix_1.vec3.rotateY(r, r, [0, 0, 0], Math.PI / 2);
            gl_matrix_1.vec3.scale(velocity, r, SPEED * deltaTime);
            gl_matrix_1.vec3.add(this.position, this.position, velocity);
        }
        else if (direction == Player_Movement.RIGHT) {
            let r = gl_matrix_1.vec3.create();
            gl_matrix_1.vec3.copy(r, this.forward);
            gl_matrix_1.vec3.rotateY(r, r, [0, 0, 0], -Math.PI / 2);
            gl_matrix_1.vec3.scale(velocity, r, SPEED * deltaTime);
            gl_matrix_1.vec3.add(this.position, this.position, velocity);
        }
    }
    draw(gl) {
        this.model.draw(gl);
    }
    static loadMesh() {
        return __awaiter(this, void 0, void 0, function* () {
            return OBJ.downloadModels([
                {
                    name: 'cbabe',
                    obj: "/assets/models/actors/cbabe/cbabe_stand_n.obj",
                    mtl: "/assets/models/actors/cbabe/cbabe.mtl"
                }
            ]);
        });
    }
    static load() {
        let a = new index_js_1.Mesh(__webpack_require__(21));
        let b = new index_js_2.MaterialLibrary(__webpack_require__(22));
        a.addMaterialLibrary(b);
        let c = __webpack_require__(23);
        let image = new Image();
        image.src = 'data:image/jpeg;base64,' + c;
        a.materialsByIndex[0].mapDiffuse.texture = image;
        return a;
    }
}
exports.Player = Player;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const basicmodel_1 = __webpack_require__(3);
class PlayerModel extends basicmodel_1.BasicModel {
    constructor(mesh) {
        super(mesh);
    }
    init(gl) {
        super.init(gl);
        if (!this.initTexture(gl, 0)) {
            console.warn("Player model texture 0 wasn't downloaded");
        }
    }
    draw(gl) {
        gl.bindVertexArray(this.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
        this.textures.forEach((texture, index) => {
            let is = this.mesh.vertexBuffer.itemSize;
            let material = this.mesh.materials[index];
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.drawElements(gl.TRIANGLES, is * material.numItems, gl.UNSIGNED_SHORT, material.offset * is * byteSize);
        });
        gl.bindVertexArray(null);
    }
}
exports.PlayerModel = PlayerModel;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = downloadMtlTextures;
/* harmony export (immutable) */ __webpack_exports__["c"] = downloadModels;
/* harmony export (immutable) */ __webpack_exports__["b"] = downloadMeshes;
/* harmony export (immutable) */ __webpack_exports__["e"] = initMeshBuffers;
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteMeshBuffers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__(4);






function downloadMtlTextures (mtl, root) {
  const mapAttributes = [
    'mapDiffuse',
    'mapAmbient',
    'mapSpecular',
    'mapDissolve',
    'mapBump',
    'mapDisplacement',
    'mapDecal',
    'mapEmissive',
  ];
  if (!root.endsWith('/')) {
    root += '/';
  }
  let textures = [];

  for (let material in mtl.materials) {
    if (!mtl.materials.hasOwnProperty(material)) {
      continue;
    }
    material = mtl.materials[material];

    for (let attr of mapAttributes) {
     
      let mapData = material[attr];
      if (!mapData) {
        continue;
      }

      let url = root + mapData.filename;

      textures.push(
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error()
            }
            return response.blob();
          })
          .then(function(data) {
            let image = new Image();
            image.src = URL.createObjectURL(data);
            mapData.texture = image;
          })
          .catch(() => {
            console.error(`Unable to download texture: ${url}`);
          })
      );

    }
  }

  return Promise.all(textures);
}


/**
 * Accepts a list of model request objects and returns a Promise that
 * resolves when all models have been downloaded and parsed.
 *
 * The list of model objects follow this interface:
 * {
 *  obj: 'path/to/model.obj',
 *  mtl: true | 'path/to/model.mtl',
 *  downloadMtlTextures: true | false
 *  mtlTextureRoot: '/models/suzanne/maps'
 *  name: 'suzanne'
 * }
 *
 * The `obj` attribute is required and should be the path to the
 * model's .obj file relative to the current repo (absolute URLs are
 * suggested).
 *
 * The `mtl` attribute is optional and can either be a boolean or
 * a path to the model's .mtl file relative to the current URL. If
 * the value is `true`, then the path and basename given for the `obj`
 * attribute is used replacing the .obj suffix for .mtl
 * E.g.: {obj: 'models/foo.obj', mtl: true} would search for 'models/foo.mtl'
 *
 * The `name` attribute is optional and is a human friendly name to be
 * included with the parsed OBJ and MTL files. If not given, the base .obj
 * filename will be used.
 *
 * The `downloadMtlTextures` attribute is a flag for automatically downloading
 * any images found in the MTL file and attaching them to each Material
 * created from that file. For example, if material.mapDiffuse is set (there
 * was data in the MTL file), then material.mapDiffuse.texture will contain
 * the downloaded image. This option defaults to `true`. By default, the MTL's
 * URL will be used to determine the location of the images.
 *
 * The `mtlTextureRoot` attribute is optional and should point to the location
 * on the server that this MTL's texture files are located. The default is to
 * use the MTL file's location.
 *
 * @returns {Promise} the result of downloading the given list of models. The
 * promise will resolve with an object whose keys are the names of the models
 * and the value is its Mesh object. Each Mesh object will automatically
 * have its addMaterialLibrary() method called to set the given MTL data (if given).
 */
//to pass root to fetch callbacks
let global_root;
function downloadModels (models) {
	global_root = window.location.href.substr(0, window.location.href.lastIndexOf("/"));
  const finished = [];

  for (const model of models) {
    const parsed = [];

    if (!model.obj) {
      throw new Error(
        '"obj" attribute of model object not set. The .obj file is required to be set ' +
        'in order to use downloadModels()'
      );
    }
	
    // if the name is not provided, dervive it from the given OBJ
    let name = model.name;
    if (!name) {
      let parts = model.obj.split('/');
      name = parts[parts.length - 1].replace('.obj', '');
    }
    parsed.push(Promise.resolve(name));

    parsed.push(
      fetch(global_root + model.obj)
        .then((response) => response.text())
        .then((data) => {
          return new __WEBPACK_IMPORTED_MODULE_0__mesh__["a" /* default */](data);
        })
    );

    // Download MaterialLibrary file?
    if (model.mtl) {
      let mtl = model.mtl;
      if (typeof mtl === 'boolean') {
        mtl = model.obj.replace(/\.obj$/, '.mtl');
      }

      parsed.push(
        fetch(global_root + mtl)
          .then((response) => response.text())
          .then((data) => {
            let material = new __WEBPACK_IMPORTED_MODULE_1__material__["b" /* MaterialLibrary */](data);
            if (model.downloadMtlTextures !== false) {
              let root =  model.mtlTextureRoot;
              if (!root) {
                // get the directory of the MTL file as default
                root = mtl.substr(0, mtl.lastIndexOf("/"));
              }
              // downloadMtlTextures returns a Promise that
              // is resolved once all of the images it
              // contains are downloaded. These are then
              // attached to the map data objects
              return Promise.all([
                Promise.resolve(material),
                downloadMtlTextures(material, global_root + root)
              ]);
            }
            return Promise.all(Promise.resolve(material));
          })
          .then((value) => {
            return value[0];
          })
      );
    
    }

    finished.push(Promise.all(parsed));
  }

  return Promise.all(finished)
    .then((ms) => {
      // the "finished" promise is a list of name, Mesh instance,
      // and MaterialLibary instance. This unpacks and returns an
      // object mapping name to Mesh (Mesh points to MTL).
      const models = {};

      for (const model of ms) {
        const [name, mesh, mtl] = model;
        mesh.name = name;
        if (mtl) {
          mesh.addMaterialLibrary(mtl);
        }
        models[name] = mesh;
      }

      return models;
    });
}


/**
 * Takes in an object of `mesh_name`, `'/url/to/OBJ/file'` pairs and a callback
 * function. Each OBJ file will be ajaxed in and automatically converted to
 * an OBJ.Mesh. When all files have successfully downloaded the callback
 * function provided will be called and passed in an object containing
 * the newly created meshes.
 *
 * **Note:** In order to use this function as a way to download meshes, a
 * webserver of some sort must be used.
 *
 * @param {Object} nameAndAttrs an object where the key is the name of the mesh and the value is the url to that mesh's OBJ file
 *
 * @param {Function} completionCallback should contain a function that will take one parameter: an object array where the keys will be the unique object name and the value will be a Mesh object
 *
 * @param {Object} meshes In case other meshes are loaded separately or if a previously declared variable is desired to be used, pass in a (possibly empty) json object of the pattern: { '<mesh_name>': OBJ.Mesh }
 *
 */
function downloadMeshes (nameAndURLs, completionCallback, meshes) {
  if (meshes === undefined) {
    meshes = {};
  }

  const completed = [];

  for (const mesh_name in nameAndURLs) {
    if (!nameAndURLs.hasOwnProperty(mesh_name)) {
      continue;
    }
    const url = nameAndURLs[mesh_name];
    completed.push(
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          return [mesh_name, new __WEBPACK_IMPORTED_MODULE_0__mesh__["a" /* default */](data)];
        })
    );
  }

  Promise.all(completed)
    .then((ms) => {
      for (let [name, mesh] of ms) {
        meshes[name] = mesh;
      }

      return completionCallback(meshes);
    });
}

var _buildBuffer = function( gl, type, data, itemSize ){
  var buffer = gl.createBuffer();
  var arrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
  gl.bindBuffer(type, buffer);
  gl.bufferData(type, new arrayView(data), gl.STATIC_DRAW);
  buffer.itemSize = itemSize;
  buffer.numItems = data.length / itemSize;
  return buffer;
};

/**
 * Takes in the WebGL context and a Mesh, then creates and appends the buffers
 * to the mesh object as attributes.
 *
 * @param {WebGLRenderingContext} gl the `canvas.getContext('webgl')` context instance
 * @param {Mesh} mesh a single `OBJ.Mesh` instance
 *
 * The newly created mesh attributes are:
 *
 * Attrbute | Description
 * :--- | ---
 * **normalBuffer**       |contains the model&#39;s Vertex Normals
 * normalBuffer.itemSize  |set to 3 items
 * normalBuffer.numItems  |the total number of vertex normals
 * |
 * **textureBuffer**      |contains the model&#39;s Texture Coordinates
 * textureBuffer.itemSize |set to 2 items
 * textureBuffer.numItems |the number of texture coordinates
 * |
 * **vertexBuffer**       |contains the model&#39;s Vertex Position Coordinates (does not include w)
 * vertexBuffer.itemSize  |set to 3 items
 * vertexBuffer.numItems  |the total number of vertices
 * |
 * **indexBuffer**        |contains the indices of the faces
 * indexBuffer.itemSize   |is set to 1
 * indexBuffer.numItems   |the total number of indices
 *
 * A simple example (a lot of steps are missing, so don't copy and paste):
 *
 *     var gl   = canvas.getContext('webgl'),
 *         mesh = OBJ.Mesh(obj_file_data);
 *     // compile the shaders and create a shader program
 *     var shaderProgram = gl.createProgram();
 *     // compilation stuff here
 *     ...
 *     // make sure you have vertex, vertex normal, and texture coordinate
 *     // attributes located in your shaders and attach them to the shader program
 *     shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
 *     gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
 *
 *     shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
 *     gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
 *
 *     shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
 *     gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
 *
 *     // create and initialize the vertex, vertex normal, and texture coordinate buffers
 *     // and save on to the mesh object
 *     OBJ.initMeshBuffers(gl, mesh);
 *
 *     // now to render the mesh
 *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vertexBuffer);
 *     gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, mesh.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
 *     // it's possible that the mesh doesn't contain
 *     // any texture coordinates (e.g. suzanne.obj in the development branch).
 *     // in this case, the texture vertexAttribArray will need to be disabled
 *     // before the call to drawElements
 *     if(!mesh.textures.length){
 *       gl.disableVertexAttribArray(shaderProgram.textureCoordAttribute);
 *     }
 *     else{
 *       // if the texture vertexAttribArray has been previously
 *       // disabled, then it needs to be re-enabled
 *       gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
 *       gl.bindBuffer(gl.ARRAY_BUFFER, mesh.textureBuffer);
 *       gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, mesh.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);
 *     }
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
 *     gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, mesh.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);
 *
 *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.mesh.indexBuffer);
 *     gl.drawElements(gl.TRIANGLES, model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
 */
function initMeshBuffers ( gl, mesh ) {
  mesh.normalBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertexNormals, 3);
  mesh.textureBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.textures, 2);
  mesh.vertexBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertices, 3);
  mesh.indexBuffer = _buildBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, mesh.indices, 1);
};

function deleteMeshBuffers ( gl, mesh ) {
  gl.deleteBuffer(mesh.normalBuffer);
  gl.deleteBuffer(mesh.textureBuffer);
  gl.deleteBuffer(mesh.vertexBuffer);
  gl.deleteBuffer(mesh.indexBuffer);
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "# Blender v2.79 (sub 0) OBJ File: ''\r\n# www.blender.org\r\nmtllib cbabe_stand_n.mtl\r\no Object_1\r\nv 0.111469 0.411396 -0.156979\r\nv 0.054011 0.418736 -0.143162\r\nv 0.082740 0.323439 -0.184605\r\nv 0.054011 0.301469 -0.184605\r\nv 0.121049 0.506667 -0.115536\r\nv 0.063591 0.521348 -0.115536\r\nv 0.111469 0.411396 -0.184605\r\nv 0.054011 0.426051 -0.212231\r\nv 0.121049 0.557973 -0.136258\r\nv 0.073161 0.565313 -0.163884\r\nv 0.082740 0.330780 -0.198423\r\nv 0.054011 0.338095 -0.226049\r\nv 0.101900 0.264819 -0.198423\r\nv 0.073161 0.242823 -0.191509\r\nv 0.168937 0.118216 -0.239867\r\nv 0.140208 0.103561 -0.239867\r\nv 0.063591 0.279474 -0.246771\r\nv 0.101900 0.279474 -0.219145\r\nv 0.140208 0.125556 -0.274397\r\nv 0.168937 0.125556 -0.260589\r\nv -0.003456 0.433391 -0.163884\r\nv 0.006123 0.433391 -0.198423\r\nv 0.006123 0.301469 -0.205327\r\nv 0.006123 0.316124 -0.219145\r\nv 0.015703 0.543318 -0.122440\r\nv 0.044432 0.565313 -0.163884\r\nv 0.006123 0.433391 -0.198423\r\nv 0.006123 0.316124 -0.219145\r\nv 0.015703 0.543318 -0.122440\r\nv 0.121049 0.103561 -0.246771\r\nv 0.044432 0.235508 -0.212231\r\nv 0.121049 0.110901 -0.267493\r\nv 0.044432 0.257478 -0.239867\r\nv 0.121049 0.110901 -0.267493\r\nv 0.044432 0.257478 -0.239867\r\nv 0.111469 0.411396 0.174581\r\nv 0.082740 0.338095 0.202207\r\nv 0.054011 0.418736 0.153859\r\nv 0.054011 0.308784 0.202207\r\nv 0.121049 0.506667 0.119319\r\nv 0.063591 0.521348 0.119319\r\nv 0.111469 0.418736 0.202207\r\nv 0.121049 0.557973 0.146945\r\nv 0.054011 0.426051 0.222929\r\nv 0.073161 0.565313 0.174581\r\nv 0.073161 0.345435 0.222929\r\nv 0.044432 0.338095 0.236747\r\nv 0.121049 0.294129 0.216025\r\nv 0.226405 0.176862 0.264373\r\nv 0.101900 0.257478 0.216025\r\nv 0.216825 0.162207 0.264373\r\nv 0.073161 0.301469 0.264373\r\nv 0.197666 0.176862 0.298912\r\nv 0.111469 0.308784 0.243651\r\nv 0.226405 0.191517 0.291998\r\nv -0.003456 0.426051 0.167667\r\nv 0.015703 0.294129 0.222929\r\nv -0.003456 0.433391 0.195303\r\nv 0.015703 0.316124 0.229833\r\nv 0.015703 0.543318 0.126223\r\nv 0.044432 0.565313 0.160763\r\nv -0.003456 0.433391 0.195303\r\nv 0.015703 0.316124 0.229833\r\nv 0.015703 0.543318 0.126223\r\nv 0.188096 0.147552 0.278190\r\nv 0.063591 0.242823 0.229833\r\nv 0.188096 0.162207 0.298912\r\nv 0.054011 0.264819 0.257468\r\nv 0.188096 0.162207 0.298912\r\nv 0.054011 0.264819 0.257468\r\nv -0.070494 0.191517 0.133137\r\nv -0.089653 0.191517 0.153859\r\nv -0.118382 0.206173 0.070971\r\nv -0.127962 0.206173 0.077875\r\nv -0.070494 0.272134 0.070971\r\nv -0.099233 0.279474 0.077875\r\nv -0.041765 0.264819 0.126223\r\nv -0.051345 0.264819 0.146945\r\nv -0.108812 0.206173 0.008796\r\nv -0.127962 0.206173 0.008796\r\nv -0.089653 0.272134 0.008796\r\nv -0.099233 0.279474 0.008796\r\nv -0.032185 0.184202 0.153859\r\nv -0.032185 0.184202 0.174581\r\nv -0.003456 0.250163 0.140041\r\nv -0.003456 0.250163 0.160763\r\nv -0.041765 0.264819 -0.115536\r\nv -0.051345 0.264819 -0.136258\r\nv -0.070494 0.272134 -0.060274\r\nv -0.099233 0.279474 -0.074092\r\nv -0.118382 0.206173 -0.060274\r\nv -0.127962 0.206173 -0.067178\r\nv -0.051345 0.176862 -0.136258\r\nv -0.051345 0.169522 -0.156979\r\nv -0.003456 0.250163 -0.129344\r\nv -0.003456 0.250163 -0.150066\r\nv -0.003456 0.184202 -0.150066\r\nv 0.006123 0.184202 -0.170788\r\nv 0.025272 0.088906 -0.170788\r\nv -0.003456 0.066911 -0.136258\r\nv 0.025272 0.118216 -0.163884\r\nv 0.073161 0.000949 -0.177701\r\nv 0.054011 -0.086982 -0.136258\r\nv 0.101900 -0.021021 -0.177701\r\nv 0.015703 -0.321540 0.209111\r\nv -0.032185 -0.438807 0.195303\r\nv -0.041765 -0.306860 0.195303\r\nv -0.099233 -0.394817 0.160763\r\nv -0.060924 -0.299545 0.222929\r\nv -0.118382 -0.380161 0.195303\r\nv -0.041765 -0.299545 0.271277\r\nv -0.099233 -0.402157 0.278190\r\nv -0.041765 0.323439 0.077875\r\nv 0.006123 0.316124 0.105501\r\nv -0.070494 0.125556 0.126223\r\nv 0.006123 0.484697 0.105501\r\nv 0.015703 0.374745 0.098597\r\nv 0.054011 0.462702 0.119319\r\nv 0.015703 0.543318 0.126223\r\nv 0.063591 0.521348 0.119319\r\nv -0.003456 0.492012 0.098597\r\nv -0.032185 0.374745 0.064057\r\nv -0.108812 0.125556 0.008796\r\nv -0.118382 0.125556 0.022614\r\nv -0.060924 0.059595 0.050249\r\nv -0.099233 0.088906 0.008796\r\nv -0.041765 0.037600 0.070971\r\nv -0.070494 0.081591 0.133137\r\nv -0.041765 0.132897 0.181485\r\nv 0.044432 0.565313 0.160763\r\nv 0.015703 0.557973 0.119319\r\nv -0.041765 0.323439 0.008796\r\nv 0.044432 0.037600 0.070971\r\nv 0.044432 0.044940 0.064057\r\nv 0.025272 0.587309 0.008796\r\nv 0.015703 0.565313 0.008796\r\nv 0.044432 0.587309 0.119319\r\nv 0.044432 -0.123632 0.140041\r\nv -0.032185 -0.116317 0.112415\r\nv -0.070494 -0.079667 0.153859\r\nv -0.041765 -0.021021 0.216025\r\nv 0.101900 0.609279 0.050249\r\nv 0.054011 0.616619 0.043336\r\nv 0.082740 0.601964 0.112415\r\nv 0.073161 0.565313 0.174581\r\nv 0.054011 0.616619 0.008796\r\nv -0.032185 0.382085 0.008796\r\nv -0.013036 0.484697 0.008796\r\nv 0.216825 -0.284890 -0.074092\r\nv 0.168937 -0.284890 -0.101718\r\nv 0.188096 -0.409472 -0.080996\r\nv 0.111469 -0.380161 -0.108622\r\nv 0.168937 -0.284890 -0.143162\r\nv 0.111469 -0.372846 -0.150066\r\nv 0.216825 -0.277550 -0.163884\r\nv 0.188096 -0.394817 -0.191509\r\nv -0.041765 0.323439 -0.067178\r\nv 0.006123 0.316124 -0.094814\r\nv -0.032185 0.110901 -0.143162\r\nv 0.054011 0.462702 -0.108622\r\nv 0.015703 0.374745 -0.087900\r\nv 0.006123 0.484697 -0.094814\r\nv 0.015703 0.543318 -0.122440\r\nv 0.063591 0.521348 -0.115536\r\nv -0.032185 0.374745 -0.060274\r\nv -0.003456 0.492012 -0.087900\r\nv -0.118382 0.125556 -0.005012\r\nv -0.003456 0.030285 -0.067178\r\nv -0.051345 0.044940 -0.074092\r\nv 0.015703 0.557973 -0.108622\r\nv 0.044432 0.565313 -0.163884\r\nv 0.044432 0.059595 -0.018830\r\nv 0.044432 0.587309 -0.108622\r\nv 0.130629 -0.094322 -0.039552\r\nv 0.063591 -0.116317 -0.067178\r\nv 0.101900 0.609279 -0.039552\r\nv 0.082740 0.601964 -0.108622\r\nv 0.054011 0.616619 -0.039552\r\nv 0.073161 0.565313 -0.163884\r\nv 0.101900 -0.702651 -0.191509\r\nv 0.188096 -0.394817 -0.191509\r\nv 0.140208 -0.680656 -0.184605\r\nv 0.235985 -0.409472 -0.156979\r\nv 0.111469 -0.380161 -0.108622\r\nv 0.111469 -0.372846 -0.150066\r\nv 0.044432 -0.680656 -0.129344\r\nv 0.044432 -0.680656 -0.177701\r\nv 0.178517 -0.805263 -0.108622\r\nv 0.101900 -0.805263 -0.108622\r\nv 0.178517 -0.805263 -0.205327\r\nv 0.101900 -0.805263 -0.205327\r\nv 0.235985 -0.805263 -0.108622\r\nv 0.235985 -0.805263 -0.205327\r\nv 0.283873 -0.805263 -0.122440\r\nv 0.283873 -0.805263 -0.191509\r\nv 0.006123 -0.797923 -0.129344\r\nv 0.006123 -0.797923 -0.184605\r\nv 0.178517 -0.731962 -0.191509\r\nv 0.255134 -0.753957 -0.198423\r\nv 0.283873 -0.805263 -0.122440\r\nv 0.283873 -0.805263 -0.191509\r\nv 0.255134 -0.753957 -0.115536\r\nv 0.255134 -0.753957 -0.198423\r\nv 0.140208 -0.680656 -0.184605\r\nv 0.235985 -0.409472 -0.156979\r\nv 0.140208 -0.687996 -0.136258\r\nv 0.245554 -0.416812 -0.115536\r\nv 0.178517 -0.731962 -0.122440\r\nv 0.178517 -0.731962 -0.191509\r\nv 0.006123 -0.797923 -0.129344\r\nv 0.044432 -0.680656 -0.129344\r\nv 0.006123 -0.797923 -0.184605\r\nv 0.044432 -0.680656 -0.177701\r\nv 0.140208 -0.687996 -0.136258\r\nv 0.245554 -0.416812 -0.115536\r\nv 0.101900 -0.702651 -0.122440\r\nv 0.188096 -0.409472 -0.080996\r\nv 0.111469 -0.380161 -0.108622\r\nv 0.044432 -0.680656 -0.129344\r\nv 0.178517 -0.731962 -0.122440\r\nv 0.178517 -0.805263 -0.108622\r\nv 0.255134 -0.753957 -0.115536\r\nv 0.235985 -0.805263 -0.108622\r\nv 0.283873 -0.805263 -0.122440\r\nv 0.101900 -0.805263 -0.108622\r\nv 0.006123 -0.797923 -0.129344\r\nv 0.178517 -0.731962 -0.122440\r\nv 0.255134 -0.753957 -0.115536\r\nv 0.178517 -0.731962 -0.191509\r\nv 0.255134 -0.753957 -0.198423\r\nv -0.233318 -0.695311 0.216025\r\nv -0.175850 -0.680656 0.243651\r\nv -0.099233 -0.402157 0.278190\r\nv -0.041765 -0.438807 0.285094\r\nv -0.099233 -0.394817 0.160763\r\nv -0.223738 -0.673341 0.126223\r\nv -0.118382 -0.380161 0.195303\r\nv -0.262047 -0.666001 0.167667\r\nv -0.118382 -0.805263 0.222929\r\nv -0.185430 -0.790608 0.291998\r\nv -0.185430 -0.805263 0.160763\r\nv -0.262047 -0.790608 0.229833\r\nv -0.089653 -0.805263 0.264373\r\nv -0.156691 -0.797923 0.333442\r\nv -0.060924 -0.805263 0.305816\r\nv -0.108812 -0.797923 0.347260\r\nv -0.262047 -0.797923 0.112415\r\nv -0.309935 -0.790608 0.153859\r\nv -0.175850 -0.724647 0.278190\r\nv -0.118382 -0.746617 0.340356\r\nv -0.060924 -0.805263 0.305816\r\nv -0.060924 -0.761297 0.278190\r\nv -0.108812 -0.797923 0.347260\r\nv -0.118382 -0.746617 0.340356\r\nv -0.175850 -0.680656 0.243651\r\nv -0.156691 -0.695311 0.209111\r\nv -0.041765 -0.438807 0.285094\r\nv -0.013036 -0.446122 0.257468\r\nv -0.118382 -0.731962 0.222929\r\nv -0.175850 -0.724647 0.278190\r\nv -0.262047 -0.797923 0.112415\r\nv -0.309935 -0.790608 0.153859\r\nv -0.223738 -0.673341 0.126223\r\nv -0.262047 -0.666001 0.167667\r\nv -0.156691 -0.695311 0.209111\r\nv -0.175850 -0.702651 0.167667\r\nv -0.013036 -0.446122 0.257468\r\nv -0.032185 -0.438807 0.195303\r\nv -0.099233 -0.394817 0.160763\r\nv -0.223738 -0.673341 0.126223\r\nv -0.118382 -0.731962 0.222929\r\nv -0.060924 -0.761297 0.278190\r\nv -0.118382 -0.805263 0.222929\r\nv -0.089653 -0.805263 0.264373\r\nv -0.060924 -0.805263 0.305816\r\nv -0.185430 -0.805263 0.160763\r\nv -0.262047 -0.797923 0.112415\r\nv -0.118382 -0.731962 0.222929\r\nv -0.175850 -0.724647 0.278190\r\nv -0.060924 -0.761297 0.278190\r\nv -0.118382 -0.746617 0.340356\r\nv 0.140208 0.638614 0.050249\r\nv 0.121049 0.594624 0.043336\r\nv 0.140208 0.623959 0.029527\r\nv 0.140208 0.638614 -0.039552\r\nv 0.140208 0.623959 -0.018830\r\nv 0.121049 0.594624 -0.039552\r\nv 0.101900 0.609279 0.050249\r\nv 0.101900 0.609279 -0.039552\r\nv 0.178517 -0.021021 -0.122440\r\nv 0.274293 -0.284890 -0.143162\r\nv 0.101900 -0.021021 -0.177701\r\nv -0.041765 -0.299545 0.271277\r\nv 0.006123 -0.314200 0.291998\r\nv -0.041765 -0.021021 0.216025\r\nv 0.111469 0.132897 -0.101718\r\nv 0.054011 0.103561 -0.170788\r\nv 0.054011 -0.050356 0.236747\r\nv -0.041765 0.132897 0.181485\r\nv 0.130629 0.579968 0.008796\r\nv 0.159357 0.616619 0.008796\r\nv 0.121049 0.506667 0.119319\r\nv 0.130629 0.528663 0.091693\r\nv 0.121049 0.557973 0.146945\r\nv 0.121049 0.565313 -0.094814\r\nv 0.130629 0.528663 -0.087900\r\nv 0.121049 0.557973 -0.136258\r\nv 0.111469 0.396741 0.084779\r\nv 0.130629 0.396741 0.008796\r\nv 0.159357 0.404081 0.084779\r\nv 0.111469 0.396741 -0.080996\r\nv 0.159357 0.404081 -0.074092\r\nv 0.054011 0.162207 0.064057\r\nv 0.073161 0.154867 0.070971\r\nv 0.054011 0.162207 0.091693\r\nv 0.063591 0.154867 0.098597\r\nv 0.073161 0.235508 0.084779\r\nv 0.082740 0.228168 0.091693\r\nv 0.073161 0.228168 0.008796\r\nv 0.101900 0.228168 0.008796\r\nv 0.063591 0.154867 0.008796\r\nv 0.073161 0.154867 0.008796\r\nv 0.063591 0.176862 -0.074092\r\nv 0.073161 0.162207 -0.087900\r\nv 0.054011 0.162207 -0.053370\r\nv 0.073161 0.154867 -0.060274\r\nv 0.073161 0.235508 -0.074092\r\nv 0.082740 0.228168 -0.087900\r\nv -0.003456 0.250163 0.140041\r\nv -0.003456 0.250163 0.160763\r\nv -0.032185 0.184202 0.153859\r\nv -0.032185 0.184202 0.174581\r\nv -0.003456 0.184202 -0.150066\r\nv 0.006123 0.184202 -0.170788\r\nv -0.003456 0.250163 -0.129344\r\nv -0.003456 0.250163 -0.150066\r\nv 0.054011 0.110901 0.167667\r\nv 0.054011 0.081591 0.029527\r\nv 0.063591 0.081591 0.008796\r\nv 0.054011 0.081591 -0.025734\r\nv 0.082740 0.015605 -0.177701\r\nv 0.025272 0.118216 -0.163884\r\nv -0.041765 -0.438807 0.285094\r\nv -0.099233 -0.402157 0.278190\r\nv -0.013036 -0.446122 0.257468\r\nv 0.044432 -0.328856 0.264373\r\nv -0.032185 -0.438807 0.195303\r\nv 0.015703 -0.321540 0.209111\r\nv 0.073161 0.286789 0.070971\r\nv 0.006123 0.316124 0.105501\r\nv 0.015703 0.374745 0.098597\r\nv 0.111469 0.433391 0.119319\r\nv 0.168937 0.492012 0.084779\r\nv 0.140208 0.470042 0.119319\r\nv 0.178517 0.440706 0.084779\r\nv 0.130629 0.418736 0.112415\r\nv 0.054011 0.462702 0.119319\r\nv 0.121049 0.557973 0.070971\r\nv 0.121049 0.572653 0.105501\r\nv 0.101900 0.074251 0.126223\r\nv 0.044432 0.059595 0.015710\r\nv 0.101900 0.352775 0.070971\r\nv 0.111469 0.352775 0.008796\r\nv 0.054011 0.059595 0.008796\r\nv 0.082740 -0.094322 0.195303\r\nv 0.044432 -0.123632 0.140041\r\nv 0.082740 0.601964 0.112415\r\nv 0.044432 0.037600 0.070971\r\nv 0.063591 0.521348 0.119319\r\nv 0.073161 0.565313 0.174581\r\nv 0.178517 0.440706 0.008796\r\nv 0.168937 0.484697 0.008796\r\nv 0.130629 0.550658 0.008796\r\nv 0.140208 0.514007 0.008796\r\nv 0.044432 0.044940 0.064057\r\nv 0.082740 0.286789 0.008796\r\nv 0.159357 0.411396 0.008796\r\nv 0.235985 -0.409472 -0.156979\r\nv 0.188096 -0.394817 -0.191509\r\nv 0.216825 -0.277550 -0.163884\r\nv 0.245554 -0.416812 -0.115536\r\nv 0.274293 -0.284890 -0.108622\r\nv 0.188096 -0.409472 -0.080996\r\nv 0.216825 -0.284890 -0.074092\r\nv 0.006123 0.316124 -0.094814\r\nv 0.073161 0.286789 -0.067178\r\nv 0.111469 0.433391 -0.108622\r\nv 0.015703 0.374745 -0.087900\r\nv 0.178517 0.440706 -0.080996\r\nv 0.140208 0.470042 -0.115536\r\nv 0.168937 0.492012 -0.080996\r\nv 0.130629 0.418736 -0.108622\r\nv 0.121049 0.506667 -0.115536\r\nv 0.054011 0.462702 -0.108622\r\nv 0.121049 0.557973 -0.060274\r\nv 0.111469 0.110901 -0.032648\r\nv 0.044432 0.059595 -0.005012\r\nv 0.101900 0.352775 -0.060274\r\nv 0.188096 -0.043016 -0.060274\r\nv 0.130629 -0.094322 -0.039552\r\nv 0.082740 0.601964 -0.108622\r\nv 0.044432 0.059595 -0.018830\r\nv 0.063591 0.521348 -0.115536\r\nv 0.073161 0.565313 -0.163884\r\nv 0.101900 0.609279 0.050249\r\nv 0.140208 0.638614 0.050249\r\nv 0.168937 0.631274 0.050249\r\nv 0.178517 0.653270 0.057153\r\nv 0.159357 0.594624 0.050249\r\nv 0.168937 0.631274 -0.039552\r\nv 0.178517 0.660585 -0.046456\r\nv 0.140208 0.638614 -0.039552\r\nv 0.159357 0.594624 -0.039552\r\nv 0.101900 0.609279 -0.039552\r\nv 0.054011 0.616619 0.043336\r\nv 0.054011 0.616619 0.140041\r\nv 0.054011 0.616619 -0.122440\r\nv 0.054011 0.616619 -0.039552\r\nv 0.159357 0.763196 0.105501\r\nv 0.168937 0.799847 0.070971\r\nv 0.073161 0.792532 0.105501\r\nv 0.015703 0.748541 -0.080996\r\nv 0.054011 0.689920 -0.115536\r\nv -0.013036 0.697235 -0.080996\r\nv 0.054011 0.689920 0.140041\r\nv 0.025272 0.653270 0.140041\r\nv -0.013036 0.697235 0.091693\r\nv 0.063591 0.741226 0.133137\r\nv 0.140208 0.733886 0.112415\r\nv 0.130629 0.704575 -0.101718\r\nv 0.063591 0.741226 -0.094814\r\nv 0.140208 0.726546 -0.094814\r\nv 0.121049 0.667925 0.126223\r\nv 0.130629 0.704575 0.119319\r\nv 0.159357 0.660585 0.112415\r\nv 0.178517 0.689920 0.105501\r\nv 0.188096 0.741226 0.091693\r\nv 0.188096 0.711890 0.105501\r\nv 0.015703 0.748541 0.084779\r\nv 0.159357 0.594624 0.119319\r\nv 0.197666 0.755881 0.064057\r\nv 0.121049 0.667925 -0.108622\r\nv 0.178517 0.689920 -0.087900\r\nv 0.168937 0.653270 -0.094814\r\nv 0.159357 0.763196 -0.087900\r\nv 0.188096 0.733886 -0.080996\r\nv 0.073161 0.792532 -0.080996\r\nv 0.188096 0.711890 -0.080996\r\nv 0.159357 0.594624 -0.094814\r\nv 0.197666 0.763196 -0.053370\r\nv 0.025272 0.653270 -0.122440\r\nv 0.168937 0.792532 -0.060274\r\nv 0.197666 0.755881 0.064057\r\nv 0.226405 0.770536 0.036432\r\nv 0.168937 0.799847 0.070971\r\nv 0.073161 0.792532 -0.080996\r\nv 0.082740 0.836497 0.008796\r\nv 0.168937 0.792532 -0.039552\r\nv 0.168937 0.792532 -0.060274\r\nv 0.188096 0.807187 0.008796\r\nv 0.226405 0.777851 -0.005012\r\nv 0.197666 0.763196 -0.032648\r\nv 0.073161 0.792532 0.105501\r\nv 0.226405 0.777851 0.008796\r\nv 0.197666 0.763196 -0.053370\r\nv -0.013036 0.697235 0.091693\r\nv -0.041765 0.719231 0.008796\r\nv -0.013036 0.689920 0.008796\r\nv 0.025272 0.653270 0.140041\r\nv 0.015703 0.653270 0.008796\r\nv 0.054011 0.616619 0.140041\r\nv 0.054011 0.616619 0.008796\r\nv -0.013036 0.697235 -0.080996\r\nv 0.025272 0.653270 -0.122440\r\nv 0.054011 0.616619 -0.122440\r\nv 0.015703 0.748541 0.084779\r\nv 0.015703 0.799847 0.008796\r\nv 0.073161 0.792532 0.105501\r\nv 0.082740 0.836497 0.008796\r\nv 0.015703 0.748541 -0.080996\r\nv 0.073161 0.792532 -0.080996\r\nv 0.197666 0.059595 -0.267493\r\nv 0.197666 0.044940 -0.232953\r\nv 0.226405 0.000949 -0.253675\r\nv 0.216825 0.015605 -0.232953\r\nv 0.140208 0.125556 -0.274397\r\nv 0.140208 0.044940 -0.288215\r\nv 0.159357 -0.013706 -0.267493\r\nv 0.159357 -0.013706 -0.246771\r\nv 0.130629 0.030285 -0.253675\r\nv 0.168937 -0.050356 -0.239867\r\nv 0.168937 -0.050356 -0.246771\r\nv 0.235985 -0.035676 -0.232953\r\nv 0.226405 -0.028361 -0.226049\r\nv 0.121049 0.110901 -0.267493\r\nv 0.121049 0.103561 -0.246771\r\nv 0.168937 0.125556 -0.260589\r\nv 0.159357 -0.013706 -0.246771\r\nv 0.216825 0.015605 -0.232953\r\nv 0.197666 0.044940 -0.232953\r\nv 0.130629 0.030285 -0.253675\r\nv 0.216825 0.081591 -0.226049\r\nv 0.235985 0.037600 -0.226049\r\nv 0.226405 0.030285 -0.226049\r\nv 0.140208 0.103561 -0.239867\r\nv 0.226405 -0.028361 -0.226049\r\nv 0.168937 -0.050356 -0.239867\r\nv 0.168937 0.118216 -0.239867\r\nv 0.121049 0.103561 -0.246771\r\nv 0.283873 0.140212 0.305816\r\nv 0.312602 0.103561 0.291998\r\nv 0.283873 0.125556 0.250555\r\nv 0.312602 0.103561 0.271277\r\nv 0.235985 0.103561 0.319634\r\nv 0.197666 0.176862 0.298912\r\nv 0.274293 0.059595 0.305816\r\nv 0.255134 0.059595 0.285094\r\nv 0.235985 0.088906 0.285094\r\nv 0.293442 0.030285 0.278190\r\nv 0.293442 0.030285 0.285094\r\nv 0.350910 0.074251 0.271277\r\nv 0.341331 0.074251 0.264373\r\nv 0.188096 0.162207 0.298912\r\nv 0.188096 0.147552 0.278190\r\nv 0.226405 0.191517 0.291998\r\nv 0.283873 0.125556 0.250555\r\nv 0.312602 0.103561 0.271277\r\nv 0.255134 0.059595 0.285094\r\nv 0.293442 0.132897 0.250555\r\nv 0.235985 0.088906 0.285094\r\nv 0.283873 0.162207 0.250555\r\nv 0.303022 0.125556 0.222929\r\nv 0.303022 0.118216 0.222929\r\nv 0.216825 0.162207 0.264373\r\nv 0.341331 0.074251 0.264373\r\nv 0.293442 0.030285 0.278190\r\nv 0.226405 0.176862 0.264373\r\nv 0.188096 0.147552 0.278190\r\nv 0.178517 0.616619 -0.005012\r\nv 0.140208 0.623959 -0.018830\r\nv 0.168937 0.631274 -0.032648\r\nv 0.178517 0.616619 0.022614\r\nv 0.168937 0.631274 0.043336\r\nv 0.140208 0.623959 0.029527\r\nv 0.188096 0.623959 0.022614\r\nv 0.178517 0.653270 0.057153\r\nv 0.178517 0.660585 -0.046456\r\nv 0.188096 0.623959 -0.018830\r\nv 0.159357 0.594624 0.050249\r\nv 0.168937 0.631274 0.050249\r\nv 0.159357 0.587309 0.070971\r\nv 0.178517 0.660585 0.070971\r\nv 0.159357 0.594624 -0.039552\r\nv 0.159357 0.587309 -0.060274\r\nv 0.168937 0.631274 -0.039552\r\nv 0.101900 0.609279 -0.039552\r\nv 0.054011 0.616619 -0.122440\r\nv 0.197666 0.660585 -0.025734\r\nv 0.197666 0.704575 0.036432\r\nv 0.188096 0.682580 0.057153\r\nv 0.197666 0.689920 0.036432\r\nv 0.197666 0.675265 0.036432\r\nv 0.197666 0.719231 0.043336\r\nv 0.216825 0.726546 0.015710\r\nv 0.216825 0.733886 0.022614\r\nv 0.197666 0.660585 0.022614\r\nv 0.216825 0.660585 0.015710\r\nv 0.197666 0.675265 0.015710\r\nv 0.197666 0.660585 0.022614\r\nv 0.216825 0.653270 0.015710\r\nv 0.216825 0.675265 0.015710\r\nv 0.197666 0.660585 0.036432\r\nv 0.159357 0.616619 0.008796\r\nv 0.178517 0.616619 0.008796\r\nv 0.197666 0.653270 0.015710\r\nv 0.188096 0.623959 0.008796\r\nv 0.197666 0.653270 0.008796\r\nv 0.216825 0.660585 0.008796\r\nv 0.216825 0.653270 0.008796\r\nv 0.216825 0.697235 0.015710\r\nv 0.197666 0.689920 0.015710\r\nv 0.216825 0.733886 0.008796\r\nv 0.216825 0.719231 0.008796\r\nv 0.216825 0.689920 0.008796\r\nv 0.216825 0.697235 0.008796\r\nv 0.216825 0.689920 0.008796\r\nv 0.140208 0.638614 0.050249\r\nv 0.197666 0.704575 0.050249\r\nv 0.216825 0.675265 0.008796\r\nv 0.197666 0.689920 -0.025734\r\nv 0.188096 0.682580 -0.053370\r\nv 0.197666 0.704575 -0.025734\r\nv 0.197666 0.675265 -0.025734\r\nv 0.216825 0.726546 -0.005012\r\nv 0.197666 0.726546 -0.039552\r\nv 0.216825 0.741226 -0.025734\r\nv 0.197666 0.675265 -0.005012\r\nv 0.216825 0.660585 0.001892\r\nv 0.197666 0.660585 -0.005012\r\nv 0.197666 0.660585 -0.005012\r\nv 0.216825 0.653270 0.001892\r\nv 0.216825 0.675265 0.001892\r\nv 0.197666 0.653270 0.001892\r\nv 0.216825 0.697235 0.001892\r\nv 0.197666 0.689920 0.001892\r\nv 0.216825 0.689920 0.001892\r\nv 0.140208 0.638614 -0.039552\r\nv 0.197666 0.704575 -0.046456\r\nv 0.159357 0.594624 -0.094814\r\nv 0.178517 0.660585 -0.060274\r\nv 0.101900 0.609279 0.050249\r\nv 0.197666 0.689920 -0.060274\r\nv 0.197666 0.733886 -0.053370\r\nv 0.197666 0.763196 -0.053370\r\nv 0.216825 0.748541 -0.025734\r\nv 0.226405 0.777851 -0.005012\r\nv 0.226405 0.777851 0.008796\r\nv 0.188096 0.711890 -0.080996\r\nv 0.188096 0.733886 -0.080996\r\nv 0.188096 0.711890 -0.060274\r\nv 0.197666 0.763196 -0.032648\r\nv 0.216825 0.733886 0.057153\r\nv 0.226405 0.770536 0.036432\r\nv 0.197666 0.755881 0.064057\r\nv 0.226405 0.741226 0.036432\r\nv 0.226405 0.748541 0.015710\r\nv 0.197666 0.711890 0.070971\r\nv 0.188096 0.711890 0.105501\r\nv 0.197666 0.689920 0.070971\r\nv 0.178517 0.689920 0.105501\r\nv 0.188096 0.741226 0.091693\r\nv 0.159357 0.660585 0.112415\r\nv 0.159357 0.594624 0.119319\r\nv 0.054011 0.616619 0.140041\r\nv 0.178517 0.689920 -0.087900\r\nv 0.168937 0.653270 -0.094814\r\nv 0.101900 0.154867 -0.163884\r\nv 0.101900 0.154867 -0.205327\r\nv 0.025272 0.118216 -0.163884\r\nv -0.013036 0.103561 -0.212231\r\nv -0.013036 0.096246 -0.170788\r\nv 0.121049 0.096246 -0.219145\r\nv 0.121049 0.096246 -0.170788\r\nv 0.006123 0.044940 -0.219145\r\nv 0.006123 0.037600 -0.170788\r\nv 0.044432 -0.043016 -0.226049\r\nv 0.044432 -0.050356 -0.177701\r\nv 0.073161 -0.123632 -0.232953\r\nv 0.082740 -0.123632 -0.191509\r\nv 0.121049 -0.094322 -0.232953\r\nv 0.130629 -0.101662 -0.184605\r\nv 0.111469 -0.013706 -0.226049\r\nv 0.111469 -0.013706 -0.177701\r\nv 0.101900 -0.021021 -0.177701\r\nv 0.082740 0.015605 -0.177701\r\nv 0.073161 0.000949 -0.177701\r\nv 0.054011 0.103561 -0.170788\r\nv 0.025272 0.088906 -0.170788\r\nv 0.197666 0.059595 -0.267493\r\nv 0.168937 0.125556 -0.260589\r\nv 0.216825 0.059595 -0.260589\r\nv 0.216825 0.088906 -0.253675\r\nv 0.216825 0.081591 -0.226049\r\nv 0.168937 0.118216 -0.239867\r\nv 0.235985 0.037600 -0.226049\r\nv 0.235985 0.037600 -0.239867\r\nv 0.226405 0.030285 -0.239867\r\nv 0.197666 0.044940 -0.232953\r\nv 0.197666 0.044940 -0.232953\r\nv 0.226405 0.030285 -0.226049\r\nv 0.283873 0.140212 0.305816\r\nv 0.293442 0.147552 0.298912\r\nv 0.226405 0.191517 0.291998\r\nv 0.283873 0.169522 0.278190\r\nv 0.283873 0.162207 0.250555\r\nv 0.226405 0.176862 0.264373\r\nv 0.303022 0.125556 0.222929\r\nv 0.303022 0.125556 0.236747\r\nv 0.303022 0.118216 0.243651\r\nv 0.293442 0.132897 0.250555\r\nv 0.283873 0.125556 0.250555\r\nv 0.303022 0.118216 0.222929\r\nvt 0.132813 0.562500\r\nvt 0.074219 0.558594\r\nvt 0.125000 0.660156\r\nvt 0.066406 0.664063\r\nvt 0.128906 0.441406\r\nvt 0.074219 0.441406\r\nvt 0.152344 0.570313\r\nvt 0.226563 0.570313\r\nvt 0.171875 0.453125\r\nvt 0.222656 0.460938\r\nvt 0.148438 0.652344\r\nvt 0.234375 0.644531\r\nvt 0.117188 0.714844\r\nvt 0.066406 0.718750\r\nvt 0.101563 0.847656\r\nvt 0.062500 0.847656\r\nvt 0.238281 0.695313\r\nvt 0.156250 0.703125\r\nvt 0.246094 0.843750\r\nvt 0.148438 0.843750\r\nvt 0.019531 0.562500\r\nvt 0.003906 0.566406\r\nvt 0.015625 0.656250\r\nvt 0.000000 0.652344\r\nvt 0.019531 0.441406\r\nvt 0.269531 0.457031\r\nvt 0.292969 0.566406\r\nvt 0.289063 0.652344\r\nvt 0.289063 0.441406\r\nvt 0.031250 0.847656\r\nvt 0.027344 0.714844\r\nvt 0.292969 0.839844\r\nvt 0.292969 0.703125\r\nvt 0.011719 0.839844\r\nvt 0.007813 0.703125\r\nvt 0.128906 0.558594\r\nvt 0.125000 0.652344\r\nvt 0.070313 0.554688\r\nvt 0.066406 0.660156\r\nvt 0.125000 0.441406\r\nvt 0.066406 0.437500\r\nvt 0.152344 0.566406\r\nvt 0.171875 0.449219\r\nvt 0.230469 0.566406\r\nvt 0.226563 0.457031\r\nvt 0.144531 0.648438\r\nvt 0.230469 0.640625\r\nvt 0.117188 0.707031\r\nvt 0.105469 0.839844\r\nvt 0.066406 0.710938\r\nvt 0.066406 0.843750\r\nvt 0.234375 0.691406\r\nvt 0.253906 0.835938\r\nvt 0.156250 0.699219\r\nvt 0.148438 0.835938\r\nvt 0.019531 0.554688\r\nvt 0.019531 0.652344\r\nvt 0.007813 0.558594\r\nvt 0.003906 0.648438\r\nvt 0.019531 0.445313\r\nvt 0.269531 0.453125\r\nvt 0.289063 0.562500\r\nvt 0.289063 0.644531\r\nvt 0.289063 0.441406\r\nvt 0.035156 0.839844\r\nvt 0.027344 0.707031\r\nvt 0.289063 0.839844\r\nvt 0.289063 0.699219\r\nvt 0.007813 0.839844\r\nvt 0.007813 0.703125\r\nvt 0.796875 0.328125\r\nvt 0.785156 0.328125\r\nvt 0.839844 0.328125\r\nvt 0.835938 0.328125\r\nvt 0.839844 0.273438\r\nvt 0.835938 0.273438\r\nvt 0.804688 0.273438\r\nvt 0.792969 0.273438\r\nvt 0.882813 0.328125\r\nvt 0.882813 0.328125\r\nvt 0.882813 0.273438\r\nvt 0.882813 0.273438\r\nvt 0.781250 0.328125\r\nvt 0.769531 0.328125\r\nvt 0.792969 0.273438\r\nvt 0.781250 0.273438\r\nvt 0.960938 0.273438\r\nvt 0.972656 0.273438\r\nvt 0.921875 0.273438\r\nvt 0.929688 0.273438\r\nvt 0.921875 0.328125\r\nvt 0.925781 0.328125\r\nvt 0.968750 0.328125\r\nvt 0.976563 0.328125\r\nvt 0.968750 0.273438\r\nvt 0.980469 0.273438\r\nvt 0.980469 0.328125\r\nvt 0.992188 0.328125\r\nvt 0.984375 0.398438\r\nvt 0.960938 0.398438\r\nvt 0.984375 0.378906\r\nvt 0.980469 0.464844\r\nvt 0.949219 0.507813\r\nvt 0.980469 0.484375\r\nvt 0.863281 0.687500\r\nvt 0.871094 0.773438\r\nvt 0.847656 0.683594\r\nvt 0.847656 0.773438\r\nvt 0.820313 0.683594\r\nvt 0.820313 0.769531\r\nvt 0.804688 0.683594\r\nvt 0.796875 0.769531\r\nvt 0.835938 0.234375\r\nvt 0.816406 0.226563\r\nvt 0.792969 0.367188\r\nvt 0.816406 0.113281\r\nvt 0.820313 0.183594\r\nvt 0.808594 0.117188\r\nvt 0.800781 0.070313\r\nvt 0.800781 0.082031\r\nvt 0.820313 0.109375\r\nvt 0.843750 0.191406\r\nvt 0.882813 0.375000\r\nvt 0.871094 0.378906\r\nvt 0.847656 0.394531\r\nvt 0.882813 0.402344\r\nvt 0.851563 0.417969\r\nvt 0.800781 0.398438\r\nvt 0.777344 0.378906\r\nvt 0.789063 0.039063\r\nvt 0.808594 0.062500\r\nvt 0.882813 0.230469\r\nvt 0.878906 0.410156\r\nvt 0.882813 0.410156\r\nvt 0.882813 0.039063\r\nvt 0.882813 0.058594\r\nvt 0.808594 0.035156\r\nvt 0.875000 0.535156\r\nvt 0.855469 0.523438\r\nvt 0.812500 0.507813\r\nvt 0.785156 0.484375\r\nvt 0.855469 0.007813\r\nvt 0.855469 0.003906\r\nvt 0.812500 0.015625\r\nvt 0.785156 0.027344\r\nvt 0.882813 0.003906\r\nvt 0.882813 0.191406\r\nvt 0.882813 0.117188\r\nvt 0.898438 0.687500\r\nvt 0.914063 0.683594\r\nvt 0.890625 0.773438\r\nvt 0.914063 0.773438\r\nvt 0.941406 0.683594\r\nvt 0.941406 0.769531\r\nvt 0.957031 0.683594\r\nvt 0.964844 0.769531\r\nvt 0.925781 0.234375\r\nvt 0.945313 0.226563\r\nvt 0.968750 0.367188\r\nvt 0.953125 0.117188\r\nvt 0.941406 0.183594\r\nvt 0.945313 0.113281\r\nvt 0.960938 0.070313\r\nvt 0.960938 0.082031\r\nvt 0.917969 0.191406\r\nvt 0.941406 0.109375\r\nvt 0.890625 0.378906\r\nvt 0.910156 0.417969\r\nvt 0.914063 0.394531\r\nvt 0.953125 0.062500\r\nvt 0.972656 0.039063\r\nvt 0.882813 0.410156\r\nvt 0.953125 0.035156\r\nvt 0.886719 0.535156\r\nvt 0.906250 0.523438\r\nvt 0.906250 0.007813\r\nvt 0.949219 0.015625\r\nvt 0.906250 0.003906\r\nvt 0.976563 0.027344\r\nvt 0.953125 0.945313\r\nvt 0.953125 0.785156\r\nvt 0.933594 0.929688\r\nvt 0.929688 0.785156\r\nvt 0.992188 0.785156\r\nvt 0.992188 0.785156\r\nvt 0.984375 0.941406\r\nvt 0.984375 0.941406\r\nvt 0.914063 0.996094\r\nvt 0.953125 0.996094\r\nvt 0.914063 0.996094\r\nvt 0.953125 0.996094\r\nvt 0.890625 0.996094\r\nvt 0.890625 0.996094\r\nvt 0.871094 0.996094\r\nvt 0.871094 0.996094\r\nvt 0.992188 0.996094\r\nvt 0.992188 0.996094\r\nvt 0.914063 0.960938\r\nvt 0.878906 0.972656\r\nvt 0.597656 0.855469\r\nvt 0.656250 0.855469\r\nvt 0.589844 0.785156\r\nvt 0.664063 0.785156\r\nvt 0.726563 0.960938\r\nvt 0.718750 0.785156\r\nvt 0.683594 0.960938\r\nvt 0.687500 0.785156\r\nvt 0.671875 0.996094\r\nvt 0.730469 0.996094\r\nvt 0.257813 0.894531\r\nvt 0.261719 0.855469\r\nvt 0.328125 0.894531\r\nvt 0.324219 0.855469\r\nvt 0.800781 0.929688\r\nvt 0.800781 0.789063\r\nvt 0.824219 0.945313\r\nvt 0.820313 0.789063\r\nvt 0.859375 0.789063\r\nvt 0.851563 0.941406\r\nvt 0.781250 0.960938\r\nvt 0.781250 0.996094\r\nvt 0.746094 0.972656\r\nvt 0.757813 0.996094\r\nvt 0.738281 0.996094\r\nvt 0.824219 0.996094\r\nvt 0.859375 0.996094\r\nvt 0.585938 0.871094\r\nvt 0.582031 0.996094\r\nvt 0.660156 0.871094\r\nvt 0.664063 0.996094\r\nvt 0.953125 0.945313\r\nvt 0.933594 0.929688\r\nvt 0.953125 0.785156\r\nvt 0.929688 0.785156\r\nvt 0.992188 0.785156\r\nvt 0.984375 0.941406\r\nvt 0.992188 0.785156\r\nvt 0.984375 0.941406\r\nvt 0.914063 0.996094\r\nvt 0.914063 0.996094\r\nvt 0.953125 0.996094\r\nvt 0.953125 0.996094\r\nvt 0.890625 0.996094\r\nvt 0.890625 0.996094\r\nvt 0.871094 0.996094\r\nvt 0.871094 0.996094\r\nvt 0.992188 0.996094\r\nvt 0.992188 0.996094\r\nvt 0.914063 0.960938\r\nvt 0.878906 0.972656\r\nvt 0.656250 0.855469\r\nvt 0.664063 0.785156\r\nvt 0.593750 0.855469\r\nvt 0.585938 0.785156\r\nvt 0.679688 0.960938\r\nvt 0.718750 0.960938\r\nvt 0.683594 0.785156\r\nvt 0.714844 0.785156\r\nvt 0.730469 0.996094\r\nvt 0.671875 0.996094\r\nvt 0.328125 0.894531\r\nvt 0.257813 0.894531\r\nvt 0.324219 0.855469\r\nvt 0.261719 0.855469\r\nvt 0.800781 0.929688\r\nvt 0.824219 0.945313\r\nvt 0.800781 0.789063\r\nvt 0.820313 0.789063\r\nvt 0.859375 0.789063\r\nvt 0.851563 0.941406\r\nvt 0.781250 0.960938\r\nvt 0.746094 0.972656\r\nvt 0.781250 0.996094\r\nvt 0.757813 0.996094\r\nvt 0.738281 0.996094\r\nvt 0.824219 0.996094\r\nvt 0.859375 0.996094\r\nvt 0.660156 0.867188\r\nvt 0.585938 0.867188\r\nvt 0.664063 0.996094\r\nvt 0.582031 0.996094\r\nvt 0.621094 0.003906\r\nvt 0.621094 0.035156\r\nvt 0.632813 0.011719\r\nvt 0.671875 0.003906\r\nvt 0.660156 0.011719\r\nvt 0.671875 0.035156\r\nvt 0.621094 0.031250\r\nvt 0.671875 0.031250\r\nvt 0.714844 0.515625\r\nvt 0.707031 0.695313\r\nvt 0.750000 0.496094\r\nvt 0.570313 0.691406\r\nvt 0.585938 0.695313\r\nvt 0.546875 0.496094\r\nvt 0.710938 0.402344\r\nvt 0.750000 0.410156\r\nvt 0.578125 0.515625\r\nvt 0.539063 0.390625\r\nvt 0.648438 0.039063\r\nvt 0.648438 0.015625\r\nvt 0.570313 0.093750\r\nvt 0.589844 0.074219\r\nvt 0.558594 0.058594\r\nvt 0.710938 0.054688\r\nvt 0.703125 0.074219\r\nvt 0.734375 0.058594\r\nvt 0.593750 0.167969\r\nvt 0.648438 0.164063\r\nvt 0.597656 0.156250\r\nvt 0.699219 0.167969\r\nvt 0.695313 0.156250\r\nvt 0.609375 0.343750\r\nvt 0.605469 0.343750\r\nvt 0.593750 0.343750\r\nvt 0.585938 0.343750\r\nvt 0.597656 0.289063\r\nvt 0.589844 0.289063\r\nvt 0.644531 0.289063\r\nvt 0.644531 0.289063\r\nvt 0.648438 0.343750\r\nvt 0.648438 0.343750\r\nvt 0.699219 0.343750\r\nvt 0.707031 0.343750\r\nvt 0.683594 0.343750\r\nvt 0.687500 0.343750\r\nvt 0.699219 0.289063\r\nvt 0.703125 0.289063\r\nvt 0.558594 0.289063\r\nvt 0.546875 0.289063\r\nvt 0.546875 0.343750\r\nvt 0.535156 0.343750\r\nvt 0.746094 0.343750\r\nvt 0.761719 0.343750\r\nvt 0.734375 0.289063\r\nvt 0.750000 0.289063\r\nvt 0.582031 0.402344\r\nvt 0.628906 0.402344\r\nvt 0.648438 0.398438\r\nvt 0.664063 0.402344\r\nvt 0.750000 0.472656\r\nvt 0.750000 0.390625\r\nvt 0.585938 0.777344\r\nvt 0.562500 0.773438\r\nvt 0.613281 0.777344\r\nvt 0.613281 0.695313\r\nvt 0.636719 0.777344\r\nvt 0.628906 0.691406\r\nvt 0.601563 0.250000\r\nvt 0.582031 0.242188\r\nvt 0.585938 0.199219\r\nvt 0.574219 0.144531\r\nvt 0.593750 0.089844\r\nvt 0.570313 0.109375\r\nvt 0.593750 0.125000\r\nvt 0.574219 0.148438\r\nvt 0.574219 0.136719\r\nvt 0.605469 0.058594\r\nvt 0.585938 0.054688\r\nvt 0.628906 0.414063\r\nvt 0.640625 0.414063\r\nvt 0.605469 0.199219\r\nvt 0.648438 0.203125\r\nvt 0.648438 0.417969\r\nvt 0.621094 0.535156\r\nvt 0.640625 0.542969\r\nvt 0.578125 0.039063\r\nvt 0.644531 0.425781\r\nvt 0.566406 0.101563\r\nvt 0.550781 0.046875\r\nvt 0.648438 0.125000\r\nvt 0.648438 0.097656\r\nvt 0.648438 0.058594\r\nvt 0.648438 0.082031\r\nvt 0.648438 0.421875\r\nvt 0.648438 0.250000\r\nvt 0.648438 0.152344\r\nvt 0.707031 0.777344\r\nvt 0.730469 0.773438\r\nvt 0.722656 0.691406\r\nvt 0.683594 0.777344\r\nvt 0.679688 0.695313\r\nvt 0.656250 0.777344\r\nvt 0.664063 0.691406\r\nvt 0.710938 0.242188\r\nvt 0.691406 0.250000\r\nvt 0.718750 0.144531\r\nvt 0.707031 0.199219\r\nvt 0.699219 0.125000\r\nvt 0.722656 0.109375\r\nvt 0.699219 0.089844\r\nvt 0.718750 0.148438\r\nvt 0.722656 0.093750\r\nvt 0.722656 0.136719\r\nvt 0.687500 0.058594\r\nvt 0.667969 0.414063\r\nvt 0.656250 0.414063\r\nvt 0.687500 0.199219\r\nvt 0.671875 0.535156\r\nvt 0.656250 0.542969\r\nvt 0.718750 0.039063\r\nvt 0.648438 0.425781\r\nvt 0.726563 0.101563\r\nvt 0.742188 0.046875\r\nvt 0.394531 0.769531\r\nvt 0.355469 0.710938\r\nvt 0.324219 0.710938\r\nvt 0.320313 0.664063\r\nvt 0.332031 0.777344\r\nvt 0.332031 0.710938\r\nvt 0.324219 0.660156\r\nvt 0.355469 0.710938\r\nvt 0.335938 0.773438\r\nvt 0.394531 0.769531\r\nvt 0.441406 0.757813\r\nvt 0.441406 0.757813\r\nvt 0.441406 0.757813\r\nvt 0.441406 0.757813\r\nvt 0.367188 0.500000\r\nvt 0.359375 0.437500\r\nvt 0.453125 0.468750\r\nvt 0.500000 0.558594\r\nvt 0.453125 0.640625\r\nvt 0.527344 0.652344\r\nvt 0.453125 0.640625\r\nvt 0.480469 0.707031\r\nvt 0.527344 0.652344\r\nvt 0.453125 0.562500\r\nvt 0.367188 0.554688\r\nvt 0.371094 0.601563\r\nvt 0.453125 0.562500\r\nvt 0.367188 0.554688\r\nvt 0.378906 0.660156\r\nvt 0.371094 0.589844\r\nvt 0.339844 0.660156\r\nvt 0.328125 0.613281\r\nvt 0.320313 0.527344\r\nvt 0.320313 0.570313\r\nvt 0.500000 0.554688\r\nvt 0.335938 0.769531\r\nvt 0.308594 0.488281\r\nvt 0.378906 0.660156\r\nvt 0.320313 0.609375\r\nvt 0.335938 0.671875\r\nvt 0.367188 0.496094\r\nvt 0.320313 0.531250\r\nvt 0.453125 0.464844\r\nvt 0.320313 0.574219\r\nvt 0.335938 0.773438\r\nvt 0.316406 0.484375\r\nvt 0.480469 0.707031\r\nvt 0.359375 0.449219\r\nvt 0.359375 0.804688\r\nvt 0.378906 0.789063\r\nvt 0.359375 0.875000\r\nvt 0.445313 0.996094\r\nvt 0.394531 0.988281\r\nvt 0.417969 0.871094\r\nvt 0.433594 0.875000\r\nvt 0.394531 0.847656\r\nvt 0.406250 0.789063\r\nvt 0.414063 0.816406\r\nvt 0.335938 0.996094\r\nvt 0.394531 0.789063\r\nvt 0.429688 0.816406\r\nvt 0.355469 0.675781\r\nvt 0.421875 0.648438\r\nvt 0.421875 0.687500\r\nvt 0.308594 0.730469\r\nvt 0.421875 0.734375\r\nvt 0.312500 0.777344\r\nvt 0.421875 0.777344\r\nvt 0.488281 0.675781\r\nvt 0.527344 0.730469\r\nvt 0.523438 0.777344\r\nvt 0.355469 0.585938\r\nvt 0.421875 0.511719\r\nvt 0.339844 0.503906\r\nvt 0.421875 0.437500\r\nvt 0.492188 0.585938\r\nvt 0.488281 0.500000\r\nvt 0.125000 0.992188\r\nvt 0.117188 0.996094\r\nvt 0.050781 0.992188\r\nvt 0.066406 0.996094\r\nvt 0.246094 0.941406\r\nvt 0.136719 0.906250\r\nvt 0.054688 0.910156\r\nvt 0.070313 0.906250\r\nvt 0.132813 0.902344\r\nvt 0.015625 0.910156\r\nvt 0.007813 0.910156\r\nvt 0.003906 0.996094\r\nvt 0.011719 0.996094\r\nvt 0.246094 0.914063\r\nvt 0.238281 0.914063\r\nvt 0.246094 0.972656\r\nvt 0.324219 0.972656\r\nvt 0.273438 0.972656\r\nvt 0.273438 0.953125\r\nvt 0.324219 0.949219\r\nvt 0.261719 0.937500\r\nvt 0.257813 0.964844\r\nvt 0.261719 0.968750\r\nvt 0.300781 0.910156\r\nvt 0.273438 0.996094\r\nvt 0.320313 0.992188\r\nvt 0.281250 0.910156\r\nvt 0.316406 0.910156\r\nvt 0.128906 0.988281\r\nvt 0.054688 0.992188\r\nvt 0.121094 0.996094\r\nvt 0.066406 0.996094\r\nvt 0.140625 0.902344\r\nvt 0.250000 0.941406\r\nvt 0.058594 0.906250\r\nvt 0.074219 0.906250\r\nvt 0.136719 0.902344\r\nvt 0.019531 0.910156\r\nvt 0.011719 0.910156\r\nvt 0.000000 0.992188\r\nvt 0.007813 0.996094\r\nvt 0.250000 0.914063\r\nvt 0.242188 0.914063\r\nvt 0.250000 0.972656\r\nvt 0.304688 0.953125\r\nvt 0.308594 0.972656\r\nvt 0.257813 0.972656\r\nvt 0.308594 0.953125\r\nvt 0.257813 0.949219\r\nvt 0.316406 0.933594\r\nvt 0.320313 0.964844\r\nvt 0.316406 0.964844\r\nvt 0.281250 0.910156\r\nvt 0.304688 0.996094\r\nvt 0.261719 0.996094\r\nvt 0.296875 0.910156\r\nvt 0.261719 0.910156\r\nvt 0.300781 0.363281\r\nvt 0.304688 0.359375\r\nvt 0.343750 0.339844\r\nvt 0.238281 0.363281\r\nvt 0.195313 0.339844\r\nvt 0.234375 0.359375\r\nvt 0.234375 0.335938\r\nvt 0.171875 0.277344\r\nvt 0.367188 0.273438\r\nvt 0.304688 0.335938\r\nvt 0.187500 0.425781\r\nvt 0.187500 0.339844\r\nvt 0.136719 0.429688\r\nvt 0.136719 0.269531\r\nvt 0.347656 0.425781\r\nvt 0.402344 0.425781\r\nvt 0.347656 0.339844\r\nvt 0.351563 0.417969\r\nvt 0.523438 0.402344\r\nvt 0.324219 0.265625\r\nvt 0.218750 0.171875\r\nvt 0.171875 0.210938\r\nvt 0.214844 0.199219\r\nvt 0.214844 0.238281\r\nvt 0.199219 0.132813\r\nvt 0.246094 0.121094\r\nvt 0.242188 0.105469\r\nvt 0.238281 0.253906\r\nvt 0.257813 0.253906\r\nvt 0.250000 0.234375\r\nvt 0.242188 0.265625\r\nvt 0.253906 0.269531\r\nvt 0.261719 0.230469\r\nvt 0.218750 0.265625\r\nvt 0.269531 0.371094\r\nvt 0.269531 0.367188\r\nvt 0.253906 0.273438\r\nvt 0.269531 0.339844\r\nvt 0.269531 0.273438\r\nvt 0.269531 0.253906\r\nvt 0.269531 0.269531\r\nvt 0.253906 0.171875\r\nvt 0.257813 0.195313\r\nvt 0.269531 0.093750\r\nvt 0.269531 0.125000\r\nvt 0.261719 0.195313\r\nvt 0.269531 0.171875\r\nvt 0.269531 0.199219\r\nvt 0.191406 0.339844\r\nvt 0.187500 0.164063\r\nvt 0.269531 0.226563\r\nvt 0.324219 0.199219\r\nvt 0.375000 0.210938\r\nvt 0.324219 0.171875\r\nvt 0.324219 0.238281\r\nvt 0.300781 0.121094\r\nvt 0.355469 0.121094\r\nvt 0.320313 0.082031\r\nvt 0.289063 0.234375\r\nvt 0.281250 0.253906\r\nvt 0.300781 0.253906\r\nvt 0.296875 0.265625\r\nvt 0.285156 0.269531\r\nvt 0.277344 0.230469\r\nvt 0.285156 0.273438\r\nvt 0.285156 0.171875\r\nvt 0.285156 0.195313\r\nvt 0.277344 0.195313\r\nvt 0.347656 0.339844\r\nvt 0.367188 0.160156\r\nvt 0.468750 0.421875\r\nvt 0.390625 0.273438\r\nvt 0.187500 0.414063\r\nvt 0.394531 0.199219\r\nvt 0.378906 0.109375\r\nvt 0.386719 0.042969\r\nvt 0.324219 0.062500\r\nvt 0.300781 0.007813\r\nvt 0.273438 0.003906\r\nvt 0.445313 0.160156\r\nvt 0.433594 0.101563\r\nvt 0.398438 0.152344\r\nvt 0.335938 0.035156\r\nvt 0.167969 0.105469\r\nvt 0.210938 0.015625\r\nvt 0.152344 0.046875\r\nvt 0.218750 0.070313\r\nvt 0.253906 0.054688\r\nvt 0.148438 0.148438\r\nvt 0.078125 0.156250\r\nvt 0.136719 0.191406\r\nvt 0.074219 0.210938\r\nvt 0.105469 0.097656\r\nvt 0.058594 0.273438\r\nvt 0.042969 0.417969\r\nvt 0.003906 0.402344\r\nvt 0.457031 0.207031\r\nvt 0.460938 0.289063\r\nvt 0.460938 0.789063\r\nvt 0.460938 0.789063\r\nvt 0.531250 0.789063\r\nvt 0.578125 0.789063\r\nvt 0.578125 0.789063\r\nvt 0.457031 0.847656\r\nvt 0.457031 0.847656\r\nvt 0.578125 0.847656\r\nvt 0.578125 0.847656\r\nvt 0.578125 0.921875\r\nvt 0.578125 0.921875\r\nvt 0.578125 0.996094\r\nvt 0.578125 0.996094\r\nvt 0.527344 0.992188\r\nvt 0.527344 0.992188\r\nvt 0.507813 0.921875\r\nvt 0.511719 0.921875\r\nvt 0.527344 0.917969\r\nvt 0.515625 0.894531\r\nvt 0.539063 0.894531\r\nvt 0.515625 0.816406\r\nvt 0.539063 0.812500\r\nvt 0.070313 0.859375\r\nvt 0.250000 0.851563\r\nvt 0.074219 0.863281\r\nvt 0.125000 0.863281\r\nvt 0.125000 0.890625\r\nvt 0.242188 0.875000\r\nvt 0.015625 0.902344\r\nvt 0.011719 0.882813\r\nvt 0.003906 0.882813\r\nvt 0.062500 0.894531\r\nvt 0.058594 0.898438\r\nvt 0.007813 0.902344\r\nvt 0.070313 0.859375\r\nvt 0.070313 0.863281\r\nvt 0.250000 0.855469\r\nvt 0.125000 0.867188\r\nvt 0.125000 0.886719\r\nvt 0.242188 0.875000\r\nvt 0.015625 0.902344\r\nvt 0.011719 0.882813\r\nvt 0.003906 0.882813\r\nvt 0.058594 0.894531\r\nvt 0.058594 0.894531\r\nvt 0.007813 0.902344\r\nvn 0.1771 -0.3471 0.9209\r\nvn 0.2469 -0.3229 0.9137\r\nvn 0.1640 -0.4073 0.8984\r\nvn -0.0648 -0.2538 0.9651\r\nvn 0.4705 0.2485 -0.8467\r\nvn 0.5125 0.2179 -0.8306\r\nvn 0.6732 -0.1147 -0.7305\r\nvn 0.4575 0.1380 -0.8784\r\nvn 0.9950 -0.1001 0.0000\r\nvn 0.9954 -0.0358 -0.0887\r\nvn 0.9506 -0.3105 0.0000\r\nvn 0.9379 -0.3063 -0.1627\r\nvn 0.3183 -0.1203 0.9403\r\nvn 0.1357 -0.2661 0.9544\r\nvn 0.3169 -0.1182 0.9411\r\nvn 0.0715 -0.0935 0.9930\r\nvn 0.5360 0.4002 -0.7433\r\nvn 0.3978 0.3961 -0.8276\r\nvn 0.5463 0.3571 -0.7576\r\nvn 0.6687 0.4793 -0.5685\r\nvn 0.9126 0.3339 0.2361\r\nvn 0.9150 0.3803 0.1347\r\nvn 0.9421 0.2737 0.1935\r\nvn 0.9499 0.2759 0.1466\r\nvn -0.9635 0.0140 -0.2672\r\nvn -1.0000 0.0000 0.0000\r\nvn -0.3911 -0.3067 0.8677\r\nvn -0.3786 -0.3023 0.8748\r\nvn -0.2419 -0.2311 0.9424\r\nvn -0.3863 -0.2657 0.8833\r\nvn 0.0000 0.3280 -0.9447\r\nvn -0.2201 0.3064 -0.9261\r\nvn -0.2526 0.1502 -0.9558\r\nvn -0.2165 0.1699 -0.9614\r\nvn -0.8465 0.3507 -0.4006\r\nvn -0.9306 0.2595 -0.2581\r\nvn -0.3044 -0.4399 0.8448\r\nvn -0.4404 -0.4579 0.7722\r\nvn -0.3864 -0.2313 0.8929\r\nvn -0.4823 -0.3635 0.7970\r\nvn -0.3391 0.0001 -0.9408\r\nvn -0.2252 0.1905 -0.9555\r\nvn -0.5307 0.2041 -0.8226\r\nvn -0.8711 -0.4629 -0.1640\r\nvn -0.8648 -0.3931 -0.3125\r\nvn -0.7954 -0.4158 -0.4410\r\nvn -0.8379 -0.4273 -0.3397\r\nvn 0.2578 -0.4276 -0.8664\r\nvn 0.3799 -0.3723 -0.8468\r\nvn 0.2349 -0.5053 -0.8304\r\nvn -0.0795 -0.3113 -0.9470\r\nvn 0.3572 0.3232 0.8763\r\nvn 0.5127 0.2178 0.8305\r\nvn 0.4264 0.0327 0.9039\r\nvn 0.3494 0.1082 0.9307\r\nvn 0.9960 -0.0868 0.0231\r\nvn 0.9965 -0.0395 0.0733\r\nvn 0.9383 -0.3343 0.0888\r\nvn 0.8239 -0.2935 0.4848\r\nvn 0.2758 -0.1441 -0.9504\r\nvn 0.2594 -0.1696 -0.9508\r\nvn 0.2185 -0.1142 -0.9691\r\nvn 0.1381 -0.1353 -0.9811\r\nvn 0.3201 0.5363 0.7810\r\nvn 0.0186 0.3966 0.9178\r\nvn 0.2343 0.6959 0.6789\r\nvn 0.1990 0.6316 0.7493\r\nvn 0.7314 0.6740 -0.1039\r\nvn 0.7678 0.5660 -0.3003\r\nvn 0.7185 0.6860 -0.1148\r\nvn 0.7340 0.6715 0.1015\r\nvn -0.9910 -0.1295 0.0344\r\nvn -0.9626 -0.0811 0.2585\r\nvn -0.2617 -0.3885 -0.8835\r\nvn -0.3101 -0.4053 -0.8600\r\nvn -0.2638 -0.2855 -0.9214\r\nvn -0.2580 -0.2842 -0.9234\r\nvn -0.4062 0.3490 0.8445\r\nvn -0.3670 0.3580 0.8586\r\nvn -0.4065 0.1848 0.8947\r\nvn -0.3745 0.2051 0.9043\r\nvn -0.8130 0.4047 0.4185\r\nvn -0.9883 0.1476 -0.0392\r\nvn -0.1133 -0.5549 -0.8242\r\nvn -0.0924 -0.5441 -0.8339\r\nvn -0.2699 -0.4772 -0.8364\r\nvn -0.2103 -0.3205 -0.9236\r\nvn -0.2001 0.1307 0.9710\r\nvn -0.2925 -0.0273 0.9559\r\nvn -0.3754 0.2065 0.9036\r\nvn -0.5783 0.1511 0.8017\r\nvn -0.6472 -0.6224 0.4402\r\nvn -0.6358 -0.6960 0.3336\r\nvn -0.4167 -0.2722 0.8673\r\nvn -0.8285 -0.5413 0.1436\r\nvn -0.1367 -0.9825 -0.1264\r\nvn -0.1004 -0.9851 -0.1394\r\nvn 0.2474 0.9689 -0.0003\r\nvn 0.1800 0.9802 0.0832\r\nvn -0.0000 -1.0000 0.0000\r\nvn 0.5978 0.7802 -0.1842\r\nvn 0.2475 0.9689 0.0000\r\nvn -0.1876 -0.9823 0.0000\r\nvn -0.0947 -0.9917 -0.0875\r\nvn 0.3084 0.9405 0.1426\r\nvn 0.2926 0.9562 0.0000\r\nvn 0.1333 0.9892 -0.0616\r\nvn 0.2597 0.9653 -0.0275\r\nvn -0.1632 -0.9603 0.2264\r\nvn -0.0595 -0.9409 0.3333\r\nvn 0.2194 0.9737 0.0609\r\nvn 0.6082 0.7938 0.0000\r\nvn 0.3573 0.9340 0.0000\r\nvn 0.2588 0.9585 -0.1197\r\nvn 0.2341 -0.9164 0.3246\r\nvn 0.2740 -0.9534 0.1266\r\nvn -0.8026 0.1368 -0.5806\r\nvn -0.5670 -0.2469 -0.7859\r\nvn -0.6617 -0.2471 -0.7079\r\nvn -0.2753 -0.3601 -0.8913\r\nvn 0.2378 0.0173 -0.9712\r\nvn 0.4755 0.0345 -0.8790\r\nvn -0.5771 0.5962 -0.5581\r\nvn -0.5660 0.5979 -0.5675\r\nvn -0.8161 0.4789 0.3234\r\nvn -0.8204 0.4765 0.3160\r\nvn -0.7975 0.3839 0.4655\r\nvn -0.3285 0.6010 0.7286\r\nvn -0.8193 0.3211 0.4750\r\nvn -0.7013 0.4208 0.5755\r\nvn -0.4872 -0.0910 0.8685\r\nvn -0.3127 -0.0866 0.9459\r\nvn -0.3741 -0.2541 0.8919\r\nvn 0.1329 -0.0217 0.9909\r\nvn -0.6212 -0.0775 0.7798\r\nvn -0.8221 0.0000 -0.5694\r\nvn -0.7347 -0.0009 0.6784\r\nvn -0.7849 -0.6153 0.0727\r\nvn -0.8889 0.0712 0.4526\r\nvn -0.8164 0.2461 0.5224\r\nvn -0.7132 0.6657 0.2198\r\nvn -0.8725 0.4886 0.0000\r\nvn -0.7751 -0.5329 0.3394\r\nvn 0.0000 -0.7713 -0.6365\r\nvn 0.0700 -0.6840 -0.7261\r\nvn -0.9056 0.3940 0.1570\r\nvn -0.7137 0.6989 0.0464\r\nvn -0.5820 -0.1014 0.8069\r\nvn 0.1354 -0.3439 -0.9292\r\nvn 0.2780 -0.3949 -0.8756\r\nvn -0.9270 0.0751 0.3674\r\nvn -0.9295 0.0718 0.3618\r\nvn -0.8297 -0.1871 -0.5259\r\nvn -0.8035 -0.2100 -0.5570\r\nvn -0.1322 0.4748 0.8701\r\nvn -0.9938 -0.0173 -0.1101\r\nvn -0.8442 0.3677 0.3900\r\nvn 0.1278 0.9797 0.1547\r\nvn -0.2898 0.9047 0.3124\r\nvn -0.5559 0.3114 0.7707\r\nvn -0.4710 0.1787 0.8638\r\nvn -0.6529 -0.1553 0.7413\r\nvn -0.8846 0.0594 0.4626\r\nvn -0.9314 0.0797 0.3552\r\nvn 0.0000 -0.3938 -0.9192\r\nvn 0.3108 -0.2290 -0.9225\r\nvn -0.9334 -0.1463 -0.3278\r\nvn -0.7669 -0.0818 -0.6365\r\nvn -0.9256 0.1613 0.3424\r\nvn -0.6698 0.6559 0.3481\r\nvn -0.2200 0.8617 0.4573\r\nvn -0.2420 0.8517 0.4648\r\nvn -0.9310 0.3649 0.0000\r\nvn -0.2140 0.2020 0.9557\r\nvn -0.2864 0.3143 0.9051\r\nvn -0.7977 -0.0629 0.5997\r\nvn -0.7082 -0.3632 0.6055\r\nvn -0.8974 -0.3828 0.2193\r\nvn -0.9505 0.3106 0.0000\r\nvn -0.7086 0.6948 0.1228\r\nvn -0.9814 0.1901 0.0252\r\nvn -0.9869 0.1612 0.0000\r\nvn -0.8037 -0.2101 -0.5567\r\nvn -0.9843 0.0909 -0.1515\r\nvn -0.9732 0.2130 0.0865\r\nvn -0.9827 0.1834 0.0244\r\nvn -0.9617 0.2736 0.0182\r\nvn -0.9394 0.3349 0.0729\r\nvn -0.4986 0.0671 0.8642\r\nvn -0.2990 0.1117 0.9477\r\nvn -0.8563 0.5165 0.0000\r\nvn -0.8368 0.5392 0.0952\r\nvn -0.4172 0.3040 -0.8565\r\nvn -0.3796 0.3162 -0.8694\r\nvn -0.7975 0.3839 -0.4654\r\nvn -0.3286 0.6010 -0.7285\r\nvn -0.6998 0.2099 -0.6828\r\nvn -0.7691 0.1358 -0.6245\r\nvn -0.2797 0.0192 -0.9599\r\nvn -0.3126 -0.0867 -0.9459\r\nvn -0.4003 -0.3363 -0.8525\r\nvn 0.0828 -0.1300 -0.9880\r\nvn -0.6044 -0.0394 -0.7957\r\nvn -0.8219 -0.0000 0.5696\r\nvn -0.3183 -0.9012 0.2942\r\nvn -0.1987 -0.8659 -0.4591\r\nvn -0.2836 -0.3267 -0.9016\r\nvn -0.8442 0.3677 -0.3900\r\nvn -0.7164 0.6687 -0.1987\r\nvn -0.8324 -0.5135 -0.2085\r\nvn -0.0607 -0.8258 0.5607\r\nvn -0.2282 -0.9587 -0.1695\r\nvn -0.9069 0.3945 -0.1480\r\nvn -0.7138 0.6990 -0.0437\r\nvn -0.4973 -0.0975 -0.8621\r\nvn -0.4666 -0.3577 0.8089\r\nvn -0.2581 -0.3461 0.9020\r\nvn -0.3670 -0.1813 -0.9124\r\nvn -0.4268 -0.2382 -0.8724\r\nvn -0.8480 -0.5300 0.0000\r\nvn -0.8625 -0.4977 -0.0917\r\nvn -0.1320 0.4747 -0.8702\r\nvn -0.5982 -0.4901 -0.6340\r\nvn -0.3441 0.0466 -0.9378\r\nvn 0.1499 0.9780 -0.1452\r\nvn -0.3376 0.8824 -0.3276\r\nvn -0.4890 0.2054 -0.8477\r\nvn -0.4711 0.1789 -0.8637\r\nvn -0.6760 -0.2208 -0.7030\r\nvn -0.5222 -0.3943 0.7562\r\nvn -0.3334 -0.1525 0.9304\r\nvn -0.8881 -0.4062 -0.2153\r\nvn -0.9367 -0.3498 -0.0186\r\nvn -0.9531 0.2076 -0.2202\r\nvn -0.6883 0.6740 -0.2683\r\nvn 0.0000 0.9291 -0.3698\r\nvn -0.3121 0.8158 -0.4869\r\nvn -0.2118 0.2077 -0.9550\r\nvn -0.2860 0.2492 -0.9253\r\nvn -0.7700 -0.1590 -0.6180\r\nvn -0.8370 -0.3093 -0.4513\r\nvn -0.8111 -0.2939 -0.5057\r\nvn -0.7092 0.6954 -0.1157\r\nvn -0.9823 0.1861 -0.0198\r\nvn -0.8036 -0.2100 0.5569\r\nvn -0.9862 0.0937 0.1366\r\nvn -0.9724 0.2194 -0.0797\r\nvn -0.9828 0.1834 -0.0195\r\nvn -0.9616 0.2739 -0.0171\r\nvn -0.9398 0.3350 -0.0678\r\nvn 0.2096 -0.0587 -0.9760\r\nvn 0.5580 -0.1133 -0.8220\r\nvn -0.9759 0.2151 0.0380\r\nvn -0.9771 0.2128 0.0000\r\nvn -0.4297 0.1731 -0.8862\r\nvn -0.2117 0.0593 -0.9755\r\nvn -0.0764 -0.9971 -0.0000\r\nvn 0.0706 0.1847 -0.9803\r\nvn 0.0000 0.1852 -0.9827\r\nvn -0.0460 0.1501 -0.9876\r\nvn 0.2771 0.0258 -0.9605\r\nvn -0.2009 0.1228 -0.9719\r\nvn -0.1839 0.1312 -0.9742\r\nvn 0.0510 0.1333 -0.9898\r\nvn 0.8725 0.4887 0.0000\r\nvn 0.9433 -0.3281 -0.0498\r\nvn 0.9049 -0.3311 -0.2676\r\nvn 0.7539 0.6569 0.0000\r\nvn 0.8038 0.5882 0.0893\r\nvn -0.9506 0.3105 0.0000\r\nvn 0.4057 -0.2253 0.8858\r\nvn 0.4733 -0.2582 0.8422\r\nvn -0.3491 -0.0298 0.9366\r\nvn -0.1337 -0.0385 0.9903\r\nvn 0.1610 0.4209 0.8927\r\nvn -0.0353 0.1851 0.9821\r\nvn 0.0000 0.1336 0.9910\r\nvn 0.2771 0.0260 0.9605\r\nvn -0.2001 0.1308 0.9710\r\nvn -0.1061 0.0347 0.9937\r\nvn 0.0510 0.1333 0.9898\r\nvn 0.0000 0.1852 0.9827\r\nvn 0.2759 0.9612 0.0000\r\nvn -0.4349 0.0080 0.9004\r\nvn -0.1666 -0.0761 0.9831\r\nvn -0.7230 0.3936 -0.5678\r\nvn -0.6421 0.3867 -0.6620\r\nvn -0.8621 0.4037 0.3063\r\nvn -0.7710 0.2264 0.5953\r\nvn -0.1024 -0.9886 0.1104\r\nvn -0.0897 -0.9898 0.1105\r\nvn -0.0637 -0.9970 0.0441\r\nvn -0.2274 -0.9737 -0.0142\r\nvn -0.0952 -0.9933 0.0660\r\nvn -0.0239 -0.9963 0.0827\r\nvn -0.1336 -0.9891 0.0616\r\nvn -0.0982 -0.9932 0.0619\r\nvn -0.4721 0.5444 0.6934\r\nvn -0.7789 0.2349 0.5816\r\nvn -0.6155 0.3655 0.6982\r\nvn -0.2765 0.0773 0.9579\r\nvn -0.8175 0.2571 0.5153\r\nvn -0.7244 0.3078 0.6169\r\nvn -0.6107 0.2462 0.7526\r\nvn -0.6288 0.2939 0.7199\r\nvn 0.6314 0.4126 0.6566\r\nvn 0.7415 0.2234 0.6326\r\nvn 0.6717 -0.4705 0.5722\r\nvn 0.5544 -0.4549 0.6970\r\nvn 0.5262 0.7204 0.4519\r\nvn 0.8839 0.2888 0.3678\r\nvn -0.6064 0.2694 -0.7482\r\nvn -0.6635 0.3294 -0.6717\r\nvn 0.8472 -0.4271 -0.3160\r\nvn 0.8478 -0.4290 -0.3116\r\nvn 0.3924 -0.1181 -0.9122\r\nvn 0.5864 -0.1637 -0.7933\r\nvn 0.7010 0.5723 -0.4254\r\nvn 0.6932 0.0000 -0.7208\r\nvn 0.7738 -0.3370 -0.5364\r\nvn 0.5341 0.0070 -0.8454\r\nvn 0.6145 -0.1022 -0.7823\r\nvn 0.6889 -0.0156 -0.7247\r\nvn 0.6799 0.0000 -0.7333\r\nvn 0.2985 0.9360 0.1865\r\nvn 0.3034 0.9512 0.0558\r\nvn 0.8574 -0.4201 0.2971\r\nvn 0.8823 -0.3843 -0.2718\r\nvn 0.1731 -0.2260 0.9586\r\nvn 0.0000 0.0000 -1.0000\r\nvn 0.5639 0.2661 -0.7818\r\nvn -0.3428 0.1828 0.9215\r\nvn 0.6324 0.3673 -0.6821\r\nvn -0.1426 0.2167 0.9658\r\nvn 0.8442 -0.3677 0.3901\r\nvn 0.5719 -0.4483 0.6870\r\nvn 0.8821 -0.3728 -0.2878\r\nvn 0.6419 -0.5031 -0.5786\r\nvn 0.9640 -0.1260 0.2340\r\nvn 0.9686 0.2450 -0.0434\r\nvn 0.1514 -0.9877 0.0382\r\nvn 0.1561 -0.9872 -0.0333\r\nvn -0.3579 -0.9338 0.0000\r\nvn -0.5143 -0.8389 -0.1782\r\nvn 0.6396 0.7651 -0.0739\r\nvn 0.0000 1.0000 0.0000\r\nvn 0.0000 -0.9913 0.1317\r\nvn -0.8689 -0.1134 -0.4819\r\nvn -0.4202 -0.8770 -0.2330\r\nvn -0.3736 -0.9261 -0.0518\r\nvn 0.0000 0.9961 0.0882\r\nvn 0.5094 0.8546 -0.1009\r\nvn 0.1879 0.9822 0.0000\r\nvn 0.4449 0.8490 0.2849\r\nvn -0.4338 -0.8493 -0.3010\r\nvn -0.2929 -0.9562 0.0000\r\nvn -0.0716 -0.9969 -0.0331\r\nvn -0.6275 -0.7103 0.3190\r\nvn 0.3471 0.9063 -0.2410\r\nvn 0.2473 0.9690 0.0000\r\nvn 0.5039 0.7808 -0.3693\r\nvn 0.5239 0.7059 0.4767\r\nvn 1.0000 0.0000 0.0000\r\nvn 0.9236 -0.2111 0.3199\r\nvn 0.9078 -0.0000 0.4195\r\nvn 0.9806 -0.0772 0.1802\r\nvn 0.9310 -0.3650 -0.0000\r\nvn 0.9570 -0.1876 0.2212\r\nvn 0.9889 -0.1436 -0.0382\r\nvn 0.7012 0.3877 0.5983\r\nvn 0.6931 0.2338 0.6819\r\nvn 0.9636 -0.0000 -0.2673\r\nvn 0.9859 -0.0543 -0.1583\r\nvn 0.9616 -0.1975 -0.1905\r\nvn 0.5529 0.2432 -0.7970\r\nvn 0.2674 0.7866 -0.5565\r\nvn 0.5594 0.2926 -0.7755\r\nvn -0.1239 -0.0074 0.9923\r\nvn -0.3220 0.2420 0.9153\r\nvn 0.6270 -0.2812 0.7265\r\nvn 0.4858 -0.2867 0.8257\r\nvn 0.8602 -0.4031 -0.3124\r\nvn 0.8344 -0.2852 -0.4716\r\nvn 0.5418 0.3268 0.7743\r\nvn 0.6097 -0.0851 0.7880\r\nvn 0.6006 -0.0953 0.7938\r\nvn 0.2248 0.4291 0.8748\r\nvn 0.2539 -0.6634 0.7039\r\nvn 0.7183 0.1341 0.6827\r\nvn -0.2538 -0.6634 0.7039\r\nvn 0.5208 -0.2725 0.8090\r\nvn 0.6170 -0.2170 0.7565\r\nvn 0.0000 -0.0000 1.0000\r\nvn -0.0961 -0.1884 0.9774\r\nvn 0.9647 0.2424 -0.1031\r\nvn 0.4946 0.8502 -0.1804\r\nvn 0.8879 -0.1054 -0.4477\r\nvn 0.9559 -0.2542 0.1471\r\nvn 0.8932 -0.3892 0.2252\r\nvn 0.4650 -0.6072 0.6443\r\nvn 0.6002 0.5112 0.6152\r\nvn -0.1390 0.2271 0.9639\r\nvn 0.8524 -0.2709 -0.4472\r\nvn 0.8343 -0.2857 -0.4715\r\nvn 0.8095 -0.0241 0.5867\r\nvn 0.6121 0.1297 0.7800\r\nvn 0.6440 0.7213 0.2549\r\nvn 0.6150 0.7385 0.2764\r\nvn 0.5980 0.2084 0.7739\r\nvn 0.3184 0.0594 0.9461\r\nvn 0.3913 -0.1704 0.9044\r\nvn 0.2094 -0.3342 0.9190\r\nvn 0.2177 0.3843 0.8972\r\nvn 0.7547 -0.3204 -0.5725\r\nvn 0.8520 -0.2062 -0.4813\r\nvn 0.7390 0.2653 0.6193\r\nvn 0.8652 0.1028 0.4908\r\nvn 0.4099 0.7567 0.5093\r\nvn 0.6158 0.7427 0.2631\r\nvn 0.6167 0.3226 0.7181\r\nvn 0.1252 -0.8168 0.5632\r\nvn 0.9830 0.1836 0.0000\r\nvn 0.9769 0.2127 -0.0205\r\nvn 0.2165 -0.1698 0.9614\r\nvn 0.9791 0.1919 0.0680\r\nvn 0.9847 0.1051 0.1394\r\nvn 0.9636 0.0000 0.2673\r\nvn 0.9388 0.3409 0.0482\r\nvn 0.9607 0.2511 0.1185\r\nvn 0.6830 0.7271 -0.0700\r\nvn 0.7135 0.6994 -0.0412\r\nvn 0.2049 0.9367 0.2839\r\nvn 0.6880 -0.6742 -0.2684\r\nvn 0.9078 -0.3954 0.1399\r\nvn 0.9079 -0.3953 0.1397\r\nvn 0.9757 -0.1594 0.1503\r\nvn 0.8852 -0.4631 -0.0446\r\nvn 0.8370 -0.5472 0.0000\r\nvn 0.4528 -0.8875 -0.0854\r\nvn 0.5660 -0.0831 -0.8202\r\nvn 0.3511 0.1323 -0.9269\r\nvn 0.9306 -0.2573 -0.2604\r\nvn 0.9771 -0.2129 0.0000\r\nvn 0.4948 -0.1526 0.8555\r\nvn 0.5081 -0.1640 0.8456\r\nvn 0.4838 0.3497 -0.8023\r\nvn 0.5690 -0.0826 -0.8182\r\nvn 0.7806 0.2877 -0.5550\r\nvn 0.4976 0.3799 -0.7797\r\nvn 0.1922 -0.5907 -0.7837\r\nvn 0.7183 0.1341 -0.6827\r\nvn -0.4182 -0.5468 -0.7254\r\nvn 0.4393 -0.3830 -0.8126\r\nvn 0.7011 -0.2222 -0.6776\r\nvn -0.0449 -0.0880 -0.9951\r\nvn -0.0961 -0.1884 -0.9774\r\nvn 0.9634 0.2623 0.0557\r\nvn -0.4100 0.8691 0.2768\r\nvn -0.2916 0.7201 0.6296\r\nvn 0.9538 -0.2699 -0.1321\r\nvn 0.8997 -0.3921 -0.1920\r\nvn 0.6123 -0.6668 -0.4248\r\nvn 0.8885 -0.3870 -0.2465\r\nvn 0.6001 0.5114 -0.6151\r\nvn 0.3493 0.1063 -0.9310\r\nvn 0.3780 -0.0501 0.9244\r\nvn 0.5135 0.0774 0.8546\r\nvn 0.9391 0.3427 -0.0235\r\nvn 0.9420 0.3357 0.0000\r\nvn 0.5601 0.7319 -0.3882\r\nvn 0.7147 0.6466 -0.2667\r\nvn 0.5950 0.1074 -0.7965\r\nvn 0.3184 0.0596 -0.9461\r\nvn 0.3584 -0.0586 -0.9317\r\nvn 0.1666 -0.4498 -0.8775\r\nvn 0.2410 -0.0539 0.9690\r\nvn 0.3050 0.0427 0.9514\r\nvn 0.9159 0.3826 0.1218\r\nvn 0.8964 0.4429 0.0186\r\nvn -0.0287 -0.1124 -0.9932\r\nvn 0.4273 0.7176 -0.5500\r\nvn 0.7088 0.6946 -0.1230\r\nvn 0.6167 0.3226 -0.7181\r\nvn 0.2022 -0.8297 -0.5203\r\nvn 0.9770 0.2128 0.0173\r\nvn -0.0892 -0.1166 -0.9892\r\nvn -0.1424 -0.0745 -0.9870\r\nvn 0.9622 -0.1019 -0.2524\r\nvn 0.9889 0.0732 -0.1294\r\nvn 0.9809 0.0000 -0.1944\r\nvn 0.9378 0.3448 -0.0406\r\nvn 0.9620 0.2514 -0.1068\r\nvn 0.6845 0.7266 0.0592\r\nvn 0.7137 0.6996 0.0353\r\nvn 0.2866 -0.9372 -0.1988\r\nvn 0.5831 -0.8000 -0.1414\r\nvn -0.5526 0.8153 0.1730\r\nvn 0.9151 -0.3865 -0.1154\r\nvn 0.9096 -0.3960 -0.1260\r\nvn 0.9794 -0.1600 -0.1235\r\nvn 0.8885 -0.4572 0.0403\r\nvn 0.4530 -0.8880 0.0784\r\nvn 0.0693 0.2712 -0.9600\r\nvn 0.0542 0.2121 0.9757\r\nvn -0.1515 -0.9885 0.0000\r\nvn 0.2174 0.6386 0.7382\r\nvn -0.4242 0.2376 -0.8738\r\nvn -0.5076 0.3980 0.7641\r\nvn 0.2655 0.0536 0.9626\r\nvn 0.0533 0.2781 -0.9591\r\nvn 0.2019 -0.0000 0.9794\r\nvn 0.2877 0.0377 0.9570\r\nvn 0.4028 -0.0476 0.9140\r\nvn 0.1520 0.4466 0.8817\r\nvn 0.3102 0.4049 0.8602\r\nvn -0.6761 0.2208 0.7029\r\nvn 0.3539 0.0974 0.9302\r\nvn 0.2118 0.1580 0.9645\r\nvn 0.2453 -0.1070 0.9635\r\nvn 0.6627 0.5420 0.5169\r\nvn -0.5104 0.3893 0.7668\r\nvn -0.5930 0.4648 0.6575\r\nvn 0.1949 0.0095 0.9808\r\nvn 0.7133 0.3727 0.5935\r\nvn 0.3520 0.0836 0.9322\r\nvn 0.2379 0.1194 0.9639\r\nvn 0.2451 0.0842 0.9658\r\nvn 0.2708 0.1360 0.9530\r\nvn 0.1323 0.0929 -0.9868\r\nvn 0.3038 0.0993 -0.9475\r\nvn 0.2714 0.0396 -0.9616\r\nvn 0.0105 0.2582 -0.9660\r\nvn 0.2772 0.0000 -0.9608\r\nvn -0.1975 0.3986 -0.8956\r\nvn 0.2646 -0.0432 -0.9634\r\nvn 0.3175 0.1555 -0.9354\r\nvn 0.6032 0.4338 -0.6693\r\nvn -0.3714 0.4447 -0.8150\r\nvn 0.1610 0.6482 -0.7442\r\nvn -0.2237 0.2922 -0.9298\r\nvn 0.2424 -0.0558 -0.9686\r\nvn 0.6034 0.4334 -0.6694\r\nvn 0.3036 0.0992 -0.9476\r\nvn 0.1486 0.1454 -0.9781\r\nvn 0.0993 0.3566 -0.9289\r\nvn 0.0324 0.1689 -0.9851\r\nvn 0.1187 0.0931 -0.9886\r\nvn 0.5931 0.2681 0.7592\r\nvn 0.1939 0.8728 -0.4480\r\nvn 0.4525 0.7877 -0.4181\r\nvn 0.5465 0.3569 -0.7576\r\nvn -0.0378 0.9937 0.1057\r\nvn 0.2431 0.8737 0.4213\r\nvn 0.5598 0.7851 0.2652\r\nvn 0.5950 0.7770 0.2057\r\nvn 0.2490 0.8951 -0.3700\r\nvn 0.7145 0.6997 0.0000\r\nvn 0.6080 0.7939 0.0000\r\nvn -0.7128 -0.6986 0.0616\r\nvn -0.7830 -0.6194 0.0571\r\nvn -0.7858 -0.6161 0.0544\r\nvn -0.7869 -0.6170 0.0000\r\nvn -0.6904 -0.7216 0.0503\r\nvn -0.7130 -0.6988 -0.0569\r\nvn -0.7859 -0.6163 -0.0502\r\nvn -0.7786 -0.6249 -0.0568\r\nvn -0.6913 -0.7226 0.0000\r\nvn -0.7856 -0.6160 -0.0573\r\nvn -0.8025 0.4945 0.3339\r\nvn -0.7464 0.5321 0.3998\r\nvn -0.6445 0.7181 0.2626\r\nvn -0.4127 0.7549 0.5097\r\nvn -0.8403 0.4707 -0.2689\r\nvn -0.7553 0.5384 -0.3736\r\nvn -0.5783 0.7554 -0.3082\r\nvn -0.4288 0.7844 -0.4482\r\nvn 0.8607 0.4686 0.1988\r\nvn 0.8373 0.5468 0.0003\r\nvn 0.2982 0.1613 -0.9408\r\nvn 0.3767 -0.1969 -0.9052\r\nvn 0.2250 -0.1176 -0.9672\r\nvn -0.8373 -0.5468 -0.0000\r\nvn -0.8196 -0.4093 -0.4010\r\nvn -0.9675 -0.2529 -0.0000\r\nvn 0.2703 -0.4194 -0.8667\r\nvn 0.2704 -0.4195 -0.8665\r\nvn 0.9210 0.3441 0.1824\r\nvn 0.6863 0.2564 0.6806\r\nvn -0.4359 0.1520 -0.8870\r\nvn 0.2139 -0.9769 -0.0000\r\nvn 0.0615 -0.6413 0.7648\r\nvn -0.9636 -0.2519 -0.0892\r\nvn -0.9481 -0.0954 -0.3034\r\nvn 0.4168 0.2723 -0.8672\r\nvn -0.1763 -0.1152 0.9776\r\nvn -0.2876 -0.0376 0.9570\r\nvn -0.1922 -0.0837 0.9778\r\nvn -0.1401 0.1835 0.9730\r\nvn -0.2631 -0.1453 0.9538\r\nvn -0.2662 0.0927 0.9595\r\nvn -0.2831 0.1056 0.9533\r\nvn -0.0400 0.0783 0.9961\r\nvn -0.3361 -0.1318 0.9326\r\nvn -0.2952 -0.0256 0.9551\r\nvn 0.7429 0.6470 -0.1716\r\nvn 0.6079 0.7940 0.0000\r\nvn 0.0492 0.2954 0.9541\r\nvn 0.3023 -0.0359 0.9525\r\nvn 0.3850 -0.0458 0.9218\r\nvn -0.6620 -0.4325 0.6121\r\nvn -0.6753 -0.6789 0.2881\r\nvn -0.6077 -0.7942 -0.0000\r\nvn -0.5298 -0.6924 0.4898\r\nvn 0.5431 -0.2184 0.8108\r\nvn 0.3579 -0.1799 0.9162\r\nvn 0.6077 0.7942 0.0000\r\nvn 0.4646 0.6072 -0.6446\r\nvn -0.2311 0.1509 0.9612\r\nvn 0.6076 -0.7942 0.0000\r\nvn 0.4364 -0.6656 -0.6055\r\nvn -0.7808 -0.5101 0.3608\r\nvn -0.7639 -0.5941 0.2521\r\nvn 0.0620 0.3238 0.9441\r\nvn 0.1994 -0.5213 -0.8297\r\nvn -0.6087 0.7934 -0.0020\r\nvn -0.4170 -0.2724 -0.8672\r\nvn -0.9228 -0.3013 -0.2400\r\nvn -0.9448 0.0000 -0.3276\r\nvn -0.2882 -0.3295 -0.8991\r\nvn -0.2567 -0.0240 -0.9662\r\nvn -0.2057 -0.0385 -0.9779\r\nvn -0.1422 0.0929 -0.9855\r\nvn -0.2692 -0.3265 -0.9061\r\nvn -0.2528 -0.0825 -0.9640\r\nvn -0.0003 -0.8835 -0.4684\r\nvn -0.0578 -0.8275 0.5585\r\nvn 0.3774 -0.4927 -0.7841\r\nvn 0.9637 -0.2519 -0.0889\r\nvn 0.9135 -0.3184 -0.2532\r\nvn 0.9589 -0.2507 0.1327\r\nvn 0.9637 -0.2519 0.0889\r\nvn -0.2467 -0.9674 0.0569\r\nvn 0.6995 -0.3046 -0.6464\r\nvn 0.4651 -0.6070 0.6443\r\nvn 0.9078 -0.0000 0.4193\r\nvn 0.8333 -0.2723 0.4810\r\nvn 0.8263 -0.2400 0.5095\r\nvn 0.7953 -0.4153 0.4416\r\nvn 0.3100 0.4046 0.8603\r\nvn 0.3390 0.0000 0.9408\r\nvn 0.7344 0.0000 0.6787\r\nvn -0.1483 -0.9674 0.2056\r\nvn 0.9506 -0.3104 0.0000\r\nvn 0.7343 0.0000 0.6789\r\nvn 0.2976 -0.7795 0.5512\r\nvn 0.9675 -0.2528 0.0000\r\nvn 0.0000 -0.6864 0.7272\r\nvn -0.0695 -0.8145 0.5760\r\nvn 0.0601 -0.5496 0.8333\r\nvn 0.9170 -0.3990 0.0000\r\nvn 0.2537 -0.6644 0.7030\r\nvn 0.6082 -0.7938 0.0000\r\nvn 0.0000 0.4267 0.9044\r\nvn 0.3394 0.0000 0.9406\r\nvn 0.7395 -0.3980 0.5429\r\nvn 0.9346 -0.2442 0.2587\r\nvn 0.9079 0.0000 0.4193\r\nvn 0.0008 -0.8834 -0.4687\r\nvn 0.9449 0.0000 -0.3272\r\nvn 0.7891 -0.4685 -0.3973\r\nvn 0.8364 -0.2918 -0.4640\r\nvn 0.7215 -0.5650 -0.4002\r\nvn 0.3390 0.0000 -0.9408\r\nvn 0.7344 0.0000 -0.6787\r\nvn -0.1247 -0.9770 -0.1731\r\nvn 0.7961 -0.1387 -0.5890\r\nvn 0.3196 -0.8371 -0.4440\r\nvn 0.0000 -0.6864 -0.7272\r\nvn -0.0697 -0.8145 -0.5760\r\nvn 0.0983 -0.4502 -0.8875\r\nvn 0.0000 0.4262 -0.9046\r\nvn 0.9650 -0.1801 -0.1908\r\nvn 0.9661 -0.2526 -0.0535\r\nvn 0.9505 -0.3107 0.0000\r\nvn 0.9636 -0.2520 0.0891\r\nvn -0.2338 -0.9168 -0.3236\r\nvn 0.8374 -0.5466 0.0000\r\nvn 0.9379 -0.3065 0.1623\r\nvn 0.8218 0.0000 -0.5697\r\nvn 0.5465 0.3570 -0.7576\r\nvn 0.5896 0.2752 0.7594\r\nvn 0.9637 0.0000 0.2671\r\nvn 0.8171 -0.3563 0.4532\r\nvn 0.7241 0.4733 0.5017\r\nvn 0.8000 -0.5575 0.2217\r\nvn 0.7673 0.2731 0.5802\r\nvn 0.8138 -0.4429 0.3762\r\nvn 0.9068 0.0439 0.4192\r\nvn 0.7595 -0.4958 0.4212\r\nvn 0.9077 -0.0000 0.4197\r\nvn -0.3250 -0.9408 -0.0964\r\nvn -0.1743 -0.9736 0.1473\r\nvn 0.9668 -0.2528 0.0382\r\nvn 0.8043 -0.5250 -0.2782\r\nvn 0.8250 -0.4614 -0.3263\r\nvn 0.6788 -0.7097 -0.1885\r\nvn 0.6076 -0.7943 0.0000\r\nvn 0.8597 -0.4817 -0.1701\r\nvn 0.9729 -0.0531 -0.2249\r\nvn 0.9168 0.3994 0.0000\r\nvn 0.8090 -0.1765 -0.5607\r\nvn 0.9449 -0.0000 -0.3273\r\nvn 0.9030 -0.2947 -0.3128\r\nvn 0.9531 -0.2075 -0.2204\r\nvn 0.9598 -0.1568 -0.2330\r\nvn 0.7242 -0.4728 -0.5020\r\nvn 0.6076 0.7943 0.0000\r\nvn -0.4170 -0.8571 0.3025\r\nvn -0.1483 -0.9675 -0.2049\r\nvn 0.5850 0.0002 0.8111\r\nvn 0.7245 -0.4729 0.5015\r\nvn 0.8442 0.3677 -0.3900\r\nvn 0.8490 0.1584 -0.5041\r\nvn 0.9212 -0.3435 -0.1825\r\nvn 0.7124 -0.6198 -0.3292\r\nvn 0.8606 -0.4687 -0.1989\r\nvn -0.4315 0.9021 0.0000\r\nvn -0.4096 0.9110 0.0484\r\nvn -0.5120 0.8459 0.1493\r\nvn 0.9506 0.3105 0.0000\r\nvn -0.9511 -0.3054 -0.0464\r\nvn -0.9491 -0.3101 -0.0547\r\nvn -0.9169 -0.3946 -0.0599\r\nvn -0.9148 -0.3441 0.2114\r\nvn -0.8894 -0.4520 -0.0686\r\nvn 0.5084 -0.8307 -0.2269\r\nvn 0.4267 -0.8990 -0.0986\r\nvn 0.9930 0.1180 0.0000\r\nvn 0.9623 0.2220 -0.1570\r\nvn 0.9962 -0.0868 -0.0000\r\nvn -0.0487 0.0795 -0.9956\r\nvn -0.0323 0.0739 -0.9967\r\nvn 0.0064 0.1192 -0.9928\r\nvn -0.0896 0.2007 -0.9755\r\nvn -0.0288 0.0658 -0.9974\r\nvn -0.0291 0.0652 -0.9975\r\nvn 0.4440 0.2323 -0.8654\r\nvn -0.1019 -0.0999 0.9898\r\nvn -0.0892 -0.1165 0.9892\r\nvn 0.0749 -0.1467 0.9863\r\nvn 0.1123 -0.2347 0.9656\r\nvn -0.0132 -0.1212 0.9925\r\nvn -0.1186 -0.1162 0.9861\r\nvn -0.0068 -0.0622 0.9980\r\nvn 0.0853 -0.0318 0.9958\r\nvn 0.0786 -0.0440 0.9959\r\nvn -0.0439 -0.2291 0.9724\r\nvn -0.2702 -0.2208 0.9372\r\nvn -0.1280 -0.1675 0.9775\r\nvn 0.8610 0.4504 0.2362\r\nvn 0.2335 -0.0002 0.9724\r\nvn -0.0654 0.0427 -0.9969\r\nvn 0.1727 0.2258 -0.9587\r\nvn 0.3292 0.2390 -0.9135\r\nvn 0.3015 0.2189 -0.9280\r\nvn 0.5540 0.8048 0.2131\r\nvn 0.5584 0.7819 0.2770\r\nvn 0.9117 0.3971 0.1051\r\nvn 0.9368 0.3498 0.0000\r\nvn 0.9420 0.0770 -0.3266\r\nvn 0.1546 -0.2025 -0.9670\r\nvn 0.1394 -0.9116 -0.3868\r\nvn 0.6069 -0.7948 -0.0000\r\nvn -0.2529 -0.7712 -0.5843\r\nvn -0.9505 -0.3107 0.0000\r\nvn 0.2330 0.4876 0.8414\r\nvn 0.4097 0.7140 0.5678\r\nvn 0.1819 0.9506 -0.2516\r\nvn 0.2200 0.8618 -0.4572\r\nvn 0.8288 0.5409 -0.1432\r\nvn 0.9168 0.3993 0.0000\r\nvn 0.9281 0.3705 -0.0358\r\nvn 0.9531 0.2073 0.2204\r\nvn 0.5918 -0.7714 0.2338\r\nvn 0.6796 -0.7091 0.1881\r\nvn -0.5332 -0.8096 0.2454\r\nvn -0.9506 -0.3104 0.0000\r\nusemtl cbabe\r\ns off\r\nf 1/1/1 2/2/1 3/3/1\r\nf 2/2/2 4/4/2 3/3/2\r\nf 1/1/3 5/5/3 2/2/3\r\nf 5/5/4 6/6/4 2/2/4\r\nf 7/7/5 8/8/5 9/9/5\r\nf 8/8/6 10/10/6 9/9/6\r\nf 11/11/7 12/12/7 7/7/7\r\nf 12/12/8 8/8/8 7/7/8\r\nf 1/1/9 7/7/9 5/5/9\r\nf 7/7/10 9/9/10 5/5/10\r\nf 1/1/11 3/3/11 7/7/11\r\nf 3/3/12 11/11/12 7/7/12\r\nf 13/13/13 14/14/13 15/15/13\r\nf 14/14/14 16/16/14 15/15/14\r\nf 13/13/15 3/3/15 14/14/15\r\nf 3/3/16 4/4/16 14/14/16\r\nf 17/17/17 18/18/17 19/19/17\r\nf 18/18/18 20/20/18 19/19/18\r\nf 17/17/19 12/12/19 18/18/19\r\nf 12/12/20 11/11/20 18/18/20\r\nf 18/18/21 13/13/21 20/20/21\r\nf 13/13/22 15/15/22 20/20/22\r\nf 18/18/23 11/11/23 13/13/23\r\nf 11/11/24 3/3/24 13/13/24\r\nf 21/21/25 22/22/25 23/23/25\r\nf 22/22/26 24/24/26 23/23/26\r\nf 2/2/27 21/21/27 4/4/27\r\nf 21/21/28 23/23/28 4/4/28\r\nf 6/6/29 25/25/29 2/2/29\r\nf 25/25/30 21/21/30 2/2/30\r\nf 10/10/31 8/8/31 26/26/31\r\nf 8/8/32 27/27/32 26/26/32\r\nf 8/8/33 12/12/33 27/27/33\r\nf 12/12/34 28/28/34 27/27/34\r\nf 26/26/35 27/27/35 29/29/35\r\nf 22/22/36 21/21/36 25/25/36\r\nf 16/16/37 14/14/37 30/30/37\r\nf 14/14/38 31/31/38 30/30/38\r\nf 4/4/39 23/23/39 14/14/39\r\nf 23/23/40 31/31/40 14/14/40\r\nf 32/32/41 33/33/41 19/19/41\r\nf 33/33/41 17/17/41 19/19/41\r\nf 28/28/42 12/12/42 33/33/42\r\nf 12/12/43 17/17/43 33/33/43\r\nf 30/30/44 31/31/44 34/34/44\r\nf 31/31/45 35/35/45 34/34/45\r\nf 23/23/46 24/24/46 31/31/46\r\nf 24/24/47 35/35/47 31/31/47\r\nf 36/36/48 37/37/48 38/38/48\r\nf 37/37/49 39/39/49 38/38/49\r\nf 36/36/50 38/38/50 40/40/50\r\nf 38/38/51 41/41/51 40/40/51\r\nf 42/42/52 43/43/52 44/44/52\r\nf 43/43/53 45/45/53 44/44/53\r\nf 46/46/54 42/42/54 47/47/54\r\nf 42/42/55 44/44/55 47/47/55\r\nf 36/36/56 40/40/56 42/42/56\r\nf 40/40/57 43/43/57 42/42/57\r\nf 36/36/58 42/42/58 37/37/58\r\nf 42/42/59 46/46/59 37/37/59\r\nf 48/48/60 49/49/60 50/50/60\r\nf 49/49/61 51/51/61 50/50/61\r\nf 48/48/62 50/50/62 37/37/62\r\nf 50/50/63 39/39/63 37/37/63\r\nf 52/52/64 53/53/64 54/54/64\r\nf 53/53/65 55/55/65 54/54/65\r\nf 52/52/66 54/54/66 47/47/66\r\nf 54/54/67 46/46/67 47/47/67\r\nf 54/54/68 55/55/68 48/48/68\r\nf 55/55/69 49/49/69 48/48/69\r\nf 54/54/70 48/48/70 46/46/70\r\nf 48/48/71 37/37/71 46/46/71\r\nf 56/56/72 57/57/72 58/58/72\r\nf 57/57/73 59/59/73 58/58/73\r\nf 38/38/74 39/39/74 56/56/74\r\nf 39/39/75 57/57/75 56/56/75\r\nf 41/41/76 38/38/76 60/60/76\r\nf 38/38/77 56/56/77 60/60/77\r\nf 45/45/78 61/61/78 44/44/78\r\nf 61/61/79 62/62/79 44/44/79\r\nf 44/44/80 62/62/80 47/47/80\r\nf 62/62/81 63/63/81 47/47/81\r\nf 61/61/82 64/64/82 62/62/82\r\nf 60/60/83 56/56/83 58/58/83\r\nf 51/51/84 65/65/84 50/50/84\r\nf 65/65/85 66/66/85 50/50/85\r\nf 39/39/86 50/50/86 57/57/86\r\nf 50/50/87 66/66/87 57/57/87\r\nf 67/67/88 53/53/88 68/68/88\r\nf 53/53/89 52/52/89 68/68/89\r\nf 63/63/90 68/68/90 47/47/90\r\nf 68/68/91 52/52/91 47/47/91\r\nf 65/65/92 69/69/92 66/66/92\r\nf 69/69/93 70/70/93 66/66/93\r\nf 57/57/94 66/66/94 59/59/94\r\nf 66/66/95 70/70/95 59/59/95\r\nf 71/71/96 72/72/96 73/73/96\r\nf 72/72/97 74/74/97 73/73/97\r\nf 75/75/98 76/76/98 77/77/98\r\nf 76/76/99 78/78/99 77/77/99\r\nf 73/73/100 74/74/100 79/79/100\r\nf 74/74/100 80/80/100 79/79/100\r\nf 81/81/101 82/82/101 75/75/101\r\nf 82/82/102 76/76/102 75/75/102\r\nf 83/83/103 84/84/103 71/71/103\r\nf 84/84/104 72/72/104 71/71/104\r\nf 77/77/105 78/78/105 85/85/105\r\nf 78/78/106 86/86/106 85/85/106\r\nf 87/87/107 88/88/107 89/89/107\r\nf 88/88/108 90/90/108 89/89/108\r\nf 91/91/109 92/92/109 93/93/109\r\nf 92/92/110 94/94/110 93/93/110\r\nf 89/89/111 90/90/111 81/81/111\r\nf 90/90/112 82/82/112 81/81/112\r\nf 79/79/100 80/80/100 91/91/100\r\nf 80/80/100 92/92/100 91/91/100\r\nf 95/95/113 96/96/113 87/87/113\r\nf 96/96/114 88/88/114 87/87/114\r\nf 93/93/115 94/94/115 97/97/115\r\nf 94/94/116 98/98/116 97/97/116\r\nf 99/99/117 100/100/117 101/101/117\r\nf 102/102/118 103/103/118 99/99/118\r\nf 103/103/119 100/100/119 99/99/119\r\nf 104/104/120 103/103/120 102/102/120\r\nf 105/105/121 106/106/121 107/107/121\r\nf 106/106/122 108/108/122 107/107/122\r\nf 107/107/123 108/108/123 109/109/123\r\nf 108/108/124 110/110/124 109/109/124\r\nf 111/111/125 109/109/125 112/112/125\r\nf 109/109/126 110/110/126 112/112/126\r\nf 77/77/127 113/113/127 75/75/127\r\nf 77/77/128 114/114/128 113/113/128\r\nf 74/74/129 72/72/129 76/76/129\r\nf 72/72/130 78/78/130 76/76/130\r\nf 71/71/131 115/115/131 83/83/131\r\nf 116/116/132 117/117/132 118/118/132\r\nf 116/116/133 118/118/133 119/119/133\r\nf 118/118/134 120/120/134 119/119/134\r\nf 116/116/135 121/121/135 122/122/135\r\nf 123/123/136 124/124/136 79/79/136\r\nf 125/125/137 126/126/137 127/127/137\r\nf 128/128/138 125/125/138 127/127/138\r\nf 129/129/139 115/115/139 128/128/139\r\nf 119/119/140 130/130/140 131/131/140\r\nf 81/81/141 75/75/141 132/132/141\r\nf 75/75/142 113/113/142 132/132/142\r\nf 126/126/143 125/125/143 124/124/143\r\nf 127/127/144 126/126/144 133/133/144\r\nf 126/126/145 134/134/145 133/133/145\r\nf 135/135/146 136/136/146 137/137/146\r\nf 136/136/147 131/131/147 137/137/147\r\nf 122/122/148 117/117/148 116/116/148\r\nf 105/105/149 107/107/149 138/138/149\r\nf 107/107/150 139/139/150 138/138/150\r\nf 109/109/151 111/111/151 140/140/151\r\nf 111/111/152 141/141/152 140/140/152\r\nf 107/107/153 109/109/153 139/139/153\r\nf 109/109/154 140/140/154 139/139/154\r\nf 77/77/155 85/85/155 114/114/155\r\nf 115/115/156 125/125/156 128/128/156\r\nf 83/83/157 115/115/157 129/129/157\r\nf 142/142/158 143/143/158 144/144/158\r\nf 143/143/159 137/137/159 144/144/159\r\nf 122/122/160 113/113/160 117/117/160\r\nf 113/113/161 114/114/161 117/117/161\r\nf 116/116/162 119/119/162 121/121/162\r\nf 128/128/163 140/140/163 129/129/163\r\nf 140/140/164 141/141/164 129/129/164\r\nf 133/133/165 138/138/165 127/127/165\r\nf 138/138/166 139/139/166 127/127/166\r\nf 127/127/167 139/139/167 128/128/167\r\nf 139/139/168 140/140/168 128/128/168\r\nf 119/119/169 131/131/169 121/121/169\r\nf 137/137/170 131/131/170 130/130/170\r\nf 130/130/171 145/145/171 137/137/171\r\nf 145/145/172 144/144/172 137/137/172\r\nf 80/80/173 74/74/173 82/82/173\r\nf 74/74/173 76/76/173 82/82/173\r\nf 78/78/174 72/72/174 86/86/174\r\nf 72/72/175 84/84/175 86/86/175\r\nf 71/71/176 73/73/176 115/115/176\r\nf 125/125/177 73/73/177 124/124/177\r\nf 125/125/178 115/115/178 73/73/178\r\nf 143/143/179 146/146/179 137/137/179\r\nf 146/146/180 135/135/180 137/137/180\r\nf 122/122/181 147/147/181 113/113/181\r\nf 147/147/182 132/132/182 113/113/182\r\nf 123/123/183 126/126/183 124/124/183\r\nf 73/73/184 79/79/184 124/124/184\r\nf 121/121/185 148/148/185 122/122/185\r\nf 148/148/186 147/147/186 122/122/186\r\nf 131/131/187 136/136/187 121/121/187\r\nf 136/136/188 148/148/188 121/121/188\r\nf 149/149/189 150/150/189 151/151/189\r\nf 150/150/190 152/152/190 151/151/190\r\nf 150/150/191 153/153/191 152/152/191\r\nf 153/153/192 154/154/192 152/152/192\r\nf 155/155/193 156/156/193 153/153/193\r\nf 156/156/194 154/154/194 153/153/194\r\nf 89/89/195 157/157/195 87/87/195\r\nf 157/157/196 158/158/196 87/87/196\r\nf 92/92/197 90/90/197 94/94/197\r\nf 90/90/198 88/88/198 94/94/198\r\nf 97/97/199 159/159/199 93/93/199\r\nf 160/160/200 161/161/200 162/162/200\r\nf 163/163/201 160/160/201 162/162/201\r\nf 163/163/202 164/164/202 160/160/202\r\nf 165/165/203 166/166/203 162/162/203\r\nf 79/79/204 167/167/204 123/123/204\r\nf 168/168/205 126/126/205 169/169/205\r\nf 168/168/206 169/169/206 100/100/206\r\nf 100/100/207 159/159/207 101/101/207\r\nf 170/170/208 171/171/208 163/163/208\r\nf 81/81/209 132/132/209 89/89/209\r\nf 132/132/142 157/157/142 89/89/142\r\nf 167/167/210 169/169/210 126/126/210\r\nf 168/168/211 172/172/211 126/126/211\r\nf 172/172/212 134/134/212 126/126/212\r\nf 135/135/213 173/173/213 136/136/213\r\nf 173/173/214 170/170/214 136/136/214\r\nf 162/162/215 161/161/215 165/165/215\r\nf 149/149/216 174/174/216 150/150/216\r\nf 174/174/217 175/175/217 150/150/217\r\nf 153/153/218 103/103/218 155/155/218\r\nf 103/103/219 104/104/219 155/155/219\r\nf 150/150/220 175/175/220 153/153/220\r\nf 175/175/221 103/103/221 153/153/221\r\nf 158/158/222 95/95/222 87/87/222\r\nf 100/100/223 169/169/223 159/159/223\r\nf 101/101/224 159/159/224 97/97/224\r\nf 176/176/225 177/177/225 178/178/225\r\nf 177/177/226 173/173/226 178/178/226\r\nf 165/165/227 161/161/227 157/157/227\r\nf 161/161/228 158/158/228 157/157/228\r\nf 166/166/229 163/163/229 162/162/229\r\nf 172/172/230 168/168/230 174/174/230\r\nf 168/168/231 175/175/231 174/174/231\r\nf 168/168/232 100/100/232 175/175/232\r\nf 100/100/233 103/103/233 175/175/233\r\nf 166/166/234 170/170/234 163/163/234\r\nf 171/171/235 170/170/235 173/173/235\r\nf 171/171/236 173/173/236 179/179/236\r\nf 173/173/237 177/177/237 179/179/237\r\nf 80/80/173 82/82/173 92/92/173\r\nf 82/82/173 90/90/173 92/92/173\r\nf 88/88/238 96/96/238 94/94/238\r\nf 96/96/239 98/98/239 94/94/239\r\nf 159/159/240 91/91/240 93/93/240\r\nf 167/167/241 91/91/241 169/169/241\r\nf 91/91/242 159/159/242 169/169/242\r\nf 178/178/179 173/173/179 146/146/179\r\nf 173/173/243 135/135/243 146/146/243\r\nf 165/165/244 157/157/244 147/147/244\r\nf 157/157/182 132/132/182 147/147/182\r\nf 167/167/245 126/126/245 123/123/245\r\nf 91/91/246 167/167/246 79/79/246\r\nf 166/166/247 165/165/247 148/148/247\r\nf 165/165/248 147/147/248 148/148/248\r\nf 170/170/249 166/166/249 136/136/249\r\nf 166/166/250 148/148/250 136/136/250\r\nf 180/180/251 181/181/251 182/182/251\r\nf 181/181/252 183/183/252 182/182/252\r\nf 184/184/253 185/185/253 186/186/253\r\nf 185/185/254 187/187/254 186/186/254\r\nf 185/185/255 181/181/255 187/187/255\r\nf 181/181/256 180/180/256 187/187/256\r\nf 188/188/100 189/189/100 190/190/100\r\nf 189/189/100 191/191/100 190/190/100\r\nf 192/192/100 188/188/100 193/193/100\r\nf 188/188/100 190/190/100 193/193/100\r\nf 194/194/100 192/192/100 195/195/100\r\nf 192/192/100 193/193/100 195/195/100\r\nf 189/189/257 196/196/257 191/191/257\r\nf 196/196/257 197/197/257 191/191/257\r\nf 180/180/258 182/182/258 198/198/258\r\nf 190/190/259 198/198/259 193/193/259\r\nf 198/198/260 199/199/260 193/193/260\r\nf 195/195/261 193/193/261 199/199/261\r\nf 197/197/262 187/187/262 191/191/262\r\nf 187/187/263 180/180/263 191/191/263\r\nf 190/190/259 191/191/259 198/198/259\r\nf 191/191/264 180/180/264 198/198/264\r\nf 200/200/265 201/201/265 202/202/265\r\nf 201/201/265 203/203/265 202/202/265\r\nf 204/204/266 205/205/266 206/206/266\r\nf 205/205/267 207/207/267 206/206/267\r\nf 208/208/268 209/209/268 206/206/268\r\nf 209/209/269 204/204/269 206/206/269\r\nf 210/210/270 211/211/270 212/212/270\r\nf 211/211/270 213/213/270 212/212/270\r\nf 214/214/271 215/215/271 216/216/271\r\nf 215/215/272 217/217/272 216/216/272\r\nf 217/217/273 218/218/273 216/216/273\r\nf 218/218/274 219/219/274 216/216/274\r\nf 220/220/275 214/214/275 216/216/275\r\nf 220/220/276 221/221/276 222/222/276\r\nf 221/221/277 223/223/277 222/222/277\r\nf 224/224/278 222/222/278 223/223/278\r\nf 225/225/279 216/216/279 226/226/279\r\nf 216/216/280 219/219/280 226/226/280\r\nf 216/216/281 225/225/281 220/220/281\r\nf 225/225/282 221/221/282 220/220/282\r\nf 227/227/283 228/228/283 229/229/283\r\nf 228/228/283 230/230/283 229/229/283\r\nf 231/231/284 232/232/284 233/233/284\r\nf 232/232/285 234/234/285 233/233/285\r\nf 235/235/286 236/236/286 237/237/286\r\nf 236/236/287 238/238/287 237/237/287\r\nf 237/237/288 238/238/288 233/233/288\r\nf 238/238/289 231/231/289 233/233/289\r\nf 239/239/290 240/240/290 241/241/290\r\nf 240/240/291 242/242/291 241/241/291\r\nf 243/243/292 244/244/292 239/239/292\r\nf 244/244/293 240/240/293 239/239/293\r\nf 245/245/294 246/246/294 243/243/294\r\nf 246/246/295 244/244/295 243/243/295\r\nf 241/241/296 242/242/296 247/247/296\r\nf 242/242/297 248/248/297 247/247/297\r\nf 249/249/298 232/232/298 231/231/298\r\nf 240/240/299 244/244/299 249/249/299\r\nf 244/244/300 250/250/300 249/249/300\r\nf 250/250/301 244/244/301 246/246/301\r\nf 248/248/302 242/242/302 238/238/302\r\nf 242/242/303 231/231/303 238/238/303\r\nf 240/240/304 249/249/304 242/242/304\r\nf 249/249/305 231/231/305 242/242/305\r\nf 251/251/306 252/252/306 253/253/306\r\nf 252/252/307 254/254/307 253/253/307\r\nf 255/255/308 256/256/308 257/257/308\r\nf 256/256/309 258/258/309 257/257/309\r\nf 259/259/310 256/256/310 260/260/310\r\nf 256/256/311 255/255/311 260/260/311\r\nf 261/261/312 262/262/312 263/263/312\r\nf 262/262/313 264/264/313 263/263/313\r\nf 265/265/314 266/266/314 267/267/314\r\nf 266/266/315 268/268/315 267/267/315\r\nf 268/268/316 266/266/316 269/269/316\r\nf 266/266/317 270/270/317 269/269/317\r\nf 266/266/318 265/265/318 271/271/318\r\nf 271/271/319 272/272/319 273/273/319\r\nf 272/272/320 274/274/320 273/273/320\r\nf 274/274/320 272/272/320 275/275/320\r\nf 276/276/321 277/277/321 266/266/321\r\nf 277/277/322 270/270/322 266/266/322\r\nf 266/266/323 271/271/323 276/276/323\r\nf 271/271/324 273/273/324 276/276/324\r\nf 278/278/325 279/279/325 280/280/325\r\nf 279/279/326 281/281/326 280/280/326\r\nf 282/282/327 283/283/327 284/284/327\r\nf 285/285/328 286/286/328 287/287/328\r\nf 283/283/329 282/282/329 288/288/329\r\nf 287/287/330 289/289/330 285/285/330\r\nf 290/290/331 291/291/331 292/292/331\r\nf 293/293/332 294/294/332 295/295/332\r\nf 296/296/333 290/290/333 297/297/333\r\nf 295/295/334 298/298/334 299/299/334\r\nf 283/283/335 300/300/335 284/284/335\r\nf 300/300/336 301/301/336 284/284/336\r\nf 287/287/337 286/286/337 300/300/337\r\nf 286/286/338 301/301/338 300/300/338\r\nf 302/302/339 303/303/339 304/304/339\r\nf 305/305/340 306/306/340 307/307/340\r\nf 308/308/341 309/309/341 310/310/341\r\nf 311/311/342 312/312/342 309/309/342\r\nf 313/313/343 314/314/343 315/315/343\r\nf 314/314/344 316/316/344 315/315/344\r\nf 317/317/345 318/318/345 319/319/345\r\nf 318/318/346 320/320/346 319/319/346\r\nf 321/321/347 322/322/347 313/313/347\r\nf 322/322/343 314/314/343 313/313/343\r\nf 323/323/348 324/324/348 325/325/348\r\nf 324/324/349 326/326/349 325/325/349\r\nf 325/325/350 326/326/350 321/321/350\r\nf 326/326/100 322/322/100 321/321/100\r\nf 319/319/351 320/320/351 327/327/351\r\nf 320/320/352 328/328/352 327/327/352\r\nf 329/329/353 330/330/353 317/317/353\r\nf 330/330/354 318/318/354 317/317/354\r\nf 315/315/355 316/316/355 331/331/355\r\nf 316/316/356 332/332/356 331/331/356\r\nf 333/333/357 334/334/357 323/323/357\r\nf 334/334/358 324/324/358 323/323/358\r\nf 327/327/359 328/328/359 335/335/359\r\nf 328/328/360 336/336/360 335/335/360\r\nf 296/296/361 333/333/361 323/323/361\r\nf 315/315/362 331/331/362 337/337/362\r\nf 315/315/363 337/337/363 313/313/363\r\nf 337/337/363 338/338/363 313/313/363\r\nf 314/314/364 318/318/364 316/316/364\r\nf 339/339/365 321/321/365 338/338/365\r\nf 321/321/366 313/313/366 338/338/366\r\nf 322/322/367 320/320/367 314/314/367\r\nf 320/320/368 318/318/368 314/314/368\r\nf 324/324/369 328/328/369 326/326/369\r\nf 323/323/370 325/325/370 296/296/370\r\nf 325/325/371 340/340/371 296/296/371\r\nf 339/339/372 340/340/372 321/321/372\r\nf 340/340/373 325/325/373 321/321/373\r\nf 322/322/367 326/326/367 320/320/367\r\nf 326/326/374 328/328/374 320/320/374\r\nf 297/297/375 290/290/375 341/341/375\r\nf 342/342/376 296/296/376 297/297/376\r\nf 341/341/377 290/290/377 292/292/377\r\nf 343/343/378 294/294/378 344/344/378\r\nf 294/294/379 293/293/379 344/344/379\r\nf 343/343/380 345/345/380 294/294/380\r\nf 345/345/381 346/346/381 294/294/381\r\nf 345/345/382 347/347/382 346/346/382\r\nf 347/347/383 348/348/383 346/346/383\r\nf 329/329/384 349/349/384 350/350/384\r\nf 318/318/385 330/330/385 316/316/385\r\nf 330/330/386 332/332/386 316/316/386\r\nf 337/337/387 331/331/387 299/299/387\r\nf 351/351/388 308/308/388 352/352/388\r\nf 353/353/389 354/354/389 355/355/389\r\nf 308/308/390 356/356/390 352/352/390\r\nf 355/355/391 354/354/391 310/310/391\r\nf 354/354/392 356/356/392 310/310/392\r\nf 357/357/393 352/352/393 302/302/393\r\nf 351/351/394 352/352/394 357/357/394\r\nf 358/358/395 359/359/395 303/303/395\r\nf 337/337/396 360/360/396 338/338/396\r\nf 361/361/397 338/338/397 360/360/397\r\nf 362/362/398 363/363/398 308/308/398\r\nf 363/363/399 309/309/399 308/308/399\r\nf 358/358/363 283/283/363 359/359/363\r\nf 361/361/400 364/364/400 338/338/400\r\nf 364/364/335 339/339/335 338/338/335\r\nf 303/303/401 302/302/401 353/353/401\r\nf 295/295/402 294/294/402 298/298/402\r\nf 365/365/403 346/346/403 366/366/403\r\nf 346/346/404 348/348/404 366/366/404\r\nf 298/298/405 294/294/405 365/365/405\r\nf 294/294/406 346/346/406 365/365/406\r\nf 283/283/407 288/288/407 359/359/407\r\nf 288/288/408 367/367/408 359/359/408\r\nf 317/317/409 349/349/409 329/329/409\r\nf 351/351/410 350/350/410 362/362/410\r\nf 350/350/411 349/349/411 362/362/411\r\nf 362/362/412 308/308/412 351/351/412\r\nf 299/299/413 298/298/413 337/337/413\r\nf 360/360/414 365/365/414 368/368/414\r\nf 365/365/415 366/366/415 368/368/415\r\nf 337/337/416 298/298/416 360/360/416\r\nf 298/298/417 365/365/417 360/360/417\r\nf 357/357/393 302/302/393 369/369/393\r\nf 370/370/418 304/304/418 367/367/418\r\nf 304/304/419 359/359/419 367/367/419\r\nf 353/353/420 302/302/420 354/354/420\r\nf 308/308/421 310/310/421 356/356/421\r\nf 355/355/422 371/371/422 353/353/422\r\nf 371/371/423 372/372/423 353/353/423\r\nf 356/356/424 354/354/424 352/352/424\r\nf 354/354/393 302/302/393 352/352/393\r\nf 304/304/425 303/303/425 359/359/425\r\nf 358/358/426 373/373/426 283/283/426\r\nf 373/373/427 300/300/427 283/283/427\r\nf 303/303/428 374/374/428 358/358/428\r\nf 374/374/429 373/373/429 358/358/429\r\nf 353/353/430 372/372/430 303/303/430\r\nf 372/372/431 374/374/431 303/303/431\r\nf 375/375/432 364/364/432 361/361/432\r\nf 360/360/433 368/368/433 361/361/433\r\nf 368/368/26 375/375/26 361/361/26\r\nf 349/349/434 376/376/434 362/362/434\r\nf 376/376/435 363/363/435 362/362/435\r\nf 317/317/363 319/319/363 349/349/363\r\nf 319/319/436 376/376/436 349/349/436\r\nf 310/310/437 377/377/437 355/355/437\r\nf 377/377/438 371/371/438 355/355/438\r\nf 309/309/439 377/377/439 310/310/439\r\nf 378/378/440 379/379/440 291/291/440\r\nf 379/379/441 380/380/441 291/291/441\r\nf 378/378/442 291/291/442 381/381/442\r\nf 291/291/443 382/382/443 381/381/443\r\nf 381/381/444 382/382/444 383/383/444\r\nf 382/382/445 384/384/445 383/383/445\r\nf 385/385/446 386/386/446 335/335/446\r\nf 328/328/447 324/324/447 336/336/447\r\nf 324/324/448 334/334/448 336/336/448\r\nf 342/342/449 333/333/449 296/296/449\r\nf 387/387/450 311/311/450 388/388/450\r\nf 389/389/451 390/390/451 391/391/451\r\nf 387/387/452 392/392/452 311/311/452\r\nf 389/389/453 312/312/453 390/390/453\r\nf 312/312/454 392/392/454 390/390/454\r\nf 393/393/455 387/387/455 394/394/455\r\nf 394/394/456 387/387/456 388/388/456\r\nf 306/306/457 305/305/457 395/395/457\r\nf 340/340/458 396/396/458 296/296/458\r\nf 396/396/459 340/340/459 397/397/459\r\nf 398/398/460 311/311/460 363/363/460\r\nf 311/311/461 309/309/461 363/363/461\r\nf 305/305/363 287/287/363 395/395/363\r\nf 397/397/462 340/340/462 364/364/462\r\nf 340/340/463 339/339/463 364/364/463\r\nf 391/391/464 393/393/464 306/306/464\r\nf 292/292/465 291/291/465 380/380/465\r\nf 399/399/466 400/400/466 382/382/466\r\nf 400/400/467 384/384/467 382/382/467\r\nf 290/290/468 399/399/468 291/291/468\r\nf 399/399/469 382/382/469 291/291/469\r\nf 287/287/470 305/305/470 289/289/470\r\nf 305/305/471 401/401/471 289/289/471\r\nf 335/335/472 386/386/472 327/327/472\r\nf 388/388/473 398/398/473 385/385/473\r\nf 398/398/474 386/386/474 385/385/474\r\nf 388/388/475 311/311/475 398/398/475\r\nf 396/396/476 402/402/476 399/399/476\r\nf 402/402/477 400/400/477 399/399/477\r\nf 296/296/478 396/396/478 290/290/478\r\nf 396/396/479 399/399/479 290/290/479\r\nf 403/403/480 393/393/480 394/394/480\r\nf 404/404/481 401/401/481 307/307/481\r\nf 401/401/482 305/305/482 307/307/482\r\nf 390/390/483 393/393/483 391/391/483\r\nf 392/392/484 312/312/484 311/311/484\r\nf 389/389/422 391/391/422 371/371/422\r\nf 391/391/485 372/372/485 371/371/485\r\nf 392/392/486 387/387/486 390/390/486\r\nf 387/387/487 393/393/487 390/390/487\r\nf 307/307/488 306/306/488 393/393/488\r\nf 395/395/489 287/287/489 373/373/489\r\nf 287/287/490 300/300/490 373/373/490\r\nf 306/306/491 395/395/491 374/374/491\r\nf 395/395/492 373/373/492 374/374/492\r\nf 391/391/493 306/306/493 372/372/493\r\nf 306/306/494 374/374/494 372/372/494\r\nf 397/397/495 364/364/495 375/375/495\r\nf 402/402/496 396/396/496 375/375/496\r\nf 396/396/497 397/397/497 375/375/497\r\nf 386/386/498 398/398/498 376/376/498\r\nf 398/398/499 363/363/499 376/376/499\r\nf 327/327/363 386/386/363 319/319/363\r\nf 386/386/500 376/376/500 319/319/500\r\nf 312/312/501 389/389/501 377/377/501\r\nf 389/389/438 371/371/438 377/377/438\r\nf 312/312/502 377/377/502 309/309/502\r\nf 405/405/330 406/406/330 407/407/330\r\nf 406/406/503 408/408/503 407/407/503\r\nf 405/405/330 407/407/330 409/409/330\r\nf 410/410/504 411/411/504 412/412/504\r\nf 413/413/393 410/410/393 414/414/393\r\nf 410/410/393 412/412/393 414/414/393\r\nf 415/415/505 405/405/505 416/416/505\r\nf 417/417/505 414/414/505 418/418/505\r\nf 419/419/506 420/420/506 421/421/506\r\nf 422/422/507 423/423/507 424/424/507\r\nf 425/425/393 426/426/393 416/416/393\r\nf 426/426/508 425/425/508 427/427/508\r\nf 419/419/509 428/428/509 429/429/509\r\nf 430/430/510 431/431/510 432/432/510\r\nf 433/433/511 425/425/511 416/416/511\r\nf 434/434/512 435/435/512 436/436/512\r\nf 437/437/513 419/419/513 429/429/513\r\nf 419/419/514 421/421/514 428/428/514\r\nf 438/438/515 437/437/515 429/429/515\r\nf 425/425/516 428/428/516 439/439/516\r\nf 435/435/517 433/433/517 440/440/517\r\nf 429/429/518 434/434/518 438/438/518\r\nf 434/434/519 436/436/519 438/438/519\r\nf 437/437/520 441/441/520 419/419/520\r\nf 427/427/521 425/425/521 439/439/521\r\nf 439/439/522 428/428/522 421/421/522\r\nf 433/433/523 416/416/523 440/440/523\r\nf 419/419/524 441/441/524 420/420/524\r\nf 434/434/525 433/433/525 435/435/525\r\nf 433/433/526 434/434/526 425/425/526\r\nf 434/434/527 428/428/527 425/425/527\r\nf 429/429/528 428/428/528 434/434/528\r\nf 417/417/529 423/423/529 442/442/529\r\nf 443/443/530 444/444/530 430/430/530\r\nf 432/432/531 445/445/531 446/446/531\r\nf 431/431/532 447/447/532 445/445/532\r\nf 432/432/533 446/446/533 448/448/533\r\nf 422/422/534 431/431/534 423/423/534\r\nf 449/449/535 442/442/535 444/444/535\r\nf 432/432/536 448/448/536 430/430/536\r\nf 448/448/536 443/443/536 430/430/536\r\nf 445/445/537 450/450/537 446/446/537\r\nf 424/424/538 423/423/538 451/451/538\r\nf 445/445/539 447/447/539 452/452/539\r\nf 447/447/540 431/431/540 422/422/540\r\nf 449/449/541 417/417/541 442/442/541\r\nf 452/452/542 450/450/542 445/445/542\r\nf 444/444/543 442/442/543 430/430/543\r\nf 423/423/544 430/430/544 442/442/544\r\nf 423/423/545 431/431/545 430/430/545\r\nf 432/432/546 431/431/546 445/445/546\r\nf 417/417/547 451/451/547 423/423/547\r\nf 453/453/548 454/454/548 455/455/548\r\nf 456/456/549 457/457/549 458/458/549\r\nf 459/459/346 456/456/346 458/458/346\r\nf 460/460/550 461/461/550 458/458/550\r\nf 461/461/551 462/462/551 458/458/551\r\nf 455/455/552 460/460/552 463/463/552\r\nf 460/460/553 457/457/553 463/463/553\r\nf 454/454/554 460/460/554 455/455/554\r\nf 464/464/555 460/460/555 454/454/555\r\nf 458/458/556 457/457/556 460/460/556\r\nf 462/462/557 465/465/557 458/458/557\r\nf 465/465/557 459/459/557 458/458/557\r\nf 461/461/558 460/460/558 464/464/558\r\nf 466/466/559 467/467/559 468/468/559\r\nf 469/469/560 466/466/560 470/470/560\r\nf 466/466/561 468/468/561 470/470/561\r\nf 471/471/562 469/469/562 472/472/562\r\nf 469/469/563 470/470/563 472/472/563\r\nf 467/467/564 473/473/564 468/468/564\r\nf 468/468/565 473/473/565 470/470/565\r\nf 473/473/566 474/474/566 470/470/566\r\nf 472/472/567 470/470/567 475/475/567\r\nf 470/470/568 474/474/568 475/475/568\r\nf 476/476/569 477/477/569 466/466/569\r\nf 477/477/570 467/467/570 466/466/570\r\nf 478/478/571 479/479/571 476/476/571\r\nf 479/479/572 477/477/572 476/476/572\r\nf 480/480/573 473/473/573 477/477/573\r\nf 473/473/574 467/467/574 477/477/574\r\nf 481/481/575 480/480/575 479/479/575\r\nf 480/480/576 477/477/576 479/479/576\r\nf 482/482/577 483/483/577 484/484/577\r\nf 483/483/578 485/485/578 484/484/578\r\nf 486/486/579 482/482/579 487/487/579\r\nf 487/487/580 482/482/580 488/488/580\r\nf 482/482/581 484/484/581 488/488/581\r\nf 489/489/582 490/490/582 488/488/582\r\nf 490/490/583 487/487/583 488/488/583\r\nf 491/491/584 489/489/584 492/492/584\r\nf 489/489/584 488/488/584 492/492/584\r\nf 488/488/585 484/484/585 492/492/585\r\nf 484/484/586 493/493/586 492/492/586\r\nf 484/484/587 485/485/587 493/493/587\r\nf 485/485/588 494/494/588 493/493/588\r\nf 487/487/589 495/495/589 486/486/589\r\nf 492/492/590 493/493/590 491/491/590\r\nf 493/493/591 494/494/591 491/491/591\r\nf 495/495/592 487/487/592 496/496/592\r\nf 487/487/593 490/490/593 496/496/593\r\nf 486/486/594 497/497/594 482/482/594\r\nf 498/498/595 499/499/595 500/500/595\r\nf 501/501/596 498/498/596 500/500/596\r\nf 502/502/597 500/500/597 503/503/597\r\nf 500/500/598 504/504/598 503/503/598\r\nf 501/501/599 500/500/599 505/505/599\r\nf 506/506/600 499/499/600 507/507/600\r\nf 499/499/601 498/498/601 507/507/601\r\nf 505/505/602 500/500/602 508/508/602\r\nf 509/509/603 501/501/603 505/505/603\r\nf 508/508/604 500/500/604 502/502/604\r\nf 510/510/605 511/511/605 512/512/605\r\nf 511/511/606 513/513/606 512/512/606\r\nf 514/514/607 510/510/607 515/515/607\r\nf 514/514/608 516/516/608 510/510/608\r\nf 516/516/609 511/511/609 510/510/609\r\nf 517/517/610 516/516/610 518/518/610\r\nf 516/516/611 514/514/611 518/518/611\r\nf 519/519/612 520/520/612 517/517/612\r\nf 520/520/613 516/516/613 517/517/613\r\nf 516/516/614 520/520/614 511/511/614\r\nf 520/520/615 521/521/615 511/511/615\r\nf 511/511/616 521/521/616 513/513/616\r\nf 521/521/617 522/522/617 513/513/617\r\nf 515/515/618 523/523/618 514/514/618\r\nf 520/520/619 519/519/619 521/521/619\r\nf 519/519/620 522/522/620 521/521/620\r\nf 523/523/621 524/524/621 514/514/621\r\nf 524/524/622 518/518/622 514/514/622\r\nf 510/510/623 525/525/623 515/515/623\r\nf 526/526/624 527/527/624 528/528/624\r\nf 529/529/625 526/526/625 530/530/625\r\nf 526/526/626 528/528/626 530/530/626\r\nf 531/531/627 532/532/627 529/529/627\r\nf 532/532/628 533/533/628 529/529/628\r\nf 534/534/629 529/529/629 530/530/629\r\nf 535/535/630 536/536/630 527/527/630\r\nf 536/536/631 528/528/631 527/527/631\r\nf 537/537/632 529/529/632 534/534/632\r\nf 534/534/633 530/530/633 538/538/633\r\nf 531/531/634 529/529/634 537/537/634\r\nf 539/539/635 540/540/635 541/541/635\r\nf 542/542/636 543/543/636 544/544/636\r\nf 543/543/400 545/545/400 546/546/400\r\nf 541/541/637 547/547/637 548/548/637\r\nf 549/549/638 550/550/638 551/551/638\r\nf 550/550/639 546/546/639 551/551/639\r\nf 546/546/640 552/552/640 551/551/640\r\nf 553/553/641 554/554/641 555/555/641\r\nf 556/556/642 557/557/642 553/553/642\r\nf 547/547/643 558/558/643 548/548/643\r\nf 543/543/644 542/542/644 545/545/644\r\nf 559/559/645 560/560/645 561/561/645\r\nf 562/562/646 560/560/646 546/546/646\r\nf 563/563/647 559/559/647 564/564/647\r\nf 563/563/648 564/564/648 565/565/648\r\nf 566/566/649 567/567/649 568/568/649\r\nf 569/569/393 567/567/393 566/566/393\r\nf 570/570/650 567/567/650 569/569/650\r\nf 568/568/393 567/567/393 571/571/393\r\nf 562/562/651 546/546/651 572/572/651\r\nf 569/569/393 566/566/393 572/572/393\r\nf 566/566/363 562/562/363 572/572/363\r\nf 542/542/100 573/573/100 574/574/100\r\nf 544/544/652 573/573/652 542/542/652\r\nf 575/575/653 576/576/653 577/577/653\r\nf 570/570/363 578/578/363 567/567/363\r\nf 578/578/363 570/570/363 579/579/363\r\nf 566/566/363 568/568/363 562/562/363\r\nf 564/564/654 559/559/654 580/580/654\r\nf 581/581/363 559/559/363 561/561/363\r\nf 559/559/655 581/581/655 580/580/655\r\nf 572/572/656 545/545/656 569/569/656\r\nf 568/568/363 561/561/363 562/562/363\r\nf 561/561/363 568/568/363 581/581/363\r\nf 575/575/657 570/570/657 569/569/657\r\nf 582/582/363 564/564/363 583/583/363\r\nf 584/584/363 585/585/363 580/580/363\r\nf 585/585/393 584/584/393 586/586/393\r\nf 544/544/658 543/543/658 587/587/658\r\nf 582/582/363 565/565/363 564/564/363\r\nf 587/587/659 543/543/659 546/546/659\r\nf 563/563/363 588/588/363 559/559/363\r\nf 583/583/363 580/580/363 585/585/363\r\nf 583/583/363 564/564/363 580/580/363\r\nf 559/559/660 588/588/660 560/560/660\r\nf 584/584/661 580/580/661 581/581/661\r\nf 574/574/662 545/545/662 542/542/662\r\nf 576/576/662 545/545/662 574/574/662\r\nf 584/584/663 568/568/663 571/571/663\r\nf 568/568/664 584/584/664 581/581/664\r\nf 577/577/100 570/570/100 575/575/100\r\nf 579/579/100 570/570/100 577/577/100\r\nf 545/545/665 572/572/665 546/546/665\r\nf 545/545/666 575/575/666 569/569/666\r\nf 575/575/653 545/545/653 576/576/653\r\nf 567/567/363 589/589/363 571/571/363\r\nf 589/589/363 567/567/363 578/578/363\r\nf 584/584/393 589/589/393 586/586/393\r\nf 584/584/363 571/571/363 589/589/363\r\nf 562/562/667 561/561/667 560/560/667\r\nf 548/548/668 539/539/668 541/541/668\r\nf 590/590/669 591/591/669 592/592/669\r\nf 547/547/670 591/591/670 593/593/670\r\nf 594/594/671 592/592/671 595/595/671\r\nf 596/596/672 594/594/672 595/595/672\r\nf 597/597/673 598/598/673 599/599/673\r\nf 599/599/393 598/598/393 600/600/393\r\nf 600/600/673 598/598/673 601/601/673\r\nf 602/602/673 598/598/673 597/597/673\r\nf 558/558/674 547/547/674 593/593/674\r\nf 600/600/393 558/558/393 599/599/393\r\nf 558/558/363 593/593/363 599/599/363\r\nf 574/574/100 573/573/100 539/539/100\r\nf 540/540/675 539/539/675 573/573/675\r\nf 577/577/653 576/576/653 603/603/653\r\nf 598/598/363 578/578/363 601/601/363\r\nf 579/579/363 601/601/363 578/578/363\r\nf 593/593/363 597/597/363 599/599/363\r\nf 604/604/676 592/592/676 594/594/676\r\nf 590/590/363 592/592/363 605/605/363\r\nf 604/604/677 605/605/677 592/592/677\r\nf 600/600/656 548/548/656 558/558/656\r\nf 593/593/363 590/590/363 597/597/363\r\nf 605/605/363 597/597/363 590/590/363\r\nf 600/600/678 601/601/678 603/603/678\r\nf 583/583/363 594/594/363 582/582/363\r\nf 604/604/363 585/585/363 606/606/363\r\nf 586/586/363 606/606/363 585/585/363\r\nf 540/540/679 607/607/679 541/541/679\r\nf 594/594/363 596/596/363 582/582/363\r\nf 547/547/680 541/541/680 607/607/680\r\nf 592/592/363 608/608/363 595/595/363\r\nf 585/585/363 604/604/363 583/583/363\r\nf 604/604/363 594/594/363 583/583/363\r\nf 591/591/660 608/608/660 592/592/660\r\nf 605/605/330 604/604/330 606/606/330\r\nf 539/539/662 548/548/662 574/574/662\r\nf 574/574/662 548/548/662 576/576/662\r\nf 602/602/673 597/597/673 606/606/673\r\nf 605/605/681 606/606/681 597/597/681\r\nf 603/603/100 601/601/100 577/577/100\r\nf 577/577/100 601/601/100 579/579/100\r\nf 600/600/682 603/603/682 548/548/682\r\nf 576/576/653 548/548/653 603/603/653\r\nf 602/602/363 589/589/363 598/598/363\r\nf 578/578/363 598/598/363 589/589/363\r\nf 586/586/363 589/589/363 606/606/363\r\nf 589/589/363 602/602/363 606/606/363\r\nf 591/591/669 590/590/669 593/593/669\r\nf 609/609/683 610/610/683 554/554/683\r\nf 547/547/684 555/555/684 610/610/684\r\nf 555/555/685 554/554/685 610/610/685\r\nf 549/549/686 551/551/686 611/611/686\r\nf 610/610/687 612/612/687 547/547/687\r\nf 546/546/688 560/560/688 552/552/688\r\nf 613/613/689 614/614/689 615/615/689\r\nf 616/616/684 617/617/684 615/615/684\r\nf 618/618/363 619/619/363 620/620/363\r\nf 616/616/690 615/615/690 621/621/690\r\nf 622/622/691 623/623/691 624/624/691\r\nf 625/625/363 626/626/363 623/623/363\r\nf 626/626/363 617/617/363 623/623/363\r\nf 627/627/692 628/628/692 629/629/692\r\nf 628/628/693 630/630/693 629/629/693\r\nf 622/622/694 624/624/694 631/631/694\r\nf 627/627/695 622/622/695 628/628/695\r\nf 622/622/696 631/631/696 628/628/696\r\nf 632/632/697 552/552/697 630/630/697\r\nf 632/632/698 633/633/698 552/552/698\r\nf 629/629/699 630/630/699 552/552/699\r\nf 625/625/700 623/623/700 622/622/700\r\nf 611/611/701 551/551/701 634/634/701\r\nf 551/551/702 633/633/702 634/634/702\r\nf 551/551/703 552/552/703 633/633/703\r\nf 560/560/704 629/629/704 552/552/704\r\nf 560/560/705 588/588/705 629/629/705\r\nf 588/588/363 627/627/363 629/629/363\r\nf 588/588/363 563/563/363 627/627/363\r\nf 563/563/706 622/622/706 627/627/706\r\nf 563/563/707 565/565/707 622/622/707\r\nf 565/565/662 625/625/662 622/622/662\r\nf 565/565/662 582/582/662 625/625/662\r\nf 582/582/708 626/626/708 625/625/708\r\nf 615/615/709 617/617/709 626/626/709\r\nf 620/620/710 612/612/710 618/618/710\r\nf 612/612/711 635/635/711 618/618/711\r\nf 619/619/712 614/614/712 613/613/712\r\nf 620/620/713 619/619/713 613/613/713\r\nf 635/635/714 610/610/714 636/636/714\r\nf 610/610/715 609/609/715 636/636/715\r\nf 610/610/716 635/635/716 612/612/716\r\nf 615/615/717 614/614/717 621/621/717\r\nf 553/553/718 557/557/718 554/554/718\r\nf 557/557/719 609/609/719 554/554/719\r\nf 547/547/720 612/612/720 591/591/720\r\nf 591/591/721 612/612/721 608/608/721\r\nf 612/612/722 620/620/722 608/608/722\r\nf 608/608/723 620/620/723 595/595/723\r\nf 620/620/724 613/613/724 595/595/724\r\nf 595/595/725 613/613/725 596/596/725\r\nf 613/613/689 615/615/689 596/596/689\r\nf 596/596/363 615/615/363 582/582/363\r\nf 615/615/726 626/626/726 582/582/726\r\nf 637/637/727 638/638/727 639/639/727\r\nf 638/638/728 640/640/728 639/639/728\r\nf 640/640/729 641/641/729 639/639/729\r\nf 638/638/730 637/637/730 642/642/730\r\nf 637/637/730 643/643/730 642/642/730\r\nf 644/644/731 645/645/731 640/640/731\r\nf 645/645/732 641/641/732 640/640/732\r\nf 646/646/733 647/647/733 644/644/733\r\nf 647/647/733 645/645/733 644/644/733\r\nf 648/648/734 649/649/734 646/646/734\r\nf 649/649/735 647/647/735 646/646/735\r\nf 650/650/736 651/651/736 648/648/736\r\nf 651/651/737 649/649/737 648/648/737\r\nf 652/652/738 653/653/738 650/650/738\r\nf 653/653/739 651/651/739 650/650/739\r\nf 642/642/740 643/643/740 652/652/740\r\nf 643/643/740 653/653/740 652/652/740\r\nf 650/650/741 648/648/741 652/652/741\r\nf 648/648/742 646/646/742 652/652/742\r\nf 640/640/743 638/638/743 644/644/743\r\nf 638/638/744 642/642/744 644/644/744\r\nf 646/646/745 644/644/745 652/652/745\r\nf 644/644/746 642/642/746 652/652/746\r\nf 654/654/747 651/651/747 655/655/747\r\nf 651/651/748 653/653/748 655/655/748\r\nf 649/649/749 651/651/749 654/654/749\r\nf 656/656/393 647/647/393 654/654/393\r\nf 647/647/750 649/649/750 654/654/750\r\nf 657/657/751 637/637/751 639/639/751\r\nf 643/643/752 637/637/752 657/657/752\r\nf 655/655/753 653/653/753 657/657/753\r\nf 653/653/754 643/643/754 657/657/754\r\nf 658/658/755 645/645/755 656/656/755\r\nf 645/645/756 647/647/756 656/656/756\r\nf 641/641/393 645/645/393 658/658/393\r\nf 639/639/757 641/641/757 658/658/757\r\nf 658/658/758 656/656/758 639/639/758\r\nf 656/656/759 654/654/759 639/639/759\r\nf 654/654/760 655/655/760 639/639/760\r\nf 655/655/761 657/657/761 639/639/761\r\nf 654/654/330 656/656/330 655/655/330\r\nf 656/656/762 658/658/762 655/655/762\r\nf 658/658/763 639/639/763 655/655/763\r\nf 659/659/764 660/660/764 661/661/764\r\nf 660/660/765 662/662/765 661/661/765\r\nf 663/663/766 662/662/766 664/664/766\r\nf 662/662/767 660/660/767 664/664/767\r\nf 663/663/768 665/665/768 662/662/768\r\nf 665/665/769 666/666/769 662/662/769\r\nf 661/661/770 662/662/770 667/667/770\r\nf 662/662/771 666/666/771 667/667/771\r\nf 668/668/393 669/669/393 661/661/393\r\nf 669/669/772 659/659/772 661/661/772\r\nf 667/667/773 666/666/773 670/670/773\r\nf 666/666/773 665/665/773 670/670/773\r\nf 668/668/774 661/661/774 670/670/774\r\nf 661/661/775 667/667/775 670/670/775\r\nf 671/671/776 672/672/776 673/673/776\r\nf 672/672/777 674/674/777 673/673/777\r\nf 675/675/778 676/676/778 674/674/778\r\nf 676/676/779 673/673/779 674/674/779\r\nf 675/675/780 674/674/780 677/677/780\r\nf 674/674/781 678/678/781 677/677/781\r\nf 672/672/782 679/679/782 674/674/782\r\nf 679/679/783 678/678/783 674/674/783\r\nf 680/680/784 672/672/784 681/681/784\r\nf 672/672/785 671/671/785 681/681/785\r\nf 679/679/363 682/682/363 678/678/363\r\nf 682/682/363 677/677/363 678/678/363\r\nf 680/680/786 682/682/786 672/672/786\r\nf 682/682/787 679/679/787 672/672/787\r\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "newmtl cbabe\r\nKa 0.000000 0.000000 0.000000\r\nKd 1.000000 1.000000 1.000000\r\nillum 0\r\nmap_Kd cbabe.jpg\r\n\r\n"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "Qk02AAMAAAAAADYAAAAoAAAAAAEAAAABAAABABgAAAAAAAAAAwDEDgAAxA4AAAAAAAAAAAAAaCiQaCiQWCCIUBiAUBh4UBiAWCCAUBiAUBiAWCCIWCCIUBiAMAhoOAhoMAhoOBBwWCCIUCCAQBBwOBBwSBB4SBiASBiASBh4SBiAUCCAYCCIaDCYaCiQaCiQYCCIUBiASBh4UBiAUCCAUBiAUBiAWCCIWCCIWCCAOBBwMAhoOAhoMAhoSBiAWCCISBB4OBBwQBB4SBh4UBiASBiAQBB4SBh4SBh4SBiAWCCIYCCQYCCQWCCAQBh4SBh4UBiAUBiAUBiAUBiAUBiAUBiAUBiAUBiAUBiASBh4SBh4SBh4QBB4QBB4QBh4QBB4QBBwQBBwOBBwOBBwQBB4SBh4SBB4SBB4QBB4QBBwOBBwQBBwQBB4OBBwMBBoMAhoQBBwUBiAQBB4OBBwQBBwOBBwMAhoQBBwQBBwQBB4QBBwOBBwQBB4QBBwOAhoKAhgKAhgOBBwOBB4QBB4QBBwOBBwQBBwSBB4SBB4QBBwMAhoMAhoQBBwSBB4QBB4QBB4OBBwOAhoOAhoOAhoQBBwOBBwOBBwQBBwOBBwOBBoMCA4IBggGBgYGBgYICAgGBgYGBgYGBgYGBgYGBggICAgKCggKCgoICAgGBgYGBgYGBgYIBggICAYIBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYODg4UFBQQEBAGBgYUFBQODg4ODg4GBgYGBgYGBgYGBgYGBgYGBgYGBgYIBgYICAYIBggGBgYGBgYGBgYICAgKCgoKCggICAgGBggGBgYGBgYGBgYIBgYIBggGBgYEBAQEBAQEBgQICAgMDAwODg4QEBAODg4KCgoICAgICAgICAgODg4ODg4ODg4ODg4QEBAODg4MDAwMDA4ODg4MDAwMDAwKDAoMDAwMDAwODg4ODg4OEBAQEBAQEBASEhISEhAQEBAODg4ODg4ODg4MDAwMDAwKDAoKCgoKCgwMDAwODA4ODg4MDAwUFBIODg4QEBAODg4ODg4ODg4ODg4ICAgICAgICAgODg4QEBAOEA4ODg4ODAwODg4YCiQYCiIYCCISBh4UBiAUBiAWCCIWCCAWCCIYCCIWCCIQBBwMAhoQBBoMAhoQBBwUBiAUBiASBB4UBiAUBiASBiAQBB4SBiAWCCIYCCIaDCYaCiQaCiQYCiIYCCIUBiASBh4UBiAWCCIWCCAWCCIWCCIYCCISBh4MBBoOBBoOAhoOBBwSBh4UBiASBh4SBh4WBiAUBiASBiAQBB4QBB4SBiAWCCAYCiIaCiQYCCISBh4SBh4UBiAUBiASBiAUBiAUBiASBB4QBB4SBB4SBB4SBB4SBh4SBh4SBh4SBB4SBB4SBB4QBB4QBB4QBB4QBBwOBBwMBBoOBBwQBBwQBBwQBBwQBB4QBB4QBBwOBBwQBB4SBh4SBBwOBBoKAhoOBBwQBBwQBBwSBB4SBB4QBBwMAhoMBBoQBB4QBB4QBBwOBBwOBBwMAhoMAhoKAhgMAhoQBBwSBh4QBB4QBBwOBBwOBBwOBBwOBBwOAhoOBBoQBBwMAhoQBBwSBh4OBBwQBBwOAhoOBBoOBBoMAhoMBBoOBBwOBBwOBBoKCA4GBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBggICAgICAgKCgoICAgICAgEBAQGBgYGBgYEBAQEBAQCBAQCBAICAgICAgICAgICAgICAgIMDAwUFBQUFBQODg4UFBQODg4MDAwCAgICAgICAgICAgICAgICBAICBAQEBAQEBAQGBgYGBgYEBAQICAgICAgKCgoICAgICAgGBggGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBgQICAYMDAwQDg4QEBAODg4KCgoICAgICAgICAgODg4ODg4ODg4ODg4QEBAODg4MDAwODg4ODg4ODg4MDAwKCgoKCgoKCgoKCgoICgoKCgoKCgoKCgoMDAoKCgoICAgICAgICAgICAgICAoICgoICgoKCgoMDAwODg4ODg4ODg4ODg4SFBIODg4QEBAODg4ODg4ODg4ODg4ICAgICAgICAgODA4QEBAODg4ODg4ODg4ODg4YCiIWCCIWCCASBh4UBiAWCCIaCiQaCiQYCCIYCCIWCCIQBBwOAhoMBBoQBBwQBB4SBh4SBh4SBiASBiAUBiAUBiAQBB4UBiAaCiQaDCYcDCYcDCYaDCYWCCISBh4QBB4UBiAWCCIYCiQaCiQaCiQYCCIYCCISBh4OAhoOAhoOBBoSBBwSBh4SBh4SBiASBiASBiAUBiASBh4SBh4UBiAYCCIaCiQYCiQWCCASBh4SBh4UBiAWBiASBiASBh4SBh4SBh4QBB4QBBwQBB4QBB4QBB4QBB4QBBwOBBwOBBwQBBwQBBwQBB4QBB4OBBwMAhoQBBwOBBwOBBwOBBoMAhoMBBoSBB4SBh4QBB4OBBwOBBoOBBwOBBoOBBwOAhoOBBwQBBwOBBwQBBwQBBwQBBwOBBwMAhoOAhoOBBwQBBwQBB4QBBwOAhoOBBoMAhoOBBwOBBoOBBwQBBwSBh4QBB4OBBwMAhoMAhoMAhoOBBwUBiAMBBoOBBoQBBwOBBwQBBwOBBwOBBoOAhoOAhoMAhgOAhoOBBwOBBoKCA4IBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKDAwICAgCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIKCgoODg4UFBQcHBwSEhIMDAwKCgoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIICAgKDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBgQGBggMDAwQDg4QEBAODg4KCAoICAgICAgICAgODg4ODg4ODg4ODg4QEBAODg4ODg4QEBAQEBAQEBAQEBAODg4ODg4MDg4MDAwMDAwMDAwMDAwKCgoKCgoMDAwODg4ODg4QEBAOEBAQEBAQEBAQEBAQEBASEhISEhISEhISEhIODg4UFBIODg4QEBAODg4ODg4ODg4ODg4ICAgICAgICAgODg4QEBAODg4ODg4ODg4ODg4YCiIWCCAWCCAWCCAWCCIYCiQaCiQaCiQaCiQaCiQWCCAOAhwOAhoMAhoQBBwUBiAUBiAUBiAUBiASBiAQBh4SBh4UBiAWCCIaCiYeDigcDCYcDigYCiQUBiASBB4UBiAWCCIWCCIYCiQYCiQaCiQYCCIYCCIOBBwOAhoMAhoQBBwUBh4UBiAUBiAUBiASBiAQBh4QBh4SBiAWCCIYCiQaCiQWCiIUCCAUBiAWCCAWCCIUBiAUBiAQBh4QBB4QBB4QBB4QBB4SBB4QBB4QBB4QBB4QBB4SBh4UBiASBh4SBh4QBBwOBBwQBBwQBBwOBBoOAhoOBBoQBBwQBBwOAhoMAhoMBBoQBBwQBB4SBB4OBBoMAhoMAhoOAhoMBBoQBBwSBB4OBBwOBBoOAhoMAhoOBBoOBBoSBh4QBBwMAhoQBBwQBBwOBBoMAhoOAhoSBB4SBh4OBBoMAhgQBBwUBiASBh4QBBwOBBoOBBwMAhoOBBwQBBwOBBoQBBwQBBwOBBwQBBwOBBoQBBwQBBwOAhoMAhoOBBoOBBoKCA4GBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoODg4ICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYKCgoKCgogICAuLi4SEhIKCgoKCgoGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgODg4KCgoICAgICAgGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQGBgYMDAwQEA4QEBAODg4KCgoICAgICAgICAgODgwODg4ODg4ODg4QEBAODg4ODg4QEBASEhIUFBQUFBQUFBQWFBYWFhYUFhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBYUFBQUFBQUFhQWFhYWFBYUFBQUFBISEhISEhIQEBAODg4SEhIODg4QEBAODg4ODg4ODg4ODgwICAgICAgICAgODg4QEBAODg4ODg4ODA4ODgwWCCIYCiIYCiQYCiQYCiQcDCYaDCYYCiQYCCIYCCIQBBwMAhgMAhoQBBwUBiAYCCIWCCIWCCIUBiASBiAQBh4WCCIYCCIYCiQcDCYeDigeDigaCiQSBh4SBB4UBiAYCiQYCCQYCiQaDCYaDCQYCiIYCCIUBiAOAhoOBBwQBBwUBiAWCCIWCCIWCCIWBiAUBiAQBh4UBiAYCCIaCiQaDCYYCiQUCCAWCCAYCCIYCCIUBiASBh4SBh4SBh4SBh4SBh4SBh4SBiAUBiASBh4UBiAUBiAWCCAWCCAUBiAWBiAWCCIUBiASBB4QBBwOBBoOBBwOAhoOBBoQBBwQBBwQBBwQBBwOAhoMAhoMAhoSBh4SBh4OBBwOAhoQBBwOBBoOAhoQBBwQBB4OBBwOAhoOAhoOAhoMAhoQBB4SBh4OAhoQBBwQBBwQBBwOBBoOBBwOBBwMBBwSBiASBB4MAhoQBBwUBh4SBh4QBB4QBBwOAhwOAhoQBBoOBBoQBBwQBBwQBBwSBBwQBBwOBBoQBBwOAhoMAhoOBBwOBBoKCA4IBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoQEBAICAgICAYICAgICAgICAgKCgoKCgoKCgwKCgoMDAwKCgoKCgoKCgoMDAwMDAwcHBw0NDQUFBQKCgoKCgoKCgoKCgoKCgoMDAwKCgoKCgwKCgoKCgoICAgICAgICAgICAYICAgQEBAKCgoICAgICAgGBgYGBgYGBgYGBgYGBAYEBAQEBAQEBAQEBAQEBAQGBgYMDAwQEBAQEBAQEBAKCgoICAgICAgICAgMDgwMDAwMDAwODg4QEBAQEBAKCgoMDAwMDA4ODg4ODg4QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAODg4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCgoKCgoKCgoKCggICAgUFBIQEBAQEBAODg4MDAwMDAwMDgwICAgICAgKCAgODg4SEhIQEBAODg4MDAwODg4YCiQaCiYaCiQaCiYcDigcDCYcDCYaDCQYCCIUBiAMAhoMAhoQBBwUBiAWCCIWCCIWCCAWCCAUBiASBiAWCCIYCCIYCiQYCiQaDCYcDiYaCiQUBh4QBBwSBh4UCCAYCCIWCCIaCiQcDCYaDCQWCCIWCCISBh4QBBwSBB4UBiAWCCIWCCIWCCIWCCAUBiASBiAUCCAYCCIaCiQYCiQYCiQWCCIYCCIaCiIYCCISBiAQBB4QBB4SBh4SBiAUBiAWCCIWCCIYCCIYCiQWCCIUCCAUBiASBiAQBh4QBB4QBB4SBiAUBiAUBiASBh4QBB4OBBwOAhoOBBoQBBwQBBwOBBwSBB4SBB4QBBwOAhoMAhoSBh4UBh4QBB4QBB4QBBwOBBoOBBwQBBwSBB4QBBwQBBwQBBwQBBwOBBwQBBwOBBoOAhoQBBwQBBwOAhwQBBwOBBwMAhoOBBoUBiAQBBwKAhgMAhoQBB4UBiAUBh4QBB4OAhwOAhoOAhoOBBwQBBwOBBwQBB4QBBwOBBwQBBwOBBoKAhgOBBwOBBoKBg4GBggGBgYGBgQGBgQGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoQEBAKCgoKCgoMDAwODA4ODg4ODg4ODg4ODg4OEA4ODg4ODg4ODg4ODg4MDAwMDAwUFBQuLi4SEhIICAoKCgoODg4ODg4ODg4ODg4OEA4ODg4ODg4ODg4ODg4ODA4MDAwKCgoKCgoQEBAKCgoICAgICAgGBgYGBgYGBgYGBgYGBAYEBAQEBAQEBAQEBAQEBAQGBgYKCgoQEBASEhIQEBAKCgoICAgICAgICAgODg4ODg4ODg4QEBASEhIQEhAICAgICAgICAYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSFBIQEhASEhIQEBAODg4ODg4ODg4ICAgICAgICAgODg4SEhIQEBAODg4ODg4ODg4cDCYYCiQaCiYcDiggECoeDigcDigYCiQWCCIUBiAOAhoQBBwSBh4WCCAYCCIWCCIWCCIWCCIUBiAWCCIWCCIYCiQWCiIYCiIcDCYcDCYWCCAQBB4QBBwSBiAUBiAWCCIWCCIaCiQYCiQWCCIYCCIWCCISBh4QBB4SBh4WBiAWCCIYCCIWCCIWCCIUBiAUCCAWCCIaCiQaDCQWCCIWCCIWCCIYCCIWCCISBh4QBB4SBB4SBh4SBiAWCCIYCCIYCiQaCiQWCCIUBiASBh4QBB4QBB4QBB4QBh4SBh4QBB4OBBwQBBwSBh4SBh4SBh4QBBwOBBwOBBwQBB4SBh4QBBwOBBwQBB4SBB4SBBwOAhoMAhoQBBwQBB4QBB4QBBwOBBwSBB4QBB4SBBwSBB4QBBwQBBwSBh4SBh4SBB4SBB4OBBwOAhoOBBwOAhwQBBwQBBwQBBwQAhoOBBoSBh4SBh4MAhoOAhoQBBwUBiAUBiAQBh4OBBwOBBwOBBwSBB4QBB4QBBwQBBwOBBwQBBwQBBoMAhgOBBwOBBoKBg4GBggGBgYGBgYGBgQGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoQEhAKCgoKCgoMDAwMDAwMDAwMDAwKDAoKCgoKCgoKCgoKCgoKCgoKCgoKCgwKCgoODg4aGhoODg4ICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKDAoMDAwMDAwMDAwMDAwKCgoKCgoQEhAKCgoICAgICAgGBgYGBgYGBgYGBgYGBAQEBAQEBAQEBAQEBAQEBAQGBgYKCgoQEBAQEBAQEBAKCgoICAgICAgICAgODg4QDg4SEhIQEBAQEBAQEBAMDAwODg4ODg4ODAwMDAwKDAoMDAoMDAwMDAwMDAwMDg4ODg4ODg4ODg4ODg4MDAwMDAwMDAwMDAwKDAwKDAoKDAoKCgoMDAwMDAwODg4ODg4MDgwSFBIQEBAQEBAQEBASEhIQDg4ODg4ICAgICAgICAgODg4SEhIQEBAUFBQQEBAODg4cDCYaDCQeDiggECggECogECocDigYCiQYCiISBh4OBBoQBB4SBiAWCCIYCCIWCCAWBiAWCCAYCCIWCCIYCiQWCCIWCCAaCiQaDCYYCiQUBiAUBiAUBiAUBiAWCCIWCCIWCCIaCiQYCCIYCiQYCiQWCCISBB4QBBwSBh4WBiAYCCIWCCIWCCAWCCAWCCIYCCQaCiQcDCYUCCASBh4SBh4UBiAUBiAQBh4QBB4SBh4SBh4UBiAWCCIYCiQWCCIUCCASBiASBh4SBh4SBh4SBh4SBh4SBh4SBiASBh4SBB4QBB4SBBwOBBwOBBwOBBwOBBwOBBwQBBwUBiAUBiAUBh4SBh4QBBwQBB4QBBwQBBwOBBoMBBoOBBwSBB4QBB4OBBwOBBwQBBwQBBwQBBwQBBwOBBwOBBwQBBwSBh4SBh4SBh4QBBwOAhoOBBoQBBwOBBwOBBwQBB4QBBwQBBwUBiAQBB4QBBwKAhoMBBwUBiAUCCISBiAQBB4OBBwQBB4SBB4QBB4QBBwOBBwQBBoOBBoMAhoQBBwOBBgIBgwGBggGBgYEBgYGBAQGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoSEhIKCgoKCgoKCgoKCgoKCgoICAgGCAgGCAYGBgYGBggICAgICAgICggKCgoKCgoQEBAeHh4QEBAICAgKCgoICAgIBggGBggGBggGBgYGCAYGCAgICAgKCgoKCgoKCgoKCgoKCgoSEhIKCgoICAgICAgGBgYGBgYGBgYGBgYGBAQEBAQEBAQEBAQEBAQEBAQGBgQKCAoQEBASEBIQEBAICAgICAgICAgICAgODg4ODg4UFBQUFBQSEhIQEBAMDAwODg4QDg4ODg4ODg4MDAwKDAwKDAwKCgoKCgoKCgoKCgoKCgoMDAoKDAoKDAoKCgwMDAwMDAwMDAwMDAwMDAwMDgwODg4QEBAQEBAQEBAODg4SEhIQEBASEhIUFBQUFBQODg4ODg4ICAgICAgICAgODg4SEhISEhIUFBQQEA4MDA4aDCYcDiggECogEioiEiwgEioeECgaDCYWCCIQBBwQBB4SBh4UBiAYCCIWCCIWCCAWCCAWCCIWCCIWCCIWCCIUBiAaCiQaCiQWCCIWCCIWCCIUBiAUBiAUBiAWCCAWCCIYCiQaCiQaCiQaDCYYCiQUBiAOBBwSBh4SBh4WCCIWCCIWBiAWBiAWCCIYCCIaCiQYCiQUBiASBh4QBBwQBBwSBh4SBh4QBh4SBiAUBiAWCCIYCiQWCCIUBiASBh4SBh4UBiAUBiAUBiASBh4SBh4SBh4SBh4SBh4QBB4OBB4SBh4QBB4QBB4QBB4QBBwMAhoMBBoQBBwSBh4SBh4WCCAUBiAQBh4QBB4QBB4QBB4SBB4OAhoMAhoQBBwQBB4SBB4OBBwOAhoMAhoMAhoOBBoOBBwSBB4OBBwOBBwQBBwSBB4UBiASBh4QBBwQBBwQBBwMAhoOBB4QBBwQAhoQBBwSBiAOBB4QBBwOAhoOBBoSBiAWCCIUBiAQBBwOAhwOAhwSBB4QBB4OBBwOBBoOBBoOBBoQBBwMBBgIBgwGBggGBgYEBgQGBAQGBgQGBgYGBgYGBgYGBgYICAgICAgKCgoSEhIKCgoGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYICAgICAgKCAgICAgKCgoQEBAgICAQEBAICAgKCgoICAgGBgYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYKCgoSEhIKCgoICAgICAgGBgYGBgYGBgYGBgYGBAQEBAQEBAQEBAQEBAQEBAQGBgQICAgQEA4SEhIQEBAICAgGBgYICAgICAgKCgoODg4SEhISEhISEhIQEBAODg4QEBASEhISEhISEhISEhAQEBAQEBAQEBAQEBAQEBAODhAODg4ODg4OEBASEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIQEBAODg4SEhAQEBASEhISEhISEhIODg4KCgoICAgGBggICAYODg4SEhISEhISEhIODg4MDAwcDiYgEiogECokFCwkFi4iFCweDigaDCQUBiAQBB4SBiAUBiAWCCAUCCASBiAWCCIYCCIWCCIUBiAUBiASBh4WCCIaCiQWCCIYCiQYCiIUBiAUBiAWCCAWCCIWCCIYCiIaCiQaCiQaDCYcDiYWCCISBh4SBh4UBiAUBiAWCCISBiAUBiAWCCIaCiQYCiQWCCISBh4OBBwOBBwQBB4SBB4SBB4SBh4SBiAWCCAYCCQYCiQUBiAQBB4SBh4UBiAUBiAUCCAWCCIWCCIWCCAWCCAWCCAUCCAUBiAUBiASBB4QBB4OBBwSBB4SBB4QBBwOBBoOBBwQBBwQBB4QBB4SBh4UCCAUBiASBh4SBh4SBh4SBB4QBBwOAhoMAhoOBBoSBB4SBh4OBBwOAhoOAhoOAhoMBBoQBBwQBBwOBBwQBBwQBBwQBh4WCCIUBiASBB4SBh4QBBwQBB4QBBwMAhoMAhoQBh4SBiAQBB4QBBwQBBoOBBwWBiAWBiAQBBwOAhoOAhoQBBwSBh4QBBwOBBoQBBwOAhoQBBwOBBgKBg4IBggGBgYEBAQEBAQEBgQGBgYGBgYGBgYGBgYICAgICAgKCggSEhIKCgoICAgICAgICAgICAgKCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoGCAgKDAwQEBAgICAQEBAICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAoICAgICAgICAgICAgKCgoSEhIKCggICAgICAgGBgYGBgYGBgYGBgYGBAQEBAQEBAQEBAQEBAQEBAQEBgQICAgODg4QEBIQEBAICAgGBgYICAgICAgICAgKCgoODg4QEBAQEBIQEBAMDAwODg4QEBASEBASEhISEhIUEhQUFBQSFBISEhISEhISEhISEhISEhISEhIQEhAQEhIQEBAQEhISEhISEhISEhISEhAQEBAODg4ODg4ODg4MDAwQEBAQEBAQEBIQEBAODg4KCgoICAgICAgGBgYICAgODg4SEBAQEBAQEBAKDAoKCgogEiwiEiwiEiwkFi4iFCweDigaDCYYCiQSBh4QBh4SBiAWCCIWCCIQBh4UBiAaCiQYCiQSBiASBh4UBiAYCCIYCCIWCCIYCiIaDCYYCCIUBiAWCCAWCCIWCCIWCCIYCCIYCiQYCiQaDCYaDCQWCCAQBB4SBiAUBiAYCCISBiASBh4YCiQaCiQYCCIUBiASBh4QBB4QBB4SBh4SBh4SBh4SBB4SBiAWCCAYCCQaCiQSBiAQBh4UBiAUBiAUCCAWCCIWCCIYCCIYCiQYCiQYCiQYCiQYCiQYCiQYCiIYCCIUBiAQBB4QBB4QBBwQBBwOBBwQBBwQBB4SBh4SBh4QBB4QBh4UCCAYCCIWCCISBiAQBB4SBB4SBB4QBBwMAhoMAhoSBB4UBh4QBBwQBBwQBBwOAhoOAhoQBBwOBBwQBBwQBBwOBBwSBh4UBiAUCCAUBiASBh4SBB4QBB4OBBwMAhoOBBoUBh4UBiAOBB4OBBwQAhwSBBwSBiAQBh4OBBwOAhoOBBoOBB4QBBwQBBwQBBwOBBoOBBwOBBYIBgwGBggGBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYICAgICAgICgoSEhIMDAwMDAwODg4ODg4ODg4QEBASEhASEhISEhISEhIQEhIQEBAODg4GBgYMDAwSEhIgICASEhIGBgYKCgoQEhIQEBAQEhISEhISEhISEhISEhAQEBAODg4ODg4ODg4MDAwMDAwSEhIICgoICAgICAgGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBAQIBgYODg4QEBAQDhAICAgGBgYGBgYICAgICAgKCgoODg4QEBAQEBAQDhAKCgoKCgoKCgoKCgwMDAwMDAwMDAwMDA4MDAwMDAwMDAwMDAwMDAwMDAwMDAwKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAoICAgICAgICAgICAgQEBAQDhAQEBAQEBAODg4KCgoICAgIBgYGBgYGBgYMDAwQEBAQEBAODg4KCgoKCgoiFCwiEiwmFi4iFCweECocDCYaDCYYCiQSBh4SBh4WCCIYCCIUBiASBiAYCiQaCiYUBiAQBB4UBiAYCiQWCCIUCCAWCCIaDCYaDCYUCCAUBiAUBiAWCCIWCCIYCCIYCiQWCCIYCiQcDiYaDCYUBiAQBB4UCCAWCCIWCCISBh4WCCIcCiYYCiQSBiAQBh4UBiASBiASBiASBh4QBB4SBh4UBiAWCCIYCiQYCCISBh4SBh4UBiAUBiAUBiAWCCIWCCIYCiQcDCYcDCYaDCQaCiQaCiQYCiQYCiQYCiQYCiQYCiQWCCISBh4OBBwMAhoOAhwSBB4QBB4QBB4SBh4SBiASBh4QBh4WCCIYCiQWCCIUBiAOBBwQBB4SBB4QBBwOAhoMAhoQBBwSBh4SBh4SBB4QBBwOAhoOAhoOAhoOBBwQBBwOBBwQBB4SBB4WCCIWCCIUBiASBh4QBB4SBB4QBBwMAhoOBBwUBiASBh4QBB4OAhoMAhoQBB4SBh4QBBwQBBwOAhoMBBoMBBoSBh4QBBwOBBwQBBwMBBYIBgoGBgYEBAQEBAQEBAQEBAQGBgYGBgYGBgYIBgYGCAgICAgKCgoQEBAODg4ODg4QEBASEhISEhISEhISEhISEhISEhISEhISEhISEhIODg4GBgYKCgoUFBQgICASEhIGBgYKCgoSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIQEBAODg4ODg4QEBAKCgoICAgGCAgIBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQIBgYODg4QEBAODg4ICAgGBgYGBgYGBgYICAgICAgMDAwQEBAQEBAODg4KCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoQEBAODg4QEBAQEBAMDAwICAgICAgGBgYGBgYGBgYMDAwQEBAQEBAODg4ICAgICAggECgiFCwkFiwiEioeECgcDigcDigWCCISBh4UBiAWCCIWCCIUBiAWCCIWCCIUCCASBh4UBiAYCCIWCCISBiAYCiQaCiQaCiQYCiQUBiAUBiAUCCAWCCIYCiIYCiQYCCIWCCIcDCYcDigaCiQSBh4SBh4WCCAWCCIUBiAUBiAWCCIWCCIUBiASBh4SBiAUBiASBh4SBh4QBh4QBB4WCCAaCiQaCiQYCCISBiASBh4UBiAWCCAWCCAWCCIYCiIcDCYeDigaDCYYCiIWCCIWCiIWCiIWCCIWCCIYCiIYCiQYCiQYCiQWCCAQBB4MBBoOBBwQBB4SBh4SBh4SBh4SBh4SBB4SBh4QBh4UCCAaCiQWCCIQBB4QBBwQBB4QBB4QBBwMAhoMAhoQBBwSBh4UBiASBh4QBB4OBBwOBBwOBBwSBB4QBBwQBBwQBBwQBh4WCCIYCCIUBiASBh4SBB4SBh4QBBwMAhoSBh4WCCIQBB4OBBwMAhoMAhoSBh4UBh4QBBwOAhoOAhoMAhoQBB4SBB4QBBwOAhoMBBYIBggGBgYEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGCAYICAgICAoQEBAQEBAODg4QEBAQEBAQEBAODg4MDgwMDAwMDAwMDAwMDAwKCgwICAgGBgYKCgoSEhQgICIQEBAICAgICAgKCgwMDAwMDAwMDAwMDAwMDAwMDgwODg4QEBAQEBAQEBAODg4QEBAQEBAICAoICAgGCAYGBgYGBgYGBgYGBgYGBAQEBAQEBAQEBAQEBAQEBAQEBgQGCAYODg4QEhAQEBAICAgGBgYGBgYGBgYGBgYICAgMDAwSEhIQEBAQEBAMDAwODg4QDg4ODg4ODg4MDAwKDAwKDAwKCgoKCgoKCgoKCgoKCgoMDAoKDAoKDAoKCgwMDAwMDAwMDAwMDAwMDAwMDgwODg4QEBAQEBAQEBAODg4QEBAQEBAQEBASEhIMDAwICAgGBgYGBgYGBgYIBggODg4SEBISEhIODg4ICAgICAggECgiFCwiEiogECoeECocDigYCiQSBiASBh4UCCAUBiAUBiAWCCAWCCIWCCASBh4UBiAWCCIUCCASBh4WCCIYCCIYCCIaCiQUCCAUBiAWCCIYCiQaCiYaCiQaCiQYCCIaDCQcDCYaDCYUCCASBh4UBiAUCCAUBiAUBiAWCCIWCCISBiASBh4SBiAUBiASBiAUBiASBh4QBh4WCCIYCiQaCiQWCCISBiAUBiAWCCIWCCIWCCAWCCIeDiggECocDigYCiQWCiIaCiQYCiIYCCIWCCIWCCIWCCIWCCIUCCIWCCIYCCIWCCIUBh4QBBwSBh4WCCIWCCIYCCIWCCASBh4SBh4SBiAUBiASBh4UCCAYCCIUBh4QBh4OBBwQBB4QBB4QBB4QBBwOBBoOAhoSBh4WCCISBiAQBh4QBB4OBBwSBB4SBB4OBB4QBBwQBBwSBiAYCCQWCCIUBiASBB4QBB4SBB4OBBwOBBwWCCISBiAQBB4QBBwOAhoQBBwUBiASBiAOBBwOBBoOAhoQBBwSBh4QBBwQBBoMBBYIBggGBgYEBAQEBAQEBAQGBgYGBgYGCAYGBgYGBgYGBgYICAgICAgODg4QEBAKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAoICAgIBggGBgYGBgYICAgSEhIkJCQSEhIKCgoICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoQEBAODg4ICAgICAgGBgYGBgYGBgYGCAYGBgYGBAQEBAQEBAQEBAQEBAQEBAQGBgQGBgYODg4SEhIQEBAICAgGBgYGBgYGBgYGBAYICAgKCgoSEhISEhIQEBAODg4QEBASEhISEhISEhISEhAQEBAQEBAQEBAQEBAQEBAODhAODg4ODg4OEBASEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIQEBAODg4ODg4QEBASEhISEhIKCgoICAgGBAYGBgYGBgYIBggODg4SEhIUEhIODg4ICAgICAgiFCokFCwgECoeDigeDigeDigWCCISBh4UBiAWCCIWCCIYCCIYCCIYCCIUBiASBiAWCCIWCCASBh4SBiAYCCIWCCIaDCYaCiQUBiAWCCIYCiQaDCYaDCYaCiQaCiQaCiQcDigeDigaDCQSBh4UBiAWCCAWCCIYCCIYCCIYCCIWCCASBh4SBh4UBiAUBiAQBh4QBh4SBh4WCCIYCiQYCiQWCCIUCCAWCCIYCCIYCiQYCCIcDiYiEiwgECocDCYYCiQaDCYcDCYaDCYaCiQYCiQaCiQYCiQYCiQWCCIWCCIWCCIUBiAUBiAUBiAWBiAYCCIYCiQYCiQYCiQYCiIWCCIWCCIWCCIUBiAUBiASBh4SBiAWCCAUBiASBh4SBB4SBh4SBB4SBB4QBBwOBBwOBBoSBB4UCCIUCCASBh4OBBwQBBwQBBwSBh4QBB4OBBwSBB4WCCIYCiQWBiAUBiAQBh4SBB4QBBwOAhwSBiAWCCISBh4SBB4QBBwMAhoQBh4WCCIQBh4OBBwOBBwOBBwSBh4OBBwOBBwOBBgIBggGBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgQDhAQEBAICAgICAgICAgICAgKCAoKCgoKCgoKCgoKCgoICAgICAgICAgGBgYEBgYQEBAoKCgSEhIMDAwKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAoICAgICAgICAgICAgQEBAQDhAICAgICAgGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBAQGBgYOEA4UFBQSEhIICAgGBgYGBgYGBgYEBAQICAgKCAgSEhIUFBQSEhIMDAwODg4QEBASEBASEhISEhIUEhQUFBQSFBISEhISEhISEhISEhISEhISEhIQEhAQEhIQEBAQEhISEhISEhISEhISEhAQEBAODg4ODg4ODg4MDAwMDAwSEhIUFBQSEhIKCAgICAgEBAQGBgYGBgYGCAgODg4UFBQUFBQMDAwICAgICAgiFCwgEioeECgeDigcDiYeDiYWCCAUBiAWCCIYCiQcDCYaCiQaCCIWCCIWCCIWCCIWCCIUBiAUBiAUCCAaCiYcDCYcDiYYCiQYCiQaCiQaDCYcDCYaDCYaCiQYCiQaDCYcDCYeDigYCiISBh4UBiAWCCIaCiYaDCYaCiQYCCIWCCIUCCAWCCAWCCAUBiAQBh4SBh4YCCIYCiQaDCQWCCIWCCIWCCIaCiQaDCYYCiQeDigiEiweDigcDCYeDigcDCYaDCYYCiQaDCQcDCYaCiQaCiQYCiQWCCIWCCIWCCIYCCIWCCISBiASBh4WCCIYCCQYCiQYCiIYCiQaDCYYCiQYCiQYCCIWCCIUBiAUBiAQBB4QBh4UCCAWCCAUBiASBiASBB4QBB4QBB4QBB4QBBwQBBwSBh4WCCIUBiAQBBwOAhoOAhoQBB4SBh4QBBwOBBwSBiAYCCIYCCISBiASBh4SBh4SBB4QBBwQBBwUCCAWCCAQBB4SBB4QBBwOBBwUBiAUBiIQBB4QBB4MAhoQBh4QBB4OBBwOBBgIBgoGBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGCAgICAgQEBAQEBAMDAwODg4ODg4ODg4QEBASEhASEhISEhIQEhAOEBAODhAQEBAGBgYEBAQODg4qKioQEBAKCgoKCgoQEBAQEBAQEhISEhISEhISEhISEhAQEBAODg4ODg4ODg4MDAwQEBAQEBAICAgGCAgGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBAQGBgYODg4UFhQSEhIICAgGBgYGBAYEBAQEBAQICAgICAgSEhIWFhYSEhIKCgoKCgoKCgoKCgwMDAwMDAwMDAwMDA4MDAwMDAwMDAwMDAwMDAwMDAwMDAwKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAoICAgICAgICAgICAgKCgoSEhIWFhYSEhIICAgICAgEBAQEBAQGBgYGBgYODhAWFhYUFBQKCgoGCAYGBgYiFCwgECgeECoeDigcDiYcDCYWCCIYCCQWCCIaDCYaCiQYCiQYCCIYCiIWCCIWCCIWCCAUBiAUBiAYCCIcDigcDigYCiQYCiQaDCYaDCYcDCYcDCYcDCYaCiQYCCIaDCYcDigcDCYWCCAYCCIWCCIYCiQaDCQYCiQYCiQYCCIWCCIWCCAWCCASBiASBiASBiAWCCIYCiQaCiQWCCIWCCIYCCIYCiQaDCQYCiQeECgiEiweDigcDigcDigaCiQYCiIYCiQWCCIWCCIWCCAWCCAWCCAWCCIWCCIWCCAWCCAYCCIWCCIUCCAUBiAUCCAWCCIWCCIWCCIWCCIWCCIYCiQcDCYYCiQYCCQWCCIUCCIUBiAQBB4QBB4WCCIYCiQWCCISBiASBh4QBB4SBh4QBB4QBBwSBBwUBh4UBiAQBB4OAhoOAhoOBBwQBh4QBBwQBBwQBBwUCCAYCiQWBiASBh4SBh4SBB4QBB4QBBwSBh4WCCISBh4QBB4QBBwOAhwQBh4WCCISBh4SBiAOBBwQBBwSBh4QBBwOBBoIBgoGBgYEBAQEBAQEBAQGBAYGBgYGBgYGBgYGBgYGBgYGBgYICAgQEBASEhAODg4QEBASEhISEhISEhISEhISEhISEhISEhIQEhISEhISEhIGBgYCAgIODg4oKCgQEA4KCgoICAgSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIQEBAODg4SEhAQEBAICAgGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBgQGBgYMDA4WFhQSEhIICAgGBgYEBAQEBAQEBAQGBgYGBgYQEBAWFhYSEhIICAgGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBggICAgIBgYGBggGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYKCgoSEhIWFhYQEBAGBgYGBgYEBAQEBAQGBgQGBgYODg4WFhYSEhIICAgGBgYGBgYgEiogEiogECoeDiggECocDCYYCiQYCiQaDCYcDCYaDCYaCiQYCCIWCCIWCCIYCCIWCCAUBiAUCCAcDCYeDigaCiQWCCAaCiQcDCYcDCYeDigeDigaDCYYCiQaCiQcDiggECgcDCYYCiQaDCYYCiQcDCYaDCYaDCYYCCIWCCIWCCIWCCIWCCIUCCASBiAWCCIWCiQaDCYWCCIWCCIYCiQYCiIYCiQWCiIcDiYiEiwgECoeECocDCYYCiQYCiQYCiQWCCIWCCIWCCIWCCIYCiQYCiQYCiQWCCIUBh4UBiASBB4QBh4UBiAWCCIWCCIWCCIYCCIYCCIYCiIYCiIWCCIYCiQeDigYCiQYCCIWCCISBh4SBh4SBh4QBB4UCCAaCiQWCCIUBiASBh4SBh4QBh4QBB4QBBwSBBwUBiASBiAQBBwQAhwMAhoMBBwOBBwSBB4QBB4SBh4YCCIYCCIUBiASBh4SBh4SBB4OBBwQBB4UBiAUBiAQBB4SBB4QBBwOBBwUBiAUCCAUBiASBiAOBBwSBh4QBBwQBBoIBgoGBgYEBAQEBAQEBAQGBgQGBAYGBgYGBgYGBgYGBgYGBgYICAgQEBASEhIODg4QEBAQEBAQEBAODg4MDgwMDAwMDAwMDAwMDAwMDAwMDAwICAgCAgIODg4iIiIODg4ICAgICAgKCgwMDAwMDAwMDAwMDAwMDAwMDgwODg4QEBAQEBAQEBAODg4SEhIQEBAICAgGBgYGBgYGBgYGBgYGBgYGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBgQGBgYMDAwUFBQQEhIICAgGBgYEBAQEBAQEBAQGBgYGBgYODg4WFhYSEhIICAgKCgoKCgoKCgoICAgGCAYGCAgGCAgICAgICAgICAgICAgICAgKCggICAgICAgICAgIBggGBggGBggGBgYGCAYGCAgICAgKCgoKCgoKCgoKCgoKCgoSEhIWFhYODg4GBgYGBgYEBAQEBAQGBgQGBgYODg4WFhYSEhIICAgGBgYGBgYeECggECoeDigeECggECoYCiQaCiYaDCYeDigcDCYcDigaCiQWCCAWCCIYCCIWCCAWCCAWCCIYCiQcDCYcDCYWCCIYCiQeDigeDigcDiYgECocDigcDiYcDCYcDCYeDigeDigaCiQYCiQaDCYeDigcDiYcDiYaDCYYCCIWCCAYCiIWCCIWCCIWCCIWCCIYCCQcDCYYCiQWCCIYCiQYCiQWCCIYCiQcDiggEiogECoeDigaDCYaDCYcDCYYCiQWCiIWCCIYCiQaCiQYCCIUCCAWCCISBiAQBBwSBh4aFCgWECYOBBwUBiAYCCIWCCIWCCIWCCIaCiQYCiQYCiQaDCQYCiQYCiQeDigaCiQWCCIUBiASBh4SBh4SBiAQBh4UCCAaCiQWCCIUBiASBiASBB4QBB4QBBwQBBwSBh4UBiASBh4QBBwOAhoMAhoMBBoSBh4SBB4SBh4UBiAYCCIWCCISBh4SBh4SBh4SBh4QBB4SBh4UCCASBh4QBB4QBB4QBBwSBh4WCCIWCCAUBiAOBh4QBh4QBBwQBBwIBgoGBgYEBAQEBAQEBAQEBAQEBgQGBgYGBgYGBgYGBgYGBgYICAgQEBASFBIMDgwODg4ODg4MDAwMDAwKCgoKDAoKDAoKDAwMDAwMCgoKCgoICAgCAgIMDAwkJCQQEBAICAgICAgMDAwMDAwMDAwKDAwKDAoKDAoKCgoMDAwMDAwODg4ODg4MDgwSFBIQEBAICAgGBgYGBgYGBgYGBgYGBgYEBgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYKCgoUEhIQEhAICAgGBgYEBAQEBAQEBAQGBgYGBgYMDAwUFBQQEhAKCgoMDAwMDAwMDAwMCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKDAoMDAwMDAwMDAwMDAwKCgoKCgoQEhAUFBQMDAwGBgYGBgYEBAQEBAQGBgYGBgYODg4UFBQODg4GBggGBgYGBgYgECgiEiwgECogEioeDigYCiQcDCgeDiggECoeECgcDCYWCCIWCCIWCCIWCCIWBiAUBiAWCCIYCiQcDCYWCCIYCiQaDCYcDCYcDCYeECggECogECogECgeDigeDigeDigeECgYCiQcDCYeDiggECogDioeDigYCiQWCCIYCCIYCCIWCCAUBiAWCCIWCCIcDCYaCiQWCCIYCiQYCiQWCCIWCCIeECgkFC4iEiweDigcDCYeDigcDigYCiQWCCIYCiQaCiQYCiQWCCAQBB4OBB4QBB4QAhwSCCAcGCogJjQcIjISBh4OBBwUBiAUBiAWCCIUBiAWCCIaDCQaDCYaDCYcDCYYCiQaDCYeDigcDCYYCiIWCCAWBiAUBiAUBiASBh4UBiAaCiQWCCISBiASBB4QBB4QBB4QBBwSBB4WCCAWCCISBh4OBBwOAhoMAhoQBB4SBh4UBh4UBiAYCCIYCiQWCCAQBB4SBh4SBiASBiAUBiASBiAUBiASBh4SBh4OBBwQBBwUBiAYCCIWCCISBiAQBh4QBBwQBBoIBgoGBgYEBAQEBAQEBAQEBAQEBAQGBAYGBgYGBgYGBgYGBgYICAgQEBASFBIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYICAgEBAQCAgIODg4mJiYQEBAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSFBIQEBAICAgGBgYGBgYGBgYGBgYGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgSEhAQEBAICAgGBgYGBAQEBAQEBAQGBgYGBgYKCgoSEhIQEBAKCgoMDAwODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OEA4ODg4ODg4ODg4ODg4ODA4MDAwKCgoKCgoQEBASEhIKCgoGBgYGBgYEBAQEBAQGBgYGBgYODg4UFBQMDAwGBgYGBgYGBgYgECoiEiwgECogEiocDCYcDCYgECogECogEioeECgeDigYCiQYCiQYCCQWCCIUBiAWCCIYCCQcDCYYCiQWCCIcDCYcDCYYCiQaCiQgECoiFCwiFCwgECgeDigeECggECoeECgaDCYgECogECogEiogECoeDigaDCQYCiQYCCQYCCIWCCAUCCAYCCIaCiQcDCYUCCIYCiQYCiQYCiQUBiAcDiYiEiwgECogECoeDigeDigYCiQWCCIYCiQaCiYYCCIUCCIWCCIUBiAQBB4QBB4QBBwSBh4cHCwiKjYgKDQeKDQWECYQAhwWBiAUBh4SBh4WCCIWCCIUCCAaCiQaCiQaDCQcDCYaDCQaCiQeDigeDigaCiQWCCIWCCIUBiAUBiASBB4UBiAYCiQUCCAUBh4SBiAUBiAQBB4OBBwUBh4WCCIUBiAUBiASBh4OAhoOBBwUCCASBh4UBiAWCCIYCiQWCCISBiASBh4SBh4UBiASBiASBh4SBiASBiASBh4SBh4QBB4SBh4WCCIWCCIWCCASBh4QBBwQBBwIBggGBgQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYKCAgQEBAUFBIICAgKCggKCgoKCgoMCgoMDAwMDAwMDAwMDAwMDAwKCgoICAgGBgYGBgYMDAwmJiYQEBAICAgICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCgoKCgoKCgoKCggICAgUFBIQEBAKCAgGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAYGBgYODg4QEA4ICAgGBgYGBAQEBAQEBAQGBgYGBgYICAgQEBAQEBAICAgKCgoKCgwMDAwMDAwMDAwODg4ODg4ODg4MDgwMDAwMDA4ODgwMDAwMDAwKCgoKCgoKCgoKCgoMDAwKCgoKCgwKCgoKCgoICAgICAgICAgICAYICAgQEBAQEBAICAgGBgYGBgYEBAQEBAQGBgYGBgYMDAwQEBAKCgoGBgYGBgYGBgYgECogECogECogECocDCYgECogECoiEioiFCwiEiweDigaDCQaCiQYCCQWCCIWCCIYCiQcDCYcDigYCCQaDCYcDCYaDCQWCCIcDiYiFCwiFCwgECoeDigeDigeECggEiocDiYeDiggECogECoiFCwiEiwgECoaDCYaCiQYCiQWCCIWCCAYCiIaCiQeDigYCiQYCiQcDCYaDCYWCCIYCiQiEiweDigaDCYeECgeDigYCiQaCiQaDCYaDCYaCiYSBiAWCCIYCiIUBh4SBB4SBB4QAhwYEigiKDYiKDQgJjQgKDQaHC4QBB4WBiAUBiAQBBwUBiAaCiQYCCIUBiAWCCIYCiQaDCQcDCYcDCYaDCYeDiggECoaCiQYCiQWCCIUBiAUBiASBh4SBiAYCiQUBiASBiAUCCAUBiAQBB4UBiAYCCQYCCIUBiAWCCIQBh4KAhoUCCAUBiASBh4UCCIYCiQYCiQUBiASBh4UBiAUBiAUBiASBh4SBh4SBh4SBB4SBiAQBh4SBh4SBiAWCCIWCCIUBiAQBB4QBBwGBggEBgQEBAQEBAQEBAQEBAQEBAQGBAYGBgYGBgYGBgYGBgYKCgoODg4UFBIODAwOEBASEhISEhIUFBIUFBQWFBYWFhYUFhQUFBQUFBQODAwGBgYGBgYMDAwgICAODg4ICAgICAgUFBYUFBQUFBQUFhQWFhYWFBYUFBQUFBISEhISEhIOEBAODAwUFBIODg4KCgoGBgYGBgYGBgYGBgYGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgQGBgYMDAwODg4ICAgGBgYGBAYEBAQEBAQGBgYGBgYGBggMDAwODg4GBgYGBgYGBgYGBgYGBgYGBgYICAgIBggICAgGCAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgODg4MDAwGBggGBgYGBgYEBAQEBAQGBgYGBgYMDAwMDAwICAgGBgYGBgYGBgYeDigeDigeECgeDigeECoiEiwgEiokFi4kFi4gEiocDCYYCiQYCiQYCiQYCCIaCiQYCiQcDigYCiIYCiQcDCYcDCYWCCIaDCQiEioiEiwgECocDCYeDioeDigeDigeDigcDigiEiwgECokFCwkFi4iFCweDigaDCQYCiQYCiQYCCIaCiQYCiQcDiYaDCQYCiIaDCYaDCYYCiQWCCIgECogECoaDCYeDiggECoYCiQeDigcDigaDCYcDCYWCCISBh4aCiQWCCISBiASBh4SBB4SBB4cGCokKjYgJjQeJjQeKDQcIDAQBB4UBiAUBh4QBB4OBB4UBiAYCiQYCiQUCCIWCCIWCiIYCiQcDCYeDigeDigaDCYaDCYaCiQYCCQWCCIUBiASBh4SBB4WCCIWCCIUBiAUBiAUBiAUBiASBh4WCCIaCiQUCCAUBiAUCCIMAhoQBh4YCiQSBh4WBiAWCCIaDCQYCCIUBiAQBh4SBh4SBiASBiASBiASBh4SBB4SBh4SBiAUBiASBiAUBiAWCCIUBiAQBB4QBB4GBggEBgQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGCAYKCgoODg4SEhIODg4QEhASEhISEhISEhIQEBAQEBAQEBAOEBAOEBAQEBAMDAwGBgYGBgYMDAwgICIODg4GBgYICAgODg4QEBAOEBAQEBAQEBAQEBAQEBASEhISEhISEhIQEhAODg4SEhIODg4KCgoGCAYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgKDAoICAgGBgYGBAYEBAQEBAQEBAQGBgYGBgYICAgKDAwCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIICAgKDAwICAgGBgYGBgYEBAQEBAQGBAQGBgYGCAYKCgoKCgoGBgYGBgYGBgYGBgYcDCYcDigeDigeECgiFCwiEiokFiwiFCwgEiocDCYaDCYYCiQaDCYYCiQaDCYaDCYcDiYcDCYYCiQcDiYeDigaCiQYCiQiFCwiFCwgECoeDigcDigcDigcDigcDCYcDiYiEiwiFCwiFCwkFiwiEioeDigaDCYYCiQaDCQYCiQYCiQcDCYaDCYeDigYCiIcDCYcDCYaCiQWCiIeECgiEiweDigcDigiEiwcDCYeECogECoWCCIaDCQcDCgSBiAUCCIaCiQWCCISBiAUBiAUBiAUCCAeHC4iKjYgJjQeJjQeKDQcIDAQBB4WCCIWDCQSBiAQBB4QBiAWCCIaCiQWCiQWCCIYCiQYCiIYCiQcDCYcDigaCiQYCiQcDCYYCiQWCCIUBiAUBiAUBiASBiAYCiQWCCIUBiASBiAUCCIUBiAUBiAYCCIYCCISBiASBiAQBB4QBB4YCCIWCCISBh4SBiAYCiQaCiQUBiAQBh4SBh4UBiASBiAUBiAUBiASBh4SBh4UBiAUBiAQBh4SBiAWCCISBiAOBBwSBB4GBggEBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYICAgKCgoODg4SEhIODgwODg4ODg4ODg4MDAwKDAoKCgoICgoICAoICAgIBggKCgoICAoGBgYMCgweHB4ODA4GBgYGBgYICAgICAgICAgICAoKCgoKCgoKDAoMDAwODg4ODg4ODg4ODgwSEhIODg4KCgoICAgGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgYGCAYICAgICAgGBgYGBAQEBAQEBAQEBAQGBgYGBgYICAgICAgEBAQEBAQGBAQEBAQEBAQCBAICAgICAgICAgICAgICAgIEAgIEBAQEBAQCBAICAgICAgICAgICAgICAgICAgICBAICBAQEBAQEBAQGBgYGBgYEBAQICAgICAgICAgGBgYGBgYEBAQEBAQEBAQGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYcDCYeDigcDiggECoiEiwkFCwmFi4iEioeDigcDCYcDCYcDigYCiQWCCIcDCYeECgeECoYCiQcDiYeDigcDiYaCiQiFCwkFi4gECoeDiggECocDCYaDCYcDCYcDCYeDigiEiwiEiwmFi4kFCwgECgcDCYaDCYcDigaDCYUCCIaDCYcDiggEioaCiQaDCYeDigcDigaCiQeECgkFi4gECoeECgiFC4gECocDCYgEiwaDCQWCCIeDigaCiQSBh4aDCYYCiQUBiAUBiAUBiAWBiAWCiIgJDIgKDQgJjQeJjQeJjQeJDQSCiIUCCAcFCoUCCIQAhwSCiIYFioYCCIaCiQYCiQYCiIaDCYaCiQcDCYcDCgcDCYYCiQaDCYeDigYCiIWCCIUBiAUBiASBh4WCCIYCCQUBiASBh4SBh4WCCIUCCAWCCIYCiQWCCISBh4SBh4QBh4WCCIYCiQUBh4QBBwWCCIaCiYWCCIUBiAUBiAWCCIWCCASBh4YCCIUBiASBiASBiAUBiASBh4SBiAWCCIUCCAOBBwSBB4GBgYEBAQEBAQEBAQEBAQEBAQEBAQGBAQGBgYGBgYGBgYICAgKCgoMDAwSEhIMDgwODg4ODA4ODg4QEBAODg4QEBAODg4ODg4MDAwMDAwMDAwICAgGBgYICAgQEBAKCgoICAgICAgKCgoKCgoMDAwMDAwODAwQEBAODg4QEBAODg4ODA4ODg4MDgwSEhIMDAwKCgoICAgGBgYGBgYGBgYGBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYGBgYICAgGBgYGBgYEBAYEBAQEBAQEBAQEBAQGBgYGBgYICAgEBAQGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBgYICAYIBggGBgYGBgYGBgYICAgGBgYGBgYEBAYEBAQEBAQEBAQGBgYGBgYGBggGBgYGBgYEBgQGBgYGBgYcDCYcDigeECggECogECokFCwiFCwgECoeECgcDCYcDigaCiYUCCIcDigeECgiEioaDCYcDiggECoiEiwcDCYiEiooGjAgEiocDCYgECoeDigaCiQaDCYcDCYcDCYgECogECgiFCwkFCwgEiogECocDigcDCYcDCgUCCIaDCYeECggEioeECgaDCYgECoiEiweDigeDiYmGDAiEiwgECgiFCwmFi4cDiYgEiocDCYWCCIcDCYeDigSBh4UCCAcDCgWCCIUBiAUBiAWBiAYCCIaEiggKDQgKDQgJjQeJjQeJjQeJjYUECYUBiAcFiwUCiIQBB4SBiAYFioYEigUBiAaCiYWCCIaDCYcDCgcDCYcDCYaDCYcDCYYCiQcDiYgECoYCCIUCCAUCCASBh4SBh4YCCQYCCIUBiAQBB4SBh4WCCIUCCIYCiQYCiISBh4SBh4SBh4WCCIYCiQUCCAQBBwUCCAaDCYWCCIWCCIUBiAUBiAYCCIUBiAYCCQWCCIQBh4QBh4SBiAUBiASBh4SBiAWCCIOBBwOBBwEBgYEBAQEBAQEBAQEBAQEBAQEBAQGBAQGBgYGBgYGBgYICAgKCgoKCgoMDAwMDAwODg4ODg4QEBASEhIUFBQUFBQQEhAQEBAMDAwMDAwMDAwICAgGBgYGBgYICAgICAgGBgYGBgYICAgMCgoMDAwQDhAQEBASEhISEhISEhIQEBAODg4ODg4MDAwMDA4KCgoKCgoICAgGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAYGBgYGBgYGBAYGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgICAgICAgICAgICAoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgQEBAYEBAQGBgYGBgYGBgYEBAQEBAQGBgQGBgYYCiQcDCggEiogECogEioiFCwgEiogECoeECocDCYaDCYYCCIeDigiEiwkFi4eECgcDCYgEiwkFCwgECogECgoGjIkFi4eDigcDCYiECoaDCYaCiQaDCYaCiYeDiggEiogECoiFCwiEiogECogECocDiYcDCYYCiQaCiQgECokFCwiFCwcDCYgECoiFCwiEioeDiYmGC4mFi4gECokFC4oHDIiFCogEioiEiwYCiQaCiQgECoaDCQSBBwaDCYaCiQUCCAUBiASBiAWCCIYCCIcGiwgKjYgJjQeJjQeJjQeJjQeJjYWFioUBh4cHC4WECYSBB4SBh4WCiIYEigSBiAaCiQaDCQWCCIcDCgcDCYcDCYaCiYaDCQcDiYaDCQgECoeECgWCCIWCCIUBiAQBh4WCCIYCiQWCCASBh4SBh4SBiAWCCIYCiQYCiQUBiASBh4UBiAYCCIWCiQWCCIWCCAWCCIaDCYYCiQUBiAUCCAWCCIYCCIYCCIYCiQYCCQSBiASBiAUBiAUBiASBh4SBiAWCCIQBBwOBBwGBgYEBAQEBAQEBAQEBAQEBAQEBgQGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwODg4OEA4QEBASEhIUFBQWFhYUFBYSFBIQEhAODg4MDAwICggICAgGCAYGBgYGBgYGBgYGBgYICAgICggMDAwODg4QEhASFBIUFBYWFhYUFhQSEhIQEBAOEA4ODg4MDAwKCgoKCgoICAgICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgYGBgYGBgYGBAQGBgYGBgYGBgYGBgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgQCAgICAgIEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBAQGBgYGBgYGBgYEBAQEBAQEBAQEBAQYCiQgECogEiogEioiFCwiFCwgECgeDigcDigeDigYCiQcDCYiEiokFiwkFCwcDCYgECokFi4kFi4gECgoGjAkFiweDigeDigiEiweDigYCiQaDCYaDCYaCiQgECogEioiEioiEiweECgeDigcDigeDigcDCYYCiQiEioiFComGC4eDigeDigiFCwmGC4gECokFiwoGjAeECgcDigoGjAoGjAiEiokFi4cDigYCiQeDigiEioUCCAWCCAcDiYWCCIWCCISBh4WCCIYCCQWCiQcIjIgKDYeJjQeJjQeJjQeJjQeJjYYHC4SBh4cHjAYFCgSBB4UBiAYCCIYDCQSCCAYCiQcDCYYCiQWCCIcDigeDigeDigYCiQYCiQeDigcDCYiEiwcDigWCCIWCCIUCCAUBiAYCiQYCiQUBiASBh4SBB4UBiAaDCYaDCQWCCIUBiASBh4YCiIYCiQWCiIWCCIaDCYaDCYcDCYYCiQWCCIWCCIWCCIWCCIYCiIYCiQUCCIUBiASBiAWCCIUBiAUBiAYCCISBiAQBBwEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAYGBgYGBgYICAgKCgoKCgoKCgoMDAwQEA4SEhISEhIWFhYaGBgaGhoaGhoYGBgWFhYUEhQQEBAODAwICAoICAgICAgGBgYICAgICAgICAoODgwQEBAUEhQWFhYYGBgaGhoaGhoaGBgWFhYSEhISEhIQEA4MDAwKCgoKCgoKCgoICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAYGBgYEBAQGBgYGBgYGBgQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQcDCYgECogECogEioiEiogECgeDigeDigcDiYcDigYCiQiFCwmGC4oGjAgECgiEiomGC4oHDAkFCwmGi4oGjAeECgaDCYkFCwkFCwYCiQaDCYcDCYYCiQcDCYgECogEioiFCwgECgeDigeECgcDCYeDigYCiQeECgkFi4oGjAiFCogECgkFCwoGjAmFi4kFiwoHDIiFCwaDCYgECoqHDIiEiokFi4iEioaDCYaCiQiEiweECgQBh4cDCYaDCYYCiQUBiAUBiAYCiQYCCIYFCgeKDQeJjQeJjQeJjQeJjQeJjQeKDYaHi4SBiAcHjIaHC4SBh4UBiAYCCIaDiYWECYYCiQaDCYcDiYaCiQaCiQgECogECoaDCYWCCIaDCYeDigeDiggECoYCiQYCiQWCCIUCCAWCCIYCiQWCCISBh4QBB4SBiAaDCQcDCYYCiQWCCIQBh4WCCIaDCYYCiQWCCIaDCYcDCgeDioaDCYUBiAWCCIWCiIWCCIYCiQYCiQWCCIUBiAUBiAUCCAWCCIWCCIYCCIWCCASBh4EBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYICAgKCgoMDAwODg4UFBIWFhYWFhYYGBgaGhoaGhoaGhoaGhoYGBgWFhYUFBQSEhIQEBAMDAwKCgoICAgICAgICAgKCgoMDAwQEBASEhIUFBQWFhYYGBgaGhoaGhoaGhoaGhoYGBgWFhYWFhYUFBIODg4MDAwKCgoICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgQGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAQGBgYEBAQEBAQEBAQCBAQCBAQCAgQCAgQEAgQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICBAQEBAQEBAQEBAQGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgQGBgYEBgYEBAQEBAQEBAQEBAQEBAQEBAQeECggECogECoiEiwiEiwgECoeECoeDigeECgYCiQaDCQmFi4oHDIkFiwgEiokFiwoGi4mFiwmGC4qHDIiFCweECggECgoGjAeDigaCiQeDigcDCYaCiYcDiggECgkFiwiFCwgECogECoeDigeDigcDiYWCCIiFCwoGjAmGjAgECokFCwmGC4mGC4kFiwqHjImGC4gEiocDiYmGDAkFCwiEiokFCweECgaCiYcDigkFCwYCiIUCCAeDigcDCYYCiQSBh4WCCIYCiQWCCIaHi4eKDQeJjQcJjQcJjQeJjQeJjQeJjYcJDQWECgaGi4aHjAUBiAUBiAYCCIaDigYFiwaDigaDCYYCiQeDigaCiYcDigeDigcDiYaDCQYCiQcDigeECggECocDigYCiQYCiQWCCIUCCAYCiQYCiIUCCASBh4SBB4YCiQgECoYCiQWCCIUBiASBiAaDCYaDCYYCiQaDCYaDCYcDigeECoWCCAWCCIYCiQWCCAYCiQaCiYYCiQWBiAWCCIWCCIWCCAYCCIYCiIUBiAUBiAEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAQEBgYGCAgKCgoMDAwODg4WFhYaGhoaGhoaGhoaGhoYGhgYGBgWFhYUFBQUFBQSEhIODg4MDAwMDAwKCgoKCgoICAgICAgICAgKCgoKCgoMDAwMDAwODg4SEhIUFBQUFBQWFhYYGBgYGhgaGhoaGhoaGhoaGhoWFhYODg4MDAwKCgoGCAgEBgYGBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAYICAgICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQgECogECogEiokFCwgEiogECoeECgeECggECoUCCIeECgoGDAmGi4gECokFC4mGC4mGC4mFiwqHjImGC4gECogEComFi4iEioaDCYcDigeDigaDCYaDCYgECokFiwmGC4eDiggECogECoeDigiEioYCiQaDCQmFi4oGjAiEioiEiwmGC4oGjAkFiwqHDAoGjIiEiweDigkFCwmGC4eDigiFCwgECgeDigaCiYgEiwgEioWBiAcDCYeDigeDigUCCISBh4YCiIYCCIWDiQcJDQcJjQcJjQcJjQcJjQcJjQcJjQcJjQcKDYaGi4aFCoYGiwSBiAUBiAYCCIcDigYIDIcGC4cDCYWCCIeDioeDigcDiYeECoaDCYeDigaDCYaDCYeECgiEiwgECoYCiQaCiQYCCIWCCIYCiQaDCQYCCISBh4SBh4YCCIeDigcDCYWCCIWCCIUBiAWCCIaDCYWCiQYCiQaCiQWCCIgEiwYCiQWCCIaDCYYCiIWCCIaDCYYCiQUCCIWCCAWCCIYCCIWCCIWCCIWCCAWCCIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAYGBgYICAgKCgoMDAwSEhIYGBgaGhoaGhoaGhoYGBgWFhYWFhYWFhYWFhYWFhYWFBYUFBQUFBQUFBQUFBQUFBQSEhIUFBQUFBQUFBQUFBQUFBQWFBYWFhYWFhYWFhYWFhYWFhYYGBgaGhoaGhoaGhoYGBgSEhIMDAwKCgoICAgGBgYGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgQCAgICBAQEBAQEBAQGBgYICAgICAgICAgICAgKCAoKCgoICggICAgICAgICAgICAgICAgICAgICAgICAoICAgICAgICggKCgoKCAoICAgICAgICAgGBggGBgYEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQgECogECogECgiEiwgECggECoeECggECgaDCYUCCIkFiwoGjAkFiwgEComGC4oGjAkFCwoGjAoGjAiEioeDigiEiwiFCwcDiYeDigeDigcDiYYCiQeDigkFCwqHDIiFCweDiYgECoeECoeECgeECgSBiAgEigoGC4oGjAgECgkFi4oGjAmFi4kFiwqHDIkFCwgECogECokFi4cDigeDiggEiogECgeDigaDCYiFCwaDCQYCiIeECggECocDigSBh4UBiAaCiQYCCQYFiwcJjYcJjQcJjQcJDQcJDQeJjQcJjQcJDQcKDYaHC4aFCoYHjASCCIUBiAYCCIaDCYYIjIcHjIcDCYYCCIcDCggECoeDiggECocDCYeDigeECocDCYcDCYgECogECoaDCQYCiQYCiQYCCIYCCIYCiQaCiQWCCIQBh4SBiAaCiQaDCYWCCIWCCIUCCIWCCAcDCYaDCYYCiQaCiQWCCIcDCYcDCYYCCIcDCYaDCYYCiQcDCYaCiQWCCIUBiAWCCAYCCIWCCIYCCIWCCIUCCIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAYGBgYGBgYICAgKCgoODg4QEBAQEBAQEBAQEBAODg4ODg4ODg4ODg4MDAwODg4ODg4ODg4ODg4MDAwODg4ODg4ODg4ODg4ODg4MDAwODg4ODg4ODg4ODg4MDAwODg4ODg4ODg4ODg4QEBAQEBAQEBAQEBAODg4KCgoICAgGBgYGBgYGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgIEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgQCAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQgECgeECggEiogEiogECogEiwgECogECoWCCQcDiYmFiwoGDAgECgiFCwmGC4kFiwgEiomGDAkFiwgECogEioiFCwgECoeECoeECggECgaDCYYCiQkFCwmGDAmGC4gECggECgiEiwgEiogEioaDCYWCiQkFCwoGC4kFCwgEiomGC4mGC4gEiokFiwmGC4iEiogECoiFCwgEioYCiQeDiggECogECocDCYeDigiEiwYCiIcDiggECogECoYCiQUBiAYCCIaCiQYCiQaHjAcJjYcJjYcJjQcJDQcJDQcJjQcJDQcJDQcKDYcGi4aEigaJDQUDiQWBiAYCCIcDigYIDIaIjQeECgYCCIaCiYgECoeDigiEiweECoeDigeECocDigcDCYeDigiEiwcDiYYCiIYCiQYCCQWCCIWCiIaCiQYCCISBiASBiAYCiQcDCYYCiQaDCYYCiIWBiAaCiQeDigYCiQYCCIWCCAWCCAcDCYYCiQaCiQaDCYYCiQcDCYcDCYYCiQUBiAWCCIWCCIWCCIWCCIWCCIWCCIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgQGBgQGBgYGBgYGBgYICAgKCgoODg4MDAwKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoMDAwODg4KCgoICAgGBgYGBgYGBgYGBgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCBAQCAgICBAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAIEAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQgECgeDiggEiogECggECogEiogEioeDigYCiQiEiomFi4kFi4eECgkFCwiEiogEioiEiomGC4iEioeDiggECogEioeDiggECoeDiggECoWCCIcDiYmGC4oGjAkFCweDiYgECogEiogEiogECoYCiQeECgkFCwoGDAeECgiFCwiFCwiEiogECokFi4kFCweECggECoiEiwcDCYaDCQeDioeECoeDigcDCYiEiweDigcDCYiEiwiEiwgECoWCCIUCCAaCiQaCiQWDiYcJDQcJjYcJDQcJDQcJDQcJDQcJjQcJjQcJDQcJjYaGi4aEigcJDQUDiQUBiAYCiQcDigYIDIYJDYeFCwaCiQaDCQgEioeDigiFCwiFCweECgiFCwaDCYeDigeECoiEiwiEiwYCiQWCCIYCiQWCCIWCCIYCiQYCiQWCCIYCCQYCCIcDCYYCiQeECgcDiYUBiAWCCIeECgaDCYYCCIYCiIWCCAYCCIaCiQaDCYcDCYYCiQaDCYcDCYaCiQWCCIYCCIYCiQYCiQYCiQSBiAWCCIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYMDAwSEhIUFBQWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYUFBQSEhIMDAwGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCBAQEAgQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgIEBAQEBAIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQgECoeDigeECgeDiggECoeECggECgYCiQYCiQiEiwmFi4gECoeECgiEiogEiggECoiFCwkFCweECgeDigeECoeECgeECogECogECgeECoUBiIgEigmGC4oGC4eECgcDCYgECoeECgeECgcDiYWCCIeECgkFCwkFCwcDiYiEiogECggECoiEiokFi4gEioeDigeDigeECgYCiQcDiYgECoeDigeDiggECogEioeDiYgECokFC4iFCwcDigUCCAWCCIaCiYYCCQYGCwcJjYcJDYcJDQcJDQcJDQaJDQcJDQcJjQcJDYcJjYaGi4aEiocJDQSDCQWCCIcDCYcDigaIDQaJjYgFi4cDCYaCiQiEiwgEiokFi4iFC4gECgkFiweECgcDCYeECoeDigiEiwaDCYWCCIYCCIWCCIWCCIYCiQcDigYCiQaCiQWCCIYCiQcDiYeDigcDiYYCiIaCiQcDCYcDCYYCiQaCiQWCCIWCCIYCCIaDCYeDigaDCYaDCYcDCYYCiQaCiQYCCQYCiQaDCYaDCYSBiAUCCAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgMDAwODg4ODg4ODg4ODg4QEBAQEBAQEBAQEBAQEBAQEBAQEBASEhISEhISEhISEhISEhISEhISEhIQEBAQEBAQEBAQEBAQEBAQEBAQEBAODg4ODg4ODg4ODg4MDAwICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQeDiggECocDCYcDCYeDigeDigeDigWCCIaDCYiEiwiEiwaDCYeDiggECggEiogECokFCwgEioeDigeDigeECgeECggECogEiogEiocDCgaDCYkFCwmFi4kFiwaCiQaDCYeDigeDigeDigYCiQWCiIgECokFC4eDigcDCYgECggECggECoiFCwiFCweDigeDigeDigcDiYaCiQeECggECogECogECggEioeECoeECggEioiFCwiEiwaCiQUCCAaCiQaCiQYECYaIjIaJjYaJDQcJDQaJDQaJDQaJDQcJDQcJDYcJDQcJjYaGi4aEioaJDQSDiQYCCQeDigcECgaIDQaJjYgFi4cDCYaDCYiEioiFCokGC4oGjAiEioiFCwiFCwaCiQeECocDCYgECoeDigWCCIYCiIYCiQWCCIYCiQgECoaDCYaDCYYCiQaDCQgEiocDiYaDCYcDCYgECgaCiQcDCYYCiQYCCQWCCIYCCQYCCQaCiQeDigcDCYaCiQgECocDCYaDCYYCCQYCiQaCiQcDCYUCCASBh4EBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQaDCQeDigaCiQaDCQcDiYeDigaDCQUCCIeECggEiogECoaCiQeDiggECogECoiEiwiFCwgECogECoeDiggECggECogECoeECggECoWCCIeDigkFCwmGC4gECoaCiQYCiQaDCYeDigcDiYUCCIcDCYgECoiEiwaDCYcDCYeECggECogEioiFCwgEiogECoeDigeDigcDigcDCYgECogECoiEioiEiogECocDigcDigiEioiFCwgECoWCCAWCCIaCiQcECgaIDIcJjYaJDQaJDQaJDQaJDQaJDQaJDQcJDQcJDQcJDQaJjYaGi4aEioaJjYWGCwYCiQgECocDigUGCoQGCYeFCocDCYcDCYiEiwkFCwkFiwqHDIgECoiEiomGDAcDiYeECocDiYeECogEioWCiIYCiQaCiQWCCIYCCIcDCgcDCYeDigcDCYeDiYiEioeDigcDCYeDigiFCwaCiQcDigaCiQaCiQYCCQYCiQYCiQaCiQeDiggECocDCYgEiocDiYaDCYWCiIaDCYYCiQaDCYUBiAQBB4EBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgQCAgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQaDCYeDigaCiYaDCYcDiYeDigUCCIYCiQeDigeECgcDCYYCiQeDiggEioeECgkFCwgEiogECoeDigeDigeDigeDigeDigeDigcDigUCCAeDigiEiwkFCweDigcDiYaCiYaDCYeDigYCiQUCCAeDigeECgeDigYCiQcDCYgECogECoiEiwiEiweECggECoeDigeECgcDiggECggECogECoiEiwgECgeDigeDigcDiYgEiokFC4eDigWCCIaCCQcECgcIDIaJjYaJDQaJDQaJDQYJDQYJDQaJDQaJDQaJDQaJDQaJDQaJjYaGjAaEioYIjQUGCwaCiQgECoeECgKChgEBhAeEigcDCgcDCYiEioiFCwkFCwoGjAcDigeECgmGC4eDiggECoeECocDiggEioYCiQYCiQcDCYYCiQYCiQaDCYaCiQgECoeDigcDiYiFCwgEiocDCgeDigiFCwcDiYeDigeDigaDCYYCiQYCiQYCiQaDCQeDiggECocDiYgECogEioeDigUCCIaDCYcDigaDCYUBiASBh4EBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAYGBgYGBgYGBgYGBgYEBgYEBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBgYEBgYGBgYGBgYGBgYGBgYGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgQGBAYEBAQGBgYEBAQEBAQGBgYGBgYEBgQEBAQGBgYEBgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQcDigcDCYYCiQaDCYcDCYaDCYSBiAaCiYeDiggECoYCiIYCiQeDiggEioeECgiEiwgECgiEioeECggECocDCgcDCYeDigeDigYCiQYCiQgECoiEiwgECogEioeDigYCiQcDCYcDCYUCCIWCCIeDiggEioaDCYYCCIcDCYgEioeECgiEiwgECogECogECoeECgeECocDCYgECogECoiEiwiEiogECogECocDigcDigiEiokFC4aCiQaCiQYDCQaHjIaJjYaJDYaJDQYJDQYIjQYIjQYIjQYJDQaJDQaJDYaJDYaJDYWJDYYGjAYECgMFiYIDB4aDCQiEiweECgGBAwAAAgcECYcDCgeDiggECgiEiwiEiomGC4eDigeDigkFiweDiggEioiFC4eDiggECocDCYYCiIaDCYaCiQYCiQcDCYaCiQiEiogECoaDCYiEioiFCwcDCYgECoiEioeDigeDigeECoaDCQYCiQaDCYaCiQaCiQcDiYgECoeDiggECgkFiwgEioYCiQYCiQcDigcDCYWCCIUCCAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQcDCYYCiQYCCQaCiQaCiQWCCISBh4aCiYeDigcDiYUBiAYCiIgECoeDigiEiogEiogECoiEiwgECoeDigaDCYaDCYeDigcDigSBiAcDCYeDiggECocDCYiFCwcDigYCCIaCiQYCiQSBh4WCCIcDCgeDigWCCAWCCAcDiYgECoeECgiFCwgECgiEiogECogECoeECgeECggEiogECokFCwgECogECoeECgcDiYgECgiFCwgEioaCiQaCiYSEigWIjQaJDYaJDYYJDYWIjQYIjQYIjQYIjQYIjQYJDYaJDYaJDYWIDQOGiwQECQUCiAEBhAAAggSCBoiEiwgEioKChgIDhoeEiocDCYeDiggECogEioeECgkGC4gEiogECokFiwiEiogEiokFi4eECgiEiogECoaCiQaDCYaDCYYCCIaCiQaCiQeECggECocDCYiEiwkFCweDigiEiwiFCweDigeDigiEiweDigWCCIYCiQcDigaDCYcDCYeECgiEiogECgkFi4iEioeDigYCiQcDiYcDCYYCCIWCCIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYEBAQEBgYEBgYGBgYGBAYGBgYGBgYGBgQGBgYGBgYEBAQEBAYGBgYGBgYGBgYEBAYEBAQEBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQaCiQWCCIWCCIWCCIaDCYSBiASBh4aCiQcDCgYCiQUBiAaDCQgECoeDiggEioeDiggECogECoeECgcDigaCiQcDigeDigYCiQUBiAcDCYeDigcDigaDCYgEioYDCQUBiAaCiQYCCIQBBwYCCQcDigcDCYUBiAYCCIeECgeDiggECoeECgeECggECogECogECoeECggEiogECogECoiEiweECggECoeECgeECggECokFCwcDigcDCYOBhgCCBQKFCQWHjIaJDYYIjYYIjQYIjQYIjQYIjQYIjQYIjYYJDYUHjAKEiQCBhIGBBAQCBgCAgoAAgYMChgkFC4iFCwUFioOGiwcFiwcDCYeDiggECogECocDiYiFCwiFCweECgkFi4kFiwiFCwmGDAgEiogECoiFCwcDCYcDCYcDCYaCiQaCiYaCiQcDCYiEioeDigiEiwkFi4gECokFCwmGC4eECgeDigkFCwiEiwaCiQYCiQcDigaDCYcDCYeDigkFCwgEiomGC4kFiwgEioYCiQcDigcDiYYCCIWBiAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBAQEBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQYCCIWCCIWCCIYCiQaCiQQBBwWCCAYCiQaDCYWCCIUBiAeECggECgeECgeDigcDCYeDigeDigeDigaDCYYCiQcDCYaCiYUBiAUCCAcDCYeECgYCiQaCiQeECgYCiQWCCIaDCYSBiASBB4YCiQaDCYYCiQSBiAaDCQgECoeDiggECocDCYeDigeDigeDiggECggECogECgeECggEiogECogECoiEiwgECogECogEioiEiweDCYWDCICBBAAAg4CCBYOFioYIjYYIjQYIjQYIjQYJDQYIjQWIjQWIjQYIjQMFigCBhYAAgwEBBIQDB4KDhwKEiAUFCgkEiwiFCwWGjAOHDAaGC4eDiYeDiggECoeDigaDCYgEioiFCweECgkFCwkFiwiFCwoHDAkFCwgECokFi4eDigeDigeECgaDCYaCiQcDiYaDCQgEiogECogEiokFi4kFCwkFiwoGjAiFCweDigkFCwkFCweDigYCiQaDCYcDiYcDCYeDiYkFi4iEiooGC4mGDAgEioYCiQeDigcDiYYCiIWCCIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQWCCIWCCIUBiAaCiQYCiQOBBwUCCAWCiQYCiQUBiAWCCQeECocDCggECoaDCYaCiQcDigeDigcDiYYCiQYCiQaCiYYCiQSBB4UCCAaDCYaDCYYCCIYCiQeECYWCCIWCCIaDCYQBBwSBh4WCiIaDCYWCCIUBiAcDigeDigcDigcDiYYCiQcDCYeDigcDiggECgeECggECoeDiggEiogECggECoiEiweFCwgECoiEiwgECoeDCgUEiYKEiIIDh4IECAQGCwWIDQWIjQYIjQYIjQYIjQYJDQYIjQWIjQWIDQQGCoIECAGDh4MECIUEigQFioOGi4WGjAiEiwiEiwYGjAQHDAWFiweECggDigeDigeDigaCiQeECgiFCwgECoiEiwkFi4iEiooGjAiEiwcDigkFi4iEioeECgiEioeDigaDCQeECgaDCYgEiogECogECokFi4mFi4mFiwoGC4kFCwiEiomFi4mGC4iEioYCiQcDCYcDigaDCYeECgmFi4gEiomGC4mGC4gEioWCCIeDigcDCYWCCIYCCIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgGCAgICAgICAgKCgoKCgoKCgoKCgoEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQWCCIWCCAUBiAYCiQSBh4OBBwWCCIYCCQWCCISBiAaCiYeDigaDCYeDigaDCQaDCQcDCYeDigaDCYYCCQaDCYaCiQYCCIQBBwWCCIaDCYWCCIWCCIWCCIcDiYUCCAWCCIYCCIMBBoSBh4YCiQaDCYUBiAWCCIeDigaDCYcDCYaCiQaCiQaDCYeDigcDCYcDCYgECogECoeECgeDigeDiggECoWDiIUEiQiECwiEiogECgeECoSGCwOGCwMFioOGi4UHjAWIDIYIjQYIjYYIjYYIjQYIjQaJDYYIjQWIDIUHjAOGC4MFioQGCoYFiwUHDIUHjQUHDAgFCwgECoQDiAIDBoKDBweECggEiogECogECgaCiQcDiggEiogECoiEiomGC4gEiomGC4iFCwcDCYkFCwmGC4gECoiFCwgECocDiYeECoeDiggECogEiogECokFCwmGDAmFiwoGjAmFi4iEiokFiwoGjAiFCwYCiQcDigcDigaCiQeDigmFi4gEComGC4mGC4gEioWCCIeECgcDiYWCCIWCCIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGCAgGCAgICAgICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQWCCIUBiAUBiAYCCIOBBoQBBwYCCIYCCIUBiASBiAaDCYcDCYcDCYcDigYCiQaDCYcDigcDCYYCiQaDCYcDigaDCYUCCAQBBwYCiIYCiQUCCAUBiAWCCIcDiYUBiAWCCISBh4MAhoWCCIaCiQcDiYSBiAWCCQeDigaCiQcDigYCiQaDCQcDCYeDigaDCQaDCQiEiweDigeECocDCYcDCgSChwEBAoIBhAgEioiEiwgDigeFCwUHDASGi4QGC4QGjAWIDIYIjQaIjQaJDYYIjQYIjQYIjQaJDYaIjQYIjQWIDIQGjAOGi4SGi4aGjAYHjISGCoMDhoeECYgECgIBBAAAAQAAAYWDB4kFCwgECogECgaCiQcDigeECgeDigiEiomFi4gECokFiwkFCweDigiFCwoGjAkFCwmFi4iEiocDCYgEioiFCwgECoeECogECgkFCwmGjAiEiomGjAmGC4gEiokFiwoGjAkFCwWCCIcDCYcDiYaCiQcDCYkFi4gEComGC4mFi4gEioUCCIgECoeDigYCiQYCiQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUBiASBh4UBiAUBiAMAhgSBh4WCCAUBiASBh4UBiAcDCYaCiQcDCYaCiYYCiQaCiYcDCYaCiYWCCIcDCYaDCYYCiQQBh4QBBwWCCIWCCIUBiAUBiAWCCIaDCQSBiAWBiAOBBoOBBwUBiAYCiQeECgSBB4YCiQcDigaCiQaDCYWCCIaCiQaDCYaCiYWCCIaDCQaDCQaDCYeDigcDCgSCBwCAgQEBAIODhAaECIiECwgDioWECYUHCwUHjISHDASHDAWIDQaJDQaJDQaJDQaJDYYIjYaJDYaJDYaJDYaIjQWIDQSHDASHDAWHjIWHC4MEB4CBA4CAgYcECQgECgIBgwAAgAAAAAMCBAkFCwgECogECocDCYeDigcDigeDiggECokFi4eECggEiokFi4eECgiFCwoHDImGC4mGC4kFi4eDiggECgkFi4gECoeDigeDigkFCwmGC4gECokFi4mGC4gEiokFiwoGjAkFCwWCCIeDigeDigaCiQaCiQiFCweECgmFiwmFi4gEigUCCIgECoeDigYCiQYCiQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgKCgoKCgoICAgICAgICAgGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYICAgICAgICAgKCgoKCgoGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQKCgoMDAwKCgoKCgoICAgICAgICAgIBggICAgICAgICAgICAgGBgYGBgYICAgICAgKCgoKCgoMDAwMDAwGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUBiASBh4UBiAQBBwKAhgUBiAUCCASBh4QBB4WCCIcDCYaCiQcDCYYCCQWCCIYCCIcDCYYCiQYCCQcDCYYCCQWCCIMBBoSBh4YCiQWCCIUBiAUBiAUBiAWCiIUBiAUBh4KAhgQBB4SBiAaDCQcECgSBB4cDCYeDigcDCYYCCIWCCIYCCIYCiQYCiQYCCQYDCIUDhgaDCQeDioYCiQGBAwAAAAAAAAGBgoWDB4iECwgECoMCBYIDhwSHC4UHjIUHjIWIDQaJDQcJDYcJDYcJDYaJDQaJDYcJDYcJDYaIjQWIDQUHjIUHjIUHC4IDhwEBg4ODhQGBgoaDiIgECgGAggAAAAAAgQEAgYgECggECogECoeDigeDigeDigeECggECokFCweECgcDigkFCweECgiEiooGjAoGjAmFi4mFi4iEiwgECgmGC4eECgcDigeDigiEiokFiwgECoiEiokFCwiEiwiFCooGDAkFCwUCCIeDigeECgaCiQaDCYiEiocDiYkFi4kFCwgEioYCiQeECogECoaDCYYCiQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAgIEAgICAgIEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYICAgICAgKCgoKCgoMDAwMDAwMDAwKCgoKCgoKCgoICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQCBAIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQSBh4SBB4SBh4KAhoMAhoUBiAUBiASBh4QBB4YCiQcDCYaCiQaCiQYCCIWCCIYCiQaDCYWCCQYCiQaDCYWCCISBh4MAhoWCCAYCCIUBiAWBiASBh4UCCAWCCISBiAOBBwKAhgSBh4UBiAaDCYaDCYSBiAeDigeECgcDCYaDCQWCCIWCCIaCiQYCiQUBiAKCBYSEhwcDigcDCgMBBICBAQCBAYAAgQAAgYSCBwgDCwiFioWFhwGChAMEiIUHjIWIDQWIDIYIjQcJDYcJDYcJDYcJDQcJDYeJDYcJDYYIjQWIDQWIDQUHjIKEiIGCBIWGBwiJCYSFBYUChwaDiIAAgYCBAYCBAYEBAQgEiYgECogECoeDigeDigeDiggECogEioiFCweECgcDCYiFCwgECoiEiomGC4qHDAmFiwmFi4kFCwgEiooGjAgECocDiggECogEioiFCwgEioiEioiEiogEioiFCooGC4kFCoSCCIeDigeECgaDCQcDCYgECoaCiQiFCwiEiweECgYCiQgECogECocDCgaDCYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgYGBgYGBgYGBgYGBgYGBgYIBggGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgKCgoGBgYEBgYEBAQEAgQCAgICAgICAgICAgICAgIEBAQCAgICAgIEBAQEBAQEBAQEBAQICAgKCgoMDAwODg4MDAwMDAwICAgGBgYEBAQEBAQCAgICAgIEBAQEBAQCAgICAgICAgICAgQEBAQEBgYGBgYGBgYICAgKCgoEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQQBB4SBh4SBh4IAhgOBBoUBiASBh4QBBwOBBwcDCYaDCYYCiQYCCIYCCIWCCAYCiQaCiQWCCIYCiQYCiQUBiAOBBoOBBoWCCAWCCASBh4SBh4SBh4UCCAUCCASBh4MBBoKAhgUBh4UBh4cDCYaDCYWCCIgECocDiYcDCYaDCYWCCAYCCIcCiQWCiQIBhwAAhQGBhocDCYaCiYOChYECAgCBAgCBAgGCA4WCiAeDCoiGCgeICYSFiQIDiAQGi4WIjYWIDIYIjQcJDYeJDYeJDYeJjYeJDYeJDYaJDYYIjQWIDIWIjYOGC4IDiASGCQeICYiIiYiIiQWFBwMCBQABAYCBAgEBgoSEhYeFiYgECoiEioYDCQYDCYeECggECogECoiFCwgECoaDCYgEiogEiogEComFi4mGDAkFiwmGC4kFi4gEiomGC4gEioeDiggECogEioiFCwgECogECogECoeECggFComFi4iFCwYCiQeDiogECoaDCYaDCYeDigaCiQiEiwiECocDiYWCCIgECgeDigYCiYcDigEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYKCgoMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYKCgoICAoKCgoKCgoICAgEBAQEBAQCAgICAgICAgICAgICAgIEBAQCAgICAgICAgICAgIEBAQEBAQGBgYICAgGBgYGBgYEBAQCAgICAgICAgIEBAQEBAQCAgICAgICAgICAgIEAgIEBAYICAgICAgGBgYGBgYICAgICAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQQBBwQBB4QBBwMAhgQBBwSBh4QBBwOBBoSBh4cDCYYCCIYCiQWCCIWCCIUBiAWCiIYCiQWCCIaCiYWCCISBh4KAhgQBBwUBiAUBiASBh4SBB4QBB4SBiASBh4QBB4MAhgOAhoQBB4SBh4cDCYaDCYaCiQgECocDCYeDigaCiQUBiAUBiAaCiQWDiYKFCgGECQIDCIaCiQYCCIQDiIIEBwGDBoGDBoQDiAaCiYgECgcGCwUHCwUGjAOFi4MGCwWIjQWIDIYIjIcJDQeJjYeJjYeJDYeJjYcJjYcJDQYIjIWIDIWIDQMFiwOFi4UHDAUGiwWGioYHCoWHCoMEiAGDBoGDBoKDh4KECASDCIgECoiEioSECgSECgiECoiEiogECoiEiweECoaDCYeECgeECggECgkFi4kFiwiEiomGC4kFi4gEComGC4gEioeDiggECogECokFCwgEiogECoeECgcDCYeECgkFCwgECoWCCIeDiggECoaDCYaDCYcDCYYCiQgECogECocDiYWCiIeDigcDiYWCiQcDCgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoICgoICAgICAgICAgICAgICAgICAgICAgICAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgQEBAQEBAIEBAQGBgYGBgYIBgYKCgoKCgoKCgoGCAgEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQCAgICAgICAgIEBAQCAgICAgICAgIEBAQEBAQGBgYICAgKCgoICAgGBgYGBAYGBgQEBAQEBAQEAgICAgIEAgICBAQCAgQEBAQEBAQEBAQEBAQOBBwQBBwOBBoMAhgQBh4SBh4SBBwOBBoWCCAYCiQWCCIWCCIWCCIWCCAUBiAWCCIYCCIWCCIaCiYUBiAQBBwGAhgSBB4WBiAUBiASBh4QBB4QBh4UBiAQBB4OBBwMAhgOBBwQBh4UCCAeDigcDCYaCiQcDCYaCiQeDigaCiQUBh4UBh4UEigQFiwOFiwOGCwQFiwYCiQYBiIODCQKFCoMFiwOFiwUDCYaCCIgEioaGjAUHjIYIDIWIDQWIDIYIjIUIDIWIDIaIjQcJDYeJDYcJDQeJDYcJDYaIjQYIDIUIDIYIjIWHjIYIDIYIDIWHjIUHDASGi4QGC4OGC4OFiwOFCwKEigIECYQECYgDiogECoUFiwWFCoiECogEiogECoiEioeECgcDiYeDigeDiggECgkFiwkFCwgEiokFCwkFi4gEComGC4gEiogECogEiogECgiFCwgECggECoeDigaCiQeECgkEiweDigWCCIeDigeDigaCiQcDCYcCiYYCCIgECoeDigcDiYUCCIeDiYeDigYCiQaDCYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYEBAQEBAQCAgICAgIEBAQCAgICAgIEBAQEBAQEBAQCAgICAgIEBAQGBgYICAgICAgKCgoMDAwMDAwODg4ODg4MDAwKCgoICAgGBgYEBAQEBAQCAgICAgIEBAQCAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgIEBAIEBAQEBAQEBAQEBAQGBAYGBAYGBAQGBgYICAgKCgoMDAwKCgoICAgGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQCAgICAgICAgICAgICAgICAgICAgIGBgYICAgKCgoKDAwMDAoICAgEBAQGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQCBAQCAgICAgIEBAQEBAQOBBwOBBwMAhgMAhoQBh4QBB4QBBwOBBwWCCAYCiIUCCAUBiAUBiAUBiAUBiAWCCIWBiAWCCIYCiQSBh4OBBoMAhoSBh4UBiAUBiASBB4QBBwSBh4UBiAQBBwOBBoMAhgQBBwQBB4WCCIeECoaCiQYCiQaDCYWCCIeDigYCiQWBiASECYSHjIQHjAQGi4QGi4QGCwWCCIYCCIUFCoSHjIUHjIUHDAWCiQaCiQkFCwcHjIYIjQaIjIaIjQaIjQaJDQUHjIWIDIYIjQaIjQcJDQcJDQcIjQYIjQYIjQWIDIUIDIaJDQaIjQaIjIaIjIaIjIYIDIYIDIWIDIWHjAUHjIUHjIUHDASHDAWFCogDigcECgQGiwWFCoeDiggECogECoiEiogECoeDigeDigeDigeECgiFCwiFCwgECoiEiokFCwgEComFi4gEioiEiogECogECoiEioeECgiEiocDCYYCiQcDiggEioeDigWCCIeDigcDigaCiYaDCYYCCIWCCIgECoeDigaCiQUCCAeDigcDigYCiQcDCYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwICAgICAgICAgEBAQCAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgICAgIEBAQEBAQEBAQICAgKCgoKCgoKCgoICAgGBgYEBAQEBAQCAgIEBAQEBAQEBAQEBAQCAgICAgICAgICAgIEBAQGBgYICAgICAgMDAwKCgoEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBgQICAgMDAoODAwMDAwKCgoGBgYEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgICAgGBgYEBAQEBAQEBAQEBAQGBgYICAgMDAwODg4MDAwMDAwICAYEBAQEBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgIOBBwQBBwKAhgOAhoQBB4OBBwOBBwQBBwWCCAWCCIUBiAUBiAUBiASBh4SBh4WCCIWCCAYCiIUCCASBB4OAhoSBB4SBh4UBiASBh4QBB4QBBwUBiAUCCAQBBwMAhoKAhgQBB4OBB4YCiQeECgYCiQaDCYaDCYWCCIcDiYYCCIYDCYUHDAUIDIUHjAUHjASHjASGi4WBiAWCiQUGi4UHjIUHjIWGi4WBiAcDCYgFCwaIDIYIjIaIjIaIjQaIjQYIDIUHjAWIDIWIDIWIDIYIjQaIjQaIDQWIDQUIDIWIDIUHjAYIDIaIjQaIjQaIjIaIjIYIDIYIDIYIDIWIDIUHjIUHjIUHjASHjAWFCwgDigeEioSHC4YFiweDiYeDigeDigeDigeECgeDigeDigeDiggECoiEioiFCwgECoiEioiEiweECgkFCwgECgiEiwgECogECgiEioeDiggECgaCiQYCCIcDigeECgcDiYUCCIcDiYeDigcDCYaDCQYCCIWCCAeDigcDCYYCCISBiAcDigcDigYCCIcDCYEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgIEBAQICAgICAgMDAwMDAwMDAwICAgGBgYEBAQEBAQEBAQCAgICAgIEBAQEBAQCAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgIEBAQCAgICAgICAgIEBAQEBAQGBgYICAgKCgoMDAwMDAwKCgoICAgEBAQCAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAYEBAQGBgYKCggMDAwODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4QEBAODg4QEBAODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4MDgwKCgoGBgYEBAQEBAQGBgYGBgYGBgYGBgYIBgYGBgYGBgYGBgYGBgYEBAQCAgICAgICAgICAgICAgIQBBwOBBwKAhgQBBwSBB4OAhoOBBwQBB4WCCIWCCIWBiASBh4SBh4QBB4SBh4WCCIUCCAWCCISBh4QBBwQBBoUBiASBh4UBiAOBB4QBBwQBBwWCCAWCCIQBBwKAhgMAhoSBB4QBBwaDCQeDigYCiQcDCYaCiQWCCIaDCYYCCIaECgUHjIUIDIWIDIWIDAWIDIWHi4WBiAUDCQUHjAWIDIWIDIWGi4UBiAeDigeGC4aJDIaIjIcJDIcJDQaJDQUIDISHjAUIDIUHjIWIDIYIDQaIjQYIDQWIDIUHjIUIDISHjIWIDIaJDQcJDQcJDIaIjIYIjIYIjIYIDIWIDIWIDIWIDIWIDIUIDIYFiwgDigeEioUHjAaGCweDCYcDCYaCiQeECgeDiogECoeECgeDiggECoiEioiFCwgECogECogECocDCYiEiogECoiEioeDigeDiYgECgeDigeECgYCCIWCCIeECggECoaDCYSCCAcDCYcDigcDCYaDCYWCCIWCCIcDigaCiQWCCASBiAaCiYcDCYWCCIcDCYEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYKCgoMDAwODg4MDAwKCgoICAgGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYGBgYKCgoMDAwODg4MDAwKCgoGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIEBAQEBAQGBgQGBgYGBgYIBgYICAgICAgIBgYGBgYGBgYGBgYEBAQEBAQGBgYKCgoODg4QEBAQEBASEhISEhIQEBAODg4MDAwKCgoMDAwODg4QEBASEhISEhIQEBAODg4MDAwICAgGBgYEBAQEBAQEBAQGBgYGBgYIBgYIBgYIBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQCAgICAgICAgICAgIQBBwMAhoIAhgQBBwQBBwOAhoQBBwSBiAWCCAUBiAUBiASBh4QBB4QBBwSBh4WCCIUBiAUBiAQBB4OBBwQBBwUBiAQBh4SBiAQBBwQBBwOBBwWCCIYCiQQBBwIAhYOAhoQBB4QBBwcDiYeDigYCCIcDCYWCiISBiAWCCIYCCIaECgUHjAUIDIWIDIWIjIYIjIYHjAUBB4UCiIYIDAYIjIYIjIYHC4YCCIeECoeIDAaJDIcJDIeJDIcJDQYIjIWIDISHjISHjIUHjIWIDIYIjQYIjQYIjQWIDIUHjISHjISHjIWIDIYIjIcJDQcJDIcJDIcJDIaJDIaIjIYIjIYIjIYIjIYIjIYIjIYFiweDCgcFiwWJDIaGCwcDCYaDCYaCiQeDigeDigeECogECogECogECggECoiFCwgECggECoeDigaDCQgECogECogECgaCiQcDCYgECgeDiggECgYCiIWCCIcDiYeDigYCiQSBiAaDCYcDigcDCYaDCYUBiAWCCIaCiYYCiQUBh4UBiAaCiQaCiQUCCIcDigEBAQCAgIEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYICAgKCgoMDAwMDAwMDAwKCgoGBgYEBAQEBAQCAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQCAgIEBAQCAgICAgIEBAQGBgYICAgMDAwMDAwMDAwMDAwKCgoGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQCAgICAgICAgICAgICAgICAgICBAQEBAQEBAQGBAYGBgYGBgYIBggICAgICAgGBgYGBgYGBgYGBgYEBAYEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQGBgYGBgYGBgYICAgICAgICAgICAgIBgYGBgYGBAYEBAQEBAQEBAQEBAQCAgICAgICAgICAgISBBwMAhgMAhoSBB4QBBwOAhoOBBwSBh4WCCASBh4SBB4QBB4QBBwQBBwUBiAWCCASBh4SBB4SBh4OBBwSBh4UBiASBB4SBh4QBBwSBBwOBBwWCCIYCiQQBBwKAhgQBBwQBBwQBBweDigcDCYYCCIaDCYWCCIQBB4SBh4YCCIYECgUIDAWIjIWIjIWIjIYIjIYIDAUCiIUDCQYIjIaJDIaJDIYHC4aCCQcFCocJDQcJDQcJDIaIjIYIjIYIDIUIDISHjISHjAUHjIWIDIWIjQYIjQWIjQWIDIUIDISHjASHjAWIDIYIjIYIjIaIjIcJDIcJDQaIjIaIjIaIjIaIjIaIjIaIjIaJDIaGCweCiYaGCwWJjQYFiwcCiYaDCYaDCYcDigcDCYgECggEioiEiogECggECogEioeECggECocDCYaCiQeECggECoeDigaCiQcDiYeDigeDigeECgYCiQYCiQaDCYaDCYWCCISBiAYCiQaDCYcDCYaCiQUBiAWCCIYCiQWCCQSBh4UBiAaCiYYCiISBiAcDCYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQICAgMDAwODg4ODg4ODg4MDAwKCgoICAgICAgICAgICAgKCgoMDAwMDAwMDAwMDAwICAgICAgICAgICAgMDAwODg4ODg4ODg4ODg4KCgoGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYICAYICAgICAgICAgIBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQGBgYGBgYGBgYEBAQGBgYGBgYGBgYEBAQGBgYGBgYEBgQEBAQEBAQEBAQGBgYGBgYGBgYIBggIBggICAgICAgICAgICAgIBgYGBgYGBAYEBAQEBAQEBAYEBAYEBAQCBAICAgICBAICAgIQBBwIAhgMBBoSBB4OBBoOAhoOBBwSBh4UBiAQBB4SBh4QBB4QBBwQBBwWBiAUCCASBh4QBB4SBh4QBBwSBh4SBB4SBh4SBh4QBBwSBBwQBBwWCCIWCCIOBBwKAhgSBBwQBBwSBhwgECgcDiYYCiQcDCYWCCISBh4SBh4YCCIWDiYUIDIWIjIWIjIWIjIYIjIYJDIWHCwWFioaJjQaIjIaJDIaHjAaCiQaHi4cJDQcJDIaIjIYIjIYIjIWIjIUHjISHjASHjAUHjIWIDIYIDQYIjQYIDQWIDIUHjISHjASHjAUHjAYIDIYIjIYIjIaIjIcJDIcJDIaJDIaJDIaIjIaIjIaIjIaJDIaGCwcCiYYFiwWIjIYDiYaCiQaCiQaCiQcDCgcDCYgECogECogECogECgiEiogEioeECggECoaCiQaCiQeECgeECoeDigaDCQeDigcDCgcDiYeECgaDCYYCiQYCiQYCiQWCCASBiAaCiQaCiQaDCYYCiQUBiAWCCIYCCIUCCIOBBwUCCIaDCYYCiQUCCAcDigCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYICAgMDAwODg4QEBASEhIUFBQUFBQUFBQUFBQSEhISEhIQEBAQEBASEhISEhIUFBQUFBQSEhISEhIODg4MDAwKCgoGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQGBgYEBAQEBAQEBAQGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYICAgGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYGBgYEBgQGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgGBgYGBgYEBAQGBAQGBgYEBgYEBAQEAgQCAgICAgICAgICAgIQBBwGAhgOBBoSBBwOAhoOBBoQBBwUBiAUBiASBB4SBB4QBBwQBBwSBB4WCCISBiASBh4SBh4QBB4QBBwQBB4QBBwSBh4UBiASBh4QBBwOBBwUBiAWCCIOBBwKAhgQBBwOAhoSBh4gECocDCYYCiQaCiYYCiQUCCASBh4YCCQWDCQUHi4WIjIWIjIWIjIWIjIYJDIYHC4WGCoaJjQaIjIaJDIcHi4cGCwcJjQcJDIcJDIaJDIaIjIYIDIWIDAUHjASHjASHDASHjAWIDIYIDQYIjIYIDQUIDISHjASHjAUHjAUHjAWIDAYIjIYIjIaJDIcJDIcJDIcJDIcJDIcJDIaIjIaIjIaJDQaGCwcCCQYFioYIjIYDCYYCCIYCCIaCiQcDigcDCYgECogECogECoeDiggECogECoeDigeECgYCCIYCCIgECoeDigcDCYYCiQeDigcDCYcDiYeECgcDCYYCiQYCiQWCCIUBiASBiAaCiQYCiIaCiQWCCISBiAWCCIYCCIUCCAOBBwWCCIYCiQWCCIYCiQeDigCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgKCgoMDAwMDAwODg4ODg4MDAwKCgoGBgYGBgYGBgYICAgMDAwODg4MDAwMDAwKCgoICAgGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEAgIEBAQEBAQGBgYGBgYGBgYGBgYICAgICAgICAgICAoICgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAYICAgICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYEBgQEBAQEBAQCAgICAgICAgICAgICAgIMAhoKAhgQBBwQBBwOAhoQBBwQBBwUBiASBh4QBB4QBBwQBBwQBBoUBiAUBiAQBBwUBiASBiAQBB4QBBwQBBwQBBwSBh4SBh4QBBwQBBwOBBwUBiAWCCAQBB4MBBoQBBwOAhoUBiAeDigYCiQYCCQYCiQcDCYWCCISBh4WCCIWCCIUGCwWIjQWIjIWIjIYIjIYJDQWHC4UGCoaJDQaJDIcJDIaGiwcJDIcJjIcJDIcJDIaIjIaIjIYIDIUIDIUIDAUHjASHC4SHjAUIDIUIDIWIDIUIDIUHjISHjASHC4UHjAUHjAUIDAYIDIaIjIaJDIcJDIcJDIcJDIeJDIcJDIcJDIaJDIaJDIaGCwcDCYYHjAYHDAaCiQWBiIWCCIaDCYgECocDiggECoeECgcDigaDCYgECogECoeECgeDiYWCCIYCiIgECoeDigYCiQUCCIeDigaCiYcDCYeECgcDiYYCCIYCCIWCCIUBiAWCCIaCiYYCiIaCiQWCCIQBB4UBiAUCCAUCCAOBBoUCCAWCCIUBiAUCCIcDigCAgIEBAQCAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYEBgQEBAQEBAQEBAQEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgGBgYEBAQGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAIEBAIEBAQEBAQEBAQGBgYGBgYICAgKCgoICAgGBgYMDAwKDAoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGCAYGBgYGBgYGCAYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYKCgoMDAwICAgICAgKCgoKCgoICAgGBgYGBgYEBAQEBAQEBAIEAgIEBAQEBAICAgICAgICAgIKAhgMAhgSBB4OBBwOAhwOBBwQBBwUBiAQBB4QBB4QBBwQAhoOBBwUBiASBh4QBBwUBiASBiAQBBwQBBwQBBwQBBwSBB4SBh4QBB4OBBwQBBwSBh4UBiAQBB4SBBwSBBwOAhoWCCIcDCYaDCYYCiQWCCIaCiYYCiQQBBwUCCAUBiASEigWIjQWIjIYIjIYIjIYIjIYIDAYIDAaJDIaJDIcHjAcHC4cJjIcJDIaJDIaJDIaIjIYIjIYIjIWIDAUIDASHC4QHC4QHDASHjIUIDIWIDIUIDISHjIQHDAQHC4SHC4UHjAWIDAYIjIaIjIaIjIaIjIaJDIcJDIcJDIcJDIcJDIaJDIaJDIaGCwcFCwYJjQaFiwYCCIYCiIaCiQcDigiEioeDigeECgcDCYaDCYYCiQgECocDigeECgeDigWCCIYCiIeECgcDCYWCCIUCCAcDCYaCiQcDCYeECgaDCYYCCIYCCIUCCAUBiAWCCIaCiQWCCAaCiQWCCIQBB4SBh4UCCASBh4MAhoUBiAUBiAUBiAUCCAcDiYCAgICBAICAgICAgIEAgQEBAQGBgYGBgYEBAQEBAQEBAQEBAQGBgYICAgICAgICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYICAgICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQEBAQGBgQGBgYEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEAgICAgIEBAQEBAQEBAQGBgYGBgYICAgKCgoGBgYODg4MDAwKCgoICAgGBgYGBgYGBgYGBgYICAYICAgGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYICAgKCgoMDAwODgwKCgoICAgKCgoICAgGBgYGBgYEBAQEBAQCAgIEAgIEBAQEBAQEBAICAgICAgICAgIKAhgMAhoQBBwOAhoQBBwQBB4UBiASBh4OBBwQBBwQBBwOAhoQBBwWBiAQBB4QBB4UBiASBh4QBBwQBBwQBBwQBBwSBh4SBB4QBB4OBBwQBBwSBiAUBiASBB4SBBwOAhoOBBwYCiQaCiQaCiQWCCIUBiAYCCIWCCIOBBwUBiAUBiASEiYWJDQWIjIYIjIYIjIYIjIaIjIaJDIaIjIaJDIaHC4aHC4aJDIaJDIaIjIaIjIaIjIYIjIYIjIWIDAUHi4QGiwOGi4QHDASHjIUIDIWIDIUHjISHjIQHDAOGi4QGiwUHi4WIDAYIjIYIjIaIjIaIjIaIjIaJDIaJDIcJDIaJDIaJDIaJDIaIjIaIDIYJDQYFioWBiAaDCYcDCYgEiokFCweECgaDCQaDCYaDCYaDCYeDigaCiQeDigcDigUBiAYCCIeDigaDCYWBiAUBiAcDCYaCiQcDCYgECgcDCYYCiQWCCIUBiASBh4UCCIWCCIUBiAaCiQUBiAQBB4UBiAUBiAQBB4MAhgUBiASBiAUBiAWCCIcDiYCAgICAgICAgICAgICAgIEBAQEBAQGBgYGBgYEBAYEBAQGBAQGBgYICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgGBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgIBggGBgYEBAQEBAQGBgYGBgYEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICBAQEBAQEBAQEBAQCBAICAgIEBAQGBgYKCgoMDAwKCgoICAgMDAwMDAwKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwMDAwICAgICAgMCgwKCgoGBgYEBAQEAgQCAgIEBAQEBAQEBAQEBAQCAgICAgICAgICAgIKAhgMBBoQBBwOAhwQBBwQBBwUBiASBB4QBBwQBBwQBBwQBBoUBh4UBiAOBBwSBh4SBiAQBBwQBBwQBBwOBBoQBBwSBh4QBB4QBBwOAhoSBh4UBiAUBiASBB4QBBwMAhoSBh4YCCIYCiQYCiQUCCAUBiAUBiAWCCIMBBoSBiAUCCISECYWIjIWIjIWIjIYIjIYIjIYIjIYIjIaIjIaJDIaIjIaIjAaJDIaIjIaIjIaIjIaJDIYIjIWIDIWHjASHC4OGCwOGi4SHjASHjIUIDIWIDIUHjISHjISHDAOGi4OGCwSHC4WHjAWIDIYIjIaJDIaIjIaIjIaIjIaIjIaJDIaJDIaJDIaIjIYIjIYJDQYHjAWDCQYCCIcDigaDCQgEiokFCweDigWCCIaCiYaCiQaDCYeDigaCiQeDigaDCYUBiAYCiIcDCYaCiQSBh4UCCAcCiYYCiQaDCYgECgcDigYCiQUBiAUBiASBh4UCCIUBiAUCCAaCiQSBiAQBBwSBh4UBiAQBBwKAhgUBh4SBiAUBiAUCCAaDCYCAgICAgICAgICAgIEAgQEAgIEBAQEBAQEBAQGBgYGBgYGBgYICAgICAgICAgGBgYICAgKCgoGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGCAYGCAgGBgYICAgICAgICAYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoGBgYICAgICAgICAgIBggGBgYGBgYGBgYEBAQEBAQEAgIEAgQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYMDAwQEBAODg4ICAgKCgoMDAwMDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwKCgoICAgMDAwQEBAODg4ICAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgIKAhgQBBwOBBwOBBwQBBwOBBwSBh4OAhoQBBwSBBwQBBwOBBwUBiASBiAQBBwUBh4QBB4QBBwQBBwQBBwOAhoSBBwSBB4QBB4QBBwQAhoSBh4UBiAQBh4QBB4QBBwOAhwSBiAYCCIYCiQWCCIUBiASBh4UBiAUCCIOBBoSBh4WDCYUDiQUFioWIjIWIjIWIjIWIjIYIjIYIjIYIjIYIjIYIjIYIjIYIjIaIjIaIjIaIjIaIjIYIjIWIDISHC4OGCwMGCwQHC4SHjAUHjIYIDIaIjIYIjIUHjISHjAQHC4MGCwOGCwSHC4WIDIYIjIaIjIaIjIaIjIYIjIYIjIYIjIYIjIYIjIYIjIYIjIYJDIYFiwWBCAWCiQcDiYYCiQgECogEiwcDCYWCiIcDiYYCiQaCiQcDCgaDCYeDigYCiQUBiAYCCQcDCYWCCIQBBwUCCAaDCYYCCQYCiQeDigcDCYaCiQSBiAQBB4SBB4UBiAUBiAUBiAYCiQSBh4QBBwSBh4SBh4MAhoIAhgUBh4QBB4SBiASBiAaDCQCAgICAgICAgICAgIEBAQEBAQEAgICAgIEBAQEBAQEBAYGBgYICAgKCgoKCgoGBgYODg4MDAwKCgoICAgGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGCAYIBggGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYICAgMDAwODg4ICAgKCgoMDAwICAgGBgYGBgYEBAQEBAQCAgQCAgIEAgQEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYODg4MDAwICAgICAgMDAwMDAwKCgoICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgMDAwODg4KCgoGBgYMDAwODg4GBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAYEBAQCAgICAgICAgICAgICAgICAgIMAhoQBBwQBBwSBBwQBBwQBh4SBiAOAhoSBB4QBBwOAhoQBBwUBiAQBB4SBh4UBiAQBBwQBBwQBBwQBBwOBBwSBBwQBBwQBBwQBBwQAhwSBh4UBiAQBB4QBBwQAhwQBBwUCCIYCCIWCCIWCCISBh4SBh4SBh4UBiAOBBwSBBwUDiQUGiwSEiYSEiYWIDAWIjIWIjIWIjIWIjIWIjIWIjIYIjIYIjIYIjIYIjIaIjIaIjIaIjIYIjIWHjAQGiwQGi4QGi4UHjAWIDIWIDIeJDIkKjYcJDIWHjIWHjAUHjAOGiwQGiwQGiwWHjAaIjIaIjIaIjIaIjIYIjIYIjIYIjIYIjIWIjIWIjIWIjIWIjIYFCoUCCIWEigaDCYYCCIgECoeDigcDiYWCiIeDigYCiQYCiQcDCYaCiQcDigWCCIUBiAYCCIaDCYUCCAQBBwWCCIaCiQWCCIaDCYaDCYcDCYaDCYSBiAQBBwSBB4UBiASBiAUBiAYCCISBB4QBBwSBh4SBh4MAhoMAhoSBh4QBB4SBh4SBh4aDCQCAgICAgICAgICAgIEBAQEBAQEBAQEBAICAgIEBAQEBAQGBgYICAgICAgICAgICAgMDAwKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYICAgGBgYGBgYGBgYICAgICAgGCAgGBgYGBgYIBggICAgGBgYGBgYGBgYGBgYICAgKCgoKCgoMDAwKCgoICAgICAgICAgGBgYGBgYEBAQCAgICAgIEBAQEBAQEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQGBgYICAgODg4QEBAMDAwGBgYEBAQKCgoMDAwICAgICAgMDAwMDAwKCgoICAgICAgICAgGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYICAgICAgKCgoICAgMDAwODg4KCgoICAgMDAwMDAwGBgYEBAQICAgQEBAQEBAKCgoGBggGBgYEBAQCAgICAgICAgICAgICAgICAgICAgIOBBoQBBwOBBwQBBwOBBwSBiASBh4QBBwSBB4OBBwMAhoSBB4SBh4OBBwQBBwSBh4OBBwQBB4QBBwQBBwOBBwSBBwQBBwSBh4QBBwQBBwQBB4UBiASBB4QBBwOAhoQBBwWCCIWCCIWCCIUCCASBB4SBh4SBh4SBh4QBB4SBBwQBh4SGi4UIjISECYSFCgUIjIWIDIWIDIWIDIWIjIWIjIWIjIYIjIYIjIYIjIaIjIaIjIaIjIYIjISHC4QGiwSHC4UHC4WHjAYIDIaIDIcJDIiJjQcIjIYIDIYIDIWHjAUHC4SHC4QGi4SHC4YIjIaIjIaIjIaIjIYIjIYIjIYIjIWIjIWIjIWIjIWIjIWIjIWFCoUECYWFiwYCCIWCCIgECoeDigYCiQWCCIeDiYYCiQYCiQcDCYaCiQcDCYUCCASBB4WCCIaCiQUCCAOBBoWCCIYCCIUCCIYCiQaCiQaDCYaCiQSBh4QBBwQBBwUBiAUBiAUBiAWCCIQBB4QBBwQBB4SBh4MAhoOBBoQBB4QBBwSBB4SBh4YCiQCAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgODg4ODg4KCgoKCgoMDAwMDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwMDAwKCgoICAgODg4ODg4KCgoGBgYEBAQCAgIEBAQEBAQEBAQEBAQEAgQCAgICAgICAgICAgIEBAQCAgICAgICAgICAgICAgICAgICBAIEBAQGBgYODg4WFhYUFBQODg4KCgoGBgYEBAQICAgODg4KCgoICAgMDAwMDAwMDAwKCgoKCgoICAgGBgYGBgYICAgICAgGBgYGBgYGBgYKCgoKCgoKCgoMDAwODg4KCgoKCgoODg4MDAwEBAQEBAQKCgoMDAwUFBQWFhYUFBQICAgEBAQEBAQCAgICAgICAgICAgICAgICAgIEAgIQBBwQBBwOBBwQBBwOBB4SBiAOBBwOBBwQBB4OAhwOBBwSBh4QBh4QBBwSBh4OBBwOBBwQBB4QBBwQBBwOBBwQBBwSBh4SBh4QBBwQBBwQBBwWBiASBB4QBBwOAhoQBBwWCCIWCCIUBiAUBiASBh4SBh4SBB4SBB4SBB4SBBwMAhoQFigUIjQUIDISFioUHjAUIDIUIDIUIDIUIDIWIDIWIDIWIjIYIjIYIjIYIjIaIjIaIjIWIDAQGi4SHC4WHjAWIDASHjIUHjIaIDIcIjIeJDIcIjIYIDIUHjAUHjIWIDIUHjASHC4SGi4YIDAaIjIaIjIYIjIYIjIYIjIWIjIWIDIWIDIUIDIUIDIUIDIWFioUFiwWFioYCCIWCCIcDiYaDCYWCCIWCCIeDigYCiQYCCIaCiQaDCYaDCYSBiAQBB4UBiAYCiQSBh4MAhoUCCAUBiIUBiAWCiIYCiQWCCIYCiQSBh4QBBwSBBwSBh4UBiAWCCISBiAQBBwOAhwQBB4QBB4MAhgOBBoQBBwQBBwQBBwQBB4aCiQCAgICAgICAgICAgICAgICAgIEBAQEBAQGBgYEBAYEBAQEBAQEBAQGBgYMDAwQEBAKCgoICAgMDAwMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwMDAwICAgICAgODg4MDAwICAgEBAQEBAQEBAQEBAQGBgYGBgQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQKCgoUFBQUFBQQEBAODg4MDAwICAgEBAQICAgODg4KCgoICAgODg4ODg4MDAwMDAwKCgoGBgYGBgYICAgICAgGBgYGBgYGBgYMDAwMDAwODg4ODg4KCgoKCgoODg4KCgoEBAQGBgYMDAwODg4QEBAUFBQUFBQODg4EBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgIQBBwQBBwSBB4QBBwQBh4UBiAMBBoOBBwSBB4OAhoQBBwSBh4OBBwQBBwUBiAQBBwQBB4QBB4OAhoOBBoOBBoQBBwSBB4QBB4QBB4QBBwQBBoUBiASBB4QBBwOAhoQBBwUBiAWCCIUBiASBiASBh4SBB4SBB4QBB4QBB4SBB4MAhoOFCYUIjIUIDIUHjAUHjIUIDIUIDIUIDIUIDIWIDIWIDIWIjIWIjIYIjIYIjIaIjIYIjIWIDAQGi4UHC4WIDAQGCoMECQSGCoWHjAaIDAcIjIaIDAWHjASGCoMECQSGiwWHjASHC4SHC4WIDAYIjIaIjIYIjAYIjIWIjIWIjIWIjIWIDIUIDIUIDIUHjIUFioUGCwYEioaCCIYCiQYCiQYCiQUBiAWCCIcDCgWCCIYCiQYCCQcDCYYCiQQBB4SBB4WCCAWCCIQBB4MAhoUBiAUBiASBh4WCCIYCiQYCCIYCiQSBh4QAhwQBBwQBB4SBiAWCCISBiAQBBwOAhoQBB4QBBwKAhgMBBoQBBwQBBwQBBwOBB4aCiQCAgICAgICAgICAgICAgICAgICBAQEBAQGBgYGBgYGBgYICAgMDAwICAgGBgYICAgMDAwKCgoICAgKCgoODg4MDAwICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwMDAwICAgICAgMDAwKCgoEBAQGBgYKCgoKCgoGBgYGBgYGBgYEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQKCgoSEhISEhIODg4ODg4MDAwICAgEBAQICAgODg4KCgoKCgoODg4MDAwMDAwKCgoICAgICAgICAgICAgGBgYICAgICAgMDAwMDAwODg4MDAwKCgoODg4KCgoGBgYGBgYMDAwODg4MDAwQEBASEhIODg4GBgYEBAQEBAQEBAQEBAQCBAQCAgICAgICAgICAgICAgIQBBwQBBwQBB4OBBwUBiASBh4MAhoQBB4QBBwOBBoOBBwQBBwOBBwQBB4UBiAQBBwQBBwQBBwOAhoMAhoMBBoQBB4SBB4QBh4QBB4OBBoMBBoUBiASBB4QBBwOAhoQBBwUBh4WCCAUBiASBh4SBh4QBB4SBB4QBBwQBBwQBB4OAhoOECQSIDISHjASIDISHjISHjIUHjIUIDIUIDIUIDIUIDIWIDIWIDIYIjIYIjIYIjIWIDIWIDAQGi4SHC4WIDIOFigCBBQECBgOFCgWHjAYIDAWHjAOFCgEBhgCBBQQGCoWIDASHC4QGi4WIDAWIDIYIjIYIjIYIjIWIjAWIDAUIDIUIDIUIDIUIDIUHjAUEigUFiwaDiYaCCQYCiQWCiQYCCISBh4WCCIaCiQWCCIYCCQWCCIcDCYWCCIMBBwQBB4UBiAWCCIQBBwMAhgUBh4SBh4QBB4UBiAYCCIWCCIYCiQQBh4OAhoQBBwQBB4SBiAUCCASBh4QBBwOBBoQBB4OBBwKAhgOBBwQBBwQBBwQBBwQBh4aDCYEBAQCAgICAgICAgICAgICAgICAgIEBAQEBAQGBgYMDAwUFBQUFBQODg4ICAgEBAQGBgYMDAwMDAwICAgKCgoODg4MDAwKCgoKCgoKCgoGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYICAgKCgoKCgoKCgoODg4MDAwICAgKCgoODg4ICAgEBAQGBgYMDAwUFBQUFBQQEBAGCAgGBAQEBAQCAgICAgICAgICAgICAgICAgICAgIEBAQCAgICAgICAgICAgICBAQEBAQEBgYGBgYEBAQEBAQEBAQGBgYODg4ODg4MDAwMDAwMDAwICAgEBgQGBgYKDAoMDAwMDAwOEA4MDAwKCgoICAgICAgICAgICAgICAgICAgICAgMDAwODg4ODg4KDAoMDAwICAgEBAQGBgYKCgoMDAwMDAwMDAwODg4ICAgEBAQEBAQEBAQGBgYGBgYEBAQEBAQCAgICAgICAgICAgICBAIQBBwQBB4QBBwQBh4WCCAOBBwOBBwSBB4QBBwOBBwQBBwQBB4QBBwSBiASBB4OAhoQBB4QBBwQBBwQBBwQBB4QBB4QBBwSBh4SBB4MAhoMAhoUBiAQBBwQBBwOAhoQBBwSBh4UBiASBiAQBB4SBh4SBB4QBBwQBBwOBBwQBBwOAhoKCiASHjASHjISHjASHjASHjASHjAUIDIUIDIUIDIUIDIUIDIWIDIWIjIYIjIWIjIWIjAWIDASHC4OGCwSHC4UHjAMGCoKFCgMFioSGiwUHC4QGCwMFioKFCgMGCoUHjASGi4OGCwSHC4YIDIWIjAYIjIYIjIWIjIWIDIUIDIUIDIUIDIUIDIUIDIUHDAUGCwUGCwYCiQaCiQYCiQWCCIWBiASBh4YCiQaCiQUBiAWCCIWCCIaCiYUCCAOAhoQBBwSBh4UBiAMAhoIAhgUBh4QBBwQBBwUBiAWCCIWCCIWCCISBh4OAhoQBBwQBB4UBiAUBiAQBB4QBBwOBBoSBB4OAhoKAhgQBBwOBBwQBBoOBBoQBh4YCiQEBAQCAgICAgICAgICAgICAgICAgICAgIEBAQEBAQODg4WFhYUFBQQEBAMDAwICAgEBAQGBgYODg4ODg4ICAgMDAwODg4MDAwKCgoMDAwICAgGBgYGBgYICAgICAgGBgYGBgYGBgYMDAwKCgoMDAwODg4MDAwICAgMDAwODg4ICAgEBAQICAgMDAwODg4SEhIWFhYUFBIGBgYEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgACAgAAAgAAAgAAAgACAgACBAIEBgIEBgQGCAQGCAQEBgQCBAICBAIICAYMDgoICggGCAYICggICAgEBAQGBgYKCgoKCgoODg4ODg4ICggGCAQGCAYGCAYGCAYGCAYGCAYGCAYMDAwQEA4MDAwMCgoICAgEBAQGBgYICggICgYICggKDAoICggEBAICBAIEBgQGCAYGCAQEBgQEBgICBAICBAACAgAAAgAAAgACAgACAgAQBB4QBB4OBBwUBiAUBiAOBBoQBBwQBB4OAhwOBBwSBh4QBBwQBB4UBiAQBBwOBBoSBB4OBBwQBBwOBBoQBBwQBBwOBBwQBB4SBB4MAhgMAhoUBiASBB4QBBwOBBwQBBwQBB4UBiASBiAQBB4SBh4SBB4OBBwQBBwOBBwQBBwQAhoMBhwQGCwSIDISHjASHjASHjASIDISIDIUIDIUIDIUIDIUIDIWIjIWIjIWIjIYIjIYIjIYIjIWIDISHjASGjASHC4SHDASHDAUHjAUHC4UHC4UHC4UHi4SHDASHC4SHC4SGi4SHjAWIDIYIjIYIjIYIjIWIjIWIDIWIjIUIDIUIDIUIDISIDIUIDISHjISIDIWFiwaCiQaCiQYCCIWCCIUCCASBiAYCiQYCCQSBiAUBiAUCCIYCiQSBh4OBBoSBBwSBh4SBh4MAhoMBBoSBh4QBBwSBBwUBiAWCCIWCCIWCCISBBwOAhoQBBwQBB4UBiASBh4QBBwQBBoOBBoSBB4OAhoKAhgQBBwOBBwOBBoOBBoQBh4YCCICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQGBgYQEBAUFBQQEBAODg4ODg4KCgoGBgYGBgYMDAwMDAwKCgoMDAwODg4MDAwMDAwKCgoGBgYGBgYICAgICAgGBgYICAgICAgMDAwMDAwODg4ODg4KCgoMDAwODg4ICAgEBAQICAgMDAwODg4QEBAUFBQSEhIKCgoEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIkCi4mDC4mDC4mDDAmDDAmDDAkDC4kECwmDiwkDiomEC4mEC4kDiwmEC4mDiwkDiomEC4mEC4oDi4qDDIwEjw2GD46HD46HD44Gj4oDjIqEDAuEjQuEjQuEjQuEjQuEjQuEjQuEjQoDjA2GD46HD46HD44Gj4yFDwsDjYmDC4mEC4mEC4kDiomECwmEC4kDiwmEC4mEC4kDiomDiwkECwkDC4mDDAmDDAmDDAmDC4mDC4kCiwSBB4QBB4QBB4WCCISBh4OBBoQBB4QBBwQBBwSBB4QBB4OBBwSBiAWCCAOAhoOBBwQBBwQBBwQBBwKAhgOBBwQBBwQBBwSBB4QBBwIAhgOAhoSBh4QBBwQBBwOAhwQBBwSBh4SBh4UBiASBh4QBB4QBBwOBBwOBBwOBBwQBBwQAhwMBBoOFioSIDISHjASHjISHjISHjISIDISIDISIDISIDIUIDIUIDIUIDAWIDIWIjIYIjIWIDIWIDIWIDIWHjIUHjAUHjAWHjAYIDAaIDAYHjAaIDAYIDAWHjAUHjAUHjAWIDIWIDIWIDIWIDIWIjIWIDIWIDAWIDIUIDIUIDISIDISIDISIDISIDISIDIUHDAYDiYYCCIYCCQYCCIWCCIUBiAWCCIaDCYWCCISBh4UBiAUBiAWCCIQBB4QBBwQBBwSBh4SBh4MAhgMBBoQBB4QBBwQBBwUBiAWBiAWCCIWCCASBBwOAhoQBBwSBB4UBiAQBB4QBBwOAhoOBBoQBBwOAhoMAhgQBBwQBBwOBBwQBBwSBh4WCCICAgICAgICAgICAgICAgIEBAIEBAQEBAQEBAQEBAQEBAQGBgYMDAwQEBAODg4MDAwODg4KCgoGBgYGBgYKCgoMDAwKCgoODg4ODg4MDAwKCgoICAgICAgICAgICAgGBgYICAgICAgMDAwMDAwODg4KCgoMDAwMDAwGBgYEBAQICAgMDAwMDAwMDAwQEBAODg4ICAgEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgIoDDIoDDIoDDIoDDIoDDIoDDIkDiwgFiQgFiQcDiAiFiYiFiYaDiAiFiYgFCQcDiAiGCYgFiQoEjAsDjg0FD48HD4+ID4+ID4+ID4qEDQgBigyFD4yFD4oDDQmCjAkCi4mCjAkCC4oDDA8HD4+ID4+ID4+Hj42Fj4uDjokDiwgFiQiGCYcDiAgFiQiFiYaDiAiFiYiFiYcDiAgFiQgFiQkDiwoDDIoDDIoDDIoDDIoDDImCjASBB4SBB4SBiAUBiAQBBwOBBwQBB4QBBwQBBwSBB4QBBwQBBwUCCASBh4OAhoQBBwOBBwSBB4OBBwMAhoQBBwOBBwQBBwSBBwOAhoKAhgQBBwSBh4QBBwQBBwOBBwQBB4SBB4SBh4UBiASBh4OBBwSBBwQBBwQBBwQBBwQBBwQBBwMAhgMEiYSIDQSHjISHjISHjISHjISHjISHjISHjIUIDAUIDIUIDAUIDAUIDAWIDAWIDAWIDAYIjIWIDAYIDAYIjIYIjIYIDAYIDAYIDAUHjAYIDAYIDAYIDAYIjIYIjIWIDAYIDAYIDIWIDAWIDAWIDAUIDAUHjAUIDASIDISIDISIDISHjISIDISIDIYFiwaCCIYCiIYCiQWCCIUCCASBh4WCCIYCiQUBiASBB4WBiAWCCIUCCAOBBwQBBwQBBwQBB4QBBwMAhoOBBoQBBwOBBwQBBwUBh4UBiAWCCIUBh4QBBwOAhoQBBwSBBwUBh4QBBwOBBwQBBwQBBwQBBwKAhgMAhoQBBwQBBoQBBwOBBwQBh4UBiACAgICAgICAgIAAgACAgICAgIEBAQEBgQGBgYGBgYGBgYEBgQEBAQGCAYMDAwODgwKCgoKCgoICggGBgQEBAIGCAYKDAoKDAoOEA4MDgwKCggICAgICAgICAgICAgICAgICAgICAgMDAwOEA4MDgwKDAoICggEBAQEBgQICAgKDAoKCgoMDAwMDgwICggEBAQEBAQGBgYGBgYGBgYGBgYEBAQCBAICAgIAAgAAAgACAgICAgIsEDYqDjQmDDAmCjAmCi4mCjAgCigcEiAaEh4UCBoiFiYeFCASBhYgFCIYEBwWChogFiQYEBwoEiwkDCwWChocDh4gFCAeEiAcEB4kDiweBiYyFDoyFDwmDDAkCi4iCiwkCiwiCCwmDC4iECYcEh4gFCAcEB4WChogCigiDCgaEhwgFiQWCBoaEh4gFCISBhYeFCAiFiYUCBoaEh4cEiAgCigmCjAmCi4mCjAmDDAqDjQoDjISBh4SBh4UBiASBiAOBBwQBBwQBB4QBBwQBBwSBB4QBB4SBh4WCCAQBBwOBBoQBBwOBBwUBh4OBBoOBBoQBBwOBBwQBBwQBBwMAhoMAhoQBBwSBiAOBBwOBBwQBB4QBB4QBB4QBBwSBh4SBh4QBBwSBB4SBB4QBBwQBBwQBBwQBB4OAhoOCiASHjISHjISHjASHjASHjASHjASHjASHjASHjASHjAUHjAUHjAUHjAUIDAWIDAWIDAYIjIYIjIYIjIYIjIaIjIaJDIaIjIWIDAWHjAWIDAaIjIaJDIaIjIYIjIYIjIYIjIWIjIWIDAWIDAUIDAUHjAUHjAUHjASHjASHjASHjASHjASIDISHDAWDCQYCiIaDCQWCiQUCiISBh4SBh4UBiAWCCISBh4SBB4SBiAUCCIUBiAOBBwOAhoQAhwQBB4QBBwKAhgOBBoSBBwOBBoQBBwUBh4SBiAWBiASBh4QBBwOAhoQBBwQBBwUBiAQBh4OBBwOAhwQBBwQBBwKAhgOBBoOBBwOBBoQBBwQBBwSBh4UBh4IBAgIBAgIBAgIBAgIBggIBAgIBAgIBAgKBgoMCAwMCAwKBgwIBAoIBAgKBgoODBAOCg4MCAwOCA4SCBIQBhAQCBIUChQUDBYWDBYUDBYMCAwKBgoKBgoKBgoKBgoKBgoKBgoKBgoSDBIWDhgUDBYUDBYSCBIQBhASCBIOCBAMCAwOCg4OCg4KBgoIBAgIBAgKBgoMCAwMCAwKBgoKBAgIBAgIBAgIBggIBAgIBAgIBAgIBAgwFDosEDYqDjQoDDImCjAmCjAgCCYmCjAoDDAWBBwuEDgsEDQWBBwsDjYkDC4SBBguEDgmDC4oECweCiQAAAAABAAGCAQECAIAAgAgDCgeCCgwFDowFDomDDAkCi4iCiwiCiwiCiwmDDAOBhAABgAGCgYCBgIAAAAWBhwiCiomDDAsEDYWBB4oDDIsDjYWBBwsEDQuEDgWBBwoDDAmCjAgCCYmCjAmCjAoDDIqDjQsEDgqEDQUBiAUBiAUBiASBB4OBBwQBB4QBBwQBBwSBBwSBB4QBB4UBiAUBiAOBBwQBBwQBBwSBB4SBB4OBBoQBBwQBBwQBBwQBBwOBBoKAhgOBBoSBB4QBB4OBBwOBBwSBh4QBBwSBB4QBB4SBh4SBiAQBBwQBBwSBB4OBBwQBBwSBB4SBiAOAhoMAhgOGCwSIDISHjASHjASHjASHjASHjAQHjAQHjAQHC4SHjASHjAUHjIUIDIWIDIWIjAWIjAWHiwSGigQFiQSGCYWHi4aIjIYIDAWIDAYIDIYIjIWHi4SGCYQFiQSGigUHiwWIjAWIjIUIDIUIDIUHjISHjASHjAQHC4QHjASHjASHjASIDISFiwSBiAWECgYDCYUDiYUCiISBB4SBh4UBiAUBiASBB4SBh4QBh4UCCISBiAQBBwOAhoOBBoQBB4OBBwKAhgOBBwQBBwOBBoQBBwSBh4SBh4UBiAQBB4QBB4OAhoQBBwQBBwUBiAQBh4QBB4MAhoQBBwQBBwMAhgOBBoQBBwOAhoOBBwSBB4UBh4SBB4kCi4mDC4mDC4mDDAmDDAmDDAkDC4kECwmDiwkDiomEC4mEC4kDiwmEC4mDiwkDiomEC4mEC4oDi4qDDIwEjw2GD46HD46HD44Gj4oDjIqEDAuEjQuEjQuEjQuEjQuEjQuEjQuEjQoDjA2GD46HD46HD44Gj4yFDwsDjYmDC4mEC4mEC4kDiomECwmEC4kDiwmEC4mEC4kDiomDiwkECwkDC4mDDAmDDAmDDAmDC4mDC4kCiwuEjgsEDYqDjQoDDImCjAmCjAeCCYmDC4mDC4UBBosEDYqEDIWBBwqDjQkDCwSBBgsEDYkDC4kDiomDC4aCiAeDiIgECIgECIgECQkDi4eBiYyFDowFDomDDAkCi4iCiwkCiwiCCwmDDAmEiogECAgECIeDiIaCiAkDCwgCiYmDi4sEDYWBBwmDDAqDjQWBBwqEDIsEDYUBBomDC4mDC4eCCYmCjAmCjAoDDIqDjQsEDYqEDQSBh4UBiAUBiAQBBwQBBwSBh4QBBwQBBwSBB4SBh4SBh4UBiASBB4MBBwQBB4QBBwSBh4OBBwOBBwSBB4OBBwSBB4QBBwOBBwMAhoOBBoQBB4QBB4QBBwOBBwUBiASBB4QBBwQBBwQBB4SBiAQBBwQBBwQBBwQBBwQBBwSBh4UBiAQBBwMABgMCiAQHjASHjAQHjAQHjAQHjAQHDAQHC4QHC4OHC4QHC4SHjASHC4QGioSGCYQFCIMDhwKDBgKChgMChYMChYMDhoQEiAQFCIQFCIQFCIQEiAMDhoMChYKChYKChgKDBgMEBwQFCISGigQGioSHC4QHi4QHC4OHC4QHC4SHjASHjASHjASECYSEigSEigUDCQUFCoSCCAQBBwSBh4UBiASBiASBB4SBB4SBh4WCCIQBB4QBBwOAhoOBBwSBB4OAhoKAhgQBBwOBBwOBBwQBBwQBBwSBB4UBiASBh4QBB4OAhoQBBwQBBwSBh4QBBwQBB4OBBwQBBwOAhoKAhgOBBoQBBwOAhoOBBwQBB4SBh4QBB4oDjImDDAmDC4kCi4kCi4mCjAgDCYYGBoWFhgSChYcGh4aGBoQChIaGBwWFBYUDBYcGhwWFBYmEioqDjQqEjQyGDY0HDY0HDY0GjgsEjYmFCgUDhQWDhYYEBgYEBgYEBgWDhYaEBwsEjQ0GDg0HDY0HDYyGjYsFDYqDjQgDCYWFhYcGhwUDBYWFBYaGBwQChIaGBocGh4SChYWFhgYGBogDCYmCjAkCi4kCi4mDC4oDDAmDDAuEjgsEDYqDjQoDDImDDAmCjAeCCYmDC4mDC4UBBosEDYqEDIWBBwqDjQkDCwSBBgsEDYkDC4kDiooDjIoEDAuFjYyGjYyGjYwGDYmDi4eBiYwFDowFDomDDAkCi4iCiwkCiwiCCwmDC4wFjYyGjYyGjYwGDYqEjIoDjIeCCYmDC4sEDYWBBwmDDAqDjQWBBwqEDIsEDYUBBomDC4mDC4eCCYmCjAmDDAoDDIqDjQsEDYqEDQSBiAUCCIUBiAQBBwSBh4SBh4QBBwQBBwSBB4SBh4UBiAUBiAQBBwOBBwQBB4QBB4SBh4OBBoSBB4QBB4QBB4QBB4OBBwOBBwOBBwOBBoOBBwQBh4QBB4OBBoUBiASBh4QBBwQBBwQBB4SBh4QBBwQBBwQBBwQBBwQBBwQBh4UBiAQBB4OAhoMAhgQGCoQHjAQHDAQHDAQHDAQHC4QHC4QHC4OGiwKFCIKEBoMDBYMChQKCBIKBhAKBhAKBhIKCBQMChYMChYKCBQKCBIKCBQMChYMCBQKCBQKCBQMChYMChQKCBQKBhIKBhAKBhAKCBIMChQMDhYKEBoKFCQOGiwQHDASHjASHjASHjASHC4SGi4SDCISFCoUFCoQBB4OAhwSBB4UBiAUBiASBB4SBB4UBiAWBiAQBBwQBBoOAhoOBBwSBB4OAhoKAhgQBBwOBBwOBBwSBBwOAhoQBB4SBh4SBB4QBB4OBBwQBBwOBBwSBh4QBBwQBBwOAhwQBBwMAhoKAhgOBBoOBBwOAhoQBBwQBBwQBBwQBBwuEjosEDYoDDQoDDImCjAmCjAkCi4oEDAkDiwYBh4sEjQmEi4WBhwoEDAiDigWBhwqEjIiDiooEi4gCiYCAgIICAgODg4MDAwIBggmDi4gDiIMCA4OCBAMBg4MBg4MBg4EBAYKCAoqEjIQCBIICggODg4KCgoCBAIYCB4kDCokDioqEjIYBh4kDiwoEDAWBhwmEi4sEjQYBh4kDiwoEDAkCi4mCjAmCjAoDDIoDDQsEDgqEDQuEjgsDjYoDDIoDDImCjAmCjAeCCYmDC4mDC4UBBosEDYqEDIWBBwqDjQkDCwSBBgsEDYkDC4kDiweCiQAAgAGCAYODg4MDgoGBgYgCigeCCYyFDowFDomDDAkCi4iCiwkCiwiCCwkDC4OBhAICggOEA4KCggAAgAWCBwgCigkDC4sEDQWBBwmDDAqDjQWBBwqEDIsEDYUBBomDC4mDC4eCCYmCjAmCjAoDDIoDDIsEDYqEDQUBiAWCCISBh4QBB4SBh4QBB4QBBwQBB4SBh4SBh4UBiAUBiAOBBwQBB4QBB4SBh4SBB4OBBwSBh4QBBwQBB4QBB4OBBwQBB4OBBwOBBwOBBwSBiASBB4MAhoSBB4QBB4QBBwQBBwQBB4SBh4SBB4QBBwSBB4QBB4QBBwQBh4WBiASBB4OBBwKABYODiIQHjAQHjAQHjAQHC4QHi4QHC4QHC4OGiwKFCIICA4GAggGBAoIBgwIBgwIBg4IBg4IBg4KBg4KBg4KBhAKBg4KBg4MBg4KBg4KBhAKBhAIBg4IBg4IBg4KBg4IBgwIBgwIBAwGBAoGAggICBAMFiQOHC4QHC4SHjASHjAQHjASHjASFioQFioQHjAUECgQBBwQBBwSBB4UBiASBh4QBBwQBB4WBiIUBh4QBBwQBBwOAhoOBBwSBBwOAhoMAhgQBBwOBBwOBBwSBB4OBBoQBB4SBh4QBB4QBB4QBBwOBBwOBBoSBiASBBwQBBwOBBwSBBwMAhoMAhgOBBoOBBwOAhwQBB4QBBwQBBwOBBwuEjosEDYqDjQoDDImDDAmCjAkCi4qDjYoDjAUBBosEDYqEDQWBBwsDjYkDC4SBBYsEDYmDC4mDiogCigEAgYIBAgKCAoIBggIBgoiDCoeCCgyFjoyFjwoDDIkCi4kCi4QBBQKCAoqEjISCBQGBgYKCAoIBggEAgQaCCAgCigmDC4sEDYWBBwmDDAqDjQWBBwqEDQsEDYUBBooDjAqDjYkCi4mCjAmDDAoDDIqDjQsEDgqEDQuEjgqDjYoDDIoDDImCjAmCjAeCCYkCi4mDC4WBBwsEDYoDjIWBBwqDjQkDCwSBBgsEDYkDC4iDCogCigMBA4OBhAQCBIOCBIQBhQgCigeCCYwFDowFDomDDAkCi4iCiwkCiwiCCwkDC4WCBoOBhAQCBIOBhIMBA4cCCQeCCYkDC4qEDQWBBwmDDAqDjQWBBwoDjIsEDYWBBwmDC4kCi4eCCYmCjAmCjAoDDIoDDIsEDYqDjQWCCIWCCISBB4SBh4SBh4QBBwQBBwSBB4UBiAUBiAWCCISBh4OBBwQBh4SBB4SBiAQBBwQBBwQBB4QBB4SBB4QBB4OBBwSBB4QBBwOBBwQBB4SBiAQBB4MAhoQBBwQBB4QBB4QBB4QBB4UBiASBh4SBB4QBB4SBB4QBBwQBh4UBiASBB4QBBwMAhoKBBoQFCgQHjAQHi4QHi4QHi4QHC4QHC4OHC4OGi4MFCIICBAGBg4GBg4ICBAICBIICBIKCBQGBhIGBBAGBA4GBA4GBAwIBg4GBAwGBA4GBBAGBBAIBhIKCBQKCBIICBIICBAIBg4GBg4IChIMFiQQHDAQHC4QHC4QHjASHjAQHjAQHC4QHC4QHjASGi4WDCQQBBwQAhwQBB4SBh4SBh4QBBwQBBwUBiAQBBwOBBwQBBwOAhoQBBwQBBwMAhgMAhoQBBwQBBwQBBwQBB4QBBwSBiASBh4SBB4QBBwQBBwOBBwOBBoSBh4OBBwQBBwQBBwSBBwMAhoIAhYOBBoQBBwOAhwQBB4QBBwQBBwQBBwuEjgsEDYqDjQoDDImCjAmCjAkCi4qDjQmDjAUBBosEDYqEDIWBBwqDjQkDCwSBBgsEDYkDC4kDigqDjQuEjgyFjo2Gjo2HDo2GjwoDjAeBiYyFDwyFDwmDDAkCi4kCi4OBBQKCAoqEjI0GDw2HDo2Gjo0GDouFDgqDjYeCCQmDi4sEDYWBBwmDDAqDjQWBBwqEDIsEDYUBBomDjAqDjQkCi4mCjAmCjAoDDIqDjQsEDYqEDQuEjgsEDYoDjIoDDImCjAmCjAeCCYmCjAmDDAWBBwsDjYqDjQWBBwqDjYkCi4SBBgsDjYmDC4eCiYoDDIqDjYuEjgwFDowFDowFDokDC4eCCYwFDowFDomDDAkCi4iCiwkCiwiCCwkCi4uEjgwFDowFDouEjgsDjYqDDQcCCQmDC4sDjYWBBwmDDAqDjQWBBwqDjQsDjYWBBwmDDAmCjAeCCYmCjAmCjAoDDIoDjIsEDYqDjQWCCIUBiASBh4UBiASBh4OBBwQBB4UBiAWCCIWCCAWCCIQBB4QBB4SBh4SBh4SBh4OBBwQBB4QBB4QBB4SBB4SBh4QBB4QBB4OBBwOBBwSBh4SBB4QBBwOAhoQBBwQBBwSBh4SBB4QBB4UBiAUBiASBh4SBh4SBh4QBBwQBh4UBh4SBB4QBBwOBBwMBBoSBBwSFigQHjAQHi4QHi4QHC4QHC4QHC4QHC4QHDAMFCIICBIKCBIMDBgMDBgODBoODhwODhwODhwMDBwMDBgODhgODhgODhgMDBoODBwODhwODhwODhwODhoMDBgMDBgKCBIICBIOFCQQHDAQHC4QHC4QHC4QHjASHjAQHDAQHC4QHDAQHjAUFCoWCCIQBBwQAhwOBBwQBh4SBh4OBBwOBBwUBiAOBBwMBBwQBBwOAhoSBBwQBBwKAhgOBBoOBBwOBBoQBBwOBBwOBBwSBiAQBB4QBBwQBBwQBBwQBBwOBBwQBB4QBBwQBBwQBBwQBBwKAhgKAhgOAhoQBBwQAhwQBB4QBBwOBBwQBBwuEjgsEDYoDjIoDDImDDAmCjAkCi4qDjQmDjAUBBosEDYqEDIWBBwqDjQkDCwSBBgsEDYkDC4kDioiDCoSCBQYDhweFCAcFB4YDhoiDCoeCCYwFDowFDomDDAkCi4kCiwOBBQKBgoqEDAcDiAaEhweFCAaEBwSCBQeCiYgCiYmDC4sEDQWBBwmDDAqDjQWBBwqEDIsEDYUBBomDjAqDjQkCi4mCjAmDDAoDDIoDjIsEDYqEDQqDjQoDjImDDAkCi4kCi4kCi4cCCQcDiAaDiASBBggEiYeECISBBYgEiQaDh4SBBggEiYaDh4eCiYeCCYKBAwQChIWEBgUDhYQCBIeCCYeCCYyFDowFDomDDAkCi4iCiwkCiwiCiwkCiwUCBgSDhQWEBgSDBYKBgwaCCIeCCQaDh4gEiYUBhgcDiAgEiQSBBYeECIgEiYSBBgcDiAcECAeCCQkCi4kCi4kCi4mDDAoDjImDjAYCCQUBiAUBiAWBiAQBB4OBBwSBB4WCCAUBiAWCCIUBiAQBB4SBB4SBB4UBiASBh4OBBwSBh4QBB4SBB4SBh4SBh4SBh4QBBwOBBwSBh4SBB4QBBwQBBwOAhoQBB4QBBwSBh4SBh4QBh4UBiAUBiAUBiAUBiAUBiAQBBwQBh4SBh4SBh4QBBwQBB4QCiAQCCAQDCIQGCoQHi4QHC4QHC4QHC4QHjAQHjAQHjAQHjAOFCQKCBQKCBQMChYODBgQDhoUFB4YFiAYGCAYGCIUFB4SEhwUFCAYGCIYFiAYFiAUFB4ODhoODBgMChgKCBQKCBQOFCQQHjIQHjAQHjAQHjAQHC4QHC4QHjAQHDAQHC4QHDAQHC4WECgUBiAQBBwOAhoQBBwSBh4SBh4OBBoQBBwUBiAQBB4QBB4OBBwOAhoSBB4QBBwMAhgOBBoOBBwOAhoQBB4QBBwOBBoSBiAQBB4QBBwQBBwQBBwQBBwQBBwSBh4QBB4QBBwOBBwQBBwKAhgKAhgOAhoSBBwOBBwQBBwQBBwOBBwQBBouEjgsDjYoDDIoDDImCjAmCjAkCi4qDjQmDjAUBBosEDYoDjIWBBwqDjQkDCwSBBgsEDYkDC4kDCweCiQAAAACBAIICAYGCAQCAgIeCiYeCCgwFDowFDomDDAkCi4kCiwOBBIKBgooDjAKBA4EBgIICgYEBgQAAAAWBhwgCigkDC4qEDQWBBwmDDAqDjQWBBwoDjIsEDYUBBomDjAqDjQkCi4mCjAmCjAoDDIoDDIsEDYqDjQmCjAmCjAoDDIoDDIoDDIoDDIiDCoUFhQSFBAaCCAaFhoSFBAUCBoWFhYSEhIgCigYFhgQEhAiCiocCCQCAgIEBAQICAgGBgYGBAYeCCYeCCgwFDowFDomDDAkCi4iCiwkCiwiCiwkCiwMBA4EBgQICAgGBgYAAgAWBhwiCioQEhAYFhgaCiASFBAWFhYUCBoSFBAaFhoaCCASFBAUFhQiDCooDDIoDDIoDDIoDDImDDAkCi4WCCIUBiAWCCIUBiAQBB4QBB4UBiAWCCIUBiAWCCISBh4SBh4SBh4SBh4UBiAOBBwQBB4SBB4QBB4SBh4UBiAUBiASBh4OBBwQBBwQBh4QBBwQBBwWCCISBh4QBBwQBBwSBh4SBh4QBB4UBiAUBiAUBiAUBiAUBiASBB4QBh4QBh4SBh4QBBwQBBwODiQQFigQFCgQGCoQHC4QHi4QHC4QHi4QHjAQHjAQHDAQHjAQHjIOFiYICBQKBhIMChYODBgQEBoUEhwUEhwSEhwQDhoODBgQEBoUEhwUEhwUEhwQDhoODBgMChYKBhIKChYOFigQHjIQHjAQHjAQHjAQHjAQHC4QHC4QHjAQHDAQHC4QHjASGCwWCiQUBiAQBBoOAhoQBBwSBh4UBiAOAhoOBBwSBh4QBBwQBB4OBBwOAhoSBBwOBBoKAhgOBBwQBBwOAhoQBB4QBBwOBBwUBiAQBB4QBBwQBBwOBBwOBBoQBBwSBiAOBBwQBB4QBBwQBBwKAhgKAhgOBBwSBBwQBBwQBB4QBBwOBBwQBBouEjgqDjYoDDIoDDImCjAmCjAkCi4qDjQmDjAWBBwsEDYqDjIWBBwqDjQkDCwSBBgsEDYkDC4gCigmDDAgDCgiDCokDiwkDiwmDi4kDCweCCYwFDowFDomCjAkCi4kCiwOBBQIBggmDi4mDjAkDiwkDiwkDiwgDCgmDC4eCCQmDC4qDjYWBBwmDDAqDjQWBBwqDjIsEDYWBBwmDjAqDjQkCi4mCjAmCjAoDDIoDDIsEDYmDC4mDDIoDDIoDDIoDDIoDDIoDDIkDC4WFBYQEBAcCCQaFBwQEBAaCCIWFBgSDhIkCiwYFBoQDhAiCiokCi4iCiwkCiwkDCwkDC4kDC4iCioeCCYyFDwwFDwoDDIkCi4kCiwkCi4iCiwkCiwkDC4kDC4kDC4kCiwiCiwkCi4gCCoQDhAYFBoeCiYQEBAWFBgaCCIQEBAaFBwcCCQQEBAWFBYkDC4oDDIoDDIoDDIoDDIoDDIkCi4UCCIWCCIWCCISBiAQBB4SBh4WCCIWCCIWCCAWCCISBh4UBiAUBiAUBiAUBiAOBBwSBh4QBB4QBB4SBh4SBiAUCCASBh4OBBwSBB4QBh4QBBwSBB4YCCIUCCAUBiASBh4SBB4QBB4QBB4UBiAUBiAUBiAUBiAUBiASBh4QBh4QBh4SBh4OBBwQBBwOBh4QGCoQHi4QHC4QHC4QHC4QHC4QHDAQHDAQHjAQHjAQHC4QHjAQHjIOGCoKDBoIBhAKCBQODBgQDhoQDhoODBgODBYODBgODBgODBgQDhoQDhoODBgKCBQIBhIKDBoOGCoQHjIQHDAQHDAQHDAQHjAQHDAQHC4QHC4QHDAQHC4QHjAQHjASEigWBiAUBh4QBBoOBBoQBBwUBiAUBiAOAhoOBBwSBh4QBBwQBB4OBBwQBBwSBBwMAhgKAhgOBBwQBBwOAhoQBB4QBBwOBBwUBiAQBB4QBB4QBBwOBBwMAhoQBBwSBiAOBBwSBB4QBBwQBBwKAhgMAhgQBBwQBB4OBBwSBB4OBBwOBBwQBBwsEjYqDjQoDDImDDAmCi4kCi4iCCwoDjAkDiwUBBgoEDImDi4UBBooDjAgDCoQBBYoDjIiDCoeCCYkCi4eCiYiDiomEi4mEi4kDiwiCioeCCYyFDwwFDwoCjIkCi4kCi4QBBQGBAgkDC4kDi4mEiwmEi4kECwgDCYkCiwcCCQiDCooDjAUBBokDCwmDjAUBBomDi4oEDIUBBgkDiwoDjAiCCwkCi4mCi4mDDAoDDIqDjQkDC4kCi4kCi4kCi4kCi4kCi4kCi4kCi4WDhoMCgweBigYDhwODBAiCCoWDhoQChQkCC4WDhgQChIiCCwmCjAoDDQqDDQqDDQqDDQqDDQiCCweCCYsEDQqEDQkCi4iCCwiCCoiCCogCCoiCCwoDDQqDDQqDDQqDDQoDDQoCjIkCCwQChIWDhogCCgMCgwYDhwiCCoODBAWDhweBiYMCgwWDhokCi4kCi4kCi4kCi4kCi4kCi4iCiwUBiAWCCIWCCASBh4QBh4UBiAWCCIUCCAYCCIUCCISBiAUCCASBiAWCCASBh4QBB4SBiAQBB4UBh4UBiAUBiAWCCIQBB4QBBwSBh4QBB4QBBwSBB4WCCIUBiAWCCIWCCISBiAQBB4SBh4UBiAUBiAUBiASBh4UBiAUBiAQBhwQBhwSBh4QBBwOBBoQBBwQDCIQHC4QHC4QHC4OHC4QHC4OHC4OHC4QHDAQHDAQHC4QHDAQHDAQHjIQHC4MFCIIChYKCBIMCBQMChYMChYMChYMChYMChYMChYMChYKCBQICBIIChYMFCIQHDAQHjIQHDAQHDAQHC4QHDAQHjAQHDAQHC4QHC4QHC4QHC4QHjAQHC4UDiQUBh4SBh4OAhoOBBoQBB4SBh4SBh4QBBwSBh4SBiASBBwSBBwOBBwQBBwSBB4KAhgMAhgOBBoOBBwOAhwSBB4QBBwQBBwWCCAQBB4OBBwQBB4QBBwOBBoQBBwSBiAQBB4SBB4QBB4SBB4MAhoMAhgOBBwQBB4QBBwQBB4OBBwOAhoQBBwmDDAmDDAmDDAmDDAmDC4kCi4gCigWFhgUEhQWBhoaFhwUFBYSBhYYFhoUEBQaCCAaFhoSEBIgCigcCCIAAgAECAQKDgoIDAgEBAIeCCYYBh4YDBwYDB4WChwWChoUCBgIBAoIBgoiCiwKBAwGCgQMDgoGCgYAAgAWBhogCCgSEBIaFhwWCBwUEhQYFhoSBhYUFBYaFhwWBhoUEhQWFhggCigkCi4mDC4mDDAmDDAmDDAiCiokCi4mDC4mDC4mDDAmDDAmDDAkDC4kECwmDiwkDiomEC4mEC4kDiwmEC4mDiwkDiomEC4mEC4oDi4qDDIwEjw2GD46HD46HD44Gj4oDjIqEDAuEjQuEjQuEjQuEjQuEjQuEjQuEjQoDjA2GD46HD46HD44Gj4yFDwsDjYmDC4mEC4mEC4kDiomECwmEC4kDiwmEC4mEC4kDiomDiwkECwkDC4mDDAmDDAmDDAmDC4mDC4kCiwWCCAWCCIUBiAQBh4SBiAWCCAWCCIUCCAYCCIUBiIWCCIUBiAUBiAWCCIQBB4SBiASBB4OBBwUBiAWCCIUCCIWBiAQBBwSBB4SBh4OBBwQBBwSBh4UBiAWBiAWCCIWCCISBh4QBh4UBiAWCCAUBiAWCCIUCCAUCCAWCCISBh4QBBwSBh4SBh4MBBoQBBwQCCAQFCgOHC4QHC4OHC4OHC4OHC4OHC4OHDAQHDAQHDAQHDAQHDAQHDASHjISHjIQHC4OFiQMDhwKDBgMDBgKChgKChYKChgMDBgMChgMDhwOFiYQHC4SHjIQHjIQHDAQHDAQHDAQHC4QHDAOHDAOHDAQHDAQHDAQHC4QHC4QHjAQFioUCCISBh4SBh4OAhoOBBoQBBwSBh4SBh4OBBwSBh4SBiAOBBwQBBwOBBwQBBwSBB4KAhgKAhgOAhoOBBwOAhwQBB4OBBwQBBwWCCIQBh4QBB4SBBwQBBwQBBwQBBwSBiAQBB4SBB4QBBwQBB4MAhoMAhgQBBwQBB4QBBwQBB4OBBwOAhoQBBwmCjAmCjAoDDIoDDIoDDIoDDQkDCwUFhQSEhAcCCIaFhwSEhAWCBwWFhgSEBIiCioYFhgQEBAiCiogCCgSBhYSBhYUBhgSBhgUBhgkCiwWCBwEBAIEBgQGCAYICAYGCAYGBgYIBAwiCioYCB4SBhYUBhgSBhgSBhYeCCYgCioQEBAYFhocCiQSEhIWFhgWCBwSEhAaFhwcCCISEhAUFhQkDCwoDDQoDDIoDDIoDDIoDDIkCi4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4WCCIWCCIUBiASBh4UCCAYCCIWCCAWCCIWCCIUBiAWCCIUBiAWCCIUBiASBh4UBiAQBB4OBBwWCCIUBiASBiASBh4SBB4UBiASBB4OBBwQBB4UBiAUBiAWCCAWCCIWCCASBh4SBiAWCCAUBiAUBiAWCCAWCCAWCCAWCCISBiAQBh4SBh4SBiAMBBoQBBwUBiAQDCIOGiwOHC4OGiwOHC4OHC4OHC4OHDAOHDAQHDAQHDAQHjAQHjASHjASHjIUIDQWIjQWIDIWIDAYIDAYHi4YHi4YHi4YIDAWHjAWIDIWIjQUIDISHjIQHjAQHjAQHjAQHDAQHDAOHDAOHDAOHDAOHDAQHC4QHC4QHjAQGiwSDCIUBiASBh4SBB4OAhoQBBwQBBwSBh4QBB4OBBoSBh4QBh4OBBwQBBwQBBwQBBwSBB4KAhgKAhgOBBoQBBwQAhwQBB4QBBwQBB4WBiAQBh4QBB4SBBwQBB4QBBwQBBwSBiAQBB4SBB4QBB4QBB4MAhoMAhoSBB4SBB4QBBwSBh4QBBwOAhoOAhwoDDIoDDIoDDIoDDIoDDIoDDImDDIWEhoODg4gCCgaEhwQDhAgCCoYEBoSDhQmCjAYEhoQDBIkCC4mCjAqDDQqDDYsDjYsDjYsDjYkCi4iCiwgCCogCCogCCogCCogCCogCCoiCiokCiwqDDQsDjYsDjYqDDYqDDYoCjIiCCwQDBIYEhogCCoODg4YEBogCCoQDhAaEhwgCCgODg4WEhomDDIoDDIoDDIoDDIoDDIoDDImCjAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQCAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAYCCIYCCISBh4UBiAWCCIYCCIUBiAYCCIUBiAWCCIWCCAUCCAYCCIUBiAUBiASBiAOBBwQBB4YCCISBh4QBB4QBB4SBB4UBiAQBBwQBBwSBB4UBiAUCCAWCCAWCCAUBiASBh4WCCAWCCIUBiAWCCAUBiAUBiAWCCIUBiASBiAQCB4QBh4UBiAOBBwQBBwUBiASCCAOFCgOHC4OHCwOGi4OHC4OHDAOHDAQHDAQHDAQHDAQHjAQHjISHjISIDIWIDIYIjIaIjIcJDQeJDQeJjQeJjQeJjQcJDQaJDQaIjIYIjIWIDIUIDISHjIQHjAQHjAQHDAQHDAQHDAOHC4OHC4OHDAQHC4QHjAQHDAQECYSBB4UBiASBh4QBB4OAhoQBBwQBBwSBh4QBBwOBBwUBiASBB4OBBwQBBwQBBwOBBwQBBwKAhgKAhgOBBwQBBwOAhwQBBwOBBwQBB4UBiAQBB4QBB4SBB4QBB4OBBwOBBwSBiASBB4SBB4SBB4SBB4MAhoMAhoSBh4QBB4QBBwQBh4QBBwOBBwOBBwYCB4YCB4YCB4YCB4YCB4YCB4aBiASCBYKCAwaCB4SDBYMCg4aCCASCBYMCBAaBh4QChQOCBIaCCAgCCgiCioiCioiCioiCioiCiweCCYYCB4aCCAaCCAaCCAaCCAaCCAaCCAaCB4cCCIiCiwiCioiCioiCioiCioiCiocCCQOCBIQChQYBhwIBgoSChYaCCAMCg4SDBYaCB4KCAwSCBYaBiAYCB4YCB4YCB4YCB4YCB4YBh4EBAQEBAQEBAQEBAYGBgYGBgYGBggIBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBggGBgYGBgYGBgYGBgYICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQICAgGBggGBgYGBgYEBAYEBAQYCiQWCCISBiAUCCAYCCIWCCAWCCAYCCIWBiAWCCIUCCAWCCIWCCIUBiAUBiASBh4QBBwSBh4UBiAQBBwQBBwQBBwSBh4UBiAOBBwQBBwUBiAWCCAUBiAUBiAUBiASBh4SBiAWCCIWCCAUCCAYCCIUBiASBh4YCCISBiASBh4QCCAQBh4UBiAQBBwOAhoSBh4SBiASCiIOGCoMHC4OGi4OHC4QHDAOHDAOHC4QHDAOHDAQHjAQHjISHjISIDIUIDIYIjIaIjIaIjIcJDIcJDIcJDIcJDIcJDIaIjIaIjIYIjIUIDISIDISHjIQHjIQHjAOHDAQHDAOHDAOHC4OHDAOHDAQHDAQHjAQFCoOBhwQBBwUBh4SBh4SBB4OAhoQBBwQBBwSBh4OBBwQBBwQBB4SBB4MBBoOBBwQBBwOBBwQBBwKAhgKAhgOBBwSBB4QBBwQBBwQBBwQBB4UBiASBB4SBB4SBB4SBB4OBBwQBBwUBiASBiASBB4QBB4QBBwMAhoOAhoSBh4QBB4QBBwSBh4QBB4OAhoOBBwYCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4YCB4GBgYEBAQEBAQGBgYGBgYICAgICAgICAgICAgICAgICAgICAgGBggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYICAgICAgGBgYGBgYICAgICAgGBgYICAgICAgICAgICAgGBgYIBggGBgYGBgYICAgICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYEBAQYCCQWCCIWCCIWCCIWCCIUBiAWCCIWBiAWBiAYCCIWCCIYCCIWBiAUBiAQBB4SBh4QBBwSBh4SBh4QBBwQBB4QBBwSBh4UBiAQBB4SBh4WCCIWCCAUBh4UBh4SBh4UBiAUBiAWCCIUCCAWCCAYCCISBiAQBBwUCCASBiAQBB4QBh4QBh4SBiAQBB4MAhoOBBwQBBwUBB4QECYMHCwOHC4OHC4QHC4OHC4OHDAOHDAOHDAQHjAQHjASHjISHjISIDIWIDIYIjIaIjIaIjIaIjIcIjQaIjQaIjIaIjIYIjIWIDIUIDISHjISHjIQHjIQHjIOHDAOHDAOHDAOHC4QHDAQHDAQHjAOGCoSCiIOAhoQBB4SBh4QBB4QBB4QBBwQBBwOBBoSBh4UBiASBiAOBBwSBB4OBBwQBBwQBBwQBBwQBBwKAhgMAhgQBBwQBBwQBBwSBB4OBBwSBB4UBiAQBB4SBh4SBB4QBB4QBBwQBBwUBiASBiAQBB4QBB4SBB4MAhoMAhoSBh4QBB4QBBwSBh4QBB4OAhoOBBwMBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4MBg4GBgYEBAQEBAQGBgYGBgYICAgICAgICAgICAgICAoKCgoKCgoICAgICAgICAgKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgGBgYICAgICAgICAgICAgICAgICAgGBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoICAgICAgICAgICAgICAgICAgICAYICAgICAgICAgICAgGBgYGBgYEBAQWCCIWCCIWCCIWCCIWCCAUBiAWCCIUBiAWCCIWCCIYCCIWCCIWBiASBB4QBB4SBh4QBBwSBh4QBBwQBBwQBB4QBBwSBB4SBB4SBh4UBiAWCCIUBiASBh4SBB4SBh4WCCIWCCIWCCAUBiAWCCIWCCIUBiAOBBwQBB4UBiAQBBwQBh4QBh4SBiASBB4OBBwQBBwMAhoSBBwSCiIOGCoMHC4OHC4OHC4OHC4OHC4OHDAOHDAOHjAQHjAQHjISHjISHjIWIDIYIjIYIjIYIjIYIjIYIjIYIjIYIjIYIjIYIDIWIDIUIDISHjISHjIQHjAQHjAOHDAOHDAOHDAOHC4OHC4QHDAQFCoQCCAQBBwQBBwSBiASBh4QBBwQBBwQBBwOBBoMBBoSBCAUBiAUBiAQBB4SBB4QBBwQBBwQBBwQBBwQBBwKAhgMAhgQBBwQBB4QBBwQBB4OBBwSBB4UBiAQBBwSBh4QBBwQBB4QBBwQBBwUBiAUBiAQBh4QBB4SBBwMAhoMAhoSBh4SBB4QBB4UBiASBB4OBBwOBBwEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgKCgoKDAoKCgoKCgoKCgoMDAwMCgwKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgKCgoICAgICAgKCgoICAgICAgKCgoICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYWCCIWCCIWCCIWCCIWCCAWCCAWBiAUBiAYCiQWCCIWCCIWCCAUBiAQBBwSBB4QBBwQBBwQBB4QBBwQBB4QBBwQBBwSBB4SBB4SBiAWCCAWCCAUBh4SBh4SBB4UBiAWCCIWCCAUCCAWCCIWCCIWCCAUBiAQBB4QBB4SBh4QBh4QBB4QBh4SBh4SBiASBiASBB4MAhoQBBwSBiAQFioMHC4OGi4OHC4OHC4OHC4OHDAOHDAOHDAQHDAQHjASHjASHjIUIDIWIDIWIDIWIDIYIDIWIDIYIDIWIDIWIDIWIDIWIDIUHjISHjISHjAQHjAQHjAOHDAOHDAOHDAOHC4OHDAQGi4QCCAQAhwOBBwOBBwSBiAQBB4QBBwQBBwQBBwQBBwOBBwSBh4SBiASBiAOBB4SBB4QBBwQBB4QBBwQBB4QBBwKAhgMAhgQBBwQBB4QBBwQBB4OBBwSBh4UBiAQBBwSBh4QBBwQBB4QBBwQBBwUBiIUBiASBh4QBBwQBB4MAhoOBBoUBh4SBB4QBh4UBiASBh4QBBwOBBwEBAQEBAQEBAQEBAYGBgYGBgYGBggICAgICAgICAgIBggKCgoQEBAQEBAODg4QEBAQEBAMDAwICAgMDAwODg4MDAwKCgoMDAwMDAwMDAwKCgoKCgoKCgoKCgoMDAwKCgoMDAwKCgoODg4MDAwODg4ODA4MDAwODg4MDAwICAgKCgoODg4ODg4ODg4QEBAQEBAMDAwICAgGBgYICAgICAgIBggGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYICAgICAgGBgYGBgYIBggICAgICAgKCgoMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKCgoKCgoKCgoKCgoKCgoICAgICAgMDAwICAgKCgoKCgoKCgoICAgKCgoKCgoKCgoKCgoKCgoKCgoMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKCgoICAgICAgICAgICAgGCAYGBgYICAgICAgWCCIWCCIWCCIWCCIUBiIWCCIUBiAYCCIYCiQYCCIWCCAUBiAUBh4QBBwSBh4QBB4QBB4QBBwQBBwQBB4QBBwQBBwSBB4SBB4SBiAUCCAUBiASBh4SBB4SBB4UBiAYCCIUBh4UBiAWCCIWCCIWCCAUBiAUBiAQBBwQBBwSBh4QBB4QBBwQBB4SBh4SBiASBh4OAhoQAhwQBh4OFioMHC4OGi4OGi4MGi4OGi4OHDAOHDAOHDAQHDAQHDIQHDASHjIUHjIWIDIWIDIWIDIWIDIWHjIWIDIWIDIWIDIWIDIUIDISHjISHjASHjAQHDAOHDAOHDAOHDAOHDAOHC4OHjAOFioOBBwQBBwOBBwOBBwUBiAQBBwQBBwQBBwQBBwQBBwOBBwQBB4UBiAUBiAQBB4SBB4OBBwQBB4QBBwQBB4QBB4KAhgMAhoQBB4SBB4QBBwQBh4OBBwSBh4UBiAQBBwUBiAQBB4SBB4QBBwQBB4UBiAUCCISBh4QBBwSBB4OAhoOBBoSBh4SBB4SBh4WBiASBiAQBBwQBBwGBgYEBAQEBAQGBgYGBgYICAgICAgICAgICAgICAgICAgICAgKCgoODg4ODg4ODg4ODg4ODg4KCgoICAgKCgoMDAwKCgoMCgwMDAwKCgoKCgoKCgoKCgoMCgwMDAwKCgoMDAwKCgoMDAwODg4ODg4MDAwMDAwKCgoICAgICAgMDAwMDAwMDAwODA4ODg4KCgoICAgICAgICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQGBAYGBgYEBAQICAgICAgICAgICAgICAgICAoKCgoKCgoMDAwODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4MDAwMDAwMDAwKCgoKCgoKCgoICAgICAgMDAwKCgoKCgoMDAwKCgoICAgKCgoKCgoKCgoKCgoMDAwMDAwMDAwMDAwODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4MDAwKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgWCCIWCCIWCCIUBiAUCCIUBiAWCCAYCiQWCCIWCCIWBiAUBiAQBB4QBBwSBh4QBB4SBB4QBBwQBB4QBB4OBBwSBBwSBB4SBh4UBiAUBiASBh4SBh4SBB4SBB4UBiAWCCISBh4WCCAWCCIWCCIUBiAWCCIWCCAQBBwOBBwSBh4QBB4QBBwQBBwQBB4QBh4UBiASBB4QAhwSBh4OFioMHC4MGi4MGi4MGi4MGi4MGjAOHDAOHDAQHDAQHDAQHDAQHDASHjAUHjAUIDIUHjIUHjIUHjIUHjIUHjIUIDIUHjASHjASHjASHDAQHDAQHDAOHDAOHDAOHDAOHDAOHC4OHjAOFCgOBBwSBB4OBBwQBBwUBiAQBBwQBBwOBBwQBBwOBBoQBB4SBh4SBiAUBiASBB4SBB4QBB4SBB4SBB4QBB4QBB4KAhgMAhoSBh4QBB4QBB4QBh4OBBwUBiAUBiAQBB4UBiAQBB4SBh4QBBwSBB4UBiAWCCISBh4QBB4SBB4OAhoOAhoUBh4SBB4SBh4WCCIUBiAQBBwQBBwGBgYEBAQEBAQGBgYGBgYICAgICAgICAgKCgoKCgoKCgoICAgICAgICAgMDAwQEBAODg4ODg4ODg4MDAwICAgKCAoMDAwKCgoMDAwMDAwKCgoKCgoKCgoMDAwMDAwMDAwMDAwKCgoMDAwODg4MDAwMDAwKCgoICAgICAgKCgoMDAwMDAwODA4MDAwICAgICAgICAgKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYEBAQEBAQGBgYGBAYEBAQEBgYGBgYGBgYICAgKCgoKCgoMDAwMDAwMDAwODg4OEA4QEBAQEBAQEBAQEBAODg4ODg4ODg4ODg4ODA4MDAwMDAwMDAwKCgoKCgoICAgODg4KCgoMDAwMDAwICAgICAgKCgoKCgoMDAwMDAwMDAwODg4ODg4ODg4ODg4ODg4ODg4QEBAQEBAQEBAODg4ODg4MDAwMDAwKCgoKCgoKCgoICAgICAgGBgYGBgYEBgYWCCIWCCIUBiASBh4UCCASBh4YCCIYCCIYCCIWCCIWBiAUBiAOBBwSBh4WCCASBh4QBB4QBBwSBB4OBBoOAhoSBB4SBh4SBh4UBiASBh4SBh4SBh4QBB4SBh4WCCIWCCISBh4UBiAWCCIUBiAUBiAWCCAUCCAQBBwQBBwSBh4QBBwQBBwQBBwQBBwQBBwUBiAWCCISBB4SCCAOFioMHC4MGi4MGi4MGi4MGi4MGi4MHDAOHDAOHDAOHDAQHDAQHDAQHDASHjASHjASHjASHjASHjISHjAUHjAUHjASHjASHjASHjAQHDAQHDAQHDAOHDAOHDAOHDAOHDAOHDAOHjAOEigOAhwSBBwOAhoSBh4UBiAQBBwSBB4OBBwOBBwMAhoSBh4SBiAUBiAUBiASBh4SBB4QBB4QBB4SBB4QBB4QBBwMAhoOAhoUBh4QBB4QBB4QBh4OBBwUBh4SBh4QBB4UBiAQBB4SBh4QBBwSBB4UCCIYCCISBiASBB4QBB4OAhoOBBwUBiASBB4SBiAWCCIUCCIQBBwQBBwGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoODg4MDAwKCgoICAgICAgICAgKCgoODg4ODg4MDAwMDAwMDAwICAgICAgKCgoMDAwMDAwMDAwKCgoKCgoMDAwMDAwKCgoMDAwMDAwODg4ODA4MCgwKCgoICAgICAgKCgoKCgoKCgoMDAwKCgoICAgICAgICAgKCgoMDAwODg4MDAwICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBgYGBgYICAYKCAgMCgwMDAwMDgwODg4QEBAQEBASEhISEhISEhIQEBAQEBAQEBAODg4ODg4ODg4ODg4MDAwMDAwMDAwKCgwKCgoODg4MDAwMDAwMDAwICAgKCgoKCgoMDAwMDAwMDAwODg4ODg4ODg4ODg4QEBAQEBASEhISEhISEhIQEBAODg4ODg4ODg4MDAwMDAwKDAoKCgoICAgGCAYGBgYEBgYEBAQWCCIWCCISBh4SBh4UBiAUBiAaCiQWCCAYCCIUBiAWCCIUBiAQBh4UBiAYCCIUBiAQBB4SBB4SBh4OAhoOBBwQBB4SBh4UBh4WCCASBh4QBB4SBh4QBB4SBh4WCCIUBiASBh4WCCIWCCISBiAUBiAUBiAUBiAQBBwSBB4SBh4QBBwQBBwQBBwQBBwQBBwUBiAWCCIWBiIUCCIOFioMHC4MGi4MGi4MGi4MGi4MGi4MGi4OHDAOHDAOGjAOHDAQHDAQHDAQHDASHjASHjASHjASHjASHjASHjASHDASHDAQHDAQHDAQHDAOHDAOHDAOHDAOHDAOHDAQHDAOHDAOHjIOEiYQAhwSBB4OBBoSBh4UBiAOBBwQBB4QBBwQBBwMAhoSBh4SBiAUBiAUBiASBiAQBB4QBBwQBB4QBBwQBB4SBBwMAhoOAhoSBh4QBB4QBBwSBh4QBBwSBh4SBh4SBB4UBiAQBB4UBiAQBBwSBB4UCCAWCCIUBiASBh4QBB4MAhoQBBwUBiASBB4UBiAWCCIUBiAQBBwQBBwGBgYGBgYICAgICAgGBgYGBgYGBgYIBgYICAgODg4ODg4ODg4MDAwKCgoKCgoICAgKCgoODg4ODg4MDAwMDAwKCgoICAgKCgoKCgoMDAwMDAwKCgoKCgoMDAwMDAwMDAwMDAwMDAwODg4MDAwKCgoICAgKCAoKCgoKCgoKCgoMDAwKCgoICAgICAgKCgoMDAwODg4ODg4QEBAKCgoGCAYGBgYGBgYGBgYGCAgICAgGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYICAgMDAwMDAwODg4QDhAQEBASEhISEhIUFBQUFBQSEhISEhISEhIQEBAQEBAQEBAODg4ODg4ODg4MDAwMDAwICAgODg4MDAwMDAwMDAwICAgKCgoMDAwMDAwMDAwODg4ODg4ODg4ODg4QEBASEhISEhISEhISEhISEhISEhIQEBAQEBAODg4MDAwMDAwMDAwKCgoICAgGBgYGBgYEBAQEBAQWCCIUBiAQBB4UBiAUBiAWCCIWCCAWCCAWCCIUBiAWCCISBh4UBiAWCCIYCCIUBiASBh4UBiASBiAOBBwOBBwSBiAUBiAUBiAWCCIQBB4QBBwQBh4QBh4UBiAWCCISBiASBB4WCCIUCCAQBB4UBiAUCCIUBiASBB4SBh4SBB4OBBwQBB4QBB4QBBwQBBwUBiAWCCAWBiIUCCIOFioMHC4MGi4MGi4MGi4MGi4MGi4OGjAOHDAOHDAOHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDASHDASHjASHjAQHDAQHDAQHDAQHDAQHDAQHDAOHDAOHDAOHDAOHDAOHDAQHDAQHjIQECYQAhwQBBwOBBwUBiAUBiAQBBwSBB4QBBwQBBwOAhoSBh4SBh4UCCAUBiASBh4QBB4QBB4SBB4QBB4SBB4SBBwKAhoMAhoSBh4QBB4QBB4SBiASBB4SBB4SBh4QBB4UBiASBiAUBiAQBB4SBB4UCCAWCCIUBiAUBiAQBB4OBBwQBBwUBiAUBiAUBiAWCCIUBiAQBBwQBB4GBgYEBAQICAgICAgICAgICAgGBgYGBgYICAgKCgoMDAwODg4ODg4ODg4ODg4MDAwICAgICAgMDAwODg4ODA4MDAwKCgoKCAoKCgoKCgoKCgoKCgoMDAwMDAwMDAwMDAwMDAwKCgoMDAwKCgoICAgKCgoKCgoKCgoMDAwMDAwICAgICAgKCgoMDAwODg4ODg4QEBAODg4MDAwICAgGBgYGBgYGBgYICAgICAgICAgGBgYEBAQGBgYEBAQEBAQGBgYGBgYGBgYICggMCgoODA4ODg4QEBAQEBASEhISEhIUFBQUFBQUFBQSEhISEhISEhIQEBAODg4ODg4ODg4ODg4ODg4MDAwKCAgMDAwMDAwKCgoMDAwICAgKCgoMDAwMDAwMDAwODg4ODg4ODg4SEhISEhISEhISEhISEhISEhISEhISEhISEhIQEBAODg4ODg4MDAwMDAwKCgoICAgGBgYGBgYGBgYEBAQUBiASBiASBh4UBiASBh4YCCIUBiAWCCIUBiAUCCAWCCISBiAWCCIYCCIWCCIUBiAUBiAWBiASBiAQBBwQBBwUBiAUBiAWCCIUBiAQBB4QBB4SBh4QBB4SBh4UBiAQBB4SBh4WCCAUBiAQBB4UBiAUBiAQBB4SBB4UBiAQBB4QBBwQBB4OBBwQBBwQBB4SBiAWCCAWBiAUCCIOFioMHC4MGi4MGi4MGi4MGi4MGi4OHDAOHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAOHDAOHDAOHDAOHDAOHDAQHDAQHDAQDiQQAhwQBBwQBBwUBiASBiAQBBwSBB4QBB4QBBwOBBoSBh4SBiAWCCIUBiAUBiASBh4QBB4QBBwQBB4QBB4SBB4MAhoOAhoUBh4QBB4QBB4UBiASBB4QBB4QBB4QBB4SBh4UBiAWBiAQBB4SBh4UCCAWCCIUBiAUBiAQBB4QBB4QBBwUBiAUBiAUCCAWCCIUBiAQBB4QBB4GBAYEBAQEBgYGBgYGBgYICAgICAgICAgICAgKCgoKCgoKCgoMDAwODg4QEBAODg4MDAwKCgoICAgKCgoODg4MDAwMDAwKCgoKCgoKCgoKCgoMDAwMDAwODg4ODg4MDAwMDAwMCgwMDAwKCgoKCgoMDAwKCgoMDAwKCgoICAgICAgKCgoMDAwODg4ODg4ODg4MDAwKCgoKCgoICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQGBgYEBAQGBgYGBgYGBgYGBgYICAgKCgoMDA4ODg4QEBASEhIUEhQUFBQUFBQUFBQUFBQUFBQSEhIUFBQSEhIQEBAODg4ODg4MDAwMDAwMDAwICAgKCgoKCgoKCgoKCgoICAgKCgoKCgoKCgoMDAwMDAwODg4QEBASEhISEhISEhIUFBQUFBQUFBQSEhISEhISEhIQEBAODg4ODg4MDAwMDAwKCgoICAgICAgGBgYGBgYGBgYSBh4SBh4SBiAQBh4UCCAWCCAUBiAWCCISBiAWCCIWCCIWCCIYCCIYCCIWCCIWCCIWBiAUBiASBiAQBBwSBh4UBiAUCCAYCCISBiAQBBwSBB4SBh4SBB4SBh4SBiASBh4UBiAUBiASBh4SBiAUBiASBiAQBB4SBB4UBiAOBB4QBB4QBBwQBBwQBB4QBB4UBiAWCCAWBiAUCCIOFioMHC4MGi4MGi4MGi4MGi4MGi4OGjAOHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAOHDAOHDAOHDAOHDAOHDAOHDAOHjAQGjAQCiIOAhoQBBwQBBwUBiASBh4QBB4SBB4QBBwQBBwOAhoSBh4UBiAWCCIUBiIUCCISBh4QBBwQBBwQBB4QBB4SBB4OAhoOBBoSBh4SBB4SBh4WBiASBh4QBBwQBBwQBB4SBh4UBiAWBiASBh4SBiAUBiAWCCIWCCAUBiAQBB4QBB4QBB4WCCIUBiAWCCAYCCQWBiAQBBwQBB4GBgYEBAQEBAQEBgYGBgYGCAYICAgICAgICAgKCgoMDAwMDAwKCgoODg4SEhIODg4MDAwMDAwKCgoICAgKCgoODg4ODg4MDAwKCgoKCgoKCgoMDAwMDAwODg4ODg4ODg4ODg4MDAwMDAwMDAwMDAwMDAwMDAwKCgoICAgICAgKCgoKCgoMDAwQEBAODg4MDAwMDAwMDAwMDAwICAgICAgICAgICAYGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBggICAgKCgoODg4ODg4QEBASEhIUFBQUFBQUFBQUFBQUFBQUFBQSEhISEhISEhISEhIQEBAODg4ODg4MCgoKCgoICAgKCgoKCgoICAgKCgoGBgYICAgICAgKCgoMDAwODg4ODg4QEBAQEBASEhISEhIUFBQUFBQUFBQUFBQSEhISEhIQEBAODg4ODg4MDAwMDAwKCgoICAgICAgGBgYGBgYGBgYSBh4SBh4SBh4QBh4WCCIUBiAWCCIUCCASBh4YCCQYCCIYCCIYCCIWCCIWCCIWCCIUBiAUCCAUBiAQBBwUBiASBh4WCCAWCCISBh4SBh4SBiAQBB4SBh4UBiASBh4SBh4SBiASBiASBh4SBiAQBh4UCCASBh4SBB4UBiAQBB4QBB4OBBwQBBwSBB4UBiAUCCAUCCAWBiAUCCIOFioMHC4MGi4MGi4MGi4MGi4MGi4OGjAOHDAOHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHjIOGCwQBh4QAhwQBBwQBBwUBiASBh4SBB4SBB4QBB4QBB4OBBoSBh4UBiAWCCIUBiAWCCIQBh4QBB4SBB4QBB4SBB4SBB4OAhoOAhoUBh4SBB4SBh4WCCASBiAQBBwQBBwQBB4SBh4WCCAWCCAUBiAUBiAUBiAWCCIWCCIUBiAQBB4SBB4SBh4WCCIUBiAWCCIYCiQWCCIOBBwSBh4GBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYICAgKCAoKCgoKCgoKCgoMDAwQEBAODg4MDAwMDAwODg4MDAwKCgoICAgMDAwMDAwMDAwMDAwMDAwMDAwODg4ODg4ODg4ODg4ODg4MDAwMDAwMDAwMDAwMDAwKCAoICAgKCgoMDAwMDAwKCgoMDAwODg4MDAwKCgoKCgoKCgoKCgoICAgIBggGBgYGBgYGBgYGBgYEBAQEBAQGBAQGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwODg4QEBAUFBIUFBQUFBQWFhYUFBQUFBQUFBQSEhISEhIQEBAQEBAQEBAODg4ODg4MDAwKCgoGBgYICAgICAgICAgICAgGBgYICAgICAgKCgoMDAwODgwODg4QEBAQEBASEhISEhISEhIUFBQWFBYUFBQSEhISEhISEhIODg4ODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYSBh4SBh4SBh4SBh4WCCAUBiAYCCIQBh4UCCAYCiQYCCQYCCIWCCIWCCIWCCIWCCIUCCAWCCAWCCISBh4UBiASBh4WCCIUCCASBh4UBiAUBiASBiAUBiAUBh4SBh4UBiASBh4SBh4SBh4SBh4QBh4WCCISBB4QBB4UBh4SBh4SBiAQBB4QBB4SBB4UBiAWCCAUBiAWBiAUCCIOFioMHC4MGi4MGi4MGi4MGi4MGi4OGjAOHDAOHDAOHDAOHDAOHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAQHDAOHDAQHDAQHDAQHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHjIOFioQBBwSBBwOBBwQBBwUBiAQBB4SBB4SBB4SBB4QBBwOBBoUBiAUBiAYCCIUCCAWCCISBh4QBB4SBB4SBB4SBB4SBB4MAhoOBBoUBiASBB4SBiAWCCIUCCAQBBwQBBwQBBwSBh4YCCIWCCIUBiAWBiAUBiAWCCIWCCIUBiASBh4SBh4UBiAYCiQWCCIWCCIYCiQUCCAQBBwSBh4GBgYEBAQEBAQGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoMDAwKCgoMDAwMDAwODg4ODg4KCgoICAgKCgoMDAwMDAwMDAwMDAwODg4ODg4ODg4ODg4MDAwMDAwODg4MDAwKCgoICAgICAgMDAwMDAwMDAwKCgoKCgoKCgoMCgwKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYEBAQEBAQGBAYEBAQGBgYGBgYGBgYGBgYICAgICAoKCgoMDAwODg4OEA4SEhIUFBQUFBQUFBQUFBQUFBQSEhISEhIQEBAQEBAQEBAODg4ODg4MDAwMDAwKCgoICAgICAgICAgICAgICAgGBgYICAgICAgKCgoKCgoMDAwODg4ODg4QEBAQEBASEhIUFBQUFBQUFBQUFBQSEhIUFBQSEhIODg4MDgwMDAwKDAwKCAoICAgGBggGBgYGBgYGBgYQBh4SBh4SBiAUBiAUBiAWCCIWCCIQBB4YCCIYCiQYCiQYCCIUCCAUBiAWCCIYCiQWCCIWCCIYCiIUBiASBiAUBiAYCCIUBiAUBiAWCCIUBiAWCCAWCCASBh4QBB4UBiASBh4SBh4SBh4SBh4SBh4WCCIQBBwQBBwSBB4SBh4UBiASBB4SBh4UBiAWCCIUBiAUBiAWBiAUCCIOFioMHC4MGi4MGi4MGi4MGi4MGi4OGi4OHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHDAOHDAOHDAQHDAOHDAOHDAQHDAOHDAOHDAOHDAQHDAQHDAQHDAQHDAQHjIOFCgQAhwSBB4OBBwQBB4UBiAQBB4SBh4SBB4QBB4QBBwQBBwSBh4UCCAYCCIUCCIWCCIUBiASBB4SBB4SBh4SBh4QBBwMAhoQBBwUBiAQBB4UBiAWCCIUBiAQBBwQBBwQBBwSBh4YCCQWCCIUBiAWBiAUBiAWCCIWCCAUBiASBh4UBh4UBiAYCiQWCCAWCCIYCiQWCCIQBBwSBh4GBgYEBAQGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwMDAwKCgoMCgwMDAwKCgoKCgoKCgoMDAwODg4MDAwICAgICAgMDAwMDAwKCgoMDAwMDAwMDAwODg4MDAwMDAwMDA4KCgoICAgKCgoMDAwMDAwKCgoKCgoKCgoMDAwMDAwKCgoMDAwMDAwKCgoKCgoICAgICAgIBgYGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBAYGBgYGBgYGBgYGBgYICAgKCgoKCgoMDAwMDAwODg4SEhIUFBQUFBQUFBQSEhISEhISEhIQEBAQEBAODg4ODg4ODg4MDAwMDAwKCgoKCgoGBgYGBgYICAgGBgYICAgGBgYICAgICAgICAgKCgoMDAwMDAwODg4ODg4QEBAQEBASEhISEhIUFBQUFBQUFBQSEhIQEBAODg4ODAwMDAwKCgoKCgoICAgICAgGBgYGBgYGBgYSBh4UBiAUBiAUBiAUBiAYCCISBiAUBiAYCiIYCiQWCCIWCCIUBiAUBiAWCCIYCCIWCCIWCCIYCiIUBiASBh4WCCAYCCIUBiAUCCAWBiAWCCIWCCIUCCAQBh4SBh4UBiASBiASBh4SBh4UBiAUBiAWCCASBh4QBBwSBB4SBh4UBiASBh4UBiAUCCAWCCIUBiAUBiAWBiAUBiAOFCoMHC4MGi4MGi4MGi4MGi4MGi4OGjAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHDAQHDAQHjIQEigQAhwQBB4OBBwSBB4UBiAQBB4SBh4QBBwQBB4QBBwQBBwUBiAWCCIYCCQUCCIWCCIUBiASBh4SBh4SBh4SBh4QBB4OBBwQBBwUBiASBh4UBiAWCCIUBiAQBBwQBB4QBBwSBh4YCiQWCCIUBiAWCCIUBiAWCCIWCCIWCCAUBiAUBh4UCCAYCiQWCCIWCCIYCCIYCCIQBB4UBiAGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgMDAwQEBAMDAwODg4ODg4MDAwKCgoKCgoKCgoKCgoICAgMDAwODg4ODg4KCgoICAgKCgoKCgoMDAwODg4ODg4ODg4MDAwMDAwKCgoKCgoMDAwODA4MDAwKCgoICAgKCgoKCgoKCgoKCgoODg4ODg4MDAwODg4ODg4KCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBAYGBgYGBgYGBgYICAgICAgKCgoKCgwMDAwODg4QEBASEhIUFBQUFBQQEBASEhIQEBAQEBAODg4ODg4MDAwMDAwKCgoKCgoKCgoICAgGBgYGBgYICAgGBggGBgYEBAQGBgYICAgICAgKCggKCgoMDAwMDAwODg4ODg4QEBAQEBASEhISEhIUFBQSEhISEhIODg4ODg4MDAwKCgoKCgoICAgIBgYGBgYGBgYGBgYGBgYSBh4WBiAUBiASBiAUBiAYCCISBh4UBiAWCCIYCiQUCCIUBiASBh4UBiAWCCIWCCIWCCIWCCIYCiQUBiASBh4WCCIWCCIWCCAWCCAUBiAWCCIWCCIUBiASBh4UBiAUBiAUBiASBh4SBiAUBiAUBiAUBiAUBiASBB4SBB4SBh4SBiASBh4UBiAWCCAWCCAUBh4WCCAWCCIUBiAOFCgMHC4MGi4MGi4MGi4MGi4MGi4OGi4OHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHDAQHDAQHjIQEigQAhwSBB4OBBwSBh4UBiAQBBwUBiAQBB4SBB4QBBwQBBwUBiIWCCIYCCIWCCIWCCIUCCASBh4SBh4UBiASBiAQBB4QBBwQBBwWCCAUBiAUCCAWCCIUBiAQBBwQBB4QBB4SBh4YCiQYCCIUBiAUCCIUCCAWCCIWCCIWCCAUBiAUBiAUCCAYCCQWCCIWCCIWCCIWCCISBh4UBiAGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgMDAwSEhIODg4QEBASEhIODg4MDAwICAgKCgoKCgoKCgoKCgoKCgoODg4ODg4MDAwKCgoKCgoMDAwODg4ODg4MDAwMDAwKCgoMDAwODg4ODg4MDAwKCgoKCgoKCgoKCgoICAgKCgoODg4SEhISEhIODg4SEhIQEBAICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAYIBggICAgKCgoMDAwMDAwODg4QEBAQEBASEhIQEBAQEBAODg4ODg4ODg4MDAwMDAwMDAwKCgoICAgICAgICAgICAgGBgYICAgICAgGBgYGBgYGBgYICAgICAgICAgKCgoMDAwMDAwODg4ODg4ODg4QEBAQEBASEhISEhIQEBAODg4ODg4MDAwMDAwKCgoICAgICAgIBggIBgYGBgYGBgYGBgYSBiAUBiASBh4SBh4UBiAWCCIUBiAUBiAWCCIYCiQUCCISBiAQBh4UCCAWCCIWCCIWCCIWCCIYCCIUBiAUBiAWCCAWCCAWCCIWCCAUBiAWCCIUCCAUBiASBiAUBiAUBiASBh4SBh4UBiAUBiASBiAUBiAYCCIUBh4SBB4SBh4SBiASBh4UBiAUCCAUBiASBh4UBiAUCCIUBiAQECYMHC4MGi4MGi4MGi4MGi4MGi4OGi4OGjAOGjAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHDAQHjAQECYQAhwQBB4OBBwUBiASBiAQBB4UBiAQBB4SBB4QBBwQBB4UBiAWCCIWCCIUCCAWCCIWCCAUBiAUBiAUBiASBiAQBB4QBB4QBB4WCCIUBiAWCCIYCCQUBiAQBBwQBB4QBBwSBh4YCCIYCCIUBiAUCCIUBiAWCCIWCCIWCCIUBiAUBiAUBiAYCCQYCCIWCCIWCCIYCCISBh4UBiAEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoSEhIUFBQSEhIQEBAMDAwMDAwKCgoICAgICAgICAgKCgoKCgoKCgoMDAwODg4ODg4MDAwMDAwMDAwODg4MDAwMDAwODg4ODg4ODg4KCgoKCgoKCgoKCgoICAgICAgKCgoMDAwMDAwODg4SEhISEhIWFhYODg4ICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICgoKCgoMDAwODg4ODg4ODg4QEBAQEBAQEBAODg4ODg4ODg4MDAwKCgoKCgoKCgoKCggGBgYGBgYGBgYGBgYICAgICAgEBAQEBAQGBgYGBgYICAgKCggKCggICAgKCgoMDAwODg4ODg4QEBAQEBAQEBAQEBAODg4ODg4MDAwMDAwKCgoKCgoICAgICAgICAgICAgGBgYGBgYGBgYUBiAUBiASBh4QBB4UBiAWBiIUBiAUBh4WCCIWCCISBiAQBB4SBh4UCCIYCCIWCCAWCCIYCCIYCCIUBiAUBiAWBiAWBiAWCCIUBiAUBiAUBiAUBiASBiASBiAUBiASBiASBh4SBh4UBiAUBiASBh4SBh4WCCIUBiASBh4UBiAUBiASBiAUBiASBiASBh4SBh4SBh4SCCAUBiAUCCAOFioMHC4MGi4MGi4MGi4MGi4OGi4OGjAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHDAQHDAQDCQQAhwSBh4QBBwUBiASBh4SBB4UBiAQBB4SBh4QBBwSBh4UBiAWCCIWCCIUBiAWCCIWCCIUBiAUBiAUBiAUBiAQBB4QBB4QBB4WCCIUBiAWCCIYCCQUBiAOBBwQBh4QBB4UBiAWCCIYCCIUBiAUBiAUBiAUCCIWCCIWCCAUBiAUBiAUBiAYCCQYCCIUCCAWCCIWCCISBh4UCCAGBAYGBgYGBgYGBgYGBgYGBgYIBgYGBgYICAgICAgKCgoQEBAWFhYYGBgUFBQKCgoKCgoKCgoICAgICAgICAgICAgICAgKCgoKCgoMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKCgoICAgICAgICAgICAgICAgICAgKCgoKCgoODg4YGBgWFhYSEhIKCgoKCgoICAgICAgGBgYIBgYGBgYGBgYGBgYGBgYGBAYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICgoMDAwMDAwQEA4QEBASEhIQEBAODg4ODg4MDAwMDAwKCgwICAgICAgICAgGBgYGBgYEBAQEBAQEBAQGBgYGBgYEBAQEBAQEBAQGBgYGBgYICAgICAgICAgKCgoMDAwODg4ODg4ODg4ODg4SEhIQEBAQEBAODg4MDAwKCgoKCgoICAoICAgICAgICAgICAgGBgYGBgYGBgYUBiAUBiASBh4SBh4UBiAUBiASBh4UBiAWCCIWCCISBh4QBBwSBh4WCCAYCiIUCCAWCCIYCCIYCCIUBiAUBiAWCCAUBiAWCCIUBiAUBiAUBiASBh4SBh4SBiAUBiAUBiASBh4SBh4UBiAUBiASBB4SBh4UBiAUBiASBh4UBiAWCCASBiAUBiASBiASBB4SBB4SBh4SCCAUBiAUBiAQFCgMHC4MGi4MGi4MGi4OGi4OGjAOHC4OGi4OHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHjAQGi4QCiAQBBwSBh4QBBwUBh4SBh4SBB4UBiAQBB4UBiAQBBwSBh4WCCIWCCIWCCIWCCAWCCIWCCISBiAUBiAUBiASBh4SBh4SBh4UBiAYCiQWCCAWCCIYCiQUBiAOBBwSBh4QBB4UBiAWCCIYCCIUBiAUBiASBiAUBiAWCCIWCCAUBiAUBiAUBiAWCCIWCCIWCCAUCCAWCCIUBiAUCCAGBgYGBAYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwQEBAUFBQSEhIKCgoKCgoICAgICAgICAgGBgYICAgGBgYGBgYKCgoMDAwKCgoKCgoMDAwMDAwMDAwMDAwKCgoKCgoMDAwKCgoICAgGBgYICAgGBgYGBgYICAgICAgKCgoKCgoODg4UFBQQEBAODg4MDAwICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBgYICAgICAgICAgICAgICAgKCgoMDAwOEA4SEhIUFBQQEhAODg4MDgwKDAwKCgoKCgoICAgICAgGBgYGBgYGBgYEBAQEBAQEAgIGBAQEBAQEAgIEBAQEBAQEBAQGBgYGBgYGBgYICAgKCgoMDAwMDAwMDAwODg4ODg4UFBQQEBAQEBAMDAwMDAwKCgoICAgICAgGCAYICAgICAgICAgIBgYGBgYGBgYUBiAUBiASBh4SBh4SBh4SBh4SBh4UBiAWCCAWCCISBiAQBB4SBh4UBiAYCCIUBiAWCCIWCCIWCCISBiAUBiAWCCAUCCAWCCIUBh4UBiASBh4SBh4SBh4SBiAUBiAUBiASBh4SBh4UBiAUBiASBB4SBh4UBiAUBiAUBiAUBiAUBiAUBiAUBiASBh4QBBwSBB4SBh4SCCAUBiASBB4QEigMHC4MGi4MGi4MGi4MGi4OGi4OGjAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHjAQGi4QCCASBBwUBiAQBBwUBiAQBB4SBB4UBiASBh4UBiAOBBwSBh4UCCAWCCIWCCAUBiAWCCIWCCAUBiAUBiAUBiASBiASBiASBiAUBiAYCiQWCCAWCCIYCiQUCCAQBBwSBh4SBh4UBiAWCCAYCCIUBiAUBiASBh4UBiAWCCIUBiAUBiASBiAUBiAYCCQWCCIWCCAUBiAWCCIWBiAWCCAGBgYGBgYGBgYGBgYGBgYIBgYIBggICAgICAgICAgKCgoKCgoMDAwMDAwODg4ODg4MDAwKCgoICAgICAgGBgYEBAQICAgICAgGBgYICAgKCgoKCgoMDAwMDAwMDAwMDAwMDAwKCgoKCgoGBgYGBgYKCgoGBgYGBgYICAgICAgICAgKCgoODg4QEBAODg4MDAwKCgoKCgoICAgICAgICAgICAgGBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgKCgoMDAwQEA4SEhIUFBQSEhIODg4MDAwKDAoKCgoICggICAgICAgGBgYGBgYGBgYEBAQEBAQCAgIEBAIEBAQCAgIEBAQEBAQEBAQGBgYEBAQGBgYICAgKCgoKCgoKDAoMDAwMDgwODg4UFBQSEhIQEBAMDgwKDAoKCgoICAgICAgGBgYICAgICAgICAgGBgYGBgYGBgYUBiAUBiASBiASBh4SBh4SBB4SBB4WCCAWCCAWCCIUBiASBB4UBiASBiAWCCISBiAWCCIWCCIYCCQSBh4UBiAUBiAUBiAWCCISBh4UBh4SBh4UBh4UBh4SBh4UBiAUBiASBh4SBh4UBiAUBiASBh4SBh4SBiASBh4UBiAWCCIUBiAUBiAWBiAQBB4QBBwSBB4QBh4SCCAUBiAUBB4QEiYMHC4MGi4MGi4MGi4MGi4OGi4OGi4OGjAOGjAOGjAOHDAOGjAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHDAQHjIQGC4QBiASBB4UBiAQBB4SBB4QBB4QBB4SBh4UBiAUBiAOBBwUBiAUCCAWCCIWBiAUBiAWCCAWCCIWCCAUBiAWCCAWCCAUBiAUBh4WCCAYCiQWCCIWCCIYCiQWCCIQBB4SBiASBiAUBiAUCCAWCCIUBiAUBiAQBh4UBiAWCCISBiAUBiASBiASBiAYCCQWCCIWCCIUBiAYCCIWCCAWCCIGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgKCgoKCgoODg4ODg4ODg4ODg4MDAwMDAwKCgoKCgoICAgEBAQEBAQICAgGBgYEBAQGBgYMDAwMDAwMDAwMDAwMDAwMDAwICAgGBgYEBAQICAgGBgYEBAQGBgYICAgKCgoKCgoMDAwMDAwQEBAODg4ODg4MDAwKCgoKCAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBggICAgICAgICAgKCgoMDAwQEBASEhIWFhYQEBAODg4MDAwKCgoICAgIBgYICAgICAgGBgYGBgYICAgGBgYGBgYEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYGBAYGBAYGBAYGBgYIBggKCgoQDhAODA4ODg4ICAoIBggGBAYGBAYGBAYGBAYGBggGBAYIBggGBAYGBAYGBAYSBh4SBh4SBiASBh4SBh4SBB4SBB4WCCAWCCAWBiISBiASBB4UBiASBiAYCCISBiAWCCIWCCIYCCQSBh4UBiAUBiASBiAWCCASBiASBh4SBB4UBB4UBh4SBh4SBiASBiASBh4SBh4UBiAUBiASBh4SBh4SBh4SBB4UBiAYCCISBiAUBiAUBiAQBB4QBBwQBB4SBh4SCCAUBiAUBB4SDiQMGiwMGi4MGi4MGi4MGi4MGi4OGi4OGi4OGi4OGi4OGi4OHDAOGjAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHDAQHjIQGCwQBiAUBh4UBiAQBB4QBBwQBBwQBB4SBiAUBiAUBiAQBB4UBiAUCCAWCCIUCCAUBiAWCCIWCCIWCCIWCCAWCCIWCCAUBiAUBiAWCCIYCiQWCCIWCCIYCCIWCCISBB4UBiASBiAWCCAUCCAWCCISBiAUBiAQBh4SBiAUBiASBiAUBiASBh4SBh4YCCIWCCIWCCIUBiAWCCIWCCAYCCIGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgKCgoKCgoKCgoQEBASEhIWFhYQEBAMDAwKCgoKCgoKCgoICAgGBgYEBAQGBgYICAgGBgYGBgYICAgKCgoKCgoMDAwKCgoKCgoGBgYEBAQGBgYGBgYEBAQEBAQGBgYKCgoKCgoKCgoMDAwODg4WFhYSEhISEhIMDAwKCgoKCgoICAgICAgICAgICAgIBggGBgYGBgYGBgYGBgYGBgQGBgQGBgYGBgYGBgYGBgYGCAgGBgYICAgICAgKCgoMDAwQEBAUFBIWFhYQEBIODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYEBAQEBAQGBgYICAgGBgYKCAoaCCIcBiQcBiQeCCYeCCYeCCYeCCYeCCYgCCggCCggCCgiCiokDiwmEC4oEi4qFC4oEi4mEC4kDiwiCiogCiggCCggCCgiDCogCioiDCoiCiogCiogCigSBh4SBh4SBiASBiASBh4SBB4SBB4UBiAUBiAUBiASBiASBh4UBiASBh4WCCISBiAYCCIWCCIYCCIQBB4UBiAUBiASBiAUBiASBh4SBh4QBB4SBB4SBB4SBB4SBh4SBiASBiASBh4SBh4SBiASBiASBh4SBh4QBB4UBh4WCCISBh4SBiASBh4QBB4QBB4SBB4SBh4UCCISBiAUBB4UDCQOGiwMHC4MGi4MGi4MGi4OGi4OGi4OGi4OGi4OHC4OHC4OHC4OHC4OHC4OHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHjIQFCoQBB4UBiAWCCIQBB4QBBwQBBwSBB4UBiAWCCAUBiAUBiAUBiAUCCAWCCAUCCIUCCAWCCIWCCIWCCIUCCAWCCIWCCAUBiAUBiAUBiAYCCQYCCIWCCIWCCIWCCISBh4UBiAUCCAUCCAUCCAWCCISBiAUBiASBh4UBiAUBiASBiAUBiASBh4SBiAWCCIWCCIWCCISBiAYCCIWCCIWCCIGBgYGBgYGBgYGBgYIBgYICAgICAgICAgICAgICAgKCgoMDAwQEBASEhIYGBgODg4MDAwKCgoKCgoICAgKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYKCgoKCgoKCgoKCgoKCgoODg4YGBgUFBQSEhIODg4KCgoKCgoICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgKCgoMDAwSEhIUFBQYFhgQEBAODg4MDAwKCgoICAgICAgICAgGBgYGBgYGBgYEBAQEBAQGBgYKCgoICAgKCAogCCgiCCwiCiwkCi4kCi4kCi4kCi4kCi4mCjAmCjAoDDIqDjQsEDYwFDoyGDw0GjwyGDwwFDosEDYoDjIoDDImDDAmCjAoDjIoDDIqDjQoDjIoDDIoDDISBh4SBh4SBiASBiASBh4QBB4QBBwWBiAUBiAUBiASBh4QBh4UBiASBh4WCCISBiAYCCIWCCIWCCIQBh4UBiAUBiASBiAWCCASBh4SBh4QBBwQBBwQBBwSBB4SBh4SBiASBiASBh4SBh4SBh4SBiASBiASBh4SBB4SBh4WCCISBiAUBiAUBiASBiASBiASBiASBh4UCCISBiAUBB4UDCQOGi4MGi4MGi4MGi4MGi4OGi4OGi4OGi4OHC4OHDAOHDAOHC4OHDAOHC4OHC4OHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAOHDAQHDAQHjAQEigSBB4UCCAWCCIQBB4QBBwQBBwQBBwWCCAWCCIUBiAUBiAWCCAUBiAUBiAUBiAUBiAWCCIWCCIWCCIUBiAWCCIWCCIUBiAUBiAUBiIYCCQYCCIUCCAWCCIWCCISBh4UCCAWCCIWCCIUCCAWCCISBiAUBiASBh4UBiAUCCASBiAUBiASBh4UCCAWCCQWCCIWCCIUBiAYCiQWCCIWCCIGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgKCgoKCgoMDAwSEhIUFBQYGBgQEBAMDAwKCgoICAgICAgICAgICAgICAgGBgYGBgYICAgICAgGBgYEBAQICAgICAgEBAQEBAQEBgQEBgQEBgQEBAIEBgQEBgQGCAYGCAYGCAYGCAYICggMDgwWGBYUFBISFBIMDAoICggGCAYGCAYGBgQEBgQEBgQEBgQEBgQEBAIEBAIEBAQGBgYGBgYGBgYGBgYGBgYGCAgICAgICAgICAgICAgKCgoMDAwUFBIWFhYYGBgSEhIMDAwMDAwICAgICAgICAgICAgGBgYGBgYGBgYEBAQEBAQICAgKCAoICggKCAoeCCgiCCoiCCoiCiwkCiwiCiwkCiwkCi4kCi4mCjAmDDAoDjIsEDYuFDoyFjw0GDwyFjwuFDgsEDYoDjImDDAmDDAmCjAoDjIoDDIqDjIoDjIoDDImDDAKCgoICAgICAgEBAQEBAQGBgYEBAQEAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgIGBgYKCgoKCgoKCgoICAgEBAQCAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIEBAQGBgYKCgoKCgoGBgYCAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgICAgICAgIEBAQEBAQYCiQQBB4QBB4QBBwUBiAOBBwMAhoOBBwSBh4MAhoQBBwQBB4SBh4UBiAQBB4QBB4QBB4WCCIQBB4SBiASBh4QBB4UBh4UCCAQBB4QBB4QBh4UBiAQBh4QBBwOBBwOBBwQBB4QBBwQBBwQBB4SBiAQBBwUBiAQBB4UBiAUBiASBB4QBB4SBh4UBiAQBBwSBh4OAhoMBBoQBBwOAhoMAhoUBiASBB4QBBwQBB4SBiAGBgYGBgYGBgYGBgYGBgYGBgYIBggICAgICAgKCgoKCgoMDAwWFhYWFhYaGhoQEBAMDAwKCgoICAgICAgGBgYGBgYICAgICAgGBgYGBgYEBAQGBgYGBgYICAgICAgOBBIOBBIOBBIOBBQQBBQQBBQQBBQQBBQQBBQQBBQSBhYSBhYUCBoYDBwcDh4cEB4cDh4YDBwUCBoSBhYSBhYQBBQQBBQQBBQQBBQOBBQOBBIOBBIOBBIGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBggICAgICAgKCgoMDAwUFBQWFhYYGBgSEhIMDAwKCgoICggICAgICAgICAgGBgYGBgYGBgYEBAQEBAQICAgICAgICAgKCAogCCgiCCoiCCokCiwkCi4kCiwkCi4kCi4mCjAmCjAoDDIqDjQsEDYwFDoyFjw0GD4yFjwwFDosEDYqDjQoDDImDDAmCjAoDDIoDDIoDDIoDjIoDDIoDDIICAgGBgYGBgYEBAQGBgYGBgYICAgICAgEBAQGBgYGBgYICAgICAgKCgoKCgoMDAwMDg4KCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYICAgICAgGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoMDAwODg4MDAwKCgoICAgICAgICAgGBgYGBgYGBgYICAgICAgICAgGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoMDg4MDAwKCgoKCgoICAgICAgGBgYGBgYEBAQICAYICAgICAgGBgYGBAQGBgYICAgICAgYCiQSBh4QBB4QBB4UBiAOBBwOAhoOBBwQBh4MAhoQBBwQBB4SBh4SBiAQBh4SBh4SBiAYCiISBB4UBiAQBB4QBBwUBiAUBiASBB4SBh4SBh4UBiAQBh4QBBwOBBwQBBwSBh4QBBwQBBwQBB4SBiAQBB4WCCIUBiAUBiAUCCASBh4SBh4SBiAUBiAQBBwQBBwOBBoQBBwOBBwOBBoMAhoSBh4SBh4QBBwSBh4UBiAGBgQGBgQGBgYGBgYGBgYGBgYGCAgGBgYICAgICAoKCgoODg4YGBgaGhocHBwSEhIMDAwKCgoICAgICAgICAgICAgGBgYGBgYGBgYEBAQEBAQGBgYKCgoKCgoKCgogCCoiCCwkCiwkCi4kCi4mCjAmCjAmCjAoCjIoCjIoDDQsDjYuEjo0Fj44Gj46HD44Gj40Fj4wEjosDjYqDDQoCjImCjAmCjAkCi4kCi4kCiwiCCwiCCwGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwUFBQYGBgYGBgUFBQMDAwKCgoICAgICAgICAgICAgGBgYICAgGBgYEBAQGBgYICAgICAgICAgICAoeCCYgCCggCCggCCoiCCogCCoiCCoiCiwkCiwkCi4kCi4mDDAqDjQuEjYwFDowFjowFDosEjYqDjQoDDAkCi4kCi4kCi4oDDImDDAoDjIoDDAmDDAkCi4EBAQEBAQGBgYGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwMDAwKCgoICAgICAoICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQEBgYGBgYICAgICAgICAgICAgICAgICAoKCAoMDAwMDAwKCgoKCgoICAgICAgGBgYEBAYGBgYGBgYGBgYEBgQEBAQGBgYGBgYICAgICAgICAgICAgICAgICAoICAgKCgoMDAwMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYWCCISBh4QBB4SBh4UBiAOBBoOBBoQBB4QBBwMAhoQBBwSBh4SBiASBiAQBB4SBh4UCCAYCiQSBh4WCCAQBB4QBh4UCCAUBiASBB4SBh4UBiAUBiAQBB4QBBwQBBwSBh4SBh4QBBwQBBwSBh4SBh4SBh4WCCIUBiAWCCAWCCISBh4SBiASBiAWCCISBB4QBB4OAhoQBBwQBB4OBBoOBBoSBh4SBh4QBBwSBh4UBiAGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgKCgoMDAwODg4YGBgcHBweHh4UFBQMDAwKCgoICAgICAgICAgICAgGBgYGBgYGBgYEBAQEBAQICAgKCgoKCgoKCgogCCgiCCoiCCoiCiwkCiwkCi4kCi4kCi4mCjAmCjAoDDIqDjQsEDgwFDw0GD42Gj42GD4wFDwuEjgqDjQoDDImCjAmCi4kCi4kCi4iCiwiCiogCCogCCoGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwWFhYaGhoYGBgUFBQODg4KCgoICAgICAgICAgGBgYGBgYGBgYGBgYEBAQGBgYICAgGBgYICAgGBgYIBgoGBAgGBAgGBAgIBAgGBAgIBAgIBAgIBgoIBgoKBgoMCAwOCg4UEBQaGBwYFhoYFhoQDBAMCg4KCAwKBgoIBgoIBgoMCg4KCAwMCg4KCAwKBgoIBgoEBAQEBAQEBAQGBgYGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4MDAwICAoKCgoICgoICAoICAoICAgICAgGBgYGBgYGBgYEBAQGBgYICAgICAgICAgICAoICAoKCgoKCgoKCgoMDAwODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYICAgICAgICAoICAoICgoKCgoICAoMDAwODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYEBAQGBgQGBgYGBgYGBgYEBAQEBAQUCCIQBB4QBBwUBiAUBiAOBBwOBBwSBB4QBBwOBBoQBB4SBh4WCCIUBiAQBB4SBiAWCCIYCiQQBB4UCCASBh4SBh4WCCIUBiAQBh4SBiAUBiASBiASBh4QBBwQBBwSBiASBh4QBB4QBB4SBh4SBh4UBh4WCCAUBiAUCCAYCiQSBiASBiAUBiAWCCISBiAQBB4OBBwQBBwSBh4OBBwOBBoSBh4WCCIQBBwQBB4UBiAGBgYGBgYGBgYGBgYGBgYGBgYICAYICAgICAgKCgoMDAwODg4aGhoeHh4eHh4WFhYODg4MDAwKCgoICAgICAgICAgGBgYGBgYGBgYEBAQEBAQICAgICAgKCgoKCgoeCCgiCCoiCCoiCiwkCiwkCi4kCi4kCi4mCjAmCjAmDDAoDjIsEDYwFDo0Fj42GD40GD4wFDosEDYqDjQoDDImCjAmCi4kCi4kCi4iCiwiCCogCCogCCoGBgYGBgYGBgYGBgYGBgYIBggGBgYGBgYICAgICAgKCgwMDAwWFhYaGhoaGhoWFhYODg4KCgoICAgICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgGBgYICAgICAgICAgICAgICAgGBgYGBgQGBgYGBgYGCAYICAgICAgICggKCgoMDgwWFhYgICAcHhwgICAQEhAMDAwKCgoICAgICAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQCAgIEBAQGBgYEBAQEBAQEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwQEBAODg4KCgoICgoKCgoKCgoICAoICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAoICAoKCgoKCgoICgoKCgoQDhAQEBAMDAwKCgoICAgGBgYGBgYGBgYGBgYEBAQEBAQGBgYGBgYGBgYICAgICAgICAgICAoKCgoKCgoICgoKCgoODg4QEBAMDAwKCgoICAgICAgGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYEBAQEAgQEBAQGBgYWCCISBh4QBBwUBiAUBiAOBBwOBBwSBh4QBBwQBBwSBB4SBh4WCCISBiASBiAUBiAWCCIYCiQSBiAWCCISBiASBh4YCiIUBiASBiAUBiASBiASBiAUBiASBB4QBBwUBiAQBh4QBB4QBB4UBiASBB4UBh4UCCASBiAUCCAYCiQSBiAUBiAUBiAYCCIUBiASBB4QBBwOBBwUBiAOBBwMAhoSBh4WCCIQBB4QBB4UBiIGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4aGhoeHh4eHh4YGBgODg4MDAwKCgoKCgoICAgICAgGBgYGBgYGBgYEBAQGBgYICAgICAgICAgKCgogCCokCi4kCi4kCi4mCjAmCjAoCjIoCjIoCjIoCjIqDDQsDjYuEDoyFD42Fj44GD42Fj4yFD4uEjosDjYqDDQoCjIoCjImCjAmCjAkCi4kCi4kCiwiCCwGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAoODAwYGBgaGhoaGhoYGBgODg4KCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoODg4WFhYgICAcHBwgICASEhIMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYCAgIEBAQGBgYGBgYEBAQCAgQGBgQGBgYGBgYICAgICAgKCgoODg4UFBQQEBAKCgoICgoKCgoKCgoKCgoICAoICAgIBggGBgYICAgICAgGBgYICAgICAgKCgoKCgoKCgoKCgoICgoMDAwSEhISEhIMDAwKCgoICAgIBgYGBgYGBgYEBAQCAgIEBAQGBgYICAgGBgYIBggICAgICAoKCgoKCgoKCgoICgoKCgoQEBAUFBQODg4KCgoICAgICAgGBgYGBgYGBgQCAgQEBAQGBgYGBgYGBgYEBAQCAgIEBAQGBgYUBiASBB4QBB4WCCAUBiAOAhwQBBwUBiAQBBwQBBwSBB4UBiAWCCISBiAUBiAUBiAWCCIYCiQUBiAYCiQUBiAUBiAYCCISBiAUBiAUBiASBiASBiAUBiASBBwQBB4WCCISBh4SBB4QBBwUCCASBh4UBiAUBh4SBiAUCCIYCiQUBiAUBiAUCCAYCiQUBiASBh4QBBwOBBoUBiASBBwOAhoQBh4WCCIQBh4SBB4UBiAGBgYGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgKCgoMDAwODg4aGhogICAeHh4YGBgODg4KCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYEBAQGBgYICAgICAgICAgKCgoUBhgUBhgUBhgUBhoUBhoWBhoWBhoWBhoWCBwWCBwWCBwYCh4cDCAeDiQiFCgkFCgiEigeDiIaDCAYCB4WCBwWBhwWBhwWBhoUBhoUBhoUBhgUBhgUBhgGBgYGBgYGBgYGBgYGBgYGBgYGCAYGBgYICAgKCggMDAoODg4aGhocHBwcHBwYGBgODg4KCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICgoICAgGCAYICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwWFhYgICAcHBwgICASEhIMDAwKDAoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYCAgIEBAQGBgYGBgYEBAQEBAQEBAQGBgYGBgYICAgICAgKCgoODg4WFhYSEhIKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYICAgICAoKCgoKCgoKCgoKCgoKCgoMDAwUFBQUFBQMDAwKCgoICAgICAgGBgYGBgYEBAQEBAIEBAQGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoSEhIWFhYODg4KCgoICAgICAgGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBgYEBAQCAgIGBgYGBgYQBB4SBB4SBiAYCCISBh4OBBwSBB4UCCAQBBwOBBwSBh4UBiAWCCISBiAUBiAUCCAWCCIaCiQWCCAYCiQUBiAUBiAWCCIQBh4UBiAUBiASBiASBiASBh4QBBwSBh4WBiASBh4SBiASBh4WCCIUBiAUCCASBh4UBiAUCCAYCiQUBiAUBiAUBiAWCCIUBiASBiAQBB4OBBwUBiAUBiAOAhwQBBwWCCIUBiASBB4QBh4GBgYGBgYGBgYGBgYGBgYIBgYIBggICAgICAgKCgoMDAwODg4aGhogICAeHh4aGhoQEBAMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYEBAQICAgICAgGBgYICAgICAgICAgGBgYGCAYEBgQEBAIEBgQEBgQEBgQGBgQGCAYGCAYICgYKDAoSFBIcHhwaHBocHhwOEA4KDAgICAYGCAYGBgQEBgQEBgQEBgQEBgQEBgQEBgQEBgQGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgKCgoMDAwODg4YGBgeHh4cHBwYGBgODg4KCgoKCgoICAgICAgGBgYGBgYGBgYGBgYEBAQGBgYICAgICAgICAgKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwWFhYgICAeHh4gICASEhIMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQGBgYGBgYEBAQEBAQEBAQGBgYGCAgICAgKCAoKCgoODg4WFhYSEhIKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoMDAwWFBYUFBQMDAwKCgoICAgICAgGBgYGBgYEBAQEBAQGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoSEhIWFhYODg4KCgoKCAoICAgGCAgGBgYEBAQEBAQEBAQGBgYGBgYGBgYEBAQEBAQGBgYGBgYQBB4SBiAUBiAWCCIQBB4QBBwSBB4UCCAQBBwQBBwSBh4SBh4WCCISBiAWCCIUCCAYCiQaCiYWCCIYCiQUBiAUBiAWCCISBh4WCCIWCCISBiAUBiASBh4QBB4UBiAWCCIQBB4SBh4SBiAYCiQUBiAUCCISBiAUBiAWCCAaDCYWCCAWCCAUBiAWCCIUBiASBB4QBB4QBBwUBiAUBiAQBBwQBBwWCCIUCCASBh4QBB4GBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwODg4cHBweHh4eHh4aGhoODg4KCgoICAgICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgGBgYICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgICggKCgoODg4WFhYgICAcHBwgICASEhIMDAwKCgwICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAYICAgICAgICAgICAgKCgoMDAwODg4aGhoeHh4cHBwYGBgODg4MDAwKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCAoICAgGBgYEBAQGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwWFhYgICAeHh4eHh4SEhIODg4KCgoKCggICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYEBAQEBAQGBgYGBgYICAgICAgKCgoODg4WFhYUFBQMDAwICgoKCgoKCgoKCgoKCAoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoODg4WFhYUFBQODAwKCgoICAgICAgGBgYEBgYEBAQEBAQGBgYGBgYGBgYGBgYGBgYICAgKCAoKCgoKCgoKCgoICgoMDAwUFBQWFhYODg4KCgoICAgICAgGBgYGBgYEBAQEBAQGBgYGBgYGBgYGBgYEBAQEBAQGBgYGBgYQBB4UBiAWCCIWCCIQBBwQBBwSBiAUCCISBB4QBBwSBh4SBh4WCCIUBiAWCCIWCCAYCiQaCiQWCCIaCiQUBiAUBiAYCCIUBiAWCCIYCiIUBiAUBiAUBiAQBB4UBiAWCCIQBh4SBiASBiAYCiQSBiAUCCISBiAWCCIYCCIcDCYWCCIWCCIWCCAYCCIWCCASBh4QBB4QBBwSBiAWCCIQBB4QBBwUBiAWCCIUCCAQBB4GBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwODg4cHBweHh4eHh4aGhoODg4KCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYICAgICAgICAgGBgYICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwWFhYgICAcHBwgICASEhIMDAwMDAoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGCAYIBgYICAgICAgKCgoMDAwODg4aGhoeIB4eHh4YGBgODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCAoKCgoKCAoICAgGBgYEBAQGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwMDAwWFhYgICAeHBweHh4SEhIODg4MDAwKCgoICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQGBgYGBgYEBAQEBAQGBgYGBgYICAgICAgKCgoODg4WFhYUFhQMDAwICAgICAoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBggICAgKCgoKCgoKCgoICAoKCAoODg4WFhYUFBQMDAwKCgoICAgICAgGBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCAoICAgMDAwUFhQWFhYODg4KCgoICAgICAgGBgYGBgYEBAQEBAQGBgYGBgYGBgYGBgYEBAQEBAQGBgYGBgYSBiAWCCAYCCIWCCIOBBwQBBwWCCAWCCIQBB4SBB4SBh4SBiAYCiIWCCIYCCIWCCIaDCYaCiQWCCIaDCYWCCIUBiAYCiIWCCAYCCQYCiQUBiAWCCIWCCISBB4WCCAWCCIQBh4UBiAUBiAYCiQUBiAWCCIUBiAWCCIYCCQcDigWCCIWCCIWCCIYCCIYCCIQBh4SBh4QBB4SBiAWCCISBh4OBBwUBiAYCCIYCiISBiAGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgICAgKCgoMDAwODg4cHBwgICAeHh4aGhoODg4KCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwWFhYgICAcHBwgICASEhIMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgMDAwODg4YGBgeHh4eHh4YGBgODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKCAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwWFhYeHh4eHh4eHh4SEBAMDAwKCgoICAgICAgICAgICAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBgYGBgYGBgYGBgYEBAQGBgYGBgYICAgICAgKCgoMDA4WFhYWFhYMDAwICAgICAoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoICAgKCgoQEBAYGBgSFBQMDAwICAgICAgICAgGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoICAoICAgMDAwWFhYWFhYMDA4KCgoICAgICAgGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYEBAYEBgYGBgYGBgYUBiAWCCIWCCIWCCIOBBwQBBwWCCIUBiAQBB4SBiASBB4SBiAYCiQYCCIYCiIWCCIcDiYaDCQYCCIcDCYWCCIUBiAYCiIWCCIYCiQaDCYUCCAWCiIYCCISBiAWCCIWCCAQBh4UCCAUBiAaCiQUBiAYCCIUBiAWCCIYCiQcDigWCCIWCCIWCCIYCCQYCCISBB4UBiASBh4SBh4WCCISBiAOBBwUBiAWCCIWCCIWBiAGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgKCgoMDAwODg4aGhoeHh4eHh4aGhoODg4KCgoKCgoICAgICAgICAgGBgYGBgYGBgYEBAQGBgYICAgICAgICAgKCgoICAgICAgGBgYEBAQGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwWFhYgICAeHh4gICASEhIODg4KCgoICAgICAgICAgGCAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgMDAwODg4YGBgeHh4cHhwYGBgODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwMDAwWFhYeHh4eHh4eHh4QEBAMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQGBgYGBgYGBgYEBAQEBAQGBgYGBgYICAgICAgKCgoMDAwUFBYWFhYMDA4ICAgICAoKCgoKCgoICggICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoICAgKCgoQEBAYGBgSEhIMDAwKCgoICAgICAgGBgYGBgYEBAQEBAQGBgYGBgYGBgYGBgYGBgYICAgICggKCgoKCgoICAoICAgMDAwWFhYWFhYMDAwKCgoICAgICAgGBgYGBgYEBAQEBAQGBgYGBgYGBgYGBgYEBAQEBAQGBgQGBgYWBiAWCCIUCCAUCCAOBBwSBB4WCCIUBiASBh4UBiAQBB4UBiAYCiQYCCIYCCIWCCIcDiYaDCQYCiQeDigYCiQSBiAYCiQYCCIYCiQcDCYUCCIYCiQWCCISBh4WCCIWCCASBiAWCCISBiAcDCYUBiAYCCIUBiIWCCIaCiQeDigWCCIWCCIWCCIYCiQWCCISBiAUBiAUBiAUBiAWCCAUBiAQBBwUBiAWCCAWCCAWCCIGBgYGBgYGBgYGBgYGCAYICAgICAgICAgICAgKCgoMDAwODg4aGhogICAeHh4YGBgODg4MDAwKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCAoKCgoKCAoICAgGBgYEBAQGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwMDAwWFhYgICAcHBweHh4SEhIODg4KCgoKCggICAgICAgICAgICAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKDAwODg4aGhgeHh4cHBwYGBgODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4UFBQeHh4cHBweHh4QEBAMDAwKCgoICAgGBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgQEBgQEBgQCBAICBAICBAIEBgQCBAICBAICBAIEBgIGBgQGCAQGCAYGCAYKDAoSEhAUFhIKDAoGCAYGCAYICgYICggICggGCAYEBgQEBgQGBgQEBgQEBgQGCAQICAYICggICggICgYGCAYGCAYOEA4UFhQOEA4KCggGCAYGCAYGCAQEBgQEBAICBAICBAIEBAIEBgQGBgQEBgQGBgQGCAYICggICggICgYGCAYICgYMDAoSFhIQEhAKDAoGCAYGCAYGCAQEBgQEBgICBAICBAICBAIEBgQEBgQEBgICBAICBAIEBgQEBgQWCCAUCCAUBiAUBiAOBBwUBh4WCCISBh4SBh4UCCASBiAWCCIYCiQYCiQWCCIWCCAcDiYYCiQaDCQgDigYCiQUCCAYCiQYCCIYCiQeDigUCCIaCiQWCCISBh4WCCIWCCIUBiAWCCISBiAcDCYUBiAYCiQUCCIYCiQaDCYeDigWCCIWCCIWCCIYCiQWCCIUBiASBiAUBiAUBiAUBiAUBiAOBBwSBh4UBiAUBiAUBiAGBgYGBgYGBgYGBgYGBgYGBgYIBgYICAgICAgICAgMDAwODg4aGhogICAeHh4YGBgODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCAgKCgoKCAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwUFBQeHh4eHh4eHh4SEhIODg4KCgoICAgICAgICAgICAgICAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCAgMDAwMDAwYGBgeHh4eHh4aGhoODg4MDAwICAgICAgICAgGBgYGBgYGBgYEBAQGBgYICAgICAgICAgKCAoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4WFhYeHh4cHBweHh4QEBAMDAwKCgoICAgIBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYCAgICAgICAgICAgIAAgIAAgICAgICAgIAAgIAAgACAgICAgICAgICAgIEBAQEBgQGBgYGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBgYGBgYGBgYEBAQCBAICAgICAgICAgICAgIAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYGBgYEBgQEBAQCBAICAgICAgICAgICAgACAgICAgICAgICAgICAgICAgIAAAICAgICAgIUCCAUCCASBh4SBh4QBBwUBh4WCCIUBiAUBiAUBiASBh4WCCIYCiQYCiQYCCIWCCIaDCYaDCYcDiYgECoaCiQUBiAYCiQYCiQaCiQeDigUCCAaCiQYCiQUBiAWCCIUCCIWCCIYCCIUCCAcDigUBiAYCiQUCCIaCiQcDCYeDigYCCIWCCIWCCIYCCIWCCIUBiASBiAUCCAWCCAWCCIUCCAQBB4SBh4SBiASBiASBiAGBgYGBgYGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgMDAwODg4YGBgeHh4eHh4YGBgODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwWFhYgICAeHh4eHh4QEBAMDAwKCgoICAgICAgIBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCAoKCgwMDAwWFhYgICAeHh4aGhoQEBAMDAwICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKCgoICAgICAgICAgGBgYEBAQGBgYGBgYGBgYICAgICAgICAgMDAwODg4WFhYgICAeHh4cHBwODg4MDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYOAhIOAhIOAhIOAhIOBBIOBBQQBBQOAhIOAhIOBBQQBBQQBBYSBBYSBhgWCBoaDBwaDBwaDBwWCBoSBhgSBBYQBBYQBBQQBBQOBBQOAhIOAhIOAhIOBBIOBBQOAhIOAhQQBBQQBBQQBBYSBhYUBhoYChwaDBwaDBwYChwUCBoSBhgQBBYQBBQQBBQOBBQOBBIOAhIOAhIOAhIOAhIOAhIOBBQQBBQQBBQQBBYSBBYUBhgWCBoYDBwaDBwaDBwWCBoSBhgSBBYQBBYQBBQOBBQOBBIOAhIQBBQOBBQOAhIOAhIOAhIOAhIOAhIUBiAUBiASBiASBh4QBB4WCCAWCCIUCCIWCCIUCCAUBiAWCCIYCiQYCCQYCiQWCCIaDCYcDCYeDiggECoaDCYWCCIaDCQYCiQaDCYgDigWCCIcDCYYCiQSBiAWCCIWCCIWCCIYCCIWCCIeDigUCCAYCiQWCCIaDCYcDigeDigYCCQYCCQWCCIYCCIWCCIWCCIUCCAWCCAWCCIWCCIWCCISBh4QBB4SBiASBiASBiAGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgMDAwODg4aGhoeHh4cHBwYGBgODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4UFBQeHh4cHBweHh4QEBAMDAwKCgoICAgGCAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBgYICAgICAgMDAwMDAwUFBQeHh4eHh4aGhoODg4MDAwICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoICAgICAgGBgYEBAQGBgYGBgYGBgYGBgYICAgICAgKCgoODg4WFhYgICAeHh4cHBwODg4MDAwKCgoICAgICAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYeBiYeBiYeBiggBiggCCoiCCoiCCwgCCogCCoiCCoiCCwkCC4mCjAoDDQuEDgyFjw2GDw0FjwuEjoqDjQmCjAkCC4iCCwiCCwgCCogCCoeBigeBiYgCCoiCCwgCCogCCoiCCwiCCwkCi4mDDIqDjYwEjw0GDw2GDwyFDwsEDgoDDIkCjAiCC4iCCwiCCogCCogCCgeBigeBigeBiggCCogCCoiCCwiCCwkCC4mCjAqDjQuEjo0Fjw2GDwyFjwuEDgoDDQmCjAkCC4iCCwiCCogCCogCCoiCCwiCCogCCogBigeBigeBigeBigSBh4UBiIUBiAQBh4QBB4YCCIWCCIUCCIWCCIWCCIUBiAWCCIYCiQYCiQYCiQYCCQcDiYaDCYeECggECoaDCYWCCAaCiQYCiQaDCYgECoWCCIeDigaDCYQBh4YCCIYCiQYCiIYCCIYCiQeECgUCCAaCiQYCiQcDiYcDigeECgYCiQYCiQYCCIYCCIWCCIUBiAWBiAWCCIWCCIWCCIYCiQUBiAOBBwSBh4SBiASBh4GBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCAgMDAwODAwYGBgeHh4eHhwaGhoODg4MDAwKCgoICAgICAgGBgYGBgYGBgYEBAQGBgYGBgYICAgICAgKCAgKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4UFBQeHh4cHBweHh4QEBAMDAwKCgoICAgGBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgMDAwMDAwUFBQeHh4cHBwcHBwQEBAMDAwICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKCgoKCgoKCgoICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgMDAwODg4WFhYgICAeHh4aGhoODg4MDAwICAoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYeBigeBigeBiggCCogCCoiCCwiCCwgCCogCCoiCCwiCCwkCC4mCjAoDDQsEDgyEjw0Fj4yFD4uEDgoDDQmCjIkCC4iCC4iCCwiCCwgCCoeCCgeBiggCCoiCCwgCCogCCoiCCwiCCwkCDAmCjIqDjYuEjoyFD40Fj4wEjwsDjYoDDIkCjAkCC4iCCwiCCwgCCogCCogCCgeBiggCCggCCoiCCwiCCwiCC4kCC4mCjIqDDQuEDgyFD40Fj4yEjwsEDgoDDQmCjAkCC4iCCwiCCwgCCogCCoiCCwiCCwgCCogCCoeBigeBigeBigQBB4WCCAUBiASBB4SBB4WCCIWCCIWCCIWCCIWBiAUBiAWCCIYCiQYCCIYCiQYCiQeDigaDCYeECggECoaDCYWCCIaCiQYCiIcDCYgECgWCiQeECgeDigSBh4YCiIYCiQYCiQYCCIYCiQeECgWCCIcDCYcDCYeECgeDiggECgaCiQaCiQYCCIYCCIWCCIWBiIWCCIWBiAWCCIWCiQYCCQUBiAOBBwSBiASBiAQBB4GBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCggMDAwMDAwWGBYeHh4eHh4aGhoODg4MDAwICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCAoKCAoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4WFhYeHh4cHBwcHBwQEBAMDAwKCgoICAgIBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBggGCAgICAgICAgKCgoMDAwSEhIeHh4cHBweHh4SEhIMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKCgoICggICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgMDAwODg4YGBgcHBweHh4YGBgMDg4MDAwICAgICAgICAgGCAYGCAYGBgYGBgYGBgYGBgYGBgYeBigeBigeBiggCCogCCoiCCwiCCwgCCogCCoiCCwiCCwkCC4mCjAoDDQsEDgyFDw0Fj4yFD4uEDgqDDQmCjIkCC4iCC4iCCwiCCwgCCoeCCgeBiggCCoiCCwgCCogCCoiCCwiCC4kCDAmCjIqDjYuEjoyFj40Fj4wEjwsDjYoDDIkCjAkCC4iCCwiCCwgCCogCCogCCgeBiggCCggCCoiCCwiCCwiCC4kCC4mCjIqDDQuEDgyFD40Fj4yFDwsEDgoDDQmCjAkCC4iCCwiCCwgCCogCCoiCCwiCCwgCCogCCoeBigeBigeBigQBBwUBiASBh4QBB4SBh4WCCIYCiQWCCIWCCIUCCIUCCIWCCIYCiQYCCQaCiQaDCQeDigcDiggECogECocDiYYCCIaDCQYCiQcDCYeECgYCiQgECoeDigSBiAYCiQYCiQaCiQWCCIYCiQeDigYCiQeDigcDCYgECoeECggECocDCYaDCYYCiIYCiIWCCIWCCIWCCIWCCIWCCIYCiQYCiQUCCAQBB4SBB4UBiAQBh4GBgYGBgYGBgYGBgYGBgYGBgYGBgYIBgYICAgICAgKCgoMDAwWFhYeHh4eHh4aGhoODg4MDAwICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoICAgICAgICAgGBgYEBAQGBgYGBgYGBgYGBgYICAgICAgKCgoODg4WFhYgICAeHh4cHBwODg4MDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMCgoODg4eHh4gICAeHh4UFBQMDAwICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwODg4aGhocHBweHh4WFhYODg4MCgoICAgICAgICAgGBggGBgYGBgYGBgYGBgYGBgYGBgYeBigeBigeBiggCCggCCoiCCwiCCwgCCogCCoiCCwiCCwkCC4mCjAoDDQsEDgyFDw0Fj4yFD4uEDgqDDQmCjIkCi4iCC4iCCwiCCogCCoeCCgeBiggCCoiCCwgCCogCCoiCCwiCC4kCjAmCjIqDjYuEjoyFj40Fj4wEjwsDjYoDDIkCjAkCC4iCCwiCCwgCCogCCogCCgeBiggCCggCCoiCCoiCCwiCC4kCi4mCjIqDDQuEDgyFD40Fj4yFDwsEDgoDDQmCjAkCC4iCCwiCCwgCCogCCoiCCwiCCwgCCogCCgeBigeBigeBigQBBwSBiASBh4SBh4UBiAYCiQYCiQaCiQYCCIWCCIWCCIYCiQaCiYYCiQaDCYaDCYeDigeDigiEiwgEiocDiYYCiQcDiYcDCYcDCYeECgcDCYiEiweDigUBiAYCiQYCiQaCiQYCiQYCiQeDigaDCYgECocDiggECogECogECocDiYcDiYYCiQaCiQYCiQYCCIYCCIWCCIYCiQYCiQaCiQWCCIQBh4SBh4UBiASBh4GBgYGBgYGBgYGBgYGBgYGBgYIBggIBggICAgICAgMDAwMDg4UFBQeHh4eHh4aGhoQEBAMDAwICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoODg4WFhYgICAeHh4aGhoODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGCAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBgYICAgICAoKDAwODg4cHBwgICAgICAWFhYMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoQEBAcHBweHh4gICAUFBQMDAwKCgoKCggICAgICAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYeBigeBigeBiggCCggCCoiCCwiCCwgCCogCCoiCCwiCCwkCC4mCjAoDDQsEDgyFD40Fj4yFD4uEDoqDDQmCjIkCC4iCC4iCCwiCCogCCoeCCgeBiggCCoiCCwgCCogCCwiCCwiCC4kCjAmCjIqDjYwEjo0Fj40Fj4yFDwsDjgoDDIkCjAkCC4iCCwiCCwgCCogCCogCCgeBiggCCggCCoiCCoiCCwiCC4kCC4mCjIqDDQuEDoyFD40Fj4yFD4sEDgoDDQmCjAkCC4iCCwiCCwgCCogCCoiCCwiCCwgCCogCCgeBigeBigeBigQBBwUCCASBh4SBiAUBiAaCiQaCiQaDCYYCiQWCCIWCCIYCCIaCiYaCiQcDCYcDiggECgeDigiEiwgECocDiYaCiQeECgcDCYcDCYeECgeDigkFCweECgUBiAaCiQYCiQaCiYaCiQaDCQeECgcDigiEiweDigiEioiEiogEioeECgeDigaCiQaCiQYCiQYCCIYCCIWCCIaCiQaCiQaDCQWCCISBh4SBh4UCCASBh4GBgYGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgICAgKCgwMDAwUFBQeHh4cHBweHh4SEhIMDAwICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgICAgKCgoKCgoKCgoICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgMDAwODg4WFhYeHh4eHh4aGhoODg4MDAwICAgICAgICAgIBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBggICAgKCgoKDAwODg4YGBgeHh4eHh4WFhYMDAwKCgoICAgICAgGBgYGBgYICAgGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoQEBAeHh4eHh4gICASEhIMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYeBigeBigeBiggCCggCCoiCCwiCCwgCCogCCoiCCwiCCwkCC4mCjAoDDQsEDgyFD40Fj4yFj4uEDoqDDQmCjIkCC4iCC4iCCwiCCogCCoeCCgeBiggCCoiCCwgCCogCCwiCCwiCC4kCjAmCjIqDjYwEjw0Fj40Fj4yFDwsEDgoDDImCjAkCC4iCCwiCCwgCCogCCogCCgeBiggCCggCCoiCCoiCCwiCC4kCC4mCjIqDjQuEDoyFj40Fj4yFD4sEDgoDDQmCjAkCC4iCCwiCCwgCCogCCoiCCwiCCwgCCogCCgeBigeBigeBigOBBwWCCIUCCAUBiAWCCIaCiQaDCYaDCYYCiQYCCQWCCIYCiQcDCYYCiQcDiYeDiggECgeDigiEiwgEiocDiYcDCYgEioaDiYcDiggEioeDigkFCweECgUBiAaCiQaCiQaCiYaCiQcDiggECocDiYiEiogDiokFCwiEioiEiogECoeDigaCiQcDCYaDCYWCCIYCiQYCCIaCiQaDCYaCiQWCCIUBiAUBiAYCiIUCCAGBgYGBgYGBgYGBgYGBgYGBgYGBggGBggICAgICAgKCgoMDAwSEhIeHh4cHBweHh4SEhIMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgICAgKCgoKCgoICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgMDAwODg4aGhocHBweHh4YGBgODA4MDAwICAgICAgICAgGCAYGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYGBgYGBgYGBgYGBgYIBgYICAYICAgICAgKCgoMDAwODg4YGBggICAgICAYGBgMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYEBAQGBgYICAgKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwSEhIcHBwcHBweHB4QEBAMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgeBigeBigeBiggCCogCCoiCCwiCCwgCCogCCoiCCwiCCwkCC4mCjAoDDQuEDgyFD40Fj4yFj4uEDoqDDQmCjIkCi4iCC4iCCwiCCogCCoeCCgeBiggCCoiCCwgCCoiCCoiCCwiCC4kCjAmCjIqDjYwEjw0Fj40Fj4yFDwsEDgoDDImCjAkCC4iCCwiCCwgCCogCCogCCgeBiggCCggCCoiCCoiCCwiCC4kCi4mCjIqDjQuEDoyFj40Fj4yFD4uEDgoDDQmCjAkCC4iCCwiCCwgCCogCCoiCCwiCCwgCCogCCoeBigeBigeBigQBB4YCiQWCCIUCCAWCCIaDCYaDCYcDCYYCiQYCiQUCCAaCiQcDCYaDCYcDiYeDiggECoeDigkEiwiEiocDigcDCYiFCoeECgeECggEiogEComFi4gECoWCCIaDCYaDCQcDCYcDCgeDigiEiogECokFCwgEComFi4gEioiEiogECoeECgcDCYeDigaDCYYCCIYCiQYCiQaDCYcDCYaDCYYCiQUBiAWCCAaCiQYCiIGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMCgoQDg4eHh4eHh4eHh4SEhIMDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgMDAwODg4aGhoeHh4gICAUFBQMDAwKCgoKCggICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYGBgYGBgYGBgYGBgYGBgYGCAgICAgICAgKCgoKCgoODg4YGBggICAgICAaGhoMDAwKCgoICAgICAgICAgGBgYGBgYEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoKCAoGBgYGBgYEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwSEhIeHh4cHBwcHB4QEBAMDAwKCgoICggICAgICAgIBgYGBgYGBgYGBgYGBgYGBgYIBggeBigeBigeBiggCCogCCoiCCwiCCwgCCogCCoiCCwiCCwkCC4mCjAoDDQuEDgyFD42GD40Fj4uEDoqDDQmCjIkCjAiCC4iCCwiCCogCCoeBigeBiggCCoiCCwgCCoiCCoiCCwkCC4kCjAmDDIqDjYwEjw0Fj42Fj4yFDwsEDgoDDImCjAkCC4iCCwiCCwgCCogCCogCCgeBiggBiggCCoiCCoiCCwiCC4kCjAmCjIqDjYuEDo0Fj42GD4yFD4uEDgoDDQmCjAkCC4iCCwiCCwgCCogCCoiCCwiCCwgCCogCCoeBigeBigeBigSBh4YCiQWCCIWCCIWCCIcDCYcDCYcDCYaDCYYCiQWCCIaCiQcDiYaDCYeDigeECgeDigeDigkFCwgECocDigeDigkFiweECggECoiFCwiFCwoGDAgEioYCiQaDCYaDCYcDCggECogECoiFCwiFCwkFCwgECokFCwgEiogEiogEiogECoeDiggECocDigYCCIaCiQaCiQcDCYcDiYcDiYaCiQWCCIWCCIYCiQYCiQGBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAYICAgICAoKCgoODg4cHBwgICAgICAWFhYMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoQEBAcHBweHh4gICAUFBQMDAwKCgoICAgICAgIBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAYGBgYGBgYGBgYGBggICAgICAgICAgICAgKCgoKCgoMDAwWFhYeHh4eHh4aGhoODg4MDAwKCgoICAgICAgGBgYGBgYEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoKCgoGBgYEBAQEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwUFBQgICAeHh4cHBwQEBAMDAwKCgoICAoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgeBigeBigeBiggCCggCCoiCCwiCCwgCCogCCoiCCwiCCwkCC4mCjIqDDQuEDoyFj42GD40Fj4uEjoqDDQmCjIkCjAiCC4iCCwiCCogCCoeBigeBiggCCoiCCwgCCoiCCwiCCwkCC4kCjAoDDIsDjYwEjw0Fj42GD4yFD4sEDgoDDQmCjAkCC4iCCwiCCwgCCogCCogCCgeBiggBiggCCoiCCoiCCwiCC4kCjAmCjIqDjYuEjo0Fj42GD4yFj4uEDoqDDQmCjIkCC4iCCwiCCwgCCogCCoiCCwiCCwgCCogCCgeBigeBigeBigSBh4cDCYYCiQWCCIYCiQaDCQaCiYaCiQaCiYaCiYYCCIYCiQeDigcDCYeDigeDigeDiggECgiEiwgECoeDiggECgkFiweDigiFCwkFCwmFi4oGDAiEiwWCiQeDigcDigeECgiEioiFCokFCwkFi4kFCwiEiokFCwiEiwgECogECogECoeDiggECoeECoYCCQcDCYaDCYcDCYcDigeDigaCiYWCCIWCiIcDCYaDCQICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICgoKDAwODg4aGhoeHh4gICAWFhYMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoQEBAcHBweHh4eHh4SEhIMDAwKCgoICAgICAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwUFBQgHh4eHh4aGhoODg4KCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwWFhYeHh4eHh4aGhoODg4KDAwICgoICAgGBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgeBigeBigeBiggCCggCCoiCCwiCCwgCCogCCoiCCwiCCwkCC4mCjIqDDQuEDoyFj42GD40Fj4uEjoqDDQmCjIkCjAiCC4iCCwiCCogCCoeCCgeBiggCCoiCCwgCCoiCCwiCCwkCC4kCjAoDDIsDjYwEjw2Fj42GD4yFD4sEDgoDDQmCjAkCC4iCCwiCCwgCCogCCogCCgeBiggCCggCCoiCCoiCCwiCC4kCjAmCjIqDjYuEjo0Fj42GD4yFj4uEDoqDDQmCjIkCC4iCCwiCCwgCCogCCoiCCwiCCwgCCogCCgeBigeBigeBigUCCAcDiYaCiQYCCIYCCQaCiQaCiQaCiQaCiQaCiYYCiQaDCQeDigcDCYcDigeDigeDigeDiggECogECgeECggECgkFiweDigkFi4kFi4mGDAoGDAiFCwWCiIgEioeECggECgmFi4kFi4kFi4mGC4kFiwgECoiEiwgECogECogECggECoeDiggECogECoYCiQcDCYaDCYcDiYeDigeDigaCiYYCCIaCiQcDigaDiYICAgGBgYGBgYGBgYGBgYGBgYIBgYIBgYICAgICAgKCgoKDAwODg4YGBggHiAgICAWFhYMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwSEhIeHh4cHBwcHBwQEBAMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCggKCgoMDAwUFBQgICAeHh4cHBwODg4KCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwWFhYeHh4gICAYGBgODg4KDAwKCgoICAgICAgIBgYIBgYGBgYGBgYGBgYGBgYGBgYICAgeBigeBigeBiggCCogCCoiCCwiCCwiCCogCCoiCCwiCC4kCC4mCjAqDDQuEDo0Fj42GD40Fj4wEjoqDDQmCjIkCi4iCC4iCCwiCCwgCCoeCCgeBiggCCoiCCwgCCoiCCwiCCwkCC4kCjAoDDIsDjYwEjw2Fj42GD4yFD4sEDgoDDQmCjAkCC4iCCwiCCwgCCogCCogCCgeBiggCCggCCoiCCwiCCwiCC4kCi4mCjIqDjYwEjo0Fj42GD40Fj4uEDoqDDQmCjAkCC4iCC4iCCwgCCoiCCoiCCwiCCwgCCogCCoeBigeBigeBigWCCIcDigcDCYaCiQYCiQcDCYaDCYaCiQaDCYcDCYaCiQcDCYgECgaDCYcDCYeDigeECgcDCYgECoeECggEiogEioiFCwcDigmGDAkFi4mGC4oHDIiFCwYCiQiFCwgEigiEiomGC4mGC4kFi4mGC4mGC4gECogEioeDiggECogECgeDigcDCYgECoeDigYCiQeDiYcDigcDigeDigeDigcDCYYCiQcDCYcDigcDigICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKCgoODg4YGBggICAgICAYGBgMDAwKCgoICAgICAgGBgYGBgYGBgYEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoKCgoGBgYEBAQEBAQGBgYGBgYGBgYICAgICAgKCgoKCgoSEhIgICAeHh4cHBwQEBAMDAwKCgoICgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYIBggICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwSFBQeHh4eHh4eHh4ODg4MDAwKCgoICAgICAgGBgYGBgYGBgYEBAQEBAQICAgKCgoKCgoKCgoKCgoICAgGBgYEBAQEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwYGBggICAgICAYGBgODg4KCgoKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgeBigeBigeBiggCCogCCoiCCwiCCwiCCogCCoiCCwiCC4kCC4mCjIqDDQuEDo0Fj44GD40Fj4wEjoqDjYmCjIkCjAkCC4iCCwiCCwgCCogCCgeBigiCCoiCCwgCCoiCCwiCCwkCC4kCjAoDDIsDjYyFDw2GD42GD4yFD4uEDgoDDQmCjAkCC4iCCwiCCwgCCogCCogCCgeBiggCCggCCoiCCwiCCwkCC4kCjAmCjIqDjYwEjo0Fj44GD40Fj4uEDoqDDQmCjIkCC4iCC4iCCwgCCoiCCoiCCwiCCwgCCogCCoeBigeBigeBigWCCIeDigeDigaDCYYCiQeDiYaDCYaDCYcDCYcDCgaCiQaCiQgECgaCiQcDCYeDigeECgcDiYeECgeDigeECgeDiggEiocDigmGC4kFi4mGDAoGjAgEiwaDCQkFCwkFiwiFCwmGC4kFi4kFiwmGC4mGC4eECggECoeDigeECgeDigcDigYCiQeECgcDigYCiQeDigeDigeDigcDigeDigcDCYaDCYcDigeECgcECgICAgICAYGBgYGBgYGBgYGBgYICAYICAgICAgICAgKCgoKCgoMDAwWFhYeHh4eHh4YGBgODg4KCgoICAgICAgGBgYGBgYGBgYEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoKCgoGBgYEBAQEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwUFBQgICAeHh4aGhoODg4KDAwKCgoICAgICAgICAgGCAgGCAgGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYICAYICAgICAgICAgKCAoKCgoMDAwSEhIeHh4eHh4eHh4QEBAMDAwKCgoICAgICAgGBgYGBgYEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoICAgGBgYEBAQEBAQGBgYGBgYGBgYICAgICAgKCgoODg4YGBgeHh4eHh4WFhYMDAwKCgoKCgoICAgICAgICAgICAYGBgYGBgYGBgYGBgYGCAYICAgeCCgeCCggCCggCCoiCCwiCCwiCCwiCCwgCCwiCCwkCC4kCjAmCjIqDDYuEjo0Fj44Gj42Fj4wEjwqDjYmCjIkCjAkCC4iCCwiCCwiCCogCCgeCCgiCCwiCCwgCCoiCCwiCCwkCC4mCjAoDDQsDjgyFD42GD44Gj40Fj4uEDooDDQmCjAkCC4kCC4iCCwiCCwgCCogCCoeCCggCCoiCCoiCCwiCCwkCC4kCjAmCjIsDjYwEjw2Fj44Gj40Fj4uEjoqDDYmCjIkCjAkCC4iCCwgCCwiCCwiCCwiCCwiCCwgCCogCCgeCCgeCCgWCiIeDigeDigaDCYaDCYeDigcDigcDCYcDCYeDigaCiQaCiQeECgYCiQaCiYeDigeDigaDCYcDiYaDCYcDiYeDigeECgeEComFi4kFCwmGDAoGi4kFCwcDiYmGDAkFiwiFComGC4kFiwiFCwoGjAkFiweECgeECgeDigeECgcDiYcDCYYCiQeDigcDigYCiQcDigcDigcDigeDigeDigcDCYcDCYcDCggECoeECgKCggICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwUFBQeHh4eHh4aGhoODg4MDAwKCgoICAgGBgYGBgYGBgYGBAYGBgYGBgYKCgoMDAwKCgoKCgoKCgoKCgoGBgYGBgQEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwWFhYeHh4eHh4aGBgODg4MDAwKCgoICAgICAgICAYGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGCAgICAgICAgKCgoMDAwQEBAcHBwcHBweHh4QEBAMDAwKCgoICAgICAgGBgYGBgYGBgYEBAQGBgYICAgMDAwKCgoKCgoMDAwKCgoGBgYGBgYGBAYGBgYGBgYGBgYICAgKCgoMDAwODg4aGhoeHh4eHh4UFBQMDAwKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgeBiYeBiYeBiggBiggCCoiCCoiCCwgCCogCCoiCCoiCCwkCC4mCjAoDDQuEDgyFjw2GDw0FjwuEjoqDjQmCjAkCC4iCCwiCCwgCCogCCoeBigeBiYgCCoiCCwgCCogCCoiCCwiCCwkCi4mDDIqDjYwEjw0GDw2GDwyFDwsEDgoDDIkCjAiCC4iCCwiCCogCCogCCgeBigeBigeBiggCCogCCoiCCwiCCwkCC4mCjAqDjQuEjo0Fjw2GDwyFjwuEDgoDDQmCjAkCC4iCCwiCCogCCogCCoiCCwiCCogCCogBigeBigeBigeBigYCiQiEioeDigaDCQaDCYeDigeECoaDCYcDCYeDigaCiQaCiQeDigYCiQYCiQcDigeDigaCiQcDCYYCiQaDCYeDigeDiggEiokFi4kFCwmGC4kGC4kFC4eECgmGC4iFCoiFCokFiwiFCwkFCwmGDAkFiweECoeDigaDCYcDigcDiYaCiQWCCIeDigcDigYCiQeDigcDCgaDCYeDiggECgaDCYcDCYcDCYgEiwgEioICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwUFBQeHhweHh4aGhoODg4MDAwKCgoICAgICAgGBgYGBgYGBAYGBgYICAgKCgoKCgoKCgoKCgoMDAwKCgoICAgGBgYEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwWFhYeHh4cHBwYGBgODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwQEBAcHBwcHBweHh4SEhIMDAwKCgoICAgICAgGBgYGBgYGBgYEBAQICAgKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBAYGBgYGBgYICAgICAgKCgoMDAwODg4aGhoeHh4eHh4UFBQMDAwKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgOAhIOAhIOAhIOAhIOBBIOBBQQBBQOAhIOAhIOBBQQBBQQBBYSBBYSBhgWCBoaDBwaDBwaDBwWCBoSBhgSBBYQBBYQBBQQBBQOBBQOAhIOAhIOAhIOBBIOBBQOAhIOAhQQBBQQBBQQBBYSBhYUBhoYChwaDBwaDBwYChwUCBoSBhgQBBYQBBQQBBQOBBQOBBIOAhIOAhIOAhIOAhIOAhIOBBQQBBQQBBQQBBYSBBYUBhgWCBoYDBwaDBwaDBwWCBoSBhgSBBYQBBYQBBQOBBQOBBIOAhIQBBQOBBQOAhIOAhIOAhIOAhIOAhIaDCYiEioeDigcDiYaDCQcDCYeDigcDCYaDCYeDigaCiQWCCIcDigYCiIWCCIaDCYcDigaCiQcDCYYCiQYCiQcDCYcDCYgEiokFCwiEiokFCwiFCwkFC4iFCwkFiwgEioeECoiFCwiEioiFCwkFi4kFiwgECocDigaDCYcDiYcDCYYCiQWCCIcDigaCiQWCCIcDigaDCYaDCYeDiggECgYCiQeDigcDiYgECogEioICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICggKCgoMDgwWFhYeHh4eHh4aGhoODg4MDAwKCgoICAgIBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoICAgGBgYGBAQGBgYGBgYGBgYICAgKCgoKCgoMDAwWFhYeHh4eHh4aGhoODg4MDAwKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgGCAYGBgYGBgYGBgYGBggGBggICAgICAgICAgKCgoMDAwSEhIeHh4cHBweHh4SEhIMDAwKCgoICAgICAgGBgYGBgYGBgYEBAQGBgYICAgKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYIBgYICAgKCgoMDAwODg4aGhoeHh4eHh4WFhYMDgwKCgoICggICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgCAgICAgICAgICAgIAAgIAAgICAgICAgIAAgIAAgACAgICAgICAgICAgIEBAQEBgQGBgYGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBgYGBgYGBgYEBAQCBAICAgICAgICAgICAgIAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYGBgYEBgQEBAQCBAICAgICAgICAgICAgACAgICAgICAgICAgICAgICAgIAAAICAgICAgIcDiYiEiwcDiYcDiYaDCYaDCYcDCYcDCYYCiYcDCYYCiISBh4aCiQWCiIWCCIaDCYcDigYCiQYCiQWCCIaCiQcDigYCiQgEioiFCwgEioiFCwgEiokFC4kFCwiFCwgECgcDCYiEiwgEiogEioiFCwiFCogECocDCYaCiYcDCYcDCYYCiQWCCIaDCYWCCIUBiAaDCYaCiYaDCYcDCYeDigYCiYgECgcDiYgECogEiwICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKCgoMDgwWFhYeHh4gICAaGhoMDAwKCgoICAgICAgGBgYGBgYGBgYEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoICAgGBgYGBgYEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwUFBQgICAeHh4aGhoODg4MDAwKCgoKCAgICAgICAgIBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwSEhIeHh4eHh4eHh4QEBAMDAwKCgoICAgICAgGBgYGBgYGBgYEBAQEBAQGBgYKCgoKCgoKCgoKCgoICAgGBgYEBAQEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwaGhogICAeHh4WFhYMDgwKCgoKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYEBgQGBgYGBgYEBgQEBAQGBgYGBgYGBgYGCAYICAgKDAoSEhISEhIODg4KCgoICAgICAgICAgGCAgGBgYGBgYGBgYICAgICAgGCAYGBgYGBgYICAgICAgICAgICggKCgoQEBASFBIQEBAKCgoICAgGCAYGBgYGBgYEBgQEBAQGBgQGBgYGCAgICAgGBgYGBgYGBgYGCAgICAgICAgICAgKCgoODg4SEhISEhIKDAoICAgGCAYGBgYGBgYGBgYEBAQEBgQGBgYGCAYICAgGCAYGBgYGBgYGBgYICAgeDigkFCwaDCYaDCYaDCQYCiQaDCYaDCYWCCIYCiQYCiIQBB4YCiIWCCIWCCIaDCYaDCYYCiQWCCIUBiAaCiQcDigYCCIgEioiFCwgEiogECoeECgiFCweECogECoeDigaCiQgECggEiogECoiFCwgECoeECgaDCYYCiQaDCYcDCYYCCIWCCIYCiQUBiAUCCAaCiYWCCIYCiQcDCYcDiYaCiQeECgcDCYiEiogEioICAgGBgYGBgYGBgYGBgYGBggGCAgICAgICAgICAgKCgoKCgoMDAwWFhYeHh4gICAaGhoODgwKCgoICAgICAgICAgGBgYGBgYEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoKCgoGBgYEBAQEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwUFBQgICAeHh4aGhoODg4KDAwKCgoKCgoICAgICAgGCAYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGCAgGCAgICAgICAgKCgoKCgoMDAwSEBIcHBweHh4eHh4QEBAMDAwKCgoICAgICAgGBgYGBgYEBAQEBAQGBAQICAgKCgoKCgoKCgoKCgoICAgGBgYEBAQEBAQGBgYGBgYICAgICAgICAgKCgoODgwaGhogICAeHh4WFhYMDAwKCgoKCgoICAgICAgICAgGCAgGBggGBgYGBgYGBgYGBgYICAgICAgGBggGCAYGBgYGBgYGBgYGCAYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMCgwSEhISEhIMDAwKCgoKCgoICAgICAgGBgYGBgYGBgYGCAYICAgICAgGBgYGBgYGBgYGBggICAgICAgKCgoKCgoODg4UFBQQEBAKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoMDAwSEhISEhIKCgwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGCAgICAgGBgYGBgYGBgYGCAYICAgeECgkFCwYDCQaDCYaDCYYCCIaDCYaDCYWCCIYCiQYCiQQBBwWCCIWCCIUBiAYCiQaDCQUCCIUCCIUBiAaDCYcDCYWCCIeECoiEioeECgeDigcDCYeECgeECogECgcDiYYCiIeDiggECoeECggECoeDigcDigYCiQWCCIYCiQaDCQWCCIWCCIWCCISBh4WCCIaCiQWCCIYCiQcDCYaDCYYCiQeDigYCiQiEiogEioICAgICAgGBgYGBgYGBgYGBgYGCAYICAYICAgICAgKCAoKCgoMDAwUFBQeHh4eHh4aGhoODg4MDAwKCgoICAgGBgYGBgYGBgYEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoKCgoGBgYEBAQEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwUFBQeHh4eHh4aGBoODg4KDAwKCgoICAgICAgICAgICAgGCAgGBggGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGCAYGCAYICAYICAgICAgKCgoMDAwQEBIcHBwcHhweHh4QEBAMDAwKCgoICAgICAgGBgYGBgYGBgYEBAQGBgYICAgKCgoKCgoKCgoKCgoICAgGBgYEBAQEBAQGBgYGBgYGBgYICAgKCgoMDAwODg4aGhoeHh4eHh4UFBQMDAwKCgoKCAoICAgICAgICAYGCAYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYEBgQEBAQGBgYGBgYGBgYEBgQEBAQGBgYGBgYICAgKCgoMDAwUFBQSEhIMDAwKCgoICAgICAgICAgGBgYGBgYGBgYGCAYICAgICAgGBgYGBgYGBgYGBgYICAgICAgICgoKCgoODg4UFBQSEhIMDAwKCgoICAgGBgYGBgYEBAQGBgQGBgYGBgYGBgYICAgGCAYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwSEhIUFBQMDAwKCgoICAgGBgYGBgYEBAQEBgQGBgYGBgYGBgYGBgYGBgYEBgYGBgYGBgYGBgYeDigiEiwYCiQYCiQaDCYWCCIaDCYaCiQYCiIWCCIYCiIOBBoWCCAUCCASBiAWCCIYCiQSBiAUBiASBh4aDCYcDCYWCCIcDCYgECgcDigcDCYcDCYaDCYeDigeDigcDigUBiAcDCYeECgeDigeDigcDCYcDCYWCCIUBiAYCCIaCiQUBiAUBiAWCCIQBBwWCCAWCCIWCCAYCiQaDCYaDCYYCCIcDigWCCIgECoeECgKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAoKCgoMDAwUFBQeHh4eHh4aGhoODg4MDAwKCgoICAgGBgYGBgYGBgYEBAQEBAQGBgYKCgoMDAwKCgoKCgoKCgoKCgoICAYGBgYEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwWFhYgICAeHh4YGBgODg4KCgoKCgoICAgICAgICAYGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKDAwQEBAcHBwcHBweHh4QEBAMDAwKCgoICAgGBgYGBgYGBgYGBgYEBAQGBgYICAgMDAwKCgoKCgoMDAoKCgoGBgYEBAQEBAQGBgYGBgYGBgYICAgKCgoMDAwODg4aGhoeHh4gICAUFBQMDAwKCgoICAoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgQGBAQGBgYGBgYGBgQEBAQEBAQGBgYGBgYICAgKCgoODg4WFhYQEBAKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYICAYICAgGBgYGBgYGBgYGBgYGBgYIBggICAgICAoKCgoMDAwSEhIUFhYODg4KCgoICAgGBgYGBgYEBAQEBAQGBgQGBgYGBgYICAgICAYGBgYGBgYGBgYGBgYICAgICAoKCgoKCgoQEBAWFhYODg4KCgoICAgGBgYGBgYEBAQEBAQGBgQGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYcDCYgEioYCiQaCiQaDCYUBiAaDCYYCiQWCCIUBiAUBiAKAhoUBh4UBiAQBB4UCCIWCCISBh4SBh4SBh4cDCYaDCQUBiAaDCYeDigcDigaDCYaCiQaCiQeDigaDCYcDCYUBiAaDCQcDiYeDigcDCYaDCYaDCYUBiAUBiAWCCIaCiQSBiASBh4UBiAMBBoUBiAUBiAUCCAWCCIaCiQaCiQWCCIcDCYWCCIgECgcDiYKCAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCAoKCgoMDAwUFBQeHh4eHh4aGhoODg4MDAwKCgoICAgICAgGBgYGBgYGBAYGBAQICAgKCgoMDAwKCgoKCgoMDAwKCgoICAgGBgYEBAQGBgYGBgYGBgYICAgICAgKCgoMDAwWFhYgICAeHh4YGBgMDAwMCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwQEBAcHBwcHBweHh4SEhIMDAwKCgoICAgICAgGBgYGBgYGBgYEBAQGBgYICAgKCgoKDAoKCgoMDAwKCgoICAgGBAQGBAYGBgYGBgYICAgICAgKCgoMDAwODg4aGhoeHh4eHh4UFBIMDAwKCgoKCAoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgQGBgYGBgYICAgKCgoSEhIWFhYODg4KCgoKCgoICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoSEhIWGBYQEBAKCgoGBgYGBgYGBgYGBgQGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoODg4WFhYSEhIKCgoICAgGBgYGBgYGBgQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYaCiYgECoYCiQYCiQcDiYUBiAYCiQWCCIUCCAUBiASBh4KAhgQBh4UBiAOBBwSBiAUBiASBh4SBh4UBiAcDCYaCiQWCCIaDCYeDigcDCYaCiQWCCAWCCIgECoYCiQaDCYUCCAaCiQaDCYcDiYaDCYaDCYaDCYUBiASBiAUBiAWCCIQBh4SBh4UBiAIAhgSBh4SBiAUBiAUCCIYCiIWCCIaCiQcDCYWCCIeECgcDiYICAgICAgGBgYGBgYGBgYGBgYGBgYGCAgICAgICAgICAgKCgoMDAwSEhIcHBweHh4aGhoODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoICAoGBgYEBAQGBgYGBgYGBgYICAgKCgoKCgoMDAwWFhYeHh4cHBwWFhYODg4MDAwKCgoICAgICAgIBggGBgYGBgYGBgYGBgYGBgYIBggICAgICAgICAgGCAYGBgYGBgYGBgYGBgYGBggICAgICAgICAgKCgoMDAwQEBAaGhocHBweHh4SEhIMDAwKCgoKCgoICAgGBgYGBgYGBgYEBAQIBggICgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4aGhoeHh4cHBwSEhIMDAwKCgoICAgICAgICAgGCAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoUFBQWFhYMDAwKCgoKCAoICAgGBgYGBgYGBgYGBgYGBgYGBggICAgICAgGBggGBgYGBgYGBgYGBgYGCAYICAgKCgoKCgoODg4YGBoSEhIKCgoIBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGBggGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoMDAwWFhYUFBQKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBggGBgYGBgYGBgYGBgYGBggaDCQgECoaCiQYCiIcDCYUBiAWCCIWCCASBiASBh4SBh4MAhoOBBwUBiAOBBwQBh4UBiASBh4SBB4SBiAaDCYaCiQWCCIYCiQcDigcDCYYCCIUBiAWCCIiEiwaCiYYCiQUCCAYCiQYCiQaDCQYCiQaDCYaDCYUBiASBh4SBiAUCCAOBBwQBB4SBh4IAhYSBh4SBh4UBiAUCCAWCiIUBiAaCiQaCiQWCiIeECocDCYICAgICAgGCAYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwSEhIcHBwcHBweHh4QEBAMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoODg4YGBgeHh4eHh4WFhYODg4MDAwKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGCAYICAgICAgICAgKCgoMDAwODg4aGhocHBweHh4UFBQMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYICAYICAgKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwQEBAeHh4cHBwcHBwSEhIMDAwKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoUFBQSEhIKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgIBggGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwWFhYSEhIKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoSEhIUFBQKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAYGCAgGBgYGBgYGBgYGBgYGBggYCiQgECgaCiQWCCIaCiQSBiAUCCAWBiASBh4QBB4QBB4MAhoOAhoSBB4QBBwQBB4SBh4QBh4SBBwUBiAaDCQYCiQUBiAYCiQcDigaDCQWCCAUBiAWCCIgECwaCiQYCCQUBiAWCCIYCiQYCCIYCiQaDCYaDCQUBiAQBB4QBB4UBh4QBBwQBB4OBBwKAhgQBB4QBB4SBh4UBiAWCCIQBB4YCiQWCCAYCiIgECoaDCYICAgICAgGCAYGCAYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwSEhIcHBwcHBweHh4QEBAMDAwKCgoICAgICAgGBgYGBgYGBgYICAgICAgICAgKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYICAgICAgICAgKCgoODg4aGhoeHh4cHBwWFhYMDAwKCgwICAoICAgICAgIBgYGBgYGBgYGBgYGBgYGCAYICAgICAgICAgICAgICAYGBgYGBgYGBgYGBgYGBgYIBgYICAgICAgKCgoMDAwODg4aGhoaGhoeHh4WFhYMDAwKCgoICAgICAgICAgGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoICAgICAgICAgGBgYGBgYGBgYICAgICAgKCgoMDAwQEBAeHh4cHBwcHBwSEhIMDAwKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGCAYGCAYICAgICAgICAgGCAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKDAoUFBQODg4KCgoICAgICAgICAYICAgGBgYGBgYGBgYGBgYICAgICAgICAgIBggGBgYGBgYGBgYGBgYICAgICAYICAgKCgoKCgoSEhISEhIKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAYICAgICAgKCgoODg4UFBQKDAoICAgICAgICAgGBgYGBgYGBgYGBgYIBgYICAgGBgYGBgYGBgYGBgYGBgYaCiQeDigWCCIUBiAWCCISBh4UBiASBh4SBB4QBBwQBBwOBBoMAhoSBB4QBBwOBBwSBh4QBB4QBBwUCCAaDCQYCiIUBh4WCCIaDCYYCiQUBiASBh4WCiIgECoYCiQWCCISBiAUCCAYCCIYCCIWCCIaDCYaDCQUBiAQBBwQBB4SBB4OBBwSBB4QBBwKAhgOBBwQBBwQBB4SBiAWCCAQBh4UCCAUCCAWCCIcDCgcDigICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgKCgoMDAwUFBQaGhocHBwcHBwQEBAMDAwKCgoICAgICAgGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICggICAgGBgYGBgYGBgYICAgICAgICAgKCgoODg4YGBgeHh4aGhoWFhYODg4KCgoICgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGCAgICAgICAgICAgGCAYGBgYGBgYGBgYGBgYGBgYGCAgICAgICAgKCgoMDAwQEBAaGhoaGhoeHh4UFBQMDAwKCgoICAgICAgICAgGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYICAgICAgKCgoMDAwQEBAcHBwcHBwaGhoUFBQMDAwKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgMDAwUFBQODg4ICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBggICAgKCgoSEhIUEhQKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYIBgYICAgICAgODg4UFBQMDAwICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYaDCYcDCYUCCIUBiAUBiASBh4SBiAQBB4QBBwOAhoQBBwOBBoMAhoQBB4QBBwOBBwQBB4QBB4OBBwUCCAYCiQWCCIUBiAUBiAaCiQYCiISBiASBh4YCiQeECoYCCIUBiASBh4SBiAWCCAWCCIYCCIaDCYaCiQUBh4QBBwOBBwQBBwOAhoQBBwOBBoMAhoQBBwQBBwQBB4SBh4UBiASBh4SBiAWCCIWCCIaCiQcDigICAgGCAYGBgYGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgKCgoMDAwSEhIaGhoeHh4cHBwQEBAMDAwKCgoICAgICAgICAgGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICgoICAgGBgYGBgYGCAgICAgICAgICAgKCgoODg4YGBgeHh4aGhoWFhYODg4KCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgGCAYGBgYGBgYGBgYGBgYGBgYGBgYGCAYICAgICAgICAgMDAwQEBAYGBgaGhoeHh4UFBQMDAwKCgoICggICAgICAgGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYICAgICAgICAgKCgoMDAwQEBAcHBwcHBwYGBgSEhIMDAwKCgoICAgICAgGCAYGBgYGBgYGBgYGBgYGBgYGBgYGCAYICAgIBgYGBgYGBgYGBgYGBgYGBggGBgYGBgYGBgYGBgYGBgYICAgICAgICAgMDAwUFBQODg4ICAoGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgIBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoSEhISEhIKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAoODg4UFBQMDAwICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYGBgYGBgYGBgYaDCYaCiQWCCISBiAUBiASBh4QBBwQBB4QBBwMAhoOAhoOBBwMAhgQBBwQBBwOBBoOBBwQBB4OBBoUCCAWCCISBiAUBiASBh4YCiQWCCISBh4SBB4aDCYeDigWCCIUBiAQBB4QBh4UBiAUCCAYCCQYCiQYCiQSBh4QBBwOBBoOBBoOAhoOBBwOAhoMAhoQBBwQBBwQBBwSBiASBh4SBB4SBiAWCCIYCiIYCCIaDCQICAgGCAYIBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwQEBAYGBgcHBwcHBwODg4KCgoICAgICAgICAgICAgGBgYGBgYICAgICAgICgoKCgoKCgoKCgoKCgoKCgoICAgICAgGCAgGBgYGBgYICAgICAgICAgKCgoMDAwYGBgeHh4aGhoUFBQMDg4KCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYIBgYGBgYICAgICAgGCAYGBgYIBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgMDAwODg4WFhYaGhoeHh4SEhIMDAwKCgoICAgICAgICAgGBgYGBgYICAgICAgICAgKCgoKCgoKCgoKCgoICgoICAgICAgGBgYGBgYICAgICAgICAgICAgKCgoODg4cHBwcHBwYGBgQEBAMDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBgYGCAYICAgGBgYGBgYGBggGBgYGBgYICAgGBgYGBgYGBgYGBgYICAgICAgICAoKCgoODg4QEBAMDAwKCgoGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoODg4SEBIMDAwKCgoICAoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYKCgoMDAwQEBAODg4KCgoICAoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYaDCYYCCQWCiIQBB4SBB4SBh4QBBwOBBwOBBwMAhoOAhoOBBwMAhgOBBwQBBwMAhoOBBwQBBwOAhoUCCAWCCISBh4UBiAQBB4WCCIWCCISBB4SBB4aDCQcDigUBiASBh4QBB4QBB4UBiASBiAWCCIWCCIWCCIQBB4OAhoMAhoOBBwOAhoQBBwMAhoOBBoQBBwQBBwQBBwSBh4SBB4SBB4SBh4SBiAWCCIWCCIYCiQICAgICAgIBggICAgICAgICAYICAYICAYGCAYGBgYICAgKCgoMDAwQEBAYGBgcHBwcHBwODg4MDAwKCgoICAgICAgGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCAoICAgICAgGBgYGBgYGBgYICAgICAgICAgKCgoMDAwWFhYeHh4YGBgUFBQODg4KCgoICAgGCAgGBgYGBgYGBgYGBgYGBgYGCAYICAYIBggICAgICAgICAgIBggICAgICAgICAgGCAYGCAYICAYGCAYIBggKCAoMDAwODg4WFhYaGhoeHh4SEhIMDAwMCgoICAgICAgICAgGBgYGBgYGBgYICAYICAgKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4cHBwcHBwYGBgQEBIMDAwKCgoICAgGBgYGCAYICAYICAYICAYICAgICAgIBggICAgICAgICAgICAgICAgGBgYGBgYICAgIBggGBgYGBgYGBgYICAgICAgKCgoKCgoODg4ODg4MDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwQEBAMDAwKCgoKCgoICAgGBgYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwODg4ODg4KCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAYICAgGBgYGBgYGBgYaDCYWCCIWCCIQBBwQBBwQBB4QBB4OBBwOBBoOBBoOAhoOBBwMAhgOBBwQBBwMAhoQBBwQBBwOAhoUCCAWCCIQBh4UBiAQBB4WBiAUBiAQBB4SBh4aDCQaDCYUBiASBh4QBB4QBBwSBiASBiAUCCIWCCIWCCISBB4MAhoMAhoQBBwOBBoOBBwMAhgQBBwQBBwQBBwQBBwSBh4SBh4SBh4SBB4SBh4WCCIUBiAYCiQICAgICAgICAgICAgICAgICAgICAgICAgGCAgGBgYICAgKCgoMDAwQEBAWFhYeHh4eHh4QEBAMDAwKCgoICAgICAgGBgYGBgYGBgYGBgYIBggICAgKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwODg4YGBgeHh4YGBgSEhIMDg4MDAwICAgGBgYICAYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGCAYGBgYICAoMDAwODg4UFBQaGhogICAUFBQMDAwMDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYICAgKCAgKCgoKCgoKCgoICAgIBggGBgYGBgYGBgYGBgYICAgICAgKCgoMDAwQEBAeHh4cHBwWFhYQEBAMDAwKCgoICAgGBgYGCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgYICAgICAgGBgYGBgYGBgYGCAYICAgKCgoKCgoMDAwODg4MDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBggICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwODg4MDAwKCgoKCgoICAgGBgYGBgYGBgYGBgYICAgICAgICAgGBggGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwODg4MDAwKCgoKCgoICAgGCAYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYaDCYUBiAWCCIOBBwOBBoQBBwQBB4OBBoMAhoOBBoOAhoMAhoMAhgOBBwQBBwMAhoQBBwQBBwOAhoUCCAWCCASBB4UBiAQBBwUBiAUBiAQBBwSBB4aCiQaCiQSBiASBh4QBBwQBBwSBiAUBiAUCCAWCCIWCCISBh4MAhoMAhoOBBwQBBwQBBwMAhgOBBwQBBwQBBwQBBwSBB4QBh4QBBwQBBwQBh4UBiASBiAYCiQICAgICAgICAgICAgICAgICAgICAgICAgGBgYICAgICAgKCgoMDAwODg4WFhYcHBweHh4SEhIMDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgKCAoMDAwODg4aGhogICAYGBgSEhIMDAwKCgoICAgGCAgGCAYIBggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYICAgICAgICAgKCgoODg4UFBQaGhogICAWFhYMDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCAgKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwSEhIeHh4cHBwWFhYODg4MDAwKCgoICAgICAgGBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgGCAYGBggGBggGBgYICAgICAgGBgYGBgYGBgYGCAYICAgKCgoKCgoMDAwMDAwMDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwMDAwKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwMDAwMDAwKCgoKCgoICAgGCAYGBgYGBgYGBgYIBggICAgICAgICAgICAgGBgYICAYaCiQUBiAUBiAQBBwMAhoQBBwQBB4OAhoMAhoOBBoMAhoMAhoMAhgOBBoQBBwMAhgOBBwQBBwOAhoUBiAUCCASBiAUBiAOBBwSBh4UBiAOBBwSBB4aCiQWCCISBiAQBB4QBBwOBBwSBh4SBh4UBiAUCCAWCCISBh4MAhoOBBoQBBwQBBwQBBwMAhgQBBwQAhwQBBwQBBwSBB4QBB4QBB4QBBwSBh4UBiAQBB4YCiQICAgICAgICAgICAgICAgICAgIBggIBggGBgYGBgYICAgICAgMDAwODg4WFhYeHh4eHh4SEhIKCgoKCggICAgGBgYGBgYGBgYIBgYICAgICAgICgoICgoICgoICgoKCgoKCgoICAgICAgICAgGBgYGBgYGBgYICAgICAgKCgoODg4cHBweHh4YGBgQEBAMDAwKCgoICAgICAgGBgYGBgYICAgICAgICAgICAgICAgICAgICAgICggICAgICAgICAgICAgICAgICAgIBggGBgYGBgYICAgICAgKCgoMDAwSEhIcHBwgICAWFhYMDAwKCgoICAgGBgYGBgYGBgYGBgYICAgICAgICgoKCgoICgoICgoICgoICgoICAgICAgIBgYGBgYGBgYGBgYICAgKCggKCgoSEhIeHh4cHBwWFhYODg4MDAwICAgICAgGBgYGBgYIBggIBggICAgICAgICAgICAgICAgICAgKCgoICAgICAgICAgGBgYICAgICAgGCAYGBgYGBgYICAgICAgKCgoKCgoMDAwMDA4MDAwKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgMDAwMDAwMDAwKCgoKCgoKCgoICAgGBgYGBgYGBgYICAYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoMDAwMDA4MDAwKCgoKCgoICAgICAgGBgYGBgYGCAYICAYICAgICAgICAgICAgGBgYICAgWCCASBh4SBh4QBBwMAhgQBBwQBB4MAhgOAhoMAhoMAhoOAhoMAhgOBBoQBB4MAhgOBBwQBB4MAhoUBiAUBiASBh4SBh4OBBwQBB4SBh4OBBoSBBwYCiIWCCASBh4QBB4QBBwOBBwSBiASBh4UBiAUBiAWCCASBh4MAhoOBBoQBBwOBBwOBBoKAhgQBBwOBBwQBBwQBBwSBh4QBBwQBB4OAhwQBB4SBh4QBBwWCCIICAgICAgICAgICAgICAgICAgICAgICAgGCAYGBgYICAgKCgoMDAwMDAwUFBQeHh4gIB4SEhIKCgoKCAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgICAoICAoICAgICAoKCgoICggICAgICAgGBgYGBgYGBgYICAgICAgKCgoODg4cHBweHh4YGBgODg4MDAwKCgoICAgGCAYGBgYICAgICAgICAgICAgICAgICAgICAgICAgICgoICAgICAgICAgICAgICAgICAgICAgICAgGBgYICAgKCgoKCgoMDAwQEBAcHBwgICAYGBgMDAwKCgoICAgICAgGBgYGBgYGBgYICAgICAgICAgICAoICAoICAoICAoICAgICAgICAgGBgYGBgYGBgYGBgYICAgKCAgKCgoSEhIgICAcHBwSEhIMDAwMDAwKCgoICAgGBgYGCAYICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoICAgICAgGBgYGBgYICAgICAgGBgYGBgYGBgYICAgKCgoQEBAUFBQQEBAQEBAMDAwICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGCAgICAgKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYKCgoODg4QEBAQEBAUFBQODg4KCAoICAgGBgYGBgYGBgYICAgICAgICAgGCAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgMDAwQEBAQEBAUFBQQEBAKCgoICAgGBgYGBgYGBgYICAgICAgICAgICAgICAgICAgGBgYICAgUBh4QBB4QBBwQBBwKAhgOAhoQBBwMAhoKAhgKAhgOAhoOAhoMAhgOAhoQBB4MBBoOBBwSBB4OBBoUCCAUBiAQBB4SBh4QBBwQBB4SBh4OBBoSBBwYCCIUBiASBh4QBB4OBBwOBBwUBiASBh4SBiASBiAWCCASBh4OAhoQBBwQBBwQBBwOBBoKAhgQBBwOBBwQBBwQBBwSBiAQBBwQBBwMAhgQBBwQBB4QBBwUCCAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoMDAwSEhIeHh4eHh4SEhIKCgoICAgICAgGBgYGBgYICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgGBgYGBgYGBgYICAgICAgKCgoODg4cHBweHh4WFhYODg4MDAwKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoMDAwODg4aGhogICAWFhYMDAwKCgoICAgGCAgGBgYICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgGBgYGBgYICAgICAgKCgoSEhIeICAcHBwQEBAMDAwKCgoKCggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoICAgGBgYGBgYICAgICAgGBgYGBgYGBgYICAgICAgMDAwWFhYSEhISEhIQEBAICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYKCgoSEhISEhISEhIUFBQMDAwICAgICAgGBgYGBgYGCAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgQEBASEhISEhIWFhYMDAwICAgICAgGBgYGBgYGBgYICAgICAgICAgICAgICAgICAgGBggICAgUBh4QBBwOBBoOBBoKAhYMAhoQBBwMAhoIAhgKAhgOAhoMAhoMAhoOAhoQBBwOBBoQBBwSBB4OBBoWCCASBiAQBB4SBh4QBBwQBB4SBB4OAhoSBh4WCCISBh4SBh4QBB4OBBwQBBwUBiASBh4SBh4SBh4WCCAUBiAQBBwQBBwQBBwQBBwOAhoKAhgQBBwQBBwQBBwQBBwSBiASBB4QBBwKAhgQBBwQBBwQBBwUCCAICgoICAgICAgICAgICAgICAgICAgICAgIBggICAgICAgICAgKCgoMDAwSEhIeIB4cHBwQEBAMDAwKCgoICAgGBgYGBgYICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgIBggGBgYGBgYKCggKCgoODg4aGhogHh4UFBQMDAwKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoICAgICAgICAgICAgICAgICAgICAgGBggICAgICAgICAgKCgoMDAwODg4cHBweHh4UFBQMDAwKCgoICAgGBgYGBgYICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgGBgYGBgYICAgKCgoMDAwQEBAcHBwcHBwODg4MDAwKCgoICAgICAgICAgIBggICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoICAgGBgYGBgYICAgICAgICAgGBgYGBgYICAgICAgICAgMDAwSEhIODg4MDg4ICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYKCgoODg4QEBASEhIKCgoICAgICAgICAgGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgMDg4ODg4SEhIMDAwICAgICAgICAgGBgYGBgYICAgICAgICAgICAgICAgICAgGCAYIBggICAgSBiAQBBwOAhoOBBoKAhgMAhoQBBwMAhgKAhgKAhgMAhoMAhoMAhoMAhoQBBwOBBoQBB4SBB4QBBwWCCISBh4QBB4SBh4QBBwQBh4QBBwOBBoSBh4WCCIQBB4SBB4QBB4QBBwQBBwUBiASBiASBh4SBh4UCCAUBiAQBBwQBBwQBBwOBBwOAhoMAhgQBBwQBBwQBBwQBBwUBiAQBB4QBBwKAhgOBBwOBBwQBBwUBiAKCgoICAoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoSEhIgICAcHBwQEBAKCgwKCgoICAgGBgYICAgIBggGBgYICAgICAgICAgKCggKCgoKCgoKCgoICAgICAgICAgICAYGCAgICAgGBgYICAgICgoKCgoODg4YGBggICAWFhYMDAwKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKCgoICAoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoODg4eHh4eHh4UFBQMDAwKCgoICAgICAgIBgYICAgGBgYICAgICAgICAgICAgKCgoKCgoKCggICAgICAgICAgGBgYIBggICAgGBgYICAgKCgoKCgwQEBAcHBweHh4QEBAKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoICAoGBgYEBAYGBgYICAgICAgIBggGBgYICAgKCgoMDAwMDAwKCgoMDAwMDAwMDAwICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYKCgoMDAwMDAwMDAwMCgoMDAwMDAwKCgoGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgMDAwMDAwMDAwKCgoMDAwMDAwKCgoICAgGBgYIBggICAgICAoKCgoICAoICAgGBgYIBggKCAoQBh4QBBwMAhoOBBoKAhgOBBoSBBwMAhgKAhgKAhgOAhoOAhoMAhoMAhoQBBwOBBoQBB4QBB4QBBwWCCISBB4SBB4SBh4QBB4QBh4QBBwOBBoSBh4WCCISBB4SBh4QBBwQBBwQBB4UBiASBiASBiASBh4UBiASBh4OBBwQBBwQBBwOBBwMAhoMAhgSBBwQBBwQBBwQBBwUBiAQBB4QBBwMAhgQBBwOBBwQBBwSBiAKCgoKCgoICAgICAgICAgICAgICAgICAgICAgIBggICAgICAgICAgMDAwSEhIeHh4cHBwQEBAKCgoICAgICAgICAgICAgICAgGBgYICAgICAgICAgICgoKCgoKCgoKCgoICAgICAgICAgGBgYGBgYICAgIBggICAgICAgKCgoODg4YGBggICAWFhYMDAwKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKCgoKCgoKCgoKCggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoODg4cHBweHh4UFBQMDAwKCgoICAgICAgICAgICAgGBgYICAgICAgICAgICAgKCgoKCgoICgoICAgICAgICAgGBgYICAgICAgICAgICAgICAgKCgoQEBAcHBweHh4QEBAMDAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKDAoKCgoKCgoGBgYEBAQGBgYKCAoICAgGBgYGBgYICAgKCgoMDAwSEhIWFhYUFBQQEBAODg4ICAgGBgYGBgYGBgYGBAYGBgYGBgYGBgYGBgYICAgKCgoICAgGBgYGBgYGBgQGBgYGBgYGBgYGBgYKCgoODg4QEBAUFBQWFhYQEBAKCgoICAoICAgGBgYGBgYICAgICAgICAgGBgYGBgYGBgYGBgYGBAYGBgYGBgYGBgYICAoODg4QEBAUFBQWFhYSEhIMDAwKCgoICAgGBgYGBgYICAgKCgoKCgoKCgoICAgGBgYIBggKCAoOBBwQBBwOAhoOAhoKAhgOBBoSBBwKAhgKAhgMAhgOBBwOBBwOAhoMAhoQBBwOBBwQBh4QBBwOBBwWCCIQBB4QBBwSBh4QBBwQBB4QBBwOBBwSBh4WCCISBiASBB4QBBwQBBwSBB4UBiASBiASBiASBB4UBiASBh4OBBwOBBwQBBwOBBwMAhoOAhoSBBwQBBwQBBwQBBwUBiAQBB4QBBwOAhoQBBwOBBwQBBwSBh4MCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgIBggICAgICAgKCgoMDAwQEBIcHBwcGhwQEBAKCgoICAgICAgGBgYICAgICAgICAYICAgICAgICAgKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgGBgYGBgYICAgKCgoODg4WFhgeHh4UFBQMDAwKCgoICAgICAgGBggICAgICAgICAgICAgICAgICAgKCAgKCgoKCgoMDAoKCgoKCgoKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoODg4aGhoeHh4UFBQMDAwICAoICAgGBgYGBgYICAgIBgYICAgICAgICAgICAgKCgoKCgoKCgoICAgICAgICAgICAYICAgICAgGBgYICAgICAgKCgoQEBAcHBwcHBwQDhAMDAwICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAgKCgoKCgoMCgoMDAwKCgoICAgGBgYGBgYGBgYICAgGBgYGBgYGBgYICAgICAgICAgKCgoQEBIWFhYSEhAKCgoGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgMDAoUFBQWFhYQEBAKCgoICAgICAgGBgYGBgYGBgYICAgICAoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYKCgoSEhAWFhYQEBIKCgoICAgICAgICAgGBgYGBgYGBgYICAoKCgoKCgoICAgGBgYIBggKCgoOBBwQBBwOBBoOBBoMAhgOBBoQBBwMAhgKAhgMAhoQBBwOBBwOAhoOBBoQBBwQBBwQBB4QBBwOBBwWCCIQBB4QBBwQBh4QBBwSBB4SBh4OBBwSBh4WCCIUBiASBB4QBBwQBBwSBB4UBiAQBh4SBiAQBB4UCCAUBiAOBBwQBBwSBB4QBBwMAhoOAhoSBB4QBBwQBBwQBBwSBiASBh4QBBwOAhoQBB4QBBwQBBwSBB4MCgoKCgoKCgoICAgICAgICAgICAgICAgICAgIBggGBgYICAgMDAwMDAwQEBAaGhocHBwQEBAKCgoICAoICAgGBgYICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgGBgYGBgYICAgKCgoMDAwYGBgcHBwSEhIMDAwMDAwKCgoICAgGBggICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoODg4WFhYcHBwUFBQMDAwKCgoICAgGBgYGCAgICAgICAgICAgICAgICAgKCAoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgGBgYICAgICAoKCgoQEBAcHBwaGhoODg4KDAoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoMCgoKCgoKCgoICAgGBgYEBAYGBgYICAgGBgYGBgYGBgYICAgICAgMDAwKCgoKCgoKCgoKCgoICAgGBgYGBAQGBgYGBgYGBgYGBgYGBgYGBgYIBggICAoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgQGBgYKCgoKCgoKCgoKCgoMDAwMDAwICAgGBgYGBgYGBgYGBgYICAgICgoIBggGBgYGBgYGBgYGBgYGBgYGBgYGBAQGBgYICAgKCgoKCgoKCgoKCgoMDAwICAgICAgGBgYGBgYGBgYICAgKCgoKCgoICAgGBgYGBgYKCAoQBh4OBBwOBBoQBBoMAhgOBBwQBBwMAhgMAhoOBBoQBBwOBBwMAhoQBBwQBB4QBBwQBB4QBBwQBBwUCCAQBB4OBBwQBh4QBBwSBh4SBh4OBBwSBh4YCCISBiASBh4QBB4QBBwSBB4SBh4QBB4SBh4QBB4UBiAUBiAQBB4QBB4SBh4QBB4MAhoOBBoSBh4QBBwQBB4QBBwSBiASBiAQBBwOAhoQBB4QBB4QBBwSBh4KDAoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgKCgoMDAwODg4QEBAaGhoaGhoQEBAKCgoICAgICAgICAgICAgICAgICAgICAgKCggKCgoKCgoKCgoKCgwKCgoKCgoICAgICAgICAgICAgICAgICAgICAYICAgKCgoODg4YGBgcHBwSEhIODg4MDAwKCgoICAgIBggICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKDAwKCgoKCgoICggICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoODg4UFBQcHBwUFBQMDAwICAoICAgICAYICAgICAgICAgICAgKCAgKCAoKCgoKCgoKCgoKCgoKCgoKCggICAgICAgICAgICAgICAgIBgYICAgKCgoQEBAaGhoYGBgODg4KCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKDAoKCgoICggICAgGBgYEBAQEBAQICAgGBgYGBgYEBAQGBgYICAgQEA4SEhIODg4MDAwKCgoICAgICAgGBgYGBgQEBAQEBAQEBAQGBgYGBgYICAgKCgoKCgoICAgGBgYEBgQEBAQEBAQEBAQGBgYGBgYICAgICAgKCgoMDgwQEBASEhIMDAwGBgYGBgYEBAYGBgYGBgYICAgKCgoICAgGBgYGBgYEBAQEBAQEBAQGBgQGBgYICAgICAgKCgoMDAwODg4SEhIQEA4ICAgGBgYEBAQGBgYGBgYICAgKCgoKCgoICAgGBgYGBgYICAgSBh4OBBwOBBoOBBoMAhgOBBwQBB4KAhgOAhoOBBoQBBwOBBwMBBoQBBwSBh4QBBwSBh4QBBwQBBwUBiAQBB4OBBwQBh4QBBwSBiASBiAOBBwUBh4YCiQUBiASBiAQBB4QBB4QBB4SBh4QBB4SBh4QBB4UBiAUBiAQBB4QBB4SBh4SBB4OBBoOBBoSBh4QBB4QBB4QBB4UCCASBh4QBBwOBBoSBB4SBB4QBBwSBh4MCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgKCgoMDAwODg4SEhIaGhoaGhoQEBAKCgoICAgICAgICAgKCAoICAgICAgICAgICAgKCAgKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAYICAgKCgoODg4WFhYcHBwUFBQODg4ODg4KCgoICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoMDAoKCgoKCgoICggICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoODg4UFBQYGBgSEhIKCgoICAgICAgICAgKCAoICAgICAgICAgICggICAgKCgoKCgoKCgoKCgoKCAgICAgICAgICAgICAgKCAoICAgICAgICAgKCgoODg4WFhYWFhYODg4KCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoMCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYICAgMDAwQEBAMDAwKCgoICAgICAgICAgGBgYGBAQEBAQEBAQGBAYGBgYICAgKCgoKCgoICAgGBgYEBAQEBAQEBAQGBgYICAgICAgICAgKCgoKCgoODg4QEBAKCgoIBggGBgYGBgQEBAQGBgYGBgYICAgKCgoICAgGBgYGBAYEBAQEBAQGBAQGBgYICAYICAgICAgKCgoMDAwQEBAMDAwICAgGBgYGBgYEBAQGBgYGBgYICAgICAgKCgoICAgGBgYGBgYICAgQBB4OBBwOBBwOBBoMAhgQBBwSBB4KAhgOAhoOBBoQBBwOBBwOAhoQBBwSBh4QBB4SBiAQBB4QBB4UBiAQBB4OBBwSBh4QBBwUBiASBiAOBBwUBh4YCiQWCCIUBiAQBB4QBB4QBh4SBh4QBB4QBh4QBB4UBiAUBiAQBB4SBB4SBh4SBB4OAhoOBBwSBh4QBB4QBh4QBh4WCCISBh4QBB4OBBoSBh4SBB4QBBwSBB4KCgoKCgoKCgoKCgoKCgoICAgICAgKCggICAgICAgICAgKDAoODg4ODg4SEhIYGBgUFBQODg4KCgoICAgICAgICAgKCAoICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgKCAoICAgICAgICAgKCgoMDAwUFBQaGhoUFBQODg4ODg4MDAwICAgICAgICAgICAgICAgICAgICAgICggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICggICAgICAgICAgICAgICAgKCgoMDAwSEBAUFBQODg4ICgoICAgICAgICAgKCAgICAgICAgICAoICAgICAgKCgoKCgoKCgoKDAoKCgoICAgICAgICAgICAgKCAgICAgICAgICAgICAgMDAwSEhISEhIODg4KCgoICAgICAgICAgICAgICAgKCggICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgMDAwKCgoICAgGBgYGBgYICAgICAgGBgYGBgYGBgYGBgYICAgICgoKCgoICAgGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYICAgMDAwMDAwGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICgoICAgGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYICAgKCgoMDAwICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYIBggICAgKCgoICAgGBgYGBgYICAgQBBwOBBwOBBwOBBwMAhgQBB4SBB4MAhgOBBoOBBoQBB4OBBwOAhoQBBwQBh4QBh4UBiAQBB4SBh4UCCAQBB4QBBwSBB4OBBwUBiASBiAQBBwUCCAaCiQWCCIUBiAQBB4QBB4SBiASBh4QBB4SBh4QBh4UBiAUCCASBiASBiASBiAQBB4MAhoOBBwSBh4QBB4SBh4SBh4WCCIUBiAQBBwQBBwSBh4SBh4QBBwQBBwKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgKCgoODg4ODg4QEBAQEhAQEBAODgwICAgICAgICAgKCgoICgoICAgICAgKCgoICAoKCgoMDAwKCgoKCgoMDAwMDAwICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwQEBAUFBQSEhIODg4ODg4MDAwKCgoICAgICAgICAgKCgoICggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgKCgoMDAwQDhAQEBAMDAwICAgICAgICAgICAgICggICAgICAgKCgoICAoKCgoMDAwKCgoKCgoMDAwKCgoICAoKCgoICAgICAgICAgICAgICAgICAgICAgKCgoODg4QEBAMDA4KCgoICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYIBggICAYICAgGBgYGBgYGBgYGBgYICAgKCgoODg4ODg4ICAgKCgoICAgGBgYEBAYGBgYICAgICAgICAgICAgGBgYICAgICAgKCgoICAgGBgYICAgICAgICAgICAgGBgYEBAYGBggKCgoICAgKCgoODg4MDAwKCgoGBgYGBgYGBgYGBgYGBgYICAgICAgICAgGBgYICAgICAgICAgICAgGBgYEBAYGBgYICAgKCgoICAgODg4ODg4KCgoICAgGBgYGBgYGBgYGBgYICAgICAgICgoICAgGBgYGBgYICAgQBBwOBBwOBBwOBBwMAhgQBB4QBBwOAhoOBBoOBBwQBB4QBBwOBBwQBBwSBh4SBh4UBiASBh4SBiAUCCASBh4QBB4SBB4OBBwUBiAUBiAQBB4UCCAYCiQUCCAUCCAQBBwQBBwSBh4SBh4QBBwSBh4SBh4SBiAWCCIWCCIUBiASBiAQBB4OBBoQBBwSBh4SBh4UBiASBiAWCCIUCCAQBB4QBBwUBiASBh4QBBwQBBwKCgoKCgoKCgoKCgoMDAwKCgoKCgoKCgoKCgoKCgoICAgICAgMCgoMDAwQEBASEhISEhISEhIQEBAMDAwICAoKCgoICAgICAgICAgKCgoMCgwMDAwMDAwKCgoKCgoMDAwMDAwKCgoKCgoICggICAgICAgKCgoICAgICAgKDAoODg4QEBAQEBAQEBAMDAwMDAwKCgoICAgKCAgICAgKCgoKCgoKCgoMDAwMDAwKCgoKCgoKCgoKCgoKCgoKCgoKCgoMDAwKCgoKCgoKCgoKCgoICgoKCAoICAgICAgICAgKDAoODg4ODg4KCgoICAgICAgICAgKCgoKCAoICAgICAgKCgoKCgoMDAwMDAwKCgoKCgoMDAwMDAwMCgwKCgoICAgICAgICAgKCgoKCggICAgICAgICAgMDAwODg4MDAwKCgoICAgICAgICAgICAoKCgoKCgoKCgoKCgoMDAwKCgoKCgoKCgoKCgoKCggICAgICAgICAgICAgGBgYICAYICAgGBgYGBgYGBgYGBgYKCgoYFhYYGBgQEBIKCgoKCgoKCgoGBgYEBAQGBgYGBgYICAYICAYICAYICAgICAgKCAgICAgGCAYICAYICAYGBgYEBAYEBAQICAgKCgoKCgoMDAwSEhIaGhoUFBQICAgGBgYGBgYGBgYGCAYICAYICAgICAgICAgICAYICAYICAYGBgYGBgYEBAQGBgYKCgoKCgoKCgoQEBIYGBgYFhYKCgoGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgIBggGBgYICAgOBBwOBBwQBBwQBBwMAhgSBh4QBBwOBBoOBBwQBBwQBB4QBB4OBBwQBB4SBiASBiAUBiAUBiAUBiAUCCAUBiAQBh4QBB4OBBwUBiAUBiASBB4WCCIYCiQUBiAUCCAQBBwQBBwSBh4SBh4SBBwSBB4SBiAUBiAWCCIaCiQWCCIUBiASBB4OAhoQBBwSBh4SBiAWCCAUCCAWCCIWCCISBh4SBh4UCCAUBiASBB4OBBwKCgoKCgoKCgoKCgoMDAwKCgoKCgoKDAwKCgoKCgoICAgICAgICAgMDAwWFhYUFBQUFBQcHBwYGBgODg4KCgoICAgICAgICAgICAgKCgoMDAwMDAwKCgoKCgoKCgoKCgoMDAwMDAwMDAoKCgoICAgICAgICAgKCgoMDAwUFBQcHBwWFhYUFBQWFhYODg4ICAgICAgICAgKCAgKCgoKCgoKCgoKCgoMDAwMDAwKCgoKCgoKCgoKCgoKCgoKCgoKCgoMDAwKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgKCgoKDAoKCgoICAgKCAoKCgoICAgICAgICAgICAgKCgoMDAwMDAwMDAwKCgoKCgoKCgoMDAwMDAwKCgoICAgICAgICAgICAgKCgoKCAoICAgICAgKCgoKCgoKCAgICAgICAgICAgKCgoKCgoKCgoKDAwKCgoKCgoMDAwKCgoKCgoKCgoKCgoICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQGBgYGBgYODg4aGhoYGBgMDAwKCgoKCgoKCgoGBgYEBAQGBgYGBgYGBgYGBgYICAgICAgICAgICAgGBgYGBgYGBgYEBAYGBgQICAgKCgoKCgoKCgoMDg4YGBgaGhoMDAwGBgYEBAQEBAQEBAQGBgYIBgYICAgICAgICAgGBgYGBgYGBgYGBgYEBAQGBgYKCgoKCgoKCgoMDAwYGBgaGhoODg4GBgYGBgYEBAQEBAQGBgYGBgYICAYICAgICAgICAgICAgGCAYICAgQBBwQBBwQBBwOBBwMAhgSBh4QBBwOBBoQBBwOBBwQBB4QBB4QBBwQBB4SBiAUBiAUBiAWCCAWCCIUCCAUBiAQBh4QBh4QBB4SBiAWCCASBiAWCCIWCCIUBiAUBiAQBB4QBBwSBB4SBB4SBBwSBB4UBiAUBiAWCCIaCiQWCCIUCCASBB4MAhoQBBwSBiASBiAWCCIWCCIWCCIWCCISBiASBh4UCCAUCCASBB4QBBwKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgICAgIBgYKCgoQEBASEhIWFhYUFBQMDAwICAgKCgoKCgoICAgICAgICAgKCgoMDAwMDAwKCgoKCgoKCgoKCgoMDAwMDAwMDAwKCgoICAgICAgICAgICAgKCgoMDAwWFhYYGBgSEhQSEhIODg4ICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICgoKCAoICAgICAgICAgICAgICAgKDAwKCgoKCgoKCAoICAgICAgICAgICAgICAgKCgoMDAwMDAwKCgoKCgoKCgoKCgoMDAwMDAwKCgoICAoICAgICAgICAgICAgICAgKCAoKCgoMDAwKCgoICAgICAgICAgICAgKCAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYMDAwSEhIKCgoICAgICAgICAoICAgGBgYGBgYGBgYGBgYGBgYGBggICAgICAgICAgGBgYGBgYGBgYGBgYICAYICAgICAoICAgICAgMDAwSEhIMDAwGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBggICAgGBggGBgYGBgYGBgYGBgYGBgYICAgICAoICAgICAgKCgoSEhIMDAwGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYICAgICAgGBgYGBgYGBgYQBBwQBBwOBBwOBBwMAhoUBh4SBB4QBBwQBBwOBBwQBB4SBh4QBB4QBB4UBiAUBiAUBiAWCCIYCCIWCCAUCCAQBB4QBB4QBB4SBiAWCCASBiAUBiAWCCIUBiASBh4QBB4QBBwQBB4SBB4QBBwSBh4WCCAUBiAWCCIaCiQYCiIWCCASBh4OBBwQBh4SBiAUBiAWCCIWCCIWCCIWCCIUBiAUBiAWCCIWCCISBB4QBB4KCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgGBgYICAgMDAwQEBAODg4KCgoKCgoMDAwMDAwKCgwICAgGBgYICAgKCgoMDAwMDAwKCgoKCgoKCgoKCgoMDAwMDAwMDAwKCgoGBgYICAgKCgoKDAwKCgoKCAoKCgoQEBASEhIQEBAKCgoIBggICAgICAgICAgKCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgKCgoKCgoICggICAgKCgoKCgoICAgICAgGBggKCgoMDAwMDAwMDAwKCgoKCgoKCgoMDAwMDAwKCgoICAgGBgYICAgKCgoKCgoICgoICAgKCgoKCgoICAgICAgICAgICAgICAgICAgICggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYEBAQGBgYGBgYEBAQEBAQEBAQGBgYGBgYICAgMDAwQEBAKCgoICAgIBggICAYIBgYIBgYGBgYGBgYGBgYIBgYICAgICAgKCAoICAgGBgYGBgYGBgYGBgYIBgYICAYIBgYICAgICAgMDAwQEBAKCgoICAgGBgYEBAQEBAQEBAQEBAQGBgYGBgYICAgICAgIBgYGBgYGBgYGBgYIBgYIBgYICAYIBggICAgKCgoQEBAMDAwICAgGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBgYIBgYICAgGBgYGBgYGBgYQBBwQBB4QBBwQBBwMAhoSBh4SBB4QBBwQBBwQBBwQBh4SBiASBh4SBh4UCCAUCCAWCCIWCCIWCiIWCCAUCCAQBB4QBB4QBB4UBiAWCCIUBiAUCCAWCCASBiASBB4QBBwQBBwSBB4SBB4QBB4UBh4WCCAWCCAWCCIaDCYYCiQWCCASBh4OBBwSBh4UBiAUCCAWCCIWCCIWCCIWCCIWCCAUBiAWCCIWCCISBB4SBh4KCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICggICAgICAgICAgIBgYGBgYICAgKCgoKDAoODg4SEhIQEBAMDAwKCgoICAgGBgYICAgKCgoMDAwMDAwMDAwKCgoKCgoKCgoMDAwMDAwMDAwICAgGBgYICAgKCgoMDAwODg4QEBAMDAwKCgoKCgoKCAgGBgYIBgYICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgKCgoMDg4ODg4MDAwKCgoICAgGBgYGBgYICAoMDAwMDAwMDAwKCgoKCgoMDAwMDAwMDAwKCgoICAgGBgYICAgKCgoMDAwODg4ODg4MDAwKCAgICAgICAgICAgICAgICAgICAgICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoEBAQEBAQEBAQCBAQCAgICAgIEAgICAgICAgICAgICAgICAgIEBAQEBAQICAgKCgoGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYKCgoGBgYEBAQEBAQCAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYKCgoICAgEBAQEBAQCAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQCBAQEBAQUBh4SBh4QBB4SBB4OAhoSBh4SBh4QBBwQBBwQBBwSBh4UBiASBiASBiAYCCIWCCAWCCIYCCIYCCIWCCIUCCIQBB4SBh4QBB4UBiAYCiQWCCIWCCIWCCASBh4SBB4QBB4QBB4SBh4SBh4QBB4SBh4WCCIWCCIWCCIaDCYaCiQWCCISBh4QBBwUBiAUBiAWCCIYCCIUCCIWCCIWCCIWCCIWCCAWCCIWCiISBh4UCCAKCgoKCgoKCgoKCgoKCgoKCAgKCggKCggICAgICAgICAgGBgYGBgYGBgYICAgODg4UFBQaGhoWFhYODg4KCgoKCgoICAgGBgYICAgKCgoMDAwODg4MDAwKCgoKCgoMDAwODgwMDAwMDAwICAgGBgYGBgYICAgKCgoMDA4UFBQYGBgSEhIMDAwKCgoGCAYGBgYGBgYICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgKCgoICAgICAgICAgIBggGBgYGBgYIBggICAgMDAwUFBQUFBQODg4MDAwKCgoICAgGBgYGBgYKCgoMDAwODg4MDAwKCgoKCgoMDAwODg4MDAwKCgoICAgGBgYICAgKCgoKCgoMDgwSEhIWFhYODg4ICAgIBggIBgYGBgYGBgYICAgICAgICAgKCggKCggKCAgKCgoKCgoKCgoKCgoKCgoEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgKCgoGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYICAgKCgoGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYKCgoICAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQWCCIUBh4UBiASBh4OBBoUBiASBiAQBB4QBB4QBBwSBh4UBiAUBiAUBiAaCiQUCCIYCCIYCiIWCCIWCCIUCCAQBBwSBh4QBB4UCCAcDCYWCCIWCCIUCCASBh4QBB4SBh4UCCAUBiASBh4SBB4SBiAWCCIYCiIWCCIaDCQaDCYWCCISBiASBh4UCCAWCCAWCCIYCCIUBiAWCCIWCCAWCCIYCiIWCiIYCiQUBiAWCCIKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgGBgYGBgYGBgYICAgICAgKCgoSEhIYGBgQEBAKCgoKCgoMDAwKCgoICAgGBgYICAgKCgoMDAwODgwMDAwKCgoKCgoMDAwODg4MDAwKCgoICAgGBgYIBggICAgMCgoMDAwMDAwUFBQaGhoWFhQKCgoICAgICAgGBgYGBgYGBgYICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgGCAgGBgYGBgYGBgYGBgYICAgKCgoSEhISEhIMDAwKCgoMDAwKCgoICAgIBggICAgICAgMDAwODAwODgwMDAwKCgoMDAwODgwMDAwKCgoICAgGBgYICAgKCgoKDAwKCgoMDAwQEBAUFBQMDAwICAgGCAYGBgYGBgYGBgYGBgYICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAAIAAAACAgICAgIAAAAAAAAAAAAAAAACAgICBAQICAoODg4GBgYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCBAQCAgIAAAAAAAAAAAAAAAACAgICAgIEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBgYODg4ICAoCBAQCAgIAAAAAAAAAAAAAAAACAgICAgICAgICAgICAgICAgICAgICAgIYCiQUBh4WCCISBh4OBBwWCCAUBiAQBB4SBB4QBB4UBiAUCCAWCCIWCCIaCiQWCCIYCiQWCCIWCCIWCCIUBiAQBBwUBiASBh4WCCIcDCYYCiQWCCIUBiAQBB4QBB4SBh4WCCIYCCIUBiASBiAUBiAWCCIYCCIUCCIcDCYcDCYWCCIUBiASBiAWCCIWCCIWCCIYCiQWCCAWCCIWCCIWCCIYCiQYCiQaCiYUBiAYCiIKCgoKCgoKCgoKCgoKCgoKCgoICgoICAgICAgGBgYGBgYIBgYGBgYICAgKCgoMDAwMDAwMDAwMDAwODg4MDAwKCgoICAgGBgYICAgKCgoKCgoMDAwODA4MDAwKCgoMDAwODg4MDAwKCgoICAgGBgYIBggKCAoKCgoMDAwKCgoMDAwODg4ODg4MDAwICAgGBgYICAYGBgYGBgYICAYICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgMDAoMDAwMDAwMDAwODg4ODg4KCgoICAgGBgYICAgICAgKCgoMDAwODg4MDAwMDAwODA4MDAwKCgoKCgoICAgGBgYICAgKCgoMDAwODg4MDAwMDAwMDAwMDAwKCgoGCAYGBgYGBgYGBgYGBgYICAgICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoEBAQEBAQCAgICAgICAgICAgICAgICAgICAgAAAAACAgACAgICAgIEBAQKCgoODhAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgQCAgICAgIAAgAAAAACAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODhAKCgoEBAQCAgICAgICAgAAAAACAgACAgICAgICAgICAgICAgICAgICAgICAgIYCCISBh4WCCIUBiAQBBwWCCIUCCASBiASBh4QBB4UBiAUCCIWCCIUCCAaDCQWCCIYCCQWCCIWBiAUBiASBh4QBBwUBiAUBiAYCCIcDCYYCiQWCCISBiASBh4SBh4UCCAWCCIYCiQUCCASBh4SBiAWCCIWCCIWCCIcDiYcDCYWCCISBiASBiAWCCIWCCIYCCIYCiQWBiAWCCAUCCAWCCIYCiQYCiQaDCYUBiAWCCIKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgIBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoODg4QEBAUFBQWFhYMDAoICAgGBgYGBgYGCAYICAgKCgoMDAwMDAwMDAwMDAwMDAwMDAwKDAwKCgoICAgGBgYGBgYICAgKCgoUFBIUFBQQEBAODg4KCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYICAgKCgoKCgoODg4QEBASEhIWFhYODg4ICAgGBgYGBgYGBgYICAgKCgoMDAwMDAwMDAwMDAwMDAwMDAwKCgoICAgGCAYGBgYGBgYICAgMDAoWFhYUFBQQEBAODg4KCgoKCgoKCgoICAgGBgYGBgYGBgYIBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAgICAAICAgICAgICAgACAAACAgICAgICAgICAgIKCgoQEBAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQKCgoODg4GBgYCAgICAgICAgIAAgACAAACAgICAgICAgIEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQEBAKCgoCAgICAgICAgICAgICAAACAgACAgICAgICAgICAgICAgICAgICAgICAgIUCCISBh4UCCIWCCISBh4YCCIWCCISBiASBh4SBB4UBiAWCCIWCCIUBiAaDCYYCCIYCCQYCCIUBiAUBiASBh4QBBwUBiAUBiAWCCIeDiYYCiQWCCISBiASBh4SBh4WCCIYCCIYCiQWCCISBh4SBiAUBiAWCCIUCCAcDCYaDCYWCCIUBiASBiAUCCIWCiIYCCIYCiIUCCAUBiAUBiAWCCIaCiQaDCQYCiYUBiAWCCIKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgGBgYGBgQICAgKCAgKCgoMDAwMDAwODg4SEhISEhIKCgoGBgYGBgYEBgYGBgYICAgICAgKCgoMDAwMDAwMDAwMDAwMDAwMDAwKCgoKCgoICAgGBgYGBgYGBgYGBggMDAwUFBQUFBQODg4ODg4KCgoKCgoKCgoICAgGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYICAgICggKCgoMDAwMDAwSEhIUEhQMDAwGBgYGBgYEBAQGBgYGBggICAgKCgoKCgoMDAwMDAwMDAwMDAwMDAwKCgoICAgICAgGBgYEBgYGBgYGBgYKCgoSEhISEhIODg4MDAwKCgoKCgoKCAgICAgGBgQGBgYICAgKCAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAgICAAACAgICAgIAAgAAAAACAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgACAgICAgIEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgICAgAAAAAAAgACAgICAgICAgICAgICAgICAgICAgICAgIUBiASBB4UCCAWCCIUBiAWCCIWCCIUBiAUBiASBiAUBiAUCCAWCCAUBiAaDCYYCiQaCiQWCCIUBiAUBiAQBBwQBBwWCCIUCCAWCCIcDigaDCQYCiQSBh4SBh4UCCAWCCIWCCIYCiQUCCISBh4UBiASBiAWCCAUCCAaDCYaCiQWCCIUBiASBiAUCCAWCiIWCCAWCCIUCCASBiASBiAWCCIaCiQaDCYYDCYUBiAUCCAKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYICAgKCgoICAgICAgKCgoMDAwODg4ODg4ICAgGBgYICAgGBgYICAgICAgICAgICAgKCgoKCgoMDAwMDAwMCgwMDAwMDAwKCgoKCAgICAgICAgGBgYGBgYGBgYGBgYICAgQEBAQEBAMDAwKCgoKCgoICAgKCgoICAgGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYKCgoICgoICAgKCgoKCgoODg4QEBAKCgoGBgYICAgGBgYGBgYICAgICAgICAgKCggKCgoMDAwMDAwMDAwMDAwKCgoKCgoICAgICAgICAgICAgGBgYICAgGBgYICAgODg4ODg4MDAwICAgICAgICAgKCgoICAgGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAgICAAICAgICAgIAAgIAAAACAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICBAIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgICAgAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIUBiAQBBwUBiAYCiQUBiAYCCQWCCIWCCISBiAUBiAUBiAUBiAWCCIUCCAcDCYYCiQYCiQWCCASBiAUBiAOBBwQBBwWCCIUCCIWCCIeDigaDCYYCiQSBh4SBiAYCCIYCiIWCCIWCCIUCCIQBh4UBiASBiAWCCIYCCIaCiQYCiQWCCIUBiASBiAUCCAWCCIWCCIWCCIUCCASBiASBiAWCCIaDCYcDCYaDCYSBh4UBiAKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgKCgoKCgoICAgICAgKCgoMDAwMDAwKCgoKCgoKCgoICAgICAgKCgoKCgoICAgICgoKCgoKCgoKDAwKDAwKDAwMDAwMCgwKCgoKCgoICAgKCgoKCgoICAgICAgKCAgICAgICAgMDAwMDAwKCgoICAgICAgKCgoKCgoICAgGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAYKCgoKCgoICAgICAgICAgMDAwMDAwMDAwKCgoKCgoICAgICAgKCgoKCgoKCgoICggKCgoKCgoMDAwKDAwKDAwKDAwKCgoKCgoICgoICAgKCgoKCgoICAgICAgKCgoKCgoKCgoMDAwMDAwICAgICAgICAgKCgoKCgoICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAgICAgACAgICAgIAAgIAAAAAAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgIAAgAAAAACAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgIAAgAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgISBh4QBBwUBiAYCCIUBiAYCCIWCCAWCCASBiAUBiAUBiIUBiAWCCIUBiAcDCYaCiQYCiQUBiASBh4UBiAOBBwQBBwWCCIWCCIUCCIeDigcDCYYCiQUBiASBiAaCiQYCCIWCCAWCCIUCCAQBh4UBiASBiAWCCIYCCQYCCIWCCIWBiASBiASBiAUCCAWCCIWCCIWCCIUCCISBh4SBh4UBiAaCiQcDCYaDCYSBh4UBiAKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgKCAoKCggGBgYGBgYICAgMDAwMDAwWFhYWFhYODg4ICAgICAgICAgICAgICAgICAgICAgKCgoKCgoMDAwKDAoKDAoMDAwMDAwKCgoKCgoICAgICAgICAgKCgoICAgICAgMDAwQEBAUFBQMDAwMDAwICAgGBgYGBgYKCgoKCgoICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgKCgoICAgGBgYICAgMDAwMDAwUFBQYGBgQEBAKCggICAgICAgICAgICAgICAgICAgKCgoKCgoMDAwKDAwKDAoMDAwKCgoKCgoICAgICAgICAgICAgICAgICAgICAgODg4WFhYWFhYMDAwMDAwICAgGBgYGBgYKCggKCAoICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoEBAQEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIKCgoQEBAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICBAQEBAQEBAQEBAQEBAQCBAICAgICAgICAgICAgICAgICAgICBAQEBAQICAgQEBAIBgYCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQEBAKCgoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISBh4QBBwSBh4WCCIUBiAWCCIUBiAWCCASBiAUCCAWCCIUCCAWCCIUBiAcDigaDCYYCiQSBiASBh4UBiAQBBwQBBwWCCIUCCAUBiAeDigcDCYWCCISBh4SBiAYCCQWCCIUBiAWCCISBiAQBh4UBiASBiAWCCIYCCIWCCIUCCIUBiASBiASBh4SBiAWCCIWCCIWCCIUBiASBh4SBh4SBiAaCiQcDigaDCYSBh4UBiAKCgoKCgoKCgoKCgoKCgoKCgoKDAoMDAwICAgICAgGBgYGBgYICAgMDAwODg4YGBgcHBwYGBoKCgoGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoMDAoKCgoKCgoMCgwMDAoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYICAgYGBgcHBwWFhYODg4MDAwICAgGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoMDAwKCgoICAgICAgGBgYGBgYMDAwODg4UFBQaGhocHB4QEBAGBgYGBgYGBgYGBgYICAoKCgoKCgoKCgoKCgoMDAoKCgoKCgoMDAoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYKCgoYGBocHBwWFhYODg4MDAwICAgGBgYGBgYICAgICAgMDAwKDAoKCgoKCgoKCgoKCgoKCgoKCgoEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIKCgoQEBAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgIEBAQEBAQKCgoQEBAGBgYCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQEBAKCgoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISBB4QBBwSBh4WCCISBiAUBiAUBiAUCCASBiAUBiAWCCIWCCIWCCISBiAaDCYYCiQYCiISBh4QBB4UBiAQBBwQBBwWCCISBiAUBiAcDigaDCYWCCISBh4UBiAWCCIWCCISBiAUBiASBB4QBBwUBiASBB4WCCIWCCIUCCAUBiAUBiASBB4QBB4UBiAYCCIWCCIUBiAUBiASBh4SBh4SBiAaCiQcDigaDCYSBh4SBh4KCgoKCgoKCgoKCgoKCgoKCgoMDAwKCgoICAgICAgGBgYGCAgMDAwMDAwODg4aGhocHBwODg4GBgYGBgYGBgYGBgYICAgICAgICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggICAgGBgYGBgYGBgYICAgODg4cHBwcHBwQEBAODg4MDAwICAgGBgYICAgICAgKCgoMDAwKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoMCgwMDAwICAgICAgGBgYGBgYKDAwODg4MDAwUFBQeHh4UFBQICAgGBgYGBgYGBgYGBgYICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAoICAgICAgICAgGBgYGBgYGBgYGBgYODg4cHBwaGhoODg4MDAwMDAwGCAgGBgYICAgICAgKCgoMDAwKCgoKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAgICAAACAgICAgIAAgAAAAACAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgACAgICAgIEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgICAgAAAAAAAgACAgICAgICAgICAgICAgICAgICAgICAgIOBBwOBBwSBh4WBiASBh4UBiASBh4UCCASBiAWCCAUCCAWCCIWCCISBh4YCiIYCiQYCCISBBwQBBwSBiAQBBwQBBwWCCIQBh4UBiAaDCQaCiQWCCISBh4UBiAWCCIWCCISBiAUBiASBB4QBBwSBh4QBB4UCCIUBiAUBiAUBiAUBiAQBBwOBBwUBh4WCCIWCCIUBiAUBiASBh4SBh4UBiAYCCIcDCYaCiYSBh4QBB4KCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYKCgoMDAwKCgoODg4WFhYODg4ICAgICAgGBgYEBAQGBgYGBggICAgICAgICAgKCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgGBgYEBAQGBgYGBgYGBgYQEBAYGBgQEBAKDAwMDAwKCgoGBgYGBgYICAgKCggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYICAgKCgoKCgoKCgoUFBQSEhIICAgGBgYGBgYGBgQGBgYGBgYICAgICAgICAgICAgKCgoKDAoKCgoKCgoKCgoKCgoKCAoICAgICAgICAgGBggGBgYEBAQGBgYICAgICAgODg4UFBQMDAwKCgoMDAwKCgoGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAgICAAACAgICAgIAAgIAAAACAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgICAgAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIOBB4OBBwQBBwUBiASBB4SBh4SBh4WCCAUBiAWCCAUBiAWCCIWCCISBh4YCCIYCiIYCiIQBBwQBBwSBh4OBBwQBBwUBiAQBB4UBiAYCiQYCiQWCCISBh4UBiAWCCIWCCISBiASBh4SBB4QBBwSBB4QBB4UBiAUBiAUBiASBiASBh4QBBwOBBoSBh4WCCIUBiASBh4UBiASBB4SBh4UBiAUCCIaCiQYCiQSBh4QBB4KCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYICAgICAgICAgKCgoODg4SEhIODg4KCgoICAgGBgYGBAQGBAQGBgYGBgYICAgICAgKCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgKCgoQEBAQEBAKCgoICAgICAgICAgGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICgoICAgICAYICAgICAgICAgICAgMDAwSEhIQEBAKCgoICAgGBgYGBgYGBAQGBgYGBgYGCAgICAgICAgKCgoKDAoKCgoKCgoKCgoKCgoKCAoICAgICAgGBgYGBgYGBAQGBAQGBgYICAgKCgoODg4SEhIODg4KCgoICAgICAgICAgGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAgICAgACAgICAgIAAgIAAAAAAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgIAAgAAAAACAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgIAAgAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIQBB4OBBwQBBwSBiAQBB4SBiAQBB4UCCAUCCAUCCASBh4WCCIWCCISBh4WCCIYCCIWCCIOBBoQBBwQBB4QBBwQBBwUBiAUBiASBiAYCiQYCiQWCCISBiAUBiAUCCAWBiASBh4SBB4QBB4QBBwQBBwQBBwUBiAUBiAUBiAUBh4SBB4QBBwOAhoSBB4UBiASBiAQBB4SBh4SBh4UBiAUBiAUBiAYCiQYCiQSBh4QBB4KCgoKCgoKCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgGBgYICAgKCgoUFBQaGhoSEhIKCgoICAgGBgYEBAQEBAQGBAYGBgYGCAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYEBAQEBAQGBgYGBgYKCgoODg4WFhYUFBQMDAwICAgGBgYICAgICAgICAgICAgICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAYICAgICAgQEBAaGhoWFhYKCgoICAgGBgYEBAQEBAQEBAQGBgYGCAYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGCAgGBgYGBAYEBAQEBAQGBgYICAgKCgoSEhIaGhoUFBQKCgoICAgGBgYICAgICAgICAgICAgICAgKCAgKCgoKCgoKCgoKCgoKCgoEBAQCBAICAgICAgICAgICAgICAgICAgICAgAAAAACAgACAgICAgICAgIKCgoQEBAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgQEBAQKCgoQEBAGBgYCAgICAgICAgIAAgAAAAACAgICAgICAgIEBAQEAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQEBAKCgoCAgICAgICAgICAgAAAAACAgACAgICAgICAgICAgICAgICAgICAgICAgISBh4OBBwOBBwQBh4SBh4SBh4OBBwUBiAUBiAUCCASBh4WCCIWCCISBh4WCCIUCCIUBiAMAhoOBBwQBB4QBBwQBBwUBiAWCCIUBiAWCCIWCCIWCCISBiAUBiAUBiAUBiASBB4SBB4QBB4QBBwQBBwOBBwSBh4UBiAUBB4SBh4QBB4QBB4OBBwQBBwSBiAQBB4QBBwSBB4SBh4UBiAUBiAUBiAWCCIWCCISBh4SBB4KCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgGBggGBggGBggICAgKCgoYGBgeHh4QEBAICAgGBgYGBgYGBgYEBAQGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGCAYGBgYEBAQGBgYGBgYGBgYICAgMDAwaGhocHBwODg4ICAgICAgGBgYGCAgICAgICAgICAgICAgKCggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgGCAgGBgYGBgYICAgICAgSEhIcHBwWFhYKCgoICAgGBgYGBgYEBAQEBAQGBgYICAgICAgICggKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYEBAQGBgYGBgYGBgYICAgQEBAeHh4YGBgKCgoICAgGBggGBggGBggICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoCBAICAgICAgAAAgAAAgAAAgAAAgAAAgAAAgAAAAAAAgAAAgACAgICBAIKCgoQEBAGCAYCBAICAgICAgAAAgAAAgAAAgAAAgACAgICAgICAgICAgICBAICBAICAgICAgAAAgAAAgAAAgAAAgAAAgACAgIEBAIKCggOEA4GCAYCBAICAgAAAgAAAgAAAAAAAgAAAgACAgACBAICAgICAgICAgIAAgAAAgAAAgAAAgAAAgACAgICBAIGCAYQEBAKCgoCBAICAgIAAgAAAgAAAgAAAgAAAgAAAgAAAgACAgACAgIAAgAAAgAAAgAQBB4OBBwQBBwQBB4SBh4SBh4OBBwSBh4SBiASBh4SBh4UBiAWCCISBh4UCCAUBiAUBiAMAhoQBBwQBB4QBBwQBBwUBiAYCiQUBiAWCCIUBiAWCCISBiAUBiAUBiASBh4QBB4QBB4QBB4QBBwQBBwQBBwSBh4UBiASBh4SBB4QBB4QBB4QBBwQBBwQBB4QBB4QBBwQBB4SBh4SBh4SBh4SBh4UBiAWCCASBh4QBBwKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgIBggGBgYICAgKCAgWFhYeHh4QEBAICAgICAgGBgYGBAYEBAQGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgICAgGBgYEBAQEBAQGBgYGBgYICAgMDAwaGhocHBwMDAwICAgGBgYGBgYICAgICAgICAgICAgICAgICAgKCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAoICAgICAgICAgICAgICAgIBggGBgYICAgICAgQEBAeHh4WFhYICAgICAgGBgYGBgYEBAQEBAQGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYEBAQGBAYGBgYICAgICAgQEBAeHh4WFhYKCAgICAgGBgYIBggICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKBAwKBAwKBAwKBAwKBA4KBAwKBAwKBAwMBA4MBA4MBg4MBhAOCBISDBQYEBoaFBwWEBgQChQOCBAMBhAMBg4MBg4MBA4MBA4KBA4KBAwKBAwKBAwKBA4MBA4MBA4KBA4KBAwMBA4MBg4MBg4MBhAOCBASChQYEBoaEhwYEBoSChQOCBIMBhAMBg4MBA4MBA4KBA4KBAwKBAwKBAwKBAwKBAwKBA4MBA4MBg4MBg4MBg4OCBAQChIUDhYaFBwYEhoUDBYQCBIOBhAMBg4MBg4MBA4KBAwKBAwKBA4MBA4MBA4KBAwKBAwKBAwQBBwQBB4SBh4QBBwSBh4SBh4OBBwSBh4SBh4SBh4SBh4SBh4WCCIQBB4WCCISBiASBh4OAhgQBBwQBBwQAhwQBBwUBiAYCiQQBh4WCCAUBiAUBiASBiASBh4SBh4SBh4QBBwQBBwQBB4QBB4QBBwQBBwSBh4SBiASBh4SBB4QBBwSBB4SBB4QBBwQBB4QBB4OBBwSBB4UBiAUBiASBh4SBh4SBh4WCCAUBh4QBBwKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoWFhYeHh4QEBAICAgICAgGBgYEBAQEBAQGBgQGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBggGBgYEBAQEBAQGBgYGBgYICAgMDAwaGhocHBwODAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICggKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQEBAeHh4UFBQICAgICAgGBgYGBgYGBAQEBAQGBgYICAgKCggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgQEBAQEBAQGBgYICAgICAgQEBAeHh4WFhYKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoiCioiCiokCiwkCi4kCi4kCi4kCi4kCi4kCi4mCjAoDDIqDjQsEDYwFDo0GD42Gj40GD4wFDosEDYoDDImDDAmCjAkCi4kCi4kCiwiCioiCioiCiwkCi4kCi4mCi4kCi4kCi4kCi4mCjAmDDAoDDIsEDYwEjo0Fj42Gj40GD4wFDwsEDYqDjQoDDImCjAmCi4kCi4kCiwiCiwiCioiCioiCiwkCi4kCi4mCjAmDDAoDDIqDjQuEjgyFjw2Gj42GD4yFjwuEjgqDjQoDDImCjAmCi4kCi4kCiwkCi4mCi4kCi4kCiwiCiwiCioQBBwSBh4SBh4QBBwSBB4SBh4QBBwSBh4QBh4SBh4SBh4SBh4UBiAQBBwWCCIUBiAQBB4MAhgQBBwQBBwQAhwQBBwUCCAYCiQOBB4UBiAUBiAUBiASBiAUBh4SBB4SBh4OBBwQBBwQBB4QBB4QBBwQBBwSBh4SBh4SBB4QBBwQBBwSBB4QBB4QBBwQBB4QBB4OBBwSBh4UBiASBiASBh4QBB4SBh4SBh4SBh4QBBwKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgGBggGBgYICAgICAgKCgoWFhYeHh4ODg4ICAgICAgGBgYEBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgIBggGBgYGBAYGBgQGBgYGBgYICAgKCgoaGhoaGhoMDAwICAgICAgGCAgIBggICAgICAgICAgICAgICAgICAgKCAoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgGBggGCAYICAYICAgICAgQEBAeHh4UFBQICAgICAgGBgYGBgYGBgYGBAYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYEBgYGBgYICAgICAgODg4eHh4UFhYKCgoICAgICAgGBgYGBggICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoiCioiCioiCiwkCi4kCi4kCi4kCiwkCi4mCi4mCjAoDDIqDjQsEDgwFDw2GD44Gj40GD4wFDosEDYoDDImDDAmCjAkCi4kCi4kCiwiCioiCioiCiwkCiwkCi4mCi4kCi4kCi4kCi4mCjAmDDAoDDIsEDYwFDo0GD44Gj42Gj4yFDwsEDYqDjQoDDImCjAkCi4kCi4kCiwiCiwiCioiCioiCiwkCiwkCi4mCjAmDDAoDDIqDjQuEjg0Fj44Gj42Gj4yFjwuEjgqDjQoDDImDDAmCi4kCi4kCiwkCi4kCi4kCi4kCiwiCiwiCioQBBwSBh4SBB4QBBwSBB4SBB4QBBwSBB4QBBwQBB4SBh4SBh4SBiAQBh4WCCIUBiASBB4MAhgQBBwSBB4QBB4SBh4UCCAYCiIOBBwQBh4UBh4SBiASBiAUBiASBB4SBB4QBBwQBBwQBh4QBB4QBBwQBBwSBh4SBh4QBB4QBBwQBBwQBh4QBB4QBBwQBB4QBB4OBBwSBB4UBiASBiASBB4QBB4SBB4SBh4QBB4QBBwKCgoKCgoICAgICAgICAgICAgICAgICAgICAgIBggIBggICAgICAgICAgUFBQeHh4ODg4ICAgICAgGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgIBggGBgYGBgYGBgYGBgYGBgYICAgKCgoaGhoaGhoMDAwICAgICAgGBgYIBggICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoICggICAgICAgICAgICAgICAgICAgICAgICAYIBgYICAgICAgQDg4eHh4UFBQICAgICAgGBgYGBgYGBgYGBgYGBgYICAgKCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgODg4eHh4UFBQICAgICAgICAgIBggIBggICAgICAgICAgICAgICAgICAgICAgKCgoKCgogCCoiCioiCiwkCiwkCi4kCi4iCiwkCiwkCi4mCi4mDDAoDjIsEDYwFDo0GD42Gj40GD4wFDoqEDQoDDImCjAkCi4kCi4kCiwiCiwgCiogCioiCioiCiwkCiwkCi4kCiwiCiwkCi4kCi4mCjAoDDIqEDQwFDo0GDw2Gj42Gj4wFDosEDYoDjImDDAmCi4kCi4kCiwiCiwiCiogCCogCioiCioiCiwkCi4kCi4mCjAoDDIqDjQuEjgyFjw2Gj42Gj4yFjwuEjgqDjQmDDAmCjAkCi4kCiwiCiwkCiwkCi4kCiwiCiwiCiogCCoOBBoSBh4QBB4QBBwSBB4QBB4SBh4SBB4QBBwQBB4SBh4SBh4SBiASBiAWCCIUBiASBh4MBBoQBBwQBB4SBiAUBiAUBiAWCCAQBBwQBB4QBh4UBiASBiASBh4QBh4QBB4QBB4QBBwQBB4QBBwQBBwQBBwSBh4SBh4QBB4OBBwQBB4QBB4QBB4QBBwQBBwQBB4OAhoQBBwSBiASBiAQBB4QBBwSBB4QBB4QBB4QBBwKCgoKCAoICAoICAgICAgICAgICAgICAgICAgICAgIBgYICAgICAgKCgoUFBQeHh4ODg4ICAgICAgGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgIBggGBgYGBgYGBgYGBgYGBgYICAgKCgoaGhoaGhoMDAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKCAoKCgoKCgoKCgoKCAoICAgICAgICAgICAgICAgICAgICAgGBggICAgICAgICAgQEBAcHBwUFBQICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgODg4eHh4UFBQKCgoICAgICAgIBgYICAgICAgICAgICAgICAgICAgICAgICAoKCAoKCgoKBAwKBAwKBAwKBAwKBA4KBAwKBAwKBAwMBA4MBA4MBg4MBhAOCBISDBQYEBoaFBwWEBgQChQOCBAMBhAMBg4MBg4MBA4MBA4KBA4KBAwKBAwKBAwKBA4MBA4MBA4KBA4KBAwMBA4MBg4MBg4MBhAOCBASChQYEBoaEhwYEBoSChQOCBIMBhAMBg4MBA4MBA4KBA4KBAwKBAwKBAwKBAwKBAwKBA4MBA4MBg4MBg4MBg4OCBAQChIUDhYaFBwYEhoUDBYQCBIOBhAMBg4MBg4MBA4KBAwKBAwKBA4MBA4MBA4KBAwKBAwKBAwMBBoQBh4QBB4QBBwQBB4QBB4SBh4SBh4OBBwSBh4SBh4SBh4SBiASBh4WCCIUBiASBh4OBBwQBBwQBB4SBh4UBiAUBiAUCCAOBBwOBBwQBBwSBh4SBiAQBB4QBB4QBB4QBB4QBB4QBB4QBB4QBBwQBB4SBh4SBh4SBB4OBBwQBB4SBB4QBBwQBBwQBBwQBB4OAhoQBBwSBiAUBiAQBB4QBBwSBB4QBB4QBBwQBBwKCgoKCgoKCAoICAgICAgICAgICAgICAgICAgICAgGBggGBggGBgYKCgoUFBQcHBwQEBAICAgICAgGBgYGBgYGBgYGBgYGBgYICAgKCAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYICAgICAgMDAwaGhoYGBgODg4ICAgGCAgICAgIBggICAgICAgICAgICAgICAgICAgICAoICAoKCgoKCgoKCgoICAoICAgICAgICAgICAgICAgICAgICAgGBgYGBgYGBgYICAgQEBAaGhoUFBQICAgICAgICAgGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgQEBAcHBwSEhIKCgoGBgYGBggGBggICAgICAgICAgICAgICAgICAgICAgKCAoKCgoKCgoCBAICAgICAgAAAgAAAgAAAgAAAgAAAgAAAgAAAAAAAgAAAgACAgICBAIKCgoQEBAGCAYCBAICAgICAgAAAgAAAgAAAgAAAgACAgICAgICAgICAgICBAICBAICAgICAgAAAgAAAgAAAgAAAgAAAgACAgIEBAIKCggOEA4GCAYCBAICAgAAAgAAAgAAAAAAAgAAAgACAgACBAICAgICAgICAgIAAgAAAgAAAgAAAgAAAgACAgICBAIGCAYQEBAKCgoCBAICAgIAAgAAAgAAAgAAAgAAAgAAAgAAAgACAgACAgIAAgAAAgAAAgAKAhoQBB4QBB4QBB4SBB4QBB4SBiASBh4QBBwUBiASBB4SBB4SBiASBh4UCCASBiAQBB4QBBwQBB4SBh4SBh4SBiAUBiAUBiAOBBwOBBwOBBoQBB4QBh4QBB4QBB4QBB4SBh4SBh4QBB4QBB4OBBwQBBwSBh4SBh4SBB4OBBwSBB4SBB4QBBwQBBwQBB4QBB4OAhoQBBwSBiAUBiAQBB4QBBwSBB4QBB4QBBwQBBwKCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCgoSEhIYGhgQEBAICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBggGBgYGBgYGBgYGBgYICAgICAgMDAwYGBgWFhYMDAwICAgGBgYGBggICAgICAgICAgICAgICAgICAgICAgICgoKCgoKCgoKCgoKCgoKCgoKCggICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoODg4YGBgUFBQKCgoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgQEBAYGBgQEBIMDAoICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAgKCgoKCgoKCgoEBAQCBAICAgICAgICAgICAgICAgICAgICAgAAAAACAgACAgICAgICAgIKCgoQEBAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgQEBAQKCgoQEBAGBgYCAgICAgICAgIAAgAAAAACAgICAgICAgIEBAQEAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQEBAKCgoCAgICAgICAgICAgAAAAACAgACAgICAgICAgICAgICAgICAgICAgICAgIQBh4QBh4QBB4QBB4SBB4QBB4SBh4SBBwQBBwUBiAQBB4SBB4SBiASBiAUBiASBh4QBB4QBBwSBB4SBh4SBh4SBh4SBh4SBh4OBBwQBB4OAhwSBiAQBB4QBB4QBB4QBB4SBh4SBh4QBBwQBBwQBBwQBBwSBh4SBh4SBB4QBBwQBB4QBB4QBB4QBBwQBB4QBB4OBBwQBB4SBiAUBiASBiASBh4SBh4SBh4SBB4SBB4KCgoKCgoKCgoKCggICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoSEhIYGBgQEBAICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgGBgYGBgYGBgYGBgYGBgYGBggICAgMDAwWFhYUFBQMDAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICgoICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoODg4WFhYUFBQKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgQEBAYGBgQEBAKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgKCggKCgoKCgoKCgoEBAQCBAICAgICAgICAgICAgICAgICAgICAgACAAACAgICAgICAgICAgIKCgoQEBAGCAYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgQEBAQKCgoQEBAGBgYCAgICAgICAgIAAgACAAACAgICAgICAgIEBAQEAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGCAYQEBAKCgoCAgICAgICAgICAgICAAACAgACAgICAgICAgICAgICAgICAgICAgICAgISBh4QBBwQBB4SBh4QBB4QBB4QBBwSBB4QBB4SBh4QBB4SBB4SBh4SBiAUBiAQBB4QBB4OBBwSBB4SBh4SBiAQBh4QBB4SBh4OBBwSBB4QBBwWCCISBB4QBB4SBB4QBB4SBh4SBh4QBBwQBB4QBBwQBBwSBB4SBiASBB4QBB4QBB4QBB4SBB4QBBwQBB4QBB4OBBwQBB4SBiASBiASBh4SBh4SBh4SBh4SBh4QBBwKCgoKCgoKCgoKCgoICggICAgICAgICAgICAgICAgICAgICAgICAgKCgoQEBAYGBgQEBAICgoICAgIBggGBgYGBgYGBgYGBgYIBggICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgODg4WFhYSFBQMDAwICAgICAgICAgICAgICAgICAgICAgICAgICAgKCggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4WFhYUFBQKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoQEBAWFhYQEBAKCgoICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoEBAQCBAICAgICAgICAgICAgICAgICAgICAgACAAACAgICAgICAgICAgIKCgoQEBAGCAYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQKCgoQEBAGBgYCAgICAgICAgIAAgACAAACAgICAgICAgIEBAQEAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGCAYQEBAKCgoCAgICAgICAgICAgICAAACAgACAgICAgICAgICAgICAgICAgICAgICAgISBh4OBBwSBBwSBh4QBBwQBB4QBB4SBB4QBBwQBB4QBBwSBB4SBh4SBiAUBiAQBBwQBB4OAhoSBB4QBB4SBiAQBBwQBBwSBB4QBBwSBB4QBBwUBiAQBB4QBB4SBh4SBB4SBB4SBiAQBBwQBh4QBBwQBBwSBB4SBh4SBB4QBB4QBBwQBB4SBB4QBBwQBBwQBB4OBBwQBBwSBiAUBiASBB4SBh4SBh4SBh4SBh4QBBwKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICAgICgoQEBAWFhYQEBAKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYICAgICAgICAgODAwWFhYUFBQMDAwICAgICAgICAgICAgICAgICAgICAgICAgKCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAoKCAgICAgICAgICAgICAgICAgICAgICAgODg4WFhYUFBQKCgoICAgICAgICAYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoICgoICAgGBgYGBgYGBgYGBgYGBgYICAgICAgICAgQEBAWFhYQEBAICgoICAgICAgICAgICAgICAgICAgICAgKCAoKCgoKCgoKCgoKCgoKCgoEBAQCBAICAgICAgICAgICAgICAgICAgICAgACAAACAgICAgICAgICAgIKCgoQEBAGCAYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQKCgoQDhAGBgYCAgICAgICAgIAAgACAAACAgICAgICAgIEBAQEAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGCAYQEBAKCgoCAgICAgICAgICAgICAAACAgACAgICAgICAgICAgICAgICAgICAgICAgIQBBwQBBwQBBwQBB4QBBwQBB4SBh4SBh4QBBwQBB4QBBwSBB4QBB4SBiAUCCAQBB4QBB4OBBoQBB4QBBwSBiAQBBwQBBwQBB4QBB4QBB4QBBwSBh4QBB4SBh4SBh4SBB4SBh4SBiAOBBwSBh4QBBwQBBwSBh4SBh4QBB4QBBwQBBwQBB4QBBwQBBwQBBwQBB4QBBwSBB4SBiAUBiASBB4SBB4SBh4SBh4SBh4QBBwKCgoKCgoKCgoKCgoKCgoKCAgKCAgICAgICAgICAgICAgICAgICAgICAgOEA4WFhYQEBAICAgICAgGCAYGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgODgwWFhYSEhIKCgoICAgICAgICAgICAgICAgICAgKCAgKCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAoKCAgICAgICAgICAgICAgICAgICAgMDAwUFBQUFBQKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgIBggGBgYGBgYGBgYGBgYGBgYICAgICAgQEBAUFhQODg4KCgoICAgICAgICAgICAgICAgICAgKCAgKCAoKCgoKCgoKCgoKCgoKCgoEBAQCBAICAgICAgICAgICAgICAgICAgICAgACAAACAgICAgICAgICAgIKCgoQEBAGCAYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQKCgoQDhAGBgYCAgICAgICAgIAAgACAAACAgICAgICAgIEBAQEAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGCAYQEBAKCgoCAgICAgICAgICAgICAAACAgACAgICAgICAgICAgICAgICAgICAgICAgIQBBwQBBwQBBwQBB4QBBwQBB4SBh4UBh4QBBwQBBwQBBwQBB4QBB4SBh4UBiASBB4QBBwOBBoQBB4QBBwSBB4QBBwQBB4QBBwQBB4QBB4SBB4SBh4QBB4SBh4SBB4SBB4QBB4SBB4OBBwQBBwQBBwQBBwSBh4SBh4QBBwQBBwQBBwQBB4OBBwQBBwQBBwQBBwOAhwQBBwUBiAUBiASBh4QBB4SBh4SBB4SBB4QBBwKCgoKCgoKCgoKCgoKCgoKCAoICAoICAgICAgICAgICAgICAgICAgKCgoODg4UFBQQEBAICAgICAgGBgYGBgYGBgYGBgYGBgYIBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAgICAgODAwUFBQQEBAKCgoICAgICAgICAgICAgICAgICAgICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICgoICAoICAgICAgICAgICAgICAgICAgICAgMDAwSEhISEhIKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgIBgYGBgYGBgYGBgYGBgYGBgYICAgICAgQEBAUFBQMDAwKCgoICAgICAgICAgICAgICAgICAgICAoICAoKCgoKCgoKCgoKCgoKCgoEBAQCBAICAgICAgICAgICAAICAgICAgICAgACAAACAgICAgICAgICAgIKCgoQEBAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQKCgoODhAGBgYCAgICAgICAgIAAgACAAACAgICAgICAgIEBAQEAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQEBAKCgoCAgICAgICAgICAgICAAACAgACAgICAgICAgICAgICAgICAgICAgICAgIOBBoOBBwQBB4QBB4QBBwQBBwSBh4UBiAQBB4QBBwQBBwSBB4SBh4SBh4SBh4QBBwQBBwOBBwQBB4QBBwQBBwQBBwQBB4QBBwQBBwQBB4SBB4SBB4QBB4QBB4QBBwQBB4QBBwQBBwOBBwQBBwQBBwQBB4QBBwQBB4QBB4QBBwQBBwQBB4QBBwQBBwQBBwQBBwOAhoQBBwUBiASBiAQBB4QBBwSBB4QBB4QBB4QBBwKCgoKCgoKCgoKCgoKCgoICgoICgoICAgICAgICAgICAgICAgICAgKCAoMDAwUFBQQEBAICAgIBgYGBgYGBgYGBgYGBgYGBgYIBgYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYICAgMDAwUFBQODg4KCgoICAgICAgICAgICAgICAgICAgICgoICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICgoKCggICggICAgICAgICAgICAgICAgICAgMDAwQEBASEhIKCgoIBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgGBggGBgYGBgYGBgYGBgYGBgYGBgYICAgQEBASEhIMDAwKCgoICAgICAgICAgICAgICAgICAgKCgoICggKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAgICAAICAgICAgICAgACAAACAgICAgICAgICAgIKCgoQEBAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQKCgoODg4GBgYCAgICAgICAgIAAgACAAACAgICAgICAgIEBAQEAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQEBAKCgoCAgICAgICAgICAgICAAACAgACAgICAgICAgICAgICAgICAgICAgICAgIMAhgQBBwQBB4QBB4QBBwQBBwSBh4SBiAQBB4QBh4QBB4SBB4SBh4SBh4SBh4QBBwOAhwOBBwQBBwQBBwQBBwQBBwQBB4QBBwQBBwSBh4QBB4SBB4QBBwQBBwQBBwQBBwQBB4QBBwOBBwQBBwQBBwQBB4QBBwQBB4QBBwQBBwQBB4QBBwOAhwOBBoQBBwQBBwOAhoQBBwUBiAUBiAQBB4QBBwSBBwQBBwQBBwQBBwKCgoKCgoKCgoKCgoKCgoKCggKCgoKCAgICAgICAgICAgICAgICAgKCAoMDAwSEhIODg4ICAgICAgIBgYGBgYGBgYGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYGBgYICAYICAgMDAwSEhIODg4KCgoICAgICAgICAgICAgICAgKCAgKCggKCgoKCggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggKCgoKCAgICAgICAgICAgICAgICAgICAgKDAoQEBASEhIKCgoICAgICAgGBgYGBgYGBgYGBgYGCAgICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYGBgYIBgYICAgKCAgODg4SEBAMDAwKCAgICAgICAgICAgICAgICAgKCAgKCgoKCggKCgoKCgoKCgoKCgoKCgoEBAQCAgICAgICAgICAgICAAICAgICAgICAgACAAACAgICAgICAgICAgIKCAoQEBAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICggODg4GBgYCAgICAgICAgICAgAAAAAAAgICAgICAgIEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQEBAKCAoCAgICAgICAgICAgICAAACAgACAgICAgICAgICAgICAgICAgICAgICAgIOBBwOBBwOBBwOBBwOBBwOBBwOBBwOBBwQBBwSBB4SBB4SBh4UBiAUBiASBh4OBBwOBBoOBBoOAhoKAhgKAhgKAhgMAhgKAhgOAhoOBBoOBBoOBBwSBh4WCCIYCCIQBBwQBBwOBBwOBBwQBBwQBBwQBB4QBBwSBh4QBBwOBBwSBh4OBBwMAhoOBBwQBBwQBBwOAhoOBBwSBh4SBh4QBBwQBBwQBBwOBBwQBBwQBBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQCAgICAgICAgICAgICAAICAgICAgIAAgAAAAACAgICAgICAgICAgIKCAoQDhAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgACAgICAgIEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQDhAKCAoCAgICAgICAgICAgIAAAAAAgACAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAASBBwSBh4UBiAUCCAUBiASBh4SBh4WBiAYCCIWCCIWCCAWCCIWCCIWCiIYCiQaCiQcDCYaDCYcDCYcDCYaCiQYCiIWCCIUCCAUBiAUBiAQBh4OBBwOBBwQBBwSBB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBh4aCCIcCCQeCCYgCigiCioiCiwiCiwiCiwiCiwiCiwiCiwiCiwiCiwiCiwiCiwiCiwgCiogCCgeCCYeCCYeCCYKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgKCgoKCgoMDAwKCgoGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgKCgoKCgoMDAwKCgoICAgICAgICAgKCgoKCgoMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIICAgMDAwODg4ODg4OEA4QEBAQEBASEhISEhIWFhYWFhYYGBgWFhYYGBgYGBgWFhYWFhYWFhYYGBgWFhYYGBgYGBgWFhYEBAQCAgICAgICAgICAgICAAACAgICAgIAAgAAAAACAgACAgICAgICAgIICAgODhAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgACAgICAgIEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODhAICAgCAgICAgICAgICAgAAAAAAAgACAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAhoMAhoOAhoOBBwQBBwSBB4SBB4SBh4UBiAWCCAWCCAWCCIWCCIWCCIYCiQaCiQaCiQYCiIYCiQYCiQYCCIWCCAUBiAUBiAUBh4SBh4QBB4QBBwOBBwOBBwQBBwAAAAAAAAAAAAAAAAGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYAAAAAAAAcCCIiCiokCi4mDC4mDDAoDDIoDjIoDjQqDjQqDjQqDjQqDjQqDjQqDjQoDjQoDjIoDjImDDAmDDAmDC4kDC4iCioODg4QEBAQEBAQEBASEhISEhIWFhYWFhYYGBgWFhYYGBgYGBgWFhYWFhYUFBQUFBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIGBgYMDAwODg4ODg4ODg4QEBAQEBAQEBASEhISEhIWFhYWFhYYGBgWFhYYGBgYGBgWFhYWFhYWFhYYGBgWFhYYGBgYGBgWFhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBAIICAoKCgoICAgICAgICAgKCgoKCgoKCgoMDAwMDAwODg4ODg4ODg4QEBAQEBASEhIMDAwODg4ODg4ODg4QEBAQEBASEhIEBAQCAgICAgICAgICAgICAAACAgICAgIAAgAAAAACAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgACAgICAgIEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgICAgAAAAAAAgACAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAhgMAhgMAhoOBBoQBBwSBB4SBh4WCCAYCiIaCiQYCiQYCiQYCiQYCiQYCiIYCiQYCiIYCCIYCCQWCCIWCCAUBiAUBiAUBiAUBiASBh4SBh4QBB4QBB4QBBwOAhwAAAAAAAAAAAAAAAAICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgAAAAAAAAaCCAiCiwoDDIqDjYuEjgwEjowFDwwFDwwFDwwFjwwFjwwFjwwFDwwFDwwFDwwFDwwFDouEjosEDgqDjQmDDAgCioGBgYGBgYIBggICAgICAgICAgKCgoMDAwMDAwMDAwMDAwODg4ODg4KCgoMDAwMDAwAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQGBAYEBgYGBgYGBgYIBggICAgICAgICAgKCgoMDAwMDAwMDAwMDAwODg4ODg4KCgoMDAwMDAwMDAwMDAwODg4ODg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQEAgQCAgICAgICAgQEBAQEBAQEBAQEBAQEBAQCAgIEBAQEBAQCAgIEBAQEBAQEBAQCAgIEBAQEBAQCAgIEBAQEBAQCAgICAgICAgICAgICAAACAgICAgIAAgAAAAACAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgACAgICAgIEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgICAgAAAAAAAgACAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAhgMAhgOAhoOBBwQBBwQBBwQBBwQBB4SBB4SBh4UBh4UBiAUBiAWCCAWCCIYCiIYCiQaCiQaCiYaCiQYCiQYCCIYCCIYCCIYCiQWCCIWCCIWBiAUBiAUBiAUBh4AAAAAAAAAAAAAAAAKCgoICAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgGBgYICAgICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwAAAAAAAAaCCAkCiwsEDYyFjw2GD42Gj44HD44HD44HD44HD44HD44HD44HD44HD44HD44HD42HD42Gj40GD4wFDoqDjIiCioEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgGBgYICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgGBgYICAgICAgGBgYICAgICAgICAgGBgYICAgICAgGBgYICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYGBgYEBAQCAgICAgICAgICAgICAAICAgICAgIAAgAAAAACAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgACAgICAgIEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgICAgAAAAAAAgACAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAhoOBBoOBBwOAhoOAhoQBBwSBBwQBB4SBB4UBh4UBiAWCCIWCCIYCCIYCCIYCiQcDCYcDCYcDCYaCiQYCiQYCCIYCCIYCiQYCiQYCiQYCCIWCCIWCCIWCCAUBiAAAAAAAAAAAAAAAAAMDAwICAgEBAQGBgYGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwAAAAAAAAaCCAkDC4wFDo2Gj44HD46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj44HD40GD4sEjYiCioEBAQEBAQGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoICAgICAgGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYGBgYGBgYGBgYGBAQEBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQGBgYEBAYEBgYGBgYEBAQEBAQEBAQGBgYEBAYEBgYGBgYEBAQEBAQEBAQCAgICAgICAgICAgICAAICAgICAgIAAgIAAAACAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgICAgAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAhgOAhoOAhoMAhoMAhoOBBwQBBwSBh4UBh4UBiAWCCAYCCIYCiQYCiQYCiQaCiQaCiYaCiQaCiQYCiQYCCIYCCIYCCIYCCQYCiQYCiQYCiQYCCIWCCIUBiAUBiAAAAAAAAAAAAAAAAAODg4KCgoEBAQGBgYGBgYGBgYGBgYGBgYEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQKCgoODg4AAAAAAAAaCCAmDDAyFjw4HD46Hj46Hj46ID46ID46ID46ID46ID46ID46ID46ID46ID46ID46Hj46Hj44HD42Gj4uFDgiCioEBAQGBgYGBgYGBgYGBgYEBAQGBgYICAgKCgoMDAwMDAwKCgoGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBgYGBgYGBgYEBAQEBAQGBgYGBgYGBgYEBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQGBgYEBAYEBgYGBgYEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQEBAQEBAQEBAQICAYICAgEBAQEBAQEBAQGBgYICAgICAgICAgGBgYEBAQEBAQGBgYGBgYGBgYGBgYGBgYEBAQCAgICAgICAgICAgICAgICAgICAgIAAgIAAAACAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgICAgAAAAAAAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgICAgAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAhYKAhgOBBoOBBoOAhoOAhoMAhoOAhoSBBwSBh4UBiAWCCAWCCIWCCIWCCIYCiQYCiQYCCQYCiQYCiQYCCQWCCIWCCIYCCQYCCQWCCISBh4SBh4QBBwUBiASBiAAAAAAAAAAAAAAAAAODg4MDAwEBAQGBgYGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYODg4QEBAAAAAAAAAaBiAmDjAyGDw4HD46Hj46Hj46ID46ID46ID46ID46ID46ID46ID46ID46ID46ID46Hj46Hj44HD42Gj4uFDgiCioEBAQEBAQEBAQGBgYGBgYEBAQGBgYICAgKCgoKCgoKCgoICAgGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBAYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYIBggGBgYEBAQEBAQEBAQEBAQEBAQGBgYICAgGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQGCAgICAgGBgYGBgYEBAQODg4YGBgSEhIeHh4UFBQEBAQEBAQICAgGBgYGBgYGBgYGBgYEBAQCAgICAgICAgICAgICAgACAgICAgIAAgIAAAAAAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgIAAgAAAAACAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgIAAgAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAhgKAhgOBBwOBBoOBBoOBBoOAhoOAhoOBBwQBBwSBh4UBiAUBiAUBiAUBiAYCiQaCiYaCiYaCiYaCiYYCiQYCiQYCCQWCCISBh4QBB4QBBwQBBwOBBwSBh4UBh4AAAAAAAAAAAAAAAAODg4MDAwEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYODg4QEBAAAAAAAAAaBiAmDjAyGDw2HD46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj44HD42Gj4uFDgiCioEBAQEBAQEBAQEBgQEBAQEBAQEBAQICAgKCgoODg4SEhIMDAwEBAYEBAQEBgQGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGCAgICAgGBgYGBgYICAgGBgYEBAQEBAQEBAQEBAQEBAQGCAgICAgICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBAYEBAQEBAQEBAQCAgIEBAQGBgYICAgGBgYGBgYEBAQYGBgSEhIEBAQICAgaGhoGBgYGBgYICAgGBgYGBgYICAgICAgEBAQCAgICAgICAgICAgICAgACAgICAgIAAgIAAAAAAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgIAAgAAAAACAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgIAAgAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAhgMAhgQBB4QBB4QBBwQBBwOAhoOAhoOBBwQBBwSBB4UBh4WBiAWCCIWCCIYCCQaCiYaCiYaCiQaCiQYCiQYCCIWCCIWCCASBh4QBBwQBBwOBBwOBBwQBB4QBB4AAAAAAAAAAAAAAAAODg4MDAwEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYMDAwODg4AAAAAAAAYBiAmDjAyGDw2HD44Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj44Hj44HD42Gj4uFDgiCioGBgYAAAAAAAAKBA4eDCYmECwoEi4qEjAqEjAoEjAoEi4kECwcCiQIAgoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQGBgYGBgYGCAYGBgYGCAgGBgYGBgYIBggGBgYEBAQCBAQEBAQEBAQEBAQICAgICAgICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQEAgICAgICAgIEBAQGBgYICAgICAgEBAQWFhYSEhIEBAQGBgYaGhoEBAYGBgYICAgICAgGBgYICAgICAgEBAQCAgICAgICAgICAgICAgACAgICAgIAAgIAAAAAAgACAgICAgICAgIICAgODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgIAAgAAAAACAgICAgICAgIEBAQEBAICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4ICAgCAgICAgICAgIAAgAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAhgKAhgQBBwOBBwOBBwOBBwOBBwOBBwOBBwOBBoQBBwQBB4SBh4SBh4SBh4SBh4UBiAUCCAWCCAWCCIWCCIWCCIWCCAUBiASBh4QBBwQBBwQBB4QBB4SBh4SBh4AAAAAAAAAAAAAAAAMDAwKCgoEBAQEBAQGBgYEBAQEBAQEBAQEBAQGBgYGBgYGBgYEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYMDAwODg4AAAAAAAAYBh4mDjAyFjw2HD44Hj44Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj44Hj44HD42Gj4uFDggCioEBAQAAAAAAAAcCCQ4Gj48ID4+ID4+ID4+ID4+ID4+ID48ID42GD4WBhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYEBAQCAgIEBAQEBAQEBAQGBgYGBgYICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQCAgICAgICAgIEBAQGBgYICAgICAgGBgYWFhYSEhIEBAQICAgaGhoEBAQGBgYGBgYIBgYGBgYICAgICAgEBAQEBAICAgICAgICAgICAgICAgICAgIAAgIAAgAAAgACAgICAgICAgIKCgoODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQICAgODg4GBgYCAgICAgICAgIAAgAAAgACAgICAgICAgIEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYODg4KCgoCAgICAgICAgIAAgAAAgAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAhgKAhgOBBwOAhoOAhoMBBoMAhoMAhoMAhoMAhoMAhoOBBoOBBwQBBwQBB4SBh4UBiAWCCAWCCIYCCIYCiQYCiQYCCIUCCASBh4SBh4QBBwOBBwQBBwWCCAWBiAAAAAAAAAAAAAAAAAMDAwKCgoEBAQGBgYGBgYEBAQEBAQGBgYEBAQGBgYGBgYGBgYEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYEBAQGBgYKCgoODg4AAAAAAAAYBh4mDi4yFjw2HD44Hj44Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj46Hj44Hj44Hj44HD42Gj4uFDggCioEBAQAAAAAAAAYCB4uFDgyGDw0Gjw0Gjw0Gjw0Gjw0GjwyGDosEjYUBhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAYEBAQEBAQEBAQEBAQCAgIEBAQGBgYGBgYGBgYGBgYGBgYICAgGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQCAgICAgICAgIEBAQGBAQGBgYICAgGBgYWFhYUFBQEBAQMDAwaGhoEBAQGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQCBAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIKCgoQEBAGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgIEBAQEBAQICAgQEBAGBggCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQCBAQCAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQEBAKCgoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAhYMAhgQBBwQBBwQBBwQBBwQBBwMAhoMAhoOBBoQBBwSBh4UBh4UBiAWCCAWCCIYCiQYCiIYCiQaDCYcDCYaCiQOBBoQBBwOBBwOBBoOAhoOAhoOBBwUCCAWCCIAAAAAAAAAAAAAAAAMDAwKCgoEBAQGBgYGBgYEBAQEBAQGBgYEBAQEBAQGBgYGBgYEBAQGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYEBAQEBAQGBgYEBAQGBgYICAgODg4AAAAAAAAYBh4mDi4yFjw2Gj44HD44Hj44Hj44Hj44Hj44Hj44Hj44Hj46Hj46Hj44Hj44Hj44Hj44Hj42HD40Gj4uFDggCioGBgYAAAACAAIYCB4YCB4WBhwWBhwWBhwWBhwWBhwWBhwWBhwYCB4UBhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGCAYGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQCAgICAgICAgIEBAQGBgYGBgYGBgYICAgMDAwSEhIQEBAYGBgQEBAEBAQGBgYEBAQGBgYGBgYGBgYGBgYEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAIKCgoQEBAGBgYEBAQEAgICAgICAgICAgICAgICAgIEAgIEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIEBAQEBAQKCgoQEBAICAgCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEAgICAgICAgICAgICAgICAgIEAgIEBAQGBgYQEBAKCgoEBAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAhgOBBwSBh4QBh4SBh4SBh4QBBwQBBwQBBwSBB4SBh4QBB4SBh4UBiAUBiAUBiAUCCAWCCAWCCIWCCIYCCIYCiQYCCIUBiAUBh4UBh4QBB4QBBwQBBwSBh4UBiAAAAAAAAAAAAAAAAAICAoICAgEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBgYEBAQEBAQGBgYEBAQGBgYGBgYMDAwAAAAAAAAYBh4mDi4wFjo0Gj42HD44HD44Hj44Hj44Hj44Hj44Hj44Hj44Hj44Hj44Hj44Hj44HD44HD42HD40Gj4uFDggCigGBgYGCAYICAgiDCoqEDQqEDIqEDIqEDIqEDIqEDIqEDIqEDIqEDQeCiQGCAYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQCAgIEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQCAgICAgIEBAQEBAQEBAQGBgYGBgYICAgEBAQGBgYGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQKCgoQEBAGBgYEBAQEAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIEBAQEBAQKCgoQEBAICAgEAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIEAgIEBAQGBgYQEBAKCgoEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAhoQBBwSBh4QBh4QBB4OAhoOAhoMAhoMAhoMAhoMAhoOBBwQBBwSBh4SBh4SBh4SBiAWCCAYCCIYCCIYCiQYCiQYCiQaCiQYCiQWCCIUBiAUBiAUBiASBh4UBh4AAAAAAAAAAAAAAAAICAgICAgEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQGBgYEBAQEBAQEBAQMDAwAAAAAAAAYBh4kDCwuFjg0Gj42HD42HD42HD42HD42HD42HD42HD42HD42HD42HD42HD42HD42HD42HD40Gj4yGDwsEjYgCigICAgICAgICAggCig2Gj48Hj48ID48ID48ID48ID48ID46Hj42GD4cCiIGCAYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQCAgIAAAACAgIEBAQGBgYGBgYGBgYGBgYGBgYIBggICAgGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAICAgICAgIEBAQEBAQEBAQGBgYGBgYGBgYGBAQGBgYGBgYGBgYEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQKCgoQEBAGBgYEBAQEAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIEBAQEBAQKCgoQEBAICAgEAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgIEAgIEBAQGBgYQEBAKCgoEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAhYQBBwUBiAUBiAOBBoMAhgMAhoMBBoOBBwOBBwQBh4SBiAUCCAWCCIYCiQYCiQYCiQaCiYaDCYcDCYcDCYaDCYcDCYcDCYcDCYaCiQQBB4QBh4SBh4UCCIWCCIAAAAAAAAAAAAAAAAICAgICAgEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYICAgGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQGBgYEBAQEBAQEBAQMDAwAAAAAAAAWBhwgDCosEjQwFjoyGDw0Gjw0Gj40Gj40Gj40Gj40Gj40Gj40Gj40Gj40Gj40Gj40Gj4yGDwyGDwuFjgoEDIeCCQICAgICAgICAgcCiIwFjg0GDw0Gjw0Gjw0Gjw0Gjw0GjwyGDwuFDgYCB4GBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAYEBAQCAgICAgICAgIEBAQGBgYGBgYGBgYGBgYGBgYGBggICAgGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEAgQCAgICAgIEBAQEBAQEBAQGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEAgIKCgoQDg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICBAQEBAIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgIEAgIEBAQICAgQDg4IBggCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAICBAQCAgICAgICAgICAgICAgICAgICAgIEBAQGBgYQDg4KCgoEAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAhgQBB4SBh4QBB4QBBwOBBwQBBwQBBwQBB4SBB4SBh4WCCAWCCIYCiIYCiQaDCYaDCYcDCYcDCYcDCYcDiYcDCYcDCYcDCYcDCYeDigaCiQUBiAUBiAWCCIaCiQAAAAAAAAAAAAAAAAICAgICgoGBgYICAgICAgEBAQEBAQGBgYGBgYGBgYEBAQGBgYICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQMDAwAAAAAAAAUBhoeCiYoDjAsEjQuFDguFjgwFjowFjowFjowFjowFjowFjowFjowFjowFjowFjowFjouFjguFDYqEjQkDi4aCCAGBgYGCAYICAoaCCAYBh4WBhwWBh4WBh4WBh4WBh4WBh4WBhwYBiAYCB4GBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAYEBAQEBAQCAgIEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQCAgICAgICAgIEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYEBAQCAgICAgICAgICAgICAgACAgICAgIAAAAAAAAAAAACAgICAgICAgIICAgMDAwGBgYEAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAIEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGCAgMDAwGBgYCAgICAgICAgIAAAAAAAAAAAACAgICAgIEBAICAgICAgICAgICAgICAgICAgICAgICAgICAgIEAgIGBgYMDAwICAgCAgICAgICAgIAAAAAAAAAAAACAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAhoQBh4SBiASBh4QBB4QBBwQBBwOBBwOBBwQBBwSBBwSBB4SBh4UBiAWCCIWCCIYCCQYCCIYCiQaDCQaCiQaCiQcDCYaDCYaDCYWCCISBh4QBB4SBh4UBiIWCCIAAAAAAAAAAAAAAAAKCgoKCgoGBgYICAgKCgoGBgYEBAQICAgGBgYGBgYGBgYEBAQGBgYGBgYICAgICAgICAgICAgICAgGBgYGBgYICAgICAgGBgYEBAQEBAQEBAQMDAwAAAAAAAAUBhgaCCAiDComDi4oEDAoEDIqEjIqEjIqEjIqEjIqEjIqEjIqEjIqEjIqEjIqEjIqEDIoEDImDjAkDi4gCigWBhwGBgYGBgYICAggDCouEjYuFjYwFjYwFjYwFjYwFjYwFjYuFDYsEjYcCiQGCAYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQEAgQEBAQEBAQEBAQEBAQGBgYEBAQEBgYICAgICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQCAgICAgICAgICAgICAgICAgIGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYCAgICAgICAgICAgIAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgACAgIGBgYKCgoEBAQCAgICAgIAAAAAAAAAAgAAAgICAAICAgICAgICAgICAgICAgICAgICAgICAgIAAAIAAgAAAgAAAAACAAACAgICAgIGBgYKCgoEBAQCAgIAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgICAgICAgICAAIAAgIAAgAAAAAAAAACAgICAgIEBAQKCgoGBgYCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAhgUBiAUCCAUCCAUBiAUBiAUBiAUBiAQBBwOBBwQBBwQBBwQBh4SBiAUBiAWCCIYCiQYCiQaCiQaDCYcDCYcDiYeDigeDigWCCAWCCAUCCAUCCASBiAWCCIYCiQAAAAAAAAAAAAAAAAMDAwKCgoICAgGBgYKCgoMDAwGBgYICAgICAgGBgYGBgYEBAQEBAQGBgYICAgKCgoICAgICAgICAgICAgICAgKCgoKCgoICAgGBgYGBgYGBgYMDAwAAAAAAAAUBhgUBhoaCCIeCiYgCiggDCgiDCoiDCoiDCoiDCoiDCoiDCoiDCoiDCoiDCoiDCogDCogDCggCigeCiYYBh4SBBgGBgYGBgYGBgYgDCg4HD48ID48ID48ID48ID48ID48ID48ID42Gj4cCiIGCAYICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgGBgYEBAQEBAQEBAQEBAQEBgQEBAQEBAQGBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQCAgICAgICAgIEBAQEBAQCAgQEBAQEBAQGBgYUFBQWFhYaGhoeHh4KCgoEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAhgUBiASBh4QBB4QBB4QBB4QBBwQBBwQBBwQBBwQBBwOBBwQBBwQBB4SBB4UBiAWCCIWCCIYCiQaDCQaDCYcDCYcDCYaDCQYCiQWCCIWCCIUCCIUCCAWCCIcDCYAAAAAAAAAAAAAAAAMDAwMDAwICAgICAgICAgKCgoKCgoICAgICAgICAgGBgYCAgIKCgocHBwcHBwcHBwUFBQGBgYICAgKCgoICAgKCgoKCgoICAgGBgYGBgYICAgMDAwAAAAAAAASBBYQBBQSBBgWBhoYBh4YBh4aCCAaCCAaCCAaCCAaCCAaCCAaCCAaCCAaCCAaCCAaCCAYBh4WBhwWBhoSBBYQBBYGBgYGBgYGBgYYCB4oEDAsFDQsFDQsFDQsFDQsFDQsFDQqFDQmDjAWCBoGCAYICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQGBgYGBgYEBAQGBgYGBgYGBgYGBgYIBggGBgYEBAQEBAQEBAQEBAQEBAQGBgYEBAQGBgQGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQCAgICAgIGBgYGBgYEBAQEBAQEBAQKCgocHBwICAgGBgYUFBQSEhIEBAQEBAQGBgYEBAQEBAQGBgYEBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgIEAgQEBAQCAgICAgICAgICAgIEBAQEBAQCAgICAgICAgIEBAQCAgICAgICAgICAgIEBAQOBBwQBh4QBB4QBBwOBBwOBBwOBBwSBh4UBiAWCCAWCCAUCCAUBiAUCCAUBiAUBiAWCCIWCCIYCiQcDCYcDiYcDiYaDCQYCiIWCCIWCCAUCCIUBiAUBiAUBiAaCiQAAAAAAAAAAAAAAAAKCgoODg4QEBAICAgGBgYICAgMDAwMDAwICAgICAgGBgYCAgIUFBQUFBQKCgoKCgoYGBgKCgoICAgKCgoMDAwMDAwKCgoGBgYGBgYICAgMDAwODg4AAAAAAAAQBBQOBBIOBBIOBBIQBBQSBBYSBBYSBBYSBBgSBBgSBBgSBhgSBBgSBBgSBBgSBBYSBBYQBBYQBBQOBBIOBBIQBBQGBgYGBgYICAgeCiQaCCAYBh4YBh4YBh4YBh4YBh4YBh4YBh4aCCIaCCAGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBAYGBAQEBAQEBAQEBAQGBgYICAgGBgYGBgYGBgYGBgYICAgICAgGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQCAgIEBAQEBAQGBgYEBAQEBAQEBAQICAgcGhwICAgEBAQSEhIUFBQEBAQGBgYICAgICAgGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgIAAAACAgIEBAQEBAQGBgYICAgICAgICAgEBAQCAgIAAAAEBAQEBAQGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBgYEBAQEBAQGBgYGBgYEBAQEBAQEBAQEBAQGBgYOBBoQBB4SBB4SBB4SBh4SBh4WCCIWCCIYCiIYCiQaCiQaCiQaCiQaDCYaDCYYCiQYCiQaCiQaDCQcDCYeDiYcDiYaDCQWCiIWCCAUCCASBh4SBh4SBiAQBB4SBiAAAAACBAIAAAACBAIICAgGBgYMDAwQEBAMDAwGBgYICAgKCgoMDAwICAgICAgICAgQEBAICAgEBAQEBAQQEBAKCgoKCgoMDAwMDAwKCgoICAgICAgICAgMDAwODg4KCgoAAAAAAAAKAA4IAAwGAAoGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAgGAAoIAAoKAA4GBgYGBgYIBgggCig0Fjw4HD44HD44HD44HD44HD44HD44HD4yFjwcCCIGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBAYEBAQEBAQEBAQGBgYICAgGBgYEBAQGBAQGBgYICAgICAgGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYEBAQEBAQCAgIEBAQEBAQEBAQEBAQGBgYGBgYGBgYaGhoKCgoEBAQSEhIUFBQEBAQICAgICAgICAgGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEBAQEBAQEBAQGBgYGCAYICAgKCgoKCgoGBgYGBgYKDAoKDAoMDAwMDAwMDgwMDAwGBgYEBAQAAAASEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIMAhoOBBwOBBwOBBwQBBwQBB4SBh4SBh4UBiAWCCAUBiAUBiAWCCIWCCIYCiIYCiQaCiQcCiYcDCYcDiYeECggECggECggECgeECgaDCQYCiIYCiIUCCASBB4SBh4AAAACAgIAAAACAgIKCgoKCgoEBAQMDAwSEhIODg4ICAgMDAwMDAwKCgoODg4ODg4QEBAQEBAODg4QEBASEhIMDAwKCgoMDAwMDAwICAgGBgYICAgQEBAODg4ICAgGBgYAAAAAAAAGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgIBggGBgYGBgYGBgYICAgICAgICAgGBggGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYgCiY2Gj46Hj46Hj46Hj46Hj46Hj46Hj46Hj42GD4cCCIGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBgYEBAQEBAQCAgIEBAQGBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQCAgICAgICAgICAgICAgICBAQEBAQEBAQGBgYaGhoICAgGBgYSEhIWFhYEBAQICAgEBAQGBgYEBAQEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQEBAQEBAQGBgYGBgYICAgICAgKCgoKCgoKCgoKCgoKDAoMDAwMDAwMDAwMDAwMDAwMDAwICAgGBgYMDAwMDAwKDAoKCgoKCgoICggEBgQCAgIAAAAQEBASEhIUFBQQEBAQEBASEhIQEBAUFBQSEhIQEBAQEBASEhIUFBQSEhIQEBASEhIQEBAUFBQUFBQOBBoUBiAUBiAUBiAUBiASBiASBB4SBB4SBh4UBiAUBiAUBiAWBiAWCCIYCiIYCiQaDCYcDCYcDCYcDiYcDigeECggECggEiogEioeECgWCiIOBBwOBBwOBBwSBh4AAAAAAAAAAAAAAAAKDAwKCgoGBgYGBgYICAgQEBAQEBAKCgoKCgoKCgoMDAwKCgoQEBAgICAkJCQkJCQcHBwODg4MDAwKCgoICAgGBgYMDAwQEBAMDAwGBgYEBAQICAgAAAAAAAAGBgYGBgYIBggICAgICAgICAgICAgICAgICAgIBggGBgYGBgYGCAgICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYIBggYCB4gDCYiDioiDioiDioiDioiDioiDioiDioeCiYWBhwGBggGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBgYEBAQEBAQCAgIEBAQEBAQEBAQGBgYEBAQGBgYICAgICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQCAgICAgICAgICAgIEBAQEBAQEBAQEBAQGBgYUFBQQEBAUFBQcHBwQEBAEBAQICAgEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAgQEAgYGAggMBA4QBhISCBYSCBYIBAoCBAIEBAQEBAQGBgYICAgKCgoMDAwMDAwMDAwMDAwMDAwMDAwMDAwKDAoMDAwMDAwMDAwMDAoKDAoKCgoKCgoICggICAgICAgEBgQCAgIEBAQEBAQEBAQCBAICAgICAgIAAgAAAAAAAAAICAgKCgoMDAwKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoMDAwKCgwKCgoKCgoKCgoKCgoICAgOBBwUBiAUBiASBiASBiASBiAUBh4UBiAWCCQYCiQYCiQaCiQcDCYeECggECogECoeECoeECoeECocDigcDigcDigYCiQWCiIUCCAUBiAUBiAUBiAUBiAUBiAUBiAAAAACAgIAAAAAAAAIBggODg4KCgoGBgYICAgGBgYKCgoSEhIMDAwICAgKCgoKCgoICAgKCgoODg4QEBAQEBAODg4KCgoICAgICAgODg4SEhIODg4EBAQCAgIEBAQMDAwAAAAAAAAGBgYGBgYIBggICAgICAgICAgICAgICAgICAgICAgIBgYGBgYGCAgICAgICAgICAgICAgICAgIBgYGBgYGBgYGBgYGBgYGBgYIBgggCiggCiggDCgiDCgiDCggDCggDCggDCggDCggCigcCCQGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBAQEBAQEBAQEBAQEBAQGBgYGBgYICAgGBgYGBgYICAgICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQCAgICAgIEBAQEBAQGBgYEBAQEBAQEBAQGBgYICAgGBgYEBAQEBAQEBAQEBAQEBAQCAgIEBAQGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQGAggKAgwMBA4KBAwSCBYYDB4eECIkEiggDCYUBhgiDioyGDY2HDo6Hjw0FjwWChoKDAoMDAwMDAoMDAoMDAwMDAwMDAwMDAwMDAwKDAoKCgoKCgoICggICAgICAgGBgYGBgYEBAQEBAQEBAQCAgICAgICAgIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBASEhIUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIUFBQUFBQUFBQUFBQQEBAOBBwSBB4QBB4QBBwQBB4WCCIYCiQaCiQaDCYaDCYaDCYcDCYeDiYeECggECogEiogEioiEiwkFCwkFC4kFi4kFi4iEiwaDCQWCCIUBiASBiASBiAUBiAUBiAYCCIAAAAAAgIAAAAAAAAAAAAKCgoQEBAKCgoGBgYKCgoICAgUFBQUFBQQEBAMDAwKCgoKCgoKCgoMDAwQEBAODg4KCgoMDAwODg4QEBAQEBAICAgEBAQEBAQEBAQGBgYODg4AAAAAAAAGBgYGBgYGBgYICAgICAgICAgICAgICAgICAgICAgICAgGBggICAgICAgICAgICAgICAgICAgICAYGBgYGBgYGBgYGBgYGBgYGBgYgCig2Gj48Hj48ID48ID48ID48ID48ID46Hj42GD4cCCIGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYICAgICAgICAgIBggICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAICAgIEBAQGBgYGBgYEBAQGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYICAgICAgAAAAAAAAAAAAAAAAAAAACAgIGAggMBA4QCBQSCBYSBhYOBhIWCBokECoqFDAwGDIuFDQeCiYUBhouFDY4Hj48ID4+Ij42GDwUBBoqEDQ+Hj4+Ij4+JD4+HD4gDCgMDAwKCggICggICAgICAgICAgICAYGBgYEBAQEBAQEBAQCAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODg4SEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIUFBISEhIQEBAQBBwWCCIUCCAUBiASBh4UBiAUBiAWCCAYCCIYCiQaCiQaCiQaCiQcDCYeDigeECgeECggEioiEioiEiwiFCwiFCwiFCwgEiogECgcDigYCiQWCCIUCCASBh4UCCAAAAAAAAAEBAQAAAAAAAAEBAQODg4SEhIKCgoGBgYICAgGBgYKCgoQEBAWFhYSEhIMDAwICAgICAgMDAwMDAwSEhIWFhYUFBQKCgoEBAQEBAQEBAQEBAQEBAQGBgYODg4AAAAAAAAGBgYGBgYIBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYeCiQyGDw2HD42HD44HD44HD44HD44HD42HD4yFjwaCCAGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQGBgYEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEAgQCAgIGBgYGBgYGBAYEBAQGBgYICAgGBgYIBggICAgGBgYEBAQEBAQEBAQEBAQEBAQICAgICAgIBggICAgAAAAAAAAAAAAAAAAEAgQaCh4sFDQyGjg2HDo4HDomDjASBBgkDiw6HD4+ID4+Ij4+ID4oDjIWBhwsEjY8Hj48Hj48Hj4yFjoWBhwaCiAmEiokEiYeECIaDBwOBhIEBAQCBAICAgICAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODg4SEhIUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSFBIUFBQSEhISEhIUFBQUFBQUFBQSEhIQEBAQBBwYCiQYCiQaCiQYCiQUCCISBB4SBB4UBh4WCCAYCCIYCiQaCiQcDCYeDiggECogEiokFiwkFi4kFi4kFi4kFi4kFi4iFCwgECoeDiYcDCYYCiIWCCIWCCIWCCIAAAAAAAACAgIAAAACAgIAAAAGBgYODg4QEBAKCgoICAgGBgYEBAQEBAQODg4UFBQUFBQQEBAMDAwQEBAUFBQUFBQODg4GBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYODg4AAAAAAAAGBgYGBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgYGBAYGBgYGBgYIBggaCCAcCiQcCiQcCiQcCiQcCiQcCiQcCiQcCiQcCiQWCBwGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBAQEBAQEAgIEBAQEBAQCAgICAgIEBAQEBAQGBgYEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBgQEAgQCAgIEBAQEBAQEBAQEBAQGBgYICAgGBgYICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgGCAgAAAAAAAAAAAAAAAACAAIeCiY2Gj4+ID4+ID4+Ij4wEjoWBhweCiQ0GD42Gj4yGjgqFjAeDCQQBhQSCBQWDBoSCBYOBhAKBAwGAgYCAgQEAgQCAAQCAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAUFBQWFhYSEhISEhIUFBQUFBQUFBQUFBQUFBQSEhISEhISEhISEhISEhISEhIUFBQUFBQQEBAQBBwUBiAUCCAWCCIWCCIUBiASBiASBh4SBB4SBh4UBiAYCiIaCiQaCiQcDiYeECggEioiFCwkFiwmGC4mGDAmGC4mFi4mFi4iFCwcDCYaCiQaCiQYCiQYCiQaCiQAAAAAAAAAAAAAAAAAAAAEBAQGBgYGBgYMDAwQEBAODg4ICAgEBAQEBAQGBgYGBgYKCgoQEBAQEBAQEBAKCgoGBgYGBgYGBgYGBgYEBAQEBAQEBAQGBgYGBgYGBgYODg4AAAAAAAAGBgYGBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgYEBAYGBgYGBgYGBAgiDCooDjAoEDAoDi4oEC4oEC4oEC4oEC4oDi4oDjAeCiQGCAYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBAYGBgYEBAQEBAQEBAQGBgYGBgYGBgYEBgYGBgYGBgYGBgYGBgYEBAQCAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEAgQCAgIEBAQCAgICAgICAgIGBgYICAgGBgYICAgMDAwODg4ODg4GBgYEBAQEBAQEBAQGBgYICAYGCAgGBgYAAAAAAAAAAAAAAAAAAAASBhYoEDAqFDAkEigeECIWChoOBhAIBAoKBAwIBAgEAgQCAAICAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODg4SEhIUFBQQEBAQEBASEhIUFBQSEhISEhISEhIQEBAQEBAODg4ODg4QEBAQEBASEhIUFBQQEBASBB4UCCAUCCAUBiAUBiASBiASBh4SBB4SBB4SBh4UBiAYCCIYCiQcDiYgEioiEiwiEiwiEiwiEiwgEiogEioiFCweECgaDCYcDiYWCCIWCCIWCCIUCCAUBiAWCCIAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQKCgoUFBQKCgoGBgYGBgYGBgYGBgYEBAQEBAQICAgEBAQEBAQGBgYGBgYGBgYGBgYEBAQEBAQEBAQICAgGBgYGBgYODg4AAAAAAAAEBgYGBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBAYgCig4Gj46ID48ID48ID48ID48ID48ID46Hj42GD4cCiIGCAYICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBAYGBgYEBAQEBAQEBAQGBgYGBgYEBAYEBAQGBgYGBgYICAgGBgYEBAQCAgICAgICAgICAgICAgIEBAQEBAQEBAQCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQCAgICAgIEBAQEBAQEAgQEAgQGBgYGBgYIBggWFhYcHBweHh4iIiIYFhgGBgYEBAQEBAQGBgYGCAgGBgYGBgYAAAAAAAAAAAAAAAAAAAACAAICAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDAwODg4ODg4MDAwMDAwODg4ODg4ODg4ODg4ODg4MDAwMDAwMDAwMDAwMDAwMDAwODg4ODg4MDAwQBBwQBBwQBBwQBB4QBB4QBB4QBB4QBBwQBBwSBh4WCCIaDCYcDCYcDigcDiggEiogEioeECgcDiYcDigcDCYcDCYcDiYaDCQWCiIWCCIUBiAUBiAUCCAUCCASBh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQKCgoQEBAKCgoKCgoGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYEBAQEBAQEBAQICAgGBgYGBgYMDAwAAAAAAAAGBAYGBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBAYcCCQwFjo0Gjw0Gjw0Gjw0Gjw0Gjw0Gjw0GDwuFDgYCB4GCAYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAYEBAQEBAQCAgIEBAQGBgYEBAQEBAQGBgYICAgICAgGBgYEBAICAgICAgICAgICAgIEBAQEBAQEBAQEBAQCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQCAgICAgIEBAQGBgYEBAQEBAQEBAYGBgYKCgoeHh4ICAgEBAQODg4aGhoGBgYGBgYGBgQICAgGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIKCgoMDAwEBAQCAgIMDAwMDAwCAgIEBAQMDAwMDAwEBAQEBAQMDAwMDAwEBAQAAAAOAhoQBBwQBBwQBB4QBB4QBB4QBBwUBiAWCCIYCiQYCiQaCiQcDCYcDCYeDiYgECggECogEioiFCogEioeECocDigcDiYaDiQYDCQYCiIWCiISCCASBh4QBBwSBh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBgYSEhISEhIMDAwGBgYGBgYGBgYGBgYEBAQGBgYGBgYGBgYEBAQGBgYGBgYEBAQEBAQGBgYGBgYEBAQGBgYKCgoAAAAAAAAGBgYGBgYIBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAoICAgICAgGBgYGBgYGBgYGBgYIBgocCCIYCCAYCCAYCCAYCCAYCCAYCCAYCCAYCCAaCCAYCBwGCAYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAgQEBAQEBAQEBAQCAgQCAgIEBAQGBAYEBAQEBAQGBgYICAgICAgEBAQCAgICAgIEBAQCAgICAgIEBAQEBAQEBAQEBAQCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBAYEBAQCAgICAgIEBAQGBgYEBAQEAgQEBAYGBgYKCgoeHh4ICAgEBAQQEBAaGhoGBgYGBgYEBAQGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQEBAICBAICBAICBAIEBAQGBgQEBgQEBAICBAICBAICBAIEBAQGBgYEBgQEBAQEBAQEBAQEBAQEBgQCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAgACAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIAAAIAAAAAAAAAAAAAAAAAAAAEBAQKCgoMDAwEBAQEBAQKCgoMDAwCAgIEBAQKDAoMDAwCAgIEBAQMDAwMDAwEBAQAAAAOAhoSBh4SBh4SBiAQBh4SBB4SBh4UBiAWCCIYCCQYCiQaCiQcDCYcDCYcDiYeDiggECggEigiFCoiFCogEioeECgaDCQWCCISBh4SBiASBh4QBB4QBB4QBBwSBh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQICAgSEhIWFhYODg4ICAgKCgoICAgEBAQICAgKCgoICAgICAgGBgYGBgYEBAQGBgYICAgGBgYEBAQEBAQMDAwAAAAAAAAGBgYGBgYICAgICAgICAgKCAoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAgICgoICAgICAgGBgYGBgYGBgYGBgYGBAgiCiouFDgwFjYwFjYwFjYwFjYwFjYwFjYwFjguEjgcCiQGBgQGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEAgQEBAQEBAQCAgQEBAQEBAQEBAQEBAQGBgYICAgIBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQCAgQEBAQGBgYGBgYEBAQEAgQEBAQGBgYICAgcHBwICAgGBgYQEBAaGhoGBgYGBgYGBgYGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAKBgwWChocDiAcDiAcDiAaDCAWChoQBhQYDBwcDiAcDiAcDiAaCh4UChgSCBYaDiAeDiIeECIcDiAaDB4SBhYKAg4SBhgYChwYChwYChwOBBACAgIEBAQCAgIEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgQGBgYGBgYGBgYGBgYGBgYEBAQCAgIAAAAAAAAEBAQKCggMDAwEBAQEBAQKCgoMDAwGBgYGBgYKCgoMDAwCAgQCBAIMDAwMDAwEBAQAAAAMAhoSBh4SBh4SBh4SBh4QBB4QBBwSBB4SBh4UBiAUBiASBh4UBiAWCCAYCiIaCiQcDiYeECggECggEioeECgcDiYcDCYaDCYYCiQUBiASBh4SBiASBh4SBh4UBiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIGBgYODg4SEhIQEBAKCgoGBgYGBgYGBgYKCgoKCgoICAgGBgYGBgYGBgYGBgYGBgYGBgYEBAQEBAQMDAwAAAAAAAAGBgYGBgYICAgICAgKCAgKCAoKCgoKCAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCggICAgICAgGBgYEBAQGBgYGBgYGBAYgCig4HD48ID48ID48ID48ID48ID48ID48ID42Gj4aCiIEBgQGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQCAgIEBAQEBAQEBAQEBAQEBAQICAgEBAQEBAQEBAQEBAQEBAQGBAQEBAQEBAQEBAQEBAQEBAQCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAgQEBAQGBAQGBgYGBgYEBAQEBAQEBAQGBgYICAgcHBwSEhIUFBQeHh4WFhYGBgYGBgYGBgYGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAASBhYuEjg6HD48Hj4+ID40FjwYCB4YBh4yFj46Hj48Hj48Hj4sEDYYBh4gCiY2Gj46Hj4+ID44Gj4qDjYWBhoWBhowFjo6Hj48ID4+ID4sEDYOBhIICggKCgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKDAoMDAoKDAoKCgoKDAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoMDAwKCgoEBAQAAAAAAAAEBAQICggMDAwEBAQEBAQKCgoMDAwICAgGBgYKCgoMDAwCAgICBAIKDAoMDAwEBAQAAAAMAhgSBBwQBBwQBB4QBB4QBB4QBBwSBh4SBh4UBiAUBiAUBiAWCCAYCiIcDCQeDiYeECggEioiFCwiFCwiEiwiEiogEiogEiogECgcDiYYCiQWCCIUCCASBh4SBh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQGBgYSEhIICAgGBgQGBgYGBgYICAgKCgoICAgGBgYEBAQGBgYICAgGBgYGBgYEBAQEBAQODg4AAAAAAAAGBgYGBgYICAgICAgKCgoKCgoKCgoKCAoICAgICAgICAgICAgICAgICAgICAgKCAgKCgoKCgoKCAgICAgGBgYEBAQICAgICAgIBggaCCAoEDAsFDYuFDYuFDYuFDYuFDYuFDYsFDQoEDAWCBwGCAYICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAQCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAgIEBAQGBAQGBgYGBgYEBAQEBAQEBAQGBgYGBgYMDAwQEBAQEBAMDAwGBgYICAgGBgYGBgYGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAASBBguFDg6Hj46ID4+Ij42GDwUBhoYBh40GD46Hj48ID4+ID4qEDQUBBogDCg4HD46Hj4+Ij46Hj4qDjIQBBQUBhowFjo6ID48ID4+Ij4wEjoWCBoMDAwODA4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAoMDAwKDAwKDAoKDAoKDAoMDAwODg4MDAwGBgYAAAAAAAAEBAQKCgoMDAwGBgYGBgYKCgoMDAwICAYGBgYKCgoMDAwCAgICBAIKCgoMDAwEBAQAAAAOAhoSBB4SBh4SBh4QBh4SBh4SBh4SBiAUCCAWCCIYCiQaCiQcDCYeDigeDiggECogECggEioiFCwiFCwiFCwkFiwiFCwgEiocDigaDCYYCiQUBiASBh4SBBwSBh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBAQEBAQGBgYQEBAODg4GBgYGBgYICAYGBgYICAgICAgGBgYGBgYICAgICAgGBgYGBgYCAgIEBAQODg4AAAAAAAAEBAQGBgYICAgKCAoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoICAgGBgYEBAQCAgICAgIGBAgeCCQaCCAYBh4YCCAYCCAYCB4YCCAYBiAYBh4aCCAaCCACBAICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQEBAQEBAQEBAQEBAQEAgIEBAQCAgIEBAQEBAQEBAQGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBAQGBAQEBAQEBAQCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgIEBAQEBAQGBgYEBAQEBAQEBAQEBAQEBAYGBgYICAgICAgGBgYGBgYICAgKCgoICAgICAgGBgYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBBIoEDI2Gj44HD46Hj4yFDoaCCAWBhwwFjo2HD44HD44HD4qEDQaCCAeCiQ0GD44HD46Hj40GDwqDjQWBhwUBhosEjY2Gj44HD46HD4mDjAKBAwKCggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggKCggICggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAYICAYICAgICAgICAgGBgYEBAQCAgIAAAAAAAAAAAAEBAQKCgoMDAwICAgGCAYICAgMDAwGBgYGBgYICggKDAoCAgICBAIKCgoMDAwEBAQAAAAOBBwSBiASBh4QBh4QBB4QBB4QBB4QBB4SBB4SBh4YCiQcDCYcDCYeDiYeDigeECgeECggEiogEioiEioiFCwiFCwgEiocDiYcECgaDiYYCiQSBh4SBh4SBB4UCCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIAAAAEBAQICAgQEBAICAgGBgYIBgYGBgYICAgICAgICAgICAgICAgICAgICAgGBgYEBAQGBgYODg4AAAAAAAAEBAQGBgYICAgICAgKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAoKCgoKCgoKCgoKCAoICAgGBgYEBAQAAAAAAAAAAAIgCig0Fjw4HD44HD44HD44HD44HD44HD44Gj4yFjwcCCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQEBAQEBAQGBgYIBggGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYEBgQGBgYGBgYGBgYCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgIEBAQGBgYIBggGBgYEBAQEBAQEBAQEBAQGBgQGBgYGBgYGBgYGBAYEBAQEBAQEBAQGBgYGBAYGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBAYMBg4QCBIQCBIQChIOCBAMBg4IBgoOCBAQChIQChIQCBIOCBAMBg4KBgwOCBIQChIQChIOCBAOCBAIBAoEAAQIAgoKBA4MBA4MBA4GAggCAgIEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAIEBAQEBgQGBgYGBgYGBgQGBgQGBgQGBgQGBgQGBgYGBgYGBgYEBAQAAAAAAAAAAAAAAAAAAAAEBAQKCgoMDAwGBgYGBgYKCgoMDAwICAgGBgYKCggMDAwCAgICBAIKCgoMDAwEBAQAAAAQBBwUBiASBiAUBiAUBiAUBiAUBiAUCCAUBiAWCCIaCiQaCiYcDCYcDiYeECggECogEioiFCwiFCwiFCwgEioaDiYYCiQWCiIUCCASBh4QBB4QBh4SBh4SBiAWCCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgODg4KCgoGBgYGBgYEBAQGBgYICAgICAgICAgICAgICAgICAgGBgYEBAQICAgODg4AAAAAAAAEBAQGBgYICAgICAoKCgoKCgoKCgoKCAoICAgICAgICAgICAgICAgICAgKCAoKCgoKCgoKCgoICggICAgGBgYEBAQAAAAAAAAAAAIgCig2Gj46Hj46Hj46Hj46Hj46Hj46Hj46Hj42Gj4cCCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgQEBAQEBAQEBAQEBAQICAgGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYEBAQGBgYEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgYCAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgIEBAQEBAQGCAgGBgYEBAQEBAQEBAQEBAQEBAQGBgYGBgYEBAQGBgYEBAQEBAQGBgYGBgYGBgQGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAACBAQIBgoKBgwMBg4MBgwKBgwMCA4KBgwKBgwMBgwMBg4MBg4KBgwMCA4KBgwKBgwMCA4MCA4MBg4MCA4MCA4GAggEAAYGAAgGAAgGAAgEAAQAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQGBgYICAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEBAQCAgIAAAAAAAAAAAAEBAQKCgoMDAwICAgGBgYICggMDAwGBgYGBgYICggKDAoCAgICAgIKCgoMDAwEBAQAAAASBh4WCCIWCCIUCCAUBiAUBiAUBiAUCCAWCCIWCCIYCiIYCiQaDCYcDiggECogEioiFCwkFi4kFi4mFi4kFi4iFCwgEioeECgYCiQWCiIUBiAUBiASBiAUBiAUBiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIAAAAAAAAAAAAAAAAGBgYODg4MDAwGBAQGBgYEBAQEBAQGBgYICAgKCgoKCgoICAgGBgYGBgYEBAQGBgYODg4AAAAAAAAEBAQGBgYICAgKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoICAgGBgYEBAQAAAAAAAACAAQYCCAgDCgkDiwkDiwkDiwkDiwkDiwkDiwkDiwgDCgWBhoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAgIEAgQEBAQGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYEBAQGBgYEBAQGBgYGBgYGBgYEBAQEBgQGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgIEBAQGBAYEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYGBgYEBAQGBgYEBAQGBgYGBgYGBAYEBAQEBAQEBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAGAggeDCQwFjg0Gjo2HDoyFjgkDCwUBBgiDCoyGDo0Gjo2HDowFjYeCiYUBhgoEjAyGjw0Gjo0GjosEjQgCigSBBYcCiQwFjgyGjo0GjowFjgUBhgEBgQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgQCAgIAAAAAAAAEBAQKCgoMDAwICAgGCAYICggMDAwICAYGBgYICggKDAoCAgQEBAIKCgoMDAwEBAQAAAASBh4aCiQWCCISBiAQBB4WCCIYCiQYCiQYCiQYCiQYCiQYCiQaCiQaDCYeDiggECggEiogEiogEioiEioiFCoiFCoiEiogEioeECgcDiYaDCYYCiIWCCIWCCIYCiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQCAgIAAAIAAAAAAAAEBAQMDAwMDgwGBgYEBAQGBgYGBgYICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQODg4AAAAAAAAEBAQGBgYICAgKCgoKCgoKCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCAoICAgGBgYEBAQAAAAAAAACAAQgCigiDCogDCggDCggDCggDCggDCggDCggDCgiDCocCCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEBAQGBgYGBgYICAgICAgGBgYEBAQEBAQEBAQEBAQGBgYICAgICAgICAgICAgGBgYGBgYGBgYEBAQGBgYGBgYEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEBAQGBgYGBgYICAgICAgGBgYEBAQEBAQEBAQEBAQGBgYICAgICAgICAgICAgGBgYGBgYGBgYEBAQGBgYGBgYEBAQAAAAAAAAAAAAAAAAAAAAAAAAGAAgkDCw4Gj46Hj4+Ij48Hj4mDi4SBBYoEDI4HD46Hj4+ID44HDwcCCISBBYwFjo6Hj48ID4+ID4yFjocCCQQBBQkDiw4HD48ID4+Ij48Hj4gCigMDAwODA4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKCgoICAgCAgIAAAAAAAAEBAQKCgoMDAwICAgGBgYICggMDAwGBgYGBgYICggKDAoCAgICBAIKCgoMDAwEBAQAAAAQBBwWCCIUBiASBiASBh4WCCAWCCIWCCIYCCIYCCIYCCIYCCIYCiQaDCYcDCYcDCYcDCYcDCYcDCYcDCYcDCYcDCYeDiYeDigeDigcDCYWCCIUBiAWCCIaCiQaCiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIAAAAAAAAKCgoODg4GBgYEBAQGBgYGBgYICAgICAgGBgYGBgYICAgGBgYICAgEBAQEBAQODg4AAAAAAAAEBAQGBgYICAgKCAoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoICAgIBggGBgYEBAQAAAAAAAAAAAIgCig2Gj46Hj48Hj48ID48ID48ID48Hj46Hj40GD4aCCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEBAQEBAQGBgYGBgYICAgKCgoICAgEBAQEBAQEBAQEBAQGBgYGBgYICAgICAgGBgYICAgGBgYEBAQEBAQGBgYGBgYEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEBAQEBAQGBgYGBgYICAgKCgoICAgEBAQEBAQEBAQEBAQGBgYGBgYICAgICAgGBgYICAgGBgYEBAQEBAQGBgYGBgYEBAQAAAAAAAAAAAAAAAAAAAAAAAAEAAYiDCo4Gj48Hj4+ID46HD4mDjASBBgoDjA4HD48Hj4+ID44GjweCCYUBhgwFDg6Hj48ID4+ID4yFDogCigSBBYiDCw4HD48ID4+ID46HD4aCCIKCgoMDAwMDAwMDAwKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggICggICggKCggKCggKCggICggICggICggICggICggICAgICggKCgoKCggGCAYEBAQCAgIAAAAAAAAAAAAEBAQKCgoMDAwEBAQEBAQKCgoMDAwEBAQEBAQKCgoMDAwEBAQCBAIMDAwMDAwEBAQAAAAMAhgUBiASBiASBiASBh4SBh4SBB4SBBwSBB4SBB4QBBwSBBwUBiAWCCIYCCIYCiQaCiQaDCYcDCYeDigeDigeECggECogEioiEioiEiwaDCQSBiAUBiAWCCIcDCYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgQAAAAAAAAGBgYODg4ICAgEBAQICAYGBgYICAgGBgYGBgYICAgICAgGBgYICAgEBAQEBAQODg4AAAAAAAAEBAQGBgYIBggKCAgKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCAoICAgGBgYEBAQAAAAAAAAAAAIeCiY0GD44HD44HD44HD44HD44HD44HD42HD4yFjwaCCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEBAQGBAYEBAQEBAQGBgYGBggEBAQEBAQEBAQEBAQEBAQICAgKCgoKCgoGBgYICAgKCgoGBgYEBAQEBAQGBgYGCAYGBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEBAQGBAYEBAQEBAQGBgYGBggEBAQEBAQEBAQEBAQEBAQICAgKCgoKCgoGBgYICAgKCgoGBgYEBAQEBAQGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAACAgQSCBYeDiQgECYiEiYeDiQYCh4OBhIWChogECQgEiYiEiYeDiQWCBoOBhIaDB4gECYiEiYgECYcDCIWCBwMBA4QBBQcDCAeDiIeDiQcDCIKBAwEBgQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGCAYEBAQAAAAAAAAAAAAAAAAAAAAEBAQICggMDAwEBAQEBAQKCgoMDAwICAgGBgYKCgoMDAwCAgICBAIMDAwMDAwEBAQAAAAGABQSBB4QBB4QBB4SBB4SBB4QBB4QBBwOBBwOBBwQBBwQBBwSBB4UBiAWCCIWCCIWCCQYCiIYCiQaCiQaCiYaDCYcDCYeDigYCiQUCCASBiAUBiAUBiAUBiAcDCYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIAAAAAAAAEBAQMDAwKCgoEBAQGBgYGBgYGBgYEBAQGBgYICAgICAgGBgYICAgEBAQGBgYODg4AAAAAAAAEBAQGBgYICAgKCAoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCAoICAgGBAYEBAQAAAAAAAACAAQaCCIcCCIaCiIcCiIcCiIcCiIcCiIcCiIaCiIcCCIYBh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEAgQEBAQGBgYGBgYGBgYGBgYEBAYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYMDAwMDAwICAgGBgYEBAQGBgYGBgYIBgYAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEAgQEBAQGBgYGBgYGBgYGBgYEBAYEBAQEBAQEBAQEBAQEBAQGBgYGBgYGBgYGBgYMDAwMDAwICAgGBgYEBAQGBgYGBgYGBgYAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQGBAYGBAgEBAYGBAgKBgwIBgoGBAYGBAYGBAgGBAgGBAgMCAwIBgoGBAYGBAgGBAgGBAgIBgoIBAoEAAQAAAAAAAAAAAIAAAIAAAAAAAACAgIAAAAAAAAAAAAAAgACAgIEBAQGBgYICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGCAYGCAYEBAQAAAAAAAAAAAAAAAAAAAAEBAQKCggMDAwEBAQEBAQKCgoMDAwICAgGBgYKCgoMDAwCAgICBAIKCgoMDAwEBAQAAAAIABYOAhoOBBoMAhoOAhoOBBoMAhoMAhoMAhoOAhoQBBwUBiAUBiAWCCIYCiQaCiQaCiQaDCQaDCYcDCYYCiQWCCIUCCAQBB4QBB4SBB4QBB4QBB4QBB4SBB4eDiYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgMDAwEBAQEBAQGBgYGBgYGBgYGBgYICAgICAgGBgYKCgoGBgYICAgMDAwAAAAAAAAEBAQEBAQICAgKCgoKCgoKCgoKCgoKCgoICAoICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoICAoICAgEBAYEBAQAAAAAAAAEAAQkDC4oDjAmDi4mDi4mDi4mDiwmDi4mDi4mDi4oDjIgCigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgGBgYEBAQEBAQEBAQEBAQGBgYICAgICAgICAgMDAwMDAwICAgGBgYEBAQEBAQEBAQIBgYCAgICAgIAAAAAAAAAAAAAAAACAgICAgICAgIEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgGBgYEBAQEBAQEBAQEBAQGBgYICAgICAgICAgMDAwMDAwICAgGBgYEBAQGBgYICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAKBAocDCQoEjAqFDAsFDAmEC4eCiYUBhggDCgqEjAqFDAqFDAkDiwaCCAUBhomECwqFDIsFDAoEi4mDi4eCiQSBBYcCiIoEi4oEi4qFC4gDCYIBAgEBAQEBAQEBgQEBAQGBgYGBgYGCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGCAgEBAQAAAAAAAAAAAAAAAAAAAAEBAQKCgoMDAwICAgGBgYICggMDAwICAgGBgYICggKDAoCAgICBAIKCgoMDAwEBAQAAAAKAhYQBBwQBBwOBBwOBBwOBBoOBBoQBBwSBB4UBh4WCCAYCCIYCCIYCCIYCiQaCiQYCiQaDCQaDCQcDCYYCiIQBh4MAhoMAhoMAhoOBBoOAhoMAhoOBBoOAhoYCCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQKCgoGBgYCAgIEBAQGBgYGBgYGBgYICAgICAgGBgYKCgoGBgYICAgMDAwAAAAAAAAEBAQEBAQIBggKCAgKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICggKCgoKCgoKCgoKCgoICAgGBgYEBAQEBAQAAAAAAAACAAQiDCw2Gj46Hj46Hj46Hj46Hj46Hj46Hj44HD42GD4eCiYAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIEBAQEBAQGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYKCgoMDAwKCgoGBgYICAgKCgoMDAwICAgGBgYGBgYICAgKCgoKCAoCAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQGBgYGBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYKCgoMDAwKCgoGBgYICAgKCgoMDAwICAgEBAQICAgODg4UFBQODg4AAAAAAAAAAAAAAAAAAAAAAAAMBBAsEjY6HD48ID4+Ij44GD4eCiYWBhwuFDg6Hj48ID4+ID4yFjwWBhwYCB42Gj48Hj4+ID48Hj4wEjoaCCAUBBoqEjQ8Hj4+ID4+Ij44GD4WCBwMDAwODA4ODg4MDAwMDAwMDAwMDgwMDgwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgwMDgwKCgoGBAYCAAQAAAIAAAAAAAAEBAQKCgoMDAwGBgYGBgYICggMDAwGBgYGBgYKCgoKDAoEAgQEBAQKCgoMDAwEBAQAAAAKAhYSBh4SBh4SBh4SBh4OBBoMAhgOAhoOAhoOBBwQBBwSBh4SBh4UBiAWCCAWCCIWCCIYCCIYCiQaDCYcDCYcDCYeDigaDCQSBhwOBBoOBBwOBBwQBBwQBBwWCCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQKCgoGBgYCAgIEBAQGBgYEBAQGBgYGBgYGBgYICAgKCgoICAgICAgMDAwAAAAAAAAEBAQEBAQGBgYKCAgKCgoMDAoKCgoKCgoKCgoKCgoICAgICAgICAgICgoKCgoKCgoKCgoKCgoICAgGBgYEBAQEBAQAAAAAAAAGAAgcCCIcCiIeCiQeCiYeDCYeDCYeDCYeDCYeCiQcCiIYCCACAAIAAAAAAAAAAAAAAAAAAAACAgICAgIEBAQEBAQGBgYGBgYICAgICAgICAgIBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYIBggKCgoICAgICAgMDAwODg4ODg4SEhISEhIQEBAODg4KCAgCAgICAgICAgICAgICAgICAgIEBAQEBAQGBgYGBgYICAgICAgICAgIBgYGBgYEBAQEBAQEBAQEBAQEBAQEBAQGBgYIBggKCgoICAgICAgMDAwODg4MDAwODg4WFhYSEhIMDAwICAgAAAAAAAAAAAAAAAAAAAAAAAAMAg4qEjQ6HD46Hj4+Ij42GD4cCCIWBhwuFDg6Hj46Hj4+ID4yFjoUBBoYCB42Gj46Hj48ID48Hj4uEjgYBh4SBBgqEjQ6Hj48ID4+Ij42GD4YCh4MDAwODA4ODgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAoKDAoKDAoKDAoKDAoKDAwMDAwMDAwKCAoGBAgEAAYAAAIAAAAAAAAEBAQKCgoMDAwEBAQEBAQKCgoMDAwEBAQEBAQKCgoMDAwEAgQEBAQMDAwMDAwEBAQAAAAKAhYSBiASBh4QBB4QBB4QBBwQBBwQBBwOBBwOBBwQBBwQBBwSBB4UBh4UBh4SBh4UBh4UBiAWCCIWCCIYCiQaDCYcDCYcDCYaDCYWCCISBh4SBh4SBh4SBh4WBiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIICAgICAgCAgIEBAQGBgYGBgYEBAQGBgYGBgYICAgKCgoICAgICAgMDAwAAAAAAAAEBAQEBAQGBgYICAgKCgoMDAwKCgoKCgoKCgoKCgoKCgoICAgICAgKCgoKCgoKCgoMCgoKCgoICAgGBgYEBAQEBAQAAAAAAAAMAg4mDC4kDCwkDCwkDCwkDCwkDCwkDCwkDCwkDCwkDCwiCiwEAAYAAAAAAAAAAAAAAAAEAgQEBAQEBAQGBgYGBgYICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQGBgYICAgMDAwQEBAODg4ODg4QEBAQEBASEhIQEBAICAgEBAQEBAQGBgYEAgQCAgICAgIEAgQEBAQEBAQGBgYGBgYICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQEBAQEBAQEBAQGBgYICAgMDAwQEBAODg4ODg4QEBAQEBASEhIUFBQODg4EBAQCAgIGBgYAAAAAAAAAAAAAAAAAAAAAAAAIAgoeDCYsFDQuFjYwFjYoEDAgCiYUBhgiDiosFDQuFjYuFjQmDi4aCCAUBhooEjAuFjYuFjYsFDIoEDAeCiYSBBYeCiQqFDIsFDIuFjQkDioIBAoICAYICggKCggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAYICAYGCAYGCAYGCAYGCAYICAYICAgICAgEBgQAAAAAAAAAAAAAAAAAAAAEBAQICggMDAwEBAQEBAQKCgoMDAwICAgGBgYKCgoMDAwCAgICBAIMDAwMDAwEBAQAAAAIABQWCCASBiASBh4QBB4QBB4SBB4SBB4SBB4SBh4SBiASBiAUBiAUBiAWCCAYCCIYCiQYCiQYCiQaDCQcDCYcDiYcDCYYCCIWCCAQBB4QBB4QBB4SBh4SBiAUBiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgKCgoEBAQEBAQGBgYICAgICAgGBgYGBgYICAgKCgoICAgICAgMDAwAAAAAAAAEBAQEBAQGBgYICAgKCgoMDAoKCgoKCgoKCgoKCgoKCgoICAgICAgKCgoKCgoKCgoKCgoKCgoICAgGBgYEBAQEBAQAAAAAAAAYBh4wFDo0GDw0GD40GD40GD40GD40GD40GD40GD40FjwqEDQMAg4AAAAEBAQEBAQEBAQEBAQEBAQGBgYGBgYICAgICAgKCgoICAgICAgICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwQEBAODg4ICAgGBgYGBgYGBgYEBAQCAgICAgIICAgODg4SEhIEBAQEBAQEBAQEBAQEBAQGBgYGBgYICAgICAgKCgoICAgICAgICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwQEBAODg4ICAgGBgYGBgYGBgYEBAQCAgIEBAQICAgODg4SEhIAAAAAAAAAAAAAAAAAAAAAAAAEBAQGBAYGBAgGBAgGBAgIBggKBgwIBggGBAYGBAgGBAgGBAgIBggKBgwGBggGBAgIBggIBAgIBAgKBgoIBAoCAAIAAAAAAAIAAAIAAAIAAAAAAgAEBAQCAgICAgICAgICAgICBAIEBAQEBAQEBAQEBAQEBAQGBgYGBgYICAYGCAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGCAYICAYGCAYGBgYEBAQCAgIAAAAAAAAAAAAEBAQICggMDAwEBAQEBAQKCgoMDAwICAgGBgYKCgoMDAwCAgICBAIKDAoMDAwEBAQAAAAIABQUCCASBiASBh4QBh4QBB4QBBwQBBwOBBwOBBoOBBwSBh4UBh4UCCAWCCIYCiQaDCYcDCYcDCYcDiYeDigcDCYQBh4QBBwQBB4QBB4QBh4SBh4UBiAWCCAUBiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYMDAwGBgYEBAQGBgYGBgYKCgoICAgGBgYMDAwKCgoKCgoICAgMDAwAAAAAAAACAgIEBAQGBAYICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgKCgoKCgoKCgoKCgoKCgoICAgGBAYEBAQCAgIAAAAEAAYaCCAaCCAcCiIeCiQeCiQeCiQeCiQeCiQeCiQcCiQaCCAYCB4YBh4AAAAEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgKCgoKCgoKCAoICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwMDAwGCAYEBAQEBAQCAgICAgICAgIEBAQMDAwSEhISEhISEhIQEBAEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgKCgoKCgoKCAoICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwMDAwGCAYEBAQEBAQCAgICAgICAgIEBAQMDAwSEhISEhISEhIQEBAAAAAAAAAAAAAAAAAAAAAAAgAKBgoUChgaDCAaDCAaDB4aCh4WChwQBhQWChoaDCAaDCAaDB4YCh4UCBgQBhQYDB4aDCAaDCAaCh4aDCAUBhgMBBASBhYWCBoWCBwWCBoMBA4CAgIEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBgYICAgICAgICAgICAgICAgIBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYICAgGBgYCAgIAAAAAAAAEBAQKCgoMDAwICAgGBgYICgoMDAwICAYGBgYKCggMDAwCAgICBAIKCgoMDAwEBAQAAAAKABYWCCIWCCIWCCIWCCIUCCAQBh4OBBoMAhgKAhgMAhoOBBwSBBwSBh4SBh4SBh4UBiAWCCIWCiIWCiIYCiQWCCISBh4QBBwQBBwQBB4QBh4SBh4SBiAUCCAUBiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQKCgoICAgEBAQGBgYGBgYKCgoKCgoICAgODg4KCgoKDAwICAgMCgoAAAAAAAACAgIEBAQEBAQICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgKCgoKCgoKCgoKCgoKCAoGBgYEBAQEBAQCAgIAAAAQBBQkDC4kDC4mDC4mDjAmDjAmDjAmDjAmDjAmDjAmDDAmDC4kDC4cCCQAAAAGBgYEBAQEBAQEBAQEBAQGBgYICAgKCgoKDAoKCAoICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwKCgoGBgYEBAQCAgIAAAACAgIGBgYMDAwODg4QEBAUFBQQEBAQEBAQEBAGBgYEBAQEBAQEBAQEBAQGBgYICAgKCgoKDAoKCAoICAgGBgYEBAQEBAQEBAQEBAQEBAQEBAQICAgMDAwKCgoGBgYEBAQCAgIAAAACAgIGBgYMDAwODg4QEBAUFBQQEBAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAASBhgwFDg6HD46Hj48Hj4wEjgaCCAcCCIyFjw6HD46Hj46HD4qDjQWBhweCiY2Gj46Hj48Hj42GjwqEDQWBhwYBh4uFDg6HD48Hj48Hj4sEDYMBg4ICggKCgwKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKDAoKDAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoMDAwKCgoEBAQAAAAAAAAEBAQKCgoMDAwICAgGBgYICggMDAwGBgYGBgYICggKDAoEBAQEBAQKCgoMDAwEBAQAAAAKAhYWCCIUCCAUBiASBh4SBh4QBBwOBBoQBBwQBBwSBB4SBh4UBiAWCCIUCCAUBiAWCCIYCCIWCCIWCiIYCCIWCCIWCCISBh4SBiAUCCAWCCIWCCIWCCIWCCISBh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIICAgKCgoEBAQGBgYGBgYKCgoMDAwKCgoMDAwKCgoMDAwICAgKCgoAAAAAAAACAgIEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoKCgoICAoICAgICAgICAoKCgoKCgoKCgoICAgGBgYEBAQEBAQCAgIAAAAgCiowFDowFDowFDoyFjwyFjwyFjwyFjwyFjwyFjwwFDowFDowFDooDjIGAAgEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgIBggGBgYEBAQEBAQEAgQCAgICAgIEBAQEBAQICAgKCgoGBgYEBAQCAgIAAAACAgIGBgYKCgoKCgoKCgoMDAwMDAwODg4QEBAQEBASEhIEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgIBggGBgYEBAQEBAQEAgQCAgICAgIEBAQEBAQICAgKCgoGBgYEBAQCAgIAAAACAgIGBgYKCgoKCgoKCgoMDAwMDAwODg4QEBAQEBASEhIAAAAAAAAAAAAAAAAAAAAAAAASBhgyFjw6Hj48ID4+Ij4wFDgUBhocCCQyGDw6Hj48ID4+ID4qEDQQBBYiDCo4HD46ID4+Ij46HD4oDjAQBBYYBh4wFjo8ID48ID4+Ij4yFDwUChgODg4ODg4ODg4ODgwMDgwMDgwMDAwMDgwMDAwMDAwMDgwODg4ODg4ODg4ODg4ODg4ODg4ODg4ODgwODg4MDgwMDgwMDgwMDgwMDgwMDgwMDgwMDgwODg4ODg4MDAwGBgYAAAAAAAAEBAQKCgoMDAwICAgGBgYICAgMDAwGBgYGBgYKCggKDAoGBgYEBAQKCgoMDAwEBAQAAAAKAhYSBh4QBB4QBBwQBB4QBBwQBBwQBBwQBBwQBBwSBB4SBB4SBh4WCCIWCCIYCCQYCiQaCiYaCiYcDCYcDCYaCiQYCiQWCCIUBiAUBiAUBiAUBiAUCCAWCCISBh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgODg4ICAgGBgYGBgYICAgKCgoKCgoKCgoMDAwMCgwICAgKCgoAAAAAAAACAgICAgIEBAQEBAYICAgKCgoKCgoKCgoKCgoKCgoICAoICAgICAgICAgKCgoKCgoKCgoIBggEBAQEBAQCAgICAgIIAgokDC4wFjgyGDoyGDoyGDoyGDoyGDoyGDoyGDoyGDoyGDoyGDowFjgmDjASBBYGBgYEBAQEBAQEBAQEAgQEBAQCAgICAgIEBAQEBAQCAgICAgICAgICAgIEBAQEBAQGBgYIBggEBAQEBAQCAgIAAAAEBAQICAgICAgICAgKCgoKCgoKCgoMDAwQEBASEhISEhISEhIEBAQEBAQEBAQEBAQEAgQEBAQCAgICAgIEBAQEBAQCAgICAgICAgICAgIEBAQEBAQGBgYIBggEBAQEBAQCAgIAAAAEBAQICAgICAgICAgKCgoKCgoKCgoMDAwQEBASEhISEhISEhIAAAAAAAAAAAAAAAAAAAAAAAAQBhQuFDg4Gj46HD46HD4wEjgcCCQcCCIwFDo4HD46HD44HD4qDjQYCB4eCiY2Gj44HD46Hj42GDwsEDYaCCAYBh4sFDY4Gj44HD46HD4oDjAMBg4KDAoMDAoMDAwKCgoKCgoKCgoKCgoKCgoKCggICggICggKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICggICggICggICggICAgICAgICAgICAgICggICgoICAgEBAQAAAAAAAACBAIKCggMDAwICAgGCAYICAgMDAwGBgYGBgYICggKCgoGBgYEBAQKCgoMDAwEBAQAAAAMAhYSBh4QBBwQBBwOBBoOBBoOAhoOBBwOBBwOBBoOBBoOBBoSBh4UBiAUBiAWCCIYCCQYCiQWCCIYCiQYCiQWCCISBh4UBiASBB4QBBwSBh4QBBwQBB4SBh4SBh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYQEBAODg4GBgYGBgYICAgKCgoKCgoKCgoMDAwKDAwICAgKCAoAAAAAAAACAgICAgIEBAQEBAQGBgYICAgKCgoKCgoKCgoKCgoICAoICAgICAgICAgKCgoKCgoICAgGBgYEBAQEBAQCAgICAgIaCCAWBhwUBBoWBhwYBh4YBh4YBh4YBh4YBh4YBh4YBh4WBh4WBhwUBBgYBh4cCCQICAgEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQGBgYEBAQEBAQCAgICAgICAgIEBAQGBgYICAgKCgoKCgoKCgoICAgKCgoMDAwSEhIUFBQSEhIQEBAEBAQEBAQEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQEBAQGBgYEBAQEBAQCAgICAgICAgIEBAQGBgYICAgKCgoKCgoKCgoICAgKCgoMDAwSEhIUFBQSEhIQEBAAAAAAAAAAAAAAAAAAAAAAAAAGBAgQBhQUCBgWChoUCBgUCBgSBhQMBA4SCBYUChgWChoUCBgSCBYQBhIMBA4UCBgWChoWChoUCBgUCBgOBhIIAgoMBBAQBhQSBhYSBhYIAgoCAgIEBAQEBAQGBgYGBgYGBgYGBgYGBgYGBgQGBgQGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgQEBgQEBgQEBgQEBAQEBAQEBAQEBAQEBAQEBgQEBgQEBAQCAgIAAAAAAAACAgIICggMDAwICAgGBgYICAgKDAoGBgYGBgYICggKCgoGBgYEBAQKCggKDAoEBAQAAAAMAhgQBBwQBBwOBBwQBBwQBBwQBBwSBh4UBiASBh4UBiAWCCIWCCIYCCIYCCIYCiQYCCIYCiQWCCIUCCAUCCAWCCIYCiIWCiIUCCASBh4SBh4SBh4QBBwSBh4UBiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQQEBAQEBAODg4MDAwKCgoKCgoKCgoKCgoMDAwMDAwICAgKCAgAAAAAAAACAgICAgICAgIEBAQGBgYICAgICAgKCgoKCgoKCAoICAoICAgICAgICAgKCAoICAgICAgGBgYEBAQCAgICAgIAAAAeCigmDjAoDjIqEDQqEDQqEDQqEDQqEDQqEDQqEDQqEDQqEDQqEDQoDjImDDAeCCQGBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYGBgYGBgYEBAQEBAQEBAQCAgICAgIEBAQGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoMDAwQEBASEhIQEBASEhIEBAQEAgQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQGBgYGBgYGBgYEBAQEBAQEBAQCAgICAgIEBAQGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoMDAwQEBASEhIQEBASEhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIICAgMDAwGCAYGCAYICggMDAwICAgGCAYKCgoKCgoGBgYEBgQKCggKCgoGBgYAAAAKAhgOBBwQBBwQBBwQBBwQBBwSBB4SBh4UBh4UBiAWCCAYCiQYCiQaCiQaCiQaCiQcDCYaCiQaCiYaCiQaCiYaCiYaCiQYCiQYCiIWCCIYCiIWCCAWCCAWCCIUCCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIMDAwOEBAODgwMDgwMDAwKCgoKCgoMDAwODg4QEBAKCgoKCAgAAAAAAAAAAAACAgICAgIEBAQEBAQGBgYICAgICAgICAgKCAoICAoICAgICAgICAgICAgICAgGBgYEBAQEBAQCAgICAgIAAAAqDjQuEjguFDowFDowFDowFDowFDowFDowFDowFDowFDowFDowFDouFDouEjgoDjIKCgoEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoMDAwSEhISEhIQEBAODg4GBgYEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQEBAQGBgYGBgYGBgYGBgYGBgYICAgKCgoKCgoKCgoKCgoKCgoMDAwSEhISEhIQEBAODg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAIICggMDAwICAgGBgYGBgYKCAoEBAQEBAQICAgKCgoGBgYEBAQKCgoMDAwGBgYAAAAMAhgOAhoOBBwQBBwQAhoQBBwOBBwOBBwQBBwSBh4UBiAYCCIYCiQYCiQaCiQcDCYcDCYcDCYaCiYaDCYaDCYaCiQcDCYaCiQYCCIWCCIWCCIWCCIWCCIWCCIUBiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgODg4MDAwMDAwMDAwMDAwMDAwMDAwMDAwODg4KCgoICAgAAAAAAAAAAAACAgICAgIEBAQEBAQGBgYGBgYICAgICAgICAgICAgICAgICAgICAgICAgGBgYGBgYEBAQEBAQCAgICAgIAAAAwFDo2Gj42Gj42Gj44Gj44Gj44HD44HD44Gj44HD44Gj42Gj42Gj42Gj40GD4sEjYODg4KCgoEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgICAgGBgYGBgYICAgICAgICAgICAgICAgICAgICAgKCgoODg4QEBAODg4MDAwICAgIBggEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBgYICAgICAgICAgGBgYGBgYICAgICAgICAgICAgICAgICAgICAgKCgoODg4QEBAODg4MDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIGBgYICAgGBgYAAgAAAAACAAIAAAAAAAAAAAAGBgYCAgIAAAAGBgYICAgCAgIAAAAKAhYOAhoOBBoQBBwQBBwQBB4QBB4UBiAWCCIYCCIWCCAUBiAWCCAWCCIWCCIWCCIWCCIYCCIaCiQaCiQYCiQYCCQYCCQYCCIWCCIUCCAUBiAUBh4SBh4SBh4SBB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEBAQEBAQGBgYGBgYGBgYIBgYICAgICAgGBgYGBggICAgGBggGBgYGBgYEBAQEBAQCAgIAAAAAAAAgCigmDi4mEC4oEDAoEDAoEDAqEDAqEDAoEDAoEDAoEDAoEDAoEC4mDi4kDCweCiYMDAwKCgoGBgYEBAQGBAYGBgYGBgYGBgYGBAYGBAYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYICAgMDAwMDAwKCgoKCgoGBgYGBgYGBgYEBAQGBAYGBgYGBgYGBgYGBAYGBAYGBgYGBgYGBgYGBgYGBgYGBgYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgGBgYICAgMDAwMDAwKCgoKCgo"

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const disk_1 = __webpack_require__(25);
const diskmodel_1 = __webpack_require__(29);
let OBJ = __webpack_require__(1);
const index_js_1 = __webpack_require__(1);
class World {
    constructor(gl, worldData, meshes, mat) {
        meshes.DiskA.addMaterialLibrary(mat);
        meshes.DiskB.addMaterialLibrary(mat);
        meshes.DiskC.addMaterialLibrary(mat);
        meshes.DiskD.addMaterialLibrary(mat);
        meshes.DiskE.addMaterialLibrary(mat);
        this.diskAModel = new diskmodel_1.DiskModel(meshes.DiskA);
        this.diskBModel = new diskmodel_1.DiskModel(meshes.DiskB);
        this.diskCModel = new diskmodel_1.DiskModel(meshes.DiskC);
        this.diskDModel = new diskmodel_1.DiskModel(meshes.DiskD);
        this.diskEModel = new diskmodel_1.DiskModel(meshes.DiskE);
        this.worldData = worldData;
        this.disks = [];
        this.diskAModel.init(gl);
        this.diskBModel.init(gl);
        this.diskCModel.init(gl);
        this.diskDModel.init(gl);
        this.diskEModel.init(gl);
        const lines = worldData.split('\n');
        if (lines[0].indexOf("version 1") == -1)
            console.warn("Can't read Disk World File");
        let count = parseInt(lines[2]);
        lines.splice(0, 3);
        for (let i = 0; i < count; i++) {
            let elements = lines[i].split("\t");
            let x = parseFloat(elements[0]);
            let z = parseFloat(elements[1]);
            let radius = parseFloat(elements[2]);
            let model = null;
            let terrain = null;
            switch (true) {
                case (radius < 8):
                    model = this.diskAModel;
                    terrain = disk_1.Terrain.RED_ROCK;
                    break;
                case (radius <= 12):
                    model = this.diskBModel;
                    terrain = disk_1.Terrain.LEAFY;
                    break;
                case (radius <= 20):
                    model = this.diskCModel;
                    terrain = disk_1.Terrain.ICY;
                    break;
                case (radius <= 30):
                    model = this.diskDModel;
                    terrain = disk_1.Terrain.SANDY;
                    break;
                case (radius > 30):
                    model = this.diskEModel;
                    terrain = disk_1.Terrain.GREY_ROCK;
                    break;
            }
            if (!model)
                throw "No Disk Model found for radius: " + radius;
            this.disks.push(new disk_1.Disk(model, terrain, radius, x, 0, z));
            this.disks.forEach(disk => {
                disk.init(gl);
            });
        }
    }
    static loadWorldMeshes() {
        return __awaiter(this, void 0, void 0, function* () {
            return OBJ.downloadModels([
                {
                    name: 'DiskA',
                    obj: "/assets/models/environment/disks/DiskA.obj",
                    downloadMtlTextures: false
                },
                {
                    name: 'DiskB',
                    obj: "/assets/models/environment/disks/DiskB.obj",
                    downloadMtlTextures: false
                },
                {
                    name: 'DiskC',
                    obj: "/assets/models/environment/disks/DiskC.obj",
                    downloadMtlTextures: false
                },
                {
                    name: 'DiskD',
                    obj: "/assets/models/environment/disks/DiskD.obj",
                    downloadMtlTextures: false
                },
                {
                    name: 'DiskE',
                    obj: "/assets/models/environment/disks/DiskE.obj",
                    downloadMtlTextures: false
                }
            ]);
        });
    }
    static loadWorldMat() {
        return __awaiter(this, void 0, void 0, function* () {
            let mat = new index_js_1.MaterialLibrary(__webpack_require__(30));
            yield OBJ.downloadMtlTextures(mat, window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/assets/models/environment/disks/');
            return mat;
        });
    }
    static loadWorldData() {
        return __awaiter(this, void 0, void 0, function* () {
            return __webpack_require__(31);
        });
    }
    draw(gl, shader) {
        this.disks.forEach(disk => {
            disk.draw(gl, shader);
        });
    }
}
exports.World = World;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(2);
const meshlessmodel_1 = __webpack_require__(26);
const Random = __webpack_require__(27);
const noisefield_1 = __webpack_require__(28);
var Terrain;
(function (Terrain) {
    Terrain[Terrain["RED_ROCK"] = 0] = "RED_ROCK";
    Terrain[Terrain["LEAFY"] = 1] = "LEAFY";
    Terrain[Terrain["ICY"] = 2] = "ICY";
    Terrain[Terrain["SANDY"] = 3] = "SANDY";
    Terrain[Terrain["GREY_ROCK"] = 4] = "GREY_ROCK";
})(Terrain = exports.Terrain || (exports.Terrain = {}));
class Disk {
    constructor(diskModel, type, radius, x, y, z) {
        if (!diskModel.initialized)
            throw "DiskModel was not initialized";
        this.diskModel = diskModel;
        this.position = gl_matrix_1.vec3.fromValues(x, y, z);
        this.radius = radius;
        this.type = type;
    }
    init(gl) {
        this.generateHeightMapModels(gl);
    }
    generateHeightMapModels(gl) {
        switch (this.type) {
            case Terrain.RED_ROCK:
                this.heightMapSize = 16;
                this.initRedRockHeightMap();
                break;
            case Terrain.LEAFY:
                this.heightMapSize = 32;
                this.initLeafyHeightMap();
                break;
            case Terrain.ICY:
                this.heightMapSize = 48;
                this.initIcyHeightMap();
                break;
            case Terrain.SANDY:
                this.heightMapSize = 64;
                this.initSandyHeightMap();
                break;
            case Terrain.GREY_ROCK:
                this.heightMapSize = 80;
                this.initGreyRockHeightMap();
                break;
        }
        this.generateHeightMapModel(gl);
    }
    generateHeightMapModel(gl) {
        let vert_buffer_size = (this.heightMapSize + 1) * (this.heightMapSize + 1);
        let verts = new Array(vert_buffer_size);
        let count = 0;
        for (let x = 0; x < this.heightMapSize + 1; x++) {
            for (let z = 0; z < this.heightMapSize + 1; z++) {
                //Position
                verts[count] = {
                    m_x: x - (this.heightMapSize / 2),
                    m_y: this.heightMap[x][z],
                    m_z: z - (this.heightMapSize / 2),
                    m_s: x / 16.0,
                    m_t: z / 16.0,
                    m_nx: 0, m_ny: 0, m_nz: 0
                };
                count++;
            }
        }
        let index_buffer_size = this.heightMapSize * (this.heightMapSize) * 6;
        let indices = new Array(index_buffer_size);
        count = 0;
        //Create triangles using indices which reference vertices in the triangle strip
        for (let i = 0; i < vert_buffer_size - (this.heightMapSize + 1); i += (this.heightMapSize + 1)) {
            for (let j = 0; j < this.heightMapSize; j++) {
                let v = i + j;
                //0,1,2
                indices[count++] = v + (this.heightMapSize + 1);
                indices[count++] = v;
                indices[count++] = v + (this.heightMapSize + 1) + 1;
                //2,1,3
                indices[count++] = v + (this.heightMapSize + 1) + 1;
                indices[count++] = v;
                indices[count++] = v + 1;
            }
        }
        //Calculate the normals. For each faces normal we add it to the normals of the vertices used.
        //Normals will be normalized in fragment shader
        for (let i = 0; i < index_buffer_size - 2; i += 3) {
            let i1 = indices[i];
            let i2 = indices[i + 1];
            let i3 = indices[i + 2];
            //Calculate normal for this face
            let v1 = gl_matrix_1.vec3.fromValues(verts[i1].m_x, verts[i1].m_y, verts[i1].m_z);
            let v2 = gl_matrix_1.vec3.fromValues(verts[i2].m_x, verts[i2].m_y, verts[i2].m_z);
            let v3 = gl_matrix_1.vec3.fromValues(verts[i3].m_x, verts[i3].m_y, verts[i3].m_z);
            let dir = gl_matrix_1.vec3.fromValues(0, 0, 0);
            let diff = gl_matrix_1.vec3.fromValues(0, 0, 0);
            gl_matrix_1.vec3.subtract(dir, v2, v1);
            gl_matrix_1.vec3.subtract(diff, v3, v1);
            gl_matrix_1.vec3.cross(dir, dir, diff);
            //Add to the existing normals
            verts[i1].m_nx += dir[0];
            verts[i1].m_ny += dir[1];
            verts[i1].m_nz += dir[2];
            verts[i2].m_nx += dir[0];
            verts[i2].m_ny += dir[1];
            verts[i2].m_nz += dir[2];
            verts[i3].m_nx += dir[0];
            verts[i3].m_ny += dir[1];
            verts[i3].m_nz += dir[2];
        }
        let d = verts.map(o => [o.m_x, o.m_y, o.m_z, o.m_nx, o.m_ny, o.m_nz, o.m_s, o.m_t]);
        let data = [].concat.apply([], d);
        this.heightMapModel = new meshlessmodel_1.MeshlessModel(data, indices);
        this.heightMapModel.init(gl);
        this.heightMapModel.setTexture(this.diskModel.textures[2]);
    }
    initRedRockHeightMap() {
        this.heightMap = [];
        let heights = [];
        heights.push(0, 0);
        for (let i = 2; i <= this.heightMapSize / 2; i++) {
            let a = heights[i - 1];
            heights.push(Math.round((a + Math.random() * (3) - 1) * 1e1) / 1e1);
        }
        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = [];
            let max = x > this.heightMapSize / 2 ? this.heightMapSize - x : x;
            for (let z = 0; z <= this.heightMapSize; z++) {
                if (z > this.heightMapSize - max)
                    max--;
                let a = z;
                if (a > max)
                    a = max;
                this.heightMap[x].push(heights[a]);
            }
        }
    }
    initSandyHeightMap() {
        this.heightMap = [];
        let ns = new noisefield_1.Noisefield(16, 8, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF));
        let xz_6 = new Array(this.heightMapSize + 1);
        let pow_divisor = (1.0 - Math.pow(0.5, 6));
        for (let x = 0; x <= this.heightMapSize; x++) {
            let ux = x / this.heightMapSize;
            xz_6[x] = Math.max(Math.pow(ux, 6), Math.pow(1.0 - ux, 6));
        }
        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = [];
            for (let z = 0; z <= this.heightMapSize; z++) {
                let h = ns.perlineNoise(z, x);
                let f = (1 - Math.max(xz_6[x], xz_6[z])) / pow_divisor;
                this.heightMap[x].push(h * f);
            }
        }
    }
    initGreyRockHeightMap() {
        this.heightMap = [];
        let ns = [
            new noisefield_1.Noisefield(32, 1.0, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
            new noisefield_1.Noisefield(16, 7.0, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
            new noisefield_1.Noisefield(8, 5.0, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
            new noisefield_1.Noisefield(4, 3.5, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
            new noisefield_1.Noisefield(2, 2.5, Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF), Random.randi(0xFFFFFFFF)),
        ];
        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = [];
            for (let z = 0; z <= this.heightMapSize; z++) {
                let h = ns[0].perlineNoise(z, x)
                    + ns[1].perlineNoise(z, x)
                    + ns[2].perlineNoise(z, x)
                    + ns[3].perlineNoise(z, x)
                    + ns[4].perlineNoise(z, x);
                let ux = x / this.heightMapSize;
                let uy = z / this.heightMapSize;
                let f = (1 - Math.max(Math.max(Math.pow(ux, 6), Math.pow(1.0 - ux, 6)), Math.max(Math.pow(uy, 6), Math.pow(1.0 - uy, 6)))) / (1.0 - Math.pow(0.5, 6));
                this.heightMap[x].push(h * f);
            }
        }
    }
    initIcyHeightMap() {
        let points = [];
        let h = this.heightMapSize / 2;
        for (let i = 0; i < 200; i++) {
            let d1 = Math.random() * h;
            let d2 = Math.random() * h;
            let d3 = Math.random() * h;
            let d4 = Math.random() * h;
            let d = Math.max(d1, d2, d3, d4);
            let a = Math.random() * Math.PI * 2;
            let x = (h + Math.cos(a) * d);
            let z = (h + Math.sin(a) * d);
            let m = (h - d) * 0.7;
            let y = Math.random() * (m + m) - m;
            points.push([x, y, z]);
        }
        this.heightMap = new Array(this.heightMapSize + 1);
        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = new Array(this.heightMapSize + 1);
            for (let z = 0; z <= this.heightMapSize; z++) {
                let min = 0, max = 0;
                for (let i = 0; i < points.length; i++) {
                    let distance = Math.sqrt(Math.pow(points[i][0] - x, 2) + Math.pow(points[i][2] - z, 2)) * 0.7;
                    let p = points[i][1] - distance;
                    if (p > max)
                        max = p;
                    let n = points[i][1] + distance;
                    if (n < min)
                        min = n;
                }
                this.heightMap[x][z] = max + (-min);
            }
        }
    }
    initLeafyHeightMap() {
        //Math.random() * (max - min) + min;
        let LL = Math.random() * (2) - 1;
        let LC = Math.random() * (2) - 1;
        let LR = Math.random() * (2) - 1;
        let RI = Math.random() * (2) - 1;
        let RM = Math.random() * (2) - 1;
        let RO = Math.random() * (2) - 1;
        let a1 = Random.randi(7);
        let a2 = Random.randi(7);
        let ARM_COUNT = a1 < a2 ? a1 : a2;
        let ARM_RADIANS = Math.random() * (Math.PI * 2);
        let AI = Math.random();
        let AM = Math.random();
        let AO = Math.random();
        if (Math.random() > 0.5) {
            AI = -AI;
            AM = -AM;
            AO = -AO;
        }
        this.heightMap = new Array(this.heightMapSize + 1);
        for (let x = 0; x <= this.heightMapSize; x++) {
            this.heightMap[x] = new Array(this.heightMapSize + 1);
            for (let z = 0; z <= this.heightMapSize; z++) {
                let ux = x / this.heightMapSize;
                let uy = z / this.heightMapSize;
                let x2 = ux * 2 - 1;
                let y2 = uy * 2 - 1;
                let dist = Math.min(Math.sqrt(x2 * x2 + y2 * y2), 1);
                let radians = Math.atan2(y2, x2);
                let ll = Math.pow(ux, 4) * (1 - ux) * 12;
                let lc = (Math.cos(Math.PI * x2) + 1) * 0.5;
                let lr = Math.pow((1 - ux), 4) * ux * 12;
                let lsum = ll * LL + lc * LC + lr * LR;
                let ri = Math.pow(Math.max(1 - dist, 0), 2);
                let rm = Math.sin(Math.PI * Math.min(Math.pow(dist, 0.8) * (4 / 3), 1));
                let ro = Math.max(Math.sin(Math.PI * Math.pow(dist, 1.6)), 0);
                let rsum = ri * RI + rm * RM + ro * RO;
                let ai = (Math.sqrt(dist) - dist) * 4;
                let am = Math.pow(dist, 2) * Math.pow((1 - dist), 2) * 16;
                let ao = (Math.sqrt(1 - dist) - (1 - dist)) * 4;
                let asum = ai * AI + am * AM + ao * AO;
                let non_arm_height = lsum * rsum;
                let arm_radians = radians * ARM_COUNT + ARM_RADIANS;
                let arm_magnitude = (Math.sin(arm_radians) + 1.0) * 0.5;
                let arm_height = arm_magnitude * asum;
                this.heightMap[x][z] = non_arm_height * 5 + arm_height * 3;
            }
        }
    }
    draw(gl, shader) {
        this.drawDiskModel(gl, shader);
        this.drawHeightMapModel(gl, shader);
    }
    drawDiskModel(gl, shader) {
        let model = gl_matrix_1.mat4.create();
        //Center the squares in the disk
        let pos = gl_matrix_1.vec3.fromValues(this.position[0], this.position[1], this.position[2]);
        gl_matrix_1.mat4.translate(model, model, pos);
        gl_matrix_1.mat4.scale(model, model, gl_matrix_1.vec3.fromValues(this.radius, 1, this.radius));
        shader.setMat4("model", model);
        this.diskModel.draw(gl);
    }
    drawHeightMapModel(gl, shader) {
        let model = gl_matrix_1.mat4.create();
        //Center the squares in the disk
        let pos = gl_matrix_1.vec3.fromValues(this.position[0], this.position[1], this.position[2]);
        let corner = this.radius * Math.SQRT2 / 2;
        pos[1] += 0.00001;
        gl_matrix_1.mat4.translate(model, model, pos);
        gl_matrix_1.mat4.scale(model, model, gl_matrix_1.vec3.fromValues(corner * 2 / this.heightMapSize, 1, corner * 2 / this.heightMapSize));
        shader.setMat4("model", model);
        this.heightMapModel.draw(gl);
    }
}
exports.Disk = Disk;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MeshlessModel {
    constructor(data, indices) {
        this.data = data;
        this.indices = indices;
        this.stride = 8;
    }
    init(gl) {
        this.VAO = gl.createVertexArray();
        this.buffer = gl.createBuffer();
        this.index_buffer = gl.createBuffer();
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.data), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, true, this.stride * 4, 0);
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, true, this.stride * 4, 12);
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 2, gl.FLOAT, true, this.stride * 4, 24);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
        let grey = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, grey);
        const pixel = new Uint8Array([220, 220, 220, 255]); // opaque blue
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, pixel);
        this.texture = grey;
        this.initialized = true;
    }
    generateArrayBuffer(gl, data, type, itemsize) {
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, type);
        buffer.itemSize = itemsize;
        buffer.numItems = data.length / itemsize;
        return buffer;
    }
    setTexture(texture) {
        this.texture = texture;
    }
    draw(gl) {
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
        gl.bindVertexArray(null);
    }
}
exports.MeshlessModel = MeshlessModel;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//Return random signed int
function randi(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
exports.randi = randi;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Noisefield {
    constructor(grid_size, amplitude, x1, x2, y1, y2, q0, q1, q2) {
        this.GRID_SIZE = grid_size;
        this.amplitude = amplitude;
        this.SEED_X1 = x1;
        this.SEED_X2 = x2;
        this.SEED_Y1 = y1;
        this.SEED_Y2 = y2;
        this.SEED_Q0 = q0;
        this.SEED_Q1 = q1;
        this.SEED_Q2 = q2;
    }
    pseudorandom(x, y) {
        let n = (this.SEED_X1 * x) + (this.SEED_Y1 * y);
        let quad_term = this.SEED_Q2 * n * n +
            this.SEED_Q1 * n +
            this.SEED_Q0;
        return quad_term +
            (this.SEED_X2 * x) +
            (this.SEED_Y2 * y);
    }
    fade(n) {
        //result = (1 - cos(n * 3.14159265f)) * 0.5f;
        //result = -2 * (n*n*n) + 3 * (n*n);
        let result = 6 * (n * n * n * n * n) - 15 * (n * n * n * n) + 10 * (n * n * n);
        //result = n;
        return result;
    }
    lattice(x, y) {
        let value = this.pseudorandom(x, y);
        let radians = value * 2 * Math.PI;
        return { x: Math.cos(radians), y: Math.sin(radians) };
    }
    perlineNoise(x, y) {
        let x0 = Math.floor(x / this.GRID_SIZE);
        let y0 = Math.floor(y / this.GRID_SIZE);
        let x_frac = x / this.GRID_SIZE - x0;
        let y_frac = y / this.GRID_SIZE - y0;
        let x1 = x0 + 1;
        let y1 = y0 + 1;
        let lattice00 = this.lattice(x0, y0);
        let lattice01 = this.lattice(x0, y1);
        let lattice10 = this.lattice(x1, y0);
        let lattice11 = this.lattice(x1, y1);
        let direction00 = { x: -x_frac, y: -y_frac };
        let direction01 = { x: -x_frac, y: 1 - y_frac };
        let direction10 = { x: 1 - x_frac, y: -y_frac };
        let direction11 = { x: 1 - x_frac, y: 1 - y_frac };
        let value00 = this.dotProduct(lattice00, direction00);
        let value01 = this.dotProduct(lattice01, direction01);
        let value10 = this.dotProduct(lattice10, direction10);
        let value11 = this.dotProduct(lattice11, direction11);
        let x_fade1 = this.fade(x_frac);
        let y_fade1 = this.fade(y_frac);
        let x_fade0 = 1 - x_fade1;
        let y_fade0 = 1 - y_fade1;
        let value0 = value00 * y_fade0 + value01 * y_fade1;
        let value1 = value10 * y_fade0 + value11 * y_fade1;
        let value = value0 * x_fade0 + value1 * x_fade1;
        let result = value * this.amplitude;
        return result;
    }
    dotProduct(a, b) {
        return a.x * b.x + a.y * b.y;
    }
}
exports.Noisefield = Noisefield;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const basicmodel_1 = __webpack_require__(3);
class DiskModel extends basicmodel_1.BasicModel {
    constructor(mesh) {
        super(mesh);
    }
    init(gl) {
        super.init(gl);
        //Initialize the textures: side tex, side black, top tex
        if (!this.initTexture(gl, 0)) {
            console.warn("Disk model texture 0 wasn't downloaded");
        }
        let blackTexture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, blackTexture);
        const pixel = new Uint8Array([0, 0, 0, 255]); // opaque black
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, pixel);
        this.setTexture(blackTexture, 1);
        if (!this.initTexture(gl, 2)) {
            console.warn("Disk model texture 2 wasn't downloaded");
        }
    }
}
exports.DiskModel = DiskModel;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "#\r\n#  Disks.mtl\r\n#\r\n\r\nnewmtl diskA\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskA.jpg\r\n\r\nnewmtl diskA_side\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskA_side.jpg\r\n\r\nnewmtl diskB\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskB.jpg\r\n\r\nnewmtl diskB_side\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskB_side.jpg\r\n\r\nnewmtl diskC\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskC.jpg\r\n\r\nnewmtl diskC_side\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskC_side.jpg\r\n\r\nnewmtl diskD\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskD.jpg\r\n\r\nnewmtl diskD_side\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskD_side.jpg\r\n\r\nnewmtl diskE\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskE.jpg\r\n\r\nnewmtl diskE_side\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd DiskE_side.jpg\r\n\r\nnewmtl flat_black\r\nillum 0\r\nKd 0.00 0.00 0.00\r\nKa 0.00 0.00 0.00\r\n\r\nnewmtl rainbow\r\nillum 0\r\nKd 1.00 1.00 1.00\r\nKa 0.00 0.00 0.00\r\nmap_Kd Rainbow.jpg\r\n"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "DISK version 1\r\n159.835\r\n61\r\n5.61676\t34.6006\t6.55774\t\r\n4.5521\t49.1698\t8.0504\t\r\n6.29182\t17.456\t10.6\t\r\n19.2771\t30.399\t7.7341\t\r\n-5.63964\t-6.61964\t16.2699\t\r\n-34.8144\t-13.928\t13.8063\t\r\n17.7224\t44.1054\t6.06006\t\r\n16.9081\t56.4082\t6.2697\t\r\n-51.3318\t-2.99788\t6\t\r\n-61.6816\t3.18528\t6.0561\t\r\n2.67116\t-44.403\t22.4166\t\r\n-61.7976\t-8.87178\t6.00154\t\r\n20.3596\t-15.7251\t11.2777\t\r\n53.2492\t45.6392\t29.4998\t\r\n28.4818\t20.19\t6.01188\t\r\n-56.16\t-23.3322\t9.51902\t\r\n29.7014\t5.71352\t8.51594\t\r\n-4.05204\t60.2884\t6.00862\t\r\n-73.0756\t12.5486\t8.6916\t\r\n-13.4131\t76.324\t12.5593\t\r\n-73.0176\t-2.86702\t6.72414\t\r\n-72.7376\t-17.5524\t7.96394\t\r\n-69.9778\t-32.1062\t6.84908\t\r\n-21.5382\t-69.3478\t12.3445\t\r\n-43.1694\t-31.9836\t6.08872\t\r\n10.4786\t-94.7314\t28.5138\t\r\n68.47\t106.494\t33.2292\t\r\n-55.834\t-44.7244\t11.8756\t\r\n-90.5932\t35.5246\t20.2006\t\r\n-42.9236\t-77.4838\t10.5364\t\r\n58.784\t-6.65676\t23.0884\t\r\n30.7258\t-49.0178\t6.01498\t\r\n-23.5632\t-87.8066\t6.22514\t\r\n-50.58\t-62.8268\t6\t\r\n35.7504\t-30.2686\t9.89758\t\r\n-48.2148\t94.9572\t26.9168\t\r\n29.0574\t108.357\t6.22754\t\r\n-82.3006\t-74.0996\t27.664\t\r\n31.4576\t120.811\t6.45576\t\r\n106.947\t61.002\t26.3522\t\r\n-71.8658\t55.0002\t6.81826\t\r\n-14.8019\t95.3308\t6.4983\t\r\n-87.6702\t-35.6198\t11.1887\t\r\n39.751\t-56.9514\t6.00168\t\r\n-1.16644\t108.714\t12.6072\t\r\n42.0084\t-44.884\t6.0011\t\r\n-115.571\t-43.2198\t17.7283\t\r\n-10.0822\t-128.608\t11.1144\t\r\n-72.6896\t69.6884\t7.89294\t\r\n39.1888\t-68.9426\t6.0027\t\r\n42.1076\t-80.6828\t6.09486\t\r\n-59.1878\t-102.758\t7.0319\t\r\n-99.9152\t88.4796\t25.1878\t\r\n-117.585\t54.717\t12.919\t\r\n50.7834\t-36.2758\t6.29124\t\r\n53.196\t-63.5894\t8.99256\t\r\n-59.0672\t-116.049\t6.25942\t\r\n-113.225\t21.0036\t6.6893\t\r\n-72.514\t-107.455\t7.09802\t\r\n81.1576\t23.6564\t6.0266\t\r\n69.0202\t-52.9854\t10.0561\t\r\n"

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let OBJ = __webpack_require__(1);
const skyboxmodel_1 = __webpack_require__(33);
class Skybox {
    constructor(gl, mesh) {
        this.model = new skyboxmodel_1.SkyboxModel(mesh);
        this.model.init(gl);
    }
    draw(gl) {
        this.model.draw(gl);
    }
    static load() {
        return __awaiter(this, void 0, void 0, function* () {
            return OBJ.downloadModels([
                {
                    name: 'Skybox',
                    obj: "/assets/models/environment/skybox/Skybox.obj",
                    mtl: "/assets/models/environment/skybox/Skybox.mtl"
                }
            ]);
        });
    }
}
exports.Skybox = Skybox;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const basicmodel_1 = __webpack_require__(3);
class SkyboxModel extends basicmodel_1.BasicModel {
    constructor(mesh) {
        super(mesh);
    }
    init(gl) {
        super.init(gl);
        //Initialize the textures: side tex, side black, top tex
        if (!this.initTexture(gl, 0, true)) {
            console.warn("Skybox model texture 0 wasn't downloaded");
        }
    }
    draw(gl) {
        gl.bindVertexArray(this.VAO);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
        this.textures.forEach((texture, index) => {
            let is = this.mesh.vertexBuffer.itemSize;
            let material = this.mesh.materials[index];
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.drawElements(gl.TRIANGLES, this.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, material.offset * is * byteSize);
        });
        gl.bindVertexArray(null);
    }
}
exports.SkyboxModel = SkyboxModel;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * A main loop useful for games and other animated applications.
 */
(function(root) {

	// The amount of time (in milliseconds) to simulate each time update()
	// runs. See `MainLoop.setSimulationTimestep()` for details.
	var simulationTimestep = 1000 / 60,

			// The cumulative amount of in-app time that hasn't been simulated yet.
			// See the comments inside animate() for details.
			frameDelta = 0,

			// The timestamp in milliseconds of the last time the main loop was run.
			// Used to compute the time elapsed between frames.
			lastFrameTimeMs = 0,

			// An exponential moving average of the frames per second.
			fps = 60,

			// A factor that affects how heavily to weight more recent seconds'
			// performance when calculating the average frames per second. Valid values
			// range from zero to one inclusive. Higher values result in weighting more
			// recent seconds more heavily.
			fpsAlpha = 0.9,

			// The minimum duration between updates to the frames-per-second estimate.
			// Higher values increase accuracy, but result in slower updates.
			fpsUpdateInterval = 1000,

			// The timestamp (in milliseconds) of the last time the `fps` moving
			// average was updated.
			lastFpsUpdate = 0,

			// The number of frames delivered since the last time the `fps` moving
			// average was updated (i.e. since `lastFpsUpdate`).
			framesSinceLastFpsUpdate = 0,

			// The number of times update() is called in a given frame. This is only
			// relevant inside of animate(), but a reference is held externally so that
			// this variable is not marked for garbage collection every time the main
			// loop runs.
			numUpdateSteps = 0,

			// The minimum amount of time in milliseconds that must pass since the last
			// frame was executed before another frame can be executed. The
			// multiplicative inverse caps the FPS (the default of zero means there is
			// no cap).
			minFrameDelay = 0,

			// Whether the main loop is running.
			running = false,

			// `true` if `MainLoop.start()` has been called and the most recent time it
			// was called has not been followed by a call to `MainLoop.stop()`. This is
			// different than `running` because there is a delay of a few milliseconds
			// after `MainLoop.start()` is called before the application is considered
			// "running." This delay is due to waiting for the next frame.
			started = false,

			// Whether the simulation has fallen too far behind real time.
			// Specifically, `panic` will be set to `true` if too many updates occur in
			// one frame. This is only relevant inside of animate(), but a reference is
			// held externally so that this variable is not marked for garbage
			// collection every time the main loop runs.
			panic = false,

			// The object most likely to have `requestAnimationFrame` attached is
			// `window`, if it's available in this environment. Otherwise, fall back to
			// the root context.
			windowOrRoot = typeof window === 'object' ? window : root,

			// The function that runs the main loop. The unprefixed version of
			// `window.requestAnimationFrame()` is available in all modern browsers
			// now, but node.js doesn't have it, so fall back to timers. The polyfill
			// is adapted from the MIT-licensed
			// https://github.com/underscorediscovery/realtime-multiplayer-in-html5
			requestAnimationFrame = windowOrRoot.requestAnimationFrame || (function() {
				var lastTimestamp = Date.now(),
						now,
						timeout;
				return function(callback) {
					now = Date.now();
					// The next frame should run no sooner than the simulation allows,
					// but as soon as possible if the current frame has already taken
					// more time to run than is simulated in one timestep.
					timeout = Math.max(0, simulationTimestep - (now - lastTimestamp));
					lastTimestamp = now + timeout;
					return setTimeout(function() {
						callback(now + timeout);
					}, timeout);
				};
			})(),

			// The function that stops the main loop. The unprefixed version of
			// `window.cancelAnimationFrame()` is available in all modern browsers now,
			// but node.js doesn't have it, so fall back to timers.
			cancelAnimationFrame = windowOrRoot.cancelAnimationFrame || clearTimeout,

			// In all major browsers, replacing non-specified functions with NOOPs
			// seems to be as fast or slightly faster than using conditions to only
			// call the functions if they are specified. This is probably due to empty
			// functions being optimized away. http://jsperf.com/noop-vs-condition
			NOOP = function() {},

			// A function that runs at the beginning of the main loop.
			// See `MainLoop.setBegin()` for details.
			begin = NOOP,

			// A function that runs updates (i.e. AI and physics).
			// See `MainLoop.setUpdate()` for details.
			update = NOOP,

			// A function that draws things on the screen.
			// See `MainLoop.setDraw()` for details.
			draw = NOOP,

			// A function that runs at the end of the main loop.
			// See `MainLoop.setEnd()` for details.
			end = NOOP,

			// The ID of the currently executing frame. Used to cancel frames when
			// stopping the loop.
			rafHandle;

	/**
	 * Manages the main loop that runs updates and rendering.
	 *
	 * The main loop is a core part of any application in which state changes
	 * even if no events are handled. In games, it is typically responsible for
	 * computing physics and AI as well as drawing the result on the screen.
	 *
	 * The body of this particular loop is run every time the browser is ready to
	 * paint another frame. The frequency with which this happens depends primarily
	 * on the monitor's refresh rate, which is typically 60 frames per second. Most
	 * applications aim to run at 60 FPS for this reason, meaning that the main
	 * loop runs about once every 16.7 milliseconds. With this target, everything
	 * that happens in the main loop (e.g. all updates and drawing) needs to occur
	 * within the "budget" of 16.7 milliseconds.  See
	 * `MainLoop.setSimulationTimestep()` for more information about typical
	 * monitor refresh rates and frame rate targets.
	 *
	 * The main loop can be started and stopped, but there can only be one MainLoop
	 * (except that each Web Worker can have its own MainLoop). There are four main
	 * parts of the loop: {@link #setBegin begin}(), {@link #setUpdate update}(),
	 * {@link #setDraw draw}(), and {@link #setEnd end}(), in that order. See the
	 * functions that set each of them for descriptions of what they are used for.
	 * Note that update() can run zero or more times per loop.
	 *
	 * @class MainLoop
	 */
	root.MainLoop = {
		/**
		 * Gets how many milliseconds should be simulated by every run of update().
		 *
		 * See `MainLoop.setSimulationTimestep()` for details on this value.
		 *
		 * @return {Number}
		 *   The number of milliseconds that should be simulated by every run of
		 *   {@link #setUpdate update}().
		 */
		getSimulationTimestep: function() {
			return simulationTimestep;
		},

		/**
		 * Sets how many milliseconds should be simulated by every run of update().
		 *
		 * The perceived frames per second (FPS) is effectively capped at the
		 * multiplicative inverse of the simulation timestep. That is, if the
		 * timestep is 1000 / 60 (which is the default), then the maximum perceived
		 * FPS is effectively 60. Decreasing the timestep increases the maximum
		 * perceived FPS at the cost of running {@link #setUpdate update}() more
		 * times per frame at lower frame rates. Since running update() more times
		 * takes more time to process, this can actually slow down the frame rate.
		 * Additionally, if the amount of time it takes to run update() exceeds or
		 * very nearly exceeds the timestep, the application will freeze and crash
		 * in a spiral of death (unless it is rescued; see `MainLoop.setEnd()` for
		 * an explanation of what can be done if a spiral of death is occurring).
		 *
		 * The exception to this is that interpolating between updates for each
		 * render can increase the perceived frame rate and reduce visual
		 * stuttering. See `MainLoop.setDraw()` for an explanation of how to do
		 * this.
		 *
		 * If you are considering decreasing the simulation timestep in order to
		 * raise the maximum perceived FPS, keep in mind that most monitors can't
		 * display more than 60 FPS. Whether humans can tell the difference among
		 * high frame rates depends on the application, but for reference, film is
		 * usually displayed at 24 FPS, other videos at 30 FPS, most games are
		 * acceptable above 30 FPS, and virtual reality might require 75 FPS to
		 * feel natural. Some gaming monitors go up to 144 FPS. Setting the
		 * timestep below 1000 / 144 is discouraged and below 1000 / 240 is
		 * strongly discouraged. The default of 1000 / 60 is good in most cases.
		 *
		 * The simulation timestep should typically only be changed at
		 * deterministic times (e.g. before the main loop starts for the first
		 * time, and not in response to user input or slow frame rates) to avoid
		 * introducing non-deterministic behavior. The update timestep should be
		 * the same for all players/users in multiplayer/multi-user applications.
		 *
		 * See also `MainLoop.getSimulationTimestep()`.
		 *
		 * @param {Number} timestep
		 *   The number of milliseconds that should be simulated by every run of
		 *   {@link #setUpdate update}().
		 */
		setSimulationTimestep: function(timestep) {
			simulationTimestep = timestep;
			return this;
		},

		/**
		 * Returns the exponential moving average of the frames per second.
		 *
		 * @return {Number}
		 *   The exponential moving average of the frames per second.
		 */
		getFPS: function() {
			return fps;
		},

		/**
		 * Gets the maximum frame rate.
		 *
		 * Other factors also limit the FPS; see `MainLoop.setSimulationTimestep`
		 * for details.
		 *
		 * See also `MainLoop.setMaxAllowedFPS()`.
		 *
		 * @return {Number}
		 *   The maximum number of frames per second allowed.
		 */
		getMaxAllowedFPS: function() {
			return 1000 / minFrameDelay;
		},

		/**
		 * Sets a maximum frame rate.
		 *
		 * See also `MainLoop.getMaxAllowedFPS()`.
		 *
		 * @param {Number} [fps=Infinity]
		 *   The maximum number of frames per second to execute. If Infinity or not
		 *   passed, there will be no FPS cap (although other factors do limit the
		 *   FPS; see `MainLoop.setSimulationTimestep` for details). If zero, this
		 *   will stop the loop, and when the loop is next started, it will return
		 *   to the previous maximum frame rate. Passing negative values will stall
		 *   the loop until this function is called again with a positive value.
		 *
		 * @chainable
		 */
		setMaxAllowedFPS: function(fps) {
			if (typeof fps === 'undefined') {
				fps = Infinity;
			}
			if (fps === 0) {
				this.stop();
			}
			else {
				// Dividing by Infinity returns zero.
				minFrameDelay = 1000 / fps;
			}
			return this;
		},

		/**
		 * Reset the amount of time that has not yet been simulated to zero.
		 *
		 * This introduces non-deterministic behavior if called after the
		 * application has started running (unless it is being reset, in which case
		 * it doesn't matter). However, this can be useful in cases where the
		 * amount of time that has not yet been simulated has grown very large
		 * (for example, when the application's tab gets put in the background and
		 * the browser throttles the timers as a result). In applications with
		 * lockstep the player would get dropped, but in other networked
		 * applications it may be necessary to snap or ease the player/user to the
		 * authoritative state and discard pending updates in the process. In
		 * non-networked applications it may also be acceptable to simply resume
		 * the application where it last left off and ignore the accumulated
		 * unsimulated time.
		 *
		 * @return {Number}
		 *   The cumulative amount of elapsed time in milliseconds that has not yet
		 *   been simulated, but is being discarded as a result of calling this
		 *   function.
		 */
		resetFrameDelta: function() {
			var oldFrameDelta = frameDelta;
			frameDelta = 0;
			return oldFrameDelta;
		},

		/**
		 * Sets the function that runs at the beginning of the main loop.
		 *
		 * The begin() function is typically used to process input before the
		 * updates run. Processing input here (in chunks) can reduce the running
		 * time of event handlers, which is useful because long-running event
		 * handlers can sometimes delay frames.
		 *
		 * Unlike {@link #setUpdate update}(), which can run zero or more times per
		 * frame, begin() always runs exactly once per frame. This makes it useful
		 * for any updates that are not dependent on time in the simulation.
		 * Examples include adjusting HUD calculations or performing long-running
		 * updates incrementally. Compared to {@link #setEnd end}(), generally
		 * actions should occur in begin() if they affect anything that
		 * {@link #setUpdate update}() or {@link #setDraw draw}() use.
		 *
		 * @param {Function} begin
		 *   The begin() function.
		 * @param {Number} [begin.timestamp]
		 *   The current timestamp (when the frame started), in milliseconds. This
		 *   should only be used for comparison to other timestamps because the
		 *   epoch (i.e. the "zero" time) depends on the engine running this code.
		 *   In engines that support `DOMHighResTimeStamp` (all modern browsers
		 *   except iOS Safari 8) the epoch is the time the page started loading,
		 *   specifically `performance.timing.navigationStart`. Everywhere else,
		 *   including node.js, the epoch is the Unix epoch (1970-01-01T00:00:00Z).
		 * @param {Number} [begin.delta]
		 *   The total elapsed time that has not yet been simulated, in
		 *   milliseconds.
		 */
		setBegin: function(fun) {
			begin = fun || begin;
			return this;
		},

		/**
		 * Sets the function that runs updates (e.g. AI and physics).
		 *
		 * The update() function should simulate anything that is affected by time.
		 * It can be called zero or more times per frame depending on the frame
		 * rate.
		 *
		 * As with everything in the main loop, the running time of update()
		 * directly affects the frame rate. If update() takes long enough that the
		 * frame rate drops below the target ("budgeted") frame rate, parts of the
		 * update() function that do not need to execute between every frame can be
		 * moved into Web Workers. (Various sources on the internet sometimes
		 * suggest other scheduling patterns using setTimeout() or setInterval().
		 * These approaches sometimes offer modest improvements with minimal
		 * changes to existing code, but because JavaScript is single-threaded, the
		 * updates will still block rendering and drag down the frame rate. Web
		 * Workers execute in separate threads, so they free up more time in the
		 * main loop.)
		 *
		 * This script can be imported into a Web Worker using importScripts() and
		 * used to run a second main loop in the worker. Some considerations:
		 *
		 * - Profile your code before doing the work to move it into Web Workers.
		 *   It could be the rendering that is the bottleneck, in which case the
		 *   solution is to decrease the visual complexity of the scene.
		 * - It doesn't make sense to move the *entire* contents of update() into
		 *   workers unless {@link #setDraw draw}() can interpolate between frames.
		 *   The lowest-hanging fruit is background updates (like calculating
		 *   citizens' happiness in a city-building game), physics that doesn't
		 *   affect the scene (like flags waving in the wind), and anything that is
		 *   occluded or happening far off screen.
		 * - If draw() needs to interpolate physics based on activity that occurs
		 *   in a worker, the worker needs to pass the interpolation value back to
		 *   the main thread so that is is available to draw().
		 * - Web Workers can't access the state of the main thread, so they can't
		 *   directly modify objects in your scene. Moving data to and from Web
		 *   Workers is a pain. The fastest way to do it is with Transferable
		 *   Objects: basically, you can pass an ArrayBuffer to a worker,
		 *   destroying the original reference in the process.
		 *
		 * You can read more about Web Workers and Transferable Objects at
		 * [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/workers/basics/).
		 *
		 * @param {Function} update
		 *   The update() function.
		 * @param {Number} [update.delta]
		 *   The amount of time in milliseconds to simulate in the update. In most
		 *   cases this timestep never changes in order to ensure deterministic
		 *   updates. The timestep is the same as that returned by
		 *   `MainLoop.getSimulationTimestep()`.
		 */
		setUpdate: function(fun) {
			update = fun || update;
			return this;
		},

		/**
		 * Sets the function that draws things on the screen.
		 *
		 * The draw() function gets passed the percent of time that the next run of
		 * {@link #setUpdate update}() will simulate that has actually elapsed, as
		 * a decimal. In other words, draw() gets passed how far between update()
		 * calls it is. This is useful because the time simulated by update() and
		 * the time between draw() calls is usually different, so the parameter to
		 * draw() can be used to interpolate motion between frames to make
		 * rendering appear smoother. To illustrate, if update() advances the
		 * simulation at each vertical bar in the first row below, and draw() calls
		 * happen at each vertical bar in the second row below, then some frames
		 * will have time left over that is not yet simulated by update() when
		 * rendering occurs in draw():
		 *
		 *     update() timesteps:  |  |  |  |  |  |  |  |  |
		 *     draw() calls:        |   |   |   |   |   |   |
		 *
		 * To interpolate motion for rendering purposes, objects' state after the
		 * last update() must be retained and used to calculate an intermediate
		 * state. Note that this means renders will be up to one update() behind.
		 * This is still better than extrapolating (projecting objects' state after
		 * a future update()) which can produce bizarre results. Storing multiple
		 * states can be difficult to set up, and keep in mind that running this
		 * process takes time that could push the frame rate down, so it's often
		 * not worthwhile unless stuttering is visible.
		 *
		 * @param {Function} draw
		 *   The draw() function.
		 * @param {Number} [draw.interpolationPercentage]
		 *   The cumulative amount of time that hasn't been simulated yet, divided
		 *   by the amount of time that will be simulated the next time update()
		 *   runs. Useful for interpolating frames.
		 */
		setDraw: function(fun) {
			draw = fun || draw;
			return this;
		},

		/**
		 * Sets the function that runs at the end of the main loop.
		 *
		 * Unlike {@link #setUpdate update}(), which can run zero or more times per
		 * frame, end() always runs exactly once per frame. This makes it useful
		 * for any updates that are not dependent on time in the simulation.
		 * Examples include cleaning up any temporary state set up by
		 * {@link #setBegin begin}(), lowering the visual quality if the frame rate
		 * is too low, or performing long-running updates incrementally. Compared
		 * to begin(), generally actions should occur in end() if they use anything
		 * that update() or {@link #setDraw draw}() affect.
		 *
		 * @param {Function} end
		 *   The end() function.
		 * @param {Number} [end.fps]
		 *   The exponential moving average of the frames per second. This is the
		 *   same value returned by `MainLoop.getFPS()`. It can be used to take
		 *   action when the FPS is too low (or to restore to normalcy if the FPS
		 *   moves back up). Examples of actions to take if the FPS is too low
		 *   include exiting the application, lowering the visual quality, stopping
		 *   or reducing activities outside of the main loop like event handlers or
		 *   audio playback, performing non-critical updates less frequently, or
		 *   increasing the simulation timestep (by calling
		 *   `MainLoop.setSimulationTimestep()`). Note that this last option
		 *   results in more time being simulated per update() call, which causes
		 *   the application to behave non-deterministically.
		 * @param {Boolean} [end.panic=false]
		 *   Indicates whether the simulation has fallen too far behind real time.
		 *   Specifically, `panic` will be `true` if too many updates occurred in
		 *   one frame. In networked lockstep applications, the application should
		 *   wait for some amount of time to see if the user can catch up before
		 *   dropping the user. In networked but non-lockstep applications, this
		 *   typically indicates that the user needs to be snapped or eased to the
		 *   current authoritative state. When this happens, it may be convenient
		 *   to call `MainLoop.resetFrameDelta()` to discard accumulated pending
		 *   updates. In non-networked applications, it may be acceptable to allow
		 *   the application to keep running for awhile to see if it will catch up.
		 *   However, this could also cause the application to look like it is
		 *   running very quickly for a few frames as it transitions through the
		 *   intermediate states. An alternative that may be acceptable is to
		 *   simply ignore the unsimulated elapsed time by calling
		 *   `MainLoop.resetFrameDelta()` even though this introduces
		 *   non-deterministic behavior. In all cases, if the application panics
		 *   frequently, this is an indication that the main loop is running too
		 *   slowly. However, most of the time the drop in frame rate will probably
		 *   be noticeable before a panic occurs. To help the application catch up
		 *   after a panic caused by a spiral of death, the same steps can be taken
		 *   that are suggested above if the FPS drops too low.
		 */
		setEnd: function(fun) {
			end = fun || end;
			return this;
		},

		/**
		 * Starts the main loop.
		 *
		 * Note that the application is not considered "running" immediately after
		 * this function returns; rather, it is considered "running" after the
		 * application draws its first frame. The distinction is that event
		 * handlers should remain paused until the application is running, even
		 * after `MainLoop.start()` is called. Check `MainLoop.isRunning()` for the
		 * current status. To act after the application starts, register a callback
		 * with requestAnimationFrame() after calling this function and execute the
		 * action in that callback. It is safe to call `MainLoop.start()` multiple
		 * times even before the application starts running and without calling
		 * `MainLoop.stop()` in between, although there is no reason to do this;
		 * the main loop will only start if it is not already started.
		 *
		 * See also `MainLoop.stop()`.
		 */
		start: function() {
			if (!started) {
				// Since the application doesn't start running immediately, track
				// whether this function was called and use that to keep it from
				// starting the main loop multiple times.
				started = true;

				// In the main loop, draw() is called after update(), so if we
				// entered the main loop immediately, we would never render the
				// initial state before any updates occur. Instead, we run one
				// frame where all we do is draw, and then start the main loop with
				// the next frame.
				rafHandle = requestAnimationFrame(function(timestamp) {
					// Render the initial state before any updates occur.
					draw(1);

					// The application isn't considered "running" until the
					// application starts drawing.
					running = true;

					// Reset variables that are used for tracking time so that we
					// don't simulate time passed while the application was paused.
					lastFrameTimeMs = timestamp;
					lastFpsUpdate = timestamp;
					framesSinceLastFpsUpdate = 0;

					// Start the main loop.
					rafHandle = requestAnimationFrame(animate);
				});
			}
			return this;
		},

		/**
		 * Stops the main loop.
		 *
		 * Event handling and other background tasks should also be paused when the
		 * main loop is paused.
		 *
		 * Note that pausing in multiplayer/multi-user applications will cause the
		 * player's/user's client to become out of sync. In this case the
		 * simulation should exit, or the player/user needs to be snapped to their
		 * updated position when the main loop is started again.
		 *
		 * See also `MainLoop.start()` and `MainLoop.isRunning()`.
		 */
		stop: function() {
			running = false;
			started = false;
			cancelAnimationFrame(rafHandle);
			return this;
		},

		/**
		 * Returns whether the main loop is currently running.
		 *
		 * See also `MainLoop.start()` and `MainLoop.stop()`.
		 *
		 * @return {Boolean}
		 *   Whether the main loop is currently running.
		 */
		isRunning: function() {
			return running;
		},
	};

	/**
	 * The main loop that runs updates and rendering.
	 *
	 * @param {DOMHighResTimeStamp} timestamp
	 *   The current timestamp. In practice this is supplied by
	 *   requestAnimationFrame at the time that it starts to fire callbacks. This
	 *   should only be used for comparison to other timestamps because the epoch
	 *   (i.e. the "zero" time) depends on the engine running this code. In engines
	 *   that support `DOMHighResTimeStamp` (all modern browsers except iOS Safari
	 *   8) the epoch is the time the page started loading, specifically
	 *   `performance.timing.navigationStart`. Everywhere else, including node.js,
	 *   the epoch is the Unix epoch (1970-01-01T00:00:00Z).
	 *
	 * @ignore
	 */
	function animate(timestamp) {
		// Run the loop again the next time the browser is ready to render.
		// We set rafHandle immediately so that the next frame can be canceled
		// during the current frame.
		rafHandle = requestAnimationFrame(animate);

		// Throttle the frame rate (if minFrameDelay is set to a non-zero value by
		// `MainLoop.setMaxAllowedFPS()`).
		if (timestamp < lastFrameTimeMs + minFrameDelay) {
			return;
		}

		// frameDelta is the cumulative amount of in-app time that hasn't been
		// simulated yet. Add the time since the last frame. We need to track total
		// not-yet-simulated time (as opposed to just the time elapsed since the
		// last frame) because not all actually elapsed time is guaranteed to be
		// simulated each frame. See the comments below for details.
		frameDelta += timestamp - lastFrameTimeMs;
		lastFrameTimeMs = timestamp;

		// Run any updates that are not dependent on time in the simulation. See
		// `MainLoop.setBegin()` for additional details on how to use this.
		begin(timestamp, frameDelta);

		// Update the estimate of the frame rate, `fps`. Approximately every
		// second, the number of frames that occurred in that second are included
		// in an exponential moving average of all frames per second. This means
		// that more recent seconds affect the estimated frame rate more than older
		// seconds.
		if (timestamp > lastFpsUpdate + fpsUpdateInterval) {
			// Compute the new exponential moving average.
			fps =
					// Divide the number of frames since the last FPS update by the
					// amount of time that has passed to get the mean frames per second
					// over that period. This is necessary because slightly more than a
					// second has likely passed since the last update.
					fpsAlpha * framesSinceLastFpsUpdate * 1000 / (timestamp - lastFpsUpdate) +
					(1 - fpsAlpha) * fps;

			// Reset the frame counter and last-updated timestamp since their
			// latest values have now been incorporated into the FPS estimate.
			lastFpsUpdate = timestamp;
			framesSinceLastFpsUpdate = 0;
		}
		// Count the current frame in the next frames-per-second update. This
		// happens after the previous section because the previous section
		// calculates the frames that occur up until `timestamp`, and `timestamp`
		// refers to a time just before the current frame was delivered.
		framesSinceLastFpsUpdate++;

		/*
		 * A naive way to move an object along its X-axis might be to write a main
		 * loop containing the statement `obj.x += 10;` which would move the object
		 * 10 units per frame. This approach suffers from the issue that it is
		 * dependent on the frame rate. In other words, if your application is
		 * running slowly (that is, fewer frames per second), your object will also
		 * appear to move slowly, whereas if your application is running quickly
		 * (that is, more frames per second), your object will appear to move
		 * quickly. This is undesirable, especially in multiplayer/multi-user
		 * applications.
		 *
		 * One solution is to multiply the speed by the amount of time that has
		 * passed between rendering frames. For example, if you want your object to
		 * move 600 units per second, you might write `obj.x += 600 * delta`, where
		 * `delta` is the time passed since the last frame. (For convenience, let's
		 * move this statement to an update() function that takes `delta` as a
		 * parameter.) This way, your object will move a constant distance over
		 * time. However, at low frame rates and high speeds, your object will move
		 * large distances every frame, which can cause it to do strange things
		 * such as move through walls. Additionally, we would like our program to
		 * be deterministic. That is, every time we run the application with the
		 * same input, we would like exactly the same output. If the time between
		 * frames (the `delta`) varies, our output will diverge the longer the
		 * program runs due to accumulated rounding errors, even at normal frame
		 * rates.
		 *
		 * A better solution is to separate the amount of time simulated in each
		 * update() from the amount of time between frames. Our update() function
		 * doesn't need to change; we just need to change the delta we pass to it
		 * so that each update() simulates a fixed amount of time (that is, `delta`
		 * should have the same value each time update() is called). The update()
		 * function can be run multiple times per frame if needed to simulate the
		 * total amount of time passed since the last frame. (If the time that has
		 * passed since the last frame is less than the fixed simulation time, we
		 * just won't run an update() until the the next frame. If there is
		 * unsimulated time left over that is less than our timestep, we'll just
		 * leave it to be simulated during the next frame.) This approach avoids
		 * inconsistent rounding errors and ensures that there are no giant leaps
		 * through walls between frames.
		 *
		 * That is what is done below. It introduces a new problem, but it is a
		 * manageable one: if the amount of time spent simulating is consistently
		 * longer than the amount of time between frames, the application could
		 * freeze and crash in a spiral of death. This won't happen as long as the
		 * fixed simulation time is set to a value that is high enough that
		 * update() calls usually take less time than the amount of time they're
		 * simulating. If it does start to happen anyway, see `MainLoop.setEnd()`
		 * for a discussion of ways to stop it.
		 *
		 * Additionally, see `MainLoop.setUpdate()` for a discussion of performance
		 * considerations.
		 *
		 * Further reading for those interested:
		 *
		 * - http://gameprogrammingpatterns.com/game-loop.html
		 * - http://gafferongames.com/game-physics/fix-your-timestep/
		 * - https://gamealchemist.wordpress.com/2013/03/16/thoughts-on-the-javascript-game-loop/
		 * - https://developer.mozilla.org/en-US/docs/Games/Anatomy
		 */
		numUpdateSteps = 0;
		while (frameDelta >= simulationTimestep) {
			update(simulationTimestep);
			frameDelta -= simulationTimestep;

			/*
			 * Sanity check: bail if we run the loop too many times.
			 *
			 * One way this could happen is if update() takes longer to run than
			 * the time it simulates, thereby causing a spiral of death. For ways
			 * to avoid this, see `MainLoop.setEnd()`. Another way this could
			 * happen is if the browser throttles serving frames, which typically
			 * occurs when the tab is in the background or the device battery is
			 * low. An event outside of the main loop such as audio processing or
			 * synchronous resource reads could also cause the application to hang
			 * temporarily and accumulate not-yet-simulated time as a result.
			 *
			 * 240 is chosen because, for any sane value of simulationTimestep, 240
			 * updates will simulate at least one second, and it will simulate four
			 * seconds with the default value of simulationTimestep. (Safari
			 * notifies users that the script is taking too long to run if it takes
			 * more than five seconds.)
			 *
			 * If there are more updates to run in a frame than this, the
			 * application will appear to slow down to the user until it catches
			 * back up. In networked applications this will usually cause the user
			 * to get out of sync with their peers, but if the updates are taking
			 * this long already, they're probably already out of sync.
			 */
			if (++numUpdateSteps >= 240) {
				panic = true;
				break;
			}
		}

		/*
		 * Render the screen. We do this regardless of whether update() has run
		 * during this frame because it is possible to interpolate between updates
		 * to make the frame rate appear faster than updates are actually
		 * happening. See `MainLoop.setDraw()` for an explanation of how to do
		 * that.
		 *
		 * We draw after updating because we want the screen to reflect a state of
		 * the application that is as up-to-date as possible. (`MainLoop.start()`
		 * draws the very first frame in the application's initial state, before
		 * any updates have occurred.) Some sources speculate that rendering
		 * earlier in the requestAnimationFrame callback can get the screen painted
		 * faster; this is mostly not true, and even when it is, it's usually just
		 * a trade-off between rendering the current frame sooner and rendering the
		 * next frame later.
		 *
		 * See `MainLoop.setDraw()` for details about draw() itself.
		 */
		draw(frameDelta / simulationTimestep);

		// Run any updates that are not dependent on time in the simulation. See
		// `MainLoop.setEnd()` for additional details on how to use this.
		end(fps, panic);

		panic = false;
	}

// AMD support
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (root.MainLoop),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
// CommonJS support
	else if (typeof module === 'object' && module !== null && typeof module.exports === 'object') {
		module.exports = root.MainLoop;
	}

})(this);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nlayout (location = 0) in vec3 aPos;\r\nlayout (location = 2) in vec2 aTexCoord;\r\n\r\nout vec2 TexCoord;\r\n\r\nuniform mat4 model;\r\nuniform mat4 viewProjection;\r\n\r\nvoid main()\r\n{\r\n    gl_Position = viewProjection * model *  vec4(aPos,1.0f);\r\n    TexCoord = aTexCoord;\r\n}   "

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision mediump  float;\r\nout vec4 FragColor;\r\n\r\nin vec2 TexCoord;\r\n\r\nuniform sampler2D texture1;\r\nuniform float ambient;\r\n\r\nvoid main()\r\n{\r\n    FragColor = vec4(ambient * texture(texture1, TexCoord).xyz,1.0);\r\n\r\n    //FragColor = vec4(1, 0.7, 0.5, 1); // set all 4 vector values to 1.0\r\n}"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nlayout (location = 0) in vec3 aPos;\r\nlayout (location = 1) in vec3 aNormal;\r\nlayout (location = 2) in vec2 aTexCoord;\r\nlayout (location = 3) in vec3 aInstancedOffset;\r\nlayout (location = 4) in vec3 aScale;\r\n\r\n\r\nout vec3 FragPos;\r\nout vec3 Normal;\r\nout vec2 TexCoord;\r\n\r\nuniform mat4 model;\r\nuniform mat4 viewProjection;\r\n\r\nvoid main()\r\n{\r\n    vec4 vertexPos = vec4(aPos, 1);\r\n\r\n    if(aScale.x > 0.0 && aScale.z > 0.0){\r\n        vertexPos.x *= aScale.x;\r\n        vertexPos.y *= aScale.y;\r\n        vertexPos.z *= aScale.z;\r\n    }\r\n\r\n    vertexPos.xyz += aInstancedOffset.xyz;\r\n    TexCoord = aTexCoord;\r\n    gl_Position = viewProjection * model *  vertexPos;\r\n    Normal = mat3(transpose(inverse(model))) * aNormal;\r\n    FragPos = vec3(model * vertexPos);\r\n}   "

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision mediump  float;\r\nout vec4 FragColor;\r\n\r\nin vec3 FragPos;\r\nin vec3 Normal;\r\nin vec2 TexCoord;\r\n\r\nuniform vec3 viewPos;\r\n\r\nstruct Material {\r\n    sampler2D diffuse;\r\n   // sampler2D specular;\r\n//\tsampler2D emission;\r\n    float shininess;\r\n}; \r\nuniform Material material;\r\n\r\nstruct DirLight {\r\n    vec3 direction;\r\n  \r\n    vec3 ambient;\r\n    vec3 diffuse;\r\n    vec3 specular;\r\n};  \r\nuniform DirLight dirLight;\r\n\r\nstruct PointLight{\r\n    vec3 position;\r\n    \r\n    float constant;\r\n    float linear;\r\n    float quadratic;\r\n    \r\n    vec3 ambient;\r\n    vec3 diffuse;\r\n    vec3 specular;\r\n};\r\n\r\nuniform PointLight playerLight;\r\n\r\nvec3 CalcDirLight(DirLight light, vec3 normal, vec3 viewDir);\r\nvec3 CalcPointLight(PointLight light, vec3 normal, vec3 fragPos, vec3 viewDir);\r\n//vec3 CalcSpotLight(SpotLight light, vec3 normal, vec3 fragPos, vec3 viewDir);\r\n\r\nvoid main()\r\n{\r\n    vec3 viewDir = normalize(viewPos - FragPos);\r\n    vec3 norm = normalize(Normal);\r\n\r\n    //point lights\r\n    vec3 result;\r\n    result = CalcDirLight(dirLight, norm, viewDir);\r\n    result += CalcPointLight(playerLight, norm, FragPos, viewDir);\r\n\r\n    FragColor = vec4(result, 1.0);\r\n    //FragColor = vec4(1, 0.7, 0.5, 1); // set all 4 vector values to 1.0\r\n}\r\n\r\nvec3 CalcDirLight(DirLight light, vec3 normal, vec3 viewDir){\r\n\r\n\tvec3 lightDir = normalize(-light.direction);\r\n\t//diffuse shading\r\n\tfloat diff = max(dot(normal, lightDir), 0.0);\r\n\t//specular shading\r\n\tvec3 reflectDir = reflect(-lightDir, normal);\r\n\tfloat spec = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);\r\n\r\n\t//combine\r\n\tvec3 ambient = light.ambient * vec3(texture(material.diffuse, TexCoord));\r\n\tvec3 diffuse = light.diffuse * diff * vec3(texture(material.diffuse, TexCoord));\r\n\tvec3 specular = light.specular * spec * vec3(texture(material.diffuse, TexCoord));\r\n\treturn (ambient + diffuse + specular);\r\n\r\n\r\n}\r\n\r\nvec3 CalcPointLight(PointLight light, vec3 normal, vec3 fragPos, vec3 viewDir)\r\n{\r\n    vec3 lightDir = normalize(light.position - fragPos);\r\n    // diffuse shading\r\n    float diff = max(dot(normal, lightDir), 0.0);\r\n    // specular shading\r\n    vec3 reflectDir = reflect(-lightDir, normal);\r\n    float spec = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);\r\n    // attenuation\r\n    float distance    = length(light.position - fragPos);\r\n    float attenuation = 1.0 / (light.constant + light.linear * distance + \r\n  \t\t\t     light.quadratic * (distance * distance));    \r\n    // combine results\r\n    vec3 ambient  = light.ambient  * vec3(texture(material.diffuse, TexCoord));\r\n    vec3 diffuse  = light.diffuse  * diff * vec3(texture(material.diffuse, TexCoord));\r\n    vec3 specular = light.specular * spec * vec3(texture(material.diffuse, TexCoord));\r\n    ambient  *= attenuation;\r\n    diffuse  *= attenuation; \r\n    specular *= attenuation;\r\n    vec3 result = ambient + diffuse + specular;\r\n    return result;\r\n} \r\n\r\n//vec3 CalcSpotLight(SpotLight light, vec3 normal, vec3 fragPos, vec3 viewDir)\r\n//{\r\n//    vec3 lightDir = normalize(light.position - fragPos);\r\n//    // diffuse shading\r\n//    float diff = max(dot(normal, lightDir), 0.0);\r\n//    // specular shading\r\n//    vec3 reflectDir = reflect(-lightDir, normal);\r\n//    float spec = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);\r\n//    \r\n//\r\n//    // combine results\r\n//    vec3 ambient  = light.ambient  * vec3(texture(material.diffuse, TexCoords));\r\n//    vec3 diffuse  = light.diffuse  * diff * vec3(texture(material.diffuse, TexCoords));\r\n//    vec3 specular = light.specular * spec * vec3(texture(material.specular, TexCoords));\r\n//\r\n//\t//spotlight\r\n//\tfloat theta = dot(lightDir, normalize(-light.direction));\r\n//\tfloat epsilon = light.cutOff - light.outerCutOff;\r\n//\tfloat intesity = clamp((theta - light.outerCutOff) / epsilon, 0.0, 1.0);\r\n//\tdiffuse *= intesity;\r\n//\tspecular *= intesity;\r\n//\r\n//\t// attenuation\r\n//    float distance    = length(light.position - fragPos);\r\n//\tfloat attenuation = 1.0 / (light.constant + light.linear * distance + light.quadratic * (distance * distance));\r\n//\tambient *= attenuation;\r\n//\tdiffuse *= attenuation;\r\n//\tspecular  *= attenuation;\r\n//    return (ambient + diffuse + specular);\r\n//} "

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map