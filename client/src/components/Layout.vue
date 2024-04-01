<template>
  <div>
    <Header />
    
    <main class="u-main" role="main">
      <Sidebar :page="page" />
      <div class="u-content">
        <div class="u-body">
          <slot></slot>
        </div>
      </div>
      <Modal />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Modal from './dashboard/OutModal.vue';
import Sidebar from './Sidebar.vue';

export default {
  components: {
    Header,
    Footer,
    Modal,
    Sidebar
  },
  props: {
    page: String // Assuming 'page' is passed as a prop to determine the active link
  }
};
</script>

