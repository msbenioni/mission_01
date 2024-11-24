/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/predict/route";
exports.ids = ["app/api/predict/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpredict%2Froute&page=%2Fapi%2Fpredict%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredict%2Froute.ts&appDir=C%3A%5CUsers%5CJasminB%5COneDrive%5CDesktop%5CMission%20One%5Cturners_karts%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJasminB%5COneDrive%5CDesktop%5CMission%20One%5Cturners_karts&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpredict%2Froute&page=%2Fapi%2Fpredict%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredict%2Froute.ts&appDir=C%3A%5CUsers%5CJasminB%5COneDrive%5CDesktop%5CMission%20One%5Cturners_karts%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJasminB%5COneDrive%5CDesktop%5CMission%20One%5Cturners_karts&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_JasminB_OneDrive_Desktop_Mission_One_turners_karts_app_api_predict_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/predict/route.ts */ \"(rsc)/./app/api/predict/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/predict/route\",\n        pathname: \"/api/predict\",\n        filename: \"route\",\n        bundlePath: \"app/api/predict/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\JasminB\\\\OneDrive\\\\Desktop\\\\Mission One\\\\turners_karts\\\\app\\\\api\\\\predict\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_JasminB_OneDrive_Desktop_Mission_One_turners_karts_app_api_predict_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcmVkaWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcmVkaWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJlZGljdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNKYXNtaW5CJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDTWlzc2lvbiUyME9uZSU1Q3R1cm5lcnNfa2FydHMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0phc21pbkIlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNNaXNzaW9uJTIwT25lJTVDdHVybmVyc19rYXJ0cyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDOEM7QUFDM0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEphc21pbkJcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxNaXNzaW9uIE9uZVxcXFx0dXJuZXJzX2thcnRzXFxcXGFwcFxcXFxhcGlcXFxccHJlZGljdFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJlZGljdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ByZWRpY3RcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ByZWRpY3Qvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxKYXNtaW5CXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcTWlzc2lvbiBPbmVcXFxcdHVybmVyc19rYXJ0c1xcXFxhcHBcXFxcYXBpXFxcXHByZWRpY3RcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpredict%2Froute&page=%2Fapi%2Fpredict%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredict%2Froute.ts&appDir=C%3A%5CUsers%5CJasminB%5COneDrive%5CDesktop%5CMission%20One%5Cturners_karts%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJasminB%5COneDrive%5CDesktop%5CMission%20One%5Cturners_karts&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/predict/route.ts":
/*!**********************************!*\
  !*** ./app/api/predict/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(request) {\n    try {\n        console.log('API route started');\n        const formData = await request.formData();\n        const file = formData.get('image');\n        if (!file) {\n            console.log('No file provided');\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'No image file provided'\n            }, {\n                status: 400\n            });\n        }\n        // Convert image to base64\n        const bytes = await file.arrayBuffer();\n        const base64Image = Buffer.from(bytes).toString('base64');\n        // Make prediction request to Python backend\n        const response = await fetch('http://localhost:5000/predict', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                image: base64Image\n            })\n        });\n        if (!response.ok) {\n            const errorText = await response.text();\n            throw new Error(`Prediction API error: ${response.status} - ${errorText}`);\n        }\n        const prediction = await response.json();\n        // Return in the format expected by the frontend\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            predictions: prediction // This should contain kartType and confidence\n        });\n    } catch (error) {\n        console.error('API Error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Error processing image',\n            details: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ByZWRpY3Qvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFbkMsZUFBZUMsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGQyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxXQUFXLE1BQU1ILFFBQVFHLFFBQVE7UUFDdkMsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRyxDQUFDO1FBRTFCLElBQUksQ0FBQ0QsTUFBTTtZQUNUSCxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPSixxREFBWUEsQ0FBQ1EsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUF5QixHQUNsQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsMEJBQTBCO1FBQzFCLE1BQU1DLFFBQVEsTUFBTUwsS0FBS00sV0FBVztRQUNwQyxNQUFNQyxjQUFjQyxPQUFPQyxJQUFJLENBQUNKLE9BQU9LLFFBQVEsQ0FBQztRQUVoRCw0Q0FBNEM7UUFDNUMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlDQUFpQztZQUM1REMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CQyxPQUFPWDtZQUNUO1FBQ0Y7UUFFQSxJQUFJLENBQUNJLFNBQVNRLEVBQUUsRUFBRTtZQUNoQixNQUFNQyxZQUFZLE1BQU1ULFNBQVNVLElBQUk7WUFDckMsTUFBTSxJQUFJQyxNQUFNLENBQUMsc0JBQXNCLEVBQUVYLFNBQVNQLE1BQU0sQ0FBQyxHQUFHLEVBQUVnQixXQUFXO1FBQzNFO1FBRUEsTUFBTUcsYUFBYSxNQUFNWixTQUFTVCxJQUFJO1FBRXRDLGdEQUFnRDtRQUNoRCxPQUFPUixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3ZCc0IsU0FBUztZQUNUQyxhQUFhRixXQUFZLDhDQUE4QztRQUN6RTtJQUVGLEVBQUUsT0FBT3BCLE9BQU87UUFDZE4sUUFBUU0sS0FBSyxDQUFDLGNBQWNBO1FBQzVCLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQ0VDLE9BQU87WUFDUHVCLFNBQVN2QixNQUFNd0IsT0FBTztRQUN4QixHQUNBO1lBQUV2QixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxKYXNtaW5CXFxPbmVEcml2ZVxcRGVza3RvcFxcTWlzc2lvbiBPbmVcXHR1cm5lcnNfa2FydHNcXGFwcFxcYXBpXFxwcmVkaWN0XFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coJ0FQSSByb3V0ZSBzdGFydGVkJylcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXHJcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdpbWFnZScpIGFzIEZpbGVcclxuICAgIFxyXG4gICAgaWYgKCFmaWxlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBmaWxlIHByb3ZpZGVkJylcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdObyBpbWFnZSBmaWxlIHByb3ZpZGVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29udmVydCBpbWFnZSB0byBiYXNlNjRcclxuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpXHJcbiAgICBjb25zdCBiYXNlNjRJbWFnZSA9IEJ1ZmZlci5mcm9tKGJ5dGVzKS50b1N0cmluZygnYmFzZTY0JylcclxuXHJcbiAgICAvLyBNYWtlIHByZWRpY3Rpb24gcmVxdWVzdCB0byBQeXRob24gYmFja2VuZFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3ByZWRpY3QnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGltYWdlOiBiYXNlNjRJbWFnZVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFByZWRpY3Rpb24gQVBJIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c30gLSAke2Vycm9yVGV4dH1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZWRpY3Rpb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIFxyXG4gICAgLy8gUmV0dXJuIGluIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlIGZyb250ZW5kXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBwcmVkaWN0aW9uczogcHJlZGljdGlvbiAgLy8gVGhpcyBzaG91bGQgY29udGFpbiBrYXJ0VHlwZSBhbmQgY29uZmlkZW5jZVxyXG4gICAgfSlcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSBFcnJvcjonLCBlcnJvcilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBcclxuICAgICAgICBlcnJvcjogJ0Vycm9yIHByb2Nlc3NpbmcgaW1hZ2UnLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiZmlsZSIsImdldCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImJ5dGVzIiwiYXJyYXlCdWZmZXIiLCJiYXNlNjRJbWFnZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbWFnZSIsIm9rIiwiZXJyb3JUZXh0IiwidGV4dCIsIkVycm9yIiwicHJlZGljdGlvbiIsInN1Y2Nlc3MiLCJwcmVkaWN0aW9ucyIsImRldGFpbHMiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/predict/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpredict%2Froute&page=%2Fapi%2Fpredict%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredict%2Froute.ts&appDir=C%3A%5CUsers%5CJasminB%5COneDrive%5CDesktop%5CMission%20One%5Cturners_karts%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJasminB%5COneDrive%5CDesktop%5CMission%20One%5Cturners_karts&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();