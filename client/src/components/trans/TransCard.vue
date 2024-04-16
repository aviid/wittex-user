<template>
  <div class="col-md-9 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h3 class="h3 card-header-title">Transactions</h3>

        <ul class="list-inline ml-auto mb-0">
          <li class="list-inline-item">
            <select class="form-control form-control-sm" v-model="selectedMonth">
              <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
            </select>
          </li>
          <li class="list-inline-item">
            <select class="form-control form-control-sm" v-model="selectedYear">
              <option v-for="(year, index) in years" :key="index" :value="year">{{ year }}</option>
            </select>
          </li>
        </ul>
      </header>

      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sender</th>
              <th scope="col">Mobile</th>
              <th scope="col">Reg. Date</th>
              <th scope="col">Amount(N)</th>
              <th class="text-center" scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(transaction, index) in transactions" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ transaction.sender }}</td>
              <td>{{ transaction.mobile }}</td>
              <td>{{ transaction.regDate }}</td>
              <td>{{ formatAmount(transaction.amount) }}</td>
              <td class="text-center">
                <button class="btn btn-sm btn-warning btn-outline-warning">
                  <i class="fa fa-pen"></i>
                </button>
                <button class="btn btn-sm btn-success btn-outline-success ml-1 px-2">
                  <i class="fa fa-eye"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class="card-footer d-flex align-items-center">
        <div class="">
          <button class="btn btn-sm btn-primary mr-2"> 
            <i class="fa fa-arrow-left"></i> 
          </button>
          <button class="btn btn-sm btn-primary"> 
            <i class="fa fa-arrow-right"></i> 
          </button>
        </div>
        <div class="ml-auto">
          <span class="badge badge-info">
            Total Shipment: {{ transactions.length }}
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMonth: 1,
      selectedYear: new Date().getFullYear(),
      months: [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ],
      years: Array.from({ length: 12 }, (_, i) => new Date().getFullYear() + i),
      transactions: [
        { sender: "Esther Esewi", mobile: "0818484833", regDate: "02/05/2024 4:34pm", amount: 3300 },
        { sender: "Blanche Powers", mobile: "08174983991", regDate: "02/05/2024 4:34pm", amount: 2300 },
        { sender: "Jennifer Azena Williams", mobile: "08237878442", regDate: "02/05/2024 1:37pm", amount: 4700 }
      ]
    };
  },
  methods: {
    formatAmount(amount) {
      return new Intl.NumberFormat().format(amount);
    }
  }
};
</script>
