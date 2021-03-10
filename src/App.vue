<template>
  <div id="app">
    <nav class="nav flex flex-wrap items-center justify-between px-4">
      <div class="flex flex-no-shrink items-center mr-6 py-3">
        <router-link to="/">
          <span class="font-semibold text-2xl tracking-tight">qqey.net</span>
        </router-link>
      </div>
      <ul class="md:border-none flex justify-end m-0 w-full md:w-auto">
        <li class="border-t md:border-none">
          <router-link to="/">
            <a
              class="block md:inline-block px-4 py-3 hover:text-yellow-400 no-underline"
              >Home</a
            >
          </router-link>
        </li>

        <li class="border-t md:border-none">
          <router-link to="/about">
            <a
              class="block md:inline-block px-4 py-3 hover:text-yellow-400 no-underline"
              >About</a
            >
          </router-link>
        </li>
        <li class="border-t md:border-none">
          <router-link to="/contact">
            <a
              class="block md:inline-block px-4 py-3 hover:text-yellow-400 no-underline"
              >Contact</a
            >
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style>
</style>
