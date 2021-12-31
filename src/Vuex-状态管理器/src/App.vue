<template>
  <div class="app">
    <hello-vuex />
    <table>
      <th>描述</th>
      <th>值</th>
      <tr>
        <td>获取变量</td>
        <td>{{ $store.state.counter }}</td>
      </tr>
      <tr>
        <td>获取getter计算后的值</td>
        <td>{{ $store.getters.fn }}</td>
      </tr>
      <tr>
        <td>获取getter自己的函数进行计算的值</td>
        <td>{{ $store.getters.fn1 }}</td>
      </tr>
      <tr>
        <td>学生</td>
        <td>{{ $store.state.arr }}</td>
      </tr>
      <tr>
        <td>年龄大于20</td>
        <td>{{ $store.getters.filterAge(18) }}</td>
      </tr>
      <tr>
        <td>lyb改成moduleA</td>
        <td>{{ $store.state.moduleA.name }}</td>
      </tr>
      <tr>
        <td>moudleA延迟一秒改成冷弋白</td>
        <td>{{ $store.getters.fn9 }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  import HelloVuex from './components/HelloVuex.vue';
  export default {
    components: { HelloVuex },
  };
</script>
<style scope>
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  table {
    margin: 50px auto;
    border-collapse: collapse;
    border-spacing: 0;
  }

  th,
  td {
    text-align: center;
    padding: 5px;
    border: 1px solid #000;
  }

  thead {
    text-align: center;
  }
</style>
