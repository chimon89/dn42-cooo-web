<template>
  <div class="drawer">
    <input id="co-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="co-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li class="menu-title">
          <span>COOO NET</span>
        </li>
        <li><router-link :class="$route.path === '/home' ? 'active': ''" to="/home">主页</router-link></li>
        <li><router-link :class="$route.path === '/nodes' ? 'active': ''" to="/nodes">节点信息</router-link></li>
        <li><a class="link" href="https://stats.uptimerobot.com/gyMp8cqq10" target="_blank">节点状态</a></li>
        <li class="menu-title">
          <span>服务</span>
        </li>
        <li><a class="link" href="https://lg.dn42.cooo.cool" target="_blank">Looking Glass <span class="badge badge-sm">ClearNet</span></a></li>
        <li><a class="link" href="https://lg.chimon.dn42" target="_blank">Looking Glass <span class="badge badge-sm">DN42 Only</span></a></li>
        <li><a class="link" href="https://whatismyip.chimon.dn42" target="_blank">What is MyIP? <span class="badge badge-sm">DN42 Only</span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrawerView"
}
</script>

<style scoped>

</style>
