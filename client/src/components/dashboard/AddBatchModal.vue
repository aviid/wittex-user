<template>
  <div class="modal fade" id="staticBatch" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5" id="staticBackdropLabel">Add New Batch</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <label>Batch ID</label>
            <input type="text" class="form-control mb-2" placeholder="BTCH3989898" disabled />

            <label>Select Rider</label>
            <select class="form-control">
              <option value="Select Rider">Select Rider</option>
              <option value="John">John Doe</option>
              <option value="James">James Doe</option>
              <option value="Jane">Jane Doe</option>
            </select>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Create Batch</button>
        </div>
      </div>
    </div>
  </div>
</template>