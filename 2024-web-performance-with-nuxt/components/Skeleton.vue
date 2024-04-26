<template>
  <div>
    <ul class="o-vertical-spacing o-vertical-spacing--l">
      <li class="blog-post o-media">
        <div class="o-media__figure">
          <span class="skeleton-box" style="width: 100px; height: 80px"></span>
        </div>
        <div class="o-media__body">
          <div class="o-vertical-spacing">
            <h3 class="blog-post__headline">
              <span class="skeleton-box" style="width: 55%"></span>
            </h3>
            <p>
              <span class="skeleton-box" style="width: 80%"></span>
              <span class="skeleton-box" style="width: 90%"></span>
              <span class="skeleton-box" style="width: 83%"></span>
              <span class="skeleton-box" style="width: 80%"></span>
            </p>
            <div class="blog-post__meta">
              <span class="skeleton-box" style="width: 70px"></span>
            </div>
          </div>
        </div>
      </li>
      <li class="blog-post o-media">
        <div class="o-media__figure">
          <span class="skeleton-box" style="width: 100px; height: 80px"></span>
        </div>
        <div class="o-media__body">
          <div class="o-vertical-spacing">
            <h3 class="blog-post__headline">
              <span class="skeleton-box" style="width: 55%"></span>
            </h3>
            <p>
              <span class="skeleton-box" style="width: 80%"></span>
              <span class="skeleton-box" style="width: 90%"></span>
              <span class="skeleton-box" style="width: 83%"></span>
              <span class="skeleton-box" style="width: 80%"></span>
            </p>
            <div class="blog-post__meta">
              <span class="skeleton-box" style="width: 70px"></span>
            </div>
          </div>
        </div>
      </li>
      <li class="blog-post o-media">
        <div class="o-media__figure">
          <span class="skeleton-box" style="width: 100px; height: 80px"></span>
        </div>
        <div class="o-media__body">
          <div class="o-vertical-spacing">
            <h3 class="blog-post__headline">
              <span class="skeleton-box" style="width: 55%"></span>
            </h3>
            <p>
              <span class="skeleton-box" style="width: 80%"></span>
              <span class="skeleton-box" style="width: 90%"></span>
              <span class="skeleton-box" style="width: 83%"></span>
              <span class="skeleton-box" style="width: 80%"></span>
            </p>
            <div class="blog-post__meta">
              <span class="skeleton-box" style="width: 70px"></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.skeleton-box {
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;
}
.skeleton-box::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  -webkit-animation: shimmer 5s infinite;
  animation: shimmer 5s infinite;
  content: "";
}
@-webkit-keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.blog-post__headline {
  font-size: 1.25em;
  font-weight: bold;
}
.blog-post__meta {
  font-size: 0.85em;
  color: #6b6b6b;
}

.o-media {
  display: flex;
}
.o-media__body {
  flex-grow: 1;
  margin-left: 1em;
}

.o-vertical-spacing > * + * {
  margin-top: 0.75em;
}
.o-vertical-spacing--l > * + * {
  margin-top: 2em;
}
</style>
