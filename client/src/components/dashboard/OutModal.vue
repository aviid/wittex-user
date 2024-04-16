<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5" id="staticBackdropLabel">Add New Shipment</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row mb-2">
                <div class="col-md-8">
                    <input type="text" class="form-control mb-2" placeholder="Item" />
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control mb-2" placeholder="Weight(KG)" />
                </div>
            </div>
            <textarea class="form-control mb-2" placeholder="Pickup Address"></textarea>
            <textarea class="form-control mb-2" placeholder="Destination Address"></textarea>

            <div class="row mb-2">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Sender's Name" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Receiver's Name" />
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Sender's Mobile" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Receiver's Mobile" />
              </div>
            </div>

            <div class="row mb-2">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Amount(N)" />
              </div>
              <div class="col-md-6">
                <input type="text" disabled class="form-control" placeholder="Package Registered" />
              </div>
            </div>

            <select class="form-control">
              <option value="batch">BTC2309093 James Doe</option>
              <option value="batch">BTC2309094 Jane Doe</option>
            </select>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Add Shipment</button>
        </div>
      </div>
    </div>
  </div>
</template>



