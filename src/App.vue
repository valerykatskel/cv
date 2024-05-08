<template>
  <div id="app">
    <my-cv />
  </div>
</template>

<script>
import MyCv from "./components/MyCv.vue";

export default {
  name: "App",
  components: {
    MyCv,
  },
};
</script>

<style lang="scss">
:root,
body,
html {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  box-sizing: border-box;
}
body {
  font-family: Helvetica;
}
body,
h1,
p {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
}
body,
p {
  font-size: 1.6rem;
  line-height: 1.5;
}

#app {
  width: 21cm;
  height: 29.7cm;
  margin: 0 auto;
}
a {
  padding: 0;
}
body,
h2,
h3,
h4,
html,
img,
span {
  outline: 0;
}
a {
  text-decoration: none;
}
body,
div,
h2,
h3,
h4,
html,
img,
li,
p,
span,
ul {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
}
a {
  margin: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
}
a {
  font-weight: 600;
}

a {
  background-color: transparent;
  border: 0;
}
a,
a:visited {
  color: #0073b1;
}
a:focus,
a:hover {
  text-decoration: underline;
  color: #006097;
}
a:active {
  color: #004b7c;
}
a:visited {
  color: #665ed0;
}
a:visited:hover {
  color: #544bc2;
}
a:visited:active {
  color: #4034b0;
}
body,
h2,
h3,
h4,
p {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
}
body,
p {
  font-size: 1.6rem;
  line-height: 1.5;
}
h2 {
  font-size: 3.2rem;
  line-height: 1.25;
}
h3 {
  font-size: 2.4rem;
  line-height: 1.33333;
}
h4 {
  font-size: 2rem;
  line-height: 1.4;
}
.t-black {
  color: rgba(0, 0, 0, 0.9);
}
.t-bold {
  font-weight: 600;
}
.t-normal {
  font-weight: 400;
}
.t-14 {
  font-size: 1.4rem;
  line-height: 1.42857;
}
.t-16 {
  font-size: 1.6rem;
  line-height: 1.5;
}
.t-18 {
  font-size: 1.8rem;
  line-height: 1.33333;
}
li-icon[type$="-icon"] > svg {
  vertical-align: top;
}
li-icon {
  display: inline-block;
  overflow: hidden;
  position: relative;
}
li-icon > svg {
  display: block;
  margin: auto;
}
li-icon svg[data-supported-dps="16x16"] {
  width: 1.6rem;
  height: 1.6rem;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
html {
  font-size: 62.5%;
}
:root,
body,
html {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  box-sizing: border-box;
}
*,
:after,
:before {
  box-sizing: inherit;
}
a[href] {
  touch-action: manipulation;
}
.container-with-shadow {
  padding: 16px;
  background-color: #fff;
  background-clip: padding-box;
  transition: box-shadow 83ms;
}
.container-with-shadow {
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
}
@media screen and (-ms-high-contrast: active) {
  .container-with-shadow {
    border: 1px solid activeborder;
  }
}
.link-without-hover-visited.link-without-hover-visited {
  background-color: transparent;
  border: 0;
  font-weight: 600;
}
.link-without-hover-visited.link-without-hover-visited {
  text-decoration: none;
  color: #0073b1;
}
.link-without-hover-visited.link-without-hover-visited:visited {
  color: #0073b1;
}
.link-without-hover-visited.link-without-hover-visited:focus,
.link-without-hover-visited.link-without-hover-visited:hover {
  text-decoration: underline;
  color: #006097;
}
.link-without-hover-visited.link-without-hover-visited:active {
  color: #004b7c;
}
.link-without-hover-visited.link-without-hover-visited:hover {
  text-decoration: none;
}
.link-without-visited-state:not(:hover).t-black {
  color: rgba(0, 0, 0, 0.9);
}
.link-without-visited-state:not(:hover).t-black--light {
  color: rgba(0, 0, 0, 0.6);
}
.mr1 {
  margin-right: 4px !important;
}
.mb2 {
  margin-bottom: 8px !important;
}
.mr2 {
  margin-right: 8px !important;
}
.mt2 {
  margin-top: 8px !important;
}
.mb4 {
  margin-bottom: 16px !important;
}
.mt4 {
  margin-top: 16px !important;
}
.p0 {
  padding: 0 !important;
}
.pv4 {
  padding-bottom: 16px !important;
}
.pv4 {
  padding-top: 16px !important;
}
.pl6 {
  padding-left: 32px !important;
}
.display-flex {
  display: flex !important;
}
.full-width {
  width: 100% !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.flex-shrink-zero {
  flex-shrink: 0 !important;
}
.white-space-pre-wrap {
  white-space: pre-wrap !important;
}
.visually-hidden {
  white-space: nowrap !important;
}
.v-align-middle {
  vertical-align: middle !important;
}
.visually-hidden {
  display: block !important;
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
}
.ghosted {
  opacity: 0.3 !important;
}
.break-words {
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
}
@supports (-moz-appearance: none) and (display: contents) {
}

.cv-section-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-bottom: 16px;
  margin-top: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.cv-section-item:last-child {
  padding-bottom: 0;
}

.cv-section-items {
  margin-top: 15px;
  margin-bottom: 15px;
  list-style-type: none;
}
.cv-section-item img {
  margin-top: 6px;
}
.cv-section-item:last-of-type {
  border-bottom: none;
}
.resume-builder-contact-info__field-container {
  display: flex;
  align-items: center;
  min-width: 50%;
  margin-bottom: 8px;
  padding: 0 4px;
}
.resume-builder-contact-info__email-icon {
  top: 2px;
  margin-right: 4px;
  opacity: 0.6;
}
@media print {
}
</style>
