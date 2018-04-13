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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__ = __webpack_require__(8);
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(0);
let OBJ = __webpack_require__(3);
class BasicModel {
    constructor(mesh) {
        this.mesh = mesh;
        this.initialized = false;
        this.rotation_offset = gl_matrix_1.vec3.fromValues(0, 0, 0);
    }
    static initWithShader(gl, shader) {
        this.shader = shader;
        gl.bindAttribLocation(shader.ID, 0, "a_vertex");
        gl.bindAttribLocation(shader.ID, 1, "a_tex_coord");
        gl.bindAttribLocation(shader.ID, 2, "a_normal");
        // gl.bindAttribLocation(shader.ID, 3, "a_vertex1");
        // gl.bindAttribLocation(shader.ID, 4, "a_normal1");
        gl.bindVertexArray(null);
        BasicModel.emptyTexture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, BasicModel.emptyTexture);
        const pixel = new Uint8Array([0, 0, 0, 255]); // black
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, pixel);
    }
    static setMVPMatrices(model, view, projection) {
        let mvp_matrix = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.mul(mvp_matrix, view, model);
        gl_matrix_1.mat4.mul(mvp_matrix, projection, mvp_matrix);
        this.shader.setMat4(this.shader.uniforms.model_matrix, model);
        //  BasicModel.shader.setMat4(BasicModel.uniforms.view_matrix, view);
        this.shader.setMat4(this.shader.uniforms.model_view_projection_matrix, mvp_matrix);
    }
    static use(gl) {
    }
    init(gl) {
        this.VAO = gl.createVertexArray();
        OBJ.initMeshBuffers(gl, this.mesh);
        gl.bindVertexArray(this.VAO);
        gl.enableVertexAttribArray(0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.vertexBuffer);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(1);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.textureBuffer);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, true, 0, 0);
        gl.enableVertexAttribArray(2);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.normalBuffer);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);
        //
        // gl.disableVertexAttribArray(3);
        // gl.disableVertexAttribArray(4);
        this.textures = [];
        this.initialized = true;
    }
    initAllTextures(gl) {
        for (let i = 0; i < this.mesh.materialNames.length; i++) {
            if (this.mesh.materialsByIndex[i].mapDiffuse) {
                if (this.mesh.materialsByIndex[i].mapDiffuse.texture.complete) {
                    this.mesh.materialsByIndex[i].mapDiffuse.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapDiffuse.texture);
                }
                else {
                    this.mesh.materialsByIndex[i].mapDiffuse.texture.addEventListener('load', () => {
                        this.mesh.materialsByIndex[i].mapDiffuse.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapDiffuse.texture);
                    });
                }
            }
            if (this.mesh.materialsByIndex[i].mapAmbient) {
                if (this.mesh.materialsByIndex[i].mapAmbient.texture.complete) {
                    this.mesh.materialsByIndex[i].mapAmbient.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapAmbient.texture);
                }
                else {
                    this.mesh.materialsByIndex[i].mapAmbient.texture.addEventListener('load', () => {
                        this.mesh.materialsByIndex[i].mapAmbient.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapAmbient.texture);
                    });
                }
            }
            if (this.mesh.materialsByIndex[i].mapEmissive) {
                if (this.mesh.materialsByIndex[i].mapEmissive.texture.complete) {
                    this.mesh.materialsByIndex[i].mapEmissive.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapEmissive.texture);
                }
                else {
                    this.mesh.materialsByIndex[i].mapEmissive.texture.addEventListener('load', () => {
                        this.mesh.materialsByIndex[i].mapEmissive.texture_id = this.loadTexture(gl, i, this.mesh.materialsByIndex[i].mapEmissive.texture);
                    });
                }
            }
        }
    }
    initTexture(gl, texture_num, flip = true) {
        if (!this.mesh.materialsByIndex[texture_num])
            return false;
        if (this.mesh.materialsByIndex[texture_num].mapDiffuse.texture.complete) {
            this.loadTexture(gl, texture_num, this.mesh.materialsByIndex[texture_num].mapDiffuse.texture);
        }
        else {
            this.mesh.materialsByIndex[texture_num].mapDiffuse.texture.addEventListener('load', () => {
                this.loadTexture(gl, texture_num, this.mesh.materialsByIndex[texture_num].mapDiffuse.texture);
            });
        }
        return true;
    }
    loadTexture(gl, texture_num, texture, flip = true) {
        let texture_id = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture_id);
        if (flip)
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, texture);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        this.textures[texture_num] = texture_id;
        return texture_id;
    }
    setTexture(texture, texture_num) {
        this.textures[texture_num] = texture;
    }
    draw(gl) {
        this.activateBuffers(gl);
        this.textures.forEach((texture, index) => {
            let is = this.mesh.vertexBuffer.itemSize;
            let submesh = this.mesh.submesh[index];
            this.activateMaterial(gl, index);
            let byteSize = 2;
            gl.drawElements(gl.TRIANGLES, is * submesh.numItems, gl.UNSIGNED_SHORT, submesh.offset * is * byteSize);
        });
        gl.bindVertexArray(null);
    }
    activateBuffers(gl) {
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
    }
    drawActivatedMaterial(gl, index) {
        let is = this.mesh.vertexBuffer.itemSize;
        let submesh = this.mesh.submesh[index];
        let byteSize = 2;
        gl.drawElements(gl.TRIANGLES, is * submesh.numItems, gl.UNSIGNED_SHORT, submesh.offset * is * byteSize);
    }
    activateMaterial(gl, index) {
        if (this.mesh.materialsByIndex[index].isTextureActive[0] && this.mesh.materialsByIndex[index].mapTransparency.texture_id) {
            gl.activeTexture(gl.TEXTURE0); // transparency
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapTransparency.texture_id);
        }
        if (this.mesh.materialsByIndex[index].isTextureActive[1] && this.mesh.materialsByIndex[index].mapEmissive.texture_id) {
            gl.activeTexture(gl.TEXTURE1); // emission
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapEmissive.texture_id);
        }
        if (this.mesh.materialsByIndex[index].isTextureActive[2] && this.mesh.materialsByIndex[index].mapAmbient.texture_id) {
            gl.activeTexture(gl.TEXTURE2); // ambient
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapAmbient.texture_id);
        }
        if (this.mesh.materialsByIndex[index].isTextureActive[3] && this.mesh.materialsByIndex[index].mapDiffuse.texture_id) {
            gl.activeTexture(gl.TEXTURE3); // diffuse
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapDiffuse.texture_id);
        }
        if (this.mesh.materialsByIndex[index].isTextureActive[4] && this.mesh.materialsByIndex[index].mapSpecular.texture_id) {
            gl.activeTexture(gl.TEXTURE4); // specular
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapSpecular.texture_id);
        }
        if (this.mesh.materialsByIndex[index].isTextureActive[5] && this.mesh.materialsByIndex[index].mapSpecularExponent.texture_id) {
            gl.activeTexture(gl.TEXTURE5); // shininess
            gl.bindTexture(gl.TEXTURE_2D, this.mesh.materialsByIndex[index].mapSpecularExponent.texture_id);
        }
        BasicModel.shader.setFloat(BasicModel.shader.uniforms.material_transparency, this.mesh.materialsByIndex[index].transparency);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_ambient_colour, this.mesh.materialsByIndex[index].ambient);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_diffuse_colour, this.mesh.materialsByIndex[index].diffuse);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_specular_colour, this.mesh.materialsByIndex[index].specular);
        BasicModel.shader.setVec3(BasicModel.shader.uniforms.material_emissive_colour, this.mesh.materialsByIndex[index].emissive);
        BasicModel.shader.setFloat(BasicModel.shader.uniforms.material_shininess, this.mesh.materialsByIndex[index].specularExponent);
        BasicModel.shader.setIntV(BasicModel.shader.uniforms.material_is_texture_active, this.mesh.materialsByIndex[index].isTextureActive);
    }
}
exports.BasicModel = BasicModel;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(23);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(0);
const guid_1 = __webpack_require__(24);
var Model_Type;
(function (Model_Type) {
    Model_Type[Model_Type["BASIC"] = 0] = "BASIC";
    Model_Type[Model_Type["MESHLESS"] = 1] = "MESHLESS";
})(Model_Type = exports.Model_Type || (exports.Model_Type = {}));
class Entity {
    constructor(pos, scale, forward, mesh_name, model_type) {
        this.id = guid_1.Guid.newGuid();
        this.position = pos;
        this.scalar = scale || gl_matrix_1.vec3.fromValues(1, 1, 1);
        this.forward = forward || gl_matrix_1.vec3.create();
        this.mesh_name = mesh_name;
        this.model_type = model_type;
    }
}
exports.Entity = Entity;


