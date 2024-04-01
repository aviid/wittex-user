<template>
  <div class="col-md-8 mb-4">
    <div class="card">
      <header class="card-header d-flex align-items-center">
        <h2 class="h3 card-header-title">Track History</h2>
        <ul class="list-inline ml-auto mb-0">
          <li class="list-inline-item mr-3">
            <select class="form-control form-control-sm" v-model="selectedMonth">
              <option>Month</option>
              <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
            </select>
          </li>
          <li class="list-inline-item mr-3">
            <input type="text" class="form-control form-control-sm" placeholder="Search..." v-model="searchQuery" />
          </li>
        </ul>
      </header>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Sender</th>
              <th scope="col">Receiver</th>
              <th scope="col">Status</th>
              <th class="text-right" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filteredItems" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.sender }}</td>
              <td>{{ item.receiver }}</td>
              <td>
                <span :class="statusBadgeClass(item.status)">{{ item.status }}</span>
              </td>
              <td class="text-right">
                <button class="btn btn-sm btn-outline-success" @click="viewItem(index)">
                  <i class="fa fa-eye"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer class="card-footer">
        <button class="btn btn-primary btn-block" @click="loadMore">More</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackingCard',
  data() {
    return {
      selectedMonth: null,
      searchQuery: '',
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      items: [
        { title: 'Bags of Gold', sender: 'John Alabi', receiver: 'John Amadin Win', status: 'On Route' },
        { title: '13kg bag of rice', sender: 'Wilson Ehigiator', receiver: 'John Amadin Win', status: 'Delivered' }
      ]
    };
  },
  computed: {
    filteredItems() {
      const query = this.searchQuery.toLowerCase();
      return this.items.filter(item => {
        return item.title.toLowerCase().includes(query) ||
          item.sender.toLowerCase().includes(query) ||
          item.receiver.toLowerCase().includes(query);
      });
    }
  },
  methods: {
    statusBadgeClass(status) {
      return {
        'badge': true,
        'badge-soft-warning': status === 'On Route',
        'badge-soft-success': status === 'Delivered'
      };
    },
    viewItem(index) {
      // Handle viewing item
    },
    loadMore() {
      // Handle loading more items
    }
  }
};
</script>
