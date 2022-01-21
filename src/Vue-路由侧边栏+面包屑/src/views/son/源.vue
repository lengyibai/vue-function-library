<template>
  <div>
    <!-- 用于子路由中的父路由展示 -->
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
