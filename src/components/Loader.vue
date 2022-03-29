<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <div
        data-testid="loader"
        class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
      ></div>
    </div>
  </div>
</template>

<style>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
