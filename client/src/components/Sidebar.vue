<template>
  <aside id="sidebar" class="u-sidebar">
    <div class="u-sidebar-inner">
      <header class="u-sidebar-header">
        <a class="u-sidebar-logo" href="/">
          <img class="img-fluid" src="./assets/img/logo.png" width="124" alt="WiitEx Dashboard" />
        </a>
      </header>

      <nav class="u-sidebar-nav">
        <ul class="u-sidebar-nav-menu u-sidebar-nav-menu--top-level">
          <li class="u-sidebar-nav-menu__item">
            <a :class="{ 'u-sidebar-nav-menu__link': true, 'active': page === 'dashboard' }" href="/dash">
              <i class="fa fa-th-large u-sidebar-nav-menu__item-icon"></i>
              <span class="u-sidebar-nav-menu__item-title">Dashboard</span>
            </a>
          </li>

          <li class="u-sidebar-nav-menu__item">
            <a :class="{ 'u-sidebar-nav-menu__link': true, 'active': page === 'shipment' }" href="/shipment">
              <i class="fas fa-box u-sidebar-nav-menu__item-icon"></i>
              <span class="u-sidebar-nav-menu__item-title">Shipment</span>
            </a>
          </li>

          <li class="u-sidebar-nav-menu__item">
            <a :class="{ 'u-sidebar-nav-menu__link': true, 'active': page === 'tracking' }" href="/tracking">
              <i class="fas fa-map-marker-alt u-sidebar-nav-menu__item-icon"></i>
              <span class="u-sidebar-nav-menu__item-title">Tracking</span>
            </a>
          </li>

          <li class="u-sidebar-nav-menu__item">
            <a :class="{ 'u-sidebar-nav-menu__link': true, 'active': page === 'rider' }" href="/rider">
              <i class="fas fa-motorcycle u-sidebar-nav-menu__item-icon"></i>
              <span class="u-sidebar-nav-menu__item-title">Rider</span>
            </a>
          </li>
          <hr />

          <li class="u-sidebar-nav-menu__item">
            <a :class="{ 'u-sidebar-nav-menu__link': true, 'active': page === 'warehouse' }" href="/warehouse">
              <i class="fas fa-warehouse u-sidebar-nav-menu__item-icon"></i>
              <span class="u-sidebar-nav-menu__item-title">Warehouse</span>
            </a>
          </li>
          <li class="u-sidebar-nav-menu__item">
            <a :class="{ 'u-sidebar-nav-menu__link': true, 'active': page === 'trans' }" href="/trans">
              <i class="fas fa-wallet u-sidebar-nav-menu__item-icon"></i>
              <span class="u-sidebar-nav-menu__item-title">Transactions</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    page: String // Assuming 'page' is passed as a prop to determine the active link
  }
};
</script>

