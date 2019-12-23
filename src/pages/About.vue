<template>
  <layout>
    <div class="bg-dark container px-xl-0">
      <div class="row">
        <div class="col-12">
          <h2 class="color-white mb-35 small">How to contribute</h2>
          <p class="f-18 color-white">使用公司email申請airtable的編輯權限</p>
          <div class="px-30 pt-30 pb-30 radius10 bg-white" id="copy_from_me"><pre class="m-0 f-16 lh-22" ref="airTableUrl">https://airtable.com/invite/l?inviteId=invXUnjxa8bJxThEy&inviteToken=63af32dba5090a694dcc2d1be1e2dc532ae0b4b357eae8e3edc7aab5042ec759</pre>
          </div>
          <div class="d-lg-flex justify-content-end">
            <button class="mt-20 btn sm border-gray action-1 color-main js-copy-btn" @click="copyStringToClipboard">Copy</button>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
export default {
  methods: {
    copyStringToClipboard() {
      var el = document.createElement('textarea');
      el.value = this.$refs.airTableUrl.innerHTML;
      el.setAttribute('readonly', '');
      el.style = {position: 'absolute', left: '-9999px'};
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  }
}
</script>