/***/ }),
/* 6 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(1);
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
/* 7 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(1);
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
/* 8 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(1);
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
/* 9 */
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
    setBoolByName(name, value) {
        this.gl.uniform1i(this.getUniformLocation(name), value ? 1 : 0);
    }
    setBool(id, value) {
        this.gl.uniform1i(id, value ? 1 : 0);
    }
    setInt(id, value) {
        this.gl.uniform1i(id, value);
    }
    setIntByName(name, value) {
        this.gl.uniform1i(this.getUniformLocation(name), value);
    }
    setIntV(id, value) {
        this.gl.uniform1iv(id, value);
    }
    setIntVByName(name, value) {
        this.gl.uniform1iv(this.getUniformLocation(name), value);
    }
    setFloat(id, value) {
        this.gl.uniform1f(id, value);
    }
    setFloatByName(name, value) {
        this.gl.uniform1f(this.getUniformLocation(name), value);
    }
    getUniformLocation(name) {
        var a = this.gl.getUniformLocation(this.ID, name);
        return a;
    }
    setMat4(id, matrix) {
        this.gl.uniformMatrix4fv(id, false, matrix);
    }
    setMat4ByName(name, matrix) {
        this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, matrix);
    }
    setVec3(id, vec) {
        this.gl.uniform3fv(id, vec);
    }
    setVec3ByName(name, vec) {
        this.gl.uniform3fv(this.getUniformLocation(name), vec);
    }
    setVec4(id, vec) {
        this.gl.uniform4fv(id, vec);
    }
    setVec4ByName(name, vec) {
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
/* 10 */
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
		self.submesh = {};
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
		
		let submesh = [];
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
						submesh.push({offset: totalFaceCounter, numItems: currFaceCounter});
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
		submesh.push({offset: totalFaceCounter, numItems: currFaceCounter});
		
		self.vertices = unpacked.verts;
		self.vertexNormals = unpacked.norms;
		self.textures = unpacked.textures;
		self.vertexMaterialIndices = unpacked.materialIndices;
		self.indices = unpacked.indices;
		self.submesh = submesh;

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
			this.materials[name] = material;
			// spot as determined when the obj file was parsed
			this.materialsByIndex[materialIndex] = material;
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mesh;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DEFAULT_EMISSION = 0.0;
const DEFAULT_AMBIENT = 0.2;
const DEFAULT_DIFFUSE = 0.8;
const DEFAULT_SPECULAR = 0.0;
const DEFAULT_SPECULAR_EXPONENT = 20.0;
const DEFAULT_OPTICAL_DENSITY = 1.0;
const DEFAULT_TRANSMISSION_FILTER = 1.0;
const DEFAULT_BUMP_MULTIPLIER = 1.0;


const ILLUMINATION_CONSTANT = 0;
const ILLUMINATION_PHONG_NO_SPECULAR = 1;
const ILLUMINATION_PHONG = 2;

const CHANNEL_UNSPECIFIED = 0;

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

		// illum - the enum of the illumination model to use
		this.illumination = ILLUMINATION_PHONG;

		// Ka - Ambient Reflectivity
		this.ambient = [DEFAULT_AMBIENT, DEFAULT_AMBIENT, DEFAULT_AMBIENT];
		// map_Ka
		this.mapAmbient = null;

		// Kd - Defuse Reflectivity
		this.diffuse = [DEFAULT_DIFFUSE, DEFAULT_DIFFUSE, DEFAULT_DIFFUSE];
		// map_Kd
		this.mapDiffuse = null;
		
		// Kd - Defuse Reflectivity
		this.transparency = 1.0;
		// map_Kd
		this.mapTransparency = null;
		
		// Ks
		this.specular = [DEFAULT_SPECULAR, DEFAULT_SPECULAR, DEFAULT_SPECULAR];
		// map_Ks
		this.mapSpecular = null;
		// for specular exponent maps
		// map_Ns
		this.mapSpecularExponent = null;
		// Ns
		// valid range is between 0 and 1000
		this.specularExponent = DEFAULT_SPECULAR_EXPONENT;

		// Ke
		this.emissive = [DEFAULT_EMISSION, DEFAULT_EMISSION, DEFAULT_EMISSION];
		// map_Ke
		this.mapEmissive = null;
		// Tf
		this.transmissionFilter = [DEFAULT_TRANSMISSION_FILTER, DEFAULT_TRANSMISSION_FILTER, DEFAULT_TRANSMISSION_FILTER];
		
		
		// either d or Tr; valid values are normalized
		// Tr is 1 - d
		// d
		this.dissolve = 0;
		// map_d
		this.mapDissolve = null;

		// Ni - Set to "normal" (air).
		this.refractionIndex = DEFAULT_OPTICAL_DENSITY;
		// sharpness
		this.sharpness = 0;
		// map_aat
		this.antiAliasing = false;
		// map_bump or bump
		this.mapBump = null;
		// disp
		this.mapDisplacement = null;
		// decal
		this.mapDecal = null;
		// refl - when the reflection type is a cube, there will be multiple refl
		//        statements for each side of the cube. If it's a spherical
		//        reflection, there should only ever be one.
		this.mapReflections = [];
		
		this.isTextureActive = new Array(6);
		
		//To hold webgl texture ids
		this.textureIds = [];
	}


	updateActiveTextures(){
		if(this.mapTransparency != null)
			this.isTextureActive[0] = true;
		else
			this.isTextureActive[0] = false;

		if(this.mapEmissive != null)
			this.isTextureActive[1] = true;
		else
			this.isTextureActive[1] = false;

		if(this.mapAmbient != null)
			this.isTextureActive[2] = true;
		else
			this.isTextureActive[2] = false;

		if(this.mapDiffuse != null)
			this.isTextureActive[3] = true;
		else
			this.isTextureActive[3] = false;

		if(this.mapSpecular != null)
			this.isTextureActive[4] = true;
		else
			this.isTextureActive[4] = false;

		if(this.mapSpecularExponent != null)
			this.isTextureActive[5] = true;
		else
			this.isTextureActive[5] = false;
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
		
		for (var key in this.materials) {
			this.materials[key].updateActiveTextures();
		}
		
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
		this.currentMaterial.transparency = 1.0 - parseFloat(tokens.pop());
	}

	parse_Tr(tokens) {
		// this ignores the -halo option as I can't find any documentation on what
		// it's supposed to be.
		this.currentMaterial.transparency = parseFloat(tokens.pop());
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
			if (!optionsToValues.hasOwnProperty(option)) {
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
		this.currentMaterial.mapTransparency = this.parseMap(tokens);
	}

	parse_map_Tr(tokens) {
		this.currentMaterial.mapTransparency = this.parseMap(tokens);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(0);
const basicmodel_1 = __webpack_require__(2);
const meshlessmodel_1 = __webpack_require__(26);
const Random = __webpack_require__(27);
const noisefield_1 = __webpack_require__(28);
const entity_1 = __webpack_require__(5);
var Terrain;
(function (Terrain) {
    Terrain[Terrain["RED_ROCK"] = 0] = "RED_ROCK";
    Terrain[Terrain["LEAFY"] = 1] = "LEAFY";
    Terrain[Terrain["ICY"] = 2] = "ICY";
    Terrain[Terrain["SANDY"] = 3] = "SANDY";
    Terrain[Terrain["GREY_ROCK"] = 4] = "GREY_ROCK";
})(Terrain = exports.Terrain || (exports.Terrain = {}));
class Disk extends entity_1.Entity {
    constructor(diskModel, type, radius, x, y, z) {
        super(gl_matrix_1.vec3.fromValues(x, y, z), gl_matrix_1.vec3.fromValues(radius, 1, radius), gl_matrix_1.vec3.fromValues(0, 0, 0), diskModel.mesh.name, entity_1.Model_Type.BASIC);
        if (!diskModel.initialized)
            throw "DiskModel was not initialized";
        this.diskModel = diskModel;
        this.radius = radius;
        this.type = type;
        this.initialized = false;
    }
    init(gl) {
        this.generateHeightMapModels(gl);
        this.heightMapModel.init(gl);
        let corner = this.radius * Math.SQRT2 / 2;
        let scale = gl_matrix_1.vec3.fromValues(corner * 2 / this.heightMapSize, 1, corner * 2 / this.heightMapSize);
        let position = gl_matrix_1.vec3.fromValues(this.position[0], this.position[1] + 0.0001, this.position[2]);
        this.heightMapEntity = new entity_1.Entity(position, scale, this.forward, this.heightMapModel.name, entity_1.Model_Type.MESHLESS);
        Disk.height_map_model_gen_count++;
        this.initialized = true;
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
        let verts = new Float32Array(vert_buffer_size * 8);
        let count = 0;
        for (let x = 0; x < this.heightMapSize + 1; x++) {
            for (let z = 0; z < this.heightMapSize + 1; z++) {
                //Position
                verts[count++] = x - (this.heightMapSize / 2);
                verts[count++] = this.heightMap[x][z];
                verts[count++] = z - (this.heightMapSize / 2);
                //Texture coords
                verts[count++] = x / 16.0;
                verts[count++] = z / 16.0;
                //Normals
                verts[count++] = 0;
                verts[count++] = 0;
                verts[count++] = 0;
            }
        }
        let index_buffer_size = this.heightMapSize * (this.heightMapSize) * 6;
        let indices = new Uint16Array(index_buffer_size);
        count = 0;
        //Create triangles using indices which reference vertices in the triangle strip
        for (let i = 0; i < vert_buffer_size - (this.heightMapSize + 1); i += (this.heightMapSize + 1)) {
            for (let j = 0; j < this.heightMapSize; j++) {
                const v = i + j;
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
            const i1 = indices[i] * 8;
            const i2 = indices[i + 1] * 8;
            const i3 = indices[i + 2] * 8;
            //Find normal using cross product
            // // (v2 - v1) cross (v3 - v1)
            let norm = new Array(3);
            const ax = verts[i2] - verts[i1], ay = verts[i2 + 1] - verts[i1 + 1], az = verts[i2 + 2] - verts[i1 + 2];
            const bx = verts[i3] - verts[i1], by = verts[i3 + 1] - verts[i1 + 1], bz = verts[i3 + 2] - verts[i1 + 2];
            norm[0] = ay * bz - az * by;
            norm[1] = az * bx - ax * bz;
            norm[2] = ax * by - ay * bx;
            //Add to the existing normals
            verts[i1 + 5] += norm[0];
            verts[i1 + 6] += norm[1];
            verts[i1 + 7] += norm[2];
            verts[i2 + 5] += norm[0];
            verts[i2 + 6] += norm[1];
            verts[i2 + 7] += norm[2];
            verts[i3 + 5] += norm[0];
            verts[i3 + 6] += norm[1];
            verts[i3 + 7] += norm[2];
        }
        this.heightMapModel = new meshlessmodel_1.MeshlessModel(verts, indices, this.diskModel.mesh.materialsByIndex[2]);
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
                    let x2 = (points[i][0] - x) * (points[i][0] - x);
                    let z2 = (points[i][2] - z) * (points[i][2] - z);
                    let distance = Math.sqrt(x2 + z2);
                    max = Math.max(max, points[i][1] - distance);
                    min = Math.min(min, points[i][1] + distance);
                }
                this.heightMap[x][z] = max + min;
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
    draw(gl, view_matrix, projection_matrix) {
        this.drawDiskModel(gl, view_matrix, projection_matrix);
        this.drawHeightMapModel(gl, view_matrix, projection_matrix);
    }
    drawDiskModel(gl, view_matrix, projection_matrix) {
        let model = gl_matrix_1.mat4.create();
        //Center the squares in the disk
        let pos = gl_matrix_1.vec3.fromValues(this.position[0], this.position[1], this.position[2]);
        gl_matrix_1.mat4.translate(model, model, pos);
        gl_matrix_1.mat4.scale(model, model, gl_matrix_1.vec3.fromValues(this.radius, 1, this.radius));
        basicmodel_1.BasicModel.setMVPMatrices(model, view_matrix, projection_matrix);
        this.diskModel.draw(gl);
    }
    drawHeightMapModel(gl, view_matrix, projection_matrix) {
        let model = gl_matrix_1.mat4.create();
        //Center the squares in the disk
        let pos = gl_matrix_1.vec3.fromValues(this.position[0], this.position[1], this.position[2]);
        let corner = this.radius * Math.SQRT2 / 2;
        pos[1] += 0.00001;
        gl_matrix_1.mat4.translate(model, model, pos);
        gl_matrix_1.mat4.scale(model, model, gl_matrix_1.vec3.fromValues(corner * 2 / this.heightMapSize, 1, corner * 2 / this.heightMapSize));
        basicmodel_1.BasicModel.setMVPMatrices(model, view_matrix, projection_matrix);
        this.heightMapModel.draw(gl);
    }
}
Disk.height_map_model_gen_count = 0;
exports.Disk = Disk;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
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
const gl_matrix_1 = __webpack_require__(0);
const shader_1 = __webpack_require__(9);
const camera_1 = __webpack_require__(20);
const player_1 = __webpack_require__(21);
const world_1 = __webpack_require__(25);
const skybox_1 = __webpack_require__(32);
const basicmodel_1 = __webpack_require__(2);
const Renderer_1 = __webpack_require__(34);
const basicmodelshader_1 = __webpack_require__(35);
const assert = __webpack_require__(36);
let MainLoop = __webpack_require__(41);
let is_mobile;
let demo_ticker = 0;
let document = window.document;
let canvas;
let gl;
let shader;
let instancedShader;
let basicModelShader;
let basicModelRenderer;
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
                document.fullscreenElement === canvas) { // Older API upper case 'S'.
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
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            is_mobile = true;
        }
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
            let start = Date.now();
            let loading = document.getElementById("loading");
            loading.innerText = "Loading Models and World. Please Wait.";
            let _worldMeshes = yield world_1.World.loadWorldMeshes();
            let _worldMat = yield world_1.World.loadWorldMat();
            let _worldData = yield world_1.World.loadWorldData();
            let skybox_model = yield skybox_1.Skybox.load();
            let _playerData = yield player_1.Player.loadMesh();
            this.player = new player_1.Player(gl, _playerData["cbabe"], playerOrigin);
            this.skybox = new skybox_1.Skybox(gl, skybox_model["Skybox"]);
            let w = Date.now();
            this.world = new world_1.World(gl, _worldData, _worldMeshes, _worldMat);
            console.log("world gen time: " + (Date.now() - w) / 1000 + "s");
            shader = yield new shader_1.Shader(gl, __webpack_require__(42), __webpack_require__(43));
            // instancedShader = await new Shader(gl, require('../src/shaders/instanced.vert'), require("../src/shaders/instanced.frag"));
            basicModelShader = yield new basicmodelshader_1.BasicModelShader(gl, __webpack_require__(44), __webpack_require__(45));
            basicModelRenderer = new Renderer_1.Renderer();
            basicModelRenderer.init(basicModelShader);
            basicModelRenderer.addBasicModel(this.player.model);
            basicModelRenderer.addEntityToRenderList(this.player);
            basicModelRenderer.addBasicModel(this.world.diskAModel);
            basicModelRenderer.addBasicModel(this.world.diskBModel);
            basicModelRenderer.addBasicModel(this.world.diskCModel);
            basicModelRenderer.addBasicModel(this.world.diskDModel);
            basicModelRenderer.addBasicModel(this.world.diskEModel);
            this.world.disks.forEach(disk => {
                assert(disk.initialized);
                basicModelRenderer.addEntityToRenderList(disk);
                basicModelRenderer.addMeshlessModel(disk.heightMapModel);
                basicModelRenderer.addEntityToRenderList(disk.heightMapEntity);
            });
            loading.remove();
            let end = Date.now();
            console.log("total time: " + (end - start) / 1000 + "s");
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
        shader.setIntByName("texture1", 0);
        basicModelShader.use();
        // instancedShader.setInt("material.diffuse", 0);
        // instancedShader.setInt("material.specular", 1);
        // instancedShader.setInt("material.emission", 2);
        basicmodel_1.BasicModel.initWithShader(gl, basicModelShader);
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
        if (is_mobile) {
            this.doDemo(delta);
        }
        else {
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
        let projection_matrix = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.identity(projection_matrix);
        let view_matrix = activeCamera.getViewMatrix();
        gl_matrix_1.mat4.perspective(projection_matrix, gl_matrix_1.glMatrix.toRadian(80), canvas.width / canvas.height, 0.1, 10000);
        let model = gl_matrix_1.mat4.create();
        //Draw Skybox
        gl.disable(gl.DEPTH_TEST);
        shader.use();
        gl_matrix_1.mat4.translate(model, model, activeCamera.position);
        shader.setFloatByName("ambient", 1.0);
        shader.setMat4ByName("model", model);
        let viewProjection = gl_matrix_1.mat4.create();
        viewProjection = gl_matrix_1.mat4.multiply(viewProjection, projection_matrix, view_matrix);
        shader.setMat4ByName("viewProjection", viewProjection);
        this.skybox.draw(gl);
        basicModelShader.use();
        // directional light
        basicModelShader.setBoolByName("lights[0].is_enabled", true);
        basicModelShader.setVec4ByName("lights[0].position", [0.34, 0.83, 0.44, 0.0]);
        basicModelShader.setVec3ByName("lights[0].ambient", [1.0, 1.0, 1.0]);
        basicModelShader.setVec3ByName("lights[0].diffuse", [1.0, 1.0, 1.0]);
        basicModelShader.setVec3ByName("lights[0].specular", [1.0, 1.0, 1.0]);
        //Setup player point light
        // basicModelShader.setBool("lights[1].is_enabled", true);
        // basicModelShader.setVec4("lights[1].position", [this.player.position[0], this.player.position[1], this.player.position[2], 1.0]);
        // basicModelShader.setVec3("lights[1].ambient", [0.05, 0.05, 0.05]);
        // basicModelShader.setVec3("lights[1].diffuse", [0.1, 0.1, 0.1]);
        // basicModelShader.setVec3("lights[1].specular", [0.0, 0.0, 0.0]);
        // basicModelShader.setVec3("lights[1].attenuation", [0.4, 0.09, 0.032]);
        basicModelShader.setVec3(basicModelShader.uniforms.camera_pos, activeCamera.position);
        // //Draw Disk
        gl.enable(gl.DEPTH_TEST);
        // this.world.draw(gl, view_matrix, projection_matrix);
        basicModelRenderer.render(gl, view_matrix, projection_matrix);
        // this.player.draw(gl, view_matrix, projection_matrix);
    }
    end(fps, panic) {
        fpsCounter.textContent = Math.round(fps) + ' FPS';
        if (panic) {
            var discardedTime = Math.round(MainLoop.resetFrameDelta());
            console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + 'ms');
        }
    }
    doDemo(delta) {
        demo_ticker++;
        this.player.move(player_1.Player_Movement.FORWARD, delta / 2);
        this.player.rotate(delta / 8);
        playerCamera.front[0] = this.player.forward[0];
        playerCamera.front[2] = this.player.forward[2];
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
/* 15 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(1);
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
/* 16 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(1);
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
/* 17 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(1);
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
/* 18 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4__ = __webpack_require__(8);
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
/* 19 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(1);
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(0);
const gl_matrix_2 = __webpack_require__(0);
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
/* 21 */
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
const gl_matrix_1 = __webpack_require__(0);
const playermodel_1 = __webpack_require__(22);
const basicmodel_1 = __webpack_require__(2);
const entity_1 = __webpack_require__(5);
let OBJ = __webpack_require__(3);
const SPEED = 20;
var Player_Movement;
(function (Player_Movement) {
    Player_Movement[Player_Movement["FORWARD"] = 0] = "FORWARD";
    Player_Movement[Player_Movement["BACKWARD"] = 1] = "BACKWARD";
    Player_Movement[Player_Movement["LEFT"] = 2] = "LEFT";
    Player_Movement[Player_Movement["RIGHT"] = 3] = "RIGHT";
})(Player_Movement = exports.Player_Movement || (exports.Player_Movement = {}));
class Player extends entity_1.Entity {
    constructor(gl, mesh, pos) {
        super(pos, null, gl_matrix_1.vec3.fromValues(1, 0, 0), mesh.name, entity_1.Model_Type.BASIC);
        this.model = new playermodel_1.PlayerModel(mesh);
        this.model.rotation_offset = gl_matrix_1.vec3.fromValues(0, 0, -Math.PI / 2);
        this.model.init(gl);
        this.up = gl_matrix_1.vec3.fromValues(0, 1, 0);
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
    draw(gl, view_matrix, projection_matrix) {
        //Draws Player in front of camera, always facing away from camera
        let model = gl_matrix_1.mat4.create();
        //Move player model to its position
        gl_matrix_1.mat4.translate(model, model, this.position);
        //Rotate model to face away from camera
        gl_matrix_1.mat4.rotateY(model, model, Math.atan2(this.forward[0], this.forward[2]) - Math.PI / 2);
        basicmodel_1.BasicModel.setMVPMatrices(model, view_matrix, projection_matrix);
        this.model.draw(gl);
    }
    static loadMesh() {
        return __awaiter(this, void 0, void 0, function* () {
            return OBJ.downloadModels([
                {
                    name: 'cbabe',
                    obj: "/assets/models/actors/cbabe/cbabe_stand.obj",
                    mtl: "/assets/models/actors/cbabe/cbabe.mtl"
                }
            ]);
        });
    }
}
exports.Player = Player;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const basicmodel_1 = __webpack_require__(2);
class PlayerModel extends basicmodel_1.BasicModel {
    constructor(mesh) {
        super(mesh);
    }
    init(gl) {
        super.init(gl);
        this.initAllTextures(gl);
        // if (!this.initTexture(gl, 0)) {
        //     console.warn("Player model texture 0 wasn't downloaded")
        // }
    }
}
exports.PlayerModel = PlayerModel;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = downloadMtlTextures;
/* harmony export (immutable) */ __webpack_exports__["c"] = downloadModels;
/* harmony export (immutable) */ __webpack_exports__["b"] = downloadMeshes;
/* harmony export (immutable) */ __webpack_exports__["e"] = initMeshBuffers;
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteMeshBuffers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material__ = __webpack_require__(11);
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
    let loading = {};
    for (let attr of mapAttributes) {
     
      let mapData = material[attr];
      if (!mapData) {
        continue;
      }

      let url = root + mapData.filename;
      if(!loading.hasOwnProperty(mapData.filename)){
        loading[mapData.filename] = new Image();
		  textures.push(
			  fetch(url)
				  .then((response) => {
					  if (!response.ok) {
						  throw new Error()
					  }
					  return response.blob();
				  })
				  .then(function(data) {
					  loading[mapData.filename].src = URL.createObjectURL(data);
					  mapData.texture = loading[mapData.filename];
				  })
				  .catch(() => {
					  console.error(`Unable to download texture: ${url}`);
				  })
		  );
	  }else{
        mapData.texture = loading[mapData.filename];
      }
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
exports.Guid = Guid;


/***/ }),
/* 25 */
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
const disk_1 = __webpack_require__(12);
const diskmodel_1 = __webpack_require__(29);
let OBJ = __webpack_require__(3);
const index_js_1 = __webpack_require__(3);
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
        }
        this.disks.forEach(disk => {
            disk.init(gl);
        });
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
    draw(gl, view_matrix, projection_matrix) {
        this.disks.forEach(disk => {
            disk.draw(gl, view_matrix, projection_matrix);
        });
    }
}
exports.World = World;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const disk_1 = __webpack_require__(12);
const basicmodel_1 = __webpack_require__(2);
const gl_matrix_1 = __webpack_require__(0);
class MeshlessModel {
    constructor(data, indices, mat) {
        this.data = data;
        this.indices = indices;
        this.stride = 8;
        this.name = "height_map_model_" + disk_1.Disk.height_map_model_gen_count;
        this.material = mat;
        this.rotation_offset = gl_matrix_1.vec3.fromValues(0, 0, 0);
    }
    init(gl) {
        this.VAO = gl.createVertexArray();
        this.buffer = gl.createBuffer();
        this.index_buffer = gl.createBuffer();
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, this.stride * 4, 0);
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, true, this.stride * 4, 12);
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, true, this.stride * 4, 20);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
        this.texture = this.material.mapDiffuse.texture_id;
        this.initialized = true;
    }
    activateBuffers(gl) {
        gl.bindVertexArray(this.VAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
    }
    activateMaterial(gl) {
        // gl.activeTexture(gl.TEXTURE0);
        // gl.bindTexture(gl.TEXTURE_2D, this.texture);
        if (this.material.isTextureActive[0] && this.material.mapTransparency.texture_id) {
            gl.activeTexture(gl.TEXTURE0); // transparency
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapTransparency.texture_id);
        }
        if (this.material.isTextureActive[1] && this.material.mapEmissive.texture_id) {
            gl.activeTexture(gl.TEXTURE1); // emission
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapEmissive.texture_id);
        }
        if (this.material.isTextureActive[2] && this.material.mapAmbient.texture_id) {
            gl.activeTexture(gl.TEXTURE2); // ambient
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapAmbient.texture_id);
        }
        if (this.material.isTextureActive[3] && this.material.mapDiffuse.texture_id) {
            gl.activeTexture(gl.TEXTURE3); // diffuse
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapDiffuse.texture_id);
        }
        if (this.material.isTextureActive[4] && this.material.mapSpecular.texture_id) {
            gl.activeTexture(gl.TEXTURE4); // specular
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapSpecular.texture_id);
        }
        if (this.material.isTextureActive[5] && this.material.mapSpecularExponent.texture_id) {
            gl.activeTexture(gl.TEXTURE5); // shininess
            gl.bindTexture(gl.TEXTURE_2D, this.material.mapSpecularExponent.texture_id);
        }
        basicmodel_1.BasicModel.shader.setFloat(basicmodel_1.BasicModel.shader.uniforms.material_transparency, this.material.transparency);
        basicmodel_1.BasicModel.shader.setVec3(basicmodel_1.BasicModel.shader.uniforms.material_ambient_colour, this.material.ambient);
        basicmodel_1.BasicModel.shader.setVec3(basicmodel_1.BasicModel.shader.uniforms.material_diffuse_colour, this.material.diffuse);
        basicmodel_1.BasicModel.shader.setVec3(basicmodel_1.BasicModel.shader.uniforms.material_specular_colour, this.material.specular);
        basicmodel_1.BasicModel.shader.setVec3(basicmodel_1.BasicModel.shader.uniforms.material_emissive_colour, this.material.emissive);
        basicmodel_1.BasicModel.shader.setFloat(basicmodel_1.BasicModel.shader.uniforms.material_shininess, this.material.specularExponent);
        basicmodel_1.BasicModel.shader.setIntV(basicmodel_1.BasicModel.shader.uniforms.material_is_texture_active, this.material.isTextureActive);
    }
    draw(gl) {
        this.activateBuffers(gl);
        this.activateMaterial(gl);
        this.drawActivatedMaterial(gl);
    }
    drawActivatedMaterial(gl) {
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
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
const basicmodel_1 = __webpack_require__(2);
class DiskModel extends basicmodel_1.BasicModel {
    constructor(mesh) {
        super(mesh);
    }
    init(gl) {
        super.init(gl);
        //Initialize the textures: side tex, side black, top tex
        this.initAllTextures(gl);
        let blackTexture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, blackTexture);
        const pixel = new Uint8Array([0, 0, 0, 255]); // opaque black
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, pixel);
        this.setTexture(blackTexture, 1);
    }
}
exports.DiskModel = DiskModel;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "#\r\n#  Disks.mtl\r\n#\r\n\r\nnewmtl diskA\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd DiskA.jpg\r\nmap_Ka DiskA.jpg\r\n\r\nnewmtl diskA_side\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd DiskA_side.jpg\r\nmap_Ka DiskA_side.jpg\r\n\r\nnewmtl diskB\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd DiskB.jpg\r\nmap_Ka DiskB.jpg\r\n\r\nnewmtl diskB_side\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd DiskB_side.jpg\r\nmap_Ka DiskB_side.jpg\r\n\r\nnewmtl diskC\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd DiskC.jpg\r\nmap_Ka DiskC.jpg\r\n\r\n\r\nnewmtl diskC_side\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd DiskC_side.jpg\r\nmap_Ka DiskC_side.jpg\r\n\r\nnewmtl diskD\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nKs 0.0 0.0 0.0\r\nmap_Kd DiskD.jpg\r\nmap_Ka DiskD.jpg\r\n\r\nnewmtl diskD_side\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd DiskD_side.jpg\r\nmap_Ka DiskD_side.jpg\r\n\r\nnewmtl diskE\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd DiskE.jpg\r\nmap_Ka DiskE.jpg\r\n\r\nnewmtl diskE_side\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd DiskE_side.jpg\r\nmap_Ka DiskE_side.jpg\r\n\r\nnewmtl flat_black\r\nillum 0\r\nKd 0.00 0.00 0.00\r\nKa 0.00 0.00 0.00\r\n\r\nnewmtl rainbow\r\nillum 1\r\nKd 0.80 0.80 0.80\r\nKa 0.20 0.20 0.20\r\nmap_Kd Rainbow.jpg\r\nmap_Ka Rainbow.jpg\r\n"

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
let OBJ = __webpack_require__(3);
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
const basicmodel_1 = __webpack_require__(2);
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
            let submesh = this.mesh.submesh[index];
            let byteSize = 2;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.drawElements(gl.TRIANGLES, this.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, submesh.offset * is * byteSize);
        });
        gl.bindVertexArray(null);
    }
}
exports.SkyboxModel = SkyboxModel;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const basicmodel_1 = __webpack_require__(2);
const entity_1 = __webpack_require__(5);
const gl_matrix_1 = __webpack_require__(0);
class Renderer {
    constructor() {
        this.models = new Map();
        this.materials = new Map();
        this.entities = new Map();
        this.meshless_models = new Map();
    }
    init(shader) {
        this.basicModelShader = shader;
    }
    addBasicModel(model) {
        if (this.models.get(model.mesh.name) === undefined) {
            this.models.set(model.mesh.name, model);
        }
        for (var key in model.mesh.materialNames) {
            if (this.materials.get(model.mesh.materialNames[key]) === undefined) {
                this.materials.set(model.mesh.materialNames[key], model.mesh.materialsByIndex[key]);
            }
        }
    }
    addMeshlessModel(model) {
        if (this.meshless_models.get(model.name) === undefined) {
            this.meshless_models.set(model.name, model);
        }
        if (this.materials.get(model.material.name) === undefined) {
            this.materials.set(model.material.name, model.material);
        }
    }
    addEntityToRenderList(entity) {
        if (this.entities.get(entity.id) === undefined) {
            this.entities.set(entity.id, entity);
        }
        if (entity.model_type == entity_1.Model_Type.BASIC) {
            if (this.models.get(entity.mesh_name) === undefined) {
                console.log("Basic Model Missing: " + entity.mesh_name);
            }
        }
        else if (entity.model_type == entity_1.Model_Type.MESHLESS) {
            if (this.meshless_models.get(entity.mesh_name) === undefined) {
                console.log("Meshless Model Missing: " + entity.mesh_name);
            }
        }
    }
    prepareBasicModelShader(gl) {
        this.basicModelShader.use();
        gl.enable(gl.DEPTH_TEST);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, basicmodel_1.BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, basicmodel_1.BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, basicmodel_1.BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE3);
        gl.bindTexture(gl.TEXTURE_2D, basicmodel_1.BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE4);
        gl.bindTexture(gl.TEXTURE_2D, basicmodel_1.BasicModel.emptyTexture);
        gl.activeTexture(gl.TEXTURE5);
        gl.bindTexture(gl.TEXTURE_2D, basicmodel_1.BasicModel.emptyTexture);
        this.basicModelShader.setBool(this.basicModelShader.uniforms.tween_enabled, false);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_transparency_texture, 0);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_emission_texture, 1);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_ambient_texture, 2);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_diffuse_texture, 3);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_specular_texture, 4);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_shininess_texture, 5);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_transparency_channel, 0);
        this.basicModelShader.setInt(this.basicModelShader.uniforms.material_shininess_channel, 0);
    }
    render(gl, view_matrix, projection_matrix) {
        //sort entities
        this.prepareBasicModelShader(gl);
        this.renderMeshlessModels(gl, view_matrix, projection_matrix);
        this.renderBasicModels(gl, view_matrix, projection_matrix);
    }
    renderMeshlessModels(gl, view_matrix, projection_matrix) {
        let mat_list = [];
        for (const [key, model] of this.meshless_models.entries()) {
            if (mat_list.indexOf(model.material.name) < 0) {
                mat_list.push(model.material.name);
            }
        }
        for (let j = 0; j < mat_list.length; j++) {
            //activate mat first
            let activated = false;
            //Loop over all models
            for (const [key, model] of this.meshless_models.entries()) {
                if (model.material.name !== mat_list[j])
                    continue;
                //Find all the things we want to draw with this model
                let entities_to_draw = [];
                for (const [key, entity] of this.entities.entries()) {
                    if (entity.model_type == entity_1.Model_Type.MESHLESS && model.name == entity.mesh_name) {
                        entities_to_draw.push(entity);
                    }
                }
                //If things to draw
                if (entities_to_draw.length > 0) {
                    //Activate this model
                    model.activateBuffers(gl);
                    //Activate the material
                    if (!activated) {
                        model.activateMaterial(gl);
                        activated = true;
                    }
                    for (let i = 0; i < entities_to_draw.length; i++) { //
                        let model_matrix = gl_matrix_1.mat4.create();
                        //Move player model to its position
                        gl_matrix_1.mat4.translate(model_matrix, model_matrix, entities_to_draw[i].position);
                        //Rotate model to face away from camera
                        gl_matrix_1.mat4.rotateY(model_matrix, model_matrix, Math.atan2(entities_to_draw[i].forward[0] + model.rotation_offset[0], entities_to_draw[i].forward[2]) + model.rotation_offset[2]);
                        //Scale
                        gl_matrix_1.mat4.scale(model_matrix, model_matrix, entities_to_draw[i].scalar);
                        //Set matrices in shader
                        basicmodel_1.BasicModel.setMVPMatrices(model_matrix, view_matrix, projection_matrix);
                        model.drawActivatedMaterial(gl);
                    }
                }
            }
        }
    }
    renderBasicModels(gl, view_matrix, projection_matrix) {
        let mat_list = [];
        for (const [key, model] of this.models.entries()) {
            for (const i in model.mesh.materialNames) {
                if (mat_list.indexOf(model.mesh.materialsByIndex[i].name) < 0) {
                    mat_list.push(model.mesh.materialsByIndex[i].name);
                }
            }
        }
        for (let j = 0; j < mat_list.length; j++) {
            for (const [key, model] of this.models.entries()) {
                let skip = true;
                let mat_id = 0;
                for (const i in model.mesh.materialNames) {
                    if (model.mesh.materialsByIndex[i] && model.mesh.materialsByIndex[i].name == mat_list[j]) {
                        model.activateMaterial(gl, Number(i));
                        mat_id = Number(i);
                        skip = false;
                        break;
                    }
                }
                if (skip)
                    continue;
                let entities_to_draw = [];
                for (const [key, entity] of this.entities.entries()) {
                    if (entity.model_type == entity_1.Model_Type.BASIC && model.mesh.name == entity.mesh_name) {
                        entities_to_draw.push(entity);
                    }
                }
                if (entities_to_draw.length > 0) {
                    model.activateBuffers(gl);
                    for (let i = 0; i < entities_to_draw.length; i++) {
                        let model_matrix = gl_matrix_1.mat4.create();
                        //Move player model to its position
                        gl_matrix_1.mat4.translate(model_matrix, model_matrix, entities_to_draw[i].position);
                        //Rotate model to face away from camera
                        gl_matrix_1.mat4.rotateY(model_matrix, model_matrix, Math.atan2(entities_to_draw[i].forward[0] + model.rotation_offset[0], entities_to_draw[i].forward[2]) + model.rotation_offset[2]);
                        //Scale
                        gl_matrix_1.mat4.scale(model_matrix, model_matrix, entities_to_draw[i].scalar);
                        //Set matrices in shader
                        basicmodel_1.BasicModel.setMVPMatrices(model_matrix, view_matrix, projection_matrix);
                        //Draw triangle list
                        model.drawActivatedMaterial(gl, mat_id);
                    }
                }
            }
        }
    }
}
exports.Renderer = Renderer;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const shader_1 = __webpack_require__(9);
class Uniforms {
}
;
class BasicModelShader extends shader_1.Shader {
    constructor(gl, vertexSourceCode, fragmentSourceCode) {
        super(gl, vertexSourceCode, fragmentSourceCode);
        this.uniforms = new Uniforms();
        this.uniforms.model_matrix = this.getUniformLocation("model_matrix");
        this.uniforms.view_matrix = this.getUniformLocation("view_matrix");
        this.uniforms.model_view_projection_matrix = this.getUniformLocation("model_view_projection_matrix");
        this.uniforms.camera_pos = this.getUniformLocation("camera_pos");
        this.uniforms.tween_enabled = this.getUniformLocation("tween_enabled");
        this.uniforms.material_transparency_texture = this.getUniformLocation("material.transparency_texture");
        this.uniforms.material_emission_texture = this.getUniformLocation("material.emission_texture");
        this.uniforms.material_ambient_texture = this.getUniformLocation("material.ambient_texture");
        this.uniforms.material_diffuse_texture = this.getUniformLocation("material.diffuse_texture");
        this.uniforms.material_specular_texture = this.getUniformLocation("material.specular_texture");
        this.uniforms.material_shininess_texture = this.getUniformLocation("material.shininess_texture");
        this.uniforms.material_transparency_channel = this.getUniformLocation("material.transparency_channel");
        this.uniforms.material_shininess_channel = this.getUniformLocation("material.shininess_channel");
        this.uniforms.material_transparency = this.getUniformLocation("material.transparency");
        this.uniforms.material_ambient_colour = this.getUniformLocation("material.ambient_colour");
        this.uniforms.material_diffuse_colour = this.getUniformLocation("material.diffuse_colour");
        this.uniforms.material_specular_colour = this.getUniformLocation("material.specular_colour");
        this.uniforms.material_emissive_colour = this.getUniformLocation("material.emissive_colour");
        this.uniforms.material_shininess = this.getUniformLocation("material.shininess");
        this.uniforms.material_is_texture_active = this.getUniformLocation("material.is_texture_active");
    }
    use() {
        this.gl.useProgram(this.ID);
    }
    setBoolByName(name, value) {
        this.gl.uniform1i(this.getUniformLocation(name), value ? 1 : 0);
    }
    setBool(id, value) {
        this.gl.uniform1i(id, value ? 1 : 0);
    }
    setInt(id, value) {
        this.gl.uniform1i(id, value);
    }
    setIntByName(name, value) {
        this.gl.uniform1i(this.getUniformLocation(name), value);
    }
    setIntV(id, value) {
        this.gl.uniform1iv(id, value);
    }
    setIntVByName(name, value) {
        this.gl.uniform1iv(this.getUniformLocation(name), value);
    }
    setFloat(id, value) {
        this.gl.uniform1f(id, value);
    }
    setFloatByName(name, value) {
        this.gl.uniform1f(this.getUniformLocation(name), value);
    }
    getUniformLocation(name) {
        var a = this.gl.getUniformLocation(this.ID, name);
        return a;
    }
    setMat4(id, matrix) {
        this.gl.uniformMatrix4fv(id, false, matrix);
    }
    setMat4ByName(name, matrix) {
        this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, matrix);
    }
    setVec3(id, vec) {
        this.gl.uniform3fv(id, vec);
    }
    setVec3ByName(name, vec) {
        this.gl.uniform3fv(this.getUniformLocation(name), vec);
    }
    setVec4(id, vec) {
        this.gl.uniform4fv(id, vec);
    }
    setVec4ByName(name, vec) {
        this.gl.uniform4fv(this.getUniformLocation(name), vec);
    }
}
exports.BasicModelShader = BasicModelShader;
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(37);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(39);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(40);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), __webpack_require__(38)))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nlayout (location = 0) in vec3 aPos;\r\nlayout (location = 1) in vec2 aTexCoord;\r\n\r\nout vec2 TexCoord;\r\n\r\nuniform mat4 model;\r\nuniform mat4 viewProjection;\r\n\r\nvoid main()\r\n{\r\n    gl_Position = viewProjection * model *  vec4(aPos,1.0f);\r\n    TexCoord = aTexCoord;\r\n}   "

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision mediump  float;\r\nout vec4 FragColor;\r\n\r\nin vec2 TexCoord;\r\n\r\nuniform sampler2D texture1;\r\nuniform float ambient;\r\n\r\nvoid main()\r\n{\r\n    FragColor = vec4(ambient * texture(texture1, TexCoord).xyz,1.0);\r\n\r\n    //FragColor = vec4(1, 0.7, 0.5, 1); // set all 4 vector values to 1.0\r\n}"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nuniform mat4 model_matrix;\r\nuniform mat4 view_matrix;\r\nuniform mat4 model_view_projection_matrix;\r\nuniform vec3 camera_pos;\r\n\r\nuniform bool tween_enabled;\r\nuniform float tween_factor;\r\n\r\nlayout (location = 0) in vec3 a_vertex;\r\nlayout (location = 1) in vec2 a_tex_coord;\r\nlayout (location = 2) in vec3 a_normal;\r\n\r\n\r\nout vec3 position;\r\nout vec2 tex_coord;\r\nout vec3 normal;\r\nout vec3 to_camera;\r\n\r\nvoid main()\r\n{\r\n//    vec3 new_normal = a_normal;\r\n//    vec3 new_vertex = a_vertex;\r\n//    if(tween_enabled)\r\n//\t{\r\n//\t\tnew_normal = mix(a_normal,a_normal1,tween_factor);      \r\n//        new_vertex = mix(a_vertex,a_vertex1,tween_factor);\r\n//    }\r\n\t\r\n\tvec4 world_position = model_matrix * vec4(a_vertex, 1.0);\r\n\r\n\tposition   = world_position.xyz;\r\n\ttex_coord = a_tex_coord;\r\n\tnormal    = mat3(transpose(inverse(model_matrix))) * a_normal;\r\n\tto_camera  = normalize(camera_pos - world_position.xyz);\r\n\r\n\tgl_Position = model_view_projection_matrix * vec4(a_vertex, 1.0);\r\n}\r\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision mediump  float;\r\n\r\nconst int LIGHT_COUNT = 8;\r\n\r\nstruct Material {\r\n\r\n    //Textures\r\n    bool is_texture_active[6];\r\n    sampler2D transparency_texture;\r\n    sampler2D emission_texture;\r\n    sampler2D ambient_texture;\r\n    sampler2D diffuse_texture;\r\n    sampler2D specular_texture;\r\n    sampler2D shininess_texture;\r\n            \r\n    //Colors\r\n    float transparency;\r\n    vec3 emission_colour;\r\n    vec3 ambient_colour;\r\n    vec3 diffuse_colour;\r\n    vec3 specular_colour;\r\n    float shininess;\r\n    int transparency_channel;\r\n    int shininess_channel;\r\n\r\n}; \r\nuniform Material material;\r\n\r\n\r\nstruct Light{\r\n    bool is_enabled;\r\n    vec4 position;\r\n    vec3 ambient;\r\n    vec3 diffuse;\r\n    vec3 specular;\r\n    vec3 attenuation;\r\n};\r\n\r\nuniform Light lights[LIGHT_COUNT];\r\n\r\nin vec3 position;\r\nin vec2 tex_coord;\r\nin vec3 normal;\r\nin vec3 to_camera;\r\n\r\nout vec4 FragColor;\r\n\r\nvoid main()\r\n{\r\n\r\n\r\n\tvec3 normalized_normal    = normalize(normal);\r\n\tvec3 normalized_to_camera = normalize(to_camera);\r\n\r\n\tfloat transparency_on_texture = texture(material.transparency_texture, tex_coord)[material.transparency_channel];\r\n\tvec3      emission_on_texture = texture(    material.emission_texture, tex_coord).rgb;\r\n\tvec3       ambient_on_texture = texture(     material.ambient_texture, tex_coord).rgb;\r\n\tvec3       diffuse_on_texture = texture(     material.diffuse_texture, tex_coord).rgb;\r\n\tvec3      specular_on_texture = texture(    material.specular_texture, tex_coord).rgb;\r\n\tfloat    shininess_on_texture = texture(   material.shininess_texture, tex_coord)[material.shininess_channel];\r\n\r\n\tfloat transparency2    = material.transparency;\r\n\tvec3  emission_surface = material.emission_colour;\r\n\tvec3   ambient_surface =  material.ambient_colour;\r\n\tvec3   diffuse_surface =  material.diffuse_colour;\r\n\tvec3  specular_surface = material.specular_colour;\r\n\tfloat shininess2       = material.shininess;\r\n\r\n\tif(material.is_texture_active[0]) transparency2    *= transparency_on_texture;\r\n\tif(material.is_texture_active[1]) emission_surface *=     emission_on_texture;\r\n\tif(material.is_texture_active[2])  ambient_surface *=      ambient_on_texture;\r\n\tif(material.is_texture_active[3])  diffuse_surface *=      diffuse_on_texture;\r\n\tif(material.is_texture_active[4]) specular_surface *=     specular_on_texture;\r\n\tif(material.is_texture_active[5]) shininess2       *=    shininess_on_texture;\r\n\r\n\tvec3 basic_colour      = emission_surface;\r\n\tvec4 seperate_specular = vec4(0.0, 0.0, 0.0, 0.0);\r\n\r\n\t// calculate the effects of each light\r\n\r\n\tfor(int i = 0; i < LIGHT_COUNT; i++)\r\n\t\tif(lights[i].is_enabled)\r\n\t\t{\r\n\t\t\tvec3 light_direction_from;\r\n\t\t\tfloat attenuation = 1.0;\r\n\t\t\tif(lights[i].position.w == 0.0)\r\n\t\t\t\tlight_direction_from = normalize(lights[i].position.xyz);\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvec3 offset_position = lights[i].position.xyz - position;\r\n\t\t\t\tlight_direction_from = normalize(offset_position);\r\n\t\t\t\tfloat light_distance = length(offset_position);\r\n\t\t\t\tattenuation = 1.0 / (lights[i].attenuation.x +\r\n\t\t\t\t                  lights[i].attenuation.y * light_distance +\r\n\t\t\t\t                    lights[i].attenuation.z * light_distance * light_distance);\r\n\t\t\t}\r\n\r\n\t\t\t//  Phong-Blinn shading\r\n\r\n\t\t\tvec3 half_angle_direction = normalize(normalized_to_camera + light_direction_from);\r\n\r\n\t\t\tfloat  ambient_intensity = attenuation;\r\n\t\t\tfloat  diffuse_intensity = attenuation *     max(0.0, dot(normalized_normal, light_direction_from));\r\n\t\t\tfloat specular_intensity = attenuation * pow(max(0.0, dot(normalized_normal, half_angle_direction)), shininess2);\r\n\r\n\t\t\tbasic_colour += ambient_surface * lights[i].ambient * ambient_intensity +\r\n\t\t\t                diffuse_surface * lights[i].diffuse * diffuse_intensity;\r\n\r\n\t\t\tvec3 specular_colour = specular_surface * lights[i].specular;\r\n//\t\t\tif(is_seperate_specular)\r\n//\t\t\t{\r\n//\t\t\t\tfloat specular_max = max(max(specular_colour.r, specular_colour.g), specular_colour.b);\r\n//\t\t\t\tif(specular_max > 0.0)\r\n//\t\t\t\t{\r\n//\t\t\t\t\tspecular_intensity *= specular_max;\r\n//\t\t\t\t\tspecular_colour    /= specular_max;\r\n//\r\n//\t\t\t\t\tseperate_specular = vec4(seperate_specular.rgb * seperate_specular.a +\r\n//\t\t\t\t\t                         specular_colour       * specular_intensity,\r\n//\t\t\t\t\t                         seperate_specular.a + specular_intensity);\r\n//\t\t\t\t}\r\n//\t\t\t\t// else no specular highlight\r\n//\t\t\t}\r\n//\t\t\telse\r\n\t\t\t\tbasic_colour += specular_colour * specular_intensity;\r\n\t\t}\r\n\r\n\t// calculate the final colour\r\n\r\n\tif(seperate_specular.a > 1.0)\r\n\t\tseperate_specular.a = 1.0;\r\n\r\n\tfloat basic_transparency = transparency2 * (1.0 - seperate_specular.a);\r\n\r\n\tif(basic_transparency + seperate_specular.a <= 0.0)\r\n\t\tdiscard;\r\n\r\n\tFragColor = vec4(basic_colour, basic_transparency) + seperate_specular;\r\n}\r\n"

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map