<template>
  <div>
    <div class="flex flex-nowrap">
      <img
        src="https://avatars.githubusercontent.com/u/26848713?s=460&u=b5c630322f32d86c35ec2a62469f36502755d83c&v=4"
        alt="プロフィール画像"
        title="プロフィール画像"
        class="rounded-full h-52 w-52 md:h-72 md:w-72 m-6"
      />
      <div class="flex flex-col">
        <font-awesome-icon
          class="text-6xl md:text-7xl ml-20 md:ml-40 mt-10 cursor-pointer"
          :icon="['fab', 'twitter']"
          @click="twitter()"
        />
        <font-awesome-icon
          class="text-6xl md:text-7xl ml-20 md:ml-40 mt-3 cursor-pointer"
          :icon="['fab', 'github']"
          @click="github()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    twitter: function () {
      window.open("https://twitter.com/mikan_54951");
    },
    github: function () {
      window.open("https://github.com/hihumikan");
    },
  },
};
</script>

<style></style>